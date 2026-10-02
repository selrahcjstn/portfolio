import type { NavigationSection, ProjectEntry } from '../types/portfolio';

export const profile = {
  name: 'Charles Justine Mantes',
  initials: 'CJM',
  role: 'Full-Stack Engineer',
  tagline: 'Building practical web and mobile products with clean interfaces and reliable backends.',
  availability: 'Available for Internship · 2026',
};

// Add verified destinations to show social links in the sidebar.
export const socialLinks = {
  github: 'https://github.com/selrahcjstn',
  linkedin: 'https://ph.linkedin.com/in/charles-justine-mantes-a91055379',
  facebook: 'https://www.facebook.com/share/1JFoUwsPYj/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/chrls_jj',
  resume: '/resume.pdf',
};

export const blogUrl = '';

export const email = 'charlesjustinemantes.main@gmail.com';

export const siteCredit = 'Designed in Figma and developed in Visual Studio Code by yours truly. Built with Astro and Tailwind CSS, and deployed on Vercel. Typography features Geist and Geist Mono for a clean, minimal aesthetic.';

export const techStack = [
  {
    category: 'Frontend & mobile',
    technologies: [
      { name: 'JavaScript', icon: 'JAVASCRIPT' },
      { name: 'React', icon: 'REACT.JS' },
      { name: 'Vue', icon: 'VUE.JS' },
      { name: 'React Native', icon: 'REACT NATIVE' },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'ASP.NET Core', icon: 'ASP.NET CORE' },
      { name: 'Python', icon: 'PYTHON' },
      { name: 'PHP', icon: 'PHP' },
      { name: 'Java', icon: 'JAVA' },
    ],
  },
  {
    category: 'Data & services',
    technologies: [
      { name: 'Supabase', icon: 'SUPABASE' },
      { name: 'Firebase', icon: 'FIREBASE' },
    ],
  },
  {
    category: 'Game development',
    technologies: [
      { name: 'Unity', icon: 'UNITY' },
      { name: 'C#', icon: 'C#' },
    ],
  },
];

export const navigation: NavigationSection[] = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'tech-stack', label: 'Tech stack', number: '02' },
  { id: 'education', label: 'Education', number: '03' },
  { id: 'projects', label: 'Projects', number: '04' },
  { id: 'github-contributions', label: 'Contributions', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];

export const projects: ProjectEntry[] = [
  { title: 'ParkFlow - Parking Management System', description: 'Motorcycle parking management system designed to streamline campus parking, vehicle entry and exit, and real-time monitoring.', tags: ['ASP.NET CORE', 'VUE.JS', 'REACT.JS', 'REACT NATIVE'], githubUrl: 'https://github.com/selrahcjstn/Parkflow-Web-Admin', liveDemoUrl: 'https://parkflow-web-admin.vercel.app/' },
  { title: 'Parsie', description: 'AI-powered study platform that transforms learning materials into structured reviewers and interactive quizzes.', tags: ['REACT.JS', 'PYTHON', 'SUPABASE'] },
  { title: '2D Game Development', description: 'A school project created to explore the fundamentals of 2D game development, including gameplay mechanics, player interactions, and level design.', tags: ['C#'], githubUrl: 'https://github.com/selrahcjstn/Second-Tide' },
  { title: 'Istokkit', description: 'Inventory management system built to simplify product tracking, stock monitoring, and day-to-day inventory operations.', tags: ['REACT.JS', 'FIREBASE'], githubUrl: 'https://github.com/selrahcjstn/Istokkit-Online-Inventory-Management-System', liveDemoUrl: 'https://istokkit.app/' },
];
