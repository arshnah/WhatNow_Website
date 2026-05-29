export interface SearchItem {
  title: string;
  category: 'Careers' | 'Exams' | 'Reads' | 'General';
  description: string;
  href: string;
  keywords: string[];
  status?: 'ready' | 'coming-soon';
}

export const SEARCH_INDEX: SearchItem[] = [
  // --- GENERAL / CORE PAGES ---
  {
    title: "Home",
    category: "General",
    description: "Unbiased guides, real stories, and clear roadmaps for Indian students.",
    href: "/",
    keywords: ["home", "main", "landing", "whatnow", "website", "start"],
    status: "ready"
  },
  {
    title: "About WhatNow",
    category: "General",
    description: "Our mission to provide free, honest, non-sponsored career guidance without coaching agendas.",
    href: "/about",
    keywords: ["about us", "who are we", "our team", "free guidance", "mission", "values", "pillars", "agenda"],
    status: "ready"
  },
  {
    title: "How to Convince Your Parents",
    category: "General",
    description: "Arm yourself with placement stats, average salary data, and logical arguments for non-traditional careers.",
    href: "/convince-parents",
    keywords: ["parents", "convince", "family", "career choice", "job security", "prestige", "talking points"],
    status: "coming-soon"
  },
  {
    title: "Scholarships Database",
    category: "General",
    description: "Institute-wise fee waivers, MCM schemes, and state scholarships for professional degrees.",
    href: "/scholarships",
    keywords: ["scholarships", "financial aid", "fees", "loans", "waiver", "funding"],
    status: "coming-soon"
  },

  // --- EXAMS ---
  {
    title: "UCEED — Design at an IIT",
    category: "Exams",
    description: "Main hub for the UCEED entrance exam for Bachelor of Design (B.Des) programs at IIT Bombay, Delhi, Guwahati, and more.",
    href: "/exams/uceed",
    keywords: ["uceed", "iit", "design", "bdes", "entrance", "seats", "iit bombay", "iit delhi", "iit guwahati"],
    status: "ready"
  },
  {
    title: "UCEED — What It Is (Exam Breakdown)",
    category: "Exams",
    description: "Detailed guide to UCEED syllabus, Part A & Part B structure, marking scheme, eligibility, and marking rules.",
    href: "/exams/uceed/what-it-is",
    keywords: ["uceed", "syllabus", "paper pattern", "part a", "part b", "marking scheme", "msq", "mcq", "nat", "eligibility", "attempts"],
    status: "ready"
  },
  {
    title: "UCEED — Scholarships & Cost",
    category: "Exams",
    description: "Find tuition waivers, Merit-cum-Means (MCM) scholarships, SC/ST/PwD exemptions, and total cost breakdown for design at IITs.",
    href: "/exams/uceed/scholarships",
    keywords: ["uceed", "scholarships", "fees", "cost", "iit fees", "mcm waiver", "exemption", "sc st fees"],
    status: "ready"
  },
  {
    title: "UCEED — Is It For You?",
    category: "Exams",
    description: "Honest self-check to see if design at an IIT aligns with your interests, skills, and daily work preferences.",
    href: "/exams/uceed/is-it-for-you",
    keywords: ["uceed", "is design for me", "career check", "suitability", "work life", "design aptitude"],
    status: "coming-soon"
  },
  {
    title: "UCEED — Resources & Prep Plan",
    category: "Exams",
    description: "Books worth your money, free mock tests, previous question papers, and self-prep roadmaps without expensive coaching.",
    href: "/exams/uceed/resources",
    keywords: ["uceed", "books", "preparation", "self study", "prep plan", "mock tests", "papers", "study material"],
    status: "coming-soon"
  },
  {
    title: "UCEED — Convince Your Parents",
    category: "Exams",
    description: "Salary packages, placement figures, recruiters, and handling doubts regarding IIT B.Des vs B.Tech.",
    href: "/exams/uceed/convince-parents",
    keywords: ["uceed", "parents", "placements", "salary", "bdes salary", "recruitment", "career security"],
    status: "coming-soon"
  },
  {
    title: "NID — National Institute of Design",
    category: "Exams",
    description: "Guide to the NID DAT (Design Aptitude Test) for B.Des and M.Des programs across NID campuses.",
    href: "/exams/nid",
    keywords: ["nid", "nid dat", "ahmedabad", "design school", "creative test", "studio test"],
    status: "coming-soon"
  },
  {
    title: "NIFT — National Institute of Fashion Technology",
    category: "Exams",
    description: "Fashion design, fashion communication, and apparel production entrance guide.",
    href: "/exams/nift",
    keywords: ["nift", "fashion", "apparel", "design", "clothing", "communication"],
    status: "coming-soon"
  },
  {
    title: "NDA — National Defence Academy",
    category: "Exams",
    description: "Entry exam for army, navy, and air force officers after Class 12. SSB interview and physical standards.",
    href: "/exams/nda",
    keywords: ["nda", "defence", "army", "air force", "navy", "officer", "ssb", "upsc"],
    status: "coming-soon"
  },
  {
    title: "CLAT — Common Law Admission Test",
    category: "Exams",
    description: "Entrance for five-year integrated law degrees (BA LLB, BBA LLB) at India's National Law Universities.",
    href: "/exams/clat",
    keywords: ["clat", "law", "nlu", "legal", "bar council", "llb", "advocate"],
    status: "coming-soon"
  },

  // --- CAREERS ---
  {
    title: "UX/UI Designer",
    category: "Careers",
    description: "Design user interfaces, digital products, apps, and websites. Highly in-demand and tech-adjacent.",
    href: "/careers/ux-ui-design",
    keywords: ["ux", "ui", "product designer", "interaction design", "figma", "apps", "websites", "design careers"],
    status: "coming-soon"
  },
  {
    title: "Game Designer",
    category: "Careers",
    description: "Define gameplay systems, rules, levels, mechanics, and interactive stories behind video games.",
    href: "/careers/game-design",
    keywords: ["game design", "games", "gaming", "level designer", "mechanics", "playstation", "unity", "unreal"],
    status: "coming-soon"
  },
  {
    title: "Graphic Designer / Brand Specialist",
    category: "Careers",
    description: "Communicate visually through branding, layout, advertising, typography, and illustration.",
    href: "/careers/graphic-design",
    keywords: ["graphic", "branding", "logo", "advertising", "marketing", "visual", "illustration", "typography"],
    status: "coming-soon"
  },
  {
    title: "Merchant Navy Officer (Marine Career)",
    category: "Careers",
    description: "Salaries, sea time, cadet ships, tax-free income, and the true isolation on merchant vessels.",
    href: "/careers/merchant-navy",
    keywords: ["merchant navy", "marine", "ships", "deck cadet", "engine", "captain", "isolation", "sailor", "salary"],
    status: "coming-soon"
  },
  {
    title: "Urban & Regional Planner",
    category: "Careers",
    description: "Design public spaces, smart city transport layouts, sustainable developments, and municipal policies.",
    href: "/careers/urban-planning",
    keywords: ["urban planner", "city planning", "smart cities", "municipal", "gis", "geography", "architecture"],
    status: "coming-soon"
  },
  {
    title: "Forensic Scientist",
    category: "Careers",
    description: "Analyze DNA, solve crimes, investigate evidence, and work in state and central forensic science labs.",
    href: "/careers/forensic-science",
    keywords: ["forensic", "crime", "lab", "dna", "fingerprints", "investigation", "chemistry", "ballistics"],
    status: "coming-soon"
  },

  // --- READS / GUIDES ---
  {
    title: "Should you move to a metro city?",
    category: "Reads",
    description: "An honest check on whether moving to a tier-1 city like Bangalore or Mumbai is worth the rent and cost of living.",
    href: "/reads/moving-to-metro",
    keywords: ["metro", "city", "bangalore", "mumbai", "delhi", "rent", "cost of living", "exposure", "networking"],
    status: "coming-soon"
  },
  {
    title: "Is the IIT brand value actually worth it?",
    category: "Reads",
    description: "Comparing the IIT tag and network with other universities, and seeing when it matters versus when it doesn't.",
    href: "/reads/iit-brand-value",
    keywords: ["iit", "brand", "tag", "prestige", "jobs", "placements", "network", "alumni"],
    status: "coming-soon"
  },
  {
    title: "What does it actually mean to 'follow your passion'?",
    category: "Reads",
    description: "A reality check on separating hobbies from sustainable career paths that pay the bills.",
    href: "/reads/following-passion",
    keywords: ["passion", "dream job", "hobbies", "career advice", "stability", "skills", "market demand"],
    status: "coming-soon"
  },
  {
    title: "JEE Overwhelm: A Rational Guide to Drop-Years",
    category: "Reads",
    description: "Easing the pressure of JEE preparation, dealing with drop years rationally, and understanding alternative career routes.",
    href: "/reads/jee-drop-year",
    keywords: ["jee", "drop year", "pressure", "overwhelm", "mental health", "coaching", "failure", "stress", "alternatives"],
    status: "coming-soon"
  }
];
