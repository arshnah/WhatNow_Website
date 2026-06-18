"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL = "indiawhatnow@gmail.com";

const translations = {
  en: {
    pageLabel: "Company",
    title: "Contact",
    subtitle:
      "WhatNow is a small, independent project. Email is the surest way to reach us — we read everything that comes in.",
    pendingNotice: null as string | null,
    methodsHeading: "Ways to reach us",
    expectHeading: "What to expect",
    expect: [
      "We're one person, not a support desk, so give us a few days to reply.",
      "Email is best for corrections, contributions, partnership or advisor enquiries, and anything about your data.",
      "For quick questions and chatting with other students, the community Discord is faster.",
      "We're not a counselling service or an agent — we don't give one-on-one career advice. Many common questions are answered on our FAQ.",
    ],
    privacyNote:
      "For privacy requests or to raise a grievance under the DPDP Act, our Grievance Officer is reachable via the Privacy Policy.",
    faqCta: "Read the FAQ",
  },
  hi: {
    pageLabel: "कंपनी",
    title: "संपर्क करें",
    subtitle:
      "WhatNow एक छोटा, स्वतंत्र प्रोजेक्ट है। हम तक पहुँचने का सबसे पक्का तरीका ईमेल है — हम हर संदेश पढ़ते हैं।",
    pendingNotice:
      "यह पृष्ठ अंग्रेज़ी में है। हिंदी अनुवाद शीघ्र आ रहा है — अंग्रेज़ी संस्करण आधिकारिक है।",
    methodsHeading: "हम तक पहुँचने के तरीके",
    expectHeading: "क्या उम्मीद करें",
    expect: null,
    privacyNote: null,
    faqCta: "अक्सर पूछे जाने वाले प्रश्न पढ़ें",
  },
};

const methods = [
  {
    icon: "ri:mail-line",
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    blurb: "Corrections, contributions, enquiries, and data requests.",
    external: false,
  },
  {
    icon: "ri:discord-fill",
    label: "Community Discord",
    value: "Join the server",
    href: "/discord",
    blurb: "Quick questions and chatting with other students.",
    external: false,
  },
  {
    icon: "ri:instagram-line",
    label: "Instagram",
    value: "@whatnow.in",
    href: "https://instagram.com/whatnow.in",
    blurb: "Updates, snippets, and new guides.",
    external: true,
  },
  {
    icon: "ri:youtube-fill",
    label: "YouTube",
    value: "@indiawhatnow",
    href: "https://www.youtube.com/@indiawhatnow",
    blurb: "Walkthroughs and longer explainers.",
    external: true,
  },
];

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const en = translations.en;

  return (
    <main className="flex-grow bg-white dark:bg-[#0E111E]">
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

        {/* Methods */}
        <h2 className="text-xs font-extrabold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-400 mb-5">
          {t.methodsHeading}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {methods.map((m) => (
            <Link
              key={m.label}
              href={m.href}
              {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0B111C] px-5 py-5 transition-colors hover:border-[#5563ED] dark:hover:border-[#5563ED]"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5563ED]/10 text-[#5563ED]">
                  <Icon icon={m.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-black text-slate-900 dark:text-slate-100">{m.label}</span>
              </div>
              <p className="text-sm font-black text-[#5563ED] mb-1 group-hover:underline break-words">
                {m.value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {m.blurb}
              </p>
            </Link>
          ))}
        </div>

        {/* What to expect (always English; Hindi shows the pending-translation banner) */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            {en.expectHeading}
          </h2>
          <ul className="space-y-3">
            {en.expect.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            {en.privacyNote.split("Privacy Policy")[0]}
            <Link href="/privacy#grievance" className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700">
              Privacy Policy
            </Link>
            {en.privacyNote.split("Privacy Policy")[1]}
          </p>
        </section>

        {/* Nav */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex gap-4 flex-wrap">
          <Link href="/faq" className="text-sm font-black text-[#5563ED] hover:underline">
            {t.faqCta} →
          </Link>
          <Link href="/about" className="text-sm font-black text-[#5563ED] hover:underline">
            About WhatNow →
          </Link>
        </div>
      </div>
    </main>
  );
}
