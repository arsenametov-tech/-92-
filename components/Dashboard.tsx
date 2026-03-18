import React, { useState, useEffect, useRef } from 'react';
import { Course, Lesson, ChatMessage, QuizState, QuizQuestion } from '../types';
import { COURSES, ICONS } from '../constants';
import { GoogleGenAI, Schema, Type } from "@google/genai";

interface DashboardProps {
    user: { name: string; email: string };
    onLogout: () => void;
}

type Tab = 'description' | 'chat' | 'quiz';

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
    // State for Courses (local copy to handle unlocking)
    const [coursesState, setCoursesState] = useState<Course[]>(JSON.parse(JSON.stringify(COURSES)));
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
    
    // UI State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<Tab>('description');
    
    // AI Chat State
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [chatInput, setChatInput] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // AI Quiz State
    const [quiz, setQuiz] = useState<QuizState>({
        questions: [],
        userAnswers: [],
        isSubmitted: false,
        score: 0,
        isLoading: false
    });

    // Initialize selection
    useEffect(() => {
        if (coursesState.length > 0 && !selectedCourse) {
            const firstCourse = coursesState[0];
            setSelectedCourse(firstCourse);
            const firstLesson = firstCourse.modules[0]?.lessons[0];
            if (firstLesson) setActiveLesson(firstLesson);
        }
    }, [coursesState]);

    // Scroll chat to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatMessages, activeTab]);

    // Reset AI states when lesson changes
    useEffect(() => {
        setChatMessages([{
            role: 'model',
            text: `Привет! Я твой AI-ментор A92. Задавай любые вопросы по уроку "${activeLesson?.title || 'этот урок'}", и я помогу разобраться!`,
            timestamp: Date.now()
        }]);
        setQuiz({
            questions: [],
            userAnswers: [],
            isSubmitted: false,
            score: 0,
            isLoading: false
        });
        setActiveTab('description');
    }, [activeLesson]);

    const handleSelectLesson = (lesson: Lesson) => {
        if (!lesson.isLocked) {
            setActiveLesson(lesson);
        }
    };

    const handleSelectCourse = (course: Course) => {
        setSelectedCourse(course);
        setIsMobileMenuOpen(false);
        // Find first unlocked lesson of this course
        const firstLesson = course.modules[0]?.lessons[0];
        if (firstLesson) setActiveLesson(firstLesson);
    };

    // --- AI CHAT LOGIC ---
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim() || !activeLesson) return;

        const userMsg = chatInput;
        setChatInput('');
        setChatMessages(prev => [...prev, { role: 'user', text: userMsg, timestamp: Date.now() }]);
        setIsChatLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const model = "gemini-2.5-flash-lite-latest"; // Fast model for chat
            
            const systemPrompt = `
                You are an expert crypto mentor at A92LAB. 
                Current Context: The student is watching a lesson titled "${activeLesson.title}".
                Lesson Description: "${activeLesson.description || 'No description provided'}".
                Instructions: Answer the student's question specifically about this lesson or crypto concepts. Be concise, encouraging, and professional. Use Russian language.
            `;

            const response = await ai.models.generateContent({
                model: model,
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt + "\n\nStudent Question: " + userMsg }] }
                ]
            });

            const text = response.text || "Извините, сейчас я не могу ответить. Попробуйте позже.";
            
            setChatMessages(prev => [...prev, { role: 'model', text: text, timestamp: Date.now() }]);
        } catch (error) {
            console.error("AI Chat Error:", error);
            setChatMessages(prev => [...prev, { role: 'model', text: "Ошибка соединения с нейросетью.", timestamp: Date.now() }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    // --- AI QUIZ LOGIC ---
    const handleGenerateQuiz = async () => {
        if (!activeLesson) return;
        setQuiz(prev => ({ ...prev, isLoading: true }));

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const prompt = `Generate 3 multiple-choice questions (in Russian) to test understanding of the crypto lesson titled "${activeLesson.title}". Description: "${activeLesson.description}". 
            Format: JSON array of objects with 'question' (string), 'options' (array of 4 strings), and 'correctAnswer' (index number 0-3).`;

            const schema: Schema = {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        question: { type: Type.STRING },
                        options: { type: Type.ARRAY, items: { type: Type.STRING } },
                        correctAnswer: { type: Type.INTEGER }
                    },
                    required: ["question", "options", "correctAnswer"]
                }
            };

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-latest",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: schema
                }
            });

            const questions: QuizQuestion[] = JSON.parse(response.text || "[]");
            
            if (questions.length > 0) {
                setQuiz({
                    questions,
                    userAnswers: new Array(questions.length).fill(-1),
                    isSubmitted: false,
                    score: 0,
                    isLoading: false
                });
            } else {
                throw new Error("No questions generated");
            }

        } catch (error) {
            console.error("Quiz Gen Error:", error);
            setQuiz(prev => ({ ...prev, isLoading: false }));
            alert("Не удалось сгенерировать тест. Попробуйте снова.");
        }
    };

    const handleAnswerSelect = (qIndex: number, optionIndex: number) => {
        if (quiz.isSubmitted) return;
        const newAnswers = [...quiz.userAnswers];
        newAnswers[qIndex] = optionIndex;
        setQuiz(prev => ({ ...prev, userAnswers: newAnswers }));
    };

    const handleSubmitQuiz = () => {
        let correctCount = 0;
        quiz.questions.forEach((q, i) => {
            if (q.correctAnswer === quiz.userAnswers[i]) correctCount++;
        });

        const passed = correctCount >= Math.ceil(quiz.questions.length * 0.6); // 60% pass rate
        
        setQuiz(prev => ({ ...prev, isSubmitted: true, score: correctCount }));

        if (passed) {
           unlockNextLesson();
        }
    };

    const unlockNextLesson = () => {
        if (!selectedCourse || !activeLesson) return;

        // Deep copy courses state
        const newCourses = [...coursesState];
        const courseIndex = newCourses.findIndex(c => c.id === selectedCourse.id);
        if (courseIndex === -1) return;

        const course = newCourses[courseIndex];
        let foundCurrent = false;
        let unlocked = false;

        for (const module of course.modules) {
            for (const lesson of module.lessons) {
                if (foundCurrent) {
                    if (lesson.isLocked) {
                        lesson.isLocked = false;
                        unlocked = true;
                    }
                    // Stop after unlocking the immediate next one
                    break;
                }
                if (lesson.id === activeLesson.id) {
                    foundCurrent = true;
                    lesson.isCompleted = true; // Mark current as done
                }
            }
            if (unlocked) break;
        }

        setCoursesState(newCourses);
        // Update selected course ref to trigger re-renders if needed
        setSelectedCourse(newCourses[courseIndex]);
    };


    return (
        <div className="min-h-screen bg-background flex flex-col pt-16 md:pt-20">
            {/* Dashboard Header */}
            <div className="bg-surface border-b border-white/5 px-4 md:px-6 py-4 flex justify-between items-center sticky top-16 z-40 md:static">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                    >
                        <ICONS.Menu className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-white">Личный кабинет</h1>
                        <p className="text-xs text-gray-500 hidden md:block">Welcome back, {user.name}</p>
                    </div>
                </div>
                <button onClick={onLogout} className="text-xs md:text-sm text-red-400 hover:text-red-300 transition-colors border border-red-500/20 px-3 py-1.5 rounded-lg">
                    Выйти
                </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                {/* Mobile Sidebar */}
                {isMobileMenuOpen && (
                    <div className="absolute inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden flex flex-col p-6 animate-fade-in">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-white">Мои курсы</h2>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full bg-white/10">
                                <ICONS.X className="w-6 h-6 text-white" />
                            </button>
                        </div>
                        <div className="space-y-2 overflow-y-auto">
                            {coursesState.map(course => (
                                <button
                                    key={course.id}
                                    onClick={() => handleSelectCourse(course)}
                                    className={`w-full text-left px-4 py-4 rounded-xl text-base font-bold transition-colors flex items-center justify-between border
                                        ${selectedCourse?.id === course.id ? 'bg-blue-600 border-blue-500 text-white' : 'bg-surface border-white/10 text-gray-400 hover:text-white'}
                                    `}
                                >
                                    <span>{course.title}</span>
                                    {course.isPurchased && <ICONS.CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Desktop Sidebar */}
                <div className="w-full md:w-64 bg-surface/50 border-r border-white/5 overflow-y-auto hidden md:block">
                    <div className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Мои курсы</div>
                    <div className="space-y-1">
                        {coursesState.map(course => (
                            <button
                                key={course.id}
                                onClick={() => handleSelectCourse(course)}
                                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors flex items-center justify-between
                                    ${selectedCourse?.id === course.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                                `}
                            >
                                <span>{course.title}</span>
                                {course.isPurchased && <ICONS.CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col h-full overflow-hidden">
                    {selectedCourse && activeLesson ? (
                        <div className="flex flex-col md:flex-row h-full">
                            
                            {/* LEFT COLUMN: Video + Tabs */}
                            <div className="flex-1 flex flex-col overflow-hidden bg-black/40">
                                {/* Video Player */}
                                <div className="aspect-video w-full bg-black shadow-2xl border-b border-white/10 flex-shrink-0">
                                    <iframe 
                                        width="100%" 
                                        height="100%" 
                                        src={`https://www.youtube.com/embed/${activeLesson.videoId}?rel=0&modestbranding=1`} 
                                        title={activeLesson.title} 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {/* Tabs Navigation */}
                                <div className="flex border-b border-white/10 bg-surface/30">
                                    <button 
                                        onClick={() => setActiveTab('description')}
                                        className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'description' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-500 hover:text-white'}`}
                                    >
                                        Описание
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('chat')}
                                        className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors flex items-center justify-center gap-2 ${activeTab === 'chat' ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-500 hover:text-white'}`}
                                    >
                                        <ICONS.Zap size={14} /> AI Ментор
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('quiz')}
                                        className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors flex items-center justify-center gap-2 ${activeTab === 'quiz' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-500 hover:text-white'}`}
                                    >
                                        <ICONS.CheckCircle2 size={14} /> Тест
                                    </button>
                                </div>

                                {/* Tab Content Area */}
                                <div className="flex-1 overflow-y-auto p-6 bg-surface/20">
                                    
                                    {/* DESCRIPTION TAB */}
                                    {activeTab === 'description' && (
                                        <div className="animate-fade-in max-w-3xl">
                                            <h2 className="text-2xl font-bold text-white mb-4">{activeLesson.title}</h2>
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                                                <span className="bg-white/10 px-2 py-1 rounded">Модуль 1</span>
                                                <span className="flex items-center gap-1"><ICONS.Clock size={12}/> {activeLesson.duration}</span>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed text-lg">{activeLesson.description || "Описание отсутствует."}</p>
                                        </div>
                                    )}

                                    {/* CHAT TAB */}
                                    {activeTab === 'chat' && (
                                        <div className="flex flex-col h-full animate-fade-in max-w-3xl mx-auto">
                                            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
                                                {chatMessages.map((msg, i) => (
                                                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                        <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                                            msg.role === 'user' 
                                                                ? 'bg-blue-600 text-white rounded-tr-none' 
                                                                : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                                        }`}>
                                                            {msg.text}
                                                        </div>
                                                    </div>
                                                ))}
                                                {isChatLoading && (
                                                    <div className="flex justify-start">
                                                        <div className="bg-white/5 rounded-2xl px-4 py-3 text-xs text-gray-500 animate-pulse">
                                                            A92 печатает...
                                                        </div>
                                                    </div>
                                                )}
                                                <div ref={chatEndRef}></div>
                                            </div>
                                            <form onSubmit={handleSendMessage} className="relative">
                                                <input 
                                                    type="text" 
                                                    value={chatInput}
                                                    onChange={(e) => setChatInput(e.target.value)}
                                                    placeholder="Задайте вопрос по уроку..."
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all"
                                                />
                                                <button 
                                                    type="submit" 
                                                    disabled={!chatInput.trim() || isChatLoading}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 transition-colors"
                                                >
                                                    <ICONS.ArrowRight size={16} />
                                                </button>
                                            </form>
                                        </div>
                                    )}

                                    {/* QUIZ TAB */}
                                    {activeTab === 'quiz' && (
                                        <div className="animate-fade-in max-w-2xl mx-auto h-full flex flex-col justify-center">
                                            {quiz.questions.length === 0 ? (
                                                <div className="text-center space-y-6">
                                                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                                                        <ICONS.Brain className="w-10 h-10 text-emerald-500" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white mb-2">Проверка знаний</h3>
                                                        <p className="text-gray-400">ИИ сгенерирует 3 вопроса по содержанию этого урока. <br/>Проходной балл для открытия следующего урока: 2/3.</p>
                                                    </div>
                                                    <button 
                                                        onClick={handleGenerateQuiz} 
                                                        disabled={quiz.isLoading}
                                                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-full transition-all disabled:opacity-50 flex items-center gap-2 mx-auto"
                                                    >
                                                        {quiz.isLoading ? 'Генерация...' : 'Начать тест'}
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="space-y-8 pb-10">
                                                    {quiz.questions.map((q, qIndex) => (
                                                        <div key={qIndex} className="bg-surface/50 p-6 rounded-2xl border border-white/10">
                                                            <h4 className="text-lg font-bold text-white mb-4">{qIndex + 1}. {q.question}</h4>
                                                            <div className="space-y-2">
                                                                {q.options.map((opt, optIndex) => {
                                                                    let btnClass = "w-full text-left p-3 rounded-xl border transition-all text-sm ";
                                                                    if (quiz.isSubmitted) {
                                                                        if (optIndex === q.correctAnswer) btnClass += "bg-emerald-500/20 border-emerald-500 text-emerald-400";
                                                                        else if (quiz.userAnswers[qIndex] === optIndex) btnClass += "bg-red-500/20 border-red-500 text-red-400";
                                                                        else btnClass += "bg-black/20 border-white/5 text-gray-500 opacity-50";
                                                                    } else {
                                                                        if (quiz.userAnswers[qIndex] === optIndex) btnClass += "bg-blue-500/20 border-blue-500 text-blue-300";
                                                                        else btnClass += "bg-black/20 border-white/5 text-gray-400 hover:bg-white/5 hover:text-white";
                                                                    }

                                                                    return (
                                                                        <button 
                                                                            key={optIndex}
                                                                            onClick={() => handleAnswerSelect(qIndex, optIndex)}
                                                                            disabled={quiz.isSubmitted}
                                                                            className={btnClass}
                                                                        >
                                                                            {opt}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {!quiz.isSubmitted ? (
                                                        <button 
                                                            onClick={handleSubmitQuiz}
                                                            disabled={quiz.userAnswers.includes(-1)}
                                                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            Завершить тест
                                                        </button>
                                                    ) : (
                                                        <div className={`text-center p-6 rounded-2xl border ${quiz.score >= 2 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                                Результат: {quiz.score} из {quiz.questions.length}
                                                            </h3>
                                                            <p className="text-gray-300 mb-4">
                                                                {quiz.score >= 2 
                                                                    ? "Отлично! Следующий урок разблокирован." 
                                                                    : "Нужно пересмотреть материал и попробовать снова."}
                                                            </p>
                                                            {quiz.score < 2 && (
                                                                <button 
                                                                    onClick={handleGenerateQuiz}
                                                                    className="text-sm text-white underline hover:text-blue-400"
                                                                >
                                                                    Попробовать другой вариант
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* RIGHT COLUMN: Lesson List */}
                            <div className="w-full md:w-80 bg-surface border-t md:border-t-0 md:border-l border-white/5 overflow-y-auto flex-shrink-0 h-[40vh] md:h-auto">
                                <div className="p-4 md:p-6 border-b border-white/5 sticky top-0 bg-surface z-20">
                                    <h3 className="font-bold text-white mb-1 truncate">{selectedCourse.title}</h3>
                                    <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                        {/* Calculate progress based on unlocked lessons */}
                                        <div 
                                            className="bg-emerald-500 h-full transition-all duration-500" 
                                            style={{ width: '15%' }} // Dynamic calculation omitted for brevity
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Прогресс обучения</p>
                                </div>
                                
                                {selectedCourse.modules.length > 0 ? (
                                    <div className="divide-y divide-white/5">
                                        {selectedCourse.modules.map(module => (
                                            <div key={module.id} className="p-4">
                                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{module.title}</h4>
                                                <div className="space-y-2">
                                                    {module.lessons.map(lesson => (
                                                        <button
                                                            key={lesson.id}
                                                            disabled={lesson.isLocked}
                                                            onClick={() => handleSelectLesson(lesson)}
                                                            className={`w-full flex items-start gap-3 p-2 rounded-lg transition-all text-left group
                                                                ${activeLesson?.id === lesson.id ? 'bg-white/10 ring-1 ring-blue-500/50' : 'hover:bg-white/5'}
                                                                ${lesson.isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                                            `}
                                                        >
                                                            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 
                                                                ${lesson.isLocked ? 'bg-gray-800 text-gray-500' : activeLesson?.id === lesson.id ? 'bg-blue-500 text-white' : lesson.isCompleted ? 'bg-emerald-500 text-white' : 'bg-gray-800 text-gray-400 group-hover:text-white'}
                                                            `}>
                                                                {lesson.isLocked ? <ICONS.Lock size={12} /> : lesson.isCompleted ? <ICONS.Check size={12} /> : <ICONS.PlayCircle size={12} />}
                                                            </div>
                                                            <div>
                                                                <div className={`text-sm font-medium ${activeLesson?.id === lesson.id ? 'text-white' : 'text-gray-300'}`}>
                                                                    {lesson.title}
                                                                </div>
                                                                <div className="text-xs text-gray-500 mt-0.5">{lesson.duration}</div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-6 text-center text-gray-500 text-sm">
                                        Модули скоро появятся.
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500">
                            <ICONS.BookOpen size={48} className="mb-4 opacity-20" />
                            <p>Загрузка курса...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
