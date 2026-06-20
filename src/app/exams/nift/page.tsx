import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';
import { pageMeta } from "@/lib/seo";

const niftAnalyticsData = {
  trends: [
    { year: 2022, applicants: 17000, seats: 2600 },
    { year: 2023, applicants: 18500, seats: 2700 },
    { year: 2024, applicants: 20000, seats: 2800 },
    { year: 2025, applicants: 20000, seats: 2800 },
    { year: 2026, applicants: 22000, seats: 2800 }
  ],
  seatFunnel: {
    applicants: 22000,
    seats: 2800
  }
};

export const metadata = pageMeta({
  title: 'NIFT Entrance — Fashion Design at India\'s Premier Institutes | WhatNow',
  description: 'The entrance exam for Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.FTech) programs at all 16 NIFT campuses across India.',
  path: "/exams/nift",
});

export default function NiftHubPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nift-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nift-hub-grid)" />
          </svg>
          
          {/* Layered glowing blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

          {/* Smooth vector paths */}
          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="nift-hub-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="nift-hub-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-hub-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-hub-wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-[#5563ED] transition-colors">Exams</Link>
            <span>›</span>
            <span className="text-pink-600">NIFT</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark dark:text-slate-100">
            NIFT Entrance — Fashion Design at <em className="text-pink-600 not-italic">India&apos;s Premier Institutes</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            The gateway into Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.FTech) programs across all 16 NIFT campuses. ~20,000 aspirants. Two stages: Creative Ability Test (CAT) and General Ability Test (GAT). This is everything you need — no coaching centre bias.
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            Last reviewed: May 2026 · Based on NIFT 2026 official prospectus
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20 mt-12">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Exam Window</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100"><span className="text-pink-600">Feb</span> 2026</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Marks</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">200+200</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Duration</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">3+3 hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Seats (B.Des)</span>
            <span className="text-2xl md:text-3xl font-black text-pink-600">~2,800</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Campuses</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">16</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Aspirants</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark dark:text-slate-100">~20K</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-neutral-dark dark:text-slate-100 text-sm md:text-base">Related Career Guide: Fashion Design</span>
          </div>
          <Link href="/careers/fashion-design" className="bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            View Career
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={niftAnalyticsData} colorTheme="pink" />

        {/* ─── WHAT IS NIFT ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            What is NIFT Entrance
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>
              The NIFT Entrance Exam is India&apos;s most recognized gateway into fashion and textile education. Conducted by the National Institute of Fashion Technology every February, it opens doors to B.Des (Fashion Design, Textile Design, Knitwear Design, Leather Design, Accessory Design) and B.FTech (Apparel Production) programs across 16 campuses nationwide.
            </p>
            <p>
              The exam has two distinct papers: the Creative Ability Test (CAT) — which evaluates your drawing, spatial sense, colour understanding, and design thinking — and the General Ability Test (GAT), covering quantitative ability, communication, English, and general knowledge. For B.Des, both scores matter. For B.FTech, only GAT is considered.
            </p>
            <p>
              Unlike engineering entrances, NIFT rewards creative portfolios and visual thinking. However, the GAT is no walkover — most aspirants underestimate its weightage and lose out. Coaching centres push CAT prep heavily but often neglect GAT strategy, which costs candidates real ranks.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {['NIFT Delhi — Flagship Campus', 'NIFT Mumbai — 280 seats', 'NIFT Bengaluru', 'NIFT Hyderabad', 'NIFT Chennai', 'NIFT Kolkata', 'NIFT Gandhinagar', 'NIFT Patna', 'NIFT Raebareli', 'NIFT Shillong', 'NIFT Bhopal', 'NIFT Jodhpur', 'NIFT Kangra', 'NIFT Kannur', 'NIFT Srinagar', 'NIFT Daman'].map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-pink-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black">Situation test alert:</strong> Shortlisted B.Des candidates are called for a Situation Test — a hands-on studio test where you build models from materials provided. This is conducted at NIFT campuses and is a make-or-break stage that coaching centres rarely prepare you for. Your material handling, 3D thinking, and time management under pressure matter more than drawing skill here.
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            Everything on NIFT — WhatNow Guides
          </h2>

          <div className="space-y-4">

            {/* Card 1 */}
            <Link href="/exams/nift/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-pink-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-pink-600 transition-colors duration-300">What It Is — The complete breakdown</h3>
                <div className="text-pink-600 text-xs font-semibold font-mono mb-4">/exams/nift/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Everything about the NIFT entrance: CAT and GAT paper patterns, marking scheme, eligibility criteria (age limits, stream requirements), all 16 campus profiles, seat matrix by category, counselling process, and what closing ranks actually look like.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/40">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/nift/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-pink-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-pink-600 transition-colors duration-300">Is It For You — Suitability Check</h3>
                <div className="text-pink-600 text-xs font-semibold font-mono mb-4">/exams/nift/is-it-for-you</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Should you actually target NIFT? What kind of students thrive here versus regret it? The reality of fashion industry jobs, salary expectations, and whether the investment makes sense for your financial background. Honest self-assessment before you commit.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/nift/resources" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-pink-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-pink-600 transition-colors duration-300">Resources — CAT, GAT & Situation Test Prep</h3>
                <div className="text-pink-600 text-xs font-semibold font-mono mb-4">/exams/nift/resources</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Detailed syllabus breakdowns for CAT (drawing, colour theory, spatial reasoning) and GAT (quant, verbal, GK). Past papers, mock tests, coaching vs. self-study analysis, and a practical week-by-week preparation roadmap. Plus: how to actually prepare for the Situation Test.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/nift/scholarships" className="group flex flex-col md:flex-row gap-6 bg-emerald-50/40 dark:bg-emerald-950/30 backdrop-blur-sm border border-emerald-200/60 dark:border-emerald-900/40 rounded-[2rem] p-6 md:p-8 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:diploma-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-emerald-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">04</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-emerald-600 transition-colors duration-300">Fees, Scholarships & ROI</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/nift/scholarships</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Complete fee structures across all 16 campuses, government scholarship schemes, category-wise fee waivers, education loan options, and an honest return-on-investment analysis: what a NIFT graduate actually earns in years 1, 3, and 5 across different specialisations.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/40">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/nift/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:users-group-two-rounded-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark dark:text-slate-100 mb-1 group-hover:text-amber-600 transition-colors duration-300">Convince Your Parents — With actual data</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/nift/convince-parents</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Fashion isn&apos;t a gamble — but you need to show them the math. This guide equips you with placement stats, buying house starting packages, and how to handle objections about job stability.
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
