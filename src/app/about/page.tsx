"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface StatItem {
  number: string;
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

const STATS_DATA = {
  en: [
    {
      number: "50+",
      label: "Seniors Interviewed",
      description: "Methodologies and exit path insights directly from successful exam candidates.",
      icon: "solar:chat-line-chat-bold-duotone",
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-50 border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-900/40",
    },
    {
      number: "100%",
      label: "Sponsor-Free Guides",
      description: "No referral commissions, no private college advertisements, no sponsored bias.",
      icon: "solar:verified-check-bold-duotone",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-50 border-orange-100 dark:bg-orange-950/30 dark:border-indigo-900/40",
    },
    {
      number: "₹0",
      label: "Rupees Cost Forever",
      description: "No email gates, subscription locks, or premium paywalled resources.",
      icon: "solar:banknote-bold-duotone",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-100 dark:bg-emerald-950/30 dark:border-indigo-900/40",
    },
    {
      number: "5+",
      label: "Target Streams",
      description: "Expanding indexes for design, law, fashion, merchant navy, and defence.",
      icon: "solar:map-arrow-square-bold-duotone",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border-purple-100 dark:bg-purple-950/30 dark:border-indigo-900/40",
    },
  ],
  hi: [
    {
      number: "50+",
      label: "सीनियर्स का साक्षात्कार",
      description: "सफल उम्मीदवारों से सीधे प्राप्त कार्यप्रणालियाँ और बाहर निकलने के रास्तों की जानकारी।",
      icon: "solar:chat-line-chat-bold-duotone",
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-50 border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-900/40",
    },
    {
      number: "100%",
      label: "स्पॉन्सर-मुक्त गाइड्स",
      description: "कोई रेफरल कमीशन नहीं, कोई निजी कॉलेज विज्ञापन नहीं, कोई प्रायोजित पक्षपात नहीं।",
      icon: "solar:verified-check-bold-duotone",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-50 border-orange-100 dark:bg-orange-950/30 dark:border-indigo-900/40",
    },
    {
      number: "₹0",
      label: "हमेशा के लिए मुफ़्त",
      description: "कोई ईमेल गेट नहीं, सब्सक्रिप्शन लॉक नहीं, या कोई प्रीमियम भुगतान संसाधन नहीं।",
      icon: "solar:banknote-bold-duotone",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-100 dark:bg-emerald-950/30 dark:border-indigo-900/40",
    },
    {
      number: "5+",
      label: "लक्षित स्ट्रीम्स",
      description: "डिज़ाइन, कानून, फैशन, मर्चेंट नेवी और रक्षा के लिए सूचकांकों का विस्तार।",
      icon: "solar:map-arrow-square-bold-duotone",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border-purple-100 dark:bg-purple-950/30 dark:border-indigo-900/40",
    },
  ]
};

interface FaqItem {
  question: string;
  answer: string;
  category: "platform" | "content" | "support";
}

const FAQS_DATA = {
  en: [
    {
      question: "How do you ensure the guidance is completely honest and accurate?",
      answer: "We do not hire generic content writers. Every single blueprint is co-authored or reviewed by students who successfully cracked that specific entrance exam and completed their degrees, combined with official regulatory board documents (like the official IIT UCEED brochure).",
      category: "content" as const,
    },
    {
      question: "Are these guides really free? Will there be a paid subscription later?",
      answer: "Yes, they are 100% free and will stay that way. We do not gate roadmaps behind email captures or subscription plans. We believe access to high-quality suitability assessments should be free for every student behind us.",
      category: "platform" as const,
    },
    {
      question: "How can I submit a request for an entrance exam guide?",
      answer: "You can submit requests directly using the form at the bottom of our Exams Index Page. We prioritize writing guides based on the volume of student requests we receive.",
      category: "support" as const,
    },
    {
      question: "How do you support your development costs?",
      answer: "WhatNow is built as a community-driven, non-commercial resource index. Our development and hosting costs are covered by voluntary contributions from alumni and seniors who believe in closing the guidance gap in India.",
      category: "support" as const,
    },
    {
      question: "Do you offer personalized, 1-on-1 career coaching sessions?",
      answer: "Currently, we focus on producing structured, self-service blueprints that can reach thousands of students. However, we occasionally host open Discord Q&As with our senior advisors where students can ask questions directly.",
      category: "platform" as const,
    },
    {
      question: "How can I join as a contributor or advisor?",
      answer: "If you cracked a major exam (IIT, NIFT, NLU, etc.) and want to write a candid guide warning future aspirants about the realities of your field, reach out to us via our Instagram or YouTube channels. We are always expanding our network of honest mentors.",
      category: "support" as const,
    }
  ],
  hi: [
    {
      question: "आप यह कैसे सुनिश्चित करते हैं कि मार्गदर्शन पूरी तरह से ईमानदार और सटीक है?",
      answer: "हम सामान्य कंटेंट राइटर्स को काम पर नहीं रखते हैं। प्रत्येक ब्लूप्रिंट उन छात्रों द्वारा सह-लिखित या समीक्षित किया जाता है जिन्होंने उस विशिष्ट प्रवेश परीक्षा को सफलतापूर्वक क्रैक किया और अपनी डिग्री पूरी की, साथ ही आधिकारिक नियामक बोर्ड दस्तावेजों (जैसे आधिकारिक IIT UCEED ब्रोशर) को मिलाकर तैयार किया जाता है।",
      category: "content" as const,
    },
    {
      question: "क्या ये गाइड वास्तव में मुफ्त हैं? क्या बाद में सशुल्क सदस्यता होगी?",
      answer: "हां, वे 100% मुफ्त हैं और वैसे ही रहेंगे। हम ईमेल कैप्चर या सदस्यता योजनाओं के पीछे रोडमैप को बंद नहीं करते हैं। हमारा मानना ​​है कि हमारे पीछे आने वाले प्रत्येक छात्र के लिए उच्च-गुणवत्ता वाले उपयुक्तता आकलन तक पहुंच मुफ्त होनी चाहिए।",
      category: "platform" as const,
    },
    {
      question: "मैं प्रवेश परीक्षा गाइड के लिए अनुरोध कैसे सबमिट कर सकता हूं?",
      answer: "आप सीधे हमारे परीक्षा सूचकांक पृष्ठ के नीचे दिए गए फॉर्म का उपयोग करके अनुरोध सबमिट कर सकते हैं। हम प्राप्त होने वाले छात्र अनुरोधों की संख्या के आधार पर गाइड लिखने को प्राथमिकता देते हैं।",
      category: "support" as const,
    },
    {
      question: "आप अपनी विकास लागतों का समर्थन कैसे करते हैं?",
      answer: "व्हाटनाव का निर्माण एक समुदाय-संचालित, गैर-व्यावसायिक संसाधन सूचकांक के रूप में किया गया है। हमारी विकास और होस्टिंग लागत पूर्व छात्रों और वरिष्ठों के स्वैच्छिक योगदान से कवर की जाती है जो भारत में मार्गदर्शन की कमी को दूर करने में विश्वास करते हैं।",
      category: "support" as const,
    },
    {
      question: "क्या आप व्यक्तिगत, 1-पर-1 करियर कोचिंग सत्र प्रदान करते हैं?",
      answer: "वर्तमान में, हम संरचित, स्व-सेवा ब्लूप्रिंट बनाने पर ध्यान केंद्रित करते हैं जो हजारों छात्रों तक पहुंच सकते हैं। हालांकि, हम कभी-कभी अपने वरिष्ठ सलाहकारों के साथ लाइव डिस्कॉर्ड प्रश्नोत्तर आयोजित करते हैं जहां छात्र सीधे सवाल पूछ सकते हैं।",
      category: "platform" as const,
    },
    {
      question: "मैं एक योगदानकर्ता या सलाहकार के रूप में कैसे शामिल हो सकता हूं?",
      answer: "यदि आपने कोई बड़ी परीक्षा (IIT, NIFT, NLU, आदि) पास की है और अपने क्षेत्र की वास्तविकताओं के बारे में भविष्य के उम्मीदवारों को चेतावनी देने वाली एक स्पष्ट मार्गदर्शिका लिखना चाहते हैं, तो हमारे इंस्टाग्राम या यूट्यूब चैनलों के माध्यम से हमसे संपर्क करें। हम हमेशा ईमानदार आकाओं के अपने नेटवर्क का विस्तार कर रहे हैं।",
      category: "support" as const,
    }
  ]
};

const CATEGORIES = ["all", "platform", "content", "support"] as const;

const CATEGORY_LABELS = {
  en: {
    all: "All FAQs",
    platform: "Platform & Vision",
    content: "Content Integrity",
    support: "Join & Support",
  },
  hi: {
    all: "सभी प्रश्न",
    platform: "मंच और दृष्टि",
    content: "सामग्री अखंडता",
    support: "जुड़ें और समर्थन",
  }
};

const localTranslations = {
  en: {
    aboutTitle: "About WhatNow",
    headlineMain: "India has no shortage of options.",
    headlineSub: "It has a shortage of ",
    headlineGlow: "honest guidance.",
    subDesc: "WhatNow is built to solve that. No referral fees, no hidden coaching agendas. Just raw career roadmaps.",
    problemTitle: "The Problem",
    problemHeadline: "A broken system making life's biggest decision",
    quote: "Every year, millions of Indian students pick their future paths based on outdated parent advice, coaching center marketing, or paid agents.",
    para1Title: "Outdated Standards",
    para1: "Teachers default to standard tracks. Parents repeat what was secure twenty years ago. Private colleges run marketing campaigns disguised as suitability tests, and agencies recommend whatever campus pays the highest referral check.",
    para2Title: "The Critical Question",
    para2: "Nobody is asking the only question that matters: Is this path actually right for you?",
    para3Title: "Real Career Realities",
    para3: "Not \"how do you crack the entrance\" — but should you be preparing for it at all? What does a designer's day look like at 30? What is sea time really like in the merchant navy? We build roadmaps that reveal the day-to-day realities of careers, so you decide based on fit, not myth.",
    commitmentTitle: "Our Commitment",
    commitmentHeadline: "Free. Unbiased. Always.",
    bullet1: "No referral commissions from colleges",
    bullet2: "No prep packages or test classes sold here",
    bullet3: "No sponsor banners or editorial placement",
    bullet4: "Always open, with zero email locks",
    commitPara1Title: "Structured Resource Index",
    commitPara1Sub: "INDEXING",
    commitPara1: "WhatNow is a structured career resource index. We are not a coaching institution. We write resources for fields that standard career counselors skip — design, merchant navy, law, architecture, defense, and beyond.",
    commitPara2Title: "Data-Backed Blueprints",
    commitPara2Sub: "METHODOLOGY",
    commitPara2: "We do something very simple and very difficult: we compile clear, data-backed blueprints showing eligibility matrices, syllabus realities, cost calculations, placement details, and parenting guidance guides.",
    commitPara3Title: "Transparent & Open Access",
    commitPara3Sub: "OUR VISION",
    commitPara3: "We believe high-quality, transparent guidance is a right. We keep it open.",
    structureTitle: "Structure",
    structureHeadline: "Three sections. One purpose.",
    structureSub: "Everything we write is organized into three interconnected resource indexes.",
    cardCareersTitle: "Careers",
    cardCareersDesc: "Deep-dive indexes into day-to-day realities. We explain what the role does, standard salary matrices, college entrance options, exit paths, and warnings regarding industry over-saturation.",
    cardCareersBadge: "suitability focused",
    cardExamsTitle: "Exams",
    cardExamsDesc: "Unbiased prep breakdowns. We cover details other sites hide — stream limitations, Board cutoffs, actual seats, cost details, and alternative exam backups in case score margins fall short.",
    cardExamsBadge: "roadmaps and backups",
    cardReadsTitle: "Reads",
    cardReadsDesc: "Opinionated articles focusing on non-linear topics: Is an IIT brand name worth a drop year? How do you have the \"creative field\" talk with engineering parents? Transitioning cities for work.",
    cardReadsBadge: "career perspectives",
    boundariesTitle: "Boundaries",
    boundariesHeadline: "What we don't do — and why",
    bento1Title: "No exam coaching material",
    bento1Desc: "Mock tests, video batches, coaching shortcuts — the internet has plenty of centers running test preps. We aren't adding to the noise. We outline standard resource paths so you self-study.",
    bento2Title: "No college commission charts",
    bento2Desc: "Universal rankings or campus recommendations are almost always backed by referral checks. We do not promote private institutes or list ranking metrics. The best college depends entirely on your parameters.",
    bento3Title: "We don't dictate choices",
    bento3Desc: "We give you data parameters and suite checks so you construct your decisions. Career paths are deeply personal. The choice should be yours.",
    bento4Title: "No subscription walls",
    bento4Desc: "Not now, not ever for core guidance roadmaps. The students who need honest, objective career advice the most are often those who can least afford counseling agencies.",
    focusTitle: "Focus",
    focusHeadline: "Careful layout. Vertical deep-dives.",
    focusSub: "We do not post shallow overviews. We run meticulous research on single vectors at a time.",
    focusPara1: "Our first completed blueprint vertical is UCEED — the design entrance examination for IITs. We chose it because design eligibility tables are notoriously dense, and coaching packages are heavily commercialized.",
    focusPara2: "From there, we expand to NIFT (fashion technology), CLAT (law), IMU CET (merchant navy), and NDA (defence). We run research across three platforms, but all final roadmaps consolidate here.",
    webHub: "Web Hub",
    youtube: "YouTube",
    instagram: "Instagram",
    faqTitle: "Questions",
    faqHeadline: "Common Questions",
    faqSub: "Got doubts? Use the filters or query search below to find answers to our operational model.",
    searchPlaceholder: "Search common questions...",
    noFaqTitle: "No FAQs Found",
    noFaqDesc: "We couldn't find any questions matching your category selection or search term.",
    resetSearch: "Reset Search Filters",
    closingDesc: "A student in a small town with no paid counselor should have access to the exact same transparent, data-backed career roadmaps as someone who pays counseling fees.",
    closingBold: "We are building that index. One career at a time.",
    closingHeadline: "One path at a time.",
    exploreBtn: "Explore Careers",
    examsBtn: "Browse Exams",
    readsBtn: "Read Editorial"
  },
  hi: {
    aboutTitle: "व्हाटनाव के बारे में",
    headlineMain: "भारत में विकल्पों की कोई कमी नहीं है।",
    headlineSub: "यहाँ कमी है तो बस ",
    headlineGlow: "ईमानदार मार्गदर्शन की।",
    subDesc: "व्हाटनाव को इसी समस्या को हल करने के लिए बनाया गया है। कोई रेफरल शुल्क नहीं, कोई छिपा हुआ कोचिंग एजेंडा नहीं। बस स्पष्ट करियर रोडमैप।",
    problemTitle: "समस्या",
    problemHeadline: "एक टूटी हुई व्यवस्था जो जीवन का सबसे बड़ा निर्णय ले रही है",
    quote: "हर साल, भारत के लाखों छात्र पुराने माता-पिता की सलाह, कोचिंग सेंटर के विज्ञापन या सशुल्क एजेंटों के आधार पर अपने भविष्य के रास्ते चुनते हैं।",
    para1Title: "पुराने मापदंड",
    para1: "शिक्षक सामान्य विकल्पों को ही डिफ़ॉपादक मान लेते हैं। माता-पिता वही दोहराते हैं जो बीस साल पहले सुरक्षित था। निजी कॉलेज उपयुक्तता परीक्षणों के रूप में विज्ञापन अभियान चलाते हैं, और एजेंसियां उसी कैंपस की सिफारिश करती हैं जो सबसे अधिक कमीशन देता है।",
    para2Title: "महत्वपूर्ण सवाल",
    para2: "कोई भी वह एकमात्र सवाल नहीं पूछ रहा है जो वास्तव में मायने रखता है: क्या यह रास्ता वास्तव में आपके लिए सही है?",
    para3Title: "करियर की वास्तविकताएं",
    para3: "यह नहीं कि \"प्रवेश परीक्षा कैसे क्रैक करें\" - बल्कि क्या आपको इसके लिए तैयारी करनी भी चाहिए? 30 साल की उम्र में एक डिजाइनर का दिन कैसा दिखता है? मर्चेंट नेवी में वास्तव में समुद्री समय कैसा होता है? हम ऐसे रोडमैप बनाते हैं जो करियर की वास्तविकताओं को प्रकट करते हैं, ताकि आप उपयुक्तता के आधार पर निर्णय लें, मिथक पर नहीं।",
    commitmentTitle: "हमारी प्रतिबद्धता",
    commitmentHeadline: "मुफ़्त। निष्पक्ष। हमेशा।",
    bullet1: "कॉलेजों से कोई रेफरल कमीशन नहीं",
    bullet2: "यहाँ कोई तैयारी पैकेज या टेस्ट क्लास नहीं बेची जाती",
    bullet3: "कोई प्रायोजक बैनर या संपादकीय स्थान नहीं",
    bullet4: "हमेशा खुला, बिना किसी ईमेल लॉक के",
    commitPara1Title: "व्यवस्थित संसाधन सूचकांक",
    commitPara1Sub: "अनुक्रमणिका",
    commitPara1: "व्हाटनाव एक व्यवस्थित करियर संसाधन सूचकांक है। हम कोई कोचिंग संस्थान नहीं हैं। हम उन क्षेत्रों के लिए संसाधन लिखते हैं जिन्हें सामान्य करियर सलाहकार छोड़ देते हैं — डिज़ाइन, मर्चेंट नेवी, कानून, वास्तुकला, रक्षा और उससे आगे।",
    commitPara2Title: "डेटा-समर्थित ब्लूप्रिंट",
    commitPara2Sub: "कार्यप्रणाली",
    commitPara2: "हम कुछ बहुत ही सरल और बहुत कठिन काम करते हैं: हम स्पष्ट, डेटा-समर्थित ब्लूप्रिंट संकलित करते हैं जो पात्रता मैट्रिक्स, पाठ्यक्रम की वास्तविकताएं, लागत गणना, प्लेसमेंट विवरण और माता-पिता के मार्गदर्शन मार्गदर्शिकाएं दिखाते हैं।",
    commitPara3Title: "पारदर्शी और खुली पहुंच",
    commitPara3Sub: "हमारा दृष्टिकोण",
    commitPara3: "हम मानते हैं कि उच्च गुणवत्ता वाला, पारदर्शी मार्गदर्शन एक अधिकार है। हम इसे खुला रखते हैं।",
    structureTitle: "संरचना",
    structureHeadline: "तीन खंड। एक उद्देश्य।",
    structureSub: "हम जो कुछ भी लिखते हैं वह तीन परस्पर जुड़े हुए संसाधन सूचकांकों में व्यवस्थित है।",
    cardCareersTitle: "करियर",
    cardCareersDesc: "दिन-प्रतिदिन की वास्तविकताओं में गहराई से जाने वाले सूचकांक। हम समझाते हैं कि भूमिका क्या करती है, मानक वेतन संरचना, कॉलेज प्रवेश विकल्प, बाहर निकलने के रास्ते और उद्योग के अति-संतृप्ति के बारे में चेतावनियां।",
    cardCareersBadge: "उपयुक्तता केंद्रित",
    cardExamsTitle: "परीक्षाएं",
    cardExamsDesc: "निष्पक्ष तैयारी विवरण। हम उन विवरणों को कवर करते हैं जिन्हें अन्य साइटें छिपाती हैं — स्ट्रीम की सीमाएं, बोर्ड कटऑफ, वास्तविक सीटें, लागत विवरण और स्कोर कम होने की स्थिति में वैकल्पिक बैकअप।",
    cardExamsBadge: "रोडमैप और बैकअप",
    cardReadsTitle: "लेख",
    cardReadsDesc: "गैर-रैखिक विषयों पर विचारोत्तेजक लेख: क्या एक आईआईटी ब्रांड नाम एक ड्रॉप वर्ष के लायक है? इंजीनियरिंग माता-पिता के साथ \"रचनात्मक क्षेत्र\" की बातचीत कैसे करें? काम के लिए शहरों को बदलना।",
    cardReadsBadge: "करियर दृष्टिकोण",
    boundariesTitle: "सीमाएं",
    boundariesHeadline: "हम क्या नहीं करते हैं — और क्यों",
    bento1Title: "कोई परीक्षा कोचिंग सामग्री नहीं",
    bento1Desc: "मॉक टेस्ट, वीडियो बैच, कोचिंग शॉर्टकट — इंटरनेट पर कई सेंटर टेस्ट प्रेप चला रहे हैं। हम इस शोर को बढ़ा नहीं रहे हैं। हम मानक संसाधन पथों की रूपरेखा तैयार करते हैं ताकि आप स्व-अध्ययन कर सकें।",
    bento2Title: "कोई कॉलेज कमीशन चार्ट नहीं",
    bento2Desc: "सार्वभौमिक रैंकिंग या कैंपस सिफारिशें लगभग हमेशा कमीशन द्वारा समर्थित होती हैं। हम निजी संस्थानों को बढ़ावा नहीं देते हैं या रैंकिंग मेट्रिक्स सूचीबद्ध नहीं करते हैं। सबसे अच्छा कॉलेज पूरी तरह से आपके मापदंडों पर निर्भर करता है।",
    bento3Title: "हम विकल्प तय नहीं करते",
    bento3Desc: "हम आपको डेटा पैरामीटर और सूट चेक देते हैं ताकि आप अपने निर्णय खुद ले सकें। करियर के रास्ते बेहद व्यक्तिगत होते हैं। चुनाव आपका होना चाहिए।",
    bento4Title: "कोई सदस्यता दीवारें नहीं",
    bento4Desc: "न अभी, न कभी भी मुख्य मार्गदर्शन रोडमैप के लिए। जिन छात्रों को ईमानदार, उद्देश्यपूर्ण करियर सलाह की सबसे अधिक आवश्यकता होती है, वे अक्सर वही होते हैं जो काउंसलिंग का खर्च नहीं उठा सकते।",
    focusTitle: "फोकस",
    focusHeadline: "सावधानीपूर्वक लेआउट। गहरा विश्लेषण।",
    focusSub: "हम सतही अवलोकन पोस्ट नहीं करते हैं। हम एक समय में एक ही श्रेणी पर सावधानीपूर्वक शोध करते हैं।",
    focusPara1: "हमारा पहला पूरा ब्लूप्रिंट UCEED है — IITs के लिए डिज़ाइन प्रवेश परीक्षा। हमने इसे इसलिए चुना क्योंकि डिज़ाइन पात्रता तालिकाएँ बेहद जटिल होती हैं, और कोचिंग पैकेजों का भारी व्यावसायिकरण किया गया है।",
    focusPara2: "वहाँ से, हम NIFT (फैशन तकनीक), CLAT (कानून), IMU CET (मर्चेंट नेवी), और NDA (रक्षा) तक विस्तार करते हैं। हम शोध चलाते हैं, लेकिन सभी अंतिम रोडमैप यहाँ समेकित होते हैं।",
    webHub: "वेब हब",
    youtube: "यूट्यूब",
    instagram: "इंस्टाग्राम",
    faqTitle: "प्रश्न",
    faqHeadline: "अक्सर पूछे जाने वाले प्रश्न",
    faqSub: "कोई संदेह है? हमारे परिचालन मॉडल के उत्तर खोजने के लिए नीचे दिए गए फ़िल्टर या खोज का उपयोग करें।",
    searchPlaceholder: "सामान्य प्रश्नों को खोजें...",
    noFaqTitle: "कोई प्रश्न नहीं मिले",
    noFaqDesc: "हमें आपकी श्रेणी चयन या खोज शब्द से मेल खाने वाले कोई प्रश्न नहीं मिले।",
    resetSearch: "खोज फ़िल्टर रीसेट करें",
    closingDesc: "एक छोटे शहर के छात्र को जिसके पास कोई सशुल्क काउंसलर नहीं है, उसी पारदर्शी, डेटा-समर्थित करियर रोडमैप तक पहुंच होनी चाहिए जो कोई भारी शुल्क देकर प्राप्त करता है।",
    closingBold: "हम उस सूचकांक का निर्माण कर रहे हैं। एक समय में एक करियर।",
    closingHeadline: "एक समय में एक मार्ग।",
    exploreBtn: "करियर खोजें",
    examsBtn: "परीक्षाएं देखें",
    readsBtn: "संपादकीय पढ़ें"
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const t = localTranslations[language];
  const STATS = STATS_DATA[language];
  const FAQS = FAQS_DATA[language];
  const categoryLabels = CATEGORY_LABELS[language] as Record<string, string>;

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question);
  };

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, FAQS]);

  // Framer Motion Variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-28 pb-20 md:pt-36 md:pb-28">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.16] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
          </svg>
          
          {/* Layered glowing blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[450px] h-[450px] bg-[#5563ED]/5 rounded-full blur-[85px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[350px] h-[350px] bg-[#ff5a1f]/5 rounded-full blur-[65px]" />

          {/* Smooth vector paths */}
          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="about-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="about-wave-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#about-wave-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#about-wave-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#5563ED" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10"
        >
          <p className="text-secondary text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-6">
            {t.aboutTitle}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.15] tracking-tight mb-8 text-neutral-dark max-w-5xl">
            {t.headlineMain}<br className="hidden md:block" />
            {t.headlineSub}
            <span className="relative inline-block whitespace-nowrap">
              <span className="text-primary">{t.headlineGlow}</span>
              <svg className="absolute -bottom-3 left-0 w-full h-3 text-secondary pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                  d="M 2 4 Q 50 8 98 4"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
                  d="M 6 6 Q 50 9 94 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-semibold">
            {t.subDesc}
          </p>
        </motion.div>
      </section>

      {/* ─── DYNAMIC STATISTICS SECTION ─── */}
      <section className="relative z-20 -mt-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/80 dark:border-slate-700 p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start"
              >
                <div className={`p-3.5 rounded-2.5xl mb-6 flex items-center justify-center border ${stat.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                  <Icon icon={stat.icon} className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-neutral-dark tracking-tight mb-2 flex items-center gap-1">
                  {stat.number}
                </h3>
                <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 mb-2">{stat.label}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 1: THE PROBLEM ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariants}
        className="border-b border-slate-200/50 dark:border-slate-800 py-20 md:py-28 px-6 lg:px-12 bg-[#F8F9FB] dark:bg-[#0B111C]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1">
              <p className="text-primary text-xs font-extrabold tracking-[0.2em] uppercase mb-4">{t.problemTitle}</p>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-neutral-dark tracking-tight">
                {t.problemHeadline}
              </h2>
              
              {/* Highlight Block Quote Card */}
              <div className="relative bg-white dark:bg-slate-800/50 border-l-4 border-secondary p-8 rounded-r-3xl rounded-bl-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="font-semibold italic text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex-1 lg:pt-10 space-y-8">
              {/* Point 1: Outdated Defaults */}
              <div className="flex gap-4 items-start bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700 p-6 rounded-[1.8rem] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-300 border border-rose-100 dark:border-rose-900/40 rounded-xl shrink-0">
                  <Icon icon="solar:shield-warning-bold-duotone" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-neutral-dark mb-1">{t.para1Title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{t.para1}</p>
                </div>
              </div>

              {/* Point 2: The Core Question (Highlighted Card) */}
              <div className="flex gap-4 items-start bg-primary/5 border border-primary/10 p-6 rounded-[1.8rem] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-primary text-white rounded-xl shrink-0">
                  <Icon icon="solar:help-question-bold-duotone" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-primary mb-1">{t.para2Title}</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                    {t.para2}
                  </p>
                </div>
              </div>

              {/* Point 3: Real Realities */}
              <div className="flex gap-4 items-start bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700 p-6 rounded-[1.8rem] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40 rounded-xl shrink-0">
                  <Icon icon="solar:compass-bold-duotone" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-neutral-dark mb-1">{t.para3Title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{t.para3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── SECTION 2: WHAT WE ARE ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariants}
        className="py-20 md:py-28 px-6 lg:px-12 bg-white dark:bg-[#0E111E]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-grow max-w-xl">
              <p className="text-primary text-xs font-extrabold tracking-[0.2em] uppercase mb-4">{t.commitmentTitle}</p>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-neutral-dark tracking-tight">
                {t.commitmentHeadline}
              </h2>
              <ul className="space-y-4">
                {[
                  t.bullet1,
                  t.bullet2,
                  t.bullet3,
                  t.bullet4
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold text-slate-700 dark:text-slate-300">
                    <span className="h-6 w-6 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-100/60 dark:border-emerald-900/40 shadow-sm">
                      <Icon icon="solar:check-read-bold" className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 lg:pl-16 lg:pt-4 border-t border-slate-100 dark:border-slate-800 lg:border-t-0 lg:border-l lg:border-slate-200/60 dark:lg:border-slate-700 relative">
              <div className="relative space-y-12">
                {/* Vertical connector line */}
                <div className="absolute left-[18px] top-8 bottom-8 w-[1.5px] bg-gradient-to-b from-primary/30 via-secondary/20 to-slate-200 pointer-events-none hidden sm:block" />

                {/* Node 1 */}
                <div className="relative pl-0 sm:pl-16 group cursor-default">
                  <div className="absolute left-0 top-1 h-9 w-9 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-400 font-extrabold text-xs flex items-center justify-center group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 shadow-sm hidden sm:flex">
                    01
                  </div>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-[10px] tracking-[0.2em] font-extrabold text-primary/70 uppercase block mb-1">
                      {t.commitPara1Sub}
                    </span>
                    <h4 className="text-xl font-black text-neutral-dark mb-2.5 group-hover:text-primary transition-colors duration-300">
                      {t.commitPara1Title}
                    </h4>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold group-hover:text-slate-700 transition-colors duration-300">
                      {t.commitPara1}
                    </p>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="relative pl-0 sm:pl-16 group cursor-default">
                  <div className="absolute left-0 top-1 h-9 w-9 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-400 font-extrabold text-xs flex items-center justify-center group-hover:border-secondary group-hover:text-secondary group-hover:bg-secondary/5 transition-all duration-300 shadow-sm hidden sm:flex">
                    02
                  </div>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-[10px] tracking-[0.2em] font-extrabold text-secondary/70 uppercase block mb-1">
                      {t.commitPara2Sub}
                    </span>
                    <h4 className="text-xl font-black text-neutral-dark mb-2.5 group-hover:text-secondary transition-colors duration-300">
                      {t.commitPara2Title}
                    </h4>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold group-hover:text-slate-700 transition-colors duration-300">
                      {t.commitPara2}
                    </p>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="relative pl-0 sm:pl-16 group cursor-default">
                  <div className="absolute left-0 top-1 h-9 w-9 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center transition-all duration-300 shadow-[0_6px_20px_rgba(16,185,129,0.25)] hidden sm:flex">
                    03
                  </div>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-[10px] tracking-[0.2em] font-extrabold text-emerald-600 uppercase block mb-1">
                      {t.commitPara3Sub}
                    </span>
                    <h4 className="text-xl font-black text-emerald-600 mb-2.5">
                      {t.commitPara3Title}
                    </h4>
                    <p className="text-base md:text-lg text-slate-800 dark:text-slate-100 leading-relaxed font-black tracking-tight">
                      {t.commitPara3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── SECTION 3: PILLARS ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariants}
        className="py-20 md:py-28 px-6 lg:px-12 bg-[#F8F9FB] dark:bg-[#0B111C] border-t border-slate-200/50 dark:border-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary text-xs font-extrabold tracking-[0.2em] uppercase mb-4">{t.structureTitle}</p>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-dark tracking-tight leading-tight">
              {t.structureHeadline}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-4">
              {t.structureSub}
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Careers */}
            <motion.div
              variants={cardVariants}
              className="relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden cursor-default"
            >
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 bg-orange-500/5 group-hover:bg-orange-500/10 pointer-events-none" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 border border-orange-100 dark:border-orange-900/40 flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <Icon icon="solar:compass-bold-duotone" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-neutral-dark mb-4 tracking-tight group-hover:text-primary transition-colors">{t.cardCareersTitle}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {t.cardCareersDesc}
                </p>
              </div>
              <span className="font-extrabold text-orange-500 text-xs uppercase tracking-wider relative z-10">
                {t.cardCareersBadge}
              </span>
            </motion.div>

            {/* Exams */}
            <motion.div
              variants={cardVariants}
              className="relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden cursor-default"
            >
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 bg-indigo-500/5 group-hover:bg-indigo-500/10 pointer-events-none" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-900/40 flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <Icon icon="solar:document-text-bold-duotone" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-neutral-dark mb-4 tracking-tight group-hover:text-primary transition-colors">{t.cardExamsTitle}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {t.cardExamsDesc}
                </p>
              </div>
              <span className="font-extrabold text-indigo-600 text-xs uppercase tracking-wider relative z-10">
                {t.cardExamsBadge}
              </span>
            </motion.div>

            {/* Reads */}
            <motion.div
              variants={cardVariants}
              className="relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden cursor-default"
            >
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 bg-purple-500/5 group-hover:bg-purple-500/10 pointer-events-none" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-purple-900/40 flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <Icon icon="solar:book-bookmark-bold-duotone" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-neutral-dark mb-4 tracking-tight group-hover:text-primary transition-colors">{t.cardReadsTitle}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {t.cardReadsDesc}
                </p>
              </div>
              <span className="font-extrabold text-purple-600 text-xs uppercase tracking-wider relative z-10">
                {t.cardReadsBadge}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── SECTION 4: BOUNDARIES (Dark Bento Section) ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariants}
        className="py-20 md:py-28 px-6 lg:px-12 bg-gradient-to-br from-[#091124] to-[#0D1B3D] text-white relative overflow-hidden"
      >
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none select-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl mb-16">
            <p className="text-slate-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4">{t.boundariesTitle}</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {t.boundariesHeadline}
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Bento Tile 1 */}
            <motion.div
              variants={cardVariants}
              className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/10 overflow-hidden group cursor-default"
            >
              <div className="text-slate-500 font-black text-5xl opacity-40 group-hover:opacity-85 transition-opacity duration-300 absolute -right-2 top-2 leading-none select-none">01</div>
              <h4 className="text-xl font-black mb-4 pr-12">{t.bento1Title}</h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {t.bento1Desc}
              </p>
            </motion.div>

            {/* Bento Tile 2 */}
            <motion.div
              variants={cardVariants}
              className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/10 overflow-hidden group cursor-default"
            >
              <div className="text-slate-500 font-black text-5xl opacity-40 group-hover:opacity-85 transition-opacity duration-300 absolute -right-2 top-2 leading-none select-none">02</div>
              <h4 className="text-xl font-black mb-4 pr-12">{t.bento2Title}</h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {t.bento2Desc}
              </p>
            </motion.div>

            {/* Bento Tile 3 */}
            <motion.div
              variants={cardVariants}
              className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/10 overflow-hidden group cursor-default"
            >
              <div className="text-slate-500 font-black text-5xl opacity-40 group-hover:opacity-85 transition-opacity duration-300 absolute -right-2 top-2 leading-none select-none">03</div>
              <h4 className="text-xl font-black mb-4 pr-12">{t.bento3Title}</h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {t.bento3Desc}
              </p>
            </motion.div>

            {/* Bento Tile 4 */}
            <motion.div
              variants={cardVariants}
              className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/10 overflow-hidden group cursor-default"
            >
              <div className="text-slate-500 font-black text-5xl opacity-40 group-hover:opacity-85 transition-opacity duration-300 absolute -right-2 top-2 leading-none select-none">04</div>
              <h4 className="text-xl font-black mb-4 pr-12">{t.bento4Title}</h4>
              <p className="text-slate-300 leading-relaxed text-sm">
                {t.bento4Desc}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── SECTION 5: WHERE WE ARE ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariants}
        className="py-20 md:py-28 px-6 lg:px-12 bg-white dark:bg-[#0E111E] border-b border-slate-200/50 dark:border-slate-800"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="flex-1">
            <p className="text-primary text-xs font-extrabold tracking-[0.2em] uppercase mb-4">{t.focusTitle}</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-neutral-dark tracking-tight">
              {t.focusHeadline}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
              {t.focusSub}
            </p>
            
            {/* Social pills */}
            <div className="flex flex-wrap gap-3">
              <span className="border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-2 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-300">
                <Icon icon="solar:global-line-duotone" className="w-4 h-4 text-primary" /> {t.webHub}
              </span>
              <span className="border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-2 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-300">
                <Icon icon="solar:play-circle-line-duotone" className="w-4 h-4 text-red-500" /> {t.youtube}
              </span>
              <span className="border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-2 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-300">
                <Icon icon="solar:camera-line-duotone" className="w-4 h-4 text-pink-500" /> {t.instagram}
              </span>
            </div>
          </div>
          
          <div className="flex-1 space-y-6 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium md:border-l md:border-slate-100 dark:md:border-slate-800 md:pl-16">
            <p>{t.focusPara1}</p>
            <p>{t.focusPara2}</p>
          </div>
        </div>
      </motion.section>

      {/* ─── SECTION 7: STATEFUL FAQ ACCORDION (With Categorization & Search) ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariants}
        className="py-20 md:py-28 px-6 lg:px-12 bg-slate-50 dark:bg-[#0B111C] border-b border-slate-200/60 dark:border-slate-800"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-xs font-extrabold tracking-[0.2em] uppercase mb-4">{t.faqTitle}</p>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-dark tracking-tight">
              {t.faqHeadline}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-semibold mt-4 text-sm sm:text-base">
              {t.faqSub}
            </p>
          </div>

          {/* Search and Category Filter Box */}
          <div className="max-w-3xl mx-auto mb-10 space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-10 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary rounded-2xl shadow-sm focus:outline-none text-sm text-neutral-dark font-semibold placeholder:text-slate-400 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-8 justify-center border-b border-slate-200/50 dark:border-slate-800 pb-0 mb-10">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative pb-4 text-xs font-extrabold uppercase tracking-widest transition-colors duration-300 cursor-pointer whitespace-nowrap select-none focus:outline-none ${
                      isActive
                        ? "text-neutral-dark font-black"
                        : "text-slate-400 hover:text-neutral-dark"
                    }`}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <span className="relative z-10">{categoryLabels[cat]}</span>
                    
                    {/* Underline indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFaqCategoryUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full z-20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQs List */}
          <div className="max-w-3xl mx-auto space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = openFaq === faq.question;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      key={faq.question}
                      className={`border rounded-2xl transition-all duration-300 ${
                        isOpen ? "bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 shadow-[0_4px_25px_rgba(0,0,0,0.015)]" : "bg-white dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-700 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.question)}
                        className="flex items-center justify-between w-full p-6 text-left font-black text-neutral-dark hover:text-primary transition-colors cursor-pointer focus:outline-none"
                      >
                        <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                        <Icon
                           icon="solar:alt-arrow-down-linear"
                          className={`w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-semibold border-t border-slate-100/80 dark:border-slate-800 mt-1">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  layout
                  className="text-center py-12 px-6 bg-white dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl"
                >
                  <Icon icon="solar:info-circle-bold-duotone" className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                  <h4 className="text-base font-black text-neutral-dark mb-1">{t.noFaqTitle}</h4>
                  <p className="text-slate-400 text-xs font-semibold max-w-sm mx-auto mb-4">
                    {t.noFaqDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-extrabold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    {t.resetSearch}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* ─── CLOSING SECTION ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariants}
        className="relative py-28 md:py-40 px-6 lg:px-12 bg-neutral-dark dark:bg-primary dark:border-primary text-center overflow-hidden flex flex-col items-center justify-center"
      >
        {/* Subtle grid backdrop */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="about-close-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#about-close-grid)" />
        </svg>

        {/* Massive primary glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(85,99,237,0.15)_0%,transparent_60%)] pointer-events-none select-none"></div>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 relative z-10 font-medium">
          {t.closingDesc}
          <br /><br />
          <span className="font-extrabold text-white">{t.closingBold}</span>
        </p>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-16 tracking-tight relative z-10 leading-tight">
          {t.closingHeadline}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 w-full sm:w-auto">
          <Link href="/careers" className="bg-primary hover:bg-indigo-600 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 cursor-pointer">
            {t.exploreBtn}
          </Link>
          <Link href="/exams" className="bg-transparent border-2 border-white/20 hover:border-white/50 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer">
            {t.examsBtn}
          </Link>
          <Link href="/reads" className="bg-transparent border-2 border-white/20 hover:border-white/50 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer">
            {t.readsBtn}
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
