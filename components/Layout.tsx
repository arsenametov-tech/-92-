import React from 'react';
import { ICONS } from '../constants';
import { SubView } from '../types';

interface HeaderProps {
    currentView: string;
    onNavigate: (view: any) => void;
    onLoginClick: () => void;
    isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onLoginClick, isLoggedIn }) => {
    const navItems: { id: SubView; label: string; icon: any }[] = [
        { id: 'home', label: 'Главная', icon: ICONS.Home },
        { id: 'training', label: 'Обучение', icon: ICONS.BookOpen },
        { id: 'bot', label: 'Бот', icon: ICONS.Zap },
        { id: 'exchanges', label: 'Биржи', icon: ICONS.LayoutGrid },
        { id: 'articles', label: 'Статьи', icon: ICONS.Newspaper },
        { id: 'community', label: 'Family', icon: ICONS.Users },
    ];

    return (
        <>
            {/* Top Header (Mobile & Desktop) */}
            <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/5">
                <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                    <div onClick={() => onNavigate('home')} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 overflow-hidden relative bg-black flex items-center justify-center">
                            <img 
                                src="https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/619634881_25997027756587942_6357465962388678766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3nxOOUyHRpwQ7kNvwF0xm5k&_nc_oc=AdljAFa9tmCgcrAebzBJGutVAbqLOIQgp4bRQ1zrDIlrM2XsUzQh12QcfMy7h_QgCOjLrPMkStY7MzcZw2OTvATl&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=1NKWxfWHbQKiQd_9CW14uA&oh=00_AfvlfJlPyEfiplvbeAgOP7Um8myHEfxHxULcP8jtbRcytA&oe=698BB9C6" 
                                alt="A92 Logo" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-lg md:text-xl font-bold tracking-tighter group-hover:text-gray-300 transition-colors text-white">A92LAB</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`text-sm font-medium transition-all ${currentView === item.id ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {isLoggedIn ? (
                            <button 
                                onClick={() => onNavigate('dashboard')} 
                                className="bg-surface border border-white/10 text-white p-2 md:px-6 md:py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                <ICONS.Zap size={16} className="text-yellow-500" />
                                <span className="hidden md:inline">Кабинет</span>
                            </button>
                        ) : (
                            <button 
                                onClick={onLoginClick} 
                                className="bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors"
                            >
                                Войти
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-md border-t border-white/10 z-50 pb-safe">
                <div className="flex justify-around items-center h-16 px-2">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${currentView === item.id ? 'text-blue-500' : 'text-gray-500'}`}
                        >
                            <item.icon className={`w-5 h-5 ${currentView === item.id ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export const Footer: React.FC = () => (
    <footer className="border-t border-white/5 py-12 px-6 mt-auto bg-background mb-16 md:mb-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="font-bold text-white tracking-widest">A92LAB</span>
            </div>
            <div className="flex gap-8">
                <a href="https://t.me/a92_lab" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Telegram</a>
                <a href="https://www.youtube.com/@a92lab" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            <div className="text-center md:text-right">© 2024. All rights reserved.</div>
        </div>
    </footer>
);

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-surface border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl animate-fade-in">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">✕</button>
                <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>
                {children}
            </div>
        </div>
    );
};