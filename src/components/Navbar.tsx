"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
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
    activeGuidesHeader: "Active Guides",
    incubatingHeader: "Under Incubation",
    
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
    activeGuidesHeader: "सक्रिय मार्गदर्शिकाएँ",
    incubatingHeader: "तैयारी जारी है",

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

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
    { label: t.jee, status: "coming-soon" },
    { label: t.neet, status: "coming-soon" }
  ];

  const readsItems = [
    { label: t.iitDrop, status: "coming-soon" },
    { label: t.parentConvince, status: "coming-soon" },
    { label: t.metroMove, status: "coming-soon" }
  ];

  return (
    <>
      <nav className="w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50">
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
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[540px] bg-white border border-slate-200/80 rounded-[2rem] shadow-2xl shadow-slate-200/80 overflow-hidden z-50 flex"
                    >
                      {/* Active Blueprints */}
                      <div className="w-7/12 p-6 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-4">
                            {t.activeGuidesHeader}
                          </span>
                          <div className="space-y-1">
                            {careersItems.filter(i => i.status === "ready").map((item) => (
                              <Link
                                key={item.href}
                                href={item.href || "#"}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors group"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                                <span className="font-bold text-sm">{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100">
                          <Link 
                            href="/careers" 
                            className="inline-flex items-center gap-1.5 text-xs font-black text-primary hover:text-primary-hover transition-colors"
                          >
                            <span>{t.allCareers}</span>
                            <Icon icon="ph:arrow-right" className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Coming Soon */}
                      <div className="w-5/12 bg-slate-50/80 border-l border-slate-100 p-6">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-4">
                          {t.comingSoonLabel}
                        </span>
                        <div className="space-y-3">
                          {careersItems.filter(i => i.status === "coming-soon").map((item, index) => (
                            <div 
                              key={index}
                              className="px-3 py-1.5 border border-dashed border-slate-200 bg-white/50 rounded-xl flex flex-col"
                            >
                              <span className="text-xs font-bold text-slate-450 leading-tight">{item.label}</span>
                              <span className="text-[9px] font-black uppercase text-amber-600/80 mt-1 tracking-wider">
                                {language === "hi" ? "जल्द आ रहा है" : "Drafting"}
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
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[540px] bg-white border border-slate-200/80 rounded-[2rem] shadow-2xl shadow-slate-200/80 overflow-hidden z-50 flex"
                    >
                      {/* Active Exams */}
                      <div className="w-6/12 p-6 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-4">
                            {t.activeGuidesHeader}
                          </span>
                          <div className="space-y-1">
                            {examsItems.filter(i => i.status === "ready").map((item) => (
                              <Link
                                key={item.href}
                                href={item.href || "#"}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors group"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                                <span className="font-bold text-sm">{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100">
                          <Link 
                            href="/exams" 
                            className="inline-flex items-center gap-1.5 text-xs font-black text-primary hover:text-primary-hover transition-colors"
                          >
                            <span>{t.allExams}</span>
                            <Icon icon="ph:arrow-right" className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Coming Soon Exams */}
                      <div className="w-6/12 bg-slate-50/80 border-l border-slate-100 p-6 max-h-[350px] overflow-y-auto">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-4">
                          {t.comingSoonLabel}
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {examsItems.filter(i => i.status === "coming-soon").map((item, index) => (
                            <div 
                              key={index}
                              className="px-3 py-2 border border-dashed border-slate-200 bg-white/50 rounded-xl flex items-center justify-between"
                            >
                              <span className="text-xs font-bold text-slate-450 truncate">{item.label}</span>
                              <span className="text-[8px] font-black uppercase text-amber-600/80 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100 shrink-0">
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
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[380px] bg-white border border-slate-200/80 rounded-[2rem] shadow-2xl shadow-slate-200/80 p-6 z-50 flex flex-col"
                    >
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-4">
                        {t.comingSoonLabel}
                      </span>
                      <div className="space-y-3 mb-6">
                        {readsItems.map((item, index) => (
                          <div 
                            key={index}
                            className="px-3.5 py-2.5 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl flex flex-col"
                          >
                            <span className="text-xs font-bold text-slate-500 leading-tight">{item.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-100 mt-auto">
                        <Link 
                          href="/reads" 
                          className="inline-flex items-center gap-1.5 text-xs font-black text-primary hover:text-primary-hover transition-colors"
                        >
                          <span>{t.allReads}</span>
                          <Icon icon="ph:arrow-right" className="w-3.5 h-3.5" />
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

            {/* Desktop Actions (Search only) */}
            <div className="hidden lg:flex items-center shrink-0">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
                className="text-gray-600 hover:text-gray-900 transition-colors p-2 cursor-pointer flex items-center gap-1.5"
                title={t.searchTitle}
              >
                <span className="sr-only">{t.searchMobile}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <kbd className="hidden xl:inline-block text-[10px] font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50 font-sans">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center gap-2">
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
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[20rem] bg-white shadow-2xl p-6 lg:hidden flex flex-col justify-between overflow-y-auto"
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
                  className="w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-400 hover:bg-slate-100 hover:border-slate-350 transition-all text-sm font-semibold mb-6 text-left cursor-pointer"
                >
                  <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400" />
                  <span>{t.searchMobile}...</span>
                </button>

                {/* Mobile Menu Accordions */}
                <div className="space-y-4">
                  
                  {/* Careers Accordion */}
                  <div className="border border-slate-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('careers')}
                      className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-sm font-extrabold cursor-pointer"
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
                          className="overflow-hidden bg-white border-t border-slate-50"
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
                                className="block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                              >
                                {item.label}
                              </Link>
                            ))}

                            <div className="pt-2 border-t border-slate-100 mt-2">
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
                  <div className="border border-slate-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('exams')}
                      className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-sm font-extrabold cursor-pointer"
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
                          className="overflow-hidden bg-white border-t border-slate-50"
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
                                className="block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                              >
                                {item.label}
                              </Link>
                            ))}

                            <div className="pt-2 border-t border-slate-100 mt-2">
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
                  <div className="border border-slate-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('reads')}
                      className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-sm font-extrabold cursor-pointer"
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
                          className="overflow-hidden bg-white border-t border-slate-50"
                        >
                          <div className="p-3 space-y-1">
                            <Link
                              href="/reads"
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-xs font-black text-primary hover:bg-slate-50 rounded-xl"
                            >
                              {t.allReads} →
                            </Link>

                            <div className="pt-2">
                              <span className="px-3 text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1">
                                {t.comingSoonLabel}
                              </span>
                              {readsItems.map((item, idx) => (
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

                  {/* Direct Link - About */}
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 text-slate-700 text-sm font-extrabold"
                  >
                    <Icon icon="solar:info-circle-bold-duotone" className="w-4.5 h-4.5 text-slate-550" />
                    <span>{t.about}</span>
                  </Link>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
