"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { VOICES, Voice } from "@/data/voices";

const isDev = process.env.NODE_ENV !== "production";

const CATEGORY_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    "all": "All Careers",
    "merchant-navy": "Merchant Navy",
    "design": "Design",
    "fashion-design": "Fashion Design",
    "law": "Law",
    "urban-planning": "Urban Planning",
  },
  hi: {
    "all": "सभी करियर",
    "merchant-navy": "मर्चेंट नेवी",
    "design": "डिज़ाइन",
    "fashion-design": "फैशन डिज़ाइन",
    "law": "कानून",
    "urban-planning": "शहरी नियोजन",
  }
};

const VERTICAL_COLORS: Record<string, { badge: string; glow: string; text: string; border: string }> = {
  "merchant-navy": {
    badge: "bg-orange-50 text-orange-600 border-orange-100/50 dark:bg-orange-950/20 dark:text-orange-300 dark:border-orange-900/40",
    glow: "bg-orange-500/5 group-hover:bg-orange-500/10",
    text: "text-orange-600 dark:text-orange-400",
    border: "hover:border-orange-300 dark:hover:border-orange-800 hover:shadow-orange-500/5"
  },
  "design": {
    badge: "bg-indigo-50 text-indigo-600 border-indigo-100/50 dark:bg-indigo-950/20 dark:text-indigo-300 dark:border-indigo-900/40",
    glow: "bg-indigo-500/5 group-hover:bg-indigo-500/10",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-indigo-500/5"
  },
  "fashion-design": {
    badge: "bg-pink-50 text-pink-600 border-pink-100/50 dark:bg-pink-950/20 dark:text-pink-300 dark:border-pink-900/40",
    glow: "bg-pink-500/5 group-hover:bg-pink-500/10",
    text: "text-pink-600 dark:text-pink-400",
    border: "hover:border-pink-300 dark:hover:border-pink-800 hover:shadow-pink-500/5"
  },
  "law": {
    badge: "bg-rose-50 text-rose-600 border-rose-100/50 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-900/40",
    glow: "bg-rose-500/5 group-hover:bg-rose-500/10",
    text: "text-rose-600 dark:text-rose-400",
    border: "hover:border-rose-300 dark:hover:border-rose-800 hover:shadow-rose-500/5"
  },
  "urban-planning": {
    badge: "bg-emerald-50 text-emerald-600 border-emerald-100/50 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-900/40",
    glow: "bg-emerald-500/5 group-hover:bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-300 dark:hover:border-emerald-800 hover:shadow-emerald-500/5"
  }
};

const localTranslations = {
  en: {
    home: "Home",
    voices: "Real Voices",
    heroHeadline: "Real Voices.",
    heroHeadlineSub: "First-person career realities.",
    heroDesc: "Straight answers from people actually doing the jobs. No marketing brochure fluff. Just the honest version of salaries, progression, daily grinds, and challenges.",
    searchPlaceholder: "Search by name, role, or career...",
    readInterview: "Read Interview",
    all: "All Careers",
    noResults: "No voices found matching your criteria.",
    draft: "Draft",
    date: "Interviewed",
  },
  hi: {
    home: "होम",
    voices: "असली आवाज़ें",
    heroHeadline: "असली आवाज़ें।",
    heroHeadlineSub: "करियर की जमीनी हकीकत।",
    heroDesc: "इस काम को करने वाले लोगों से सीधे जवाब। कोई मार्केटिंग बकवास नहीं। वेतन, पदोन्नति, दैनिक दिनचर्या और चुनौतियों का ईमानदार विवरण।",
    searchPlaceholder: "नाम, भूमिका या करियर से खोजें...",
    readInterview: "इंटरव्यू पढ़ें",
    all: "सभी करियर",
    noResults: "आपकी खोज के अनुसार कोई आवाज़ नहीं मिली।",
    draft: "ड्राफ़्ट",
    date: "साक्षात्कार तिथि",
  }
};

export default function VoicesDirectoryPage() {
  const { language } = useLanguage();
  const t = localTranslations[language];

  const [selectedVertical, setSelectedVertical] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get active list of voices (with draft logic for local development preview)
  const filteredVoices = useMemo(() => {
    return VOICES.filter((voice) => {
      const isPublished = voice.status === "published" && voice.consent;
      const isAllowed = isPublished || isDev;

      if (!isAllowed) return false;

      // Filter by vertical
      if (selectedVertical !== "all" && voice.vertical !== selectedVertical) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = voice.name.toLowerCase().includes(query);
        const matchesRank = voice.rank.toLowerCase().includes(query);
        const matchesDept = voice.dept.toLowerCase().includes(query);
        const matchesIntro = voice.intro.toLowerCase().includes(query);
        const matchesVertical = voice.vertical.toLowerCase().includes(query);
        
        return matchesName || matchesRank || matchesDept || matchesIntro || matchesVertical;
      }

      return true;
    });
  }, [selectedVertical, searchQuery]);

  // Unique list of verticals actually present in the VOICES dataset
  const availableVerticals = useMemo(() => {
    const list = new Set<string>();
    VOICES.forEach((v) => {
      const isPublished = v.status === "published" && v.consent;
      if (isPublished || isDev) {
        list.add(v.vertical);
      }
    });
    return Array.from(list);
  }, []);

  const getVerticalStyles = (vertical: string) => {
    return VERTICAL_COLORS[vertical] || {
      badge: "bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700/50",
      glow: "bg-slate-500/5 group-hover:bg-slate-500/10",
      text: "text-slate-600 dark:text-slate-400",
      border: "hover:border-slate-300 dark:hover:border-slate-800 hover:shadow-slate-500/5"
    };
  };

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      {/* HERO / HEADER */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
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
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{t.home}</Link>
            <span>›</span>
            <span className="text-primary">{t.voices}</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
              {t.heroHeadline}<br />
              <span className="text-primary">{t.heroHeadlineSub}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-2xl">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="py-8 bg-white/50 dark:bg-slate-900/30 border-b border-slate-200/50 dark:border-slate-800">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl flex flex-col md:flex-row gap-6 justify-between items-center">
          
          {/* Filtering pills */}
          <div className="flex flex-wrap gap-2.5 items-center w-full md:w-auto">
            <button
              onClick={() => setSelectedVertical("all")}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                selectedVertical === "all"
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {CATEGORY_TRANSLATIONS[language]["all"]}
            </button>
            {availableVerticals.map((vertical) => (
              <button
                key={vertical}
                onClick={() => setSelectedVertical(vertical)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                  selectedVertical === vertical
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {CATEGORY_TRANSLATIONS[language][vertical] || vertical}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm font-bold text-neutral-dark placeholder-slate-400 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <Icon icon="solar:close-circle-bold" className="w-4.5 h-4.5" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* DIRECTORY GRID */}
      <section className="py-16 md:py-24 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl flex-grow">
        {filteredVoices.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Icon icon="solar:shield-warning-broken" className="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4 animate-pulse" />
            <p className="text-lg font-bold text-slate-400 dark:text-slate-500">{t.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVoices.map((voice) => {
              const styles = getVerticalStyles(voice.vertical);
              const isVoicePublished = voice.status === "published" && voice.consent;

              return (
                <Link
                  key={voice.slug}
                  href={`/careers/${voice.vertical}/voices/${voice.slug}`}
                  className={`group relative overflow-hidden bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col justify-between w-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${styles.border}`}
                >
                  {/* Ambient glow */}
                  <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${styles.glow}`} />

                  <div className="relative z-10 w-full">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-8 gap-3">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border shadow-sm ${styles.badge}`}>
                        {CATEGORY_TRANSLATIONS[language][voice.vertical] || voice.vertical}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {!isVoicePublished && (
                          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-900/40 shrink-0">
                            {t.draft}
                          </span>
                        )}
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 px-3.5 py-1.5 rounded-full shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                          {t.readInterview} →
                        </span>
                      </div>
                    </div>

                    <Icon icon="solar:quote-up-bold" className="w-8 h-8 text-primary/20 mb-4" />
                    <h3 className="text-2xl font-black text-neutral-dark mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      “{voice.pullQuote}”
                    </h3>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                      {voice.intro}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-slate-400">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-black text-neutral-dark text-sm">{voice.name}</span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">{voice.rank}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-black tracking-wider text-slate-400 shrink-0">
                      <Icon icon="solar:calendar-bold" className="w-4 h-4 text-slate-300" />
                      <span>{voice.date}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
