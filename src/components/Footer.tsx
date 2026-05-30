"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/context/LanguageContext';

const LANGUAGES = [
  { code: 'en' as Language, name: 'English' },
  { code: 'hi' as Language, name: 'Hindi (हिंदी)' }
];

const translations = {
  en: {
    languageLabel: "Language",
    socialLabel: "Social",
    explore: "Explore",
    careers: "Careers",
    exams: "Exams",
    editorialReads: "Editorial Reads",
    featuredGuides: "Featured Guides",
    company: "Company",
    aboutUs: "About Us",
    contact: "Contact",
    resources: "Resources",
    communityDiscord: "Community Discord",
    contentPolicy: "Content Policy",
    faq: "FAQ",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    editorialGuidelines: "Editorial Guidelines",
  },
  hi: {
    languageLabel: "भाषा",
    socialLabel: "सोशल",
    explore: "खोजें",
    careers: "करियर",
    exams: "परीक्षाएं",
    editorialReads: "संपादकीय लेख",
    featuredGuides: "चुनिंदा मार्गदर्शिकाएँ",
    company: "कंपनी",
    aboutUs: "हमारे बारे में",
    contact: "संपर्क करें",
    resources: "संसाधन",
    communityDiscord: "कम्युनिटी डिस्कॉर्ड",
    contentPolicy: "सामग्री नीति",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    legal: "कानूनी",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    cookiePolicy: "कुकी नीति",
    editorialGuidelines: "संपादकीय दिशानिर्देश",
  }
};

export default function Footer() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const selectedLangName = LANGUAGES.find(l => l.code === language)?.name || 'English';

  return (
    <footer className="bg-gradient-to-b from-[#1B1A62] to-[#5563ED] text-white pt-20 lg:pt-40 overflow-hidden mt-auto">
      <div className="w-full mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32 mb-20 lg:mb-32">

          {/* Left Side: Logo, Language & Socials */}
          <div className="flex flex-col gap-10 lg:gap-12 w-full lg:w-1/4">

            {/* Logo */}
            <div>
              <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
                <Image src="/logo.png" alt="WhatNow Logo" width={140} height={40} className="h-24 w-auto brightness-0 invert" />
              </Link>
            </div>

            {/* Language Dropdown */}
            <div className="relative w-48" ref={dropdownRef}>
              <p className="text-white/80 text-sm mb-4">{t.languageLabel}</p>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-6 py-3 w-full cursor-pointer transition-all focus:outline-none select-none text-left"
              >
                <span className="text-sm font-medium">{selectedLangName}</span>
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 4 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-50 bottom-full mb-2 left-0 right-0 bg-[#28277D] border border-white/15 rounded-2xl shadow-xl py-2 overflow-hidden"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-sm transition-colors flex items-center justify-between cursor-pointer focus:outline-none ${language === lang.code
                            ? 'bg-white/15 text-white font-bold'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                          }`}
                      >
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <Icon icon="solar:check-read-bold" className="w-4 h-4 text-white" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Socials */}
            <div>
              <p className="text-white/80 text-sm mb-4">{t.socialLabel}</p>
              <div className="flex items-center gap-5">
                <Link href="/discord" className="text-white hover:text-white/80 transition-colors" aria-label="Discord">
                  <Icon icon="ri:discord-fill" className="w-7 h-7" />
                </Link>
                <Link href="https://instagram.com/whatnow.in" className="text-white hover:text-white/80 transition-colors" aria-label="Instagram">
                  <Icon icon="ri:instagram-line" className="w-7 h-7" />
                </Link>
                <Link href="https://www.youtube.com/@indiawhatnow" className="text-white hover:text-white/80 transition-colors" aria-label="YouTube">
                  <Icon icon="ri:youtube-fill" className="w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16 w-full lg:w-3/4">
            {/* Column 1 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">{t.explore}</h3>
              <ul className="space-y-4">
                <li><Link href="/careers" className="text-white/90 hover:text-white hover:underline transition-all">{t.careers}</Link></li>
                <li><Link href="/exams" className="text-white/90 hover:text-white hover:underline transition-all">{t.exams}</Link></li>
                <li><Link href="/reads" className="text-white/90 hover:text-white hover:underline transition-all">{t.editorialReads}</Link></li>
                <li><Link href="/reads" className="text-white/90 hover:text-white hover:underline transition-all">{t.featuredGuides}</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">{t.company}</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-white/90 hover:text-white hover:underline transition-all">{t.aboutUs}</Link></li>
                <li><Link href="/coming-soon" className="text-white/90 hover:text-white hover:underline transition-all">{t.contact}</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">{t.resources}</h3>
              <ul className="space-y-4">
                <li><Link href="/discord" className="text-white/90 hover:text-white hover:underline transition-all">{t.communityDiscord}</Link></li>
                <li><Link href="/coming-soon" className="text-white/90 hover:text-white hover:underline transition-all">{t.contentPolicy}</Link></li>
                <li><Link href="/coming-soon" className="text-white/90 hover:text-white hover:underline transition-all">{t.faq}</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">{t.legal}</h3>
              <ul className="space-y-4">
                <li><Link href="/coming-soon" className="text-white/90 hover:text-white hover:underline transition-all">{t.privacyPolicy}</Link></li>
                <li><Link href="/coming-soon" className="text-white/90 hover:text-white hover:underline transition-all">{t.termsOfService}</Link></li>
                <li><Link href="/coming-soon" className="text-white/90 hover:text-white hover:underline transition-all">{t.cookiePolicy}</Link></li>
                <li><Link href="/coming-soon" className="text-white/90 hover:text-white hover:underline transition-all">{t.editorialGuidelines}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant WhatNow Text */}
      <div className="w-full flex justify-center items-end overflow-hidden select-none">
        <h1 className="text-[23vw] font-black text-white/95 leading-[0.7] tracking-tighter whitespace-nowrap translate-y-2 lg:translate-y-4">
          WhatNow
        </h1>
      </div>
    </footer>
  );
}
