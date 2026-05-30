"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  en: {
    careers: "Careers",
    exams: "Exams",
    reads: "Reads",
    scholarships: "Scholarships",
    new: "NEW",
    convinceParents: "Convince Parents",
    about: "About",
    login: "Login",
    join: "Join for Free",
    searchTitle: "Search (Ctrl+K)",
    searchMobile: "Search",
    comingSoonLabel: "Coming Soon",
    activeGuides: "Active Blueprints",
    incubatingSection: "Future Roadmaps",
    statusDrafting: "Curating",
    statusWriting: "Writing",
    statusScouting: "Scouting",
    statusPreparing: "Preparing",
    statusLive: "Live",
  },
  hi: {
    careers: "करियर",
    exams: "परीक्षाएं",
    reads: "लेख",
    scholarships: "छात्रवृत्ति",
    new: "नया",
    convinceParents: "माता-पिता को मनाएं",
    about: "हमारे बारे में",
    login: "लॉगिन",
    join: "मुफ़्त में शामिल हों",
    searchTitle: "खोजें (Ctrl+K)",
    searchMobile: "खोजें",
    comingSoonLabel: "जल्द आ रहे हैं",
    activeGuides: "सक्रिय ब्लूप्रिंट",
    incubatingSection: "आगामी रोडमैप",
    statusDrafting: "संकलन जारी",
    statusWriting: "लेखन कार्य",
    statusScouting: "खोज जारी",
    statusPreparing: "तैयारी में",
    statusLive: "सक्रिय",
  }
};

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);

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

  const activeItems = [
    { href: "/careers", label: t.careers, icon: "solar:compass-bold-duotone" },
    { href: "/exams", label: t.exams, icon: "solar:document-bold-duotone" },
    { href: "/about", label: t.about, icon: "solar:info-circle-bold-duotone" },
  ];

  const draftItems = [
    { href: "/reads", label: t.reads, icon: "solar:notes-bold-duotone", status: t.statusWriting },
    { href: "/scholarships", label: t.scholarships, icon: "solar:case-minimalistic-bold-duotone", status: t.statusScouting },
    { href: "/convince-parents", label: t.convinceParents, icon: "solar:users-group-two-rounded-bold-duotone", status: t.statusPreparing },
  ];

  return (
    <>
      <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50">
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
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm shrink-0">
              {/* Active Links with Bottom Hover Underlines */}
              <div className="flex items-center gap-4 xl:gap-6 shrink-0">
                {activeItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-bold text-slate-650 hover:text-primary transition-all relative py-1.5 group shrink-0"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full duration-200" />
                  </Link>
                ))}
              </div>

              {/* Vertical line divider */}
              <div className="h-5 w-[1.5px] bg-slate-200/80 shrink-0" />

              {/* Categorized Coming Soon Capsule Widget */}
              <div className="flex bg-slate-50 border border-slate-200/60 p-0.5 rounded-2xl items-center gap-1 xl:gap-1.5 select-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] shrink-0">
                {/* Coming Soon status pill */}
                <span className="text-[9px] xl:text-[10px] font-black text-amber-700 bg-amber-50 border border-amber-200/50 px-2 py-1 rounded-xl flex items-center gap-1 xl:gap-1.5 uppercase tracking-wider select-none shrink-0 shadow-xs">
                  <span className="h-1 w-1 rounded-full bg-amber-500 animate-pulse" />
                  {t.comingSoonLabel}
                </span>

                {/* Pill links */}
                <div className="flex items-center gap-0.5 text-[10px] xl:text-xs shrink-0">
                  {draftItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="font-bold text-slate-500 hover:text-primary hover:bg-white hover:shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:border-slate-200/50 border border-transparent px-2.5 py-1 rounded-xl transition-all whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 shrink-0">
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

            {/* Mobile menu button and search */}
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
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[19rem] bg-white shadow-2xl p-6 lg:hidden flex flex-col justify-between overflow-y-auto"
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

                {/* Menu items categorized */}
                <div className="space-y-6">
                  {/* Active Section */}
                  <div>
                    <span className="px-3.5 text-[10px] font-extrabold text-slate-400 tracking-wider uppercase block mb-2">
                      {t.activeGuides}
                    </span>
                    <div className="space-y-1">
                      {activeItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-base font-bold text-slate-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/50 group-hover:bg-primary/10 group-hover:border-primary/10 transition-colors">
                              <Icon icon={item.icon} className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span>{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              {t.statusLive}
                            </span>
                            <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Incubating Section */}
                  <div>
                    <span className="px-3.5 text-[10px] font-extrabold text-slate-400 tracking-wider uppercase block mb-2 flex items-center justify-between">
                      <span>{t.incubatingSection}</span>
                      <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    </span>
                    <div className="space-y-1">
                      {draftItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-base font-bold text-slate-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/50 group-hover:bg-primary/10 group-hover:border-primary/10 transition-colors">
                              <Icon icon={item.icon} className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span>{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              {item.status}
                            </span>
                            <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer controls */}
              <div className="mt-8">
                {/* Language Switcher Section */}
                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:global-bold-duotone" className="w-5 h-5 text-slate-500" />
                    <span className="text-xs font-bold text-slate-650">भाषा / Language</span>
                  </div>
                  <div className="flex bg-white p-0.5 rounded-lg border border-slate-200/80">
                    <button
                      onClick={() => setLanguage("en")}
                      className={`text-[10px] font-extrabold px-3 py-1 rounded transition-all cursor-pointer ${
                        language === "en"
                          ? "bg-primary text-white shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage("hi")}
                      className={`text-[10px] font-extrabold px-3 py-1 rounded transition-all cursor-pointer ${
                        language === "hi"
                          ? "bg-primary text-white shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      हिन्दी
                    </button>
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
