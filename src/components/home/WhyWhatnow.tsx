"use client";

import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    sectionTitle: "Why WhatNow",
    headlineMain: "Built like a senior,",
    headlineSub: "not like a brand.",
    description: "We made the thing we needed when we were 17 and confused. Three things make us different — and we're stubborn about all of them.",
    card1Title: "Actually free",
    card1Desc: "No paywall, no email gate, no upsell. Every guide stays free because the next student behind you deserves the same head start.",
    card1Desc2: "There's no ‘premium’ version with the good parts locked away, no account to create, and nothing to cancel later. What you see is the whole thing — and it stays that way.",
    card2Title: "No coaching agenda",
    card2Desc: "We don't sell courses or get kickbacks. We're not pushing IIT or IIM. Just honest reads on what each path actually demands.",
    card3Title: "Careers nobody covers",
    card3Desc: "Urban planner, animator, agronomist, naval architect. The careers your career counselor forgot — written by people doing them.",
  },
  hi: {
    sectionTitle: "व्हाटनाव क्यों?",
    headlineMain: "एक सीनियर की तरह,",
    headlineSub: "किसी ब्रांड की तरह नहीं।",
    description: "हमने वह चीज़ बनाई जिसकी ज़रूरत हमें 17 साल की उम्र में थी जब हम असमंजस में थे। तीन बातें हमें अलग बनाती हैं - और हम उन सभी को लेकर अडिग हैं।",
    card1Title: "वास्तव में मुफ़्त",
    card1Desc: "कोई पेवॉल नहीं, कोई ईमेल गेट नहीं, कोई अपसेल नहीं। हर गाइड मुफ़्त रहती है क्योंकि आपके बाद आने वाले छात्र भी एक समान शुरुआत के हकदार हैं।",
    card1Desc2: "कोई ‘प्रीमियम’ वर्शन नहीं जिसमें काम की चीज़ें छिपी हों, कोई अकाउंट नहीं बनाना, और बाद में कुछ कैंसिल नहीं करना। जो दिख रहा है, वही पूरा है — और वैसा ही रहेगा।",
    card2Title: "कोई कोचिंग एजेंडा नहीं",
    card2Desc: "हम कोई कोर्स नहीं बेचते या कमीशन नहीं लेते। हम IIT या IIM में जाने का कोई दबाव नहीं डाल रहे। बस प्रत्येक मार्ग की वास्तविक आवश्यकताओं के बारे में ईमानदार विश्लेषण देते हैं।",
    card3Title: "ऐसे करियर जिन्हें कोई नहीं बताता",
    card3Desc: "अर्बन प्लानर, एनिमेटर, एग्रोनोमिस्ट, नेवल आर्किटेक्ट। वे करियर जिन्हें आपके करियर काउंसलर भूल गए — उन्हें उन लोगों द्वारा लिखा गया है जो वास्तव में ये काम कर रहे हैं।",
  }
};

export default function WhyWhatnow() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-slate-50 dark:bg-[#0B111C] overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-20">
          <div className="flex-1">
            <h3 className="text-secondary text-xs font-extrabold tracking-[0.2em] uppercase mb-5">
              {t.sectionTitle}
            </h3>
            <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-black text-neutral-dark tracking-tight leading-[1.1]">
              {t.headlineMain}<br />
              <span className="text-slate-400">{t.headlineSub}</span>
            </h2>
          </div>
          <div className="flex-1 lg:pt-10">
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t.description}
            </p>
          </div>
        </div>

        {/* Asymmetric bento: the lead value gets a big tile; 02 + 03 stack smaller. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-stretch">
          {/* Card 1 — lead tile */}
          <div className="relative bg-white dark:bg-slate-800/50 dark:hover:from-slate-800 dark:hover:to-slate-800 hover:bg-gradient-to-b hover:from-white hover:to-green-50/10 rounded-[2.5rem] p-10 lg:p-14 border border-slate-200/85 dark:border-slate-700/70 hover:border-green-500/30 dark:hover:border-green-500/40 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(34,197,94,0.07)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden group cursor-default flex flex-col justify-center min-h-[20rem]">
            <div className="absolute -top-12 -right-12 opacity-[0.03] rotate-12 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[24deg] select-none pointer-events-none">
              <Icon icon="solar:lock-unlocked-bold-duotone" className="w-80 h-80 text-green-600" />
            </div>
            <div className="h-20 w-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Icon icon="solar:lock-unlocked-bold-duotone" className="w-10 h-10" />
            </div>
            <div className="flex items-end gap-4 mb-6 relative z-10">
              <span className="text-green-600 font-black text-4xl lg:text-5xl tracking-tighter transition-all duration-300 group-hover:scale-105 origin-left">01</span>
              <h4 className="text-3xl lg:text-4xl font-black text-neutral-dark tracking-tight leading-none pb-0.5">{t.card1Title}</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 text-lg lg:text-xl max-w-md">
              {t.card1Desc}
            </p>
            <p className="text-slate-500 dark:text-slate-400/90 leading-relaxed relative z-10 text-base lg:text-lg max-w-md mt-5">
              {t.card1Desc2}
            </p>
          </div>

          {/* Cards 02 + 03 — stacked, secondary */}
          <div className="flex flex-col gap-8">
            {/* Card 2 */}
            <div className="relative flex-1 bg-white dark:bg-slate-800/50 dark:hover:from-slate-800 dark:hover:to-slate-800 hover:bg-gradient-to-b hover:from-white hover:to-orange-50/10 rounded-[2.5rem] p-8 lg:p-10 border border-slate-200/85 dark:border-slate-700/70 hover:border-orange-500/30 dark:hover:border-orange-500/40 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(249,115,22,0.07)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden group cursor-default">
              <div className="absolute -top-8 -right-8 opacity-[0.03] rotate-12 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[24deg] select-none pointer-events-none">
                <Icon icon="solar:shield-check-bold-duotone" className="w-52 h-52 text-orange-500" />
              </div>
              <div className="h-14 w-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-7 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Icon icon="solar:shield-check-bold-duotone" className="w-7 h-7" />
              </div>
              <div className="flex items-end gap-3 mb-4 relative z-10">
                <span className="text-orange-500 font-black text-2xl tracking-tighter transition-all duration-300 group-hover:scale-105 origin-left">02</span>
                <h4 className="text-xl lg:text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5">{t.card2Title}</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 text-base">
                {t.card2Desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative flex-1 bg-white dark:bg-slate-800/50 dark:hover:from-slate-800 dark:hover:to-slate-800 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/10 rounded-[2.5rem] p-8 lg:p-10 border border-slate-200/85 dark:border-slate-700/70 hover:border-blue-500/30 dark:hover:border-blue-500/40 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.07)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden group cursor-default">
              <div className="absolute -top-8 -right-8 opacity-[0.03] rotate-12 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[24deg] select-none pointer-events-none">
                <Icon icon="solar:compass-bold-duotone" className="w-52 h-52 text-blue-600" />
              </div>
              <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-7 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Icon icon="solar:compass-bold-duotone" className="w-7 h-7" />
              </div>
              <div className="flex items-end gap-3 mb-4 relative z-10">
                <span className="text-blue-600 font-black text-2xl tracking-tighter transition-all duration-300 group-hover:scale-105 origin-left">03</span>
                <h4 className="text-xl lg:text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5">{t.card3Title}</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 text-base">
                {t.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
