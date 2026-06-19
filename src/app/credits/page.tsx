"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL = "indiawhatnow@gmail.com";

const builtWith = [
  { name: "Next.js", note: "App Router framework", url: "https://nextjs.org" },
  { name: "React", note: "UI library", url: "https://react.dev" },
  { name: "TypeScript", note: "language", url: "https://www.typescriptlang.org" },
  { name: "Tailwind CSS", note: "styling", url: "https://tailwindcss.com" },
  { name: "Framer Motion", note: "animation", url: "https://www.framer.com/motion/" },
  { name: "Cheerio", note: "build-time data tooling", url: "https://cheerio.js.org" },
  { name: "Vercel", note: "hosting & deploys", url: "https://vercel.com" },
];

const typefaces = [
  { name: "Geist", by: "Vercel — body text", url: "https://vercel.com/font" },
  { name: "Mukta", by: "Ek Type — Devanagari (Hindi)", url: "https://fonts.google.com/specimen/Mukta" },
  { name: "Bricolage Grotesque", by: "Mathieu Triay — headings", url: "https://fonts.google.com/specimen/Bricolage+Grotesque" },
];

const iconSets = [
  { name: "Iconify", by: "Remix Icon, Phosphor & Solar sets", url: "https://iconify.design" },
  { name: "Lucide", by: "open-source icon set", url: "https://lucide.dev" },
];

const translations = {
  en: {
    pageLabel: "Colophon",
    title: "Credits",
    subtitle:
      "WhatNow is a small, independent project. Here's who builds it — and the open-source work it stands on.",
    pendingNotice: null as string | null,
  },
  hi: {
    pageLabel: "कोलोफ़ोन",
    title: "श्रेय",
    subtitle:
      "WhatNow एक छोटा, स्वतंत्र प्रोजेक्ट है। यहाँ बताया गया है कि इसे कौन बनाता है — और यह किन ओपन-सोर्स कामों पर टिका है।",
    pendingNotice:
      "यह पृष्ठ अंग्रेज़ी में है। हिंदी अनुवाद शीघ्र आ रहा है — अंग्रेज़ी संस्करण आधिकारिक है।",
  },
};

function LinkList({ items }: { items: { name: string; note?: string; by?: string; url: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.name} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black text-[#5563ED] hover:underline underline-offset-2"
          >
            {item.name}
          </a>
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            — {item.note ?? item.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function CreditsPage() {
  const { language } = useLanguage();
  const t = translations[language];

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

      {/* Body (always English; Hindi shows the pending-translation banner) */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {t.pendingNotice && (
          <div className="mb-10 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/30 px-6 py-4 text-sm text-amber-800 dark:text-amber-300 font-semibold">
            {t.pendingNotice}
          </div>
        )}

        {/* People */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            People
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 font-medium">
            Built and maintained by Vasu, an independent developer based in Hyderabad, Telangana,
            India.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
            The guides draw on first-hand accounts from students and professionals who have actually
            walked these paths — our editorial network. If you have cleared a major entrance exam or
            work in a field we cover and want to contribute a candid guide, write to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
            >
              {EMAIL}
            </a>{" "}
            or join our{" "}
            <Link href="/discord" className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700">
              community Discord
            </Link>
            .
          </p>
        </section>

        {/* Built with */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            Built with
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 font-medium">
            WhatNow is free software stitched together from generous open-source projects. Thank you
            to the people who maintain them.
          </p>
          <LinkList items={builtWith} />
        </section>

        {/* Typefaces */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            Typefaces
          </h2>
          <LinkList items={typefaces} />
        </section>

        {/* Icons */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            Icons
          </h2>
          <LinkList items={iconSets} />
        </section>

        {/* Thanks */}
        <section className="mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            Thanks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
            To every senior who answered an honest question, and every student who told us a guide
            was wrong so we could fix it. This site is better because of you.
          </p>
        </section>

        {/* Nav */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex gap-4 flex-wrap">
          <Link href="/about" className="text-sm font-black text-[#5563ED] hover:underline">
            ← About WhatNow
          </Link>
          <Link href="/editorial-guidelines" className="text-sm font-black text-[#5563ED] hover:underline">
            Editorial Guidelines →
          </Link>
        </div>
      </div>
    </main>
  );
}
