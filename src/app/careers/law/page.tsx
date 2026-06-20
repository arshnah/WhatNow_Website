"use client";

import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';

const lawAnalyticsData = {
  jobs: [
    { year: 2022, openings: 20000 },
    { year: 2023, openings: 22000 },
    { year: 2024, openings: 25000 },
    { year: 2025, openings: 28000 },
    { year: 2026, openings: 32000 }
  ],
  salaries: [
    { level: "Entry", levelHi: "शुरुआती", amount: "₹40K - ₹1.5L/Month", numericAmount: 70000 },
    { level: "Mid", levelHi: "मध्यम", amount: "₹1.5L - ₹3L/Month", numericAmount: 180000 },
    { level: "Senior Partner", levelHi: "वरिष्ठ भागीदार", amount: "₹3L - ₹6L/Month", numericAmount: 350000 },
    { level: "Managing Partner", levelHi: "प्रबंध भागीदार", amount: "₹6L - ₹15L/Month", numericAmount: 850000 }
  ]
};
import { Icon } from '@iconify/react';
import { useLanguage } from '@/context/LanguageContext';
import JsonLd from "@/components/JsonLd";
import { guideJsonLd } from "@/lib/seo";

const translations = {
  en: {
    breadcrumbsHome: "Home",
    breadcrumbsCareers: "Careers",
    breadcrumbsLaw: "Law",
    title: "Law — Advocacy, Corporate & Litigation",
    subtitle: "High-paying corporate desks vs grinding in local courts. We break down National Law School ROI, work realities, and integrated LLB routes.",
    lastReviewed: "Last reviewed: May 2026 · Compiled by NLU graduates & practicing High Court Advocates",
    stat1Label: "Starting Salary",
    stat1Val: "₹5L - ₹18L/yr",
    stat2Label: "Work Hours",
    stat2Val: "50-70 hrs/wk",
    stat3Label: "Study Duration",
    stat3Val: "5 Years (Integrated)",
    stat4Label: "Top Exams",
    stat4Val: "CLAT, AILET",
    stat5Label: "Job Stability",
    stat5Val: "High",
    stat6Label: "Core Paths",
    stat6Val: "Corporate / Litigation",
    sectionTitle: "What is a Career in Law?",
    descParagraph1: "Law in India is primarily entered after Class 12 via 5-year integrated programs like BA LLB, BBA LLB, or B.Com LLB. The legal field has evolved from traditional courtroom practice to highly lucrative corporate advisory. Corporate lawyers manage mergers and acquisitions, contract drafting, and regulatory compliance for MNCs and top-tier law firms.",
    descParagraph2: "Litigation (courtroom practice) is the traditional path. While corporate law offers immediate financial stability (starting ₹12L-₹18L/yr at tier-1 firms like Amarchand or Khaitan), litigation takes years of low-paid grinding under senior advocates before establishing a private practice. However, successful litigators enjoy unmatched prestige, independence, and earning potential in the long run.",
    descParagraph3: "The third major path is the Judicial Services (judgeship). Graduates can clear state-level judicial services examinations to join as Civil Judges/Judicial Magistrates. This path offers immense authority, job security, and government benefits, making it highly competitive.",
    warningTitle: "The NLU vs Non-NLU Divide:",
    warningText: "Over 90% of tier-1 corporate recruitment happens exclusively from the top 5-7 National Law Universities (NLUs) via campus placements. If you study at a low-tier private law college or local state university, breaking into top corporate law firms is extremely difficult and requires exceptional networking, moot court performance, and internships. Choose your college wisely.",
    roadmapTitle: "Law Career Guides & Roadmaps",
    card1Title: "Corporate Law vs Litigation — The Lifestyle Choice",
    card1Desc: "An honest comparison of working hours, salary trajectories, work environment, and stress levels between firm office desks and courtrooms.",
    card2Title: "NLU Ranking & ROI — Where to study",
    card2Desc: "Comprehensive review of NLSIU Bangalore, NALSAR Hyderabad, NUJS Kolkata, and lower-tier NLUs versus private universities (Jindal, Symbiosis).",
    card3Title: "The Internship Blueprint — How to secure PPOs",
    card3Desc: "Step-by-step roadmap to building your CV, securing internships at tier-1 firms, and converting them into Pre-Placement Offers (PPOs).",
    card4Title: "Judicial Services Exams — Preparation Guide",
    card4Desc: "Syllabus, eligibility criteria, and timeline for state-level Judicial Services examinations for direct entry into civil judgeship.",
    badgeComingSoon: "Coming soon",
    examLinkText: "Related Exam Guide: CLAT (Common Law Admission Test)"
  },
  hi: {
    breadcrumbsHome: "होम",
    breadcrumbsCareers: "करियर",
    breadcrumbsLaw: "कानून",
    title: "कानून — वकालत, कॉर्पोरेट और मुकदमेबाजी",
    subtitle: "उच्च भुगतान वाले कॉर्पोरेट डेस्क बनाम स्थानीय अदालतों में कठिन संघर्ष। हम राष्ट्रीय लॉ स्कूल के निवेश पर रिटर्न (ROI), काम की वास्तविकताओं और एकीकृत एलएलबी मार्गों का विवरण देते हैं।",
    lastReviewed: "अंतिम समीक्षा: मई 2026 · एनएलयू स्नातकों और अभ्यास कर रहे उच्च न्यायालय के अधिवक्ताओं द्वारा संकलित",
    stat1Label: "शुरुआती वेतन",
    stat1Val: "₹5L - ₹18L/वर्ष",
    stat2Label: "काम के घंटे",
    stat2Val: "50-70 घंटे/सप्ताह",
    stat3Label: "अध्ययन की अवधि",
    stat3Val: "5 वर्ष (एकीकृत)",
    stat4Label: "शीर्ष परीक्षाएं",
    stat4Val: "CLAT, AILET",
    stat5Label: "नौकरी की स्थिरता",
    stat5Val: "उच्च",
    stat6Label: "मुख्य रास्ते",
    stat6Val: "कॉर्पोरेट / मुकदमेबाजी",
    sectionTitle: "कानून में करियर क्या है?",
    descParagraph1: "भारत में कानून में प्रवेश मुख्य रूप से कक्षा 12 के बाद 5-वर्षीय एकीकृत कार्यक्रमों जैसे BA LLB, BBA LLB, या B.Com LLB के माध्यम से होता है। कानूनी क्षेत्र पारंपरिक अदालती अभ्यास से बदलकर अत्यधिक आकर्षक कॉर्पोरेट परामर्श में विकसित हो गया है। कॉर्पोरेट वकील बहुराष्ट्रीय कंपनियों और शीर्ष-स्तरीय कानूनी फर्मों के लिए विलय और अधिग्रहण, अनुबंध प्रारूपण और नियामक अनुपालन का प्रबंधन करते हैं।",
    descParagraph2: "मुकदमेबाजी (अदालती अभ्यास) पारंपरिक मार्ग है। जहां कॉर्पोरेट कानून तत्काल वित्तीय स्थिरता (अमरचंद या खेतान जैसी टियर-1 फर्मों में ₹12L-₹18L/वर्ष से शुरू) प्रदान करता है, वहीं मुकदमेबाजी में निजी अभ्यास स्थापित करने से पहले वरिष्ठ अधिवक्ताओं के तहत कम भुगतान वाले कठिन संघर्ष में वर्षों लगते हैं। हालांकि, सफल मुकदमेबाज लंबे समय में बेजोड़ प्रतिष्ठा, स्वतंत्रता और कमाई की क्षमता का आनंद लेते हैं।",
    descParagraph3: "तीसरा प्रमुख मार्ग न्यायिक सेवाएं (न्यायाधीश पद) है। स्नातक सिविल जज/न्यायिक मजिस्ट्रेट के रूप में शामिल होने के लिए राज्य स्तरीय न्यायिक सेवा परीक्षाओं को उत्तीर्ण कर सकते हैं। यह मार्ग अत्यधिक अधिकार, नौकरी की सुरक्षा और सरकारी लाभ प्रदान करता है, जिससे यह अत्यधिक प्रतिस्पर्धी बन जाता है।",
    warningTitle: "NLU बनाम गैर-NLU विभाजन:",
    warningText: "टियर-1 कॉर्पोरेट भर्ती का 90% से अधिक हिस्सा विशेष रूप से कैंपस प्लेसमेंट के माध्यम से शीर्ष 5-7 नेशनल लॉ यूनिवर्सिटीज (NLUs) से होता है। यदि आप निम्न-स्तरीय निजी लॉ कॉलेज या स्थानीय राज्य विश्वविद्यालय में पढ़ते हैं, तो शीर्ष कॉर्पोरेट लॉ फर्मों में प्रवेश करना बेहद मुश्किल होता है और इसके लिए असाधारण नेटवर्किंग, मूट कोर्ट प्रदर्शन और इंटर्नशिप की आवश्यकता होती है। अपना कॉलेज बुद्धिमानी से चुनें।",
    roadmapTitle: "कानून करियर गाइड और रोडमैप",
    card1Title: "कॉर्पोरेट कानून बनाम मुकदमेबाजी — जीवन शैली का विकल्प",
    card1Desc: "लॉ फर्म के कार्यालयों और अदालत परिसरों के बीच काम के घंटे, वेतन वृद्धि, काम के माहौल और तनाव के स्तर की एक ईमानदार तुलना।",
    card2Title: "NLU रैंकिंग और ROI — कहाँ पढ़ें",
    card2Desc: "एनएलएसआइयू बैंगलोर, नालसार हैदराबाद, एनयूजेएस कोलकाता और निम्न-स्तरीय एनएलयू बनाम निजी विश्वविद्यालयों (जिंडल, सिम्बायोसिस) की व्यापक समीक्षा।",
    card3Title: "इंटर्नशिप ब्लूप्रिंट — PPOs कैसे सुरक्षित करें",
    card3Desc: "अपना सीवी बनाने, टियर-1 फर्मों में इंटर्नशिप सुरक्षित करने और उन्हें प्री-प्लेसमेंट ऑफर (PPO) में बदलने का चरण-दर-चरण रोडमैप।",
    card4Title: "न्यायिक सेवा परीक्षा — तैयारी गाइड",
    card4Desc: "सिविल न्यायाधीश पद में सीधे प्रवेश के लिए राज्य स्तरीय न्यायिक सेवा परीक्षाओं के लिए पाठ्यक्रम, पात्रता मानदंड और समय-सीमा।",
    badgeComingSoon: "जल्द आ रहा है",
    examLinkText: "संबद्ध परीक्षा गाइड: CLAT (कॉमन लॉ एडमिशन टेस्ट)"
  }
};

export default function LawCareerHubPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      <JsonLd
        data={guideJsonLd({
          title: "Law — Advocacy, Corporate & Litigation",
          description: "High-paying corporate desks vs litigation grinding, National Law School ROI, and integrated LLB routes.",
          path: "/careers/law",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: "Law", path: "/careers/law" },
          ],
        })}
      />
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="law-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#law-hub-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />
          <Icon 
            icon="solar:scale-bold-duotone" 
            className="absolute -right-16 -bottom-16 w-80 h-80 text-[#10b981] opacity-[0.12] -rotate-12 pointer-events-none select-none"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{t.breadcrumbsHome}</Link>
            <span>›</span>
            <Link href="/careers" className="hover:text-primary transition-colors">{t.breadcrumbsCareers}</Link>
            <span>›</span>
            <span className="text-emerald-600">{t.breadcrumbsLaw}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            {t.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            {t.lastReviewed}
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20 mt-12">
        {/* STAT BAR */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.stat1Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat1Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.stat2Label}</span>
            <span className="text-2xl md:text-3xl font-black text-emerald-600">{t.stat2Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.stat3Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat3Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.stat4Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat4Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.stat5Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat5Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">{t.stat6Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat6Val}</span>
          </div>
        </div>

        {/* RELATED EXAM LINK */}
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Icon icon="solar:document-bold-duotone" className="w-8 h-8 text-emerald-600" />
            <span className="font-bold text-neutral-dark text-sm md:text-base">{t.examLinkText}</span>
          </div>
          <Link href="/exams/clat" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            Read Exam Guide
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="career" data={lawAnalyticsData} colorTheme="emerald" />

        {/* WHAT IS LAW */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.sectionTitle}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>{t.descParagraph1}</p>
            <p>{t.descParagraph2}</p>
            <p>{t.descParagraph3}</p>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-emerald-700 dark:text-emerald-300">{t.warningTitle} </strong>
              {t.warningText}
            </p>
          </div>
        </section>

        {/* CAREER GUIDES */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.roadmapTitle}
          </h2>

          <div className="space-y-4">
            {/* Card 1 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card1Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card1Desc}</p>
                <span className="inline-block bg-emerald-550/10 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card2Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card2Desc}</p>
                <span className="inline-block bg-emerald-550/10 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card3Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card3Desc}</p>
                <span className="inline-block bg-emerald-550/10 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card4Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card4Desc}</p>
                <span className="inline-block bg-emerald-550/10 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
