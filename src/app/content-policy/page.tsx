"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL = "indiawhatnow@gmail.com";

type Section =
  | { id: string; heading: string; body: string }
  | { id: string; heading: string; items: string[] };

const translations = {
  en: {
    pageLabel: "Legal",
    title: "Content Policy",
    lastUpdated: "Last updated: 18 June 2026",
    pendingNotice: null as string | null,
    intro:
      "This policy explains what WhatNow publishes, how we handle accuracy and corrections, what we expect in our community spaces, and how to report something. It sits alongside our Editorial Guidelines, Terms, and Privacy Policy.",
    toc: [
      { id: "scope", label: "Scope" },
      { id: "our-content", label: "Our Content" },
      { id: "accuracy", label: "Accuracy & Corrections" },
      { id: "community", label: "Community Content" },
      { id: "ip", label: "Intellectual Property" },
      { id: "ai", label: "Use of AI" },
      { id: "reporting", label: "Reporting & Takedown" },
      { id: "changes", label: "Changes" },
      { id: "contact", label: "Contact" },
    ],
    sections: [
      {
        id: "scope",
        heading: "Scope",
        body: `This Content Policy covers everything published on whatnowindia.vercel.app — guides, articles, exam and career data, and the copy across the site — as well as content shared in community spaces we run, such as our Discord.

WhatNow is operated by Vasu, an individual based in Hyderabad, Telangana, India. WhatNow is free, independent, and informational. It is not professional, career, legal, financial, or admissions advice.`,
      },
      {
        id: "our-content",
        heading: "Our Content",
        body: `Our guides are written to be honest, complete, and useful to a confused 17-year-old — not to sell a course, a college, or a career path. We publish entry routes, eligibility, costs, salaries, and "is this for you?" reality checks, including the parts that might talk you out of a path.

Where we state a fact — a cut-off, a fee, a seat count, an exam pattern — it should be traceable to an official source, and we link to it where we can. Official sources are always the source of truth and override anything on WhatNow.`,
      },
      {
        id: "accuracy",
        heading: "Accuracy and Corrections",
        body: `We research carefully, but exam patterns, eligibility rules, fees, and seat numbers change, and we will sometimes be wrong or out of date. We do not guarantee that every detail is accurate, complete, or current.

If you spot an error, tell us at ${EMAIL} and we will review and fix it. Material corrections are noted on the affected page so readers who bookmarked an older version know something changed. Always verify anything that affects a real decision against the official source before acting on it.`,
      },
      {
        id: "community",
        heading: "Community Content",
        body: `In community spaces we run — primarily our Discord — you are responsible for what you post. To keep these spaces useful and safe, especially for the students and minors who use them, the following are not allowed:`,
      },
      {
        id: "community-rules",
        heading: "",
        items: [
          "Harassment, hate speech, bullying, or threats of any kind.",
          "Spam, scams, referral-link farming, or selling coaching, courses, or test prep.",
          "Sharing pirated material, leaked exam papers, or anything that breaks the law.",
          "Sexual content, or any content that targets or endangers minors.",
          "Impersonating WhatNow, its team, or anyone else.",
          "Sharing other people's private or personal information without consent.",
        ],
      },
      {
        id: "community-action",
        heading: "",
        body: `We may remove content, and restrict or remove members, that breaks these rules — usually without notice where the content is harmful. Community content reflects the views of whoever posted it, not WhatNow.`,
      },
      {
        id: "ip",
        heading: "Intellectual Property",
        body: `Unless stated otherwise, the guides, articles, and design on WhatNow are owned by Vasu or used with permission, and are provided for your personal, non-commercial use. You are welcome to share links and short quotes with attribution.

Do not republish whole guides, scrape the site at scale, or pass our work off as your own. For permission to reuse content, or if you believe something on WhatNow infringes your copyright, write to ${EMAIL} with the details and we will respond.`,
      },
      {
        id: "ai",
        heading: "Use of AI",
        body: `We use software tools, which may include AI assistants, to help with drafting, research, and code. We do not publish unreviewed machine-generated guidance. A human decides what goes live, checks facts against official sources, and is accountable for it.

Our standard is simple: WhatNow should read like a real person made it for you — because one did.`,
      },
      {
        id: "reporting",
        heading: "Reporting and Takedown",
        body: `To report content that is inaccurate, harmful, infringing, or otherwise breaks this policy, email ${EMAIL}. Tell us the page or message, what the problem is, and (for copyright) proof that you hold the rights.

We review reports within a reasonable time and act where the report is valid — correcting, adding context, or removing the content.`,
      },
      {
        id: "changes",
        heading: "Changes",
        body: `We may update this policy as the site and our community grow. When we make a material change, we update the date at the top of this page. Continuing to use WhatNow after a change means you accept the updated policy.`,
      },
      {
        id: "contact",
        heading: "Contact",
        body: `Questions about this policy, or anything to report, can go to ${EMAIL}. For data and privacy matters, see our Privacy Policy and its Grievance Redressal section.`,
      },
    ] as Section[],
  },
  hi: {
    pageLabel: "कानूनी",
    title: "सामग्री नीति",
    lastUpdated: "अंतिम अपडेट: 18 जून 2026",
    pendingNotice:
      "यह पृष्ठ अंग्रेज़ी में है। हिंदी अनुवाद शीघ्र आ रहा है — अंग्रेज़ी संस्करण आधिकारिक है।",
    intro: null as string | null,
    toc: [
      { id: "scope", label: "दायरा" },
      { id: "our-content", label: "हमारी सामग्री" },
      { id: "accuracy", label: "सटीकता और सुधार" },
      { id: "community", label: "कम्युनिटी सामग्री" },
      { id: "ip", label: "बौद्धिक संपदा" },
      { id: "ai", label: "एआई का उपयोग" },
      { id: "reporting", label: "रिपोर्ट और हटाना" },
      { id: "changes", label: "बदलाव" },
      { id: "contact", label: "संपर्क करें" },
    ],
    sections: null,
  },
};

function renderBody(text: string) {
  return text.split("\n\n").map((para, i) => (
    <p
      key={i}
      className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 font-medium"
    >
      {para.includes(EMAIL) ? (
        <>
          {para.split(EMAIL)[0]}
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
          >
            {EMAIL}
          </a>
          {para.split(EMAIL)[1]}
        </>
      ) : (
        para
      )}
    </p>
  ));
}

export default function ContentPolicyPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const en = translations.en;

  return (
    <main className="flex-grow bg-white dark:bg-[#0E111E]">
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B111C] pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#5563ED] mb-3">
            {t.pageLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t.lastUpdated}</p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {t.pendingNotice && (
          <div className="mb-10 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/30 px-6 py-4 text-sm text-amber-800 dark:text-amber-300 font-semibold">
            {t.pendingNotice}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of contents */}
          <aside className="lg:w-56 shrink-0">
            <nav className="lg:sticky lg:top-28">
              <p className="text-xs font-extrabold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-400 mb-4">
                Contents
              </p>
              <ul className="space-y-2">
                {t.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#5563ED] font-semibold transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content (always English; Hindi shows the pending-translation banner) */}
          <article className="flex-1 min-w-0">
            <p className="text-lg font-black text-slate-900 dark:text-slate-100 mb-10 leading-relaxed">
              {en.intro}
            </p>

            {en.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={section.heading ? "mb-10" : "mb-10 -mt-4"}
              >
                {section.heading && (
                  <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                    {section.heading}
                  </h2>
                )}
                {"items" in section ? (
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  renderBody(section.body)
                )}
              </section>
            ))}

            {/* Nav */}
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex gap-4 flex-wrap">
              <Link href="/editorial-guidelines" className="text-sm font-black text-[#5563ED] hover:underline">
                ← Editorial Guidelines
              </Link>
              <Link href="/terms" className="text-sm font-black text-[#5563ED] hover:underline">
                Terms of Service →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
