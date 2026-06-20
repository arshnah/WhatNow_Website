import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "CLAT — Preparation Strategy & Recommended Books | WhatNow",
  description: "Curated self-study roadmap, legal reasoning guides, mock analysis plans, and recommended books for CLAT aspirants.",
  path: "/exams/clat/resources",
});

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="clat-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-resources-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="clat-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="clat-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#clat-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#clat-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
        {breadcrumbs}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
        {title}
      </h1>
    </div>
  </section>
);

const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function ClatResourcesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="CLAT — Self-Study Blueprint"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-emerald-600 transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/clat" className="hover:text-emerald-600 transition-colors">
              CLAT
            </Link>{" "}
            <span>›</span>
            <span className="text-emerald-600">Resources & Prep</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Self-Prep Books Worth Buying">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Instead of spending ₹1L on corporate coaching packages, you can build legal reasoning and analytical speed using standard publications:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">Legal Reasoning</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Legal Awareness & Reasoning</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                By AP Bhardwaj. Exceptional guide for learning legal terminology, constitution basics, torts, contracts, and solving previous years' legal problem passages.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">Logical Reasoning</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Analytical Reasoning</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                By MK Pandey. Highly recommended for critical logical analysis: identifying arguments, premises, fallacies, and assumptions tested in the logic section.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">Quantitative Aptitude</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Quantitative Aptitude</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                By RS Aggarwal. Practice data interpretation chapters (graphs, tables, pie charts) which make up 10% of the CLAT paper.
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" title="The Daily Reading Ritual">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Since CLAT consists of ~15,000 words across all passages to read in 120 minutes, your **reading speed is your primary asset**.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4">
            <h4 className="font-black text-xl text-neutral-dark">How to build speed:</h4>
            <p className="text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
              Read the Editorial and Opinion pages of **The Hindu** or **The Indian Express** daily. Highlight the central argument, trace how the author supports it, and summarize the passage in two sentences. This directly mirrors the reading comprehension and logical reasoning questions.
            </p>
          </div>
        </Section>

        <Section number="03" title="Mock Log & Error Analysis">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Attempt at least 30 full-length mocks. For each mock, maintain an error tracker separating mistakes into:
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl bg-white dark:bg-slate-800/50 flex items-start gap-4">
              <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black shrink-0 text-xs">A</span>
              <div>
                <h5 className="font-black text-slate-700 dark:text-slate-300">Conceptual Errors</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">You didn't know the legal principle (e.g. difference between theft and extortion). Revise theory.</p>
              </div>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl bg-white dark:bg-slate-800/50 flex items-start gap-4">
              <span className="h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-black shrink-0 text-xs">B</span>
              <div>
                <h5 className="font-black text-slate-700 dark:text-slate-300">Silly Mistakes</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Misread the word "NOT" in the option. Focus on deliberate, calm reading during tests.</p>
              </div>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl bg-white dark:bg-slate-800/50 flex items-start gap-4">
              <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-black shrink-0 text-xs">C</span>
              <div>
                <h5 className="font-black text-slate-700 dark:text-slate-300">Time Penalties</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Stuck on a GK question for 3 minutes. Practice immediate skipping; you cannot afford to waste seconds.</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
