// Contact Details
export interface ContactDetails {
  email: string;
  phone: string;
  location: string;
}

// Social Media Links
export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

// Education
export interface Education {
  degree: string;
  field: string;
  institution: string;
  years: string;
  description: string;
  link?: string;
}

// Work Experience
export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string[];
  technologies?: string[];
}

// Skills
export interface Skill {
  name: string;
  level: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Projects
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoLink?: string;
  repoLink?: string;
}

// Blogs
export interface Blog {
  title: string;
  summary: string;
  category: string;
  date: string;
  image?: string;
  link: string;
}

// Coding Stats
export interface CodingStat {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CodingProfile {
  name: string;
  link: string;
  stats: CodingStat[];
}

// Achievements
export interface Achievement {
  title: string;
  description: string;
}

// LinkedIn Data
export interface LinkedInData {
  profileImage: string;
  bio: string;
  location: string;
  currentPosition: string;
  company: string;
}

// Resume Data
export interface ResumeData {
  name: string;
  currentRole: string;
  bio: string;
  contactDetails: ContactDetails;
  education: Education[];
  workExperience: Experience[];
  skills: {
    categories: SkillCategory[];
    additionalSkills: string[];
  };
  projects: Project[];
  blogs: Blog[];
  codingProfiles: CodingProfile[];
  achievements: Achievement[];
  socialLinks: SocialLink[];
  stats: {
    yearsExperience: number;
    companies: number;
    projects: number;
    achievements: number;
  };
}

// Visitor counter type
export interface VisitorCount {
  count: number;
  lastUpdated: string;
}

// Referral form type
export interface ReferralFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  position: string;
  jobLink?: string;
  message?: string;
  resumeFile?: File;
}
