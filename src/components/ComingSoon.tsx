"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ComingSoonProps {
  pageNameEn: string;
  pageNameHi: string;
}

const translations = {
  en: {
    subtitle: "BLUEPRINT INCUBATION",
    title: "Drafting the Roadmap for",
    desc: "Our seniors are actively interviewing professionals, auditing placement metrics, and compiling real-world cost calculations to build a completely honest, sponsor-free blueprint. We are working hard to bring this page to you.",
    prioritizeBtn: "Prioritize This Page",
    prioritizedSuccess: "Request Registered! Moving this page up the queue.",
    exploreExams: "Explore Active Exams",
    goHome: "Return Home",
    contributorsNeeded: "Want to contribute?",
    contributorsDesc: "If you work in this field or cracked related exams, help us write this guide.",
    contactUs: "Reach Out to Us"
  },
  hi: {
    subtitle: "ब्लूप्रिंट तैयारी",
    title: "रोडमैप संकलित किया जा रहा है:",
    desc: "हमारे सीनियर्स इस समय पेशेवरों का साक्षात्कार ले रहे हैं, प्लेसमेंट मेट्रिक्स का ऑडिट कर रहे हैं, और इस खंड के लिए पूरी तरह से ईमानदार, विज्ञापन-मुक्त ब्लूप्रिंट बनाने के लिए वास्तविक लागत गणना संकलित कर रहे हैं। हम इस पेज को आपके पास लाने के लिए कड़ी मेहनत कर रहे हैं।",
    prioritizeBtn: "इस पेज को प्राथमिकता दें",
    prioritizedSuccess: "अनुरोध दर्ज किया गया! इसे प्राथमिकता सूची में ऊपर ले जाया जा रहा है।",
    exploreExams: "सक्रिय परीक्षाएं देखें",
    goHome: "मुख्य पृष्ठ पर जाएं",
    contributorsNeeded: "योगदान देना चाहते हैं?",
    contributorsDesc: "यदि आप इस क्षेत्र में काम करते हैं या संबंधित परीक्षाएं पास की हैं, तो इस गाइड को लिखने में हमारी मदद करें।",
    contactUs: "हमसे संपर्क करें"
  }
};

export default function ComingSoon({ pageNameEn, pageNameHi }: ComingSoonProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const pageTitleName = language === "en" ? pageNameEn : pageNameHi;

  const [requested, setRequested] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePrioritize = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRequested(true);
    }, 800);
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-[#0B111C] min-h-[85vh] flex items-center justify-center py-20 px-6 sm:px-8">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2500/svg">
          <defs>
            <pattern id="coming-soon-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
              <circle cx="40" cy="40" r="1.5" fill="#5563ED" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#coming-soon-grid)" />
        </svg>
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container max-w-2xl mx-auto text-center relative z-10">
        {/* Animated Blueprint Drawing SVG Graphic */}
        <div className="relative mx-auto w-24 h-24 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary/20">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="h-16 w-16 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary shadow-[0_8px_30px_rgba(85,99,237,0.15)]">
              <Icon icon="solar:compass-bold-duotone" className="w-8 h-8" />
            </div>
          </motion.div>
          {/* Pulsing indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
          </span>
        </div>

        {/* Text Area */}
        <p className="text-secondary text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-4">
          {t.subtitle}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-dark tracking-tight leading-tight mb-6">
          {t.title} <span className="text-primary block sm:inline">{pageTitleName}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold mb-8 max-w-xl mx-auto">
          {t.desc}
        </p>

        {/* Prioritize Feature Callout */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/70 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] max-w-lg mx-auto mb-10">
          <AnimatePresence mode="wait">
            {!requested ? (
              <motion.button
                key="request-btn"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                onClick={handlePrioritize}
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary/95 text-white font-extrabold text-sm shadow-md shadow-primary/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
              >
                {loading ? (
                  <Icon icon="eos-icons:loading" className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Icon icon="solar:ranking-bold-duotone" className="w-5 h-5" />
                    <span>{t.prioritizeBtn}</span>
                  </>
                )}
              </motion.button>
            ) : (
              <motion.div
                key="success-msg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100/50 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 text-sm font-bold justify-center"
              >
                <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t.prioritizedSuccess}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
            {t.goHome}
          </Link>
          <Link
            href="/exams"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary text-sm font-bold transition-all flex items-center justify-center gap-2"
          >
            {t.exploreExams}
            <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
          </Link>
        </div>

        {/* Contributors info */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-700/60 max-w-md mx-auto">
          <h4 className="text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            {t.contributorsNeeded}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
            {t.contributorsDesc}
          </p>
          <Link
            href="/about"
            className="text-xs font-extrabold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
          >
            <Icon icon="solar:letter-bold-duotone" className="w-4 h-4" />
            <span>{t.contactUs}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
