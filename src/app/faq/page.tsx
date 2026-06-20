"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const EMAIL = "indiawhatnow@gmail.com";

type QA = { q: string; a: string };

const translations = {
  en: {
    pageLabel: "Help & Support",
    title: "Frequently Asked Questions",
    subtitle: "The honest answers to what students ask us most about career paths, guidance, and our team.",
    searchPlaceholder: "Search questions...",
    stillStuck: "Still have a question?",
    stillStuckBody: "We read everything that comes in. The fastest way to reach us:",
    contactCta: "Contact us",
    noResults: "No matching questions found.",
    noResultsDesc: "Try typing different keywords or check out the categories.",
    faqs: [
      {
        q: "Is WhatNow really free?",
        a: `Yes. No paywall, no email gate, no upsell. There is no account to create and nothing to buy. You can read every guide without signing in. We mean it when we say it stays free.`,
      },
      {
        q: "Who is behind WhatNow?",
        a: `WhatNow is built and run by Vasu, an individual based in Hyderabad, Telangana, India — not a coaching company or an edtech brand. The point is exactly that: guidance from someone who has been through it, not a sales funnel.`,
      },
      {
        q: "Do you take money from colleges or coaching institutes?",
        a: `No. We take no referral fees, no commissions, no sponsorships, and no paid placements. We don't rank colleges for money and we don't accept sponsored content. That independence is the whole product — see our Editorial Guidelines for the full rules we hold ourselves to.`,
      },
      {
        q: "How accurate is the information, and how often is it updated?",
        a: `We research carefully from primary sources and link to them so you can verify. But exam patterns, eligibility, fees, and cut-offs change, so always confirm anything that affects a real decision against the official source. Guides are refreshed as official rules change, and material corrections are noted on the page. Found a mistake? Email ${EMAIL}.`,
      },
      {
        q: "Is WhatNow career counselling? Will you tell me what to do?",
        a: `No. We give you information, frameworks, and honest reality checks — the decision is always yours. We are not a counselling service, an agent, or a coaching institution, and we don't offer one-on-one advice. Our job is to help you judge fit, not to steer you.`,
      },
      {
        q: "Is my data safe?",
        a: `WhatNow is built to be read without signing in, so we collect very little. We don't sell your data, run ad networks, or build advertising profiles. The full details — including your rights under India's DPDP Act — are in our Privacy Policy.`,
      },
      {
        q: "How do I report an error or suggest a guide?",
        a: `Email ${EMAIL} or drop into our community Discord. Tell us the page and the problem, and we'll review and fix it. Suggestions for new guides are genuinely welcome.`,
      },
      {
        q: "Can I contribute or become a mentor?",
        a: `Yes — we're always expanding our network of honest mentors. If you've actually cleared a major entrance exam or work in a field we cover and want to write a candid guide, reach out at ${EMAIL}.`,
      },
      {
        q: "Why only English and Hindi?",
        a: `We started with the two languages that reach the most students we're built for. Some pages are English-first with Hindi on the way — where that's the case, the English version is the authoritative one for now. More languages may follow.`,
      },
      {
        q: "Is there a WhatNow app?",
        a: `Not yet. WhatNow is a fast, mobile-friendly website that works on any phone without an install. If that changes, you'll hear it here and on our community channels first.`,
      },
    ] as QA[],
  },
  hi: {
    pageLabel: "सहायता और संपर्क",
    title: "अक्सर पूछे जाने वाले प्रश्न",
    subtitle: "जो छात्र हमसे सबसे ज़्यादा पूछते हैं, उनके ईमानदार जवाब — करियर, मार्गदर्शन और हमारी टीम के बारे में।",
    searchPlaceholder: "प्रश्नों में खोजें...",
    stillStuck: "अब भी कोई सवाल है?",
    stillStuckBody: "हम हर संदेश पढ़ते हैं। हम तक पहुँचने का सबसे तेज़ तरीका:",
    contactCta: "संपर्क करें",
    noResults: "कोई मेल खाता प्रश्न नहीं मिला।",
    noResultsDesc: "कृपया अन्य कीवर्ड खोजें या हमारे मुख्य गाइड देखें।",
    faqs: [
      {
        q: "क्या WhatNow वाकई मुफ्त है?",
        a: `हाँ। कोई पेवॉल नहीं, कोई ईमेल गेट नहीं, कोई अपसेल नहीं। न तो कोई अकाउंट बनाना है और न ही कुछ खरीदना है। आप बिना साइन-इन किए हर गाइड पढ़ सकते हैं। हम सच कह रहे हैं जब हम कहते हैं कि यह मुफ्त ही रहेगा।`,
      },
      {
        q: "WhatNow के पीछे कौन है?",
        a: `WhatNow का निर्माण और संचालन हैदराबाद, तेलंगाना, भारत में रहने वाले वासु द्वारा किया जाता है — किसी कोचिंग कंपनी या एडटेक ब्रांड द्वारा नहीं। उद्देश्य यही है: किसी ऐसे व्यक्ति से मार्गदर्शन मिलना जो खुद इस अनुभव से गुज़रा हो, न कि कोई बिक्री जाल (sales funnel)।`,
      },
      {
        q: "क्या आप कॉलेजों या कोचिंग संस्थानों से पैसा लेते हैं?",
        a: `नहीं। हम कोई रेफरल शुल्क, कोई कमीशन, कोई प्रायोजन (sponsorship) और कोई सशुल्क प्लेसमेंट नहीं लेते हैं। हम पैसों के लिए कॉलेजों को रैंक नहीं करते हैं और न ही प्रायोजित सामग्री स्वीकार करते हैं। वह स्वतंत्रता ही हमारा पूरा उत्पाद है — उन सभी नियमों के लिए हमारे संपादकीय दिशानिर्देश देखें जिनका हम पालन करते हैं।`,
      },
      {
        q: "जानकारी कितनी सटीक है, और इसे कितनी बार अपडेट किया जाता है?",
        a: `हम प्राथमिक स्रोतों से सावधानीपूर्वक शोध करते हैं और उनके लिंक देते हैं ताकि आप स्वयं पुष्टि कर सकें। लेकिन परीक्षा पैटर्न, पात्रता, फीस और कट-ऑफ बदलते रहते हैं, इसलिए किसी भी वास्तविक निर्णय को प्रभावित करने वाली जानकारी की आधिकारिक स्रोत से पुष्टि अवश्य करें। आधिकारिक नियमों में बदलाव के साथ गाइड अपडेट किए जाते हैं, और सुधारों को पृष्ठ पर नोट किया जाता है। गलती मिली? हमें indiawhatnow@gmail.com पर ईमेल करें।`,
      },
      {
        q: "क्या WhatNow करियर काउंसलिंग है? क्या आप मुझे बताएंगे कि मुझे क्या करना चाहिए?",
        a: `नहीं। हम आपको जानकारी, रूपरेखा (frameworks) और ईमानदार रियलिटी चेक देते हैं — निर्णय हमेशा आपका होता है। हम कोई काउंसलिंग सेवा, एजेंट या कोचिंग संस्थान नहीं हैं, और न ही हम आमने-सामने की सलाह देते हैं। हमारा काम आपकी उपयुक्तता जांचने में मदद करना है, आपको निर्देशित करना नहीं।`,
      },
      {
        q: "क्या मेरा डेटा सुरक्षित है?",
        a: `WhatNow को बिना साइन-इन किए पढ़ने के लिए बनाया गया है, इसलिए हम बहुत कम डेटा एकत्र करते हैं। हम आपका डेटा बेचते नहीं हैं, विज्ञापन नेटवर्क नहीं चलाते हैं, और न ही विज्ञापन प्रोफाइल बनाते हैं। पूर्ण विवरण — जिसमें भारत के DPDP अधिनियम के तहत आपके अधिकार शामिल हैं — हमारी गोपनीयता नीति में हैं।`,
      },
      {
        q: "मैं किसी त्रुटि की रिपोर्ट कैसे करूँ या गाइड का सुझाव कैसे दूँ?",
        a: `indiawhatnow@gmail.com पर ईमेल करें या हमारे कम्युनिटी डिस्कॉर्ड में आएं। हमें पेज और समस्या बताएं, हम इसकी समीक्षा करेंगे और इसे ठीक करेंगे। नई गाइड के सुझावों का वास्तव में स्वागत है।`,
      },
      {
        q: "क्या मैं योगदान दे सकता हूँ या मेंटर बन सकता हूँ?",
        a: `Yes — हम हमेशा अपने ईमानदार मेंटर्स के नेटवर्क का विस्तार कर रहे हैं। यदि आपने वास्तव में कोई बड़ी प्रवेश परीक्षा पास की है या हमारे द्वारा कवर किए गए क्षेत्र में काम करते हैं और निष्पक्ष गाइड लिखना चाहते हैं, तो indiawhatnow@gmail.com पर संपर्क करें।`,
      },
      {
        q: "केवल अंग्रेजी और हिंदी ही क्यों?",
        a: `हमने उन दो भाषाओं से शुरुआत की जो उन छात्रों तक सबसे अधिक पहुंचती हैं जिनके लिए इसे बनाया गया है। कुछ पृष्ठ पहले अंग्रेजी में हैं और हिंदी अनुवाद कार्य जारी है — ऐसी स्थिति में, अंग्रेजी संस्करण को अभी के लिए आधिकारिक माना जाता है। भविष्य में और भी भाषाएं जोड़ी जा सकती हैं।`,
      },
      {
        q: "क्या WhatNow का कोई ऐप है?",
        a: `अभी नहीं। WhatNow एक तेज़, मोबाइल-अनुकूल वेबसाइट है जो बिना किसी ऐप इंस्टॉल किए किसी भी फोन पर काम करती है। यदि यह बदलता है, तो आपको सबसे पहले इसके बारे में हमारे कम्युनिटी चैनलों पर पता चलेगा।`,
      },
    ] as QA[],
  }
};

function renderAnswer(text: string) {
  if (!text.includes(EMAIL)) return text;
  const [before, after] = text.split(EMAIL);
  return (
    <>
      {before}
      <a
        href={`mailto:${EMAIL}`}
        className="text-[#5563ED] font-bold hover:underline underline-offset-2"
      >
        {EMAIL}
      </a>
      {after}
    </>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: translations.en.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});
  const [feedback, setFeedback] = useState<Record<number, "yes" | "no" | null>>({});

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleFeedback = (idx: number, rating: "yes" | "no") => {
    setFeedback((prev) => ({ ...prev, [idx]: rating }));
  };

  const filteredFaqs = t.faqs.filter((faq) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
  });

  return (
    <main className="flex-grow bg-white dark:bg-[#0E111E] relative overflow-hidden">
      {/* Decorative Glow Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative border-b border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#0B111C] pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#5563ED] mb-3">
            {t.pageLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-4">
            {t.title}
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Body Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Search Bar */}
        <div className="relative mb-10">
          <div className="flex items-center gap-3 bg-slate-500/5 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3.5 text-slate-600 dark:text-slate-400 text-sm font-medium transition-all focus-within:border-[#5563ED] focus-within:bg-white shadow-sm">
            <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-neutral-dark placeholder-slate-400 bg-transparent focus:outline-none font-semibold text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1 rounded-full text-slate-400 hover:text-neutral-dark hover:bg-slate-200/50 transition-colors cursor-pointer shrink-0"
              >
                <Icon icon="solar:close-circle-bold" className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800/80 border-y border-slate-100 dark:divide-slate-800/80">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((item, i) => {
              const isOpen = !!openFaqs[i];
              const rating = feedback[i];
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-1"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-start justify-between gap-4 cursor-pointer py-5 text-left focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-black text-slate-900 dark:text-slate-100 leading-snug group-hover:text-[#5563ED] transition-colors">
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 h-5 w-5 shrink-0 text-[#5563ED] flex items-center justify-center"
                    >
                      <Icon icon="solar:alt-arrow-down-bold-duotone" className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {renderAnswer(item.a)}
                    </p>

                    {/* Interactive Feedback Buttons */}
                    <div className="pb-6 pt-2 flex items-center gap-3 border-b border-dashed border-slate-100 dark:border-slate-800/80">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
                        {language === "hi" ? "क्या यह उत्तर मददगार था?" : "Was this helpful?"}
                      </span>
                      <div className="flex gap-2">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleFeedback(i, "yes")}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider border flex items-center gap-1.5 transition-colors cursor-pointer ${
                            rating === "yes"
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600"
                              : "bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300"
                          }`}
                        >
                          <Icon icon="ri:thumb-up-fill" className="w-3.5 h-3.5" />
                          {language === "hi" ? "हाँ" : "Yes"}
                        </motion.button>
                        
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleFeedback(i, "no")}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider border flex items-center gap-1.5 transition-colors cursor-pointer ${
                            rating === "no"
                              ? "bg-rose-500/10 border-rose-500/30 text-rose-600"
                              : "bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300"
                          }`}
                        >
                          <Icon icon="ri:thumb-down-fill" className="w-3.5 h-3.5" />
                          {language === "hi" ? "नहीं" : "No"}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty Search State */}
          {filteredFaqs.length === 0 && (
            <div className="py-12 text-center">
              <Icon icon="solar:document-text-bold-duotone" className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-700 mb-4" />
              <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">{t.noResults}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mt-1">{t.noResultsDesc}</p>
            </div>
          )}
        </div>

        {/* Still stuck contact card */}
        <div className="mt-12 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B111C] p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full bg-indigo-500/5 blur-2xl pointer-events-none" />
          
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-2">
            {t.stillStuck}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold mb-6">
            {t.stillStuckBody}
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#5563ED] px-6 py-3 text-xs font-black text-white hover:bg-indigo-600 transition-colors uppercase tracking-widest shadow-sm shadow-indigo-500/10"
            >
              {t.contactCta}
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-black text-[#5563ED] hover:underline"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
