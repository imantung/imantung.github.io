export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
}

export interface AboutItem {
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
}

export interface LinkedInPost {
  embedCode: string;
}

export interface Socials {
  linkedin: string;
  medium: string;
  github: string;
}

export const profile: Profile = {
  name: "Iman Tunggono",
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
      title: "Team productivity and culture",
      text: "Set clear team boundaries, roles, and ownership. Introduce agile practices and SDLC standards (planning, QA, deployment) the team can keep. Coach new engineering managers as they move from building to leading.",
    },
    {
      title: "Tech stack review",
      text: "Review your backend systems and infrastructure, find what slows you down or costs too much, and suggest practical improvements, from service design to cloud right-sizing.",
    },
    {
      title: "Open-source adoption",
      text: "Find where open-source tools can replace paid software, and plan a safe migration.",
    },
    {
      title: "Applied AI adoption",
      text: "Find practical uses of AI in your workflows and products, with guardrails like human confirmation and role-based access.",
    },
  ],
  interests: [
    {
      title: "Applied AI in business systems",
      text: "I'm building an AI assistant for ERPNext as an independent project (in progress). It focuses on safe LLM workflows: human confirmation, role-based access, and strict tool schemas.",
    },
    {
      title: "System design and software fundamentals",
      text: "How systems stay simple as they grow.",
    },
    {
      title: "Engineering leadership",
      text: "How teams scale without losing ownership.",
    },
  ],
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

// Google Analytics 4 Measurement ID (Admin → Data Streams → your stream → "G-XXXXXXXXXX").
// Leave empty to disable analytics.
export const analyticsId: string = "G-LL225QW24X";
