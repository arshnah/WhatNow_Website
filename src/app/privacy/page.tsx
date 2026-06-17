"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    pageLabel: "Legal",
    title: "Privacy Policy",
    lastUpdated: "Last updated: 17 June 2026",
    pendingNotice: null,
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
        heading: "Overview",
        body: `WhatNow ("WhatNow", "we", "us") is operated by Sanskar Chauhan, an individual based in Hyderabad, Telangana, India. We publish free, independent career and exam guidance for students in India.

This policy explains what personal data we handle, why, and the choices you have. For the purposes of India's Digital Personal Data Protection Act, 2023 ("DPDP Act"), we act as a Data Fiduciary for the limited personal data described below.

Our short version: WhatNow is built to be read without signing in. There is no account to create, no paywall, and no email gate. We do not sell your data, we do not run advertising networks, and we do not build advertising profiles of our readers.`,
      },
      whatWeCollect: {
        heading: "What We Collect",
        intro: "We collect very little. The full list is below:",
        items: [
          {
            label: "Server and technical logs",
            detail:
              "When you visit, our hosting provider (Vercel, Inc.) automatically processes technical data such as your IP address, browser and device type, and the pages requested. This is standard infrastructure behaviour and is handled by Vercel on our behalf. We do not receive or store these logs separately from Vercel's infrastructure.",
          },
          {
            label: "Language and theme preferences",
            detail:
              "We store your chosen language (EN/हि) and colour theme in your browser's localStorage so the site remembers your settings between visits. This data lives entirely on your device and is never transmitted to us or any server.",
          },
          {
            label: "Notice read state",
            detail:
              "We store the IDs of site notices you have dismissed in your browser's localStorage, so we do not show them again. This data stays on your device only.",
          },
          {
            label: "Things you choose to send us",
            detail:
              "If you email us or join our community on Discord, we receive whatever you voluntarily send (your message and contact details). Discord is a third-party service governed by its own privacy policy.",
          },
        ],
        noCollect:
          "We do not collect names, phone numbers, addresses, exam scores, or any personal data through the website itself. We do not ask you to create an account.",
      },
      whyWeProcess: {
        heading: "Why We Process It and Our Lawful Basis",
        body: `We process the above data to operate, secure, and improve the site. Where the law requires your consent we ask for it; otherwise we rely on the limited legitimate uses recognised under the DPDP Act (such as keeping the service running and secure). You can withdraw consent where it applies, as easily as you gave it.`,
      },
      children: {
        heading: "Children's Data",
        intro:
          "WhatNow is written for students, and we know many of our readers are under 18. We take this seriously:",
        items: [
          "We minimise data and are built to be used without an account or any sign-up, so we do not knowingly collect personal data directly from children.",
          "We do not perform behavioural tracking or profiling of children, and we do not run targeted advertising directed at children.",
          "We do not knowingly process a child's personal data without verifiable consent from a parent or guardian, as required by the DPDP Act.",
          "If you are a parent or guardian and believe we hold personal data about your child, contact indiawhatnow@gmail.com and we will review and delete it.",
        ],
      },
      cookies: {
        heading: "Cookies & Local Storage",
        body: `WhatNow does not set any HTTP cookies.

We use browser localStorage — a client-side storage mechanism that stays on your device and is never sent to our servers — for three purposes:

• Language preference (key: "language") — remembers whether you prefer EN or हि.
• Colour theme (key: "whatnow-vibe-theme") — remembers your chosen colour theme.
• Dismissed notices (key: "whatnow-admin-notices-read") — remembers which site notices you have already seen and dismissed.

All three items are strictly functional. They exist to make the site work as you expect. None of them are used for tracking, analytics, or advertising.

We run no analytics service and no third-party tracking scripts. There are no advertising networks, no cross-site trackers, and no profiling of visitors.

Third-party links: when you click a link to Discord, YouTube, or Instagram, you leave WhatNow and those platforms set their own cookies under their own policies. We do not embed their content as iframes, so no third-party cookies are set while you are on our site.`,
      },
      thirdParties: {
        heading: "Third Parties",
        body: `We rely on a small number of providers to run WhatNow:

• Vercel, Inc. — our hosting and infrastructure provider. Vercel processes server-level technical data (IP addresses, request metadata) as part of providing hosting services. See Vercel's privacy policy for details.
• next/font (Google Fonts) — we use the Next.js font system, which downloads and self-hosts font files at build time. There is no runtime request from your browser to Google's servers.

We link to Discord, YouTube, and Instagram. When you interact with those platforms, your data is handled under their own policies. We do not sell or rent personal data to anyone.`,
      },
      retention: {
        heading: "Data Retention",
        body: `We keep personal data only as long as needed for the purpose it was collected.

• Server logs are retained by Vercel for operational and security purposes under Vercel's data retention policy.
• localStorage data stays on your device until you clear it or we remove the keys in a future update. It is not retained on our servers.
• Correspondence (emails) is retained as long as reasonably needed to handle your enquiry, then deleted.`,
      },
      security: {
        heading: "Security",
        body: `We apply reasonable technical and organisational measures appropriate to the limited data we handle — including HTTPS for all traffic and relying on Vercel's hardened hosting infrastructure. No system is perfectly secure, but we work to protect what we hold. In the event of a personal data breach, we will notify affected individuals and, where required by law, the relevant authorities within 72 hours.`,
      },
      yourRights: {
        heading: "Your Rights",
        body: `As a Data Principal under the DPDP Act you can ask us to:

• Access a summary of the personal data we hold about you.
• Correct or complete it.
• Erase it.
• Nominate another person to exercise your rights in the event of death or incapacity.

To exercise any of these rights, or to raise a grievance, contact our Grievance Officer below. We will respond within a reasonable time as required by law.`,
      },
      grievance: {
        heading: "Grievance Redressal",
        body: `Grievance Officer: Sanskar Chauhan
Email: indiawhatnow@gmail.com

If you are not satisfied with our response, you may escalate to the Data Protection Board of India.`,
      },
      transfers: {
        heading: "International Transfers",
        body: `Some of our providers (including Vercel) may process data on servers outside India. Where that happens, it is done in line with the conditions permitted under Indian law.`,
      },
      changes: {
        heading: "Changes",
        body: `We may update this policy; we will change the "Last updated" date at the top of this page. For material changes, we will note it on the site.`,
      },
      contact: {
        heading: "Contact",
        body: `Email: indiawhatnow@gmail.com
Address: Hyderabad, Telangana, India`,
      },
    },
  },
  hi: {
    pageLabel: "कानूनी",
    title: "गोपनीयता नीति",
    lastUpdated: "अंतिम अपडेट: 17 जून 2026",
    pendingNotice:
      "यह पृष्ठ अंग्रेज़ी में है। हिंदी अनुवाद शीघ्र आ रहा है — अंग्रेज़ी संस्करण आधिकारिक है।",
    toc: [
      { id: "overview", label: "अवलोकन" },
      { id: "what-we-collect", label: "हम क्या एकत्र करते हैं" },
      { id: "why-we-process", label: "हम इसे क्यों संसाधित करते हैं" },
      { id: "children", label: "बच्चों का डेटा" },
      { id: "cookies", label: "कुकीज़ और लोकल स्टोरेज" },
      { id: "third-parties", label: "तृतीय पक्ष" },
      { id: "retention", label: "डेटा प्रतिधारण" },
      { id: "security", label: "सुरक्षा" },
      { id: "your-rights", label: "आपके अधिकार" },
      { id: "grievance", label: "शिकायत निवारण" },
      { id: "transfers", label: "अंतर्राष्ट्रीय स्थानांतरण" },
      { id: "changes", label: "परिवर्तन" },
      { id: "contact", label: "संपर्क" },
    ],
    sections: null,
  },
};

export default function PrivacyPage() {
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
        {/* Hindi pending notice */}
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
          <article className="flex-1 min-w-0 prose-legal">
            {/* Overview */}
            <section id="overview" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.overview.heading}
              </h2>
              {en.sections.overview.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* What We Collect */}
            <section id="what-we-collect" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.whatWeCollect.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                {en.sections.whatWeCollect.intro}
              </p>
              <ul className="space-y-4 mb-6">
                {en.sections.whatWeCollect.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#5563ED] shrink-0" />
                    <span className="text-sm text-slate-600 font-medium leading-relaxed">
                      <strong className="text-slate-800 font-black">{item.label}</strong>{" "}
                      — {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm text-emerald-800 font-semibold">
                {en.sections.whatWeCollect.noCollect}
              </div>
            </section>

            {/* Why We Process */}
            <section id="why-we-process" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.whyWeProcess.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.whyWeProcess.body}
              </p>
            </section>

            {/* Children */}
            <section id="children" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.children.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                {en.sections.children.intro}
              </p>
              <ul className="space-y-3">
                {en.sections.children.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#ff5a1f] shrink-0" />
                    <span className="text-sm text-slate-600 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Cookies */}
            <section id="cookies" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.cookies.heading}
              </h2>
              {en.sections.cookies.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-sm leading-relaxed mb-4 font-medium whitespace-pre-line"
                >
                  {para}
                </p>
              ))}
            </section>

            {/* Third Parties */}
            <section id="third-parties" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.thirdParties.heading}
              </h2>
              {en.sections.thirdParties.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-sm leading-relaxed mb-4 font-medium whitespace-pre-line"
                >
                  {para}
                </p>
              ))}
            </section>

            {/* Retention */}
            <section id="retention" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.retention.heading}
              </h2>
              {en.sections.retention.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-sm leading-relaxed mb-4 font-medium whitespace-pre-line"
                >
                  {para}
                </p>
              ))}
            </section>

            {/* Security */}
            <section id="security" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.security.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.security.body}
              </p>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.yourRights.heading}
              </h2>
              {en.sections.yourRights.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-sm leading-relaxed mb-4 font-medium whitespace-pre-line"
                >
                  {para}
                </p>
              ))}
            </section>

            {/* Grievance */}
            <section id="grievance" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.grievance.heading}
              </h2>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                {en.sections.grievance.body.split("\n").map((line, i) => (
                  <p key={i} className="text-sm text-slate-700 font-semibold leading-relaxed">
                    {line.includes("indiawhatnow@gmail.com") ? (
                      <>
                        {line.split("indiawhatnow@gmail.com")[0]}
                        <a
                          href="mailto:indiawhatnow@gmail.com"
                          className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
                        >
                          indiawhatnow@gmail.com
                        </a>
                        {line.split("indiawhatnow@gmail.com")[1]}
                      </>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            </section>

            {/* International Transfers */}
            <section id="transfers" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.transfers.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.transfers.body}
              </p>
            </section>

            {/* Changes */}
            <section id="changes" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.changes.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.changes.body}
              </p>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.contact.heading}
              </h2>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                {en.sections.contact.body.split("\n").map((line, i) => (
                  <p key={i} className="text-sm text-slate-700 font-semibold leading-relaxed">
                    {line.includes("indiawhatnow@gmail.com") ? (
                      <>
                        {line.split("indiawhatnow@gmail.com")[0]}
                        <a
                          href="mailto:indiawhatnow@gmail.com"
                          className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
                        >
                          indiawhatnow@gmail.com
                        </a>
                      </>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            </section>

            {/* Nav back */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex gap-4 flex-wrap">
              <Link
                href="/terms"
                className="text-sm font-black text-[#5563ED] hover:underline"
              >
                Terms of Service →
              </Link>
              <Link
                href="/editorial-guidelines"
                className="text-sm font-black text-[#5563ED] hover:underline"
              >
                Editorial Guidelines →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
