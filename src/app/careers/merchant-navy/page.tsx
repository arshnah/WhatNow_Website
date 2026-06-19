"use client";

import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import RealVoices from '@/components/RealVoices';

const navyAnalyticsData = {
  jobs: [
    { year: 2022, openings: 8000 },
    { year: 2023, openings: 9000 },
    { year: 2024, openings: 10000 },
    { year: 2025, openings: 10000 },
    { year: 2026, openings: 11000 }
  ],
  salaries: [
    { level: "Cadet", levelHi: "कैडेट", amount: "₹25K - ₹50K/Month", numericAmount: 35000 },
    { level: "3rd/4th Off", levelHi: "तृतीय/चतुर्थ अधिकारी", amount: "₹80K - ₹1.5L/Month", numericAmount: 115000 },
    { level: "2nd Off/Chief", levelHi: "द्वितीय अधिकारी/मुख्य", amount: "₹1.5L - ₹3L/Month", numericAmount: 220000 },
    { level: "Captain/Chief", levelHi: "कैप्टन/चीफ इंजीनियर", amount: "₹3L - ₹8L/Month", numericAmount: 550000 }
  ]
};
import { Icon } from '@iconify/react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    breadcrumbsHome: "Home",
    breadcrumbsCareers: "Careers",
    breadcrumbsMerchantNavy: "Merchant Navy",
    title: "Merchant Navy — Life at Sea, Pay on Land",
    subtitle: "Tax-free salaries, global travel, and months of isolation. We break down the real career path, entry routes, and what nobody tells you about life offshore.",
    lastReviewed: "Last reviewed: June 2026 · Researched from first-hand accounts of serving and trainee mariners, plus DG Shipping & BIMCO/ICS data.",
    stat1Label: "Starting Salary",
    stat1Val: "₹80K-₹3L/mo",
    stat2Label: "Tax Status",
    stat2Val: "Tax-Free*",
    stat3Label: "Sea Time",
    stat3Val: "6-9 months/yr",
    stat4Label: "Top Exams",
    stat4Val: "IMU CET",
    stat5Label: "Study Duration",
    stat5Val: "1-4 Years",
    stat6Label: "Sea Career",
    stat6Val: "~15-20 yrs",
    sectionTitle: "What is a Career in Merchant Navy?",
    descParagraph1: "The Merchant Navy is the commercial shipping fleet that carries 90% of global trade — crude oil, container cargo, LNG, automobiles, grain. Officers either navigate ships (Deck Officers) or manage their propulsion and electrical systems (Marine Engineers). You work on contracts: typically 4-9 months at sea, followed by 2-4 months of paid leave on land. Contract length scales with rank — junior cadets and officers usually serve the longer stints, while senior officers rotate on shorter ones.",
    descParagraph2: "The pay is extraordinary for Indian standards — a Second Officer or Fourth Engineer can earn ₹80,000-₹1,50,000 per month tax-free within 2 years of graduating. A Captain or Chief Engineer draws ₹3,00,000-₹8,00,000 per month. Treat those figures as ballpark, though — real pay swings with the type of ship, the company, the vessel's flag state, and the charterer, not just rank. Two officers of identical rank can earn very differently depending on who runs their vessel. The catch: months of isolation, minimal internet at sea, zero social life during contracts, and extremely demanding physical and mental conditions.",
    descParagraph3: "Entry is through IMU CET (Indian Maritime University Common Entrance Test) or direct admission to DG Shipping-approved institutes. The two primary paths are B.Sc Nautical Science (Deck side) and B.Tech Marine Engineering (Engine side). A faster route is the DNS course (Diploma in Nautical Science) — just 1 year of academics followed by 18 months of sea training.",
    descParagraph4: "There's also a third path most guides skip entirely: the Ratings department — the non-officer crew who keep a ship running (deck hands, motormen, engine-room staff). Entry is a General Purpose Rating (GPR) course at a DG Shipping-approved college, open after Class 12 in any stream, and it's faster and cheaper than the officer-track degrees. It isn't a dead end either — experienced Ratings can upgrade to officer rank later through competency exams.",
    warningTitle: "Reality check:",
    warningText: "Most YouTube channels and coaching centres sell the glamour — international travel, high salary, uniform. What they don't tell you: you will miss weddings, birthdays, festivals, and emergencies. Relationships are hard. Mental health at sea is a real issue. You need to be genuinely okay with isolation before committing.",
    roadmapTitle: "Merchant Navy Career Guides & Roadmaps",
    card1Title: "Is It For You — The Hard Truth",
    card1Desc: "Isolation tolerance, physical fitness requirements, personality traits that thrive at sea, and a realistic day-in-the-life for Deck and Engine cadets. No glamour, just facts.",
    card2Title: "Entry Routes — DNS vs B.Sc vs B.Tech",
    card2Desc: "Complete comparison of DNS (fastest, 1 year), B.Sc Nautical Science (3 years), and B.Tech Marine Engineering (4 years). Costs, ROI, and which path suits your background.",
    card3Title: "Colleges & DG Shipping Approval",
    card3Desc: "The only list that matters: DG Shipping-approved institutes. Fee structures, placement rates, campus locations, and which ones are actually worth the investment.",
    card4Title: "Salary, Ranks & Career Progression",
    card4Desc: "From Trainee Cadet to Captain/Chief Engineer. Rank-by-rank salary breakdowns, CDC requirements, competency exams (MEO/Mate), and the 20-year career arc in shipping.",
    badgeComingSoon: "Coming soon",
    badgeReady: "✓ Ready to read",
    taxFootnote: "* Tax-free, explained: Indian seafarers qualify as Non-Resident (NRI) by spending 182+ days outside India in a financial year — then foreign earnings are exempt from Indian income tax. The status must be re-established every financial year (it isn't automatic), and you should still file your returns even when exempt. General information, not tax advice.",
    imucetExamLinkText: "Related Exam Guide: IMU CET (Maritime Entrance)"
  },
  hi: {
    breadcrumbsHome: "होम",
    breadcrumbsCareers: "करियर",
    breadcrumbsMerchantNavy: "मर्चेंट नेवी",
    title: "मर्चेंट नेवी — समुद्र पर जीवन, जमीन पर वेतन",
    subtitle: "कर-मुक्त वेतन, वैश्विक यात्रा और महीनों का एकांत। हम वास्तविक करियर पथ, प्रवेश मार्ग और ऑफशोर जीवन के बारे में वह सब बताते हैं जो कोई नहीं बताता।",
    lastReviewed: "अंतिम समीक्षा: जून 2026 · सेवारत और प्रशिक्षु मारीनर्स के प्रत्यक्ष अनुभवों से शोधित, साथ में DG शिपिंग और BIMCO/ICS डेटा।",
    stat1Label: "शुरुआती वेतन",
    stat1Val: "₹80K-₹3L/Month",
    stat2Label: "कर स्थिति",
    stat2Val: "कर-मुक्त*",
    stat3Label: "समुद्री समय",
    stat3Val: "6-9 माह/वर्ष",
    stat4Label: "शीर्ष परीक्षाएं",
    stat4Val: "IMU CET",
    stat5Label: "अध्ययन अवधि",
    stat5Val: "1-4 वर्ष",
    stat6Label: "समुद्री करियर",
    stat6Val: "~15-20 वर्ष",
    sectionTitle: "मर्चेंट नेवी में करियर क्या है?",
    descParagraph1: "मर्चेंट नेवी वाणिज्यिक शिपिंग बेड़ा है जो वैश्विक व्यापार का 90% — कच्चा तेल, कंटेनर कार्गो, LNG, ऑटोमोबाइल, अनाज — ढोता है। अधिकारी या तो जहाजों को नेविगेट करते हैं (डेक अधिकारी) या उनके प्रणोदन और विद्युत प्रणालियों का प्रबंधन करते हैं (मरीन इंजीनियर)। आप अनुबंधों पर काम करते हैं: आमतौर पर 4-9 महीने समुद्र में, उसके बाद 2-4 महीने की सवेतन छुट्टी। अनुबंध की अवधि रैंक के अनुसार बदलती है — जूनियर कैडेट और अधिकारी आमतौर पर लंबे अनुबंध पर जाते हैं, जबकि वरिष्ठ अधिकारी छोटे अनुबंध पर।",
    descParagraph2: "भारतीय मानकों के लिए वेतन असाधारण है — एक सेकंड ऑफिसर या फोर्थ इंजीनियर स्नातक होने के 2 साल के भीतर ₹80,000-₹1,50,000 प्रति माह कर-मुक्त कमा सकता है। एक कैप्टन या चीफ इंजीनियर ₹3,00,000-₹8,00,000 प्रति माह कमाता है। पर इन आंकड़ों को अनुमानित ही मानें — असली वेतन जहाज के प्रकार, कंपनी, जहाज के फ्लैग देश और चार्टरर पर निर्भर करता है, सिर्फ रैंक पर नहीं। एक ही रैंक के दो अधिकारी अलग-अलग कंपनी में बहुत अलग कमा सकते हैं। कठिनाई: महीनों का एकांत, समुद्र में न्यूनतम इंटरनेट, अनुबंधों के दौरान शून्य सामाजिक जीवन।",
    descParagraph3: "प्रवेश IMU CET (भारतीय समुद्री विश्वविद्यालय सामान्य प्रवेश परीक्षा) या DG शिपिंग-अनुमोदित संस्थानों में सीधे प्रवेश के माध्यम से होता है। दो प्राथमिक मार्ग हैं: B.Sc नॉटिकल साइंस (डेक साइड) और B.Tech मरीन इंजीनियरिंग (इंजन साइड)। एक तेज मार्ग DNS कोर्स (डिप्लोमा इन नॉटिकल साइंस) है — केवल 1 वर्ष का शैक्षणिक कार्य और 18 महीने का समुद्री प्रशिक्षण।",
    descParagraph4: "एक तीसरा रास्ता भी है जिसे ज़्यादातर गाइड छोड़ देते हैं: रेटिंग्स विभाग — जहाज़ चलाने वाला नॉन-ऑफिसर क्रू (डेक हैंड, मोटरमैन, इंजन-रूम स्टाफ)। प्रवेश 12वीं के बाद किसी भी स्ट्रीम से, DG शिपिंग-अनुमोदित कॉलेज में GPR (जनरल पर्पस रेटिंग) कोर्स के ज़रिए होता है — यह ऑफिसर-ट्रैक डिग्री से तेज़ और सस्ता है। यह डेड-एंड भी नहीं है — अनुभवी रेटिंग्स बाद में योग्यता परीक्षा देकर ऑफिसर रैंक तक पहुँच सकते हैं।",
    warningTitle: "वास्तविकता जांच:",
    warningText: "अधिकांश YouTube चैनल और कोचिंग सेंटर ग्लैमर बेचते हैं — अंतर्राष्ट्रीय यात्रा, उच्च वेतन, वर्दी। जो वे नहीं बताते: आप शादियां, जन्मदिन, त्योहार और आपातकालीन स्थितियां मिस करेंगे। रिश्ते कठिन होते हैं। समुद्र में मानसिक स्वास्थ्य एक वास्तविक मुद्दा है।",
    roadmapTitle: "मर्चेंट नेवी करियर गाइड और रोडमैप",
    card1Title: "क्या यह आपके लिए है — कठिन सच",
    card1Desc: "एकांत सहनशीलता, शारीरिक फिटनेस आवश्यकताएं, समुद्र में सफल होने वाले व्यक्तित्व लक्षण, और डेक और इंजन कैडेट्स के लिए एक यथार्थवादी दैनिक जीवन।",
    card2Title: "प्रवेश मार्ग — DNS बनाम B.Sc बनाम B.Tech",
    card2Desc: "DNS (सबसे तेज, 1 वर्ष), B.Sc नॉटिकल साइंस (3 वर्ष), और B.Tech मरीन इंजीनियरिंग (4 वर्ष) की पूर्ण तुलना। लागत, ROI, और कौन सा मार्ग आपकी पृष्ठभूमि के अनुकूल है।",
    card3Title: "कॉलेज और DG शिपिंग अनुमोदन",
    card3Desc: "एकमात्र सूची जो मायने रखती है: DG शिपिंग-अनुमोदित संस्थान। शुल्क संरचना, प्लेसमेंट दरें, परिसर स्थान, और कौन से वास्तव में निवेश के लायक हैं।",
    card4Title: "वेतन, रैंक और करियर प्रगति",
    card4Desc: "ट्रेनी कैडेट से कैप्टन/चीफ इंजीनियर तक। रैंक-दर-रैंक वेतन विवरण, CDC आवश्यकताएं, योग्यता परीक्षाएं (MEO/Mate), और शिपिंग में 20 साल का करियर आर्क।",
    badgeComingSoon: "जल्द आ रहा है",
    badgeReady: "✓ पढ़ने के लिए तैयार",
    taxFootnote: "* कर-मुक्त का मतलब: भारतीय नाविक एक वित्तीय वर्ष में भारत के बाहर 182+ दिन बिताकर अनिवासी (NRI) बनते हैं — तब विदेशी आय भारतीय आयकर से मुक्त होती है। यह दर्जा हर वित्तीय वर्ष फिर से स्थापित करना पड़ता है (यह स्वतः नहीं होता), और छूट होने पर भी रिटर्न दाखिल करें। यह सामान्य जानकारी है, कर सलाह नहीं।",
    imucetExamLinkText: "संबद्ध परीक्षा गाइड: IMU CET (मैरीटाइम प्रवेश)"
  }
};

export default function MerchantNavyCareerHubPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="merchant-navy-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#merchant-navy-hub-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />
          <Icon 
            icon="solar:anchor-bold-duotone" 
            className="absolute -right-16 -bottom-16 w-80 h-80 text-[#ea580c] opacity-[0.12] -rotate-12 pointer-events-none select-none"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{t.breadcrumbsHome}</Link>
            <span>›</span>
            <Link href="/careers" className="hover:text-primary transition-colors">{t.breadcrumbsCareers}</Link>
            <span>›</span>
            <span className="text-orange-600">{t.breadcrumbsMerchantNavy}</span>
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
            <span className="text-2xl md:text-3xl font-black text-orange-600">{t.stat2Val}</span>
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

        {/* TAX FOOTNOTE */}
        <p className="text-xs text-slate-400 dark:text-slate-400 font-medium -mt-14">{t.taxFootnote}</p>

        {/* RELATED EXAM LINK */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Icon icon="solar:document-bold-duotone" className="w-8 h-8 text-orange-600" />
            <span className="font-bold text-neutral-dark text-sm md:text-base">{t.imucetExamLinkText}</span>
          </div>
          <Link href="/exams/imu-cet" className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            Read Exam Guide
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="career" data={navyAnalyticsData} colorTheme="orange" />

        {/* WHAT IS MERCHANT NAVY */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.sectionTitle}
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>{t.descParagraph1}</p>
            <p>{t.descParagraph2}</p>
            <p>{t.descParagraph3}</p>
            <p>{t.descParagraph4}</p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-orange-700 dark:text-orange-300">{t.warningTitle} </strong>
              {t.warningText}
            </p>
          </div>
        </section>

        {/* REAL VOICES */}
        <RealVoices vertical="merchant-navy" />

        {/* CAREER GUIDES */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            {t.roadmapTitle}
          </h2>

          <div className="space-y-4">
            {/* Card 1 */}
            <Link href="/careers/merchant-navy/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card1Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card1Desc}</p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">{t.badgeReady}</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/careers/merchant-navy/entry-routes" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card2Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card2Desc}</p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">{t.badgeReady}</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/careers/merchant-navy/colleges" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card3Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card3Desc}</p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">{t.badgeReady}</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/careers/merchant-navy/salary-ranks" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.card4Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">{t.card4Desc}</p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">{t.badgeReady}</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
