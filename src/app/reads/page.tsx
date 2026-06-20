"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface ArticleItem {
  id: string;
  title: string;
  tag: string;
  readTime: string;
  description: string;
  author: string;
  date: string;
  status: "ready" | "coming-soon";
  colorClass: {
    badge: string;
    glow: string;
    hoverBorder: string;
  };
}

const ARTICLES_DATA = {
  en: [
    {
      id: "iit-drop-year",
      title: "Is an IIT brand name worth a drop year?",
      tag: "Decision Sandbox",
      readTime: "7 min read",
      description: "An honest breakdown of the IIT tag value, return on investment of a gap year, and the mental tax no one warns you about before you drop.",
      author: "WhatNow Editorial",
      date: "May 2026",
      status: "ready" as const,
      colorClass: {
        badge: "bg-rose-50 text-rose-600 border-rose-100",
        glow: "bg-rose-500/5",
        hoverBorder: "hover:border-rose-300 hover:shadow-rose-500/5"
      }
    },
    {
      id: "talk-creative-fields",
      title: "How to talk creative fields with engineering parents?",
      tag: "Family Conversations",
      readTime: "9 min read",
      description: "A step-by-step communication playbook for students pitching design, film, or writing to parents who only understand engineering and medicine.",
      author: "WhatNow Editorial",
      date: "May 2026",
      status: "ready" as const,
      colorClass: {
        badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
        glow: "bg-indigo-500/5",
        hoverBorder: "hover:border-indigo-300 hover:shadow-indigo-500/5"
      }
    },
    {
      id: "transitioning-cities",
      title: "Transitioning cities for work: Guide for juniors",
      tag: "City Survival",
      readTime: "6 min read",
      description: "Real, raw advice on finding PG hostels, budgeting for food, managing commutes, and surviving your first six months in a new Indian metro.",
      author: "WhatNow Editorial",
      date: "May 2026",
      status: "ready" as const,
      colorClass: {
        badge: "bg-amber-50 text-amber-600 border-amber-100",
        glow: "bg-amber-500/5",
        hoverBorder: "hover:border-amber-300 hover:shadow-amber-500/5"
      }
    }
  ],
  hi: [
    {
      id: "iit-drop-year",
      title: "क्या IIT ब्रांड नेम के लिए एक साल ड्रॉप करना सही है?",
      tag: "निर्णय सैंडबॉक्स",
      readTime: "7 मिनट पाठ",
      description: "IIT टैग वैल्यू, गैप ईयर के रिटर्न ऑन इन्वेस्टमेंट, और मानसिक दबाव का एक ईमानदार विश्लेषण, जिसके बारे में कोई आपको चेतावनी नहीं देता।",
      author: "व्हाटनाव संपादकीय",
      date: "मई 2026",
      status: "ready" as const,
      colorClass: {
        badge: "bg-rose-50 text-rose-600 border-rose-100",
        glow: "bg-rose-500/5",
        hoverBorder: "hover:border-rose-300 hover:shadow-rose-500/5"
      }
    },
    {
      id: "talk-creative-fields",
      title: "इंजीनियरिंग माता-पिता से रचनात्मक क्षेत्रों के बारे में कैसे बात करें?",
      tag: "पारिवारिक संवाद",
      readTime: "9 मिनट पाठ",
      description: "डिज़ाइन, फिल्म या लेखन को उन माता-पिता के सामने पेश करने के लिए एक व्यावहारिक संचार रणनीति जो केवल इंजीनियरिंग और चिकित्सा को समझते हैं।",
      author: "व्हाटनाव संपादकीय",
      date: "मई 2026",
      status: "ready" as const,
      colorClass: {
        badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
        glow: "bg-indigo-500/5",
        hoverBorder: "hover:border-indigo-300 hover:shadow-indigo-500/5"
      }
    },
    {
      id: "transitioning-cities",
      title: "काम के लिए शहरों को बदलना: जूनियर्स के लिए गाइड",
      tag: "शहर उत्तरजीविता",
      readTime: "6 मिनट पाठ",
      description: "पीजी हॉस्टल खोजने, भोजन के लिए बजट बनाने, आवागमन का प्रबंधन करने और एक नए भारतीय मेट्रो शहर में अपने पहले छह महीनों में जीवित रहने पर वास्तविक सलाह।",
      author: "व्हाटनाव संपादकीय",
      date: "मई 2026",
      status: "ready" as const,
      colorClass: {
        badge: "bg-amber-50 text-amber-600 border-amber-100",
        glow: "bg-amber-500/5",
        hoverBorder: "hover:border-amber-300 hover:shadow-amber-500/5"
      }
    }
  ]
};

const localTranslations = {
  en: {
    home: "Home",
    reads: "Reads & Opinions",
    heroHeadline: "Unfiltered Reads.",
    heroHeadlineSub: "No sponsorships. No PR filters.",
    heroDesc: "Deep-dives into drop years, parental alignment, relocation struggles, and the operational realities of choosing non-traditional paths in India.",
    readArticle: "Read Article",
    by: "By",
  },
  hi: {
    home: "होम",
    reads: "लेख और विचार",
    heroHeadline: "बिना फिल्टर के लेख।",
    heroHeadlineSub: "कोई प्रायोजन नहीं। कोई जनसंपर्क नहीं।",
    heroDesc: "ड्रॉप ईयर, माता-पिता के साथ तालमेल, स्थानांतरण के संघर्षों और भारत में गैर-पारंपरिक रास्तों को चुनने की परिचालन वास्तविकताओं में गहन अंतर्दृष्टि।",
    readArticle: "लेख पढ़ें",
    by: "द्वारा",
  }
};

export default function ReadsPage() {
  const { language } = useLanguage();
  const t = localTranslations[language];
  const articles = ARTICLES_DATA[language] as ArticleItem[];

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
            <span className="text-primary">{t.reads}</span>
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

      {/* ARTICLES GRID */}
      <section className="py-16 md:py-24 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/reads/${article.id}`}
              className={`group relative overflow-hidden bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col justify-between w-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${article.colorClass.hoverBorder}`}
            >
              {/* Ambient glow */}
              <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${article.colorClass.glow}`} />

              <div className="relative z-10 w-full">
                {/* Top Badges */}
                <div className="flex items-center justify-between mb-8 gap-3">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border shadow-sm ${article.colorClass.badge}`}>
                    {article.tag}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 px-3.5 py-1.5 rounded-full shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {t.readArticle} →
                  </span>
                </div>

                <h3 className="text-2xl font-black text-neutral-dark mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                  {article.description}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:user-bold" className="w-4 h-4 text-slate-300" />
                  <span>{t.by} {article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon icon="solar:clock-circle-bold" className="w-4 h-4 text-slate-300" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
