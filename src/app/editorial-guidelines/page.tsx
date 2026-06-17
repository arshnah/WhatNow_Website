"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    pageLabel: "Legal",
    title: "Editorial Guidelines",
    lastUpdated: "Last updated: 17 June 2026",
    pendingNotice: null,
    toc: [
      { id: "independence", label: "Independence" },
      { id: "no-agenda", label: "No Agenda" },
      { id: "research", label: "How We Research" },
      { id: "accuracy", label: "Accuracy & Corrections" },
      { id: "what-we-dont-do", label: "What We Don't Do" },
      { id: "updating", label: "Updating Content" },
      { id: "feedback", label: "Feedback & Contributions" },
    ],
    intro:
      "WhatNow exists because honest guidance is hard to find. These are the rules we hold ourselves to.",
    sections: {
      independence: {
        heading: "Independence",
        body: `We take no referral fees, no commissions, no sponsorships, and no paid placements. We don't sell courses, coaching, or test prep, and we don't accept payment to feature a college, an exam, or a career path.

WhatNow is free, and it stays free.`,
      },
      noAgenda: {
        heading: "No Agenda",
        body: `We are not pushing IIT, IIM, or any single track. Our job is to help you judge fit — what a path actually demands and what it's like to live — not to steer you toward whatever is prestigious or profitable for us.

We do not dictate choices. Career paths are deeply personal, and the final call is always yours.`,
      },
      research: {
        heading: "How We Research",
        body: `Our guides are built from primary sources — official notifications and exam authorities — and from first-hand accounts of people who have actually completed the exam or worked in the field.

Where we state a fact (a cut-off, a fee, a seat count), it should be traceable to an official source, and we link to it so you can verify. Official sources always override us — we say so on every guide that matters.`,
      },
      accuracy: {
        heading: "Accuracy and Corrections",
        body: `We try hard to be right, and we will be wrong sometimes. Eligibility rules and exam patterns change. If you spot an error, tell us at indiawhatnow@gmail.com and we will fix it.

Material corrections are noted on the affected page so readers who bookmarked an older version know something changed. Official sources always override us — we say so on every guide that matters.`,
      },
      whatWeDontDo: {
        heading: "What We Don't Do",
        items: [
          "We don't publish coaching shortcuts or sell mock tests.",
          "We don't rank colleges for money.",
          "We don't make your decision for you — we outline paths and let you choose.",
          "We don't accept sponsored content or editorial placement fees.",
          "We don't hide eligibility or cost information that might discourage you from a path. Complete information is the point.",
        ],
      },
      updating: {
        heading: "Updating Content",
        body: `Guides are reviewed and refreshed as official rules change. High-traffic guides covering exams with annual notifications are reviewed at least once per admission cycle. The "Last updated" date on each guide reflects when the content was last meaningfully revised.`,
      },
      feedback: {
        heading: "Feedback and Contributions",
        body: `Suggestions, corrections, and contributor or advisor enquiries are welcome at indiawhatnow@gmail.com or our community Discord.

If you have successfully cleared a major entrance exam and want to contribute a candid guide, reach out — we are always expanding our network of honest mentors.`,
      },
    },
  },
  hi: {
    pageLabel: "कानूनी",
    title: "संपादकीय दिशानिर्देश",
    lastUpdated: "अंतिम अपडेट: 17 जून 2026",
    pendingNotice:
      "यह पृष्ठ अंग्रेज़ी में है। हिंदी अनुवाद शीघ्र आ रहा है — अंग्रेज़ी संस्करण आधिकारिक है।",
    toc: [
      { id: "independence", label: "स्वतंत्रता" },
      { id: "no-agenda", label: "कोई एजेंडा नहीं" },
      { id: "research", label: "हम कैसे शोध करते हैं" },
      { id: "accuracy", label: "सटीकता और सुधार" },
      { id: "what-we-dont-do", label: "हम क्या नहीं करते" },
      { id: "updating", label: "सामग्री अपडेट करना" },
      { id: "feedback", label: "प्रतिक्रिया और योगदान" },
    ],
    intro: null,
    sections: null,
  },
};

export default function EditorialGuidelinesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const en = translations.en;

  return (
    <main className="flex-grow bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#5563ED] mb-3">
            {t.pageLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-sm text-slate-500 font-medium">{t.lastUpdated}</p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {t.pendingNotice && (
          <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-800 font-semibold">
            {t.pendingNotice}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of contents */}
          <aside className="lg:w-56 shrink-0">
            <nav className="lg:sticky lg:top-28">
              <p className="text-xs font-extrabold tracking-[0.15em] uppercase text-slate-400 mb-4">
                Contents
              </p>
              <ul className="space-y-2">
                {t.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-slate-500 hover:text-[#5563ED] font-semibold transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 min-w-0">
            {/* Intro */}
            <p className="text-lg font-black text-slate-900 mb-10 leading-relaxed">
              {en.intro}
            </p>

            {/* Independence */}
            <section id="independence" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.independence.heading}
              </h2>
              {en.sections.independence.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* No Agenda */}
            <section id="no-agenda" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.noAgenda.heading}
              </h2>
              {en.sections.noAgenda.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* Research */}
            <section id="research" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.research.heading}
              </h2>
              {en.sections.research.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* Accuracy */}
            <section id="accuracy" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.accuracy.heading}
              </h2>
              {en.sections.accuracy.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para.includes("indiawhatnow@gmail.com") ? (
                    <>
                      {para.split("indiawhatnow@gmail.com")[0]}
                      <a
                        href="mailto:indiawhatnow@gmail.com"
                        className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
                      >
                        indiawhatnow@gmail.com
                      </a>
                      {para.split("indiawhatnow@gmail.com")[1]}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </section>

            {/* What We Don't Do */}
            <section id="what-we-dont-do" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.whatWeDontDo.heading}
              </h2>
              <ul className="space-y-3">
                {en.sections.whatWeDontDo.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span className="text-sm text-slate-600 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Updating */}
            <section id="updating" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.updating.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.updating.body}
              </p>
            </section>

            {/* Feedback */}
            <section id="feedback" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.feedback.heading}
              </h2>
              {en.sections.feedback.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para.includes("indiawhatnow@gmail.com") ? (
                    <>
                      {para.split("indiawhatnow@gmail.com")[0]}
                      <a
                        href="mailto:indiawhatnow@gmail.com"
                        className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
                      >
                        indiawhatnow@gmail.com
                      </a>
                      {para.split("indiawhatnow@gmail.com")[1]}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </section>

            {/* Nav */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex gap-4 flex-wrap">
              <Link
                href="/privacy"
                className="text-sm font-black text-[#5563ED] hover:underline"
              >
                ← Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-black text-[#5563ED] hover:underline"
              >
                Terms of Service →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
