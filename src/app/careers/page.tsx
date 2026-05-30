"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface CareerItem {
  id: string;
  title: string;
  category: "Design" | "Fashion Design" | "Law" | "Defence" | "Management" | "Maritime";
  subtitle: string;
  description: string;
  duration: string;
  salary: string;
  colleges: string;
  exitRisk: string;
  status: "ready" | "coming-soon";
  href?: string;
  colorClass: {
    badge: string;
    text: string;
    border: string;
    glow: string;
  };
}

const CAREERS_DATA = {
  en: [
    {
      id: "design",
      title: "Product & UX Design",
      category: "Design" as const,
      subtitle: "Creative Problem Solving",
      description: "Crafting interfaces, digital products, and physical objects. A high-growth industry blending art, psychology, and technology.",
      duration: "4 Years (B.Des)",
      salary: "₹6L - ₹18L/yr Starting",
      colleges: "IITs, NIDs, NIFTs, Private Academies",
      exitRisk: "Medium Risk / Dynamic",
      status: "ready" as const,
      href: "/careers/design",
      colorClass: {
        badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
        text: "text-indigo-600",
        border: "hover:border-indigo-300",
        glow: "group-hover:shadow-indigo-500/5",
      }
    },
    {
      id: "fashion-design",
      title: "Fashion Design & Textile Technology",
      category: "Fashion Design" as const,
      subtitle: "Merchandising, Textiles & Apparel",
      description: "Far from the glamour of fashion weeks, 95% of designers work in garment construction, fabric sourcing, apparel technology, and retail merchandising across India's massive export industry.",
      duration: "4 Years (B.Des / NIFT)",
      salary: "₹4L - ₹10L/yr Starting",
      colleges: "NIFTs, Pearl Academy, Symbiosis",
      exitRisk: "High Pace / Moderate Exit",
      status: "ready" as const,
      href: "/careers/fashion-design",
      colorClass: {
        badge: "bg-pink-50 text-pink-600 border-pink-100",
        text: "text-pink-600",
        border: "hover:border-pink-300",
        glow: "group-hover:shadow-pink-500/5",
      }
    },
    {
      id: "law",
      title: "Corporate & Litigation Law",
      category: "Law" as const,
      subtitle: "Legal Advisory & Advocacy",
      description: "Advocating for clients in courtrooms or advisory firms. Requires sharp analytical thinking, intense reading, and oral fluency.",
      duration: "5 Years (Integrated LLB)",
      salary: "₹5L - ₹15L/yr Starting",
      colleges: "National Law Universities (NLUs)",
      exitRisk: "Low Risk / High Rigour",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
        text: "text-emerald-600",
        border: "hover:border-emerald-300",
        glow: "group-hover:shadow-emerald-500/5",
      }
    },
    {
      id: "defence",
      title: "Armed Forces Officer",
      category: "Defence" as const,
      subtitle: "Leadership & Service",
      description: "Serving the nation as commissioned officers in the Army, Navy, or Air Force. High-integrity leadership, adventure, and regimented life.",
      duration: "3 Yrs Academic + 1 Yr Training",
      salary: "₹56,100 Base + Allowances",
      colleges: "NDA Khadakwasla, IMA, OTA",
      exitRisk: "Low Risk / High Sacrifice",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-sky-50 text-sky-600 border-sky-100",
        text: "text-sky-600",
        border: "hover:border-sky-300",
        glow: "group-hover:shadow-sky-500/5",
      }
    },
    {
      id: "management",
      title: "Product Management & Strategy",
      category: "Management" as const,
      subtitle: "Business Operations",
      description: "Steering product vision, cross-functional engineering execution, and market positioning. Demands cross-domain knowledge.",
      duration: "3-4 Yrs BTech/BBA + MBA",
      salary: "₹8L - ₹22L/yr Starting",
      colleges: "IIMs, FMS, Top B-Schools",
      exitRisk: "Medium Risk / High Reward",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-purple-50 text-purple-600 border-purple-100",
        text: "text-purple-600",
        border: "hover:border-purple-300",
        glow: "group-hover:shadow-purple-500/5",
      }
    },
    {
      id: "maritime",
      title: "Merchant Navy Deck Officer / Engineer",
      category: "Maritime" as const,
      subtitle: "Global Seafaring",
      description: "Navigating commercial cargo ships or managing ship propulsion systems. Extremely high tax-free pay mixed with months of isolation at sea.",
      duration: "1 to 4 Years (DNS/B.Sc/B.Tech)",
      salary: "₹80,000 - ₹3,00,000/mo (Tax-Free)",
      colleges: "IMU Campuses, Top Marine Institutes",
      exitRisk: "High Sea-Time Risk / Niche Exit",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-orange-550 text-orange-600 border-orange-100",
        text: "text-orange-600",
        border: "hover:border-orange-300",
        glow: "group-hover:shadow-orange-500/5",
      }
    }
  ],
  hi: [
    {
      id: "design",
      title: "प्रोडक्ट और यूएक्स डिज़ाइन",
      category: "Design" as const,
      subtitle: "सृजनात्मक समस्या समाधान",
      description: "इंटरफेस, डिजिटल उत्पाद और भौतिक वस्तुओं को तैयार करना। कला, मनोविज्ञान और प्रौद्योगिकी का सम्मिश्रण करने वाला एक उच्च-विकास उद्योग।",
      duration: "4 वर्ष (B.Des)",
      salary: "₹6L - ₹18L/वर्ष शुरुआती",
      colleges: "IITs, NIDs, NIFTs, निजी अकादमियां",
      exitRisk: "मध्यम जोखिम / गतिशील",
      status: "ready" as const,
      href: "/careers/design",
      colorClass: {
        badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
        text: "text-indigo-600",
        border: "hover:border-indigo-300",
        glow: "group-hover:shadow-indigo-500/5",
      }
    },
    {
      id: "fashion-design",
      title: "फैशन डिज़ाइन और टेक्सटाइल तकनीक",
      category: "Fashion Design" as const,
      subtitle: "मर्चेंडाइजिंग, टेक्सटाइल और परिधान",
      description: "फैशन वीक के ग्लैमर से इतर, 95% डिजाइनर भारत के विशाल निर्यात उद्योग में औद्योगिक परिधान निर्माण, कपड़ा सोर्सिंग, परिधान प्रौद्योगिकी और खुदरा मर्चेंडाइजिंग में काम करते हैं।",
      duration: "4 वर्ष (B.Des / NIFT)",
      salary: "₹4L - ₹10L/वर्ष शुरुआती",
      colleges: "NIFTs, पर्ल अकादमी, सिम्बायोसिस",
      exitRisk: "तेज गति / मध्यम निकास",
      status: "ready" as const,
      href: "/careers/fashion-design",
      colorClass: {
        badge: "bg-pink-50 text-pink-600 border-pink-100",
        text: "text-pink-600",
        border: "hover:border-pink-300",
        glow: "group-hover:shadow-pink-500/5",
      }
    },
    {
      id: "law",
      title: "कॉर्पोरेट और मुकदमेबाजी कानून",
      category: "Law" as const,
      subtitle: "कानूनी सलाहकार और वकालत",
      description: "अदालतों या सलाहकार फर्मों में ग्राहकों के लिए वकालत करना। तीव्र विश्लेषणात्मक सोच, गहन अध्ययन और मौखिक प्रवाह की आवश्यकता होती है।",
      duration: "5 वर्ष (एकीकृत LLB)",
      salary: "₹5L - ₹15L/वर्ष शुरुआती",
      colleges: "नेशनल लॉ यूनिवर्सिटीज (NLUs)",
      exitRisk: "कम जोखिम / उच्च कठोरता",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
        text: "text-emerald-600",
        border: "hover:border-emerald-300",
        glow: "group-hover:shadow-emerald-500/5",
      }
    },
    {
      id: "defence",
      title: "सशस्त्र बल अधिकारी",
      category: "Defence" as const,
      subtitle: "नेतृत्व और सेवा",
      description: "सेना, नौसेना या वायु सेना में कमीशन अधिकारियों के रूप में राष्ट्र की सेवा करना। उच्च-अखंडता नेतृत्व, रोमांच और अनुशासित जीवन।",
      duration: "3 वर्ष शैक्षणिक + 1 वर्ष प्रशिक्षण",
      salary: "₹56,100 मूल + भत्ते",
      colleges: "NDA खड़कवासला, IMA, OTA",
      exitRisk: "कम जोखिम / उच्च बलिदान",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-sky-50 text-sky-600 border-sky-100",
        text: "text-sky-600",
        border: "hover:border-sky-300",
        glow: "group-hover:shadow-sky-500/5",
      }
    },
    {
      id: "management",
      title: "उत्पाद प्रबंधन और रणनीति",
      category: "Management" as const,
      subtitle: "व्यावसायिक संचालन",
      description: "उत्पाद दृष्टि, क्रॉस-फंक्शनल इंजीनियरिंग निष्पादन और बाजार स्थिति को निर्देशित करना। क्रॉस-डोमेन ज्ञान की मांग करता है।",
      duration: "3-4 वर्ष BTech/BBA + MBA",
      salary: "₹8L - ₹22L/वर्ष शुरुआती",
      colleges: "IIMs, FMS, शीर्ष बी-स्कूल",
      exitRisk: "मध्यम जोखिम / उच्च पुरस्कार",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-purple-50 text-purple-600 border-purple-100",
        text: "text-purple-600",
        border: "hover:border-purple-300",
        glow: "group-hover:shadow-purple-500/5",
      }
    },
    {
      id: "maritime",
      title: "मर्चेंट नेवी डेक अधिकारी / इंजीनियर",
      category: "Maritime" as const,
      subtitle: "वैश्विक समुद्री यात्रा",
      description: "वाणिज्यिक मालवाहक जहाजों को नेविगेट करना या जहाज प्रणोदन प्रणालियों का प्रबंधन करना। समुद्र में महीनों के अलगाव के साथ अत्यधिक उच्च कर-मुक्त वेतन।",
      duration: "1 से 4 वर्ष (DNS/B.Sc/B.Tech)",
      salary: "₹80,000 - ₹3,00,000/माह (कर-मुक्त)",
      colleges: "IMU परिसर, शीर्ष समुद्री संस्थान",
      exitRisk: "उच्च समुद्री समय जोखिम / विशिष्ट निकास",
      status: "coming-soon" as const,
      colorClass: {
        badge: "bg-orange-50 text-orange-600 border-orange-100",
        text: "text-orange-600",
        border: "hover:border-orange-300",
        glow: "group-hover:shadow-orange-500/5",
      }
    }
  ]
};

const CATEGORIES_TRANSLATIONS = {
  en: {
    "All": "All",
    "Design": "Design",
    "Fashion Design": "Fashion Design",
    "Law": "Law",
    "Defence": "Defence",
    "Management": "Management",
    "Maritime": "Maritime"
  },
  hi: {
    "All": "सभी",
    "Design": "डिज़ाइन",
    "Fashion Design": "फैशन डिज़ाइन",
    "Law": "कानून",
    "Defence": "रक्षा",
    "Management": "प्रबंधन",
    "Maritime": "मर्चेंट नेवी"
  }
};

const localTranslations = {
  en: {
    home: "Home",
    careers: "Careers",
    heroHeadline: "Career Blueprints.",
    heroHeadlineSub: "Honest roads to real options.",
    heroDesc: "No jargon, no university sponsorships, and no marketing fluff. We detail what the day-to-day work actually feels like, standard salary progressions, and how to break in.",
    comingSoon: "Coming Soon",
    duration: "Duration",
    salary: "Salary",
    colleges: "Institutes",
    exitRisk: "Risk Profile",
    inDev: "Blueprint in development",
  },
  hi: {
    home: "होम",
    careers: "करियर",
    heroHeadline: "करियर ब्लूप्रिंट।",
    heroHeadlineSub: "वास्तविक विकल्पों के ईमानदार रास्ते।",
    heroDesc: "कोई तकनीकी शब्दजाल नहीं, कोई विश्वविद्यालय प्रायोजन नहीं, और कोई विपणन नौटंकी नहीं। हम विवरण देते हैं कि दैनिक कार्य वास्तव में कैसा महसूस होता है, मानक वेतन प्रगति और कैसे प्रवेश करें।",
    comingSoon: "जल्द आ रहा है",
    duration: "अवधि",
    salary: "वेतन",
    colleges: "संस्थान",
    exitRisk: "जोखिम प्रोफ़ाइल",
    inDev: "ब्लूप्रिंट विकास में है",
  }
};

export default function CareersPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Design" | "Fashion Design" | "Law" | "Defence" | "Management" | "Maritime">("All");

  const t = localTranslations[language];
  const CAREERS = CAREERS_DATA[language] as CareerItem[];
  const categoriesTranslations = CATEGORIES_TRANSLATIONS[language] as Record<string, string>;

  const filteredCareers = CAREERS.filter(
    (career) => selectedCategory === "All" || career.category === selectedCategory
  );

  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      {/* HERO / HEADER */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          
          {/* Layered glowing blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[450px] h-[450px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[350px] h-[350px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{t.home}</Link>
            <span>›</span>
            <span className="text-primary">{t.careers}</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
              {t.heroHeadline}<br />
              <span className="text-primary">{t.heroHeadlineSub}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* CATALOG DIRECTORY */}
      <section className="py-16 md:py-24 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Category Filters */}
        <div className="flex items-center gap-8 overflow-x-auto pb-0 mb-12 scrollbar-none border-b border-slate-200/50">
          {(["All", "Design", "Fashion Design", "Law", "Defence", "Management", "Maritime"] as const).map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative pb-4 text-xs md:text-sm font-extrabold uppercase tracking-widest transition-colors duration-300 cursor-pointer whitespace-nowrap select-none focus:outline-none ${
                  isActive
                    ? "text-neutral-dark font-black"
                    : "text-slate-400 hover:text-neutral-dark"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className="relative z-10">{categoriesTranslations[category]}</span>
                
                {/* Underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeCareerCategoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full z-20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Careers Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCareers.map((career) => {
              const getGlowBg = (cat: string) => {
                switch (cat.toLowerCase()) {
                  case "design":
                    return "bg-indigo-500/5";
                  case "fashion design":
                    return "bg-pink-500/5";
                  case "law":
                    return "bg-emerald-500/5";
                  case "defence":
                  case "defense":
                    return "bg-sky-500/5";
                  case "management":
                    return "bg-purple-500/5";
                  case "maritime":
                    return "bg-orange-500/5";
                  default:
                    return "bg-slate-500/5";
                }
              };

              const displayCategory = categoriesTranslations[career.category] || career.category;
              const isReady = career.status === "ready";

              if (isReady) {
                return (
                  <motion.div
                    key={career.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group flex"
                  >
                    <Link
                      href={career.href || "#"}
                      className="relative overflow-hidden bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between w-full shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5 transition-all duration-500 text-left select-none group"
                    >
                      {/* Ambient glow blob */}
                      <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${getGlowBg(career.category)}`} />

                      <div className="relative z-10">
                        {/* Top Badges */}
                        <div className="flex items-center justify-between mb-8 gap-3">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border shadow-sm ${career.colorClass.badge}`}>
                            {displayCategory}
                          </span>
                        </div>

                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-black text-neutral-dark mb-1 group-hover:text-primary transition-colors duration-300">
                            {career.title}
                          </h3>
                          <p className="text-sm font-semibold text-slate-450 uppercase tracking-wider">
                            {career.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-550 text-sm md:text-base leading-relaxed mb-8">
                          {career.description}
                        </p>
                      </div>

                      {/* Stats & Footer */}
                      <div className="relative z-10 border-t border-slate-200/60 pt-6 mt-auto w-full">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-semibold text-slate-550 mb-6 bg-slate-50 border border-slate-200/30 rounded-2xl p-4">
                          <div>
                            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.duration}</span>
                            <span className="font-bold text-neutral-dark truncate block">{career.duration}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.salary}</span>
                            <span className="font-bold text-neutral-dark truncate block">{career.salary}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.colleges}</span>
                            <span className="font-bold text-neutral-dark truncate block">{career.colleges}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.exitRisk}</span>
                            <span className="font-bold text-neutral-dark truncate block">{career.exitRisk}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 justify-end text-xs font-black uppercase tracking-wider text-neutral-dark group-hover:text-primary transition-colors duration-300">
                          <span>View Blueprint</span>
                          <Icon icon="ph:arrow-right" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={career.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group flex"
                >
                  <div
                    className="relative overflow-hidden bg-slate-50 border border-slate-200/60 rounded-[2rem] p-8 flex flex-col justify-between w-full opacity-70 shadow-none cursor-not-allowed select-none transition-all duration-500"
                  >
                    {/* Ambient glow blob */}
                    <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${getGlowBg(career.category)}`} />

                    <div className="relative z-10">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-8 gap-3">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border shadow-sm ${career.colorClass.badge}`}>
                          {displayCategory}
                        </span>

                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 bg-orange-50/50 border border-orange-100 px-3.5 py-1.5 rounded-full shadow-sm">
                          {t.comingSoon}
                        </span>
                      </div>

                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-black text-neutral-dark mb-1">
                          {career.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-450 uppercase tracking-wider">
                          {career.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-550 text-sm md:text-base leading-relaxed mb-8">
                        {career.description}
                      </p>
                    </div>

                    {/* Stats & Footer */}
                    <div className="relative z-10 border-t border-slate-200/60 pt-6 mt-auto">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-semibold text-slate-550 mb-6 bg-slate-100/50 border border-slate-200/30 rounded-2xl p-4">
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.duration}</span>
                          <span className="font-bold text-neutral-dark truncate block">{career.duration}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.salary}</span>
                          <span className="font-bold text-neutral-dark truncate block">{career.salary}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.colleges}</span>
                          <span className="font-bold text-neutral-dark truncate block">{career.colleges}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t.exitRisk}</span>
                          <span className="font-bold text-neutral-dark truncate block">{career.exitRisk}</span>
                        </div>
                      </div>

                      <div className="text-right text-xs font-bold text-slate-400 italic">
                        {t.inDev}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
