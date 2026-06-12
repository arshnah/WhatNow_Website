"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { SEARCH_INDEX } from "@/data/searchIndex";

interface CareerItem {
  id: string;
  title: string;
  category: "Design" | "Fashion Design" | "Law" | "Defence" | "Management" | "Maritime" | "Urban Planning";
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
      status: "ready" as const,
      href: "/careers/law",
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
      status: "ready" as const,
      href: "/careers/merchant-navy",
      colorClass: {
        badge: "bg-orange-50 text-orange-600 border-orange-100",
        text: "text-orange-600",
        border: "hover:border-orange-300",
        glow: "group-hover:shadow-orange-500/5",
      }
    },
    {
      id: "urban-planning",
      title: "Urban Planning & Development",
      category: "Urban Planning" as const,
      subtitle: "Cities & Infrastructure",
      description: "Designing cities, transport systems, zoning regulations, and sustainable spaces. Merges architecture, sociology, and public policy.",
      duration: "4 Years (B.Plan)",
      salary: "₹5L - ₹12L/yr Starting",
      colleges: "SPAs (Delhi/Bhopal/Vijayawada), IITs, CEPT University",
      exitRisk: "Medium Risk / High Policy Dependency",
      status: "ready" as const,
      href: "/careers/urban-planning",
      colorClass: {
        badge: "bg-teal-50 text-teal-600 border-teal-100",
        text: "text-teal-600",
        border: "hover:border-teal-300",
        glow: "group-hover:shadow-teal-500/5",
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
      status: "ready" as const,
      href: "/careers/law",
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
      salary: "₹80,000 - ₹3,00,000/Month (कर-मुक्त)",
      colleges: "IMU परिसर, शीर्ष समुद्री संस्थान",
      exitRisk: "उच्च समुद्री समय जोखिम / विशिष्ट निकास",
      status: "ready" as const,
      href: "/careers/merchant-navy",
      colorClass: {
        badge: "bg-orange-50 text-orange-600 border-orange-100",
        text: "text-orange-600",
        border: "hover:border-orange-300",
        glow: "group-hover:shadow-orange-500/5",
      }
    },
    {
      id: "urban-planning",
      title: "शहरी नियोजन और विकास",
      category: "Urban Planning" as const,
      subtitle: "शहर और बुनियादी ढांचा",
      description: "शहरों, परिवहन प्रणालियों, ज़ोनिंग नियमों और टिकाऊ स्थानों को डिजाइन करना। वास्तुकला, समाजशास्त्र और सार्वजनिक नीति का समामेलन।",
      duration: "4 वर्ष (B.Plan)",
      salary: "₹5L - ₹12L/वर्ष शुरुआती",
      colleges: "SPAs (दिल्ली/भोपाल/विजयवाड़ा), IITs, CEPT विश्वविद्यालय",
      exitRisk: "मध्यम जोखिम / उच्च नीति निर्भरता",
      status: "ready" as const,
      href: "/careers/urban-planning",
      colorClass: {
        badge: "bg-teal-50 text-teal-600 border-teal-100",
        text: "text-teal-600",
        border: "hover:border-teal-300",
        glow: "group-hover:shadow-teal-500/5",
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
    "Maritime": "Maritime",
    "Urban Planning": "Urban Planning"
  },
  hi: {
    "All": "सभी",
    "Design": "डिज़ाइन",
    "Fashion Design": "फैशन डिज़ाइन",
    "Law": "कानून",
    "Defence": "रक्षा",
    "Management": "प्रबंधन",
    "Maritime": "मर्चेंट नेवी",
    "Urban Planning": "शहरी नियोजन"
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
    viewBlueprint: "View Blueprint",
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
    viewBlueprint: "ब्लूप्रिंट देखें",
  }
};

export default function CareersPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Design" | "Fashion Design" | "Law" | "Defence" | "Management" | "Maritime" | "Urban Planning">("All");

  const t = localTranslations[language];
  const CAREERS = CAREERS_DATA[language] as CareerItem[];
  const categoriesTranslations = CATEGORIES_TRANSLATIONS[language] as Record<string, string>;

  const filteredCareers = CAREERS.filter(
    (career) => selectedCategory === "All" || career.category === selectedCategory
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchSelectedIndex, setSearchSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ctrl+K to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchFocused(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter SEARCH_INDEX
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return SEARCH_INDEX.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchKw = item.keywords.some(kw => kw.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchKw;
    }).slice(0, 5); // limit to 5 results for clean dropdown height
  }, [searchQuery]);

  // Handle keyboard navigation inside search dropdown
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSearchSelectedIndex((prev) => (prev + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSearchSelectedIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const activeItem = searchResults[searchSelectedIndex];
      if (activeItem && activeItem.status !== "coming-soon") {
        router.push(activeItem.href);
        setIsSearchFocused(false);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsSearchFocused(false);
      searchInputRef.current?.blur();
    }
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-400 mb-8">
                <Link href="/" className="hover:text-primary transition-colors">{t.home}</Link>
                <span>›</span>
                <span className="text-primary">{t.careers}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
                {t.heroHeadline}<br />
                <span className="text-primary">{t.heroHeadlineSub}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                {t.heroDesc}
              </p>
            </div>

            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Glassmorphic dashboard stats & search block */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-[2.5rem] p-8 shadow-xl shadow-slate-100/50"
              >
                {/* Subtle top primary highlight bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary" />

                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <Icon icon="solar:compass-bold-duotone" className="w-4 h-4 text-primary" />
                  <span>{language === 'hi' ? 'करियर निर्देशिका' : 'Careers Directory'}</span>
                </h3>

                {/* Inline Search Bar with Dropdown */}
                <div ref={searchContainerRef} className="relative mb-6">
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/60 rounded-2xl px-5 py-4 w-full text-slate-550 text-sm font-medium transition-all shadow-xs focus-within:border-primary focus-within:bg-white">
                    <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400 shrink-0" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder={language === 'hi' ? 'खोजें (जैसे: design, law)...' : 'Search (e.g. design, law)...'}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSearchSelectedIndex(0);
                      }}
                      onFocus={() => setIsSearchFocused(true)}
                      onKeyDown={handleSearchKeyDown}
                      className="w-full text-neutral-dark placeholder-slate-400 bg-transparent focus:outline-none font-semibold text-sm"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSearchSelectedIndex(0);
                        }}
                        className="p-1 rounded-full text-slate-400 hover:text-neutral-dark hover:bg-slate-200/50 transition-colors cursor-pointer shrink-0"
                      >
                        <Icon icon="solar:close-circle-bold" className="w-4 h-4" />
                      </button>
                    )}
                    <kbd className="hidden sm:inline-block border border-slate-250 bg-white rounded-md px-1.5 py-0.5 text-[10px] font-bold text-slate-400 shrink-0">
                      Ctrl+K
                    </kbd>
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isSearchFocused && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 right-0 top-full mt-2 z-50 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-2xl shadow-slate-900/10 max-h-[300px] overflow-y-auto p-2 space-y-1"
                      >
                        {searchResults.map((item, idx) => {
                          const isSelected = idx === searchSelectedIndex;
                          const isComingSoon = item.status === 'coming-soon';
                          return (
                            <div
                              key={item.href}
                              onClick={() => {
                                if (!isComingSoon) {
                                  router.push(item.href);
                                  setIsSearchFocused(false);
                                }
                              }}
                              onMouseEnter={() => setSearchSelectedIndex(idx)}
                              className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer select-none transition-all ${
                                isSelected 
                                  ? "bg-slate-50 border border-slate-100" 
                                  : "bg-transparent border border-transparent"
                              } ${isComingSoon ? "opacity-60 cursor-not-allowed" : ""}`}
                            >
                              <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border ${
                                item.category === 'Careers' 
                                  ? 'text-secondary bg-secondary/5 border-secondary/10' 
                                  : item.category === 'Exams' 
                                  ? 'text-primary bg-primary/5 border-primary/10' 
                                  : 'text-accent bg-accent/5 border-accent/10'
                              }`}>
                                <Icon 
                                  icon={
                                    item.category === 'Careers' 
                                      ? "solar:compass-bold-duotone" 
                                      : item.category === 'Exams' 
                                      ? "solar:document-text-bold-duotone" 
                                      : "solar:book-bookmark-bold-duotone"
                                  } 
                                  className="w-4 h-4" 
                                />
                              </div>
                              <div className="flex-1 min-w-0 pr-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-xs font-black text-neutral-dark truncate">{item.title}</span>
                                  {isComingSoon && (
                                    <span className="text-[8px] font-black uppercase bg-orange-50 text-orange-500 border border-orange-100 px-1 py-0.2 rounded-sm tracking-wider">
                                      Soon
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] text-slate-450 line-clamp-1 leading-tight">{item.description}</span>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Empty state dropdown if query doesn't match */}
                  <AnimatePresence>
                    {isSearchFocused && searchQuery.trim() && searchResults.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 4 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-0 right-0 top-full mt-2 z-50 bg-white border border-slate-200/80 rounded-2xl shadow-xl p-6 text-center"
                      >
                        <span className="text-xs font-bold text-slate-400 block mb-1">
                          {language === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No results found'}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {language === 'hi' ? 'सक्रिय करियर या परीक्षाओं की खोज करें।' : 'Try searching for active guides.'}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50/60 rounded-2xl p-4 border border-slate-100/80 flex flex-col justify-center">
                    <span className="text-3xl font-black text-neutral-dark block mb-0.5 leading-none">5</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 leading-none">{language === 'hi' ? 'सक्रिय गाइड' : 'Active Guides'}</span>
                  </div>
                  
                  <div className="bg-slate-50/60 rounded-2xl p-4 border border-slate-100/80 flex flex-col justify-center">
                    <span className="text-3xl font-black text-primary block mb-0.5 leading-none">12+</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 leading-none">{language === 'hi' ? 'जल्द आ रहे हैं' : 'Coming Soon'}</span>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100/50 rounded-2xl p-4 col-span-2 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-100/60 flex items-center justify-center text-emerald-600 shrink-0">
                      <Icon icon="solar:shield-check-bold" className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-emerald-800 block mb-0.5 leading-tight">{language === 'hi' ? '100% निष्पक्ष और स्वतंत्र' : '100% Unbiased & Independent'}</span>
                      <span className="text-[9px] font-bold text-emerald-600/90 uppercase tracking-wide leading-none">{language === 'hi' ? 'कोई कोचिंग संबद्धता नहीं' : 'No coaching sponsors or agenda'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG DIRECTORY */}
      <section className="py-16 md:py-24 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Category Filters */}
        <div className="flex items-center gap-8 overflow-x-auto pb-0 mb-12 scrollbar-none border-b border-slate-200/50">
          {(["All", "Design", "Fashion Design", "Law", "Defence", "Management", "Maritime", "Urban Planning"] as const).map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative pb-4 text-xs md:text-sm font-extrabold uppercase tracking-widest transition-colors duration-300 cursor-pointer whitespace-nowrap select-none focus:outline-none ${isActive
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
                          <span>{t.viewBlueprint}</span>
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
