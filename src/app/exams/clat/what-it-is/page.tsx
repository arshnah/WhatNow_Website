import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "CLAT — Exam Pattern, Syllabus & Weightage | WhatNow",
  description: "Complete guide to the CLAT exam pattern: 120 questions, section-wise weightage, marking scheme, and eligibility guidelines.",
  path: "/exams/clat/what-it-is",
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
          <pattern id="clat-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-what-it-is-grid)" />
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

export default function ClatWhatItIsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "CLAT — Exam Pattern, Syllabus & Weightage | WhatNow",
          description: "Complete guide to the CLAT exam pattern: 120 questions, section-wise weightage, marking scheme, and eligibility guidelines.",
          path: "/exams/clat/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "CLAT", path: "/exams/clat" },
            { name: "What It Is", path: "/exams/clat/what-it-is" },
          ],
        })}
      />
      <PageHeader
        title="CLAT — The Exam Breakdown"
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
            <span className="text-emerald-600">What It Is</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="The 120-Question Offline Format">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            CLAT is a pen-and-paper (offline) exam consisting of **120 multiple-choice questions** to be solved in **2 hours (120 minutes)**. The paper is entirely comprehension-based, consisting of passage-based questions testing reading comprehension, analytical speed, and critical thinking.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8 bg-white dark:bg-slate-800/50">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Subject Section
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Approx. Questions
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Weightage (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Legal Reasoning (Passage-based)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    28 - 32 questions
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    25%
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Current Affairs & General Knowledge
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    28 - 32 questions
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    25%
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    English Language (Comprehension)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    22 - 26 questions
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    20%
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Logical Reasoning (Critical Logic)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    22 - 26 questions
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    20%
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    Quantitative Techniques (Data Interpretation)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                    10 - 14 questions
                  </td>
                  <td className="p-4 text-emerald-600 font-black">
                    10%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" title="Marking Rules & Negative Penalties">
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="font-black text-xl text-neutral-dark">Negative Marking is the Real Filter</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              Each correct answer awards **+1 mark**, while an incorrect answer penalizes you by **-0.25 marks**. Unanswered questions receive 0 marks. Because the paper is highly timed (one minute per question, including reading lengthy passages), accuracy and selection of which passages to attempt vs skip determine whether you cross the score threshold.
            </p>
          </div>
        </Section>

        <Section number="03" title="Eligibility & Registration Requirements">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
            Candidates must have passed Class 12 or equivalent with a minimum of **45% marks** (40% for SC/ST candidates). Candidates appearing in their Class 12 board exams are also eligible to register. There is **no upper age limit** for appearing in CLAT.
          </p>
        </Section>
      </div>
    </main>
  );
}
