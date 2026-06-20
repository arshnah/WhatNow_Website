import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "CLAT — Is It For You? & AILET Comparison | WhatNow",
  description: "Assess your suitability for law careers, understand the corporate law vs litigation lifestyle split, and compare CLAT with AILET.",
  path: "/exams/clat/is-it-for-you",
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
          <pattern id="clat-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-is-it-for-you-grid)" />
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

export default function ClatIsItForYouPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — Is It For You? & AILET Comparison | WhatNow",
          description: "Assess your suitability for law careers, understand the corporate law vs litigation lifestyle split, and compare CLAT with AILET.",
          path: "/exams/clat/is-it-for-you",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
            { name: "Is It For You?", path: "/exams/clat/is-it-for-you" },
          ],
        })}
      />
      <PageHeader
        title="CLAT — Is Law the Right Choice?"
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
            <span className="text-emerald-600">Is It For You?</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Corporate Desk vs Courtroom Litigation">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Indian legal professions are divided into two distinct lifestyles. Ensure you understand what you are targeting before enrolling:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">Corporate Advisory</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Corporate Law Firms</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                Work involves mergers, acquisitions, regulatory compliance, contract drafting, and IP registration. Pay is immediate (₹12L-₹18L starting average at Tier-1 firms). The trade-off: **12-14 hour workdays at office desks** with high corporate stress levels.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-2">Courtroom Litigation</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Advocacy & Court Trials</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                Traditional court litigation. Offers independence, prestige, and high long-term earning potential. The catch: **years of low-paid apprenticeship (₹10,000 - ₹25,000/mo)** under senior advocates before establishing a private practice.
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" title="The Suitability Check">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Law matches your personality if:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed font-semibold space-y-3">
            <li>You can read, digest, and summarize over 50 pages of complex documents daily.</li>
            <li>You enjoy structural logic, reasoning, debates, and looking up precise definitions.</li>
            <li>You have high mental endurance to deal with intensive workloads, research, and client deadlines.</li>
          </ul>
        </Section>

        <Section number="03" title="CLAT vs AILET (NLU Delhi)">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              NLU Delhi's Separate Entrance Exam
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              NLU Delhi does not accept CLAT scores. It conducts its own entrance exam: **AILET (All India Law Entrance Test)**.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              AILET consists of **150 questions in 120 minutes** across three sections: English Language, General Knowledge, and Logical Reasoning. While legal knowledge is not tested directly in a separate section, it is integrated into the Logical Reasoning section. Competition is fierce as there are only **~110 seats** available for UG candidates.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
