
export interface Skill {
  id: string;
  category: string;
  items: string[];
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  metric: string;
  metricLabel: string;
  description: string;
  image: string;
  relatedSkills: string[];
}

export interface Experience {
  role: string;
  company: string;
  range: string;
  branch: string;
  action: string;
  tags: string[];
}
