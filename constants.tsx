import { Course, Exchange, Article, MerchItem } from './types';
import { 
  Shield, 
  TrendingUp, 
  Activity, 
  BookOpen, 
  Crown, 
  Zap, 
  BarChart2, 
  Users, 
  Shirt, 
  MapPin, 
  Calendar,
  Lock,
  PlayCircle, 
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  GraduationCap,
  Brain,
  Target,
  Scale,
  MessageCircle,
  Quote,
  Wallet,
  Cpu,
  Server,
  Check,
  Layers,
  Menu,
  X,
  Home,
  LayoutGrid,
  Newspaper,
  Filter
} from 'lucide-react';
import React from 'react';

// MOCK DATA FOR COURSES WITH YOUTUBE LINKS
export const COURSES: Course[] = [
  { 
    id: "course-1", 
    title: "Крипто Старт", 
    price: "Бесплатно", 
    description: "Базовый курс для новичков. Кошельки, безопасность, первая покупка. Идеальный старт для тех, кто хочет разобраться в основах.", 
    tags: ["Безопасность", "Биржи"], 
    color: "bg-emerald-500",
    isPurchased: true,
    modules: [
      {
        id: "m1",
        title: "Введение в блокчейн",
        lessons: [
          { id: "l1", title: "Что такое Биткоин?", videoId: "S-s6C537J3o", duration: "10:00", isLocked: false, description: "История создания и базовые принципы работы первой криптовалюты. Почему это революция денег?" },
          { id: "l2", title: "Виды кошельков (Hot vs Cold)", videoId: "3X0-8ZZ4w0M", duration: "15:30", isLocked: false, description: "Разница между горячими и холодными кошельками. Ledger, Trezor, MetaMask и Trust Wallet." },
          { id: "l3", title: "Безопасность: Seed-фраза", videoId: "LgGg6y6g6y6", duration: "08:15", isLocked: false, description: "Как хранить сид-фразу, чтобы не потерять доступ к деньгам. Правила цифровой гигиены." }
        ]
      },
      {
        id: "m2",
        title: "Первая покупка",
        lessons: [
          { id: "l4", title: "Регистрация на бирже (CEX)", videoId: "g6I7Xj2sWpI", duration: "12:45", isLocked: false, description: "Пошаговая инструкция по регистрации и верификации (KYC) на Bybit и BingX." },
          { id: "l5", title: "P2P Торговля: Ввод и Вывод", videoId: "b8y1r6r8w0k", duration: "20:00", isLocked: false, description: "Как купить криптовалюту с карты без блокировок. Избегаем мошенников на P2P." },
          { id: "l6", title: "Интерфейс спотовой торговли", videoId: "S-s6C537J3o", duration: "18:20", isLocked: true, description: "Разбор терминала: стакан, ордера (Limit, Market), история сделок." }
        ]
      },
      {
        id: "m3",
        title: "Основы Трейдинга",
        lessons: [
          { 
            id: "l7", 
            title: "Введение в Технический Анализ", 
            videoId: "4wDoL8b782Q", 
            duration: "25:00", 
            isLocked: true, 
            description: "Базовые концепции анализа графиков. Японские свечи, тренды и уровни поддержки/сопротивления. (Видео по запросу)" 
          },
          { id: "l8", title: "TradingView: Настройка", videoId: "3X0-8ZZ4w0M", duration: "14:10", isLocked: true, description: "Обзор главного инструмента трейдера. Настройка шаблонов и индикаторов." }
        ]
      }
    ]
  },
  { 
    id: "course-2", 
    title: "Крипто-Инвестор", 
    price: "150 USDT", 
    oldPrice: "300 USDT", 
    description: "Фундаментальный анализ, составление портфеля, психология рынка и стратегия долгосрочного инвестирования.", 
    tags: ["Фундаментал", "Стратегия"], 
    color: "bg-blue-500",
    modules: [
      {
        id: "m1-pro",
        title: "Макроэкономика и Циклы",
        lessons: [
          { id: "l1-pro", title: "Рыночные циклы и Халвинг", videoId: "LgGg6y6g6y6", duration: "45:00", isLocked: true },
          { id: "l2-pro", title: "Влияние ставки ФРС", videoId: "S-s6C537J3o", duration: "32:00", isLocked: true },
          { id: "l3-pro", title: "Индекс Доллара (DXY) и USDT.D", videoId: "b8y1r6r8w0k", duration: "28:15", isLocked: true }
        ]
      },
      {
        id: "m2-pro",
        title: "Сборка Портфеля",
        lessons: [
          { id: "l4-pro", title: "Диверсификация активов", videoId: "g6I7Xj2sWpI", duration: "40:00", isLocked: true },
          { id: "l5-pro", title: "Анализ токеномики проектов", videoId: "3X0-8ZZ4w0M", duration: "55:00", isLocked: true }
        ]
      }
    ]
  },
  { 
    id: "course-3", 
    title: "Мастерская Трейдинга", 
    price: "500 USDT", 
    description: "Продвинутый технический анализ, работа с ликвидностью, риск-менеджмент и создание собственной торговой системы.", 
    tags: ["TA", "Риск", "Pro"], 
    color: "bg-purple-500",
    modules: [
        {
            id: "m1-adv",
            title: "Smart Money Concept",
            lessons: [
                { id: "l1-adv", title: "Структура рынка (BOS, CHOCH)", videoId: "4wDoL8b782Q", duration: "45:00", isLocked: true },
                { id: "l2-adv", title: "Ликвидность и работа с ней", videoId: "S-s6C537J3o", duration: "50:00", isLocked: true },
                { id: "l3-adv", title: "Order Blocks и Breaker Blocks", videoId: "LgGg6y6g6y6", duration: "48:00", isLocked: true }
            ]
        },
        {
            id: "m2-adv",
            title: "Риск-Менеджмент",
            lessons: [
                { id: "l4-adv", title: "Математика трейдинга (R/R)", videoId: "b8y1r6r8w0k", duration: "35:00", isLocked: true },
                { id: "l5-adv", title: "Расчет позиции и плечи", videoId: "g6I7Xj2sWpI", duration: "30:00", isLocked: true }
            ]
        }
    ]
  },
  { 
    id: "course-4", 
    title: "Личный Архитектор", 
    price: "Premium", 
    description: "VIP сопровождение до результата. Личный ментор, еженедельные созвоны и аудит ваших действий.", 
    tags: ["VIP", "Ментор", "1-on-1"], 
    color: "bg-orange-500",
    modules: [
        {
            id: "m1-vip",
            title: "Индивидуальная стратегия",
            lessons: [
                { id: "l1-vip", title: "Вводная сессия (Запись)", videoId: "3X0-8ZZ4w0M", duration: "60:00", isLocked: true },
                { id: "l2-vip", title: "Психотипы в трейдинге", videoId: "4wDoL8b782Q", duration: "45:00", isLocked: true }
            ]
        }
    ]
  }
];

export const EXCHANGES: Exchange[] = [
    { id: 'bingx', name: "BingX", bonus: "5000 USDT", cashback: "40%", desc: "Лучшая для новичков. Никаких KYC для торговли.", reg: "Скидка навсегда.", changeRef: "Возможно в течение 3 дней.", isActive: true },
    { id: 'okx', name: "OKX", bonus: "Mystery Box", cashback: "20%", desc: "Надежная платформа Web3.", reg: "Код A92LAB.", changeRef: "Создайте новый аккаунт.", isActive: true },
    { id: 'bitget', name: "Bitget", bonus: "1000 USDT", cashback: "15%", desc: "Копитрейдинг лидер.", reg: "KYC обязателен.", changeRef: "Удалите старый аккаунт.", isActive: true },
    { id: 'mexc', name: "MEXC", bonus: "1000 USDT", cashback: "10%", desc: "Биржа гемов и щитков.", reg: "0% Maker комиссия.", changeRef: "Создайте новый аккаунт.", isActive: true },
    { id: 'gate', name: "Gate.io", bonus: "$100 & Points", cashback: "20%", desc: "Огромный выбор альткоинов.", reg: "Промо A92GATE.", changeRef: "Только новый аккаунт.", isActive: true },
    { id: 'bybit', name: "Bybit", bonus: "$30,000", cashback: "20%", desc: "Топ-1 биржа.", reg: "Нажмите регистрация.", changeRef: "Напишите нам для переноса.", isActive: false },
];

export const ARTICLES: Article[] = [
    { 
        id: '1', 
        title: "Структура Рынка: Smart Money", 
        tag: "Smart Money", 
        desc: "Как институционалы манипулируют ценой, где искать ликвидность и почему паттерны из книг больше не работают.", 
        link: "https://teletype.in/@a92_lab/S3ZBFKTRdyp", 
        img: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: '2', 
        title: "Психология: FOMO и Тильт", 
        tag: "Psychology", 
        desc: "Почему 95% трейдеров теряют деньги на дистанции? Разбираем главные ошибки мышления и как с ними бороться.", 
        link: "https://teletype.in/@a92_lab/p3xMPJkoTvZ", 
        img: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: '3', 
        title: "Альтсезон: Когда покупать?", 
        tag: "Market Cycle", 
        desc: "Анализ метрик доминации BTC, перетекание ликвидности и как не остаться с 'тяжелыми сумками' на медвежьем рынке.", 
        link: "https://teletype.in/@a92_lab/6BJ2vk00_a8", 
        img: "https://images.unsplash.com/photo-1622630998477-20aa696fa4f5?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
        id: '4', 
        title: "Риск-менеджмент 101", 
        tag: "Risk Mgmt", 
        desc: "Математика трейдинга. Расчет позиции, R/R (Risk/Reward) и как сохранить депозит, даже если вы не правы в 50% сделок.", 
        link: "https://teletype.in/@a92_lab/K5TNwkOoNQW", 
        img: "https://images.unsplash.com/photo-1639322537228-ad71429133f8?q=80&w=1200&auto=format&fit=crop" 
    }
];

export const MERCH: MerchItem[] = [
    { id: '1', name: "A92 Hoodie Black", price: "6500 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/627343742_26067873479503369_5917362145825633023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WFIpLD43WqAQ7kNvwFRmQFQ&_nc_oc=AdnyiF1995GBk62yE-0NiHCbZMkEJpxGTFg9dkuXChgNQyBew0hJ3b1PSDgR3Un2Xm1U3AZNzOYDFCUOBVfrPBMa&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=rBr3LO-lCHNeb3pe5L2CUw&oh=00_AfsJIhYNFnLPl5kLrLd3z-6Om_amPYF6XSnQP718BHkFwg&oe=698BA3D9" },
    { id: '2', name: "Crypto Tee Oversize", price: "3200 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/625692326_26067873129503404_2570963097194924248_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ISdLP8fKbGYQ7kNvwEfTEi4&_nc_oc=AdnwSQQSkTKh-0sqiYzKYZ3iCRpvCKzKGuyjESQJSIIwY7WI76OLHv007WvZiGsFcIKXMOopUaPEBDEqVO9cvDH1&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=mPKUps_h0_EfpoTSc0Slqg&oh=00_AfuUMJVgys5Rq8olAVLU0c2fQ03bvOAZYkmPMJLHAdJj3Q&oe=698BAC68" },
    { id: '3', name: "Holder Cap", price: "2500 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/626839292_26067873162836734_5360810130035597580_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=M5KyS488TpcQ7kNvwFujiUZ&_nc_oc=AdkzL8DY0czOYexum5kKU0uknAN2H1xh5RNcIQ6WNzF273Q6gIg4A-wF6wMQHDGOVKLRYmVVmKuBzpu6bhZYT4Jt&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=4fOUQSAir2Wzz66qcpArsg&oh=00_AfuxHWk5xU63SmTtBh-jnA-zhN7IA86JpKhE6g-HQu9r3w&oe=698BB1F9" },
    { id: '4', name: "Ledger Case Leather", price: "4000 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/627671546_26067873526170031_1033698126114066151_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hGf_ED1CywMQ7kNvwG2bQsq&_nc_oc=AdmFx1Z-fOIe9f1o2Fh_NUyJDRo79PZNzwzFlnwsyN7GqOWPu7wabI9sFJphKBjtwVxTLek2xdh_HPAjd1PkgWao&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=VLihh3DBs7K5--dIUArVVg&oh=00_Afsa_2ykeLKDj3sgRRhw2ARCJHLlKgJU-7lmbciErhVCig&oe=698BA993" },
    { id: '5', name: "Smart Money Crewneck", price: "5500 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/625422370_26067873702836680_1955858278568845792_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kJDxKjq-B1YQ7kNvwGJqZO8&_nc_oc=AdmW8W9ufJsHoh0P2w7TckbLC_WEKo-TNJ-BdZKQNbjOkc5CC8qcq_wcTsWpTm0ZK2Inv60_ER_PzeWKYg9HR6HY&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=AA0p5gQKmtH5HLtkxxV8vw&oh=00_AfvGD6X17yYEHb9genTGvCp5kyuRa00U6Q-KURzNj5shzQ&oe=698B9204" },
    { id: '6', name: "Trader Joggers", price: "4800 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/627009517_26067873856169998_5604267311132531882_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RIsc5GIG34UQ7kNvwFO6OoI&_nc_oc=Adk5znk_DPX-opkzAmSzcir8D7jHufesvUc-Nxyejzlr0AbTLwHYb9m_qYfbnkocGrES9ia31UiNiezWrHIl82Ie&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=vyNn0V1HKvo2JKrk8igzLA&oh=00_AfsePgccKrQHMx0UlCBVr2BUKMFF8bWogOVq25QrhflIqQ&oe=698BB9E9" },
    { id: '7', name: "Bull Market Socks (3 pack)", price: "1500 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/625973839_26067873899503327_3865087606440027744_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EAnF6IPjLOUQ7kNvwE2FtW9&_nc_oc=AdnNa_f3hHi9VjO3hR7ZH_BtpiVTWQ2GnKSJx2nAGQVeLwmu8phSn67g6UJBb6fe4i7AKk-oMDW-0v_clt7dYkWx&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=BuzNSc_PvWlFKEt56fgkQw&oh=00_AfsSpls1Wkg-q7f1s4TpVgLRpixkZ1UhExeechqR9-6k2w&oe=698B96F5" },
    { id: '8', name: "Analysis Notebook", price: "1200 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/626026614_26067873959503321_1153457103276621234_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L0OEi1vwhKAQ7kNvwHnufqi&_nc_oc=AdlE8XiDIDPY5U6XNT43UXGzSk6V-QOfn5j3qRuQKcmit_HEqxrQLbh2aVCzJsMlPYniZtg-j6SAOMTnyU0nu4vF&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=NFOX2fn-6ORZTMQTO4Wtuw&oh=00_AftV2_AqnKR62COCYLa9LNZz5WcIf24qXSAz5BrfxMZHUw&oe=698BBF7B" },
    { id: '9', name: "Phone Case Carbon", price: "2000 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/624289673_26067874176169966_6497712642688222225_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MXdyqFNICToQ7kNvwG7lwSz&_nc_oc=AdmSDUaC9NM2PiRzhR38feLHJwtGenox1kH89ylQLzTzpuuqy4BCjphgc3aOwC8h74faCZP3vGTKbpLjrM6xCjUP&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=7guNmLYtH29hFGaOUm5R9Q&oh=00_AfsQRwzs3UXc-CbCvAx3_f4FeNN6tusidPlDBRlXv2UjPA&oe=698BBDD7" },
    { id: '10', name: "Tote Bag 'Liquidity'", price: "1800 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/627053810_26067874182836632_912360484208583818_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vDBGjwLBvZkQ7kNvwG7eoLS&_nc_oc=AdlYtVUUojTG-VcI1flIWVSuijE3dEwdYH_YCeXzjB3BcerqMvPF1ACtKn2DhIe4cp_hd-k55yp-aEWo3kuZ6u5h&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=sxEUHas1_YI5ZxH7nGXHVQ&oh=00_AfublQHfC3sIwpmE37hdbOEED5k8ZCDb0SdH8LlFucjaOA&oe=698B9C91" },
    { id: '11', name: "Cyberpunk Windbreaker", price: "8500 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/627768345_26067874446169939_7446744815403305930_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LguhUXrRNYAQ7kNvwGtTrLI&_nc_oc=AdmourMIaVSyE_oPugHiNB4xMGEdsFUrntxwdBrS3XgTXdUR4vCOfWNQZ3dAweudJBJpcwGW1vMveHEME_va87hg&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=VeZNksxA9V-W4htee-G8bA&oh=00_AfvTzthWiwYYjUL7hUuuhy1ELsj8voKjVjMa8e8sFp684A&oe=698BB2A1" },
    { id: '12', name: "Minimal Beanie", price: "1500 ₽", img: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/626799502_26067874516169932_3696863317616061261_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mGoh8XR3m98Q7kNvwGTQSC-&_nc_oc=AdnT99zln39Xi9tYg-xYyP3Xu0ZP8hgfjscg6qJviNNq9w8xLKT8KAQZOCaa7IqiIYjGPDscSwAVuvm76a3yzdjm&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=abBhC-thvs-ONgeimsHXlQ&oh=00_Afsi-7hJ4DD6SNau0VV8VlKAfUR19UgoZWC5fUnA0iYcCw&oe=698BA191" },
];

export const ICONS = {
    Shield, TrendingUp, Activity, BookOpen, Crown, Zap, BarChart2, Users, Shirt, MapPin, Calendar, Lock, PlayCircle, CheckCircle2,
    ArrowRight, Clock, Star, GraduationCap, Brain, Target, Scale, MessageCircle, Quote, Wallet, Cpu, Server, Check, Layers,
    Menu, X, Home, LayoutGrid, Newspaper, Filter
};