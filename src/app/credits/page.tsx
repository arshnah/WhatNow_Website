"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "indiawhatnow@gmail.com";

const teamData = [
  { 
    id: "antinity",
    name: "Antinity", 
    roleEn: "Advisory developer", 
    roleHi: "सलाहकार डेवलपर", 
    url: "https://github.com/antinity",
  },
  { 
    id: "arsh",
    name: "Arsh", 
    roleEn: "Developer & lead maintainer", 
    roleHi: "डेवलपर और लीड मेंटेनर", 
    url: "https://github.com/arshnah",
  },
  { 
    id: "yawwsh",
    name: "Yawwsh", 
    roleEn: "Lead developer — tech & product", 
    roleHi: "लीड डेवलपर — टेक और उत्पाद", 
    url: "https://github.com/Yashvardhan4646",
  },
  { 
    id: "vasu",
    name: "Vasu", 
    roleEn: "Founder & owner", 
    roleHi: "संस्थापक और मालिक", 
    url: "https://github.com/VasuCoded",
  },
  { 
    id: "infernum",
    name: "Infernum", 
    roleEn: "Design & short-form content", 
    roleHi: "डिज़ाइन और शॉर्ट-फॉर्म कंटेंट", 
  },
  { 
    id: "saammm",
    name: "Saammm", 
    roleEn: "Outreach & partnerships", 
    roleHi: "आउटरीच और पार्टनरशिप", 
  },
  { 
    id: "doraemon",
    name: "Doraemon", 
    roleEn: "Outreach & partnerships", 
    roleHi: "आउटरीच और पार्टनरशिप", 
  },
  { 
    id: "yukt",
    name: "Yukt", 
    roleEn: "Interview host", 
    roleHi: "इंटरव्यू होस्ट", 
  },
];

const builtWithData = [
  {
    name: "Next.js",
    noteEn: "App Router framework",
    noteHi: "ऐप राउटर फ्रेमवर्क",
    url: "https://nextjs.org",
    icon: "ri:nextjs-fill"
  },
  {
    name: "React",
    noteEn: "UI library",
    noteHi: "यूआई लाइब्रेरी",
    url: "https://react.dev",
    icon: "ri:reactjs-fill"
  },
  {
    name: "TypeScript",
    noteEn: "Programming language",
    noteHi: "प्रोग्रामिंग भाषा",
    url: "https://www.typescriptlang.org",
    icon: "simple-icons:typescript"
  },
  {
    name: "Tailwind CSS",
    noteEn: "Styling engine",
    noteHi: "स्टाइलिंग इंजन",
    url: "https://tailwindcss.com",
    icon: "simple-icons:tailwindcss"
  },
  {
    name: "Framer Motion",
    noteEn: "Animation library",
    noteHi: "एनिमेशन लाइब्रेरी",
    url: "https://www.framer.com/motion/",
    icon: "simple-icons:framer"
  },
  {
    name: "Cheerio",
    noteEn: "Build-time data tooling",
    noteHi: "बिल्ड-टाइम डेटा टूलिंग",
    url: "https://cheerio.js.org",
    icon: "simple-icons:cheerio"
  },
  {
    name: "Vercel",
    noteEn: "Hosting & deploys",
    noteHi: "होस्टिंग और डिप्लॉयमेंट",
    url: "https://vercel.com",
    icon: "ri:vercel-fill"
  },
];

const typefacesData = [
  {
    name: "Geist",
    byEn: "Vercel — body text",
    byHi: "वर्सेल — बॉडी टेक्स्ट",
    url: "https://vercel.com/font",
    fontClass: "font-sans",
    previewText: "Aa Bb Cc Dd Ee Ff 123",
  },
  {
    name: "Bricolage Grotesque",
    byEn: "Mathieu Triay — headings",
    byHi: "मैथ्यू ट्रियाए — हेडिंग्स",
    url: "https://fonts.google.com/specimen/Bricolage+Grotesque",
    fontClass: "font-heading",
    previewText: "Bricolage 0123 &!?",
  },
  {
    name: "Mukta",
    byEn: "Ek Type — Devanagari (Hindi)",
    byHi: "एक टाइप — देवनागरी (हिंदी)",
    url: "https://fonts.google.com/specimen/Mukta",
    fontClass: "font-mukta",
    previewText: "मुक्ता देवनागरी अ आ इ ई",
  },
];

const iconSetsData = [
  {
    name: "Iconify",
    byEn: "Remix Icon, Phosphor & Solar sets",
    byHi: "रेमिक्स आइकॉन, फॉस्फोर और सोलर सेट्स",
    url: "https://iconify.design",
    icons: ["ri:reactjs-fill", "ph:phosphor-logo-fill", "solar:sun-bold"]
  },
  {
    name: "Lucide",
    byEn: "Open-source icon set",
    byHi: "ओपन-सोर्स आइकॉन सेट",
    url: "https://lucide.dev",
    icons: ["lucide:star", "lucide:heart", "lucide:shield"]
  },
];

const translations = {
  en: {
    pageLabel: "Colophon",
    title: "Credits & Colophon",
    subtitle:
      "WhatNow is a small, independent project. Here is who builds it — and the open-source architecture it stands on.",
    teamTitle: "The Team",
    teamSubtitle: "Swipe, drag, or click the cards to meet the members building WhatNow. Vasu leads the project, supported by a dedicated technical and creative team.",
    builtWithTitle: "Built With",
    builtWithSubtitle: "WhatNow is free software stitched together from generous open-source projects. Thank you to the people who maintain them.",
    assetsTitle: "Typography & Visuals",
    assetsSubtitle: "The design system, typefaces, and asset libraries that bring WhatNow to life.",
    thanksParagraph: "To every senior who answered an honest question, and every student who told us a guide was wrong so we could fix it. This site is better because of you.",
  },
  hi: {
    pageLabel: "कोलोफ़ोन",
    title: "श्रेय और कोलोफ़ोन",
    subtitle:
      "WhatNow एक छोटा, स्वतंत्र प्रोजेक्ट है। यहाँ बताया गया है कि इसे कौन बनाता है — और यह किस ओपन-सोर्स आर्किटेक्चर पर आधारित है।",
    teamTitle: "हमारी टीम",
    teamSubtitle: "WhatNow बनाने वाले सदस्यों से मिलने के लिए कार्डों को स्वाइप करें या क्लिक करें। वासु परियोजना का नेतृत्व करते हैं, जो एक समर्पित तकनीकी और रचनात्मक टीम द्वारा समर्थित है।",
    builtWithTitle: "इनके द्वारा निर्मित",
    builtWithSubtitle: "WhatNow मुफ़्त सॉफ्टवेयर है जिसे उदार ओपन-सोर्स प्रोजेक्ट्स से मिलाकर बनाया गया है। इन्हें बनाए रखने वाले लोगों को धन्यवाद।",
    assetsTitle: "टाइपोग्राफी और दृश्य तत्व",
    assetsSubtitle: "डिज़ाइन प्रणाली, टाइपफेस और एसेट लाइब्रेरी जो WhatNow को जीवंत बनाती हैं।",
    thanksParagraph: "हर उस सीनियर को जिसने ईमानदारी से सवाल का जवाब दिया, और हर उस छात्र को जिसने हमें बताया कि कोई गाइड गलत था ताकि हम उसे ठीक कर सकें। यह साइट आपकी वजह से बेहतर है।",
  },
};

const memberDetails: Record<string, {
  fromColor: string;
  toColor: string;
  glowColor: string;
  icon: string;
  tagIcon: string;
  oneLinerEn: string;
  oneLinerHi: string;
}> = {
  vasu: {
    fromColor: "#F59E0B",
    toColor: "#D97706",
    glowColor: "rgba(245, 158, 11, 0.3)",
    icon: "ri:crown-line",
    tagIcon: "ri:shield-user-fill",
    oneLinerEn: "Steering the ship, keeping guidance honest.",
    oneLinerHi: "मार्गदर्शन को निष्पक्ष और ईमानदार रखना।",
  },
  yawwsh: {
    fromColor: "#8B5CF6",
    toColor: "#6D28D9",
    glowColor: "rgba(139, 92, 246, 0.3)",
    icon: "ri:code-box-line",
    tagIcon: "ri:braces-fill",
    oneLinerEn: "Writing the core code and shaping products.",
    oneLinerHi: "मुख्य कोड लिखना और उत्पादों को आकार देना।",
  },
  arsh: {
    fromColor: "#10B981",
    toColor: "#047857",
    glowColor: "rgba(16, 185, 129, 0.3)",
    icon: "ri:shield-check-line",
    tagIcon: "ri:git-branch-fill",
    oneLinerEn: "Maintaining code quality and scaling features.",
    oneLinerHi: "कोड गुणवत्ता बनाए रखना और फीचर्स को बढ़ाना।",
  },
  antinity: {
    fromColor: "#6366F1",
    toColor: "#4F46E5",
    glowColor: "rgba(99, 102, 241, 0.3)",
    icon: "ri:lightbulb-line",
    tagIcon: "ri:terminal-window-fill",
    oneLinerEn: "Advising tech stacks and system architecture.",
    oneLinerHi: "तकनीकी स्टैक और सिस्टम आर्किटेक्चर पर सलाह देना।",
  },
  infernum: {
    fromColor: "#EC4899",
    toColor: "#BE185D",
    glowColor: "rgba(236, 72, 153, 0.3)",
    icon: "ri:palette-line",
    tagIcon: "ri:markup-fill",
    oneLinerEn: "Crafting creative designs and visual assets.",
    oneLinerHi: "रचनात्मक डिज़ाइन और दृश्य संपत्तियां तैयार करना।",
  },
  saammm: {
    fromColor: "#F97316",
    toColor: "#EA580C",
    glowColor: "rgba(249, 115, 22, 0.3)",
    icon: "ri:megaphone-line",
    tagIcon: "ri:group-fill",
    oneLinerEn: "Creating partnerships and hosting outreach.",
    oneLinerHi: "साझेदारी बनाना और आउटरीच की मेजबानी करना।",
  },
  doraemon: {
    fromColor: "#0EA5E9",
    toColor: "#0369A1",
    glowColor: "rgba(14, 165, 233, 0.3)",
    icon: "ri:global-line",
    tagIcon: "ri:chat-voice-fill",
    oneLinerEn: "Managing relations and spreading outreach.",
    oneLinerHi: "संबंधों का प्रबंधन और आउटरीच का विस्तार करना।",
  },
  yukt: {
    fromColor: "#84CC16",
    toColor: "#4D7C0F",
    glowColor: "rgba(132, 204, 22, 0.3)",
    icon: "ri:mic-line",
    tagIcon: "ri:slideshow-fill",
    oneLinerEn: "Leading conversations and hosting candid interviews.",
    oneLinerHi: "बातचीत का नेतृत्व और कैंडिड इंटरव्यू होस्ट करना।",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
} as const;

function UserAvatarSvg({ id, isOwner }: { id: string; isOwner?: boolean }) {
  const gradId = `avatar-grad-${id}`;
  const details = memberDetails[id] || { fromColor: "#6366F1", toColor: "#4F46E5" };

  return (
    <div className="relative select-none pointer-events-none">
      <svg className="w-20 h-20 relative" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={details.fromColor} />
            <stop offset="100%" stopColor={details.toColor} />
          </linearGradient>
        </defs>
        
        {/* Glow outer ring for the owner avatar */}
        {isOwner && (
          <circle cx="32" cy="32" r="31" stroke={details.fromColor} strokeWidth="1.5" strokeDasharray="6 3" className="animate-[spin_20s_linear_infinite]" />
        )}
        
        {/* Main background circle */}
        <circle cx="32" cy="32" r="28" fill={`url(#${gradId})`} />
        
        {/* User Silhouette - Head */}
        <circle cx="32" cy="23" r="8" fill="#FFFFFF" fillOpacity="0.9" />
        
        {/* User Silhouette - Shoulders */}
        <path d="M16 47C16 40.5 22.5 36 32 36C41.5 36 48 40.5 48 47V51H16V47Z" fill="#FFFFFF" fillOpacity="0.9" />
      </svg>
      
      {/* Crown Badge overlay for Owner */}
      {isOwner && (
        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-amber-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-md">
          <Icon icon="ri:crown-fill" className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}

export default function CreditsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeIdx, setActiveIdx] = useState(3); // Default to Vasu (index 3)

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? teamData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === teamData.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="flex-grow bg-white dark:bg-[#0E111E] relative overflow-hidden">
      {/* Decorative Blur Background Globs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[400px] -left-40 w-[600px] h-[600px] rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-slate-200/60 dark:border-slate-800/80 bg-gradient-to-b from-slate-50 to-white dark:from-[#0B111C] dark:to-[#0E111E] pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-[#5563ED] border border-indigo-100 dark:border-indigo-900/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5563ED] animate-pulse" />
              {t.pageLabel}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-6"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Body Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Section: 3D Cover-flow Carousel */}
          <motion.section variants={itemVariants} className="space-y-8 flex flex-col items-center">
            <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4 text-center w-full">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                {t.teamTitle}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-2xl mx-auto">
                {t.teamSubtitle}
              </p>
            </div>

            {/* Slider Container with visible adjacent cards */}
            <div className="relative w-full overflow-hidden flex flex-col items-center justify-center py-6">
              <div className="relative w-full max-w-5xl overflow-hidden h-[450px] flex items-center justify-center">
                <motion.div
                  animate={{ x: -activeIdx * 320 }}
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  className="flex items-center absolute"
                  style={{ left: "calc(50% - 140px)" }} // Center-offset calculations (half of 280px card size)
                >
                  {teamData.map((m, idx) => {
                    const isActive = idx === activeIdx;
                    const diff = idx - activeIdx;
                    const details = memberDetails[m.id] || { fromColor: "#6366F1", glowColor: "rgba(99, 102, 241, 0.15)", icon: "ri:user-fill", tagIcon: "ri:user-fill", oneLinerEn: "", oneLinerHi: "" };

                    return (
                      <motion.div
                        key={m.id}
                        onClick={() => handleSelect(idx)}
                        animate={{
                          scale: isActive ? 1.05 : 0.85,
                          opacity: isActive ? 1 : 0.35,
                          rotateY: isActive ? 0 : (diff < 0 ? 16 : -16),
                          z: isActive ? 0 : -60,
                          borderColor: isActive ? details.fromColor : "rgba(226, 232, 240, 0.5)",
                        }}
                        transition={{ duration: 0.4 }}
                        className={`w-[280px] shrink-0 mx-5 rounded-3xl border p-6 flex flex-col justify-between min-h-[380px] bg-white/60 dark:bg-slate-900/40 backdrop-blur-md transition-all duration-300 relative overflow-hidden cursor-pointer select-none ${
                          isActive 
                            ? "shadow-2xl z-20"
                            : "shadow-md z-10 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                        style={{ 
                          perspective: 1000,
                          boxShadow: isActive ? `0 20px 25px -5px ${details.glowColor}, 0 8px 10px -6px ${details.glowColor}` : undefined
                        }}
                      >
                        {/* Background Icon Watermark */}
                        <div 
                          className="absolute -bottom-8 -right-8 w-36 h-36 pointer-events-none select-none z-0 transition-opacity duration-300"
                          style={{
                            opacity: isActive ? 0.06 : 0.02,
                            color: details.fromColor
                          }}
                        >
                          <Icon icon={details.icon} className="w-full h-full" />
                        </div>

                        {/* Card Content Wrapper */}
                        <div className="relative z-10 flex flex-col justify-between h-full flex-grow">
                          {/* Avatar & Header */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-6 relative">
                              <UserAvatarSvg id={m.id} isOwner={m.id === "vasu"} />
                            </div>
                            
                            <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                              {m.name}
                            </h3>
                            
                            {/* Role Badge with Icon */}
                            <span className="mt-2.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/50 flex items-center gap-1.5">
                              <Icon icon={details.tagIcon} className="w-3.5 h-3.5" style={{ color: details.fromColor }} />
                              {language === "hi" ? m.roleHi : m.roleEn}
                            </span>

                            {/* Localized Mantra */}
                            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 font-semibold px-2 leading-relaxed">
                              {language === "hi" ? details.oneLinerHi : details.oneLinerEn}
                            </p>
                          </div>

                          {/* Social Network Connections */}
                          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/85 flex items-center justify-between">
                            <div className="flex flex-col text-left">
                              <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-slate-500">Contact</span>
                              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">India / Remote</span>
                            </div>

                            <div className="flex gap-2">
                              {m.url ? (
                                <a
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#5563ED] hover:text-white transition-colors duration-200"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Icon icon="ri:github-fill" className="w-4 h-4" />
                                </a>
                              ) : (
                                <a
                                  href={`mailto:${EMAIL}`}
                                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#5563ED] hover:text-white transition-colors duration-200"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Icon icon="ri:mail-fill" className="w-4 h-4" />
                                </a>
                              )}
                              
                              <a
                                href="/discord"
                                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#5563ED] hover:text-white transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Icon icon="ri:discord-fill" className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-6 mt-4 relative z-20">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-md hover:border-[#5563ED]/40 transition-colors"
                  aria-label="Previous Team Member"
                >
                  <Icon icon="lucide:chevron-left" className="w-5 h-5" />
                </motion.button>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {teamData.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={() => handleSelect(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIdx === idx ? "bg-[#5563ED] w-5" : "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-md hover:border-[#5563ED]/40 transition-colors"
                  aria-label="Next Team Member"
                >
                  <Icon icon="lucide:chevron-right" className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* General Invitation recruitment */}
            <div className="p-6 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 mt-6 w-full">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {language === "hi" ? (
                  <>
                    हमारे गाइड उन छात्रों और पेशेवरों के प्रत्यक्ष अनुभवों पर आधारित हैं जिन्होंने वास्तव में इन रास्तों को तय किया है — यह हमारा संपादकीय नेटवर्क है। यदि आपने कोई बड़ी प्रवेश परीक्षा उत्तीर्ण की है या किसी ऐसे क्षेत्र में काम करते हैं जिसे हम कवर करते हैं और एक निष्पक्ष गाइड का योगदान करना चाहते हैं, तो हमें{" "}
                    <a href={`mailto:${EMAIL}`} className="text-[#5563ED] font-bold hover:underline underline-offset-2 hover:text-indigo-700">
                      {EMAIL}
                    </a>{" "}
                    पर लिखें या हमारे{" "}
                    <Link href="/discord" className="text-[#5563ED] font-bold hover:underline underline-offset-2 hover:text-indigo-700">
                      कम्युनिटी डिस्कॉर्ड
                    </Link>{" "}
                    में शामिल हों।
                  </>
                ) : (
                  <>
                    The guides draw on first-hand accounts from students and professionals who have actually
                    walked these paths — our editorial network. If you have cleared a major entrance exam or
                    work in a field we cover and want to contribute a candid guide, write to{" "}
                    <a href={`mailto:${EMAIL}`} className="text-[#5563ED] font-bold hover:underline underline-offset-2 hover:text-indigo-700">
                      {EMAIL}
                    </a>{" "}
                    or join our{" "}
                    <Link href="/discord" className="text-[#5563ED] font-bold hover:underline underline-offset-2 hover:text-indigo-700">
                      community Discord
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          </motion.section>

          {/* Section: Tech Stack */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                {t.builtWithTitle}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {t.builtWithSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {builtWithData.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group flex gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md hover:border-[#5563ED]/30 dark:hover:border-[#5563ED]/30 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={item.icon} className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-[#5563ED] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#5563ED] transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                      {language === "hi" ? item.noteHi : item.noteEn}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Section: Typography & Assets */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                {t.assetsTitle}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {t.assetsSubtitle}
              </p>
            </div>

            {/* Typography Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {typefacesData.map((font) => (
                <motion.a
                  key={font.name}
                  href={font.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md hover:border-[#5563ED]/30 dark:hover:border-[#5563ED]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5563ED]">
                      Typeface / फ़ॉन्ट
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mt-1">
                      {font.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                      {language === "hi" ? font.byHi : font.byEn}
                    </p>
                  </div>

                  <div 
                    className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800/50"
                    style={{ fontFamily: `var(--${font.fontClass === "font-sans" ? "font-geist-sans" : font.fontClass === "font-heading" ? "font-bricolage" : "font-mukta"})` }}
                  >
                    <p className="text-2xl font-black leading-none mb-1 select-none">
                      {font.previewText.split(" ").slice(0, 1).join("")}
                    </p>
                    <p className="text-[11px] tracking-wider opacity-60 uppercase font-mono select-none">
                      {font.previewText}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Assets (Icons) Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {iconSetsData.map((iconSet) => (
                <motion.a
                  key={iconSet.name}
                  href={iconSet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md hover:border-[#5563ED]/30 dark:hover:border-[#5563ED]/30 transition-all duration-300 flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5563ED]">
                      Icon Library
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mt-1">
                      {iconSet.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                      {language === "hi" ? iconSet.byHi : iconSet.byEn}
                    </p>
                  </div>
                  
                  <div className="flex gap-2.5">
                    {iconSet.icons.map((icon, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.4,
                          ease: "easeInOut"
                        }}
                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#5563ED]"
                      >
                        <Icon icon={icon} className="w-5 h-5" />
                      </motion.div>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Section: Thanks */}
          <motion.section variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 p-8 md:p-10 backdrop-blur-sm">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />
              
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-[#5563ED] border border-indigo-100 dark:border-indigo-900/30">
                  <Icon icon="ri:double-quotes-l" className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
                    {language === "hi" ? "विशेष आभार" : "Special Thanks"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-medium italic">
                    "{t.thanksParagraph}"
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center gap-4 flex-wrap"
        >
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#5563ED] dark:text-slate-400 dark:hover:text-[#5563ED] transition-colors duration-200"
          >
            <Icon icon="lucide:arrow-left" className="w-4 h-4" />
            {language === "hi" ? "WhatNow के बारे में" : "About WhatNow"}
          </Link>
          
          <Link 
            href="/editorial-guidelines" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#5563ED] hover:underline underline-offset-4"
          >
            {language === "hi" ? "संपादकीय दिशानिर्देश" : "Editorial Guidelines"}
            <Icon icon="lucide:arrow-right" className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
