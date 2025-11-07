// Type definitions for portfolio content
// Customize these types as needed for your content structure

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
  metrics?: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string | "Present";
  description?: string;
}

export interface Skill {
  name: string;
  category: "technology" | "project management" | "tool" | "other" | "language" | "framework";
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface NowItem {
  title: string;
  description: string;
  category: "learning" | "building" | "exploring" | "reading";
  date?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  website?: string;
}

export interface PortfolioContent {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  now: NowItem[];
  social: SocialLinks;
}

