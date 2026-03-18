import React, { useState, useEffect } from 'react';
import { Header, Footer, Modal } from './components/Layout';
import { Landing } from './components/Landing';
import { Dashboard } from './components/Dashboard';
import { AdminPanel } from './components/AdminPanel';
import { SubView, User } from './types';
import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

const AppContent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Auth State
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    
    // Modal State
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [isSurveyModalOpen, setSurveyModalOpen] = useState(false);
    const [contactSubject, setContactSubject] = useState('');

    // Check auth on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('a92_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock Login
        const mockUser = { name: "Trader", email: "trader@a92.lab", level: "Pro" };
        localStorage.setItem('a92_user', JSON.stringify(mockUser));
        setUser(mockUser);
        setIsLoggedIn(true);
        setLoginModalOpen(false);
        navigate('/dashboard');
    };

    const handleDemoLogin = () => {
        const demoUser = { name: "Guest User", email: "guest@a92.lab", level: "Newbie" };
        localStorage.setItem('a92_user', JSON.stringify(demoUser));
        setUser(demoUser);
        setIsLoggedIn(true);
        navigate('/dashboard');
    };

    const handleLogout = () => {
        localStorage.removeItem('a92_user');
        setIsLoggedIn(false);
        setUser(null);
        navigate('/');
    };

    const handleNavRequest = (view: SubView | 'dashboard') => {
        if (view === 'dashboard') {
            if (isLoggedIn) navigate('/dashboard');
            else setLoginModalOpen(true);
        } else {
            navigate(view === 'home' ? '/' : `/${view}`);
        }
    };

    const handleRequestAccess = (subject: string) => {
        if (subject === 'Hero Start' || subject === 'Free Training' || subject === 'Registration') {
            if (isLoggedIn && subject !== 'Registration') {
                navigate('/dashboard');
            } else {
                setSurveyModalOpen(true);
            }
        } else {
            setContactSubject(subject);
            setContactModalOpen(true);
        }
    };

    const handleSurveySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string || 'Student';
        
        // Register/Login user automatically after survey
        const newUser = { name: name, email: 'student@a92.lab', level: 'Newbie' };
        localStorage.setItem('a92_user', JSON.stringify(newUser));
        setUser(newUser);
        setIsLoggedIn(true);
        
        setSurveyModalOpen(false);
        navigate('/dashboard');
    };

    // Determine current view for Header highlighting
    const getCurrentView = (): string => {
        const path = location.pathname.substring(1);
        return path === '' ? 'home' : path;
    };

    return (
        <div className="min-h-screen bg-background text-gray-100 font-sans selection:bg-white selection:text-black">
            {/* Header is always visible unless specified otherwise */}
            {location.pathname !== '/dashboard' && location.pathname !== '/admin' && (
                <Header 
                    currentView={getCurrentView()} 
                    onNavigate={handleNavRequest} 
                    onLoginClick={() => setLoginModalOpen(true)}
                    isLoggedIn={isLoggedIn}
                />
            )}
            
            {/* Special Header logic for Admin/Dashboard if needed, or reuse Header */}
            {(location.pathname === '/dashboard' || location.pathname === '/admin') && (
                 <Header 
                    currentView={getCurrentView()} 
                    onNavigate={handleNavRequest} 
                    onLoginClick={() => setLoginModalOpen(true)}
                    isLoggedIn={isLoggedIn}
                />
            )}

            <Routes>
                <Route path="/" element={<Landing subView="home" onRequestAccess={handleRequestAccess} onDemoLogin={handleDemoLogin} />} />
                <Route path="/training" element={<Landing subView="training" onRequestAccess={handleRequestAccess} onDemoLogin={handleDemoLogin} />} />
                <Route path="/exchanges" element={<Landing subView="exchanges" onRequestAccess={handleRequestAccess} onDemoLogin={handleDemoLogin} />} />
                <Route path="/bot" element={<Landing subView="bot" onRequestAccess={handleRequestAccess} onDemoLogin={handleDemoLogin} />} />
                <Route path="/articles" element={<Landing subView="articles" onRequestAccess={handleRequestAccess} onDemoLogin={handleDemoLogin} />} />
                <Route path="/community" element={<Landing subView="community" onRequestAccess={handleRequestAccess} onDemoLogin={handleDemoLogin} />} />
                
                <Route 
                    path="/dashboard" 
                    element={
                        isLoggedIn && user ? (
                            <Dashboard user={user} onLogout={handleLogout} />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    } 
                />

                <Route path="/admin" element={<AdminPanel />} />
            </Routes>

            {location.pathname !== '/dashboard' && location.pathname !== '/admin' && <Footer />}

            {/* Login Modal */}
            <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} title="Личный кабинет">
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Email / Telegram</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="user@example.com" required />
                    </div>
                    <div>
                         <label className="block text-sm text-gray-400 mb-1">Пароль</label>
                        <input type="password" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                        Войти
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        Нет аккаунта? <button type="button" onClick={() => { setLoginModalOpen(false); handleRequestAccess('Registration'); }} className="text-white hover:underline">Зарегистрироваться</button>
                    </p>
                </form>
            </Modal>

            {/* Contact Modal */}
            <Modal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} title="Оставить заявку">
                <div className="mb-4 text-sm text-blue-400">Тема: {contactSubject}</div>
                <form onSubmit={(e) => { e.preventDefault(); alert("Заявка отправлена!"); setContactModalOpen(false); }} className="space-y-4">
                    <input type="text" placeholder="Имя" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500" required />
                    <input type="text" placeholder="Telegram @username" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500" required />
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Отправить
                    </button>
                </form>
            </Modal>

            {/* Survey / Training Start Modal (Now acts as Registration) */}
            <Modal isOpen={isSurveyModalOpen} onClose={() => setSurveyModalOpen(false)} title="Регистрация">
                <form onSubmit={handleSurveySubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Ваше Имя</label>
                        <input name="name" type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                            <label className="block text-sm text-gray-400 mb-1">Возраст</label>
                            <input name="age" type="number" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" required />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Пол</label>
                            <select name="gender" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors">
                                <option value="m">Мужской</option>
                                <option value="f">Женский</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Ваш опыт в крипте</label>
                        <select name="experience" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors">
                            <option value="newbie">Новичок (0-6 мес)</option>
                            <option value="trader">Трейдер (6-12 мес)</option>
                            <option value="experienced">Опытный (1-3 года)</option>
                            <option value="pro">Pro (3+ года)</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-2">
                        Получить доступ к урокам
                    </button>
                    <p className="text-xs text-center text-gray-500">Доступ к платформе бесплатный</p>
                </form>
            </Modal>
        </div>
    );
};

export default function App() {
    return (
        <HashRouter>
            <AppContent />
        </HashRouter>
    );
}