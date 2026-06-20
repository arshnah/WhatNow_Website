"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface GuideCardProps {
  category: string;
  title: React.ReactNode;
  description: string;
  badgeClass: string;
  status: "ready" | "coming-soon";
  href?: string;
}

const localTranslations = {
  en: {
    readGuide: "Read Guide",
    startHere: <>Start here. Three guides<br className="hidden sm:block" /> we wish we had.</>,
    viewAll: "View all guides",
    comingSoon: "Coming Soon",
    inDev: "Under curation...",
  },
  hi: {
    readGuide: "गाइड पढ़ें",
    startHere: <>यहाँ से शुरू करें। तीन मार्गदर्शिकाएँ<br className="hidden sm:block" /> जो हम चाहते हैं कि हमारे पास होतीं।</>,
    viewAll: "सभी मार्गदर्शिकाएँ देखें",
    comingSoon: "जल्द आ रहा है",
    inDev: "तैयारी जारी है...",
  }
};

const CATEGORY_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    "design": "Design",
    "defence": "Defence",
    "maritime": "Maritime",
    "law": "Law",
  },
  hi: {
    "design": "डिज़ाइन",
    "defence": "रक्षा",
    "maritime": "मर्चेंट नेवी",
    "law": "कानून",
  }
};

function GuideCard({ category, title, description, badgeClass, status, href }: GuideCardProps) {
  const { language } = useLanguage();
  const isReady = status === "ready";

  const getGlowColor = (cat: string) => {
    if (!isReady) return "bg-transparent";
    switch (cat.toLowerCase()) {
      case "design":
        return "bg-indigo-500/5 group-hover:bg-indigo-500/10";
      case "defence":
      case "defense":
        return "bg-emerald-500/5 group-hover:bg-emerald-500/10";
      case "maritime":
        return "bg-orange-500/5 group-hover:bg-orange-500/10";
      case "law":
        return "bg-rose-500/5 group-hover:bg-rose-500/10";
      default:
        return "bg-slate-500/5 group-hover:bg-slate-500/10";
    }
  };

  const displayCategory = CATEGORY_TRANSLATIONS[language][category.toLowerCase()] || category;
  const t = localTranslations[language];

  if (isReady) {
    return (
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        className="h-full"
      >
        <Link
          href={href || "#"}
          className="relative rounded-3xl p-8 sm:p-10 flex flex-col h-full border border-slate-200/80 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600 bg-white/80 dark:bg-slate-800/50 backdrop-blur-md cursor-pointer shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 transition-colors duration-300 text-left select-none group"
        >
          {/* Ambient background glow */}
          <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${getGlowColor(category)}`} />

          <div className="mb-6 flex items-center justify-between relative z-10 w-full">
            <span className={`font-black text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-sm ${badgeClass}`}>
              {displayCategory}
            </span>
          </div>

          <h3 className="text-2xl lg:text-[1.65rem] font-black text-neutral-dark mb-5 leading-tight tracking-tight relative z-10 transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 flex-grow font-medium text-sm sm:text-base relative z-10">
            {description}
          </p>

          <div className="mt-auto flex items-center gap-2 justify-end relative z-10">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 group-hover:text-primary transition-colors duration-300">
              {t.readGuide}
            </span>
            <Icon icon="ph:arrow-right" className="w-4 h-4 text-slate-400 group-hover:text-primary transition-all transform group-hover:translate-x-1 duration-300" />
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <div
      className="relative rounded-3xl p-8 sm:p-10 flex flex-col h-full border border-slate-200/60 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 opacity-65 cursor-not-allowed shadow-none transition-all duration-500 text-left select-none"
    >
      {/* Ambient background glow */}
      <div className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${getGlowColor(category)}`} />

      <div className="mb-6 flex items-center justify-between relative z-10 w-full">
        <span className={`font-black text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-sm ${badgeClass}`}>
          {displayCategory}
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 bg-orange-50/50 border border-orange-100 px-3 py-1 rounded-full shadow-xs">
          {t.comingSoon}
        </span>
      </div>

      <h3 className="text-2xl lg:text-[1.65rem] font-black text-neutral-dark mb-5 leading-tight tracking-tight relative z-10 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed mb-10 flex-grow font-medium text-sm sm:text-base relative z-10">
        {description}
      </p>

      <div className="mt-auto flex items-center gap-2 justify-end relative z-10">
        <span className="text-xs font-bold text-slate-400 italic">
          {t.inDev}
        </span>
      </div>
    </div>
  );
}

const GUIDES_DATA = {
  en: [
    {
      category: "Design",
      title: <>UCEED — Cracking it<br className="hidden lg:block" /> without coaching</>,
      description: "What the entrance actually tests, how seniors prepped at home, and which prep books are honestly worth your money.",
      badgeClass: "bg-indigo-50/80 text-indigo-600 border-indigo-100/50",
      status: "ready" as const,
      href: "/exams/uceed",
    },
    {
      category: "Law",
      title: <>CLAT — Law school without<br className="hidden lg:block" /> the coaching trap</>,
      description: "What CLAT actually tests, how toppers prepped without ₹2-lakh coaching, and which NLUs are genuinely worth it.",
      badgeClass: "bg-rose-50/80 text-rose-600 border-rose-100/50",
      status: "ready" as const,
      href: "/exams/clat",
    },
    {
      category: "Maritime",
      title: <>Merchant Navy — Salary, sea time & reality</>,
      description: "From DG Shipping to your first contract. What cadets earn, what they don't tell you, and how to actually break in.",
      badgeClass: "bg-orange-50/80 text-orange-600 border-orange-100/50",
      status: "ready" as const,
      href: "/careers/merchant-navy",
    }
  ],
  hi: [
    {
      category: "Design",
      title: <>UCEED — बिना कोचिंग के<br className="hidden lg:block" /> क्रैक करना</>,
      description: "प्रवेश परीक्षा वास्तव में क्या परीक्षण करती है, सीनियर छात्रों ने घर पर कैसे तैयारी की, और कौन सी तैयारी की किताबें वास्तव में आपके पैसे के लायक हैं।",
      badgeClass: "bg-indigo-50/80 text-indigo-600 border-indigo-100/50",
      status: "ready" as const,
      href: "/exams/uceed",
    },
    {
      category: "Law",
      title: <>CLAT — बिना कोचिंग जाल के<br className="hidden lg:block" /> लॉ स्कूल</>,
      description: "CLAT वास्तव में क्या परखता है, टॉपर्स ने बिना ₹2 लाख की कोचिंग के कैसे तैयारी की, और कौन से NLU वाकई इसके लायक हैं।",
      badgeClass: "bg-rose-50/80 text-rose-600 border-rose-100/50",
      status: "ready" as const,
      href: "/exams/clat",
    },
    {
      category: "Maritime",
      title: <>मर्चेंट नेवी — वेतन, समुद्री समय और वास्तविकता</>,
      description: "डीजी शिपिंग से लेकर आपके पहले अनुबंध तक। कैडेट्स क्या कमाते हैं, वे आपको क्या नहीं बताते हैं, और वास्तव में प्रवेश कैसे करें।",
      badgeClass: "bg-orange-50/80 text-orange-600 border-orange-100/50",
      status: "ready" as const,
      href: "/careers/merchant-navy",
    }
  ]
};

export default function FeaturedGuides() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current || !firstCardRef.current || !lastCardRef.current) return;

    const containerRect = scrollRef.current.getBoundingClientRect();
    const firstCardRect = firstCardRef.current.getBoundingClientRect();
    const lastCardRect = lastCardRef.current.getBoundingClientRect();

    setShowLeft(firstCardRect.left < containerRect.left - 10);
    setShowRight(lastCardRect.right > containerRect.right + 10);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -420 : 420;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const t = localTranslations[language];
  const guides = GUIDES_DATA[language];

  return (
    <section id="featured-guides" className="bg-[#F8F8F6] dark:bg-[#0B111C] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#111827] dark:text-slate-50 tracking-tight">
              {t.startHere}
            </h2>
          </div>

          <Link
            href="/careers"
            className="group flex items-center gap-2 font-medium text-neutral-500 dark:text-slate-400 hover:text-neutral-800 dark:hover:text-slate-100 transition-colors w-fit pb-2"
          >
            <span>{t.viewAll}</span>
            <Icon icon="ph:arrow-right" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Guides Slider */}
        <div className="relative w-full mt-10">

          {/* Left Arrow Button */}
          <div className={`hidden md:flex absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-[#F8F8F6] via-[#F8F8F6]/90 dark:from-[#0B111C] dark:via-[#0B111C]/90 to-transparent z-10 items-center justify-start pointer-events-none transition-opacity duration-300 ${showLeft ? "opacity-100" : "opacity-0"}`}>
            <button
              onClick={() => scroll("left")}
              disabled={!showLeft}
              className="pointer-events-auto p-2 ml-2 lg:ml-6 text-slate-300 hover:text-neutral-800 transition-colors cursor-pointer disabled:cursor-default"
              aria-label="Scroll left"
            >
              <Icon icon="weui:arrow-filled" className="w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem] rotate-180" />
            </button>
          </div>

          {/* Right Arrow Button */}
          <div className={`hidden md:flex absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-[#F8F8F6] via-[#F8F8F6]/90 dark:from-[#0B111C] dark:via-[#0B111C]/90 to-transparent z-10 items-center justify-end pointer-events-none transition-opacity duration-300 ${showRight ? "opacity-100" : "opacity-0"}`}>
            <button
              onClick={() => scroll("right")}
              disabled={!showRight}
              className="pointer-events-auto p-2 mr-2 lg:mr-6 text-slate-300 hover:text-neutral-800 transition-colors cursor-pointer disabled:cursor-default"
              aria-label="Scroll right"
            >
              <Icon icon="weui:arrow-filled" className="w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem]" />
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-6 lg:gap-8 pb-8 -mb-8 px-4 sm:px-6 lg:px-8 xl:px-[calc((100vw-1280px)/2)] 2xl:px-[calc((100vw-1536px)/2)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {guides.map((guide, idx) => (
              <div
                key={idx}
                ref={idx === 0 ? firstCardRef : idx === guides.length - 1 ? lastCardRef : null}
                className="w-[85vw] sm:w-[380px] lg:w-[400px] flex-none snap-center lg:snap-start"
              >
                <GuideCard
                  category={guide.category}
                  title={guide.title}
                  description={guide.description}
                  badgeClass={guide.badgeClass}
                  status={guide.status}
                  href={guide.href}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </s