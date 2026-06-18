"use client";

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/context/LanguageContext';
import VisualAnalytics from '@/components/ui/VisualAnalytics';

const planningAnalyticsData = {
  jobs: [
    { year: 2022, openings: 3000 },
    { year: 2023, openings: 4200 },
    { year: 2024, openings: 5500 },
    { year: 2025, openings: 6800 },
    { year: 2026, openings: 8500 }
  ],
  salaries: [
    { level: "Entry", levelHi: "शुरुआती", amount: "₹45K - ₹80K/Month", numericAmount: 55000 },
    { level: "Mid", levelHi: "मध्यम", amount: "₹80K - ₹1.5L/Month", numericAmount: 110000 },
    { level: "Senior", levelHi: "वरिष्ठ", amount: "₹1.5L - ₹2.5L/Month", numericAmount: 200000 },
    { level: "Director", levelHi: "निदेशक", amount: "₹2.5L - ₹5L/Month", numericAmount: 350000 }
  ]
};

const translations = {
  en: {
    breadcrumbsHome: "Home",
    breadcrumbsCareers: "Careers",
    breadcrumbsUrbanPlanning: "Urban Planning",
    title: "Urban Planning — Designing Cities of Tomorrow",
    subtitle: "Green infrastructure, transit-oriented development, and zoning laws. We break down the real career scope, SPAs vs IITs vs CEPT, and how to build cities from the ground up.",
    lastReviewed: "Last reviewed: May 2026 · Compiled by senior urban planners & SPA alumni",
    stat1Label: "Starting Salary",
    stat1Val: "₹5L - ₹12L/yr",
    stat2Label: "Growth Potential",
    stat2Val: "High",
    stat3Label: "Study Duration",
    stat3Val: "4 Years (B.Plan)",
    stat4Label: "Top Exams",
    stat4Val: "JEE Main Paper 3",
    stat5Label: "Core Focus",
    stat5Val: "Sustainability",
    stat6Label: "Top Recruiters",
    stat6Val: "DDA, PwC, JLL",
    sectionTitle: "What is a Career in Urban Planning?",
    descParagraph1: "Urban planning is the technical and political process concerned with the development and design of land use, infrastructure, and transportation systems in cities. Planners ensure that cities grow sustainably, reducing traffic congestion, optimizing public services, and mitigating climate change risks.",
    descParagraph2: "In India, B.Plan (Bachelor of Planning) is a highly specialized 4-year degree. Unlike architecture which focuses on individual buildings, planning looks at the entire city ecosystem. Employment spans government authorities (DDA, MMRDA, Town & Country Planning departments), consulting firms (PwC, EY, JLL), and international development agencies like the World Bank or UN-Habitat.",
    descParagraph3: "To enter the top planning schools in India — the School of Planning and Architecture (SPA Delhi, Bhopal, Vijayawada) and IITs (Kharagpur and Roorkee) — candidates must clear JEE Main Paper 3 (B.Planning entrance). CEPT University (Ahmedabad) is another premium institute offering direct admission and state-level exams.",
    warningTitle: "Policy and Politics:",
    warningText: "Urban planning is not just about drawing beautiful city layouts on AutoCAD. In the real world, planning is deeply entangled with bureaucracy, local politics, real estate developers, and land acquisition delays. You must be prepared to navigate government departments, deal with public opposition, and see projects take years or decades to execute.",
    roadmapTitle: "Urban Planning Career Guides & Roadmaps",
    card1Title: "Is B.Plan For You? — Planning vs Architecture",
    card1Desc: "A direct comparison of daily responsibilities, skills needed, and creative freedom in planning versus architecture. Know the difference before choosing.",
    card2Title: "Top Planning Colleges in India & Admission Ranks",
    card2Desc: "Analysis of School of Planning and Architecture (SPAs) Delhi, Bhopal, Vijayawada, IIT Roorkee, CEPT Ahmedabad, and other AICTE approved programs.",
    card3Title: "JEE Main Paper 3 Preparation & Syllabus",
    card3Desc: "Subject-wise breakdown of B.Planning syllabus: Mathematics, Aptitude, and Planning-specific questions. Free preparation materials.",
    card4Title: "Urban Planners in Public Sector vs Consultancy",
    card4Desc: "Comparing career paths, stability, and salaries in government town planning departments versus private real estate and infrastructure consulting firms.",
    badgeComingSoon: "Coming soon",
    examLinkText: "Related Exam Guide: JEE Main Paper 3 (B.Planning Entrance)"
  },
  hi: {
    breadcrumbsHome: "होम",
    breadcrumbsCareers: "करियर",
    breadcrumbsUrbanPlanning: "शहरी नियोजन",
    title: "शहरी नियोजन — कल के शहरों को डिजाइन करना",
    subtitle: "हरित बुनियादी ढांचा, पारगमन-उन्मुख विकास और ज़ोनिंग कानून। हम वास्तविक करियर क्षेत्र, SPAs बनाम IITs बनाम CEPT, और जमीनी स्तर से शहरों के निर्माण के तरीके का विवरण देते हैं।",
    lastReviewed: "अंतिम समीक्षा: मई 2026 · वरिष्ठ शहरी योजनाकारों और एसपीए पूर्व छात्रों द्वारा संकलित",
    stat1Label: "शुरुआती वेतन",
    stat1Val: "₹5L - ₹12L/वर्ष",
    stat2Label: "विकास क्षमता",
    stat2Val: "उच्च",
    stat3Label: "अध्ययन की अवधि",
    stat3Val: "4 वर्ष (B.Plan)",
    stat4Label: "शीर्ष परीक्षाएं",
    stat4Val: "JEE Main पेपर 3",
    stat5Label: "मुख्य फोकस",
    stat5Val: "सतत विकास",
    stat6Label: "शीर्ष नियोक्ता",
    stat6Val: "DDA, PwC, JLL",
    sectionTitle: "शहरी नियोजन में करियर क्या है?",
    descParagraph1: "शहरी नियोजन वह तकनीकी और राजनीतिक प्रक्रिया है जो शहरों में भूमि उपयोग, बुनियादी ढांचे और परिवहन प्रणालियों के विकास और डिजाइन से संबंधित है। योजनाकार यह सुनिश्चित करते हैं कि शहर सतत रूप से विकसित हों, यातायात की भीड़ को कम करें, सार्वजनिक सेवाओं को अनुकूलित करें और जलवायु परिवर्तन के जोखिमों को कम करें।",
    descParagraph2: "भारत में, B.Plan (बैचलर ऑफ प्लानिंग) एक अत्यधिक विशिष्ट 4-वर्षीय डिग्री है। वास्तुकला के विपरीत, जो व्यक्तिगत इमारतों पर ध्यान केंद्रित करती है, नियोजन पूरे शहर के पारिस्थितिकी तंत्र को देखता है। रोजगार सरकारी प्राधिकरणों (DDA, MMRDA, टाउन एंड कंट्री प्लानिंग विभाग), परामर्श फर्मों (PwC, EY, JLL) और विश्व बैंक या यूएन-हैबिटेट जैसे अंतरराष्ट्रीय विकास संगठनों में फैला हुआ है।",
    descParagraph3: "भारत के शीर्ष नियोजन स्कूलों — स्कूल ऑफ प्लानिंग एंड आर्किटेक्चर (SPA दिल्ली, भोपाल, विजयवाड़ा) और IIT (खड़गपुर और रुड़की) में प्रवेश करने के लिए, उम्मीदवारों को JEE Main पेपर 3 (B.Planning प्रवेश परीक्षा) उत्तीर्ण करनी होगी। CEPT विश्वविद्यालय (अहमदाबाद) एक अन्य प्रीमियम संस्थान है जो सीधे प्रवेश और राज्य स्तरीय परीक्षा प्रदान करता है।",
    warningTitle: "नीति और राजनीति:",
    warningText: "शहरी नियोजन केवल ऑटोकैड पर सुंदर शहर के लेआउट बनाने के बारे में नहीं है। वास्तविक दुनिया में, योजना नौकरशाही, स्थानीय राजनीति, रियल एस्टेट डेवलपर्स और भूमि अधिग्रहण में देरी से गहराई से जुड़ी हुई है। आपको सरकारी विभागों को संभालने, सार्वजनिक विरोध का सामना करने और परियोजनाओं को निष्पादित होने में वर्षों या दशकों का समय देखने के लिए तैयार रहना चाहिए।",
    roadmapTitle: "शहरी नियोजन करियर गाइड और रोडमैप",
    card1Title: "क्या B.Plan आपके लिए है? — योजना बनाम वास्तुकला",
    card1Desc: "योजना बनाम वास्तुकला में दैनिक जिम्मेदारियों, आवश्यक कौशल और रचनात्मक स्वतंत्रता की सीधी तुलना। चुनने से पहले अंतर जानें।",
    card2Title: "भारत के शीर्ष नियोजन कॉलेज और प्रवेश रैंक",
    card2Desc: "स्कूल ऑफ प्लानिंग एंड आर्किटेक्चर (SPAs) दिल्ली, भोपाल, विजयवाड़ा, IIT रुड़की, CEPT अहमदाबाद और अन्य AICTE अनुमोदित कार्यक्रमों का विश्लेषण।",
    card3Title: "JEE Main पेपर 3 तैयारी और पाठ्यक्रम",
    card3Desc: "B.Planning पाठ्यक्रम का विषय-वार विवरण: गणित, योग्यता और नियोजन-विशिष्ट प्रश्न। मुफ्त तैयारी सामग्री।",
    card4Title: "सार्वजनिक क्षेत्र बनाम परामर्श में शहरी योजनाकार",
    card4Desc: "सरकारी टाउन प्लानिंग विभागों बनाम निजी रियल एस्टेट और बुनियादी ढांचा परामर्श फर्मों में करियर पथ, स्थिरता और वेतन की तुलना।",
    badgeComingSoon: "जल्द आ रहा है",
    examLinkText: "संबद्ध परीक्षा गाइड: JEE Main पेपर 3 (B.Planning प्रवेश)"
  }
};

export default function UrbanPlanningCareerHubPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0B0F1A] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="urban-planning-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#urban-planning-hub-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />
          <Icon 
            icon="solar:city-bold-duotone" 
            className="absolute -right-16 -bottom-16 w-80 h-80 text-[#0d9488] opacity-[0.12] -rotate-12 pointer-events-none select-none"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{t.breadcrumbsHome}</Link>
            <span>›</span>
            <Link href="/careers" className="hover:text-primary transition-colors">{t.breadcrumbsCareers}</Link>
            <span>›</span>
            <span className="text-teal-600">{t.breadcrumbsUrbanPlanning}</span>
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
            <span className="text-2xl md:text-3xl font-black text-teal-600">{t.stat2Val}</span>
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
        <div className="bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Icon icon="solar:document-bold-duotone" className="w-8 h-8 text-teal-600" />
            <span className="font-bold text-neutral-dark text-sm md:text-base">{t.examLinkText}</span>
          </div>
          <Link href="/exams/jee-paper3" className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            Read Exam Guide
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="career" data={planningAnalyticsData} colorTheme="teal" />

        {/* WHAT IS URBAN PLANNING */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.sectionTitle}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>{t.descParagraph1}</p>
            <p>{t.descParagraph2}</p>
            <p>{t.descParagraph3}</p>
          </div>

          <div className="bg-teal-50/50 dark:bg-teal-950/30 border-l-4 border-teal-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-teal-700 dark:text-teal-300">{t.warningTitle} </strong>
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
                <span className="inline-block bg-teal-50/50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-teal-100 dark:border-teal-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card2Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card2Desc}</p>
                <span className="inline-block bg-teal-50/50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-teal-100 dark:border-teal-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card3Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card3Desc}</p>
                <span className="inline-block bg-teal-50/50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-teal-100 dark:border-teal-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col md:flex-row gap-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">{t.card4Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card4Desc}</p>
                <span className="inline-block bg-teal-50/50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-teal-100 dark:border-teal-900/40">{t.badgeComingSoon}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
