"use client";

import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';

const fashionAnalyticsData = {
  jobs: [
    { year: 2022, openings: 28000 },
    { year: 2023, openings: 30000 },
    { year: 2024, openings: 32000 },
    { year: 2025, openings: 33000 },
    { year: 2026, openings: 35000 }
  ],
  salaries: [
    { level: "Entry", levelHi: "शुरुआती", amount: "₹30K - ₹60K/Month", numericAmount: 42000 },
    { level: "Mid", levelHi: "मध्यम", amount: "₹60K - ₹1.2L/Month", numericAmount: 85000 },
    { level: "Senior", levelHi: "वरिष्ठ", amount: "₹1.2L - ₹2.5L/Month", numericAmount: 180000 },
    { level: "Director", levelHi: "निदेशक", amount: "₹2.5L - ₹5L/Month", numericAmount: 350000 }
  ]
};
import { Icon } from '@iconify/react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    breadcrumbsHome: "Home",
    breadcrumbsCareers: "Careers",
    breadcrumbsFashionDesign: "Fashion Design",
    title: "Fashion Design — Beyond the Runway",
    subtitle: "Merchandising, textiles, and apparel technology. We outline starting packages, work realities, and entrance options in India.",
    lastReviewed: "Last reviewed: May 2026 · Compiled by senior NIFT graduates & industry designers",
    stat1Label: "Starting Salary",
    stat1Val: "₹4L - ₹10L",
    stat2Label: "Growth Potential",
    stat2Val: "High",
    stat3Label: "Stress Level",
    stat3Val: "High / Fast-paced",
    stat4Label: "Top Exams",
    stat4Val: "NIFT Entrance",
    stat5Label: "Study Duration",
    stat5Val: "4 Years",
    stat6Label: "Job Stability",
    stat6Val: "Moderate",
    sectionTitle: "What is a Career in Fashion Design?",
    descParagraph1: "Fashion design is a massive commercial industry. Far from the glamour of fashion weeks, 95% of designers work in industrial garment construction, fabric sourcing, apparel technology, and retail merchandising. Designers collaborate with production units, develop technical spec sheets, and manage supply chains for brands.",
    descParagraph2: "India has a major global footprint in apparel manufacturing, creating a steady demand for designers who understand production, cost control, and mass consumer tastes. However, entry-level salaries in manufacturing hubs (Bengaluru, Tirupur, NCR) are modest, and work hours during production seasons are notoriously long.",
    warningTitle: "Industry Reality:",
    warningText: "Celebrity styling represents less than 1% of the fashion jobs in India. The actual volume of jobs is in manufacturing hubs, export houses, and retail brand management.",
    roadmapTitle: "Fashion Design Career Guides & Roadmaps",
    card1Title: "Is It For You — Suitability Check",
    card1Desc: "Day-to-day work, software tools like CLO 3D/Illustrator, and the physical stamina required for pattern making and fabric sorting.",
    card2Title: "Colleges & Fees — Where to study",
    card2Desc: "Return on investment at NIFT campuses versus private design colleges (Pearl, Symbiosis, etc.) and global options.",
    card3Title: "Entrance Exams — NIFT & others",
    card3Desc: "Detailed syllabus for Creative Ability Test (CAT) and General Ability Test (GAT), drawing tips, and self-study blueprints.",
    card4Title: "Salary & Career Progression",
    card4Desc: "From Assistant Merchandiser or Junior Designer to Buying Manager or Creative Director. Industry pay scales.",
    badgeShell: "✓ Shell Ready",
    badgeComingSoon: "Coming soon",
    niftExamLinkText: "Related Exam Guide: NIFT Entrance Exam"
  },
  hi: {
    breadcrumbsHome: "होम",
    breadcrumbsCareers: "करियर",
    breadcrumbsFashionDesign: "फैशन डिज़ाइन",
    title: "फैशन डिज़ाइन — रनवे से परे",
    subtitle: "मर्चेंडाइजिंग, टेक्सटाइल और परिधान तकनीक। हम भारत में शुरुआती पैकेज, काम की वास्तविकताओं और प्रवेश विकल्पों का विवरण देते हैं।",
    lastReviewed: "अंतिम समीक्षा: मई 2026 · वरिष्ठ एनआईएफटी स्नातकों और उद्योग डिजाइनरों द्वारा संकलित",
    stat1Label: "शुरुआती वेतन",
    stat1Val: "₹4L - ₹10L",
    stat2Label: "विकास क्षमता",
    stat2Val: "उच्च",
    stat3Label: "तनाव का स्तर",
    stat3Val: "उच्च / तेज गति",
    stat4Label: "शीर्ष परीक्षाएं",
    stat4Val: "NIFT प्रवेश परीक्षा",
    stat5Label: "अध्ययन की अवधि",
    stat5Val: "4 वर्ष",
    stat6Label: "नौकरी की स्थिरता",
    stat6Val: "मध्यम",
    sectionTitle: "फैशन डिज़ाइन में करियर क्या है?",
    descParagraph1: "फैशन डिज़ाइन एक बड़ा व्यावसायिक उद्योग है। फैशन वीक के ग्लैमर से इतर, 95% डिजाइनर औद्योगिक परिधान निर्माण, कपड़ा सोर्सिंग, परिधान प्रौद्योगिकी और खुदरा मर्चेंडाइजिंग में काम करते हैं। डिजाइनर उत्पादन इकाइयों के साथ सहयोग करते हैं, तकनीकी विनिर्देश शीट विकसित करते हैं, और ब्रांडों के लिए आपूर्ति श्रृंखला का प्रबंधन करते हैं।",
    descParagraph2: "भारत की परिधान निर्माण में एक बड़ी वैश्विक उपस्थिति है, जो उत्पादन, लागत नियंत्रण और जन उपभोक्ता स्वादों को समझने वाले डिजाइनरों के लिए एक स्थिर मांग पैदा करती है। हालांकि, विनिर्माण केंद्रों (बेंगलुरु, तिरुपुर, एनसीआर) में प्रवेश स्तर का वेतन मामूली है, और उत्पादन सीजन के दौरान काम के घंटे कुख्यात रूप से लंबे होते हैं।",
    warningTitle: "उद्योग की वास्तविकता:",
    warningText: "सेलिब्रिटी स्टाइलिंग भारत में केवल 1% से भी कम फैशन नौकरियों का प्रतिनिधित्व करती है। वास्तविक नौकरियां विनिर्माण केंद्रों, निर्यात गृहों और खुदरा ब्रांड प्रबंधन में हैं।",
    roadmapTitle: "फैशन डिज़ाइन करियर गाइड और रोडमैप",
    card1Title: "क्या यह आपके लिए है — उपयुक्तता जांच",
    card1Desc: "दैनिक कार्य, CLO 3D/इलस्ट्रेटर जैसे सॉफ्टवेयर उपकरण, और पैटर्न बनाने और कपड़ा छंटाई के लिए आवश्यक शारीरिक सहनशक्ति।",
    card2Title: "कॉलेज और फीस — कहाँ पढ़ें",
    card2Desc: "एनआईएफटी परिसरों बनाम निजी डिज़ाइन कॉलेजों (पर्ल, सिम्बायोसिस, आदि) और वैश्विक विकल्पों पर निवेश पर रिटर्न।",
    card3Title: "प्रवेश परीक्षाएं — NIFT और अन्य",
    card3Desc: "क्रिएटिव एबिलिटी टेस्ट (CAT) और जनरल एबिलिटी टेस्ट (GAT) के लिए विस्तृत पाठ्यक्रम, ड्राइंग टिप्स और स्व-अध्ययन रोडमैप।",
    card4Title: "वेतन और करियर प्रगति",
    card4Desc: "असिस्टेंट मर्चेंटाइज़र या जूनियर डिज़ाइनर से लेकर बाइंग मैनेजर या क्रिएटिव डायरेक्टर तक। उद्योग वेतनमान।",
    badgeShell: "✓ शेल तैयार है",
    badgeComingSoon: "जल्द आ रहा है",
    niftExamLinkText: "संबद्ध परीक्षा गाइड: NIFT प्रवेश परीक्षा"
  }
};

export default function FashionDesignCareerHubPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fashion-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fashion-hub-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />
          <Icon 
            icon="solar:t-shirt-bold-duotone" 
            className="absolute -right-16 -bottom-16 w-80 h-80 text-[#5563ED] opacity-[0.12] -rotate-12 pointer-events-none select-none"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{t.breadcrumbsHome}</Link>
            <span>›</span>
            <Link href="/careers" className="hover:text-primary transition-colors">{t.breadcrumbsCareers}</Link>
            <span>›</span>
            <span className="text-primary">{t.breadcrumbsFashionDesign}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            {t.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>

          <div className="text-sm font-bold text-slate-400">
            {t.lastReviewed}
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20 mt-12">
        {/* STAT BAR */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.stat1Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat1Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.stat2Label}</span>
            <span className="text-2xl md:text-3xl font-black text-primary">{t.stat2Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.stat3Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat3Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.stat4Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat4Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.stat5Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat5Val}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{t.stat6Label}</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">{t.stat6Val}</span>
          </div>
        </div>

        {/* RELATED EXAM LINK */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Icon icon="solar:document-bold-duotone" className="w-8 h-8 text-primary" />
            <span className="font-bold text-neutral-dark text-sm md:text-base">{t.niftExamLinkText}</span>
          </div>
          <Link href="/exams/nift" className="bg-primary hover:bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            Read Exam Guide
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="career" data={fashionAnalyticsData} colorTheme="pink" />

        {/* WHAT IS FASHION DESIGN */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b-2 border-slate-200 pb-4 mb-8">
            {t.sectionTitle}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium mb-12">
            <p>{t.descParagraph1}</p>
            <p>{t.descParagraph2}</p>
          </div>

          <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong className="font-black text-accent">{t.warningTitle} </strong>
              {t.warningText}
            </p>
          </div>
        </section>

        {/* CAREER GUIDES */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b-2 border-slate-200 pb-4 mb-8">
            {t.roadmapTitle}
          </h2>

          <div className="space-y-4">
            {/* Card 1 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card1Title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">{t.card1Desc}</p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card2Title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">{t.card2Desc}</p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card3Title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">{t.card3Desc}</p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card4Title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4 text-sm md:text-base">{t.card4Desc}</p>
                <span className="inline-block bg-orange-50/50 text-orange-600 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-100">{t.badgeComingSoon}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
