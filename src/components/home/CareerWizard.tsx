"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface CareerWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const translations = {
  en: {
    title: "Career Pathfinder Wizard",
    subtitle: "Find your ideal career path in 3 simple steps.",
    next: "Next Step",
    prev: "Previous",
    results: "Your Career Matches",
    matchScore: "Match",
    exploreBtn: "Read Guide",
    retake: "Retake Quiz",
    step1Title: "Step 1: Your Academic Stream",
    step1Desc: "Which stream did you choose (or plan to choose) in high school?",
    step2Title: "Step 2: Your Core Strength",
    step2Desc: "What activity feels most natural and satisfying to you?",
    step3Title: "Step 3: Your Lifestyle Preference",
    step3Desc: "What do you value most in your future education and career?",
    streams: {
      science: "Science (PCM / PCB)",
      commerce: "Commerce / Business",
      arts: "Humanities / Arts / Design",
      undecided: "Undecided / Other"
    },
    strengths: {
      design: "Creating & sketching visual designs",
      math: "Problem solving, logic, and mathematics",
      reading: "Reading, debating, and analytical writing",
      space: "Analyzing spaces, maps, and structures",
      travel: "Adventure, travel, and hands-on operations"
    },
    lifestyles: {
      india: "Studying and working primarily in India",
      travel: "Willingness to travel or work abroad",
      entrance: "Preparing for professional national entrances"
    }
  },
  hi: {
    title: "करियर पाथफाइंडर विज़ार्ड",
    subtitle: "3 आसान चरणों में अपना आदर्श करियर पथ खोजें।",
    next: "अगला चरण",
    prev: "पिछला",
    results: "आपके अनुकूल करियर विकल्प",
    matchScore: "मैच",
    exploreBtn: "गाइड पढ़ें",
    retake: "फिर से शुरू करें",
    step1Title: "चरण 1: आपका शैक्षणिक स्ट्रीम",
    step1Desc: "आपने हाई स्कूल में कौन सा स्ट्रीम चुना है (या चुनने की योजना है)?",
    step2Title: "चरण 2: आपकी मुख्य ताकत",
    step2Desc: "आपको कौन सी गतिविधि सबसे स्वाभाविक और संतोषजनक लगती है?",
    step3Title: "चरण 3: आपकी जीवनशैली प्राथमिकता",
    step3Desc: "आप अपने भविष्य के शिक्षा और करियर में सबसे अधिक किसे महत्व देते हैं?",
    streams: {
      science: "विज्ञान (PCM / PCB)",
      commerce: "वाणिज्य (Commerce)",
      arts: "कला / मानविकी / डिज़ाइन",
      undecided: "अभी तय नहीं है / अन्य"
    },
    strengths: {
      design: "विज़ुअल डिज़ाइन बनाना और रेखाचित्र बनाना",
      math: "समस्या समाधान, तर्क और गणित",
      reading: "पढ़ना, बहस करना और विश्लेषणात्मक लेखन",
      space: "स्थानों, मानचित्रों और संरचनाओं का विश्लेषण",
      travel: "साहसिक कार्य, यात्रा और व्यावहारिक संचालन"
    },
    lifestyles: {
      india: "मुख्य रूप से भारत में अध्ययन और कार्य करना",
      travel: "विदेश में काम करने या यात्रा करने की इच्छा",
      entrance: "राष्ट्रीय स्तर की प्रवेश परीक्षाओं की तैयारी करना"
    }
  }
};

const careerGuides = [
  {
    id: "design",
    nameEn: "Product & UX Design (UCEED)",
    nameHi: "प्रोडक्ट और यूएक्स डिज़ाइन (UCEED)",
    href: "/exams/uceed",
    descEn: "Perfect for creative minds blending art, technology, and human psychology.",
    descHi: "कला, प्रौद्योगिकी और मानव मनोविज्ञान के सम्मिश्रण के लिए सर्वश्रेष्ठ।",
    fromColor: "#6366F1",
    toColor: "#4F46E5",
    icon: "solar:palette-bold-duotone",
    calculateScore: (stream: string, strength: string, pref: string) => {
      let score = 40;
      if (strength === "design") score += 45;
      else if (strength === "space") score += 20;
      if (stream === "arts") score += 10;
      if (pref === "entrance") score += 5;
      return Math.min(score, 98);
    }
  },
  {
    id: "fashion",
    nameEn: "Fashion Design & Textiles (NIFT)",
    nameHi: "फैशन डिज़ाइन और टेक्सटाइल (NIFT)",
    href: "/exams/nift",
    descEn: "Great for creators interested in apparel construction, retail, and sourcing.",
    descHi: "कपड़ा निर्माण, परिधान सोर्सिंग और खुदरा व्यापार के लिए उपयुक्त।",
    fromColor: "#EC4899",
    toColor: "#BE185D",
    icon: "solar:scissors-bold-duotone",
    calculateScore: (stream: string, strength: string, pref: string) => {
      let score = 35;
      if (strength === "design") score += 45;
      if (stream === "arts") score += 15;
      if (pref === "travel") score += 10;
      if (pref === "entrance") score += 5;
      return Math.min(score, 96);
    }
  },
  {
    id: "law",
    nameEn: "Corporate & Litigation Law (CLAT)",
    nameHi: "कॉर्पोरेट और मुकदमेबाजी कानून (CLAT)",
    href: "/exams/clat",
    descEn: "Ideal for sharp analytical thinkers who love reading, writing, and logical debate.",
    descHi: "तीव्र विश्लेषणात्मक विचारकों के लिए आदर्श जो पढ़ना और वाद-विवाद पसंद करते हैं।",
    fromColor: "#10B981",
    toColor: "#047857",
    icon: "solar:document-text-bold-duotone",
    calculateScore: (stream: string, strength: string, pref: string) => {
      let score = 30;
      if (strength === "reading") score += 55;
      if (stream === "arts" || stream === "commerce") score += 10;
      if (pref === "entrance") score += 5;
      return Math.min(score, 97);
    }
  },
  {
    id: "maritime",
    nameEn: "Merchant Navy Deck Officer",
    nameHi: "मर्चेंट नेवी डेक अधिकारी",
    href: "/careers/merchant-navy",
    descEn: "Suited for adventure seekers who want to travel the globe and handle sea logistics.",
    descHi: "साहसिक लोगों के लिए उपयुक्त जो विश्व यात्रा और समुद्री रसद संभालना चाहते हैं।",
    fromColor: "#F97316",
    toColor: "#EA580C",
    icon: "solar:compass-bold-duotone",
    calculateScore: (stream: string, strength: string, pref: string) => {
      if (stream !== "science") return 0;
      let score = 20;
      if (strength === "travel") score += 55;
      else if (strength === "math") score += 15;
      if (pref === "travel") score += 20;
      return Math.min(score, 99);
    }
  },
  {
    id: "urban-planning",
    nameEn: "Urban Planning & Development",
    nameHi: "शहरी नियोजन और विकास",
    href: "/exams/jee-paper3",
    descEn: "Best for analytical minds interested in city planning, zoning, and transit systems.",
    descHi: "शहर नियोजन, ज़ोनिंग और सार्वजनिक नीति में रुचि रखने वालों के लिए सर्वोत्तम।",
    fromColor: "#0EA5E9",
    toColor: "#0369A1",
    icon: "solar:map-draw-bold-duotone",
    calculateScore: (stream: string, strength: string, pref: string) => {
      if (stream !== "science" && stream !== "commerce") return 0;
      let score = 25;
      if (strength === "space") score += 50;
      else if (strength === "design") score += 15;
      if (stream === "science") score += 10;
      if (pref === "india") score += 10;
      if (pref === "entrance") score += 5;
      return Math.min(score, 95);
    }
  }
];

export default function CareerWizard({ isOpen, onClose }: CareerWizardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const [step, setStep] = useState(1);
  const [stream, setStream] = useState("");
  const [strength, setStrength] = useState("");
  const [preference, setPreference] = useState("");

  const calculateMatches = () => {
    return careerGuides
      .map((guide) => ({
        ...guide,
        score: guide.calculateScore(stream, strength, preference)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  };

  const handleReset = () => {
    setStream("");
    setStrength("");
    setPreference("");
    setStep(1);
  };

  if (!isOpen) return null;

  const matches = step === 4 ? calculateMatches() : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 28 }}
          className="bg-white dark:bg-[#0E111E] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
          >
            <Icon icon="solar:close-circle-bold" className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
              <Icon icon="solar:magic-stick-bold-duotone" className="text-[#5563ED]" />
              {t.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              {t.subtitle}
            </p>
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-sm font-black text-[#5563ED] uppercase tracking-wider">{t.step1Title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">{t.step1Desc}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {(["science", "commerce", "arts", "undecided"] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setStream(opt)}
                      className={`w-full p-4 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                        stream === opt
                          ? "border-[#5563ED] bg-[#5563ED]/10 text-[#5563ED]"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <span>{t.streams[opt]}</span>
                      {stream === opt && <Icon icon="solar:check-circle-bold" className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-sm font-black text-[#5563ED] uppercase tracking-wider">{t.step2Title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">{t.step2Desc}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {(["design", "math", "reading", "space", "travel"] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setStrength(opt)}
                      className={`w-full p-3.5 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                        strength === opt
                          ? "border-[#5563ED] bg-[#5563ED]/10 text-[#5563ED]"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <span>{t.strengths[opt]}</span>
                      {strength === opt && <Icon icon="solar:check-circle-bold" className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-sm font-black text-[#5563ED] uppercase tracking-wider">{t.step3Title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">{t.step3Desc}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {(["india", "travel", "entrance"] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setPreference(opt)}
                      className={`w-full p-4 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                        preference === opt
                          ? "border-[#5563ED] bg-[#5563ED]/10 text-[#5563ED]"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <span>{t.lifestyles[opt]}</span>
                      {preference === opt && <Icon icon="solar:check-circle-bold" className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 max-h-[360px] overflow-y-auto pr-1"
              >
                <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                  <h3 className="text-sm font-black text-[#5563ED] uppercase tracking-wider">{t.results}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {matches.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-900/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center`} style={{ color: item.fromColor }}>
                          <Icon icon={item.icon} className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-black text-slate-900 dark:text-slate-100">
                              {language === "hi" ? item.nameHi : item.nameEn}
                            </h4>
                            <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-sm bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300 border border-emerald-100/30">
                              {item.score}% {t.matchScore}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5 max-w-[240px]">
                            {language === "hi" ? item.descHi : item.descEn}
                          </p>
                        </div>
                      </div>

                      <Link href={item.href} onClick={onClose}>
                        <button className="px-3.5 py-1.5 rounded-lg bg-[#5563ED] hover:bg-indigo-600 text-white font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer w-fit">
                          <span>{t.exploreBtn}</span>
                          <Icon icon="lucide:arrow-right" className="w-3 h-3" />
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Footer */}
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center relative z-20">
            {step > 1 && step < 4 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                {t.prev}
              </button>
            ) : step === 4 ? (
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#5563ED] hover:underline cursor-pointer"
              >
                {t.retake}
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                disabled={
                  (step === 1 && !stream) ||
                  (step === 2 && !strength) ||
                  (step === 3 && !preference)
                }
                onClick={() => setStep((s) => s + 1)}
                className="px-5 py-2.5 rounded-xl bg-[#5563ED] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-600 text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1"
              >
                <span>{t.next}</span>
                <Icon icon="lucide:arrow-right" className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Close
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
