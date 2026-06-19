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
    status: "ready"
  },
  {
    title: "Scholarships Database",
    category: "General",
    description: "Institute-wise fee waivers, MCM schemes, and state scholarships for professional degrees.",
    href: "/scholarships",
    keywords: ["scholarships", "financial aid", "fees", "loans", "waiver", "funding"],
    status: "ready"
  },
  {
    title: "Contact",
    category: "General",
    description: "How to reach WhatNow — email, community Discord, and social channels.",
    href: "/contact",
    keywords: ["contact", "email", "reach us", "support", "discord", "get in touch", "help"],
    status: "ready"
  },
  {
    title: "FAQ",
    category: "General",
    description: "Honest answers to what students ask most — is it free, who's behind it, how accurate is the data.",
    href: "/faq",
    keywords: ["faq", "questions", "is it free", "who made this", "help", "answers", "frequently asked"],
    status: "ready"
  },
  {
    title: "Content Policy",
    category: "General",
    description: "What WhatNow publishes, accuracy and corrections, community rules, IP, and how to report content.",
    href: "/content-policy",
    keywords: ["content policy", "rules", "report", "takedown", "copyright", "community", "moderation", "corrections"],
    status: "ready"
  },
  {
    title: "Credits",
    category: "General",
    description: "The people behind WhatNow and the open-source projects, typefaces, and icon sets the site is built with.",
    href: "/credits",
    keywords: ["credits", "colophon", "built with", "open source", "fonts", "icons", "attribution", "thanks", "tech stack"],
    status: "ready"
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
    status: "ready"
  },
  {
    title: "UCEED — Resources & Prep Plan",
    category: "Exams",
    description: "Books worth your money, free mock tests, previous question papers, and self-prep roadmaps without expensive coaching.",
    href: "/exams/uceed/resources",
    keywords: ["uceed", "books", "preparation", "self study", "prep plan", "mock tests", "papers", "study material"],
    status: "ready"
  },
  {
    title: "UCEED — Convince Your Parents",
    category: "Exams",
    description: "Salary packages, placement figures, recruiters, and handling doubts regarding IIT B.Des vs B.Tech.",
    href: "/exams/uceed/convince-parents",
    keywords: ["uceed", "parents", "placements", "salary", "bdes salary", "recruitment", "career security"],
    status: "ready"
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
    status: "ready"
  },
  {
    title: "NIFT — What It Is (Exam Breakdown)",
    category: "Exams",
    description: "Detailed guide to NIFT CAT & GAT paper patterns, marks weightage, eligibility, and the Situation Test.",
    href: "/exams/nift/what-it-is",
    keywords: ["nift", "syllabus", "creative ability test", "cat", "general ability test", "gat", "situation test", "eligibility", "weightage"],
    status: "ready"
  },
  {
    title: "NIFT — Fees & Scholarships",
    category: "Exams",
    description: "Course fee details for B.Des and B.FTech at NIFT, and the Sarthak Financial Assistance scheme waivers.",
    href: "/exams/nift/scholarships",
    keywords: ["nift", "fees", "scholarships", "cost", "sarthak scheme", "fee waiver", "financial aid"],
    status: "ready"
  },
  {
    title: "NIFT — Is It For You?",
    category: "Exams",
    description: "Honest self-check to see if studying fashion design, technology, or merchandising at NIFT is the right fit.",
    href: "/exams/nift/is-it-for-you",
    keywords: ["nift", "is fashion design for me", "suitability", "fashion career", "work life", "merchandising"],
    status: "ready"
  },
  {
    title: "NIFT — Resources & Prep Plan",
    category: "Exams",
    description: "Curated self-study guides, sample questions, and books to prep for CAT, GAT, and the Situation Test.",
    href: "/exams/nift/resources",
    keywords: ["nift", "books", "preparation", "self study", "mock tests", "situation test prep"],
    status: "ready"
  },
  {
    title: "NIFT — Convince Your Parents",
    category: "Exams",
    description: "Equipping students with retail industry placements statistics, career stability metrics, and talking points to align parents on fashion careers.",
    href: "/exams/nift/convince-parents",
    keywords: ["nift", "parents", "convince", "family", "career security", "placements", "salary"],
    status: "ready"
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
    status: "ready"
  },
  {
    title: "CLAT — Exam Pattern & Sectional Weightage",
    category: "Exams",
    description: "Detailed guide to the Common Law Admission Test (CLAT) syllabus, questions distribution, marking scheme, and time management.",
    href: "/exams/clat/what-it-is",
    keywords: ["clat", "pattern", "syllabus", "marking", "weightage", "english", "logic", "legal", "reasoning"],
    status: "ready"
  },
  {
    title: "CLAT — NLU Seat Matrix, Fees & Scholarships",
    category: "Exams",
    description: "NLU-by-NLU seat allocation, reservation policies, domicile quotas, and historical opening/closing ranks.",
    href: "/exams/clat/scholarships",
    keywords: ["clat", "seats", "cutoff", "fees", "scholarships", "nlsiu", "nalsar", "nujs"],
    status: "ready"
  },
  {
    title: "CLAT — Self-Study Plan & Mock Strategy",
    category: "Exams",
    description: "Preparation strategy, best books, mock test resources, and planning strategy for self-study candidates.",
    href: "/exams/clat/resources",
    keywords: ["clat", "self study", "mock tests", "preparation", "books", "strategy"],
    status: "ready"
  },
  {
    title: "CLAT — Is It For You? & AILET Comparison",
    category: "Exams",
    description: "Honest self-check for suitability, NLU Delhi AILET comparison, and corporate desk vs litigation realities.",
    href: "/exams/clat/is-it-for-you",
    keywords: ["clat", "ailet", "suitability", "career path", "corporate law", "litigation"],
    status: "ready"
  },
  {
    title: "CLAT — Convince Your Parents",
    category: "Exams",
    description: "Equipping students with corporate law firm placements statistics, career stability metrics, and talking points to align parents on legal careers.",
    href: "/exams/clat/convince-parents",
    keywords: ["clat", "parents", "convince", "family", "career security", "placements", "salary"],
    status: "ready"
  },
  {
    title: "IMU CET — Indian Maritime University Common Entrance Test",
    category: "Exams",
    description: "Entrance exam for B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science programs at IMU.",
    href: "/exams/imu-cet",
    keywords: ["imu cet", "imu", "cet", "merchant navy", "marine engineering", "nautical science", "dns", "bsc", "btech", "maritime"],
    status: "ready"
  },
  {
    title: "IMU CET — Full Exam Breakdown",
    category: "Exams",
    description: "Syllabus breakdown, Physics, Chemistry, Maths, English, and Aptitude distribution, registration, and counselling.",
    href: "/exams/imu-cet/what-it-is",
    keywords: ["imu cet", "syllabus", "pattern", "subjects", "registration", "counselling"],
    status: "ready"
  },
  {
    title: "IMU CET — DNS vs B.Sc vs B.Tech paths",
    category: "Exams",
    description: "Duration, fees, sea-time, sponsorships, placements, and earning potential compared across all three maritime paths.",
    href: "/exams/imu-cet/scholarships",
    keywords: ["imu cet", "dns", "bsc", "btech", "nautical science", "marine engineering", "fees", "sponsorship"],
    status: "ready"
  },
  {
    title: "IMU CET — Preparation Strategy",
    category: "Exams",
    description: "Subject-wise preparation strategy, best books, mock test resources, previous year papers, and study roadmap.",
    href: "/exams/imu-cet/resources",
    keywords: ["imu cet", "preparation", "books", "mocks", "study plan", "roadmap"],
    status: "ready"
  },
  {
    title: "IMU CET — Medical Fitness & DG Shipping Norms",
    category: "Exams",
    description: "Complete guide to the mandatory medical fitness test: vision rules (6/6 eye sight), colour blindness, and BMI.",
    href: "/exams/imu-cet/is-it-for-you",
    keywords: ["imu cet", "medical fitness", "eyesight", "vision", "colour blindness", "bmi", "dg shipping"],
    status: "ready"
  },
  {
    title: "IMU CET — Convince Your Parents",
    category: "Exams",
    description: "Addressing merchant navy risk concerns, lonely life myths, high USD tax-free salaries, and cadet rotation structures.",
    href: "/exams/imu-cet/convince-parents",
    keywords: ["imu cet", "parents", "convince", "family", "career security", "salary", "risk"],
    status: "ready"
  },
  {
    title: "JEE Main Paper 3 — B.Planning Entrance",
    category: "Exams",
    description: "Exclusive national entrance for B.Plan courses at SPA Delhi, Bhopal, Vijayawada and top NITs.",
    href: "/exams/jee-paper3",
    keywords: ["jee paper 3", "bplanning", "bplan", "spa", "spa delhi", "spa bhopal", "spa vijayawada", "entrance"],
    status: "ready"
  },
  {
    title: "JEE Main Paper 3 — Exam Pattern & Syllabus",
    category: "Exams",
    description: "Detailed syllabus breakdown of JEE B.Planning: Mathematics, general aptitude, and planning-specific questions.",
    href: "/exams/jee-paper3/what-it-is",
    keywords: ["jee paper 3", "syllabus", "pattern", "planning questions", "part iii", "marking"],
    status: "ready"
  },
  {
    title: "JEE Main Paper 3 — SPA Fees, Seats & ROI",
    category: "Exams",
    description: "JoSAA seat matrix, reservation policies, tuition fees at School of Planning and Architecture campuses.",
    href: "/exams/jee-paper3/scholarships",
    keywords: ["jee paper 3", "fees", "seats", "spa fees", "josaa", "cutoff", "roi"],
    status: "ready"
  },
  {
    title: "JEE Main Paper 3 — Study Material & Prep Guides",
    category: "Exams",
    description: "Self-prep blueprints, Part III planning guides, free mock resources, and official syllabus guidelines.",
    href: "/exams/jee-paper3/resources",
    keywords: ["jee paper 3", "books", "study material", "preparation", "mocks", "self study"],
    status: "ready"
  },
  {
    title: "JEE Main Paper 3 — B.Plan Suitability",
    category: "Exams",
    description: "Honest check on whether urban planning is the right fit. B.Plan vs B.Arch vs Civil Engineering comparison.",
    href: "/exams/jee-paper3/is-it-for-you",
    keywords: ["jee paper 3", "bplan vs barch", "suitability", "urban planner", "career choice"],
    status: "ready"
  },
  {
    title: "JEE Main Paper 3 — Convince Your Parents",
    category: "Exams",
    description: "Equipping students with real-world urban planning placement statistics, career stability metrics, and talking points to align parents on B.Plan decisions.",
    href: "/exams/jee-paper3/convince-parents",
    keywords: ["jee paper 3", "parents", "convince", "family", "career security", "placements", "salary"],
    status: "ready"
  },

  // --- CAREERS ---
  {
    title: "Design — Creative Problem Solving",
    category: "Careers",
    description: "Design user interfaces, digital products, apps, websites, branding, typography, and illustration.",
    href: "/careers/design",
    keywords: ["design", "designer", "ux", "ui", "product design", "graphic design", "creative", "branding"],
    status: "ready"
  },
  {
    title: "Fashion Design — Beyond the Runway",
    category: "Careers",
    description: "Merchandising, textiles, retail management, and apparel technology starting packages and pathways in India.",
    href: "/careers/fashion-design",
    keywords: ["fashion design", "fashion", "nift", "clothing", "textiles", "apparel", "merchandising"],
    status: "ready"
  },
  {
    title: "Law — Advocacy, Corporate & Litigation",
    category: "Careers",
    description: "High-paying corporate desks vs litigation grinding, National Law School ROI, and integrated LLB routes.",
    href: "/careers/law",
    keywords: ["law", "lawyer", "corporate law", "litigation", "clat", "nlu", "advocate", "bar council", "judge"],
    status: "ready"
  },
  {
    title: "Merchant Navy Officer (Marine Career)",
    category: "Careers",
    description: "Salaries, sea time, cadet ships, tax-free income, and the true isolation on merchant vessels.",
    href: "/careers/merchant-navy",
    keywords: ["merchant navy", "marine", "ships", "deck cadet", "engine", "captain", "isolation", "sailor", "salary"],
    status: "ready"
  },
  {
    title: "Urban & Regional Planner",
    category: "Careers",
    description: "Design public spaces, smart city transport layouts, sustainable developments, and municipal policies.",
    href: "/careers/urban-planning",
    keywords: ["urban planner", "city planning", "smart cities", "municipal", "gis", "geography", "architecture"],
    status: "ready"
  },
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
    title: "Forensic Scientist",
    category: "Careers",
    description: "Analyze DNA, solve crimes, investigate evidence, and work in state and central forensic science labs.",
    href: "/careers/forensic-science",
    keywords: ["forensic", "crime", "lab", "dna", "fingerprints", "investigation", "chemistry", "ballistics"],
    status: "coming-soon"
  },

  // --- READS / GUIDES ---
  {
    title: "Is an IIT brand name worth a drop year?",
    category: "Reads",
    description: "An honest breakdown of the IIT tag value, return on investment of a gap year, and the mental tax no one warns you about before you drop.",
    href: "/reads/iit-drop-year",
    keywords: ["iit", "drop", "gap year", "jee", "advanced", "career cost", "roi", "mental health"],
    status: "ready"
  },
  {
    title: "How to talk creative fields with engineering parents?",
    category: "Reads",
    description: "A step-by-step communication playbook for students pitching design, film, or writing to parents who only understand engineering and medicine.",
    href: "/reads/talk-creative-fields",
    keywords: ["parents", "creative", "family", "convince", "pitch", "design", "fashion", "engineering"],
    status: "ready"
  },
  {
    title: "Transitioning cities for work: Guide for juniors",
    category: "Reads",
    description: "Real, raw advice on finding PG hostels, budgeting for food, managing commutes, and surviving your first six months in a new Indian metro.",
    href: "/reads/transitioning-cities",
    keywords: ["city", "move", "pg", "flat", "budget", "commute", "survival", "metro", "junior"],
    status: "ready"
  }
];
