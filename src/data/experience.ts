import type { ExperienceEntry } from '../types/portfolio';

// Keep entries newest first. Add verified work, awards, or activities here.
export const experience: ExperienceEntry[] = [
  {
    type: 'EDUCATION',
    period: '2023 — PRESENT',
    title: 'Bulacan State University',
    qualification: 'Bachelor of Science in Information Technology',
    description: 'Fourth-year BSIT student applying programming and software development skills through academic projects.',
    tags: ['JAVA', 'JAVASCRIPT', 'UNITY', 'REACT.JS', 'PHP'],
  },
  {
    type: 'EDUCATION',
    period: '2021 — 2023',
    title: 'La Consolacion University Philippines',
    qualification: 'Information and Communications Technology (ICT)',
    description: 'Built a foundation in C, Java, C#, computer technology, and introductory robotics through hands-on projects.',
    tags: ['JAVA', 'C', 'C#'],
  },
];

export const education = experience.filter((entry) => entry.type === 'EDUCATION');
