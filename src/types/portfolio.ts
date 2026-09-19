export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Languages';

export interface SkillItem {
  name: string;
  isLearning?: boolean;
  note?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: SkillItem[];
}

export interface RoadmapStep {
  step: number;
  title: string;
  tech: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  username: string;
  iconName: 'github' | 'mail' | 'instagram';
  description: string;
}

export interface PropFirmInfo {
  name: string;
  logoUrl: string;
  inviteUrl: string;
  badge: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: 'completed' | 'in-progress';
  date?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    handle: string;
    role: string;
    location: string;
    headline: string;
    subheadline: string;
    statusText: string;
  };
  about: {
    paragraphs: string[];
    coreValues: { title: string; desc: string }[];
  };
  skills: SkillGroup[];
  roadmap: {
    intro: string;
    steps: RoadmapStep[];
    footerNote: string;
  };
  projects: ProjectItem[];
  trading: {
    title: string;
    badge: string;
    intro: string;
    propFirm: PropFirmInfo;
    keyTakeaways: { title: string; desc: string }[];
    disclaimer: string;
  };
  socials: SocialLink[];
  footer: {
    builtWith: string;
    copyrightYear: number;
  };
}
