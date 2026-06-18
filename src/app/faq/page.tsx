"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL = "indiawhatnow@gmail.com";

type QA = { q: string; a: string };

const translations = {
  en: {
    pageLabel: "Help",
    title: "Frequently Asked Questions",
    subtitle: "The honest answers to what students ask us most.",
    pendingNotice: null as string | null,
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
    stillStuck: "Still have a question?",
    stillStuckBody: "We read everything that comes in. The fastest way to reach us:",
    contactCta: "Contact us",
  },
  hi: {
    pageLabel: "सहायता",
    title: "अक्सर पूछे जाने वाले प्रश्न",
    subtitle: "जो छात्र हमसे सबसे ज़्यादा पूछते हैं, उनके ईमानदार जवाब।",
    pendingNotice:
      "यह पृष्ठ अंग्रेज़ी में है। हिंदी अनुवाद शीघ्र आ रहा है — अंग्रेज़ी संस्करण आधिकारिक है।",
    faqs: null,
    stillStuck: "अब भी कोई सवाल है?",
    stillStuckBody: "हम हर संदेश पढ़ते हैं। हम तक पहुँचने का सबसे तेज़ तरीका:",
    contactCta: "संपर्क करें",
  },
};

function renderAnswer(text: string) {
  if (!text.includes(EMAIL)) return text;
  const [before, after] = text.split(EMAIL);
  return (
    <>
      {before}
      <a
        href={`mailto:${EMAIL}`}
        className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
      >
        {EMAIL}
      </a>
      {after}
    </>
  );
}

// FAQPage structured data (built from the English Q&A) — lets search engines
// surface these as rich results.
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
  const en = translations.en;

  return (
    <main className="flex-grow bg-white dark:bg-[#0E111E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B111C] pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#5563ED] mb-3">
            {t.pageLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">{t.subtitle}</p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {t.pendingNotice && (
          <div className="mb-10 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/30 px-6 py-4 text-sm text-amber-800 dark:text-amber-300 font-semibold">
            {t.pendingNotice}
          </div>
        )}

        {/* Accordion (always English content; Hindi shows the pending-translation banner) */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800 border-y border-slate-100 dark:border-slate-800">
          {en.faqs.map((item, i) => (
            <details key={i} className="group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base md:text-lg font-black text-slate-900 dark:text-slate-100 leading-snug">
                  {item.q}
                </span>
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-[#5563ED] transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {renderAnswer(item.a)}
              </p>
            </details>
          ))}
        </div>

        {/* Still stuck */}
        <div className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B111C] px-6 py-7">
          <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-2">
            {en.stillStuck}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-4">
            {en.stillStuckBody}
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#5563ED] px-5 py-2.5 text-sm font-black text-white hover:bg-indigo-600 transition-colors"
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
