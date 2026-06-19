"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const EMAIL = "indiawhatnow@gmail.com";

const translations = {
  en: {
    pageLabel: "Legal",
    title: "Privacy Policy",
    lastUpdated: "Last updated: 17 June 2026",
    summaryMode: "Summary",
    legalMode: "Full Policy",
    tocTitle: "Table of Contents",
    backToHome: "Back to Home",
    termsOfService: "Terms of Service",
    editorialGuidelines: "Editorial Guidelines",
    quickSummaryTitle: "Quick Privacy Summary",
    quickSummarySubtitle: "What you need to know in simple terms. We respect your privacy completely.",
    summaries: [
      {
        title: "No Account Required",
        desc: "You can read every guide without signing in. There is no account to create, no paywall, and no email gate."
      },
      {
        title: "Zero Cookies Set",
        desc: "We set zero HTTP tracking cookies. Only your local settings (language & theme) are stored inside your browser."
      },
      {
        title: "No Ads or Profiling",
        desc: "We do not run advertising networks, build tracking profiles, or sell/rent your personal data to anyone."
      },
      {
        title: "Safe for Minors",
        desc: "No behavioral tracking of children. Strictly compliant with India's DPDP Act, 2023 protection norms."
      }
    ],
    toc: [
      { id: "overview", label: "Overview" },
      { id: "what-we-collect", label: "What We Collect" },
      { id: "why-we-process", label: "Why We Process It" },
      { id: "children", label: "Children's Data" },
      { id: "cookies", label: "Cookies & Local Storage" },
      { id: "third-parties", label: "Third Parties" },
      { id: "retention", label: "Data Retention" },
      { id: "security", label: "Security" },
      { id: "your-rights", label: "Your Rights" },
      { id: "grievance", label: "Grievance Redressal" },
      { id: "transfers", label: "International Transfers" },
      { id: "changes", label: "Changes" },
      { id: "contact", label: "Contact" },
    ],
    sections: {
      overview: {
        heading: "1. Overview",
        body: `WhatNow ("WhatNow", "we", "us") is operated by Vasu, an individual based in Hyderabad, Telangana, India. We publish free, independent career and exam guidance for students in India.

This policy explains what personal data we handle, why, and the choices you have. For the purposes of India's Digital Personal Data Protection Act, 2023 ("DPDP Act"), we act as a Data Fiduciary for the limited personal data described below.

Our short version: WhatNow is built to be read without signing in. There is no account to create, no paywall, and no email gate. We do not sell your data, we do not run advertising networks, and we do not build advertising profiles of our readers.`
      },
      whatWeCollect: {
        heading: "2. What We Collect",
        intro: "We collect very little. The full list is below:",
        items: [
          {
            label: "Server and technical logs",
            detail: "When you visit, our hosting provider (Vercel, Inc.) automatically processes technical data such as your IP address, browser and device type, and the pages requested. This is standard infrastructure behaviour and is handled by Vercel on our behalf. We do not receive or store these logs separately from Vercel's infrastructure."
          },
          {
            label: "Language and theme preferences",
            detail: "We store your chosen language (EN/हि) and colour theme in your browser's localStorage so the site remembers your settings between visits. This data lives entirely on your device and is never transmitted to us or any server."
          },
          {
            label: "Notice read state",
            detail: "We store the IDs of site notices you have dismissed in your browser's localStorage, so we do not show them again. This data stays on your device only."
          },
          {
            label: "Things you choose to send us",
            detail: "If you email us or join our community on Discord, we receive whatever you voluntarily send (your message and contact details). Discord is a third-party service governed by its own privacy policy."
          }
        ],
        noCollect: "We do not collect names, phone numbers, addresses, exam scores, or any personal data through the website itself. We do not ask you to create an account."
      },
      whyWeProcess: {
        heading: "3. Why We Process It",
        body: "We process the above data to operate, secure, and improve the site. Where the law requires your consent we ask for it; otherwise we rely on the limited legitimate uses recognised under the DPDP Act (such as keeping the service running and secure). You can withdraw consent where it applies, as easily as you gave it."
      },
      children: {
        heading: "4. Children's Data",
        intro: "WhatNow is written for students, and we know many of our readers are under 18. We take this seriously:",
        items: [
          "We minimise data and are built to be used without an account or any sign-up, so we do not knowingly collect personal data directly from children.",
          "We do not perform behavioural tracking or profiling of children, and we do not run targeted advertising directed at children.",
          "We do not knowingly process a child's personal data without verifiable consent from a parent or guardian, as required by the DPDP Act.",
          "If you are a parent or guardian and believe we hold personal data about your child, contact indiawhatnow@gmail.com and we will review and delete it."
        ]
      },
      cookies: {
        heading: "5. Cookies & Local Storage",
        body: `WhatNow does not set any HTTP cookies.

We use browser localStorage — a client-side storage mechanism that stays on your device and is never sent to our servers — for three purposes:

• Language preference (key: "language") — remembers whether you prefer EN or हि.
• Colour theme (key: "whatnow-vibe-theme") — remembers your chosen colour theme.
• Dismissed notices (key: "whatnow-admin-notices-read") — remembers which site notices you have already seen and dismissed.

All three items are strictly functional. They exist to make the site work as you expect. None of them are used for tracking, analytics, or advertising.

We run no analytics service and no third-party tracking scripts. There are no advertising networks, no cross-site trackers, and no profiling of visitors.

Third-party links: when you click a link to Discord, YouTube, or Instagram, you leave WhatNow and those platforms set their own cookies under their own policies. We do not embed their content as iframes, so no third-party cookies are set while you are on our site.`
      },
      thirdParties: {
        heading: "6. Third Parties",
        body: `We rely on a small number of providers to run WhatNow:

• Vercel, Inc. — our hosting and infrastructure provider. Vercel processes server-level technical data (IP addresses, request metadata) as part of providing hosting services. See Vercel's privacy policy for details.
• next/font (Google Fonts) — we use the Next.js font system, which downloads and self-hosts font files at build time. There is no runtime request from your browser to Google's servers.

We link to Discord, YouTube, and Instagram. When you interact with those platforms, your data is handled under their own policies. We do not sell or rent personal data to anyone.`
      },
      retention: {
        heading: "7. Data Retention",
        body: `We keep personal data only as long as needed for the purpose it was collected.

• Server logs are retained by Vercel for operational and security purposes under Vercel's data retention policy.
• localStorage data stays on your device until you clear it or we remove the keys in a future update. It is not retained on our servers.
• Correspondence (emails) is retained as long as reasonably needed to handle your enquiry, then deleted.`
      },
      security: {
        heading: "8. Security",
        body: "We apply reasonable technical and organisational measures appropriate to the limited data we handle — including HTTPS for all traffic and relying on Vercel's hardened hosting infrastructure. No system is perfectly secure, but we work to protect what we hold. In the event of a personal data breach, we will notify affected individuals and, where required by law, the relevant authorities within 72 hours."
      },
      yourRights: {
        heading: "9. Your Rights",
        body: `As a Data Principal under the DPDP Act you can ask us to:

• Access a summary of the personal data we hold about you.
• Correct or complete it.
• Erase it.
• Nominate another person to exercise your rights in the event of death or incapacity.

To exercise any of these rights, or to raise a grievance, contact our Grievance Officer below. We will respond within a reasonable time as required by law.`
      },
      grievance: {
        heading: "10. Grievance Redressal",
        body: `Grievance Officer: Vasu
Email: indiawhatnow@gmail.com

If you are not satisfied with our response, you may escalate to the Data Protection Board of India.`
      },
      transfers: {
        heading: "11. International Transfers",
        body: "Some of our providers (including Vercel) may process data on servers outside India. Where that happens, it is done in line with the conditions permitted under Indian law."
      },
      changes: {
        heading: "12. Changes",
        body: 'We may update this policy; we will change the "Last updated" date at the top of this page. For material changes, we will note it on the site.'
      },
      contact: {
        heading: "13. Contact",
        body: `Email: indiawhatnow@gmail.com
Address: Hyderabad, Telangana, India`
      }
    }
  },
  hi: {
    pageLabel: "कानूनी",
    title: "गोपनीयता नीति",
    lastUpdated: "अंतिम अपडेट: 17 जून 2026",
    summaryMode: "संक्षिप्त विवरण",
    legalMode: "पूर्ण नीति",
    tocTitle: "विषय सूची",
    backToHome: "होम पर वापस",
    termsOfService: "सेवा की शर्तें",
    editorialGuidelines: "संपादकीय दिशानिर्देश",
    quickSummaryTitle: "त्वरित गोपनीयता सारांश",
    quickSummarySubtitle: "सरल शब्दों में आपको क्या जानने की आवश्यकता है। हम आपकी गोपनीयता का पूरा सम्मान करते हैं।",
    summaries: [
      {
        title: "कोई अकाउंट आवश्यक नहीं",
        desc: "आप बिना साइन-इन किए हर गाइड पढ़ सकते हैं। कोई अकाउंट बनाने, पेवॉल या ईमेल गेट की आवश्यकता नहीं है।"
      },
      {
        title: "शून्य कुकीज़ सेट",
        desc: "हम शून्य HTTP ट्रैकिंग कुकीज़ सेट करते हैं। केवल आपकी भाषा और थीम सेटिंग्स आपके ब्राउज़र में संग्रहीत हैं।"
      },
      {
        title: "कोई विज्ञापन या प्रोफाइलिंग नहीं",
        desc: "हम विज्ञापन नेटवर्क नहीं चलाते, ट्रैकिंग प्रोफाइल नहीं बनाते, या आपका व्यक्तिगत डेटा किसी को बेचते/किराए पर नहीं देते।"
      },
      {
        title: "नाबालिगों के लिए सुरक्षित",
        desc: "बच्चों की कोई व्यावहारिक ट्रैकिंग नहीं। भारत के DPDP अधिनियम, 2023 के संरक्षण मानदंडों का कड़ाई से पालन किया जाता है।"
      }
    ],
    toc: [
      { id: "overview", label: "अवलोकन" },
      { id: "what-we-collect", label: "हम क्या एकत्र करते हैं" },
      { id: "why-we-process", label: "संसाधन का कारण" },
      { id: "children", label: "बच्चों का डेटा" },
      { id: "cookies", label: "कुकीज़ और लोकल स्टोरेज" },
      { id: "third-parties", label: "तृतीय पक्ष" },
      { id: "retention", label: "डेटा प्रतिधारण" },
      { id: "security", label: "डेटा सुरक्षा" },
      { id: "your-rights", label: "आपके अधिकार" },
      { id: "grievance", label: "शिकायत निवारण" },
      { id: "transfers", label: "अंतर्राष्ट्रीय स्थानांतरण" },
      { id: "changes", label: "परिवर्तन" },
      { id: "contact", label: "संपर्क" },
    ],
    sections: {
      overview: {
        heading: "1. अवलोकन",
        body: `WhatNow ("WhatNow", "हम", "हमें") का संचालन हैदराबाद, Telangana, भारत में रहने वाले वासु द्वारा किया जाता है। हम भारत में छात्रों के लिए मुफ्त, स्वतंत्र करियर और परीक्षा मार्गदर्शन प्रकाशित करते हैं।

यह नीति बताती है कि हम किस व्यक्तिगत डेटा को संभालते हैं, क्यों, और आपके पास क्या विकल्प हैं। भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 ("DPDP अधिनियम") के उद्देश्यों के लिए, हम नीचे वर्णित सीमित व्यक्तिगत डेटा के लिए एक डेटा फिड्यूशरी के रूप में कार्य करते हैं।

हमारा संक्षिप्त रूप: WhatNow बिना साइन इन किए पढ़ने के लिए बनाया गया है। कोई अकाउंट बनाने, पेवॉल या ईमेल गेट की आवश्यकता नहीं है। हम आपका डेटा नहीं बेचते हैं, हम विज्ञापन नेटवर्क नहीं चलाते हैं, और हम अपने पाठकों के विज्ञापन प्रोफाइल नहीं बनाते हैं।`
      },
      whatWeCollect: {
        heading: "2. हम क्या एकत्र करते हैं",
        intro: "हम बहुत कम डेटा एकत्र करते हैं। पूरी सूची नीचे दी गई है:",
        items: [
          {
            label: "सर्वर और तकनीकी लॉग",
            detail: "जब आप विज़िट करते हैं, तो हमारा होस्टिंग प्रदाता (Vercel, Inc.) स्वचालित रूप से तकनीकी डेटा जैसे आपका आईपी पता, ब्राउज़र और डिवाइस प्रकार, और अनुरोधित पृष्ठों को संसाधित करता है। यह मानक बुनियादी ढांचा व्यवहार है और हमारी ओर से वर्सेल द्वारा नियंत्रित किया जाता है। हम वर्सेल के बुनियादी ढांचे से अलग इन लॉग को प्राप्त या संग्रहीत नहीं करते हैं।"
          },
          {
            label: "भाषा और थीम प्राथमिकताएं",
            detail: "हम आपकी चुनी हुई भाषा (EN/हि) और रंग थीम को आपके ब्राउज़र के localStorage में संग्रहीत करते हैं ताकि साइट विज़िट के बीच आपकी सेटिंग्स याद रखे। यह डेटा पूरी तरह से आपके डिवाइस पर रहता है और कभी भी हमें या किसी सर्वर को नहीं भेजा जाता है।"
          },
          {
            label: "सूचना पट्ट स्थिति",
            detail: "हम उन साइट सूचनाओं की आईडी संग्रहीत करते हैं जिन्हें आपने अपने ब्राउज़र के localStorage में खारिज कर दिया है, ताकि हम उन्हें दोबारा न दिखाएं। यह डेटा केवल आपके डिवाइस पर रहता है।"
          },
          {
            label: "चीजें जो आप हमें भेजना चुनते हैं",
            detail: "यदि आप हमें ईमेल करते हैं या डिस्कॉर्ड पर हमारे समुदाय में शामिल होते हैं, तो हमें वह प्राप्त होता है जो आप स्वेच्छा से भेजते हैं (आपका संदेश और संपर्क विवरण)। डिस्कॉर्ड एक तृतीय-पक्ष सेवा है जो अपनी गोपनीयता नीति द्वारा नियंत्रित होती है।"
          }
        ],
        noCollect: "हम वेबसाइट के माध्यम से नाम, फोन नंबर, पते, परीक्षा स्कोर या कोई भी व्यक्तिगत डेटा एकत्र नहीं करते हैं। हम आपसे कोई अकाउंट बनाने के लिए नहीं कहते हैं।"
      },
      whyWeProcess: {
        heading: "3. हम इसे क्यों संसाधित करते हैं",
        body: "हम साइट को संचालित करने, सुरक्षित करने और सुधारने के लिए उपरोक्त डेटा को संसाधित करते हैं। जहां कानून को आपकी सहमति की आवश्यकता होती है, हम इसके लिए पूछते हैं; अन्यथा हम DPDP अधिनियम के तहत मान्यता प्राप्त सीमित वैध उपयोगों (जैसे सेवा को चालू और सुरक्षित रखना) पर भरोसा करते हैं। आप लागू होने पर सहमति वापस ले सकते हैं, जितनी आसानी से आपने दी थी।"
      },
      children: {
        heading: "4. बच्चों का डेटा",
        intro: "WhatNow छात्रों के लिए लिखा गया है, और हम जानते हैं कि हमारे कई पाठक 18 वर्ष से कम आयु के हैं। हम इसे गंभीरता से लेते हैं:",
        items: [
          "हम डेटा को कम से कम करते हैं और बिना किसी अकाउंट या साइन-अप के उपयोग करने के लिए बनाए गए हैं, इसलिए हम जानबूझकर बच्चों से सीधे व्यक्तिगत डेटा एकत्र नहीं करते हैं।",
          "हम बच्चों की व्यावहारिक ट्रैकिंग या प्रोफाइलिंग नहीं करते हैं, और हम बच्चों को निर्देशित लक्षित विज्ञापन नहीं चलाते हैं।",
          "हम DPDP अधिनियम द्वारा आवश्यक माता-पिता या अभिभावक की सत्यापन योग्य सहमति के बिना किसी बच्चे के व्यक्तिगत डेटा को जानबूझकर संसाधित नहीं करते हैं।",
          "यदि आप माता-पिता या अभिभावक हैं और मानते हैं कि हमारे पास आपके बच्चे का व्यक्तिगत डेटा है, तो indiawhatnow@gmail.com पर संपर्क करें और हम इसकी समीक्षा करेंगे और इसे हटा देंगे।"
        ]
      },
      cookies: {
        heading: "5. कुकीज़ और लोकल स्टोरेज",
        body: `WhatNow कोई HTTP कुकीज़ सेट नहीं करता है।

हम ब्राउज़र localStorage का उपयोग करते हैं — एक क्लाइंट-साइड स्टोरेज तंत्र जो आपके डिवाइस पर रहता है और हमारे सर्वर पर कभी नहीं भेजा जाता है — तीन उद्देश्यों के लिए:

• भाषा प्राथमिकता (कुंजी: "language") — याद रखता है कि आप EN या हि पसंद करते हैं।
• रंग थीम (कुंजी: "whatnow-vibe-theme") — आपकी चुनी हुई रंग थीम को याद रखता है।
• खारिज की गई सूचनाएं (कुंजी: "whatnow-admin-notices-read") — याद रखता है कि आपने किन साइट सूचनाओं को पहले ही देख लिया है और खारिज कर दिया है।

तीनों वस्तुएं विशुद्ध रूप से कार्यात्मक हैं। वे साइट को आपकी अपेक्षा के अनुरूप काम करने के लिए मौजूद हैं। इनमें से किसी का भी उपयोग ट्रैकिंग, विश्लेषण या विज्ञापन के लिए नहीं किया जाता है।

हम कोई विश्लेषण सेवा और कोई तृतीय-पक्ष ट्रैकिंग स्क्रिप्ट नहीं चलाते हैं। कोई विज्ञापन नेटवर्क नहीं है, कोई क्रॉस-साइट ट्रैकर नहीं है, और विज़िटर्स की कोई प्रोफाइलिंग नहीं है।

तृतीय-पक्ष लिंक: जब आप डिस्कॉर्ड, यूट्यूब या इंस्टाग्राम के लिंक पर क्लिक करते हैं, तो आप WhatNow छोड़ देते हैं और वे प्लेटफॉर्म अपनी नीतियों के तहत अपनी खुद की कुकीज़ सेट करते हैं। हम उनकी सामग्री को आईफ़्रेम के रूप में एम्बेड नहीं करते हैं, इसलिए जब आप हमारी साइट पर होते हैं तो कोई तृतीय-पक्ष कुकीज़ सेट नहीं होती हैं।`
      },
      thirdParties: {
        heading: "6. तृतीय पक्ष",
        body: `हम WhatNow को चलाने के लिए सीमित संख्या में प्रदाताओं पर भरोसा करते हैं:

• Vercel, Inc. — हमारा होस्टिंग और बुनियादी ढांचा प्रदाता। वर्सेल होस्टिंग सेवाएं प्रदान करने के हिस्से के रूप में सर्वर-स्तरीय तकनीकी डेटा (आईपी पते, अनुरोध मेटाडेटा) को संसाधित करता है। विवरण के लिए वर्सेल की गोपनीयता नीति देखें।
• next/font (Google Fonts) — हम नेक्स्ट.जेएस फ़ॉन्ट सिस्टम का उपयोग करते हैं, जो बिल्ड समय पर फ़ॉन्ट फाइलों को डाउनलोड और स्व-होस्ट करता है। आपके ब्राउज़र से Google के सर्वर पर कोई रनटाइम अनुरोध नहीं होता है।

हम डिस्कॉर्ड, यूट्यूब और इंस्टाग्राम से जुड़ते हैं। जब आप उन प्लेटफॉर्मों के साथ बातचीत करते हैं, तो आपके डेटा को उनकी अपनी नीतियों के तहत संभाला जाता है। हम किसी को भी व्यक्तिगत डेटा बेचते या किराए पर नहीं देते हैं।`
      },
      retention: {
        heading: "7. डेटा प्रतिधारण",
        body: `हम व्यक्तिगत डेटा को केवल तब तक रखते हैं जब तक उसे एकत्र करने के उद्देश्य के लिए आवश्यक हो।

• वर्सेल की डेटा प्रतिधारण नीति के तहत परिचालन और सुरक्षा उद्देश्यों के लिए वर्सेल द्वारा सर्वर लॉग बनाए रखे जाते हैं।
• localStorage डेटा आपके डिवाइस पर तब तक रहता है जब तक आप इसे साफ़ नहीं करते या हम भविष्य के अपडेट में कुंजियों को हटा नहीं देते। यह हमारे सर्वरों पर प्रतिधारित नहीं होता है।
• पत्राचार (ईमेल) को आपकी पूछताछ को संभालने के लिए उचित रूप से आवश्यक समय तक रखा जाता है, फिर हटा दिया जाता है।`
      },
      security: {
        heading: "8. सुरक्षा",
        body: "हम अपने द्वारा संभाले जाने वाले सीमित डेटा के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करते हैं — जिसमें सभी ट्रैफ़िक के लिए HTTPS और वर्सेल के सुरक्षित होस्टिंग बुनियादी ढांचे पर भरोसा करना शामिल है। कोई भी प्रणाली पूरी तरह से सुरक्षित नहीं है, लेकिन हम अपने पास मौजूद डेटा की सुरक्षा के लिए काम करते हैं। व्यक्तिगत डेटा उल्लंघन की स्थिति में, हम प्रभावित व्यक्तियों को और जहां कानून द्वारा आवश्यक हो, संबंधित अधिकारियों को 72 घंटों के भीतर सूचित करेंगे।"
      },
      yourRights: {
        heading: "9. आपके अधिकार",
        body: `DPDP अधिनियम के तहत एक डेटा प्रिंसिपल के रूप में आप हमसे कह सकते हैं:

• हमारे पास मौजूद आपके व्यक्तिगत डेटा के सारांश तक पहुँचें।
• इसे सुधारें या पूरा करें।
• इसे मिटा दें।
• मृत्यु या अक्षमता की स्थिति में अपने अधिकारों का प्रयोग करने के लिए किसी अन्य व्यक्ति को नामित करें।

इनमें से किसी भी अधिकार का प्रयोग करने के लिए, या कोई शिकायत दर्ज करने के लिए, नीचे हमारे शिकायत अधिकारी से संपर्क करें। हम कानून द्वारा आवश्यक उचित समय के भीतर जवाब देंगे।`
      },
      grievance: {
        heading: "10. शिकायत निवारण",
        body: `शिकायत अधिकारी: वासु
ईमेल: indiawhatnow@gmail.com

यदि आप हमारे जवाब से संतुष्ट नहीं हैं, तो आप भारतीय डेटा संरक्षण बोर्ड में शिकायत दर्ज कर सकते हैं।`
      },
      transfers: {
        heading: "11. अंतर्राष्ट्रीय स्थानांतरण",
        body: "हमारे कुछ प्रदाता (वर्सेल सहित) भारत के बाहर सर्वरों पर डेटा संसाधित कर सकते हैं। जहां ऐसा होता है, वह भारतीय कानून के तहत अनुमत शर्तों के अनुरूप किया जाता है।"
      },
      changes: {
        heading: "12. परिवर्तन",
        body: 'हम इस नीति को अपडेट कर सकते हैं; हम इस पृष्ठ के शीर्ष पर "अंतिम अपडेट" की तिथि बदल देंगे। महत्वपूर्ण परिवर्तनों के लिए, हम इसे साइट पर नोट करेंगे।'
      },
      contact: {
        heading: "13. संपर्क",
        body: `ईमेल: indiawhatnow@gmail.com
पता: हैदराबाद, तेलंगाना, भारत`
      }
    }
  }
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [mode, setMode] = useState<"summary" | "legal">("summary");

  return (
    <main className="flex-grow bg-slate-50 dark:bg-[#0B111C] min-h-screen relative overflow-hidden">
      {/* Decorative Blur Background Globs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]" />
        <div className="absolute top-[400px] -left-40 w-[600px] h-[600px] rounded-full bg-secondary/5 dark:bg-secondary/5 blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="privacy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#privacy-grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#0E111E] pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>›</span>
            <span className="text-primary">{t.pageLabel}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-4">
            {t.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-8">{t.lastUpdated}</p>

          {/* Mode Toggle Switch */}
          <div className="flex bg-slate-100/80 dark:bg-slate-800/60 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 w-fit mx-auto relative">
            <button
              onClick={() => setMode("summary")}
              className={`relative px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                mode === "summary" ? "text-white" : "text-slate-550 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {mode === "summary" && (
                <motion.div
                  layoutId="activePrivacyMode"
                  className="absolute inset-0 bg-primary rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon icon="solar:document-text-bold-duotone" className="w-4 h-4" />
                {t.summaryMode}
              </span>
            </button>
            <button
              onClick={() => setMode("legal")}
              className={`relative px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                mode === "legal" ? "text-white" : "text-slate-550 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {mode === "legal" && (
                <motion.div
                  layoutId="activePrivacyMode"
                  className="absolute inset-0 bg-primary rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon icon="solar:shield-check-bold-duotone" className="w-4 h-4" />
                {t.legalMode}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {mode === "summary" ? (
            <motion.div
              key="summary-mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Summary Cards Header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                  {t.quickSummaryTitle}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mt-2">
                  {t.quickSummarySubtitle}
                </p>
              </div>

              {/* Grid Layout for Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {t.summaries.map((item, idx) => {
                  const icons = [
                    "solar:user-block-bold-duotone",
                    "solar:cookie-bold-duotone",
                    "solar:shield-warning-bold-duotone",
                    "solar:users-group-two-rounded-bold-duotone"
                  ];
                  const colors = [
                    "text-indigo-650 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/40",
                    "text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/40",
                    "text-rose-650 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900/40",
                    "text-emerald-650 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/40"
                  ];
                  return (
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      key={idx}
                      className="bg-white dark:bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-slate-200/80 dark:border-slate-700/80 p-8 shadow-xs text-left"
                    >
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shrink-0 ${colors[idx]}`}>
                        <Icon icon={icons[idx]} className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Summary Footer Hint */}
              <div className="text-center mt-10">
                <button
                  onClick={() => setMode("legal")}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <span>Read Full Legal Document</span>
                  <Icon icon="ph:arrow-right" className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="legal-mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row gap-12"
            >
              {/* Table of Contents Sidebar */}
              <aside className="lg:w-64 shrink-0">
                <nav className="lg:sticky lg:top-28 bg-white dark:bg-slate-800/30 border border-slate-250/60 dark:border-slate-800 rounded-[2rem] p-6 shadow-xs">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-1.5">
                    <Icon icon="solar:list-down-minimalistic-bold-duotone" className="text-primary w-4 h-4" />
                    <span>{t.tocTitle}</span>
                  </p>
                  <ul className="space-y-2">
                    {t.toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-xs md:text-sm text-slate-500 dark:text-slate-400 hover:text-primary font-bold transition-colors block py-1"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Legal Text Article */}
              <article className="flex-1 min-w-0 bg-white dark:bg-slate-800/20 border border-slate-200/80 dark:border-slate-800 rounded-[2.5rem] p-8 sm:p-12 shadow-xs">
                
                {/* 1. Overview */}
                <section id="overview" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.overview.heading}
                  </h2>
                  {t.sections.overview.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-450 text-sm md:text-base leading-relaxed mb-4 font-semibold">
                      {para}
                    </p>
                  ))}
                </section>

                {/* 2. What We Collect */}
                <section id="what-we-collect" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.whatWeCollect.heading}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-450 text-sm md:text-base leading-relaxed mb-6 font-semibold">
                    {t.sections.whatWeCollect.intro}
                  </p>
                  <ul className="space-y-5 mb-8">
                    {t.sections.whatWeCollect.items.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-left">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="text-sm md:text-base text-slate-655 dark:text-slate-400 font-semibold leading-relaxed">
                          <strong className="text-slate-900 dark:text-slate-100 font-black">{item.label}</strong>{" "}
                          — {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-2xl border border-emerald-100 dark:border-emerald-950/40 bg-emerald-50 dark:bg-emerald-950/30 px-5 py-4 text-sm md:text-base text-emerald-800 dark:text-emerald-300 font-semibold flex items-start gap-3">
                    <Icon icon="solar:shield-check-bold" className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t.sections.whatWeCollect.noCollect}</span>
                  </div>
                </section>

                {/* 3. Why We Process */}
                <section id="why-we-process" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.whyWeProcess.heading}
                  </h2>
                  <p className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed font-semibold">
                    {t.sections.whyWeProcess.body}
                  </p>
                </section>

                {/* 4. Children's Data */}
                <section id="children" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.children.heading}
                  </h2>
                  <p className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed mb-6 font-semibold">
                    {t.sections.children.intro}
                  </p>
                  <ul className="space-y-4">
                    {t.sections.children.items.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-left">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-sm md:text-base text-slate-655 dark:text-slate-400 font-semibold leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 5. Cookies & Local Storage */}
                <section id="cookies" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.cookies.heading}
                  </h2>
                  {t.sections.cookies.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed mb-4 font-semibold whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}
                </section>

                {/* 6. Third Parties */}
                <section id="third-parties" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.thirdParties.heading}
                  </h2>
                  {t.sections.thirdParties.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed mb-4 font-semibold whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}
                </section>

                {/* 7. Data Retention */}
                <section id="retention" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.retention.heading}
                  </h2>
                  {t.sections.retention.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed mb-4 font-semibold whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}
                </section>

                {/* 8. Security */}
                <section id="security" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.security.heading}
                  </h2>
                  <p className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed font-semibold">
                    {t.sections.security.body}
                  </p>
                </section>

                {/* 9. Your Rights */}
                <section id="your-rights" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.yourRights.heading}
                  </h2>
                  {t.sections.yourRights.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed mb-4 font-semibold whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}
                </section>

                {/* 10. Grievance Redressal */}
                <section id="grievance" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.grievance.heading}
                  </h2>
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-6 text-left shadow-xs">
                    {t.sections.grievance.body.split("\n").map((line, i) => (
                      <p key={i} className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                        {line.includes(EMAIL) ? (
                          <>
                            {line.split(EMAIL)[0]}
                            <a
                              href={`mailto:${EMAIL}`}
                              className="text-primary font-black hover:underline underline-offset-2"
                            >
                              {EMAIL}
                            </a>
                            {line.split(EMAIL)[1]}
                          </>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </section>

                {/* 11. International Transfers */}
                <section id="transfers" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.transfers.heading}
                  </h2>
                  <p className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed font-semibold">
                    {t.sections.transfers.body}
                  </p>
                </section>

                {/* 12. Changes */}
                <section id="changes" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.changes.heading}
                  </h2>
                  <p className="text-slate-655 dark:text-slate-450 text-sm md:text-base leading-relaxed font-semibold">
                    {t.sections.changes.body}
                  </p>
                </section>

                {/* 13. Contact */}
                <section id="contact" className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-150 dark:border-slate-850">
                    {t.sections.contact.heading}
                  </h2>
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-6 text-left shadow-xs">
                    {t.sections.contact.body.split("\n").map((line, i) => (
                      <p key={i} className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                        {line.includes(EMAIL) ? (
                          <>
                            {line.split(EMAIL)[0]}
                            <a
                              href={`mailto:${EMAIL}`}
                              className="text-primary font-black hover:underline underline-offset-2"
                            >
                              {EMAIL}
                            </a>
                          </>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </section>

                {/* Footer Navigation */}
                <div className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800 flex gap-6 flex-wrap">
                  <Link
                    href="/terms"
                    className="text-sm font-black text-primary hover:underline underline-offset-4"
                  >
                    {t.termsOfService} →
                  </Link>
                  <Link
                    href="/editorial-guidelines"
                    className="text-sm font-black text-primary hover:underline underline-offset-4"
                  >
                    {t.editorialGuidelines} →
                  </Link>
                </div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
