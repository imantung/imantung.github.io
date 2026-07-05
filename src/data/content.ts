export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  description: string;
  period: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface WritingEntry {
  source: "medium";
  title: string;
  excerpt: string;
  url: string;
}

export interface LinkedInPost {
  embedCode: string;
}

export interface Socials {
  linkedin: string;
  medium: string;
  github: string;
}

export interface Quote {
  text: string;
  author: string;
}

export const profile: Profile = {
  name: "Iman Tunggono",
  headline: "Technology leader | Scaling engineering orgs through growth and change",
  location: "Jakarta, Indonesia",
  email: "iman.tung@gmail.com",
};

export const about: string =
  "15+ years designing scalable systems, leading high-performing teams, and aligning technology execution with strategic business goals. Focused on building resilient, user-centric solutions through pragmatic, cost-effective technology strategy.";

export const experience: ExperienceEntry[] = [
  {
    role: "VP of Engineering",
    company: "Bobobox",
    description: "Led org of 30+ across Eng, IoT, DevOps, Data",
    period: "2025 - 2026",
  },
  {
    role: "Entrepreneur in Residence",
    company: "Antler",
    description: "Validated early-stage tech concepts",
    period: "2024",
  },
  {
    role: "Head of Engineering",
    company: "Koinworks",
    description: "Led 50+ engineers across 5 product streams",
    period: "2021 - 2024",
  },
  {
    role: "Senior Principal Engineer",
    company: "Tiket.com",
    description: "Drove monolith to microservices migration",
    period: "2019 - 2021",
  },
  {
    role: "Senior Product Engineer",
    company: "Gojek",
    description: "Built fraud systems, open-sourced BaritoLog",
    period: "2015 - 2019",
  },
  {
    role: "Early career",
    company: "Entercrews, Phasedev, Citibank, BINUS University",
    description: "",
    period: "2007 - 2015",
  },
];

export const education: Education = {
  degree: "Master of Information Systems Management",
  school: "Bina Nusantara University",
  year: "2024",
};

export const writing: WritingEntry[] = [
  // populated later, leave as empty array for now
];

export const linkedinPosts: LinkedInPost[] = [
  // empty for now — paste LinkedIn's native embed iframe code here once posts are picked
];

export const socials: Socials = {
  linkedin: "https://www.linkedin.com/in/iman-tunggono/",
  medium: "https://medium.com/@imantung",
  github: "https://github.com/imantung",
};

export const quote: Quote = {
  text: "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.",
  author: "Zig Ziglar",
};
