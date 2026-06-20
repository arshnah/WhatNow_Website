"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

interface Objection {
  id: string;
  field: "design" | "fashion" | "law" | "maritime" | "planning";
  concern: string;
  reality: string;
  talkingPoints: string[];
  stats: { label: string; value: string }[];
}

const OBJECTIONS_DATA: Record<"en" | "hi", Objection[]> = {
  en: [
    {
      id: "design-security",
      field: "design",
      concern: "Design has no stable corporate jobs. It's just drawing and freelancing.",
      reality: "Modern design is heavily integrated into tech and corporate product cycles. UI/UX design, Product Design, and Communication design are highly paid corporate roles.",
      talkingPoints: [
        "Explain the role of UI/UX in tech startups, fintech, and enterprise software.",
        "Show them that every app they use (Paytm, WhatsApp, Zomato) has a team of highly-paid interaction designers.",
        "Mention that NIDs and IIT (IDC) have 90%+ institutional placement rates with companies like Google, Microsoft, and Tata Motors."
      ],
      stats: [
        { label: "NID/IIT UI/UX Starting", value: "₹8L - ₹18L/yr" },
        { label: "Mid-Career (5 Yrs)", value: "₹18L - ₹32L/yr" },
        { label: "Placement Rate", value: "90% - 95%" }
      ]
    },
    {
      id: "fashion-boutique",
      field: "fashion",
      concern: "Fashion design is only about boutique tailor shops or celebrity runway shows.",
      reality: "The apparel and retail sector is India's second-largest employer. Multi-billion dollar retail groups run extensive corporate supply chains.",
      talkingPoints: [
        "Frame the degree as 'Retail Operations, Merchandising & Supply Chain Logistics'.",
        "Explain that fashion merchandisers decide the volume, price, and fabric sourcing for millions of garments.",
        "Point out that NIFT was established under an Act of Parliament, making it a highly respected national institution."
      ],
      stats: [
        { label: "Merchandiser Starting", value: "₹4.5L - ₹7L/yr" },
        { label: "Apparel Export Market", value: "$40 Billion" },
        { label: "Top Brand Placements", value: "100+ Corporate Buyers" }
      ]
    },
    {
      id: "law-courtroom",
      field: "law",
      concern: "Law is only about lower courts, family disputes, and decades of low-paid clerkship.",
      reality: "National Law Universities have created a massive corporate law sector in India. Tier-1 law firms advise on multi-billion dollar mergers, acquisitions, and corporate finance.",
      talkingPoints: [
        "Show them starting packages at Tier-1 firms. These packages rival top IIM/IIT salaries.",
        "Explain that corporate lawyers work in corporate offices, not crowded local courtrooms.",
        "Highlight the structured NLU campus placement process, where national and international firms hire directly."
      ],
      stats: [
        { label: "Tier-1 NLU Starting", value: "₹12L - ₹18L/yr" },
        { label: "In-House Counsel starting", value: "₹7L - ₹10L/yr" },
        { label: "NLU Admissions via CLAT", value: "Top 3,000 ranks get Tier-1" }
      ]
    },
    {
      id: "maritime-risk",
      field: "maritime",
      concern: "Merchant Navy is too risky, lonely, and lacks normal social/family life.",
      reality: "Modern commercial vessels have satellite connectivity and regulated shifts. The financial returns are unmatched, offering largely tax-free savings at a young age.",
      talkingPoints: [
        "Explain the rotational contract system (months at sea followed by paid vacation at home).",
        "Highlight that earnings are mostly tax-free under NRI status guidelines.",
        "Show them that cadets reach Officer ranks within 3-4 years and earn high USD salaries."
      ],
      stats: [
        { label: "Licensed 3rd Officer", value: "$2,500 - $4,000/mo" },
        { label: "Tax Obligation", value: "0% (NRI Status)" },
        { label: "Chief Engineer (10 Yrs)", value: "$10,000+/mo" }
      ]
    },
    {
      id: "planning-civil",
      field: "planning",
      concern: "B.Planning is just a lower branch of Civil Engineering. Planners won't find jobs.",
      reality: "Urban Planning is a policy-driven discipline distinct from engineering. Rapid urbanization means consultancies and development authorities urgently need planners.",
      talkingPoints: [
        "Explain that planners decide where to build and draft policy, while engineers decide how to build.",
        "Show them private placement avenues like JLL, PwC, KPMG, and L&T Infrastructure.",
        "Point out the affordable fee structure at government SPAs compared to private engineering colleges."
      ],
      stats: [
        { label: "Private Consultancy starting", value: "₹5L - ₹8L/yr" },
        { label: "Indian Smart Cities", value: "100 Cities targeted" },
        { label: "SPA Tuition Fee per Year", value: "₹1.8L - ₹2.5L" }
      ]
    }
  ],
  hi: [
    {
      id: "design-security",
      field: "design",
      concern: "डिज़ाइन में स्थिर कॉर्पोरेट नौकरियाँ नहीं हैं। यह सिर्फ ड्राइंग और फ्रीलांसिंग है।",
      reality: "आधुनिक डिज़ाइन टेक और कॉर्पोरेट प्रॉडक्ट साइकिल में गहराई से जुड़ा हुआ है। UI/UX, प्रोडक्ट डिज़ाइन, और कम्युनिकेशन डिज़ाइन में उच्च वेतन वाली भूमिकाएँ हैं।",
      talkingPoints: [
        "उन्हें बताएं कि UI/UX टेक स्टार्टअप, फिनटेक, और एंटरप्राइज़ सॉफ्टवेयर में कितना महत्वपूर्ण है।",
        "बताएँ कि Paytm, WhatsApp, Zomato जैसे ऐप्स में interaction designers की टीम होती है।",
        "दिखाएँ कि NID और IIT (IDC) में 90%+ प्लेसमेंट दरें हैं और Google, Microsoft, Tata Motors जैसी कंपनियाँ यहाँ भर्ती करती हैं।"
      ],
      stats: [
        { label: "NID/IIT UI/UX प्रारंभिक", value: "₹8L - ₹18L/वर्ष" },
        { label: "मिड-करियर (5 वर्ष)", value: "₹18L - ₹32L/वर्ष" },
        { label: "प्लेसमेंट दर", value: "90% - 95%" }
      ]
    },
    {
      id: "fashion-boutique",
      field: "fashion",
      concern: "फ़ैशन डिज़ाइन केवल बुटीक दर्ज़ी या रनवे शो के बारे में है।",
      reality: "अपरैल और रिटेल सेक्टर भारत का दूसरा सबसे बड़ा नियोक्ता है। बड़े रिटेल समूह व्यापक कॉर्पोरेट सप्लाई चेन चलाते हैं।",
      talkingPoints: [
        "डिग्री को 'रिटेल ऑपरेशंस, मर्चेंडाइजिंग और सप्लाई चेन लॉजिस्टिक्स' के रूप में पेश करें।",
        "समझाएँ कि फ़ैशन मर्चेंडाइज़र लाखों कपड़ों की मात्रा, कीमत और फैब्रिक सोर्सिंग तय करते हैं।",
        "बताएँ कि NIFT कपड़ा मंत्रालय के तहत संसद के अधिनियम द्वारा स्थापित है, जो इसे राष्ट्रीय रूप से प्रतिष्ठित बनाता है।"
      ],
      stats: [
        { label: "मर्चेंडाइज़र प्रारंभिक", value: "₹4.5L - ₹7L/वर्ष" },
        { label: "परिधान निर्यात बाज़ार", value: "$40 बिलियन" },
        { label: "शीर्ष ब्रांड प्लेसमेंट", value: "100+ कॉर्पोरेट खरीदार" }
      ]
    },
    {
      id: "law-courtroom",
      field: "law",
      concern: "क़ानून केवल निचली अदालतों, पारिवारिक विवादों, और कम वेतन वाले क्लर्कशिप के बारे में है।",
      reality: "राष्ट्रीय कानून विश्वविद्यालयों ने भारत में एक विशाल कॉर्पोरेट लॉ सेक्टर बनाया है। टियर-1 लॉ फर्म्स बहु-अरब डॉलर के सौदों पर सलाह देती हैं।",
      talkingPoints: [
        "उन्हें दिखाएँ कि टियर-1 फर्मों में प्रारंभिक पैकेज शीर्ष IIM/IIT पैकेज से मेल खाते हैं।",
        "समझाएँ कि कॉर्पोरेट वकील ज़्यादातर कॉर्पोरेट ऑफिसों में काम करते हैं, कोर्टरूम में नहीं।",
        "उल्लेख करें कि NLU कैंपस प्लेसमेंट प्रक्रिया राष्ट्रीय और अंतरराष्ट्रीय फर्मों को सीधे भर्ती करने के लिए बनाई गई है।"
      ],
      stats: [
        { label: "टियर-1 NLU प्रारंभिक", value: "₹12L - ₹18L/वर्ष" },
        { label: "इन-हाउस काउंसल प्रारंभिक", value: "₹7L - ₹10L/वर्ष" },
        { label: "CLAT के माध्यम से NLU प्रवेश", value: "टॉप 3,000 रैंक टियर-1 पाते हैं" }
      ]
    },
    {
      id: "maritime-risk",
      field: "maritime",
      concern: "मर्चेंट नेवी बहुत जोखिम भरा, अकेला, और पारिवारिक जीवन से अलग है।",
      reality: "आधुनिक वाणिज्यिक जहाज़ों में सैटेलाइट कनेक्टिविटी और नियमनयुक्त शिफ्ट होते हैं। वित्तीय रिटर्न बहुत ऊँचे होते हैं और बहुत कम उम्र में टैक्स-फ्री बचत संभव होती है।",
      talkingPoints: [
        "उन्हें 4 महीने समुद्र में और 4 महीने घर पर भुगतान अवकाश के रोटेशनल कॉन्ट्रैक्ट सिस्टम के बारे में बताएं।",
        "उल्लेख करें कि कमाई अधिकतर NRI स्थिति के तहत टैक्स-फ्री होती है।",
        "दिखाएँ कि कैडेट 3-4 वर्षों में ऑफिसर रैंक तक पहुँच सकते हैं और उच्च USD सैलरी कमा सकते हैं।"
      ],
      stats: [
        { label: "लाइसेंस प्राप्त 3rd ऑफिसर", value: "$2,500 - $4,000/माह" },
        { label: "टैक्स दायित्व", value: "0% (NRI स्थिति)" },
        { label: "चीफ इंजीनियर (10 वर्ष)", value: "$10,000+/माह" }
      ]
    },
    {
      id: "planning-civil",
      field: "planning",
      concern: "B.Planning केवल सिविल इंजीनियरिंग की एक निचली शाखा है। प्लानर्स को नौकरी नहीं मिलेगी।",
      reality: "अर्बन प्लानिंग एक नीति-चालित विषय है जो इंजीनियरिंग से अलग है। तेजी से शहरीकरण के कारण कंसल्टेंसी और विकास प्राधिकरणों को प्लानर्स की कमी है।",
      talkingPoints: [
        "समझाएँ कि प्लानर यह तय करते हैं कि कहाँ निर्माण होगा, जबकि इंजीनियर यह तय करते हैं कि कैसे निर्माण होगा।",
        "उन्हें JLL, PwC, KPMG और L&T Infrastructure जैसे निजी प्लेसमेंट के अवसर बताएं।",
        "बताएँ कि सरकारी SPA की फीस निजी इंजीनियरिंग कॉलेजों की तुलना में कम होती है।"
      ],
      stats: [
        { label: "निजी कंसल्टेंसी प्रारंभिक", value: "₹5L - ₹8L/वर्ष" },
        { label: "इंडियन स्मार्ट सिटीज़", value: "100 शहर लक्षित" },
        { label: "SPA वार्षिक ट्यूशन फीस", value: "₹1.8L - ₹2.5L" }
      ]
    }
  ]
};

const localTranslations = {
  en: {
    pageBadge: "Family Alignment Guide",
    pageTitle: "How to Talk to Your Parents About Non-Traditional Careers",
    pageDescription: "Parents worry because they want you to be secure. This guide equips you with institutional statistics, industry placement realities, and structured talking points to replace anxiety with facts.",
    blueprintTitle: "The Parent Conversation Blueprint",
    blueprintStep1: "Acknowledge Their Concern",
    blueprintStep1Desc: "Do not react defensively. Understand that their worries about stability stem from love and their own experiences of economic shifts.",
    blueprintStep2: "Show the Math (ROI)",
    blueprintStep2Desc: "Bring real numbers. Compare the tuition fees of premier national institutes against private engineering/management colleges.",
    blueprintStep3: "Cite Institutional Authority",
    blueprintStep3Desc: "Highlight that these institutes are established by Acts of Parliament or central ministries. This immediately legitimizes the path.",
    filterTitle: "Filter Objections by Career Field",
    allFields: "All Fields",
    fieldDesign: "Design (NID/IIT)",
    fieldFashion: "Fashion (NIFT)",
    fieldLaw: "Law (NLU)",
    fieldMaritime: "Maritime (IMU)",
    fieldPlanning: "Planning (SPA)",
    objectionResolver: "Objection Resolver",
    realityLabel: "The Reality:",
    explainLabel: "How to Explain to Parents:",
    supportingData: "Key Supporting Data:",
  },
  hi: {
    pageBadge: "पारिवारिक संवाद मार्गदर्शिका",
    pageTitle: "अपने माता-पिता से गैर-पारंपरिक करियर के बारे में कैसे बात करें",
    pageDescription: "माता-पिता चिंता करते हैं क्योंकि वे आपकी सुरक्षा चाहते हैं। यह गाइड आपको संस्थागत आंकड़े, प्लेसमेंट वास्तविकताएं, और संरचित बातचीत के बिंदु देता है।",
    blueprintTitle: "माता-पिता से बातचीत का ब्लूप्रिंट",
    blueprintStep1: "उनकी चिंता स्वीकार करें",
    blueprintStep1Desc: "रक्षात्मक न हों। समझें कि उनकी सुरक्षा की चिंता उनके अनुभव और आर्थिक अस्थिरता से आती है।",
    blueprintStep2: "गणित दिखाएँ (ROI)",
    blueprintStep2Desc: "वास्तविक आंकड़े पेश करें। प्रमुख राष्ट्रीय संस्थानों की फ़ीस और लाभ की तुलना निजी इंजीनियरिंग/मैनेजमेंट कॉलेजों से करें।",
    blueprintStep3: "संस्थागत प्रमाण दिखाएँ",
    blueprintStep3Desc: "बताएँ कि ये संस्थान संसद के अधिनियम या केंद्रीय मंत्रालयों द्वारा स्थापित हैं। इससे यह मार्ग अधिक विश्वसनीय बनता है।",
    filterTitle: "करियर क्षेत्र द्वारा आपत्तियों को फ़िल्टर करें",
    allFields: "सभी क्षेत्र",
    fieldDesign: "डिज़ाइन (NID/IIT)",
    fieldFashion: "फ़ैशन (NIFT)",
    fieldLaw: "क़ानून (NLU)",
    fieldMaritime: "समुद्र वाहन (IMU)",
    fieldPlanning: "योजना (SPA)",
    objectionResolver: "आपत्ति समाधान",
    realityLabel: "वास्तविकता:",
    explainLabel: "माता-पिता को यह कैसे समझाएँ:",
    supportingData: "मुख्य सहायता डेटा:",
  }
};

const FIELD_LABELS = {
  en: {
    design: "Design",
    fashion: "Fashion",
    law: "Law",
    maritime: "Maritime",
    planning: "Planning",
  },
  hi: {
    design: "डिज़ाइन",
    fashion: "फ़ैशन",
    law: "क़ानून",
    maritime: "समुद्र वाहन",
    planning: "योजना",
  }
};

export default function ConvinceParentsPage() {
  const { language } = useLanguage();
  const t = localTranslations[language];
  const objectionsData = OBJECTIONS_DATA[language];
  const fieldLabels = FIELD_LABELS[language];

  const [selectedField, setSelectedField] = useState<
    "all" | "design" | "fashion" | "law" | "maritime" | "planning"
  >("all");

  const filteredObjections =
    selectedField === "all"
      ? objectionsData
      : objectionsData.filter((obj) => obj.field === selectedField);

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#parents-grid)" />
          </svg>
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[60px]" />
        </div>

        <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 text-xs font-black uppercase tracking-wider mb-6">
            <Icon icon="solar:users-group-two-rounded-bold" className="w-4 h-4" />
            {t.pageBadge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
            {t.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-medium">
            {t.pageDescription}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto w-full px-6 lg:px-12 py-12 md:py-16">
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-neutral-dark mb-8 tracking-tight">
            {t.blueprintTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="font-black text-slate-800 dark:text-slate-100 text-lg">{t.blueprintStep1}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {t.blueprintStep1Desc}
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="font-black text-slate-800 dark:text-slate-100 text-lg">{t.blueprintStep2}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {t.blueprintStep2Desc}
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="font-black text-slate-800 dark:text-slate-100 text-lg">{t.blueprintStep3}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {t.blueprintStep3Desc}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-neutral-dark mb-6 tracking-tight">
            {t.filterTitle}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {([
              { id: "all", label: t.allFields, icon: "solar:widget-bold-duotone" },
              { id: "design", label: t.fieldDesign, icon: "solar:pen-tool-bold-duotone" },
              { id: "fashion", label: t.fieldFashion, icon: "solar:hanger-bold-duotone" },
              { id: "law", label: t.fieldLaw, icon: "solar:scale-bold-duotone" },
              { id: "maritime", label: t.fieldMaritime, icon: "solar:anchor-bold-duotone" },
              { id: "planning", label: t.fieldPlanning, icon: "solar:compass-bold-duotone" }
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedField(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
                  selectedField === tab.id
                    ? "bg-indigo-600 text-white"
                    : "bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50"
                }`}
              >
                <Icon icon={tab.icon} className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredObjections.map((obj) => (
            <div
              key={obj.id}
              className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-10 shadow-sm relative overflow-hidden transition-all hover:border-slate-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600">
                  {fieldLabels[obj.field]}
                </span>
                <span className="text-xs font-bold text-slate-400">{t.objectionResolver}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-4 leading-tight">
                {language === "hi" ? "माता-पिता की चिंता:" : "Parents Worry:"} “{obj.concern}”
              </h3>

              <div className="space-y-4 mb-6">
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wider">
                  {t.realityLabel}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-semibold">
                  {obj.reality}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-8">
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wider">
                  {t.explainLabel}
                </h4>
                <ul className="space-y-3">
                  {obj.talkingPoints.map((point, index) => (
                    <li key={index} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 font-semibold leading-relaxed">
                      <span className="text-indigo-600 font-black">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider mb-4">
                  {t.supportingData}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {obj.stats.map((stat, index) => (
                    <div key={index} className="border border-slate-200/60 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800/50 shadow-sm flex flex-col justify-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</span>
                      <span className="text-lg font-black text-indigo-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}