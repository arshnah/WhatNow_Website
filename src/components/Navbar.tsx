"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  en: {
    careers: "Careers",
    exams: "Exams",
    reads: "Reads",
    about: "About",
    allCareers: "All Careers",
    allExams: "All Exams",
    allReads: "All Reads",
    activeGuides: "Active Blueprints",
    comingSoonLabel: "Coming Soon",
    searchTitle: "Search (Ctrl+K)",
    searchMobile: "Search",
    themeLabel: "Vibe Theme",
    activeGuidesHeader: "Active Guides",
    incubatingHeader: "Under Incubation",
    jeePaper3: "JEE Paper 3 (B.Planning)",
    
    // Careers
    uxDesign: "Product & UX Design",
    fashionDesign: "Fashion Design",
    corpLaw: "Corporate & Litigation Law",
    merchantNavy: "Merchant Navy Deck Officer",
    urbanPlanning: "Urban Planning & Development",
    armedForces: "Armed Forces Officer",
    prodMgmt: "Product Management",

    // Exams
    uceed: "UCEED (IIT Design)",
    nid: "NID DAT",
    nift: "NIFT Entrance",
    clat: "CLAT",
    nda: "NDA Exam",
    imucet: "IMU CET",
    jee: "JEE Main & Advanced",
    neet: "NEET UG",

    // Reads
    iitDrop: "IIT brand vs drop year?",
    parentConvince: "Talk design with parents?",
    metroMove: "Relocating to metro cities?"
  },
  hi: {
    careers: "करियर",
    exams: "परीक्षाएं",
    reads: "लेख",
    about: "हमारे बारे में",
    allCareers: "सभी करियर",
    allExams: "सभी परीक्षाएं",
    allReads: "सभी लेख",
    activeGuides: "सक्रिय ब्लूप्रिंट",
    comingSoonLabel: "जल्द आ रहे हैं",
    searchTitle: "खोजें (Ctrl+K)",
    searchMobile: "खोजें",
    themeLabel: "वाइब थीम",
    activeGuidesHeader: "सक्रिय मार्गदर्शिकाएँ",
    incubatingHeader: "तैयारी जारी है",
    jeePaper3: "JEE पेपर 3 (B.Planning)",

    // Careers
    uxDesign: "प्रोडक्ट और यूएक्स डिज़ाइन",
    fashionDesign: "फैशन डिज़ाइन",
    corpLaw: "कॉर्पोरेट और लिटिगेशन लॉ",
    merchantNavy: "मर्चेंट नेवी डेक ऑफिसर",
    urbanPlanning: "शहरी नियोजन और विकास",
    armedForces: "सशस्त्र बल अधिकारी",
    prodMgmt: "उत्पाद प्रबंधन",

    // Exams
    uceed: "UCEED (IIT डिज़ाइन)",
    nid: "NID DAT",
    nift: "NIFT एंट्रेंस",
    clat: "CLAT",
    nda: "NDA परीक्षा",
    imucet: "IMU CET",
    jee: "JEE मेन और एडवांस्ड",
    neet: "NEET UG",

    // Reads
    iitDrop: "IIT ब्रांड बनाम ड्रॉप ईयर?",
    parentConvince: "माता-पिता से डिज़ाइन पर बात?",
    metroMove: "मेट्रो शहरों में जाना?"
  }
};

const THEMES = [
  {
    id: "indigo",
    nameEn: "Default Indigo", nameHi: "डिफ़ॉल्ट इंडिगो",
    primary: "#4F46E5", hover: "#4338ca",
    secondary: "#4F46E5", secondaryHover: "#4338ca",
    bgTint: "#F8F8F6", bgTint2: "#F1F5F9",
    color: "bg-[#4F46E5]",
  },
  {
    id: "lavender",
    nameEn: "Lavender Breeze", nameHi: "लैवेंडर ब्रीज़",
    primary: "#8B5CF6", hover: "#7c3aed",
    secondary: "#7C3AED", secondaryHover: "#6d28d9",
    bgTint: "#F5F3FF", bgTint2: "#EDE9FE",
    color: "bg-[#8B5CF6]",
  },
  {
    id: "mint",
    nameEn: "Fresh Mint", nameHi: "फ्रेश मिंट",
    primary: "#10B981", hover: "#059669",
    secondary: "#0D9488", secondaryHover: "#0F766E",
    bgTint: "#F0FDF9", bgTint2: "#ECFDF5",
    color: "bg-[#10B981]",
  },
  {
    id: "peach",
    nameEn: "Sweet Peach", nameHi: "स्वीट पीच",
    primary: "#F59E0B", hover: "#d97706",
    secondary: "#EA580C", secondaryHover: "#C2410C",
    bgTint: "#FFFBEB", bgTint2: "#FEF3C7",
    color: "bg-[#F59E0B]",
  },
  {
    id: "rose",
    nameEn: "Soft Rose", nameHi: "सॉफ्ट रोज़",
    primary: "#EC4899", hover: "#db2777",
    secondary: "#DB2777", secondaryHover: "#BE185D",
    bgTint: "#FFF1F2", bgTint2: "#FFE4E6",
    color: "bg-[#EC4899]",
  },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const [activeTheme, setActiveTheme] = useState("indigo");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  const applyTheme = (themeId: string) => {
    const selectedTheme = THEMES.find(t => t.id === themeId) || THEMES[0];
    document.documentElement.style.setProperty("--color-primary", selectedTheme.primary);
    document.documentElement.style.setProperty("--color-primary-hover", selectedTheme.hover);
    document.documentElement.style.setProperty("--color-secondary", selectedTheme.secondary);
    document.documentElement.style.setProperty("--color-secondary-hover", selectedTheme.secondaryHover);
    document.documentElement.style.setProperty("--color-bg-tint", selectedTheme.bgTint);
    document.documentElement.style.setProperty("--color-bg-tint2", selectedTheme.bgTint2);
    localStorage.setItem("whatnow-vibe-theme", themeId);
    setActiveTheme(themeId);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Load the saved accent ("vibe") theme on mount. Light/dark is handled
  // separately by ThemeContext + the no-flash script in layout.tsx.
  useEffect(() => {
    const savedTheme = localStorage.getItem("whatnow-vibe-theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  }, []);

  // Mobile Accordion state
  const [mobileAccordions, setMobileAccordions] = useState({
    careers: false,
    exams: false,
    reads: false
  });

  const toggleMobileAccordion = (key: 'careers' | 'exams' | 'reads') => {
    setMobileAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const careersItems = [
    { href: "/careers/design", label: t.uxDesign, status: "ready" },
    { href: "/careers/fashion-design", label: t.fashionDesign, status: "ready" },
    { href: "/careers/law", label: t.corpLaw, status: "ready" },
    { href: "/careers/merchant-navy", label: t.merchantNavy, status: "ready" },
    { href: "/careers/urban-planning", label: t.urbanPlanning, status: "ready" },
    { label: t.armedForces, status: "coming-soon" },
    { label: t.prodMgmt, status: "coming-soon" }
  ];

  const examsItems = [
    { href: "/exams/uceed", label: t.uceed, status: "ready" },
    { label: t.nid, status: "coming-soon" },
    { href: "/exams/nift", label: t.nift, status: "ready" },
    { href: "/exams/clat", label: t.clat, status: "ready" },
    { label: t.nda, status: "coming-soon" },
    { href: "/exams/imu-cet", label: t.imucet, status: "ready" },
    { href: "/exams/jee-paper3", label: t.jeePaper3, status: "ready" },
    { label: t.jee, status: "coming-soon" },
    { label: t.neet, status: "coming-soon" }
  ];

  const readsItems = [
    { href: "/reads/iit-drop-year", label: t.iitDrop, status: "ready" },
    { href: "/reads/talk-creative-fields", label: t.parentConvince, status: "ready" },
    { href: "/reads/transitioning-cities", label: t.metroMove, status: "ready" }
  ];

  return (
    <>
      <nav className="w-full bg-white/90 dark:bg-slate-900/85 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-4">
            
            {/* Logo */}
            <Link href="/" className="flex gap-2 items-center shrink-0">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo.png"
                  alt="WhatNow Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="inline-block">
                <span className="font-heading font-black text-xl xl:text-2xl text-neutral-dark tracking-tight">What</span>
                <span className="font-heading font-black text-xl xl:text-2xl text-primary tracking-tight">Now</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-650 shrink-0">
              
              {/* Careers Dropdown */}
              <div 
                className="relative py-6 cursor-pointer"
                onMouseEnter={() => setActiveDropdown("careers")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                  <span>{t.careers}</span>
                  <Icon 
                    icon="solar:alt-arrow-down-linear" 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "careers" ? "rotate-180 text-primary" : ""}`} 
                  />
                </div>

                <AnimatePresence>
                  {activeDropdown === "careers" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[520px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl shadow-slate-900/8 dark:shadow-black/40 overflow-hidden z-50 flex"
                    >
                      {/* Active Blueprints */}
                      <div className="w-7/12 p-5 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3">
                            {t.activeGuidesHeader}
                          </span>
                          <div className="space-y-0.5">
                            {careersItems.filter(i => i.status === "ready").map((item) => (
                              <Link
                                key={item.href}
                                href={item.href || "#"}
                                className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-primary/[0.06] dark:hover:bg-primary/[0.15] transition-all duration-150 group"
                              >
                                <div className="flex items-center gap-3 group-hover:translate-x-0.5 transition-transform duration-150">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                                  <span className="font-medium text-[13px] leading-tight">{item.label}</span>
                                </div>
                                <Icon icon="ph:arrow-right" className="w-3 h-3 opacity-0 group-hover:opacity-100 text-primary -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <Link 
                            href="/careers" 
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-hover transition-colors tracking-wide"
                          >
                            <span>{t.allCareers}</span>
                            <Icon icon="ph:arrow-right" className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>

                      {/* Coming Soon */}
                      <div className="w-5/12 bg-slate-50 dark:bg-slate-800/50 border-l border-slate-100 dark:border-slate-700 p-5">
                        <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3">
                          {t.comingSoonLabel}
                        </span>
                        <div className="space-y-2">
                          {careersItems.filter(i => i.status === "coming-soon").map((item, index) => (
                            <div 
                              key={index}
                              className="px-3 py-2 rounded-lg flex items-center justify-between gap-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                            >
                              <span className="text-[12px] font-medium text-slate-400 leading-tight">{item.label}</span>
                              <span className="text-[9px] font-semibold uppercase text-slate-400 tracking-wide shrink-0">
                                {language === "hi" ? "जल्द" : "Soon"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Exams Dropdown */}
              <div 
                className="relative py-6 cursor-pointer"
                onMouseEnter={() => setActiveDropdown("exams")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                  <span>{t.exams}</span>
                  <Icon 
                    icon="solar:alt-arrow-down-linear" 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "exams" ? "rotate-180 text-primary" : ""}`} 
                  />
                </div>

                <AnimatePresence>
                  {activeDropdown === "exams" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[520px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl shadow-slate-900/8 dark:shadow-black/40 overflow-hidden z-50 flex"
                    >
                      {/* Active Exams */}
                      <div className="w-6/12 p-5 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3">
                            {t.activeGuidesHeader}
                          </span>
                          <div className="space-y-0.5">
                            {examsItems.filter(i => i.status === "ready").map((item) => (
                              <Link
                                key={item.href}
                                href={item.href || "#"}
                                className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-primary/[0.06] dark:hover:bg-primary/[0.15] transition-all duration-150 group"
                              >
                                <div className="flex items-center gap-3 group-hover:translate-x-0.5 transition-transform duration-150">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                                  <span className="font-medium text-[13px] leading-tight">{item.label}</span>
                                </div>
                                <Icon icon="ph:arrow-right" className="w-3 h-3 opacity-0 group-hover:opacity-100 text-primary -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <Link 
                            href="/exams" 
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-hover transition-colors tracking-wide"
                          >
                            <span>{t.allExams}</span>
                            <Icon icon="ph:arrow-right" className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>

                      {/* Coming Soon Exams */}
                      <div className="w-6/12 bg-slate-50 dark:bg-slate-800/50 border-l border-slate-100 dark:border-slate-700 p-5 max-h-[320px] overflow-y-auto">
                        <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3">
                          {t.comingSoonLabel}
                        </span>
                        <div className="space-y-1.5">
                          {examsItems.filter(i => i.status === "coming-soon").map((item, index) => (
                            <div 
                              key={index}
                              className="px-3 py-2 rounded-lg flex items-center justify-between gap-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                            >
                              <span className="text-[12px] font-medium text-slate-400 truncate">{item.label}</span>
                              <span className="text-[9px] font-semibold uppercase text-slate-400 tracking-wide shrink-0">
                                {language === "hi" ? "जल्द" : "Soon"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Reads Dropdown */}
              <div 
                className="relative py-6 cursor-pointer"
                onMouseEnter={() => setActiveDropdown("reads")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-primary transition-colors">
                  <span>{t.reads}</span>
                  <Icon 
                    icon="solar:alt-arrow-down-linear" 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "reads" ? "rotate-180 text-primary" : ""}`} 
                  />
                </div>

                <AnimatePresence>
                  {activeDropdown === "reads" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[340px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl shadow-slate-900/8 dark:shadow-black/40 p-5 z-50 flex flex-col"
                    >
                      <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3">
                        {t.activeGuidesHeader}
                      </span>
                      <div className="space-y-0.5 mb-5">
                        {readsItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href || "#"}
                            className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-primary/[0.06] dark:hover:bg-primary/[0.15] transition-all duration-150 group"
                          >
                            <div className="flex items-center gap-3 group-hover:translate-x-0.5 transition-transform duration-150">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span className="font-medium text-[13px] leading-tight">{item.label}</span>
                            </div>
                            <Icon icon="ph:arrow-right" className="w-3 h-3 opacity-0 group-hover:opacity-100 text-primary -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
                          </Link>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Link 
                          href="/reads" 
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-hover transition-colors tracking-wide"
                        >
                          <span>{t.allReads}</span>
                          <Icon icon="ph:arrow-right" className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple Link - About */}
              <Link 
                href="/about" 
                className="hover:text-primary transition-colors py-6"
              >
                {t.about}
              </Link>
            </div>

            {/* Desktop Actions (Search, Language and Theme) */}
            <div className="hidden lg:flex items-center shrink-0 gap-1.5">
              {/* Notice Board Button */}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-notice-board"))}
                className="relative h-9 w-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={language === "hi" ? "सूचना पट्ट (लाइव)" : "Notice Board (Live)"}
              >
                <Icon icon="solar:bell-bing-bold-duotone" className="w-5.5 h-5.5" />
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </button>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
                className="h-9 flex items-center gap-1.5 px-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={t.searchTitle}
              >
                <span className="sr-only">{t.searchMobile}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <kbd className="hidden xl:inline-block text-[10px] font-bold text-slate-400 border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 font-sans">
                  ⌘K
                </kbd>
              </button>

              {/* Language Toggle — Desktop */}
              <button
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className="flex items-center h-9 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden text-[11px] font-black tracking-tight shadow-sm hover:border-primary/40 transition-all duration-200 cursor-pointer"
                title={language === "en" ? "Switch to Hindi" : "Switch to English"}
              >
                <span className={`flex items-center h-full px-2.5 transition-all duration-200 ${
                  language === "en" ? "bg-primary text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}>EN</span>
                <span className={`flex items-center h-full px-2.5 transition-all duration-200 ${
                  language === "hi" ? "bg-primary text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}>हि</span>
              </button>

              {/* Dark Mode Toggle — Desktop */}
              <button
                onClick={toggleTheme}
                className="h-9 w-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary/40 transition-all duration-200 cursor-pointer"
                title={theme === "dark"
                  ? (language === "hi" ? "लाइट मोड" : "Light mode")
                  : (language === "hi" ? "डार्क मोड" : "Dark mode")}
                aria-label="Toggle dark mode"
              >
                <Icon
                  icon={theme === "dark" ? "solar:sun-bold-duotone" : "solar:moon-bold-duotone"}
                  className="w-5 h-5"
                />
              </button>

              {/* Vibe Theme Switcher */}
              <div className="relative" ref={themeDropdownRef}>
                <button
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                  className="h-9 w-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title={t.themeLabel}
                >
                  <Icon icon="solar:palette-bold-duotone" className="w-5.5 h-5.5" />
                </button>

                <AnimatePresence>
                  {isThemeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl dark:shadow-black/40 p-4 z-50 flex flex-col gap-2.5"
                    >
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider px-1">
                        {t.themeLabel}
                      </span>
                      <div className="flex flex-col gap-1">
                        {THEMES.map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => {
                              applyTheme(theme.id);
                              setIsThemeOpen(false);
                            }}
                            className={`flex items-center justify-between px-2.5 py-2 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                              activeTheme === theme.id
                                ? "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                                : "text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`w-3.5 h-3.5 rounded-full ${theme.color} shadow-sm border border-black/5`} />
                              <span>{language === "hi" ? theme.nameHi : theme.nameEn}</span>
                            </div>
                            {activeTheme === theme.id && (
                              <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-slate-850" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center gap-1.5">
              {/* Notice Board mobile button */}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-notice-board"))}
                className="relative text-gray-600 hover:text-gray-900 p-2 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors"
                title="Notice Board"
              >
                <Icon icon="solar:bell-bing-bold-duotone" className="w-5.5 h-5.5" />
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </button>

              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
                className="text-gray-600 hover:text-gray-900 p-2 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors"
                title={t.searchMobile}
              >
                <span className="sr-only">{t.searchMobile}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button 
                onClick={() => setIsOpen(true)}
                className="text-gray-600 hover:text-gray-900 p-2 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Modern Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar drawer content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[20rem] bg-white dark:bg-slate-900 shadow-2xl p-6 lg:hidden flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex gap-2 items-center">
                    <div className="relative h-9 w-9">
                      <Image
                        src="/logo.png"
                        alt="WhatNow Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div>
                      <span className="font-heading font-black text-xl text-neutral-dark tracking-tight">What</span>
                      <span className="font-heading font-black text-xl text-primary tracking-tight">Now</span>
                    </div>
                  </Link>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-slate-450 hover:text-neutral-dark hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    <Icon icon="solar:close-circle-bold" className="w-6 h-6" />
                  </button>
                </div>

                {/* Search trigger inside mobile menu */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent("open-search"));
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-350 transition-all text-sm font-semibold mb-6 text-left cursor-pointer"
                >
                  <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400" />
                  <span>{t.searchMobile}...</span>
                </button>

                {/* Mobile Menu Accordions */}
                <div className="space-y-4">
                  
                  {/* Careers Accordion */}
                  <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('careers')}
                      className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-extrabold cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Icon icon="solar:compass-bold-duotone" className="w-4.5 h-4.5 text-slate-550" />
                        <span>{t.careers}</span>
                      </div>
                      <Icon 
                        icon="solar:alt-arrow-down-linear" 
                        className={`w-4 h-4 transition-transform duration-300 ${mobileAccordions.careers ? "rotate-180" : ""}`} 
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileAccordions.careers && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800"
                        >
                          <div className="p-3 space-y-1">
                            <Link
                              href="/careers"
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-xs font-black text-primary hover:bg-slate-50 rounded-xl"
                            >
                              {t.allCareers} →
                            </Link>
                            
                            {careersItems.filter(i => i.status === "ready").map((item) => (
                              <Link
                                key={item.href}
                                href={item.href || "#"}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl"
                              >
                                {item.label}
                              </Link>
                            ))}

                            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                              <span className="px-3 text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1">
                                {t.comingSoonLabel}
                              </span>
                              {careersItems.filter(i => i.status === "coming-soon").map((item, idx) => (
                                <div key={idx} className="px-3 py-1.5 text-xs text-slate-400 font-semibold italic">
                                  {item.label}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Exams Accordion */}
                  <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('exams')}
                      className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-extrabold cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Icon icon="solar:document-bold-duotone" className="w-4.5 h-4.5 text-slate-550" />
                        <span>{t.exams}</span>
                      </div>
                      <Icon 
                        icon="solar:alt-arrow-down-linear" 
                        className={`w-4 h-4 transition-transform duration-300 ${mobileAccordions.exams ? "rotate-180" : ""}`} 
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileAccordions.exams && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800"
                        >
                          <div className="p-3 space-y-1">
                            <Link
                              href="/exams"
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-xs font-black text-primary hover:bg-slate-50 rounded-xl"
                            >
                              {t.allExams} →
                            </Link>
                            
                            {examsItems.filter(i => i.status === "ready").map((item) => (
                              <Link
                                key={item.href}
                                href={item.href || "#"}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl"
                              >
                                {item.label}
                              </Link>
                            ))}

                            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                              <span className="px-3 text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1">
                                {t.comingSoonLabel}
                              </span>
                              <div className="max-h-[150px] overflow-y-auto">
                                {examsItems.filter(i => i.status === "coming-soon").map((item, idx) => (
                                  <div key={idx} className="px-3 py-1 text-xs text-slate-400 font-semibold italic">
                                    {item.label}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Reads Accordion */}
                  <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('reads')}
                      className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-extrabold cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Icon icon="solar:notes-bold-duotone" className="w-4.5 h-4.5 text-slate-550" />
                        <span>{t.reads}</span>
                      </div>
                      <Icon 
                        icon="solar:alt-arrow-down-linear" 
                        className={`w-4 h-4 transition-transform duration-300 ${mobileAccordions.reads ? "rotate-180" : ""}`} 
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileAccordions.reads && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800"
                        >
                          <div className="p-3 space-y-1">
                            <Link
                              href="/reads"
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-xs font-black text-primary hover:bg-slate-50 rounded-xl"
                            >
                              {t.allReads} →
                            </Link>

                            {readsItems.filter(i => i.status === "ready").map((item) => (
                              <Link
                                key={item.href}
                                href={item.href || "#"}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Direct Link - About */}
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-3.5 border border-slate-100 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-extrabold"
                  >
                    <Icon icon="solar:info-circle-bold-duotone" className="w-4.5 h-4.5 text-slate-550" />
                    <span>{t.about}</span>
                  </Link>

                  {/* Language Toggle — Mobile */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-5 mt-4">
                    <span className="px-2 text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-3">
                      {language === "en" ? "Language" : "भाषा"}
                    </span>
                    <div className="flex gap-3 px-2">
                      <button
                        onClick={() => setLanguage("en")}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer border ${
                          language === "en"
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLanguage("hi")}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer border ${
                          language === "hi"
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        हिंदी
                      </button>
                    </div>
                  </div>

                  {/* Dark Mode Toggle — Mobile */}
                  <div className="border-t border-slate-100 dark:border-slate-800 dark:border-slate-800 pt-5 mt-4">
                    <span className="px-2 text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-3">
                      {language === "en" ? "Appearance" : "दिखावट"}
                    </span>
                    <div className="flex gap-3 px-2">
                      <button
                        onClick={() => theme === "dark" && toggleTheme()}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer border ${
                          theme === "light"
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        <Icon icon="solar:sun-bold-duotone" className="w-4.5 h-4.5" />
                        {language === "en" ? "Light" : "लाइट"}
                      </button>
                      <button
                        onClick={() => theme === "light" && toggleTheme()}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer border ${
                          theme === "dark"
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        <Icon icon="solar:moon-bold-duotone" className="w-4.5 h-4.5" />
                        {language === "en" ? "Dark" : "डार्क"}
                      </button>
                    </div>
                  </div>

                  {/* Mobile Vibe Theme Switcher */}
                  <div className="border-t border-slate-100 dark:border-slate-800 dark:border-slate-800 pt-5 mt-4">
                    <span className="px-2 text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-3">
                      {t.themeLabel}
                    </span>
                    <div className="flex gap-3 px-2">
                      {THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => applyTheme(theme.id)}
                          className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer shadow-sm ${theme.color} ${
                            activeTheme === theme.id
                              ? "border-slate-800 scale-110 ring-2 ring-slate-800/10"
                              : "border-transparent hover:scale-105"
                          }`}
                          title={language === "hi" ? theme.nameHi : theme.nameEn}
                        >
                          {activeTheme === theme.id && (
                            <Icon icon="ph:check-bold" className="w-5 h-5 text-white" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
