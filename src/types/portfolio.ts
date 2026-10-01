export interface PortfolioEntry {
  title: string;
  description: string;
  tags: string[];
}

export interface EducationEntry extends PortfolioEntry {
  period: string;
  qualification: string;
}

export interface NavigationSection {
  id: string;
  label: string;
  number: string;
}
