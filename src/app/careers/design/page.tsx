"use client";

import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';

const designAnalyticsData = {
  jobs: [
    { year: 2022, openings: 15000 },
    { year: 2023, openings: 18000 },
    { year: 2024, openings: 22000 },
    { year: 2025, openings: 26000 },
    { year: 2026, openings: 32000 }
  ],
  salaries: [
    { level: "Entry", levelHi: "शुरुआती", amount: "₹50K - ₹1.2L/Month", numericAmount: 70000 },
    { level: "Mid", levelHi: "मध्यम", amount: "₹1.2L - ₹2.5L/Month", numericAmount: 180000 },
    { level: "Senior", levelHi: "वरिष्ठ", amount: "₹2.5L - ₹4L/Month", numericAmount: 320000 },
    { level: "Director", levelHi: "निदेशक", amount: "₹4L - ₹8L/Month", numericAmount: 500000 }
  ]
};
import { Icon } from '@iconify/react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    breadcrumbsHome: "Home",
    breadcrumbsCareers: "Careers",
    breadcrumbsDesign: "Design",
    title: "Design — Creative Problem Solving",
    subtitle: "More than aesthetics. We break down the roles, salaries, and entrance routes for design careers in India.",
    lastReviewed: "Last reviewed: May 2026 · Compiled by senior IIT & NID designers",
    stat1Label: "Starting Salary",
    stat1Val: "₹6L - ₹15L",
    stat2Label: "Growth Potential",
    stat2Val: "Exponential",
    stat3Label: "Stress Level",
    stat3Val: "Moderate",
    stat4Label: "Top Exams",
    stat4Val: "UCEED, NID, NIFT",
    stat5Label: "Study Duration",
    stat5Val: "4 Years",
    stat6Label: "Job Stability",
    stat6Val: "High / Tech-driven",
    sectionTitle: "What is a Career in Design?",
    descParagraph1: "Design is not about decoration; it is about solving functional human problems. Modern design careers span Digital Products (UI/UX), Physical Artifacts (Industrial Design), Systems, and Brand Communication. With the digital boom in India, tech companies pay premium salaries for designers who understand user behaviour.",
    descParagraph2: "Unlike traditional engineering and medical fields, design values skills, portfolios, and critical thinking over pure memory-based scores. However, the path is highly subjective, and competition for premier design colleges (IITs, NIDs) is extremely fierce.",
    warningTitle: "Coaching Center Lie:",
    warningText: "You do not need to be a sketch artist to succeed in design. While basic spatial drawing is tested, modern design is a cognitive process blending psychology, coding, and business logic.",
    roadmapTitle: "Design Career Guides & Roadmaps",
    card1Title: "Is It For You — Suitability Check",
    card1Desc: "A realistic test of your suitability. Day-to-day work, software tools, industry realities, and exit options if you leave design later.",
    card2Title: "Colleges & Fees — Where to study",
    card2Desc: "An honest comparison of IITs, NIDs, NIFTs, and private academies. Return on investment, tuition costs, and placement statistics.",
    card3Title: "Entrance Exams — How to break in",
    card3Desc: "Detailed guides on UCEED, NID DAT, and NIFT exams. Preparation timelines, portfolio tips, and self-study blueprints.",
    card4Title: "Salary & Career Progression",
    card4Desc: "From Associate Product Designer to Design Director. Standard salary packages, stock options, and freelance market analysis.",
    badgeShell: "✓ Shell Ready",
    badgeComingSoon: "Coming soon",
    uceedExamLinkText: "Related Exam Guide: UCEED (IIT Design)"
  },
  hi: {
    breadcrumbsHome: "होम",
    breadcrumbsCareers: "करियर",
    breadcrumbsDesign: "डिज़ाइन",
    title: "डिज़ाइन — रचनात्मक समस्या समाधान",
    subtitle: "सौंदर्यशास्त्र से कहीं अधिक। हम भारत में डिज़ाइन करियर के लिए भूमिकाओं, वेतन और प्रवेश मार्गों का विश्लेषण करते हैं।",
    lastReviewed: "अंतिम समीक्षा: मई 2026 · वरिष्ठ आईआईटी और एनआईडी डिजाइनरों द्वारा संकलित",
    stat1Label: "शुरुआती वेतन",
    stat1Val: "₹6L - ₹15L",
    stat2Label: "विकास क्षमता",
    stat2Val: "तेजी से बढ़ने वाला",
    stat3Label: "तनाव का स्तर",
    stat3Val: "मध्यम",
    stat4Label: "शीर्ष परीक्षाएं",
    stat4Val: "UCEED, NID, NIFT",
    stat5Label: "अध्ययन की अवधि",
    stat5Val: "4 वर्ष",
    stat6Label: "नौकरी की स्थिरता",
    stat6Val: "उच्च / तकनीक-आधारित",
    sectionTitle: "डिज़ाइन में करियर क्या है?",
    descParagraph1: "डिज़ाइन सजावट के बारे में नहीं है; यह कार्यात्मक मानवीय समस्याओं को हल करने के बारे में है। आधुनिक डिज़ाइन करियर डिजिटल उत्पादों (UI/UX), भौतिक वस्तुओं (औद्योगिक डिज़ाइन), प्रणालियों और ब्रांड संचार में फैले हुए हैं। भारत में डिजिटल उछाल के साथ, तकनीकी कंपनियां उपयोगकर्ता के व्यवहार को समझने वाले डिजाइनरों को प्रीमियम वेतन देती हैं।",
    descParagraph2: "पारंपरिक इंजीनियरिंग और चिकित्सा क्षेत्रों के विपरीत, डिज़ाइन शुद्ध स्मृति-आधारित अंकों के बजाय कौशल, पोर्टफोलियो और महत्वपूर्ण सोच को महत्व देता है। हालांकि, यह मार्ग अत्यधिक व्यक्तिपरक है, और प्रमुख डिज़ाइन कॉलेजों (आईआईटी, एनआईडी) के लिए प्रतिस्पर्धा बेहद कठिन है।",
    warningTitle: "कोचिंग सेंटर का झूठ:",
    warningText: "डिज़ाइन में सफल होने के लिए आपको स्केच आर्टिस्ट होने की आवश्यकता नहीं है। हालांकि बुनियादी स्थानिक ड्राइंग का परीक्षण किया जाता है, लेकिन आधुनिक डिज़ाइन एक संज्ञानात्मक प्रक्रिया है जो मनोविज्ञान, कोडिंग और व्यावसायिक तर्क को मिलाती है।",
    roadmapTitle: "डिज़ाइन करियर गाइड और रोडमैप",
    card1Title: "क्या यह आपके लिए है — उपयुक्तता जांच",
    card1Desc: "आपकी उपयुक्तता का एक वास्तविक परीक्षण। दैनिक कार्य, सॉफ्टवेयर उपकरण, उद्योग की वास्तविकताएं, और यदि आप बाद में डिज़ाइन छोड़ते हैं तो बाहर निकलने के विकल्प।",
    card2Title: "कॉलेज और फीस — कहाँ पढ़ें",
    card2Desc: "आईआईटी, एनआईडी, एनआईएफटी और निजी अकादमियों की एक ईमानदार तुलना। निवेश पर रिटर्न, शिक्षण शुल्क और प्लेसमेंट के आंकड़े।",
    card3Title: "प्रवेश परीक्षाएं — कैसे प्रवेश करें",
    card3Desc: "UCEED, NID DAT और NIFT परीक्षाओं पर विस्तृत गाइड। तैयारी की समयसीमा, पोर्टफोलियो टिप्स और स्व-अध्ययन रोडमैप।",
    card4Title: "वेतन और करियर प्रगति",
    card4Desc: "एसोसिएट प्रोडक्ट डिज़ाइनर से लेकर डिज़ाइन डायरेक्टर तक। मानक वेतन पैकेज, स्टॉक विकल्प और फ्रीलांस मार्केट का विश्लेषण।",
    badgeShell: "✓ शेल तैयार है",
    badgeComingSoon: "जल्द आ रहा है",
    uceedExamLinkText: "संबद्ध परीक्षा गाइड: UCEED (IIT डिज़ाइन)"
  }
};

export default function DesignCareerHubPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0B0F1A] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="design-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#design-hub-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />
          <Icon 
            icon="solar:palette-bold-duotone" 
            className="absolute -right-16 -bottom-16 w-80 h-80 text-[#5563ED] opacity-[0.12] -rotate-12 pointer-events-none select-none"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{t.breadcrumbsHome}</Link>
            <span>›</span>
            <Link href="/careers" className="hover:text-primary transition-colors">{t.breadcrumbsCareers}</Link>
            <span>›</span>
            <span className="text-primary">{t.breadcrumbsDesign}</span>
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
            <span className="text-2xl md:text-3xl font-black text-primary">{t.stat2Val}</span>
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
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Icon icon="solar:document-bold-duotone" className="w-8 h-8 text-primary" />
            <span className="font-bold text-neutral-dark text-sm md:text-base">{t.uceedExamLinkText}</span>
          </div>
          <Link href="/exams/uceed" className="bg-primary hover:bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            Read Exam Guide
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="career" data={designAnalyticsData} colorTheme="indigo" />

        {/* WHAT IS DESIGN */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.sectionTitle}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>{t.descParagraph1}</p>
            <p>{t.descParagraph2}</p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-accent">{t.warningTitle} </strong>
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
                <span className="inline-block bg-orange-50/50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card2Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card2Desc}</p>
                <span className="inline-block bg-orange-50/50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card3Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card3Desc}</p>
                <span className="inline-block bg-orange-50/50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card4Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card4Desc}</p>
                <span className="inline-block bg-orange-50/50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
