import React from 'react';
import { COURSES, EXCHANGES, ARTICLES, MERCH, ICONS } from '../constants';
import { SubView } from '../types';

interface LandingProps {
    subView: SubView;
    onRequestAccess: (item: string) => void;
    onDemoLogin: () => void;
}

export const Landing: React.FC<LandingProps> = ({ subView, onRequestAccess, onDemoLogin }) => {
    
    const renderHome = () => (
        <div className="animate-fade-in">
             {/* HERO SECTION */}
             <div className="relative py-32 px-6 min-h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/70 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" 
                        alt="Background" 
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 backdrop-blur-sm bg-blue-500/10 border-blue-500/20 text-blue-100 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full animate-pulse bg-blue-500"></span>
                        <span>Наш фокус — на долгосрочном понимании рынка</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-white">
                        Перестаньте гадать. <br/>
                        <span className="text-gray-400">Начните понимать.</span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed drop-shadow-lg">
                        Мы не обещаем "золотые горы" за неделю. Мы даем фундаментальные знания.
                        От первой покупки до управления портфелем — безопасно и системно.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                        <button onClick={() => onRequestAccess('Hero Start')} className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                            Начать обучение <ICONS.Zap className="w-5 h-5" />
                        </button>
                        <a href="https://t.me/a92_lab" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/10 transition-all text-white backdrop-blur-sm flex items-center justify-center">
                            Telegram Канал
                        </a>
                    </div>
                </div>
            </div>
            
            {/* STATS SECTION */}
            <div className="border-y border-white/5 py-12 bg-background relative z-20">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                    {[
                        { val: '100+', label: 'Учеников' },
                        { val: '$1M+', label: 'Сохраненный капитал' },
                        { val: '5', label: 'Лет на рынке' },
                        { val: '3', label: 'Эксперта' }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-3xl font-bold mb-1">{stat.val}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* A92 PHILOSOPHY SECTION */}
            <div className="py-24 px-6 bg-[#0c0c0e] relative overflow-hidden">
                {/* Shimmering Line Effect */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-pulse"></div>
                
                <div className="container mx-auto max-w-6xl relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-white">Философия <span className="text-orange-500">A92LAB</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-surface border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <ICONS.Target className="w-8 h-8 text-blue-500 group-hover:animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Система важнее удачи</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Рынок наказывает за хаос. Мы строим торговые системы, которые работают на дистанции, а не ищем "билет в один конец".
                            </p>
                        </div>

                        <div className="group bg-surface border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                                <ICONS.Brain className="w-8 h-8 text-purple-500 group-hover:animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Психология и Дисциплина</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                90% успеха — это голова. Мы учим контролировать эмоции, чтобы не покупать на хаях и не продавать на страхе.
                            </p>
                        </div>

                        <div className="group bg-surface border border-white/5 p-8 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                <ICONS.Shield className="w-8 h-8 text-emerald-500 group-hover:animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Сначала сохрани</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Главное правило Уоррена Баффетта работает и в крипте. Сначала учимся не терять, потом учимся зарабатывать.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM CTA SECTION */}
            <div className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Готовы погрузиться в мир <br/> цифровых активов?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Начните с базы. Без рисков и вложений. Получите доступ к вводным урокам прямо сейчас.
                    </p>
                    <button 
                        onClick={() => onRequestAccess('Free Training')}
                        className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-lg rounded-full hover:bg-blue-700 hover:scale-105 focus:outline-none ring-offset-2 focus:ring-2 ring-blue-400"
                    >
                        <span>Бесплатное обучение</span>
                        <ICONS.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 -z-10 rounded-full blur-lg opacity-40 bg-blue-500 group-hover:opacity-60 transition-opacity"></div>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderTraining = () => (
         <div className="py-24 px-6 animate-fade-in relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white">Образовательные <span className="text-blue-500">Программы</span></h2>
                    <p className="text-gray-400 text-lg">Системное образование для любого уровня подготовки. От первой покупки криптовалюты до профессионального управления капиталом.</p>
                </div>

                {/* COURSES GRID */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {COURSES.map(c => (
                        <div key={c.id} className="group flex flex-col bg-surface border border-white/5 hover:border-white/20 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1">
                            {/* Card Header (Visual) */}
                            <div className={`h-2 bg-gradient-to-r ${c.color === 'bg-emerald-500' ? 'from-emerald-500 to-teal-400' : c.color === 'bg-blue-500' ? 'from-blue-600 to-indigo-400' : c.color === 'bg-purple-500' ? 'from-purple-600 to-pink-400' : 'from-orange-500 to-amber-300'}`}></div>
                            
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {c.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={`w-10 h-10 rounded-full ${c.color} bg-opacity-10 flex items-center justify-center`}>
                                        <ICONS.BookOpen className={`w-5 h-5 ${c.color.replace('bg-', 'text-')}`} />
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{c.title}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed flex-1">{c.description}</p>

                                {/* Course Features/Meta */}
                                <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-white/5">
                                    <div className="flex items-center gap-3">
                                        <ICONS.Clock className="w-5 h-5 text-gray-500" />
                                        <div>
                                            <div className="text-sm font-bold text-white">4-8 Недель</div>
                                            <div className="text-xs text-gray-500">Длительность</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ICONS.PlayCircle className="w-5 h-5 text-gray-500" />
                                        <div>
                                            <div className="text-sm font-bold text-white">{c.modules.length > 0 ? '12+ Уроков' : 'Индивидуально'}</div>
                                            <div className="text-xs text-gray-500">Формат</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ICONS.Users className="w-5 h-5 text-gray-500" />
                                        <div>
                                            <div className="text-sm font-bold text-white">Community</div>
                                            <div className="text-xs text-gray-500">Доступ в чат</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ICONS.GraduationCap className="w-5 h-5 text-gray-500" />
                                        <div>
                                            <div className="text-sm font-bold text-white">Сертификат</div>
                                            <div className="text-xs text-gray-500">После сдачи</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 mt-auto">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {c.oldPrice && <div className="text-sm text-gray-500 line-through mb-1">{c.oldPrice}</div>}
                                            <div className="text-2xl font-bold text-white">{c.price}</div>
                                        </div>
                                        <button 
                                            onClick={() => onRequestAccess(`Курс: ${c.title}`)}
                                            className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
                                        >
                                            Подробнее <ICONS.ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                    
                                    {/* DEMO MODE BUTTON FOR COURSE 1 */}
                                    {c.id === 'course-1' && (
                                        <button 
                                            onClick={onDemoLogin}
                                            className="w-full mt-3 py-2 text-sm font-bold text-emerald-400 border border-emerald-500/30 rounded-xl hover:bg-emerald-500/10 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <ICONS.PlayCircle className="w-4 h-4" /> Демо режим (Предпросмотр)
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ROADMAP SECTION */}
                <div className="mb-24">
                     <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 mb-4">
                            <ICONS.MapPin className="w-4 h-4" /> ROADMAP
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Путь студента A92</h3>
                     </div>

                     <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30 md:-translate-x-1/2"></div>

                        {[
                            { title: "Старт", time: "Месяц 1", skill: "Безопасность и Покупка", desc: "Вы создадите надежные кошельки, научитесь пользоваться P2P и сделаете первые безопасные транзакции.", icon: ICONS.Shield },
                            { title: "Анализ", time: "Месяц 2", skill: "Понимание Рынка", desc: "Научитесь читать графики, определять тренды и отличать перспективные проекты от скама.", icon: ICONS.BarChart2 },
                            { title: "Практика", time: "Месяц 3-4", skill: "Первые Сделки", desc: "Откроете первые сделки с соблюдением риск-менеджмента. Перестанете терять на эмоциях.", icon: ICONS.TrendingUp },
                            { title: "PRO", time: "Месяц 6+", skill: "Стабильный Доход", desc: "Сформируете собственную торговую стратегию и начнете системно зарабатывать на любой фазе рынка.", icon: ICONS.Crown },
                        ].map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Icon Node */}
                                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 bg-background border-2 border-blue-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <step.icon className="w-5 h-5 text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-12">
                                    <div className={`bg-surface border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className={`text-xs font-bold text-blue-400 mb-1 flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                            <ICONS.Clock className="w-3 h-3" /> {step.time}
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">{step.skill}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                                {/* Empty space for alignment */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                     </div>
                </div>

                 {/* TESTIMONIALS CAROUSEL */}
                 <div className="mb-24">
                    <h3 className="text-3xl font-bold text-white mb-8 px-4">Отзывы учеников</h3>
                    <div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 md:mx-0">
                        {[
                            { name: "Андрей М.", course: "Крипто Старт", text: "Раньше боялся нажать не туда и потерять деньги. После курса появилась уверенность. Кошельки, переводы — всё разложили по полочкам.", rating: 5 },
                            { name: "Елена В.", course: "Личный Архитектор", text: "Менторство стоит каждого цента. Разобрали мои ошибки за прошлый год, пересобрали портфель. Уже вижу зеленый PNL.", rating: 5 },
                            { name: "Сергей К.", course: "Мастерская Трейдинга", text: "Технический анализ давался сложно, но тут объясняют на пальцах. Наконец-то перестал ловить ликвидации.", rating: 4 },
                            { name: "Максим Д.", course: "Крипто-Инвестор", text: "Отличный блок по психологии. Понял, что раньше торговал свои эмоции, а не рынок. Спасибо команде A92.", rating: 5 },
                            { name: "Игорь П.", course: "Pro Group", text: "Комьюнити решает. Когда ты в окружении сильных ребят, растешь быстрее. Сигналы и аналитика на высоте.", rating: 5 },
                        ].map((review, i) => (
                            <div key={i} className="snap-center shrink-0 w-[300px] md:w-[350px] bg-surface border border-white/10 p-6 rounded-2xl flex flex-col relative">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, starI) => (
                                        <ICONS.Star key={starI} className={`w-4 h-4 ${starI < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-700'}`} />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-sm mb-6 flex-1 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-3 mt-auto border-t border-white/5 pt-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-bold text-white text-sm">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{review.name}</div>
                                        <div className="text-xs text-blue-400">{review.course}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

                {/* SYSTEM CORE / PHILOSOPHY SECTION */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl -z-10 blur-xl"></div>
                    <div className="bg-surface/50 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="text-center mb-12">
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-400 mb-4">
                                <ICONS.Zap className="w-4 h-4 text-yellow-400" /> TRADING CORE
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Торговая система <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">A92</span></h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="group p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                    <ICONS.TrendingUp className="w-7 h-7 text-blue-500 group-hover:animate-pulse" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Smart Money & Price Action</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Работаем по комбинированной системе: глубокое понимание зон накопления и распределения институционального капитала (Smart Money) в связке с чтением чистого графика и логикой доставки цены (Price Action).
                                </p>
                            </div>

                             {/* Card 2 */}
                            <div className="group p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                    <ICONS.Shield className="w-7 h-7 text-emerald-500 group-hover:animate-pulse" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">Железный риск-менеджмент</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Сохранить капитал важнее, чем приумножить. Наша система строится на строгом контроле просадки и математическом ожидании каждой сделки.
                                </p>
                            </div>

                             {/* Card 3 */}
                            <div className="group p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                                    <ICONS.Brain className="w-7 h-7 text-purple-500 group-hover:animate-pulse" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Адаптация к алгоритмам</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Мы работаем в среде, управляемой алгоритмами бирж. Наша стратегия — это не статичный набор правил, а гибкая логика, которая адаптируется под смену рыночных фаз.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    const renderExchanges = () => (
        <div className="py-24 px-6 animate-fade-in">
            <div className="container mx-auto max-w-6xl">
                
                {/* Header with Motivation */}
                <div className="mb-16">
                     <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white">Торгуй с <span className="text-green-400">преимуществом</span></h2>
                     <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        Торговать без возврата комиссий — это как выбрасывать деньги на ветер. 
                        Мы договорились с топовыми биржами о лучших условиях для нашего комьюнити. 
                        Забирайте до <span className="text-white font-bold underline decoration-blue-500">40% кэшбека</span> живыми деньгами на свой счет.
                     </p>
                </div>

                 {/* Exchanges Grid */}
                 <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {EXCHANGES.map((ex, index) => (
                         <div key={ex.id} className={`
                            relative flex flex-col rounded-2xl p-6 transition-all duration-300
                            ${ex.isActive ? 'bg-surface border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1' : 'bg-surface/50 border border-white/5 opacity-70 grayscale'}
                         `}>
                            {/* Render "Hot" badge for the first item */}
                            {index === 0 && ex.isActive && (
                                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                                    TOP CHOICE
                                </div>
                            )}

                            <div className="flex justify-between mb-6">
                                <h3 className="text-2xl font-bold text-white">{ex.name}</h3>
                                {ex.isActive && <span className="bg-green-500/10 border border-green-500/20 px-2 py-1 rounded text-xs font-bold text-green-400">{ex.cashback} CASHBACK</span>}
                            </div>
                            
                            <div className="text-3xl font-bold mb-2 text-white">{ex.bonus}</div>
                            <p className="text-gray-400 text-sm mb-6 flex-1">{ex.desc}</p>
                            
                            {ex.isActive ? (
                                <button onClick={() => onRequestAccess(`Биржа: ${ex.name}`)} className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                    Регистрация <ICONS.ArrowRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button disabled className="w-full border border-white/10 text-gray-500 py-3 rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                                    Временно недоступно
                                </button>
                            )}
                            
                            {ex.isActive && <div className="text-xs text-center text-gray-500 mt-3">{ex.reg}</div>}
                        </div>
                    ))}
                 </div>

                 {/* Why Profitable Section */}
                 <div className="mb-24 bg-surface/50 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-xs font-medium text-green-400 mb-4">
                                <ICONS.Wallet className="w-4 h-4" /> PURE MATH
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Почему это <span className="text-green-400">выгодно?</span></h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Трейдинг — это бизнес издержек. Комиссия съедает от 20% до 50% вашей прибыли на дистанции. 
                                Наш кэшбек (Rebate) возвращает эти деньги вам на счет. Это ваша гарантированная прибыль, не зависящая от направления рынка.
                            </p>
                            <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                                <div className="flex justify-between items-center text-sm mb-2">
                                    <span className="text-gray-400">Ваш оборот:</span>
                                    <span className="text-white font-bold">$1,000,000</span>
                                </div>
                                <div className="flex justify-between items-center text-sm mb-2">
                                    <span className="text-gray-400">Комиссия бирже:</span>
                                    <span className="text-red-400 font-bold">-$500</span>
                                </div>
                                <div className="flex justify-between items-center text-lg border-t border-white/10 pt-2">
                                    <span className="text-gray-200">Возврат от A92:</span>
                                    <span className="text-green-400 font-bold">+$200 (40%)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <h4 className="text-white font-bold text-xl mb-4">Как получить условия?</h4>
                            {[
                                { step: 1, title: "Регистрация", desc: "Зарегистрируйтесь по нашей партнерской ссылке на выбранной бирже." },
                                { step: 2, title: "Проверка", desc: "Если у вас уже есть аккаунт — нужно создать новый или подать заявку на перенос." },
                                { step: 3, title: "Торговля", desc: "Торгуйте как обычно. Кэшбек будет приходить автоматически на ваш счет." }
                            ].map((s) => (
                                <div key={s.step} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold shrink-0 border border-white/10">
                                        {s.step}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1">{s.title}</div>
                                        <div className="text-gray-500 text-sm">{s.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                 {/* Reviews Section */}
                 <div className="mb-24">
                     <h3 className="text-3xl font-bold text-white mb-8 text-center">Опыт участников</h3>
                     <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Alex Trader", saved: "+$420", text: "Торгую скальпинг. За месяц набил комиссии на 1000 баксов. 400 вернулось ребейтом. Это оплатило мне подписку на терминал и интернет." },
                            { name: "Elena Crypto", saved: "+$1,250", text: "С большими объемами это мастхэв. Раньше просто дарила эти деньги бирже. Теперь это моя 'подушка безопасности' при стопах." },
                            { name: "Dmitry V.", saved: "+$150", text: "Даже с небольшим депозитом приятно получать возврат. Хватает, чтобы перекрыть мелкие убыточные сделки." }
                        ].map((review, i) => (
                            <div key={i} className="bg-surface p-6 rounded-2xl border border-white/5 relative">
                                <ICONS.Quote className="absolute top-6 right-6 text-white/5 w-8 h-8" />
                                <div className="text-green-400 font-bold text-xl mb-2">{review.saved}</div>
                                <div className="text-gray-500 text-xs uppercase tracking-widest mb-4">Сэкономлено за месяц</div>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                                    <span className="text-white text-sm font-medium">{review.name}</span>
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>

                 {/* Final Manager CTA */}
                 <div className="text-center bg-blue-600/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">Остались вопросы или нужна помощь с переносом?</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Наш менеджер поможет проверить, правильно ли привязался аккаунт, и подскажет, как перенести KYC, если у вас уже есть регистрация.
                    </p>
                    <a href="https://t.me/A92_Support_Bot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105">
                        <ICONS.MessageCircle className="w-5 h-5" /> Написать Менеджеру
                    </a>
                 </div>

            </div>
        </div>
    );

    const renderBot = () => (
        <div className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-background animate-fade-in text-white relative">
             <div className="container mx-auto max-w-6xl">
                
                {/* HERO */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-400 mb-8">
                        <ICONS.Zap className="w-4 h-4" /> A92 ALGO TRADING
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">Заставь деньги <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">работать 24/7</span></h2>
                    <p className="text-xl text-gray-400 italic font-light">Авторский торговый алгоритм. Без эмоций, без усталости, только математика.</p>
                </div>
                
                {/* ANIMATED STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-24">
                     {[
                         { val: '142%', label: 'ROI (Yearly)', icon: ICONS.TrendingUp, color: 'text-green-400' },
                         { val: '78%', label: 'Winrate', icon: ICONS.Target, color: 'text-blue-400' },
                         { val: '2.4', label: 'Profit Factor', icon: ICONS.BarChart2, color: 'text-purple-400' },
                         { val: '4h', label: 'Avg Hold Time', icon: ICONS.Clock, color: 'text-orange-400' },
                     ].map((s, i) => (
                         <div key={i} className="bg-surface/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 group">
                             <div className={`mb-4 ${s.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                                 <s.icon className="w-8 h-8" />
                             </div>
                            <div className={`text-4xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left`}>{s.val}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">{s.label}</div>
                         </div>
                     ))}
                </div>

                {/* MOTIVATION / USP */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-8">
                        <h3 className="text-4xl font-bold text-white">Почему торговый бот — это <span className="text-blue-500">будущее?</span></h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Человеческий фактор — главная причина убытков на рынке. Страх, жадность, усталость и тильт не знакомы алгоритму. 
                            Наш бот анализирует тысячи параметров в секунду и забирает прибыль там, где человек сомневается.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Бэктесты на 5-летней истории рынка",
                                "Адаптивный риск-менеджмент (Stop Loss & Trailing)",
                                "Торговля по тренду и от уровней ликвидности",
                                "Полная прозрачность всех сделок"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                        <ICONS.Check size={14} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                             <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                                 <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center"><ICONS.Cpu className="text-blue-400" /></div>
                                 <div>
                                     <div className="font-bold text-white">Core Engine v2.4</div>
                                     <div className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online</div>
                                 </div>
                             </div>
                             <div className="space-y-3 font-mono text-sm text-gray-400">
                                 <div className="flex justify-between"><span>Scanning pairs...</span> <span className="text-white">BTC, ETH, SOL</span></div>
                                 <div className="flex justify-between"><span>Market Volatility:</span> <span className="text-yellow-400">High</span></div>
                                 <div className="flex justify-between"><span>Entry Signal:</span> <span className="text-green-400">LONG @ 64,230</span></div>
                                 <div className="flex justify-between border-t border-white/5 pt-2 mt-2"><span className="text-gray-500">Est. Profit:</span> <span className="text-white font-bold">+2.4%</span></div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* PRICING */}
                <h3 className="text-3xl font-bold text-center mb-12 text-white">Варианты подключения</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
                     {/* Standard */}
                     <div className="bg-surface border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/20 transition-all">
                         <div className="mb-6">
                             <h4 className="text-xl font-bold text-white mb-2">Standard</h4>
                             <div className="text-4xl font-bold text-white">$49<span className="text-lg text-gray-500 font-normal">/мес</span></div>
                         </div>
                         <div className="space-y-4 mb-8 flex-1">
                             <div className="flex items-center gap-3 text-gray-300"><ICONS.Layers className="w-5 h-5 text-gray-500" /> До $10,000 депозит</div>
                             <div className="flex items-center gap-3 text-gray-300"><ICONS.Server className="w-5 h-5 text-gray-500" /> Spot & Futures</div>
                             <div className="flex items-center gap-3 text-gray-300"><ICONS.BookOpen className="w-5 h-5 text-gray-500" /> Инструкция по настройке</div>
                             <div className="flex items-center gap-3 text-gray-300"><ICONS.Users className="w-5 h-5 text-gray-500" /> Общий чат поддержки</div>
                         </div>
                         <button onClick={() => onRequestAccess('Bot Subscription')} className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                             Купить подписку
                         </button>
                     </div>

                     {/* PRO Partner */}
                     <div className="relative bg-gradient-to-b from-[#1e1e24] to-[#121214] border border-blue-500/30 rounded-3xl p-8 flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
                         <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl">POPULAR</div>
                         <div className="mb-6">
                             <h4 className="text-xl font-bold text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Success Fee</h4>
                             <div className="text-4xl font-bold text-white">20%<span className="text-lg text-gray-500 font-normal"> от прибыли</span></div>
                         </div>
                         <div className="space-y-4 mb-8 flex-1">
                             <div className="flex items-center gap-3 text-white"><ICONS.Crown className="w-5 h-5 text-yellow-500" /> Депозит от $25,000</div>
                             <div className="flex items-center gap-3 text-white"><ICONS.Users className="w-5 h-5 text-blue-400" /> Персональный менеджер</div>
                             <div className="flex items-center gap-3 text-white"><ICONS.Zap className="w-5 h-5 text-purple-400" /> Приоритетные настройки</div>
                             <div className="flex items-center gap-3 text-white"><ICONS.Shield className="w-5 h-5 text-green-400" /> Еженедельный отчет</div>
                         </div>
                         <button onClick={() => onRequestAccess('Bot Partner')} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                             Оставить заявку
                         </button>
                     </div>
                </div>

                {/* REVIEWS */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-12 text-white">Результаты инвесторов</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-surface p-8 rounded-2xl border border-white/5 relative">
                            <ICONS.Quote className="absolute top-6 right-6 text-white/5 w-10 h-10" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-xl">D</div>
                                <div>
                                    <div className="text-white font-bold">Dmitry K.</div>
                                    <div className="text-xs text-gray-500">Pro Partner</div>
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-green-400 mb-2">+300%</div>
                            <p className="text-gray-400 text-sm italic">"За 2024 год бот сделал просто невероятные цифры. Начинал с 30к, сейчас портфель уже перевалил за сотню. Самое главное — я вообще не трачу время на графики."</p>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-white/5 relative">
                            <ICONS.Quote className="absolute top-6 right-6 text-white/5 w-10 h-10" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-xl">S</div>
                                <div>
                                    <div className="text-white font-bold">Sergey M.</div>
                                    <div className="text-xs text-gray-500">Standard Plan</div>
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-green-400 mb-2">+90%</div>
                            <p className="text-gray-400 text-sm italic">"Только начал 2025 год, а уже +90% к депозиту. Алгоритм идеально отработал волатильность января. Подписка окупилась за первые 2 дня."</p>
                        </div>
                    </div>
                </div>

             </div>
        </div>
    );

    const renderArticles = () => (
        <div className="py-24 px-6 animate-fade-in relative">
            {/* Intro */}
            <div className="container mx-auto max-w-6xl mb-16 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-medium text-purple-400 mb-6">
                    <ICONS.BookOpen className="w-4 h-4" /> KNOWLEDGE BASE
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                    Аналитика, которая <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">опережает рынок</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    В мире шума мы ценим тишину и факты. Вместо пересказа новостей — фундаментальный разбор проектов, 
                    анализ ликвидности и психология толпы. Читайте наши лонгриды на Teletype.
                </p>
            </div>

            {/* Articles Carousel */}
            <div className="container mx-auto max-w-7xl mb-32">
                <div className="flex overflow-x-auto gap-6 px-4 pb-8 snap-x snap-mandatory hide-scrollbar">
                    {ARTICLES.map((art, i) => (
                        <a key={art.id} href={art.link} target="_blank" rel="noreferrer" className="snap-center shrink-0 w-[320px] md:w-[400px] group flex flex-col bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="aspect-[16/9] overflow-hidden relative bg-gray-800">
                                 <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white z-10 border border-white/10 shadow-lg">
                                    {art.tag}
                                 </div>
                                <img 
                                    src={art.img} 
                                    alt={art.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col relative -mt-6 bg-surface">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-purple-400 transition-colors">{art.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{art.desc}</p>
                                <div className="flex items-center text-sm font-bold text-white gap-2 group-hover:gap-4 transition-all mt-auto">
                                    Читать статью <ICONS.ArrowRight className="w-4 h-4 text-purple-500" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Private Club Section */}
            <div className="container mx-auto max-w-7xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl rounded-full -z-10"></div>
                <div className="bg-[#0f0f11] border border-white/10 rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
                    {/* Decorative bg elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
                    
                    <ICONS.Crown className="w-16 h-16 text-yellow-500 mx-auto mb-8 animate-pulse-slow" />
                    
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Private Club <span className="text-yellow-500">A92</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Закрытое сообщество для тех, кто уже в рынке. Совместные сделки, аллокации в ранние раунды (Seed/Private), 
                        нетворкинг с китами индустрии и прямая связь с основателями A92.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <div className="text-white font-bold mb-2">Insider Info</div>
                            <div className="text-xs text-gray-500">Ранний доступ к нарративам</div>
                        </div>
                         <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <div className="text-white font-bold mb-2">Allocations</div>
                            <div className="text-xs text-gray-500">Вход в проекты до листинга</div>
                        </div>
                         <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <div className="text-white font-bold mb-2">Networking</div>
                            <div className="text-xs text-gray-500">Окружение сильных игроков</div>
                        </div>
                    </div>

                    <button 
                        onClick={() => onRequestAccess('Private Club')}
                        className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]"
                    >
                        Подать заявку в Клуб
                    </button>
                    <div className="mt-6 text-xs text-gray-500 uppercase tracking-widest">Места ограничены • Отбор по анкете</div>
                </div>
            </div>
        </div>
    );
    
    const renderCommunity = () => (
         <div className="py-24 px-6 animate-fade-in text-white relative">
             <div className="container mx-auto max-w-6xl">
                 {/* Hero Header */}
                 <div className="text-center mb-16">
                     
                     {/* Glowing "A92 Family" Badge */}
                    <div className="relative inline-flex group mb-6">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative inline-flex items-center justify-center px-8 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            A92 FAMILY
                        </button>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-light text-white italic mb-8">"Окружение определяет результат"</h3>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Мы строим не просто чат с сигналами, а семью единомышленников. 
                        Вместе мы растем, делимся опытом и поддерживаем друг друга на сложном пути трейдера.
                    </p>
                 </div>

                 {/* Events Grid */}
                 <div className="grid md:grid-cols-2 gap-8 mb-32">
                     {/* Offline */}
                     <div className="bg-surface border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors"></div>
                         <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                             <ICONS.MapPin className="w-8 h-8 text-gray-400" />
                         </div>
                         <h3 className="text-2xl font-bold mb-4">Офлайн встречи</h3>
                         <p className="text-gray-400 mb-6">
                             Живое общение, нетворкинг и обмен опытом в неформальной обстановке.
                         </p>
                         <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-500">
                             На данный момент встречи не запланированы. <br/> Следите за анонсами.
                         </div>
                     </div>

                     {/* Online Sessions */}
                     <div className="bg-surface border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                         <div className="absolute top-0 left-0 p-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/20 transition-colors"></div>
                         <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                             <ICONS.Calendar className="w-8 h-8 text-blue-400" />
                         </div>
                         <h3 className="text-2xl font-bold mb-4">Закрытые сессии</h3>
                         <p className="text-gray-400 mb-6">
                             Еженедельный разбор рынка, ответы на вопросы и анализ портфелей участников.
                         </p>
                         <div className="mt-auto">
                            <div className="text-blue-400 font-bold mb-4">Еженедельный обзор рынка по вторникам</div>
                            <button onClick={() => onRequestAccess('Calendar Event')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all text-sm flex items-center gap-2 mx-auto">
                                <ICONS.Calendar className="w-4 h-4" /> Добавить в календарь
                            </button>
                         </div>
                     </div>
                 </div>

                 {/* Merch Section */}
                 <div className="relative">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-bold">Limited Drop <span className="text-gray-600">/ 12 Items</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {MERCH.map(item => (
                            <div key={item.id} className="group bg-surface rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all cursor-pointer" onClick={() => onRequestAccess(`Merch: ${item.name}`)}>
                                <div className="aspect-[3/4] bg-[#0f0f11] relative overflow-hidden">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                         <div className="font-bold text-white text-sm truncate">{item.name}</div>
                                         <div className="text-gray-400 text-xs">{item.price}</div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        BUY
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

             </div>
         </div>
    );

    const renderContent = () => {
        switch (subView) {
            case 'training': return renderTraining();
            case 'exchanges': return renderExchanges();
            case 'bot': return renderBot();
            case 'articles': return renderArticles();
            case 'community': return renderCommunity();
            default: return renderHome();
        }
    };

    return <div className="pt-20 min-h-screen">{renderContent()}</div>;
};