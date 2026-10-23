import type { IconName } from "../icons/icons";

export interface Profile {
  name: string;
  availability: string;
  headline: string;
  location: string;
  email: string;
}

export interface AboutItem {
  icon: IconName;
  title: string;
  text: string;
}

export interface About {
  intro: string[];
  helpAreas: AboutItem[];
  interests: AboutItem[];
}

export interface WritingEntry {
  source: "medium";
  title: string;
  excerpt: string;
  url: string;
  published: string; // ISO date, YYYY-MM-DD
}

export interface LinkedInPost {
  title: string;
  excerpt: string;
  url: string;
  published: string; // ISO date, YYYY-MM-DD
}

export interface Socials {
  linkedin: string;
  medium: string;
  github: string;
}

export const profile: Profile = {
  name: "Iman Tunggono",
  availability: "Open to fractional engagements",
  headline: "Engineering Leader | Fractional engineering leadership and system architecture",
  location: "Jakarta, Indonesia",
  email: "iman.tung@gmail.com",
};

export const about: About = {
  intro: [
    "I started as a backend engineer and grew into leading engineering organizations, most recently in hospitality technology and regulated fintech. Before that, I held senior engineering roles in travel marketplaces and on-demand mobility.",
    "I'm open to conversations with founders, business owners, and companies that need a fractional engineering leader or advisor, whether you're building a new product or improving an existing one. I'm also open to full-time engineering leadership roles.",
  ],
  helpAreas: [
    {
      icon: "rocket",
      title: "Team productivity and culture",
      text: "Set clear team boundaries, roles, and ownership. Introduce agile practices and SDLC standards (planning, QA, deployment) the team can keep. Coach new engineering managers as they move from building to leading.",
    },
    {
      icon: "layers",
      title: "Tech stack review",
      text: "Review your backend systems and infrastructure, find what slows you down or costs too much, and suggest practical improvements, from service design to cloud right-sizing.",
    },
    {
      icon: "gitBranch",
      title: "Open-source adoption",
      text: "Find where open-source tools can replace paid software, and plan a safe migration.",
    },
    {
      icon: "sparkles",
      title: "Applied AI adoption",
      text: "Find practical uses of AI in your workflows and products, with guardrails like human confirmation and role-based access.",
    },
  ],
  interests: [
    {
      icon: "cpu",
      title: "Applied AI in business systems",
      text: "I'm building an AI assistant for ERPNext as an independent project (in progress). It focuses on safe LLM workflows: human confirmation, role-based access, and strict tool schemas.",
    },
    {
      icon: "compass",
      title: "System design and software fundamentals",
      text: "How systems stay simple as they grow.",
    },
    {
      icon: "flag",
      title: "Engineering leadership",
      text: "How teams scale without losing ownership.",
    },
  ],
};

export const writing: WritingEntry[] = [
  {
    source: "medium",
    title: "The Evolution of Software Quality: Why We've Moved From QA to Quality Engineering",
    excerpt: "If engineers are good enough, do we still need QA? Why quality is shifting from manual verification to an engineering-first mindset.",
    url: "https://imantung.medium.com/the-evolution-of-software-quality-why-weve-moved-from-qa-to-quality-engineering-cc4f178408a0",
    published: "2026-05-15",
  },
  {
    source: "medium",
    title: "Productivity in Line, Bell & SPACE",
    excerpt: "Developer productivity is an awkward problem: simple input, a production process full of blind spots, and sometimes exaggerated output expectations.",
    url: "https://imantung.medium.com/productivity-in-line-bell-space-e6f4d51e2ddc",
    published: "2024-08-28",
  },
  {
    source: "medium",
    title: "Staff Engineer",
    excerpt: "Where the \"Staff\" title comes from, and what the role means on the engineering ladder.",
    url: "https://imantung.medium.com/staff-engineer-2f6a9a30d797",
    published: "2024-06-10",
  },
  {
    source: "medium",
    title: "Definition of Ready for Development Sanity",
    excerpt: "Treat the sprint as a protected space: the Definition of Ready decides what gets in, the Definition of Done decides what gets out.",
    url: "https://imantung.medium.com/definition-of-ready-for-development-sanity-ac5360e33b42",
    published: "2023-07-31",
  },
  {
    source: "medium",
    title: "Manage Bloated Postgres Database",
    excerpt: "Bloated tables hurt query performance and infra cost. Drop unused tables, archive old data, partition, maintain indexes, and vacuum.",
    url: "https://imantung.medium.com/manage-bloated-postgres-database-22e14ce382a9",
    published: "2023-07-05",
  },
  {
    source: "medium",
    title: "DRY (Don't Repeat Yourself) can Go Wrong",
    excerpt: "Don't repeat means don't repeat the thinking, not the typing. When two similar pieces of code serve different concerns, it's fine to be WET.",
    url: "https://imantung.medium.com/dry-dont-repeat-yourself-can-go-wrong-9bc0163bf484",
    published: "2022-08-07",
  },
];

// Newest first. Only the first few are shown on the page.
export const linkedinPosts: LinkedInPost[] = [
  {
    title: "70% of the Web at Risk: Understanding the \"php2shell\" Vulnerability",
    excerpt: "What the newly disclosed PHP flaws are, how dangerous they are, and why you should patch now.",
    url: "https://www.linkedin.com/posts/iman-tunggono_php-php2shell-infosec-activity-7518952770767331329-SdCl",
    published: "2026-10-22",
  },
  {
    title: "Low-Context vs Rich-Context Prompting in AI",
    excerpt: "How much context you put in a prompt marks the line between simple chat and production-grade AI system design.",
    url: "https://www.linkedin.com/posts/iman-tunggono_low-context-vs-rich-context-prompting-activity-7517422639926112256-YR2c",
    published: "2026-10-18",
  },
  {
    title: "LLM Engines vs AI Agents: Understanding the Difference",
    excerpt: "An LLM is an engine, not the end product, and lab benchmarks don't tell you how an AI agent behaves in the real world.",
    url: "https://www.linkedin.com/posts/iman-tunggono_ai-llm-aiagents-activity-7515277011448168448-SGMb",
    published: "2026-10-12",
  },
  {
    title: "Balancing AI Accuracy and Compute Cost with Intent Routers and Semantic Layers",
    excerpt: "Route each request by intent to a lightweight model, a SQL agent, or a RAG pipeline, instead of sending everything to the most expensive LLM.",
    url: "https://www.linkedin.com/posts/iman-tunggono_aiengineering-agenticai-semanticlayer-activity-7511227725550927872-H-5K",
    published: "2026-10-01",
  },
];

export const socials: Socials = {
  linkedin: "https://www.linkedin.com/in/iman-tunggono/",
  medium: "https://medium.com/@imantung",
  github: "https://github.com/imantung",
};

// Google Analytics 4 Measurement ID (Admin → Data Streams → your stream → "G-XXXXXXXXXX").
// Leave empty to disable analytics.
export const analyticsId: string = "G-LL225QW24X";
