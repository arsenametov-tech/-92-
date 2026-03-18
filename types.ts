
export interface Lesson {
  id: string;
  title: string;
  videoId: string; // YouTube Video ID
  duration: string;
  isLocked: boolean;
  description?: string;
  isCompleted?: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  tags: string[];
  color: string;
  modules: Module[];
  isPurchased?: boolean;
}

export interface Exchange {
  id: string;
  name: string;
  bonus: string;
  cashback: string;
  desc: string;
  reg: string;
  changeRef: string;
  isActive?: boolean;
}

export interface Article {
  id: string;
  title: string;
  tag: string;
  desc: string;
  link: string;
  img: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  img: string;
}

export type ViewState = 'landing' | 'dashboard' | 'auth';
export type SubView = 'home' | 'training' | 'exchanges' | 'bot' | 'articles' | 'community';

export interface User {
  name: string;
  email: string;
  level: string;
}

// AI Specific Types
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
}

export interface QuizState {
  questions: QuizQuestion[];
  userAnswers: number[]; // Index of selected answer or -1
  isSubmitted: boolean;
  score: number;
  isLoading: boolean;
}
