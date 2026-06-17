"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    pageLabel: "Legal",
    title: "Terms of Service",
    lastUpdated: "Last updated: 17 June 2026",
    pendingNotice: null,
    toc: [
      { id: "what-whatnow-is", label: "What WhatNow Is" },
      { id: "no-guarantees", label: "No Guarantees" },
      { id: "acceptable-use", label: "Acceptable Use" },
      { id: "ip", label: "Intellectual Property" },
      { id: "community", label: "Community & Third Parties" },
      { id: "disclaimers", label: "Disclaimers & Liability" },
      { id: "indemnity", label: "Indemnity" },
      { id: "minors", label: "Minors" },
      { id: "governing-law", label: "Governing Law" },
      { id: "changes", label: "Changes" },
      { id: "contact", label: "Contact" },
    ],
    intro:
      "These terms govern your use of WhatNow at whatnowindia.vercel.app, operated by Sanskar Chauhan, Hyderabad, Telangana, India. By using the site you agree to them. If you don't agree, please don't use the site.",
    sections: {
      whatWhatNowIs: {
        heading: "What WhatNow Is — and Isn't",
        body: `WhatNow provides free, independent, informational and editorial content about careers, exams, and study paths in India. It is not professional, career, legal, financial, medical, or admissions advice, and we are not a coaching institution, an agent, or a counselling service.

We give you information and frameworks; the decisions are yours.`,
      },
      noGuarantees: {
        heading: "No Guarantees",
        body: `We research carefully, but we do not guarantee that everything is accurate, complete, or current. Exam patterns, eligibility rules, cut-offs, fees, and seat numbers change, and official bodies are the source of truth.

Always verify anything that affects a real decision against the relevant official source — the exam authority, the institution, or the government notification — before acting on it. We are not liable for decisions you make based on our content.`,
      },
      acceptableUse: {
        heading: "Acceptable Use",
        body: `Do not use WhatNow unlawfully. Do not attempt to disrupt, overload, scrape, or reverse-engineer the site. Do not copy or republish substantial portions of our content without permission.

You may share links freely.`,
      },
      ip: {
        heading: "Intellectual Property",
        body: `Unless stated otherwise, the content on WhatNow is owned by Sanskar Chauhan or used with permission, and is provided for your personal, non-commercial use.

Trademarks and logos referenced — exam names, institution names — belong to their respective owners and are used for identification only.`,
      },
      community: {
        heading: "Community and Third-Party Platforms",
        body: `Our Discord, YouTube, and Instagram are third-party platforms with their own terms; your conduct there is also governed by those terms. Links to external sites are provided for convenience; we do not control or endorse them.`,
      },
      disclaimers: {
        heading: "Disclaimers and Limitation of Liability",
        body: `WhatNow is provided "as is" and "as available," without warranties of any kind to the extent permitted by law.

To the maximum extent permitted by applicable law, Sanskar Chauhan will not be liable for any indirect, incidental, or consequential loss arising from your use of, or reliance on, the site or its content.`,
      },
      indemnity: {
        heading: "Indemnity",
        body: `You agree to be responsible for your own use of the site and for any claims arising from your misuse of it.`,
      },
      minors: {
        heading: "Minors",
        body: `WhatNow is intended for students. If you are under 18, please use the site with the involvement of a parent or guardian.`,
      },
      governingLaw: {
        heading: "Governing Law and Jurisdiction",
        body: `These terms are governed by the laws of India. The courts at Hyderabad, Telangana have exclusive jurisdiction over any dispute arising from or related to these terms.`,
      },
      changes: {
        heading: "Changes",
        body: `We may update these terms. Continued use of WhatNow after an update means you accept the revised terms. We will update the "Last updated" date above when changes are made.`,
      },
      contact: {
        heading: "Contact",
        body: `Email: indiawhatnow@gmail.com`,
      },
    },
  },
  hi: {
    pageLabel: "कानूनी",
    title: "सेवा की शर्तें",
    lastUpdated: "अंतिम अपडेट: 17 जून 2026",
    pendingNotice:
      "यह पृष्ठ अंग्रेज़ी में है। हिंदी अनुवाद शीघ्र आ रहा है — अंग्रेज़ी संस्करण आधिकारिक है।",
    toc: [
      { id: "what-whatnow-is", label: "WhatNow क्या है" },
      { id: "no-guarantees", label: "कोई गारंटी नहीं" },
      { id: "acceptable-use", label: "स्वीकार्य उपयोग" },
      { id: "ip", label: "बौद्धिक संपदा" },
      { id: "community", label: "समुदाय और तृतीय पक्ष" },
      { id: "disclaimers", label: "अस्वीकरण और दायित्व" },
      { id: "indemnity", label: "क्षतिपूर्ति" },
      { id: "minors", label: "नाबालिग" },
      { id: "governing-law", label: "शासी कानून" },
      { id: "changes", label: "परिवर्तन" },
      { id: "contact", label: "संपर्क" },
    ],
    intro: null,
    sections: null,
  },
};

export default function TermsPage() {
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
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-10 p-5 rounded-2xl border border-slate-200 bg-slate-50">
              {en.intro}
            </p>

            {/* What WhatNow Is */}
            <section id="what-whatnow-is" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.whatWhatNowIs.heading}
              </h2>
              {en.sections.whatWhatNowIs.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* No Guarantees */}
            <section id="no-guarantees" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.noGuarantees.heading}
              </h2>
              {en.sections.noGuarantees.body.split("\n\n").map((para, i) => (
                <p key={i} className={`text-slate-600 text-sm leading-relaxed mb-4 font-medium ${i === 1 ? "font-black text-slate-900" : ""}`}>
                  {para}
                </p>
              ))}
            </section>

            {/* Acceptable Use */}
            <section id="acceptable-use" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.acceptableUse.heading}
              </h2>
              {en.sections.acceptableUse.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* IP */}
            <section id="ip" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.ip.heading}
              </h2>
              {en.sections.ip.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* Community */}
            <section id="community" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.community.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.community.body}
              </p>
            </section>

            {/* Disclaimers */}
            <section id="disclaimers" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.disclaimers.heading}
              </h2>
              {en.sections.disclaimers.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* Indemnity */}
            <section id="indemnity" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.indemnity.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.indemnity.body}
              </p>
            </section>

            {/* Minors */}
            <section id="minors" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.minors.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.minors.body}
              </p>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="mb-10">
              <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {en.sections.governingLaw.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {en.sections.governingLaw.body}
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
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                  Email:{" "}
                  <a
                    href="mailto:indiawhatnow@gmail.com"
                    className="text-[#5563ED] underline underline-offset-2 hover:text-indigo-700"
                  >
                    indiawhatnow@gmail.com
                  </a>
                </p>
              </div>
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
