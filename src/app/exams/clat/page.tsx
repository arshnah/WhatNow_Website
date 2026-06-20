import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';
import { pageMeta } from "@/lib/seo";

const clatAnalyticsData = {
  trends: [
    { year: 2022, applicants: 58000, seats: 2800 },
    { year: 2023, applicants: 62000, seats: 3000 },
    { year: 2024, applicants: 68000, seats: 3200 },
    { year: 2025, applicants: 75000, seats: 3200 },
    { year: 2026, applicants: 82000, seats: 3200 }
  ],
  seatFunnel: {
    applicants: 82000,
    seats: 3200
  }
};

export const metadata = pageMeta({
  title: 'CLAT — Law Entrance Exam | WhatNow',
  description: 'Common Law Admission Test for admission to 5-year integrated BA LLB and BBA LLB programs across 24 premium National Law Universities (NLUs) in India.',
  path: "/exams/clat",
});

export default function ClatHubPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="clat-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#clat-hub-grid)" />
          </svg>
          
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />

          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="clat-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="clat-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#clat-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#clat-wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
            <span>›</span>
            <span className="text-emerald-600">CLAT</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            CLAT — Gateway to the <em className="text-emerald-600 not-italic">Elite NLUs</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            The Common Law Admission Test is the primary entrance for integrated 5-year law degrees (BA LLB, BBA LLB) at the 24 premier National Law Universities in India. High reading speed, legal reasoning, and mock analysis are key to entering these top institutions.
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            Last reviewed: May 2026 · Based on CLAT official guidelines & updates
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20 mt-12">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Exam Window</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-emerald-600">Dec</span> 2025/26</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Questions</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">120</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Duration</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">2 hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Seats</span>
            <span className="text-2xl md:text-3xl font-black text-emerald-600">~3,200</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">NLUs</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">24</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Aspirants</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">~70K</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-neutral-dark text-sm md:text-base">Related Career Guide: Law</span>
          </div>
          <Link href="/careers/law" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            View Career
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={clatAnalyticsData} colorTheme="emerald" />

        {/* ─── WHAT IS CLAT ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            What is CLAT
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>
              The Common Law Admission Test (CLAT) is a national-level entrance exam conducted by the Consortium of National Law Universities. It is the gatekeeper for undergraduate (UG) admissions to 24 NLUs across India. The score is also accepted by over 60 private law universities and several public sector undertakings (PSUs) for recruitment.
            </p>
            <p>
              CLAT is a 2-hour offline pen-and-paper test comprising 120 multiple-choice questions. The exam heavily tests reading comprehension, analytical reasoning, and critical thinking across five sections: English Language, Current Affairs & General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques. Unlike other Indian exams, CLAT does not require rote memorization but demands immense reading speed and comprehension capability.
            </p>
            <p>
              Preparation for CLAT revolves around building a habit of reading quality editorials (like The Hindu or Indian Express), mastering logical fallacies, and solving dozens of mock tests to improve speed. There is a negative marking of 0.25 for every incorrect answer. Getting into the top 3 NLUs — NLSIU Bangalore, NALSAR Hyderabad, and NUJS Kolkata — requires a score typically in the top 500 ranks.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {['NLSIU Bangalore', 'NALSAR Hyderabad', 'WBNUJS Kolkata', 'NLU Jodhpur', 'GNLU Gandhinagar', 'NLIU Bhopal', 'HNLU Raipur', 'RMLNLU Lucknow', 'CNLU Patna', 'NLU Odisha', '24 participating NLUs'].map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
              <strong className="font-black text-emerald-700">Eligibility & Syllabus Focus:</strong> Candidates must have secured a minimum of 45% marks (40% for SC/ST) in their Class 12 or equivalent examination. There is no upper age limit to sit for CLAT UG. Preparation should focus heavily on the Legal Reasoning section (which carries 25% weightage) and Current Affairs (which carries another 25% weightage). Speed and comprehension are your main assets.
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            Everything on CLAT — WhatNow Guides
          </h2>

          <div className="space-y-4">

            {/* Card 1 */}
            <Link href="/exams/clat/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-emerald-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-emerald-600 transition-colors duration-300">Exam Pattern & Sectional Weightage</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/clat/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Deep dive into the 120-question format: Sectional breakdowns, sample passage types, marking scheme, and time management strategies for the 2-hour window.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100/50 dark:border-emerald-900/40">✓ Shell Ready</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/clat/scholarships" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-emerald-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-emerald-600 transition-colors duration-300">NLU Seat Matrix & Expected Cutoffs</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/clat/scholarships</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  NLU-by-NLU seat allocation, reservation policies, domicile quotas, and historical opening/closing ranks for NLSIU, NALSAR, and other premium colleges.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100/50 dark:border-emerald-900/40">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/clat/resources" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-emerald-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-emerald-600 transition-colors duration-300">CLAT Self-Study Plan & Mock Strategy</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/clat/resources</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  How to prep without ₹1L coaching packages. Editorial reading list, critical reasoning resources, and how to analyze mocks to cross the 90+ score barrier.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100/50 dark:border-emerald-900/40">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/clat/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-emerald-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-emerald-600 transition-colors duration-300">AILET vs CLAT — NLU Delhi entrance</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/clat/is-it-for-you</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Why NLU Delhi does not accept CLAT. Comparing AILET pattern, difficulty level, seat matrix, and preparation strategy with the standard CLAT exam.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100/50 dark:border-emerald-900/40">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/clat/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:users-group-two-rounded-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-amber-600 transition-colors duration-300">Convince Your Parents — With actual data</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/clat/convince-parents</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  NLU corporate placements are highly secure, but parents need the figures. Access talking points on starting salaries, and how to counter objections.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}
