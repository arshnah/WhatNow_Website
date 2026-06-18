"use client";

import Marquee from "./Marquee";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title1: "You have options.",
    title2: "We help you find",
    title3: "the ",
    title4: "right one.",
    subtitle: "Unbiased guides, real stories, and clear roadmaps for every stage of your journey.",
    explore: "Explore Careers",
    browse: "About WhatNow",
    alt: "Student making career choices",
  },
  hi: {
    title1: "आपके पास विकल्प हैं।",
    title2: "हम सही विकल्प खोजने",
    title3: "में आपकी ",
    title4: "मदद करते हैं।",
    subtitle: "आपकी यात्रा के हर चरण के लिए निष्पक्ष मार्गदर्शिकाएँ, सच्ची कहानियाँ और स्पष्ट रोडमैप।",
    explore: "करियर खोजें",
    browse: "व्हाटनाव के बारे में",
    alt: "करियर का चुनाव करता छात्र",
  }
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (<main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center pt-8 pb-12 lg:pt-12 lg:pb-0">

                {/* Left Content */}
                <div className="flex flex-col items-start order-1 lg:order-1">

                    <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4rem] font-extrabold text-[#111827] dark:text-slate-50 mb-6 tracking-tight">
                        {t.title1}<br />
                        {t.title2}<br />
                        {t.title3}
                        <span className="relative inline-block whitespace-nowrap">
                            <span className="text-secondary">{t.title4}</span>
                            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-secondary pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M 2 4 Q 50 8 98 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                                <path d="M 6 6 Q 50 9 94 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-gray-600 dark:text-slate-400 text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-row flex-wrap items-center gap-4">
                        <Link href="/careers">
                            <Button
                                variant="primary"
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                }
                            >
                                {t.explore}
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline">
                                {t.browse}
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="order-2 lg:order-2 w-full flex justify-center relative">
                    <div className="relative w-full max-w-[550px] lg:max-w-[750px] aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                        {/* Light-mode hero (default, LCP-priority) */}
                        <Image
                            src="/hero.png"
                            alt={t.alt}
                            fill
                            priority
                            className="object-contain object-center lg:object-right block dark:hidden"
                        />
                        {/* Dark-mode hero. Only loads when dark mode is active (display:none until then). */}
                        <Image
                            src="/hero_dark.webp"
                            alt={t.alt}
                            fill
                            className="object-contain object-center lg:object-right hidden dark:block"
                        />
                    </div>
                </div>

            </div>
        </div>

        {/* Marquee Section */}
        <div className="w-full mb-16 lg:mb-24">
            <Marquee />
        </div>
    </main>)
}