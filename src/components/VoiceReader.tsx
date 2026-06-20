"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { Voice } from "@/data/voices";

interface VoiceReaderProps {
  voice: Voice;
}

const VERTICAL_THEMES: Record<string, {
  accent: string;
  accentText: string;
  badgeBg: string;
  badgeText: string;
  bgGrad: string;
  bullet: string;
}> = {
  "merchant-navy": {
    accent: "bg-orange-500",
    accentText: "text-orange-600 dark:text-orange-400",
    badgeBg: "bg-orange-50 dark:bg-orange-950/20",
    badgeText: "text-orange-600 dark:text-orange-300 border-orange-100/50 dark:border-orange-900/40",
    bgGrad: "from-orange-500/10 via-transparent to-transparent",
    bullet: "bg-orange-500/10 text-orange-600 border-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-900/40"
  },
  "design": {
    accent: "bg-indigo-500",
    accentText: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/20",
    badgeText: "text-indigo-600 dark:text-indigo-300 border-indigo-100/50 dark:border-indigo-900/40",
    bgGrad: "from-indigo-500/10 via-transparent to-transparent",
    bullet: "bg-indigo-500/10 text-indigo-600 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-900/40"
  },
  "fashion-design": {
    accent: "bg-pink-500",
    accentText: "text-pink-600 dark:text-pink-400",
    badgeBg: "bg-pink-50 dark:bg-pink-950/20",
    badgeText: "text-pink-600 dark:text-pink-300 border-pink-100/50 dark:border-pink-900/40",
    bgGrad: "from-pink-500/10 via-transparent to-transparent",
    bullet: "bg-pink-500/10 text-pink-600 border-pink-200 dark:bg-pink-950/30 dark:text-pink-300 dark:border-pink-900/40"
  },
  "law": {
    accent: "bg-rose-500",
    accentText: "text-rose-600 dark:text-rose-400",
    badgeBg: "bg-rose-50 dark:bg-rose-950/20",
    badgeText: "text-rose-600 dark:text-rose-300 border-rose-100/50 dark:border-rose-900/40",
    bgGrad: "from-rose-500/10 via-transparent to-transparent",
    bullet: "bg-rose-500/10 text-rose-600 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-900/40"
  },
  "urban-planning": {
    accent: "bg-emerald-500",
    accentText: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/20",
    badgeText: "text-emerald-600 dark:text-emerald-300 border-emerald-100/50 dark:border-emerald-900/40",
    bgGrad: "from-emerald-500/10 via-transparent to-transparent",
    bullet: "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900/40"
  }
};

const VERTICAL_NAMES: Record<string, Record<string, string>> = {
  en: {
    "merchant-navy": "Merchant Navy",
    "design": "Design",
    "fashion-design": "Fashion Design",
    "law": "Law",
    "urban-planning": "Urban Planning"
  },
  hi: {
    "merchant-navy": "मर्चेंट नेवी",
    "design": "डिज़ाइन",
    "fashion-design": "फैशन डिज़ाइन",
    "law": "कानून",
    "urban-planning": "शहरी नियोजन"
  }
};

const readerTranslations = {
  en: {
    backToVoices: "Back to Real Voices",
    backToCareer: "Back to {vertical}",
    realVoices: "Real Voices",
    department: "Department",
    date: "Date",
    quickJump: "Table of Contents",
    questionNum: "Question {num}",
    editorialNote: "Editorial Fact-Check Note",
    draftTitle: "Draft Preview",
    draftDesc: "This is a draft interview undergoing team review. It is hidden from search and not indexed publicly.",
    scrollToTop: "Scroll to Top",
  },
  hi: {
    backToVoices: "असली आवाज़ें पर वापस",
    backToCareer: "{vertical} पर वापस",
    realVoices: "असली आवाज़ें",
    department: "विभाग",
    date: "तिथि",
    quickJump: "विषय-सूची",
    questionNum: "प्रश्न {num}",
    editorialNote: "संपादकीय तथ्य-जांच टिप्पणी",
    draftTitle: "ड्राफ्ट पूर्वावलोकन",
    draftDesc: "यह समीक्षा के अधीन एक ड्राफ्ट साक्षात्कार है। यह सार्वजनिक रूप से अनुक्रमित नहीं है और खोज से छिपा हुआ है।",
    scrollToTop: "ऊपर स्क्रॉल करें",
  }
};

export default function VoiceReader({ voice }: VoiceReaderProps) {
  const { language } = useLanguage();
  const t = readerTranslations[language];

  const [activeQuestion, setActiveQuestion] = useState(0);

  const themeStyles = useMemo(() => {
    return VERTICAL_THEMES[voice.vertical] || {
      accent: "bg-primary",
      accentText: "text-primary",
      badgeBg: "bg-slate-50 dark:bg-slate-800/40",
      badgeText: "text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700/50",
      bgGrad: "from-primary/10 via-transparent to-transparent",
      bullet: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
    };
  }, [voice.vertical]);

  // Scrollspy: Track active Q&A block as the user scrolls
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when the question spans the upper-middle region
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.replace("q-", ""), 10);
          if (!isNaN(index)) {
            setActiveQuestion(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    voice.qa.forEach((_, idx) => {
      const el = document.getElementById(`q-${idx}`);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [voice.qa]);

  const handleTocClick = (idx: number) => {
    const el = document.getElementById(`q-${idx}`);
    if (el) {
      const yOffset = -120; // Accounting for sticky navbar + header
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveQuestion(idx);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const isPublished = voice.status === "published" && voice.consent;
  const backCareerText = t.backToCareer.replace("{vertical}", VERTICAL_NAMES[language][voice.vertical] || voice.vertical);

  return (
    <main className="flex-grow bg-white dark:bg-[#0E111E]">
      
      {/* Hero Quote Header Section */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0B111C] border-b border-slate-200 dark:border-slate-800 pt-24 pb-16 md:pt-32 md:pb-24">
        
        {/* Glow & Grid decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-b ${themeStyles.bgGrad} opacity-60`} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="detail-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#detail-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-400 mb-8">
            <Link href="/voices" className="hover:text-primary transition-colors">
              {t.realVoices}
            </Link>
            <span>›</span>
            <Link href={`/careers/${voice.vertical}`} className="hover:text-primary transition-colors">
              {VERTICAL_NAMES[language][voice.vertical] || voice.vertical}
            </Link>
            <span>›</span>
            <span className="text-primary truncate max-w-[200px]">{voice.name}</span>
          </div>

          <div className="max-w-4xl relative">
            <Icon icon="fa-solid:quote-left" className="absolute -left-4 -top-8 w-12 h-12 text-slate-200 dark:text-slate-800/50 -z-10 opacity-60" />
            
            <p className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-3">
              {t.realVoices} Interview
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-6">
              “{voice.pullQuote}”
            </h1>
            
            {/* Quick Profile Overview (Mobile-friendly) */}
            <div className="flex items-center gap-4 mt-6">
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center text-sm font-black text-white shrink-0 shadow-md ${themeStyles.accent}`}>
                {getInitials(voice.name)}
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 dark:text-slate-100 leading-none mb-1">
                  {voice.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  {voice.rank}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Page Body */}
      <section className="py-12 md:py-20 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Sticky Left Sidebar (Desktop Only) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 self-start space-y-8">
              
              {/* Detailed Interviewee Bio Card */}
              <div className="bg-slate-50/50 dark:bg-slate-900/35 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-lg font-black text-white shrink-0 shadow-md ${themeStyles.accent}`}>
                    {getInitials(voice.name)}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 leading-tight">
                      {voice.name}
                    </h3>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 mt-1 rounded-full border shadow-sm ${themeStyles.badgeBg} ${themeStyles.badgeText}`}>
                      {VERTICAL_NAMES[language][voice.vertical]}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 dark:border-slate-800/80 pt-5 text-sm font-semibold">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500">{t.department}</span>
                    <span className="text-neutral-dark text-right">{voice.dept}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500">{t.date}</span>
                    <span className="text-neutral-dark text-right">{voice.date}</span>
                  </div>
                  {voice.handle && (
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-slate-400 dark:text-slate-500">Contact</span>
                      <span className="text-primary text-right font-bold truncate max-w-[140px]" title={voice.handle}>
                        {voice.handle}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Scrollspy Table of Contents */}
              <div className="bg-slate-50/50 dark:bg-slate-900/35 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-4">
                  {t.quickJump}
                </h3>
                
                <nav className="flex flex-col gap-1.5 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin">
                  {voice.qa.map((qa, idx) => {
                    const isActive = activeQuestion === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleTocClick(idx)}
                        className={`text-left text-xs font-bold py-2 px-3 rounded-xl transition-all cursor-pointer flex gap-3 items-start select-none ${
                          isActive
                            ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs border-l-4 border-l-primary pl-2.5"
                            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
                        }`}
                      >
                        <span className={`text-[10px] font-black tracking-tighter shrink-0 mt-0.5 ${isActive ? themeStyles.accentText : "text-slate-400"}`}>
                          Q{idx + 1}
                        </span>
                        <span className="line-clamp-2 leading-relaxed">
                          {qa.q}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

            </div>
          </div>

          {/* Q&A Content Block */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Draft Mode Alert Banner */}
            {!isPublished && (
              <div className="rounded-[1.75rem] border border-amber-300 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/20 p-6 shadow-sm">
                <div className="flex gap-4">
                  <Icon icon="solar:info-circle-bold-duotone" className="w-8 h-8 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-base font-black text-amber-800 dark:text-amber-300 mb-1.5">
                      {t.draftTitle}
                    </h4>
                    <p className="text-sm text-amber-800 dark:text-amber-400 leading-relaxed font-semibold">
                      {t.draftDesc}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Intro Paragraph */}
            <p className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100 leading-relaxed tracking-tight border-b border-slate-100 dark:border-slate-800 pb-8 mb-12">
              {voice.intro}
            </p>

            {/* Q&A List */}
            <div className="space-y-8">
              {voice.qa.map((item, idx) => {
                const isActive = activeQuestion === idx;
                
                return (
                  <div
                    key={idx}
                    id={`q-${idx}`}
                    className={`scroll-mt-28 group relative overflow-hidden bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm border rounded-[2rem] p-6 md:p-8 transition-all duration-500 shadow-xs hover:shadow-lg ${
                      isActive
                        ? "border-primary/30 dark:border-primary/40 shadow-md ring-1 ring-primary/5"
                        : "border-slate-200/60 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    {/* Glowing highlight indicator */}
                    <div className={`absolute top-0 bottom-0 left-0 w-1.5 transition-all duration-300 ${isActive ? themeStyles.accent : "bg-transparent"}`} />

                    <div className="flex items-center gap-3.5 mb-5 select-none">
                      <span className={`flex items-center justify-center font-black text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border shadow-sm ${themeStyles.bullet}`}>
                        {t.questionNum.replace("{num}", String(idx + 1).padStart(2, "0"))}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 leading-tight mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {item.q}
                    </h2>

                    <div className="text-slate-600 dark:text-slate-300 text-base md:text-[1.05rem] leading-relaxed font-semibold whitespace-pre-wrap">
                      {item.a}
                    </div>

                    {/* Editorial fact check warnings (Visible only in draft preview) */}
                    {!isPublished && item.note && (
                      <div className="mt-5 rounded-2xl border border-amber-200 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/20 px-5 py-4 text-xs font-semibold">
                        <div className="flex gap-2 items-center text-amber-800 dark:text-amber-300 font-black mb-1">
                          <Icon icon="solar:danger-bold" className="w-4 h-4 shrink-0" />
                          <span>{t.editorialNote}</span>
                        </div>
                        <p className="text-amber-800 dark:text-amber-400 leading-relaxed pl-6">
                          {item.note}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Back links & action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-12 border-t border-slate-100 dark:border-slate-800 mt-16">
              <Link
                href="/voices"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-sm font-black transition-all cursor-pointer"
              >
                <Icon icon="ph:arrow-left" className="w-4.5 h-4.5" />
                <span>{t.backToVoices}</span>
              </Link>
              <Link
                href={`/careers/${voice.vertical}`}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-primary border border-primary/20 text-sm font-black transition-all cursor-pointer"
              >
                <span>{backCareerText}</span>
                <Icon icon="ph:arrow-right" className="w-4.5 h-4.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Floating Action Button (Mobile Only: scroll to top) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer border border-primary/10"
          title={t.scrollToTop}
        >
          <Icon icon="solar:alt-arrow-up-linear" className="w-6 h-6" />
        </button>
      </div>

    </main>
  );
}
