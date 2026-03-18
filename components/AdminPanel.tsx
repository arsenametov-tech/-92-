import React from 'react';
import { ICONS } from '../constants';

interface StudentData {
    id: string;
    name: string;
    email: string;
    currentLesson: string;
    isPaid: boolean;
    lastActive: string;
}

const MOCK_STUDENTS: StudentData[] = [
    { id: '1', name: 'Алексей Смирнов', email: 'alex.sm@gmail.com', currentLesson: '1.2 Как работают кошельки', isPaid: true, lastActive: '2 мин. назад' },
    { id: '2', name: 'Мария Иванова', email: 'maria.crypto@yandex.ru', currentLesson: '1.1 Что такое Биткоин?', isPaid: false, lastActive: '1 день назад' },
    { id: '3', name: 'Дмитрий Волков', email: 'volkov.d@proton.me', currentLesson: '2.1 Регистрация на бирже', isPaid: true, lastActive: '5 часов назад' },
    { id: '4', name: 'Елена Кузнецова', email: 'elena.kuz@mail.ru', currentLesson: 'Введение', isPaid: false, lastActive: '3 дня назад' },
    { id: '5', name: 'Сергей Петров', email: 'serg.p2p@gmail.com', currentLesson: '3.1 Технический анализ', isPaid: true, lastActive: 'Online' },
    { id: '6', name: 'Анна Соколова', email: 'anna.sok@gmail.com', currentLesson: '1.2 Как работают кошельки', isPaid: false, lastActive: '1 час назад' },
    { id: '7', name: 'Максим Лебедев', email: 'max.leb@yandex.ru', currentLesson: 'Завершен: Крипто Старт', isPaid: true, lastActive: '10 мин. назад' },
];

export const AdminPanel: React.FC = () => {
    return (
        <div className="min-h-screen bg-background pt-24 px-6 animate-fade-in">
            <div className="container mx-auto max-w-7xl">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Админ-панель</h1>
                        <p className="text-gray-400 text-sm">Управление студентами и отслеживание прогресса</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-surface border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/5 flex items-center gap-2">
                            <ICONS.Filter className="w-4 h-4" /> Фильтр
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 flex items-center gap-2">
                            <ICONS.ArrowRight className="w-4 h-4" /> Экспорт CSV
                        </button>
                    </div>
                </div>

                {/* Table Card */}
                <div className="bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/20 border-b border-white/10">
                                    <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Имя студента</th>
                                    <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Текущий урок</th>
                                    <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Оплачено</th>
                                    <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Активность</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {MOCK_STUDENTS.map((student) => (
                                    <tr key={student.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-bold text-white text-xs">
                                                    {student.name.charAt(0)}
                                                </div>
                                                <span className="font-bold text-white group-hover:text-blue-400 transition-colors">{student.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <span className="text-gray-400 text-sm font-mono">{student.email}</span>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                                <ICONS.BookOpen className="w-4 h-4 text-gray-500" />
                                                {student.currentLesson}
                                            </div>
                                        </td>
                                        <td className="p-5 text-center">
                                            {student.isPaid ? (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                                                    <ICONS.CheckCircle2 className="w-3 h-3" /> Да
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold">
                                                    <ICONS.X className="w-3 h-3" /> Нет
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-5 text-right">
                                            <span className={`text-xs font-medium ${student.lastActive === 'Online' ? 'text-green-400' : 'text-gray-500'}`}>
                                                {student.lastActive}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Pagination / Footer */}
                    <div className="p-4 border-t border-white/10 bg-black/20 flex justify-between items-center text-xs text-gray-500">
                        <div>Показано {MOCK_STUDENTS.length} из 142 студентов</div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 rounded hover:bg-white/10 disabled:opacity-50">Назад</button>
                            <button className="px-3 py-1 rounded hover:bg-white/10 text-white">1</button>
                            <button className="px-3 py-1 rounded hover:bg-white/10">2</button>
                            <button className="px-3 py-1 rounded hover:bg-white/10">3</button>
                            <button className="px-3 py-1 rounded hover:bg-white/10">Вперед</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};