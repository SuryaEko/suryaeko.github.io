export interface Profile {
  id: number;
  name: string;
  role: string;
  location: string;
  bio: string;
  avatar_url?: string | null;
  open_to_work: boolean;
}

export interface Experience {
  id: number;
  type: "work" | "education";
  company: string;
  role: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  location: string;
  description: string;
  sort_order: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string | null;
  url?: string | null;
  tech_stack: string[];
  featured: boolean;
  sort_order: number;
}

export interface Skill {
  id: number;
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  sort_order?: number;
}

export type SkillCategory = "frontend" | "backend" | "tools" | "other";
