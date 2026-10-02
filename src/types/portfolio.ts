export interface PortfolioEntry {
  title: string;
  description: string;
  tags: string[];
}

export interface EducationEntry extends PortfolioEntry {
  period: string;
  qualification: string;
}

export interface ExperienceEntry extends EducationEntry {
  type?: 'WORK' | 'EDUCATION' | 'AWARD' | 'ACTIVITY';
  url?: string;
}

export interface ProjectEntry extends PortfolioEntry {
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface NavigationSection {
  id: string;
  label: string;
  number: string;
}
