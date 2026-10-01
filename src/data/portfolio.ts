import type { EducationEntry, NavigationSection, PortfolioEntry } from '../types/portfolio';

export const profile = {
  name: 'Charles Justine Mantes',
  initials: 'CJM',
  role: 'Full Stack Developer',
  tagline: 'Building scalable web and mobile applications with reliable backends and practical experiences.',
};

export const email = 'charlesjustinemantes.main@gmail.com';

export const navigation: NavigationSection[] = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'education', label: 'Education', number: '02' },
  { id: 'projects', label: 'Projects', number: '03' },
  { id: 'contact', label: 'Contact', number: '04' },
];

export const education: EducationEntry[] = [
  {
    period: '2023 — PRESENT',
    title: 'College · Bulacan State University',
    description: 'Currently, I’m a 4th-year BSIT student at Bulacan State University and actively looking for an internship opportunity where I can apply my skills, gain industry experience, and contribute to real-world projects.',
    tags: ['JAVA', 'JAVASCRIPT', 'UNITY', 'REACT.JS', 'PHP'],
  },
  {
    period: '2023 — PRESENT',
    title: 'Seniror High · La Consolacion University Philipoines',
    description: 'Built my foundation in programming and computer technology through hands-on activities and academic projects. Learned the fundamentals of C, Java, and C#, along with introductory robotics and basic software development concepts.',
    tags: ['JAVA', 'C', 'C#'],
  },
];

export const projects: PortfolioEntry[] = [
  { title: 'ParkFlow - Parking Management System', description: 'Motorcycle parking management system designed to streamline campus parking, vehicle entry and exit, and real-time monitoring.', tags: ['ASP.NET CORE', 'VUE.JS', 'REACT.JS', 'REACT NATIVE'] },
  { title: 'Parsie', description: 'AI-powered study platform that transforms learning materials into structured reviewers and interactive quizzes.', tags: ['REACT.JS', 'PYTHON', 'SUPABASE'] },
  { title: '2D Game Development', description: 'A school project created to explore the fundamentals of 2D game development, including gameplay mechanics, player interactions, and level design.', tags: ['C#'] },
  { title: 'Istokkit', description: 'Inventory management system built to simplify product tracking, stock monitoring, and day-to-day inventory operations.', tags: ['REACT.JS', 'FIREBASE'] },
];
