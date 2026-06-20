import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: 'UCEED — Design at an IIT | WhatNow',
  description: 'The one exam that gets you into the Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, and four other IITs.',
  path: "/exams/uceed",
});

const uceedAnalyticsData = {
  trends: [
    { year: 2022, applicants: 12100, seats: 205 },
    { year: 2023, applicants: 13500, seats: 205 },
    { year: 2024, applicants: 14200, seats: 225 },
    { year: 2025, applicants: 15000, seats: 245 },
    { year: 2026, applicants: 16200, seats: 245 }
  ],
  seatFunnel: {
    applicants: 16200,
    seats: 245
  }
};

export default function UceedHubPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      <JsonLd
        data={guideJsonLd({
          title: 'UCEED — Design at an IIT | WhatNow',
          description: 'The one exam that gets you into the Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, and four other IITs.',
          path: "/exams/uceed",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
          ],
        })}
      />
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="uceed-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#uceed-hub-grid)" />
          </svg>
          
          {/* Layered glowing blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

          {/* Smooth vector paths */}
          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="uceed-hub-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="uceed-hub-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-hub-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-hub-wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#5563ED" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
            <span>›</span>
            <span className="text-primary">UCEED</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            UCEED — Design at an <em className="text-primary not-italic">IIT</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            The one exam that gets you into the Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, and four other IITs. 245 seats. Around 15,000 students. This is everything you need to know — no coaching centre bias, no fluff.
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            Last reviewed: May 2026 · Based on UCEED 2026 official brochure
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Exam Date</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-primary">Jan</span> 18</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Marks</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">300</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Duration</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">3 hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Seats</span>
            <span className="text-2xl md:text-3xl font-black text-primary">245</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Institutes</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">7</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Aspirants (2025)</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">~15K</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-neutral-dark text-sm md:text-base">Related Career Guide: Product & UX Design</span>
          </div>
          <Link href="/careers/design" className="bg-primary hover:bg-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            View Career
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={uceedAnalyticsData} colorTheme="indigo" />

        {/* ─── WHAT IS UCEED ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            What is UCEED
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>
              UCEED — Undergraduate Common Entrance Exam for Design — is conducted by IIT Bombay every January. Clear it, and you&apos;re in the running for a Bachelor of Design seat at one of seven IITs and IIITDM Jabalpur. It&apos;s the only route into IIT design programs at the undergraduate level.
            </p>
            <p>
              Unlike JEE, UCEED is open to students from any stream — Science, Commerce, Arts and Humanities. The exam tests visual thinking, spatial reasoning, design sensitivity, and drawing — not Physics or Chemistry. If you&apos;ve spent years wondering whether design is where you belong, this is the exam you&apos;re looking for.
            </p>
            <p>
              The catch: 245 seats. Around 15,000 aspirants. Only about 36% even clear the first-round cutoff to have their Part B (drawing) evaluated. This guide exists to make sure you understand the system before you walk in.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {['IIT Bombay — 37 seats', 'IIT Delhi — 20 seats', 'IIT Guwahati — 56 seats', 'IIT Hyderabad — 30 seats', 'IIT Indore — 16 seats', 'IIT Roorkee — 20 seats', 'IIITDM Jabalpur — 66 seats'].map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black">Stream restriction — read this before anything else.</strong> All streams can write the exam. But Arts/Commerce students can only apply to IIT Bombay, IIT Delhi, IIT Hyderabad, and IIT Indore — not Guwahati or Roorkee. If you&apos;re from a non-PCM background, your college choices are narrower. This is buried in eligibility tables everywhere. We&apos;re putting it here.
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            Everything on UCEED — WhatNow Guides
          </h2>

          <div className="space-y-4">
            {/* Card 1 */}
            <Link href="/exams/uceed/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-primary/45 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-primary leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-primary transition-colors duration-300">What It Is — The complete breakdown</h3>
                <div className="text-primary text-xs font-semibold font-mono mb-4">/exams/uceed/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Everything about the exam itself. How Part A and Part B work, what the marking scheme actually means (especially those tricky MSQs), complete syllabus, eligibility, all 7 institutes in detail, seat matrix, counselling process, and what closing ranks look like in practice. If you want to understand UCEED from scratch, start here.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/40">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/uceed/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-primary/45 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-primary leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-primary transition-colors duration-300">Is It For You — Honest self-check</h3>
                <div className="text-primary text-xs font-semibold font-mono mb-4">/exams/uceed/is-it-for-you</div>
                <p className="text-slate-650 dark:text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                  This is the question most guides skip. Should you actually go for UCEED? What kind of person thrives in a BDes program versus regrets it? Questions you should ask yourself before committing a year — or two — to this. No cheerleading, no coaching centre pitch.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/uceed/resources" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-primary/45 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-primary leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-primary transition-colors duration-300">Resources — What actually helps</h3>
                <div className="text-primary text-xs font-semibold font-mono mb-4">/exams/uceed/resources</div>
                <p className="text-slate-655 dark:text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                  Books worth buying, books worth skipping, coaching vs. self-study (honest assessment), where to find past papers for free, mock test platforms, and a week-by-week preparation roadmap. Written by someone who&apos;s seen what works and what wastes time.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/uceed/scholarships" className="group flex flex-col md:flex-row gap-6 bg-emerald-50/40 dark:bg-emerald-950/30 backdrop-blur-sm border border-emerald-200/60 dark:border-emerald-900/40 rounded-[2rem] p-6 md:p-8 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:diploma-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-emerald-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">04</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-emerald-600 transition-colors duration-300">Scholarships — Don&apos;t pay more than you have to</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/uceed/scholarships</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Institute-wise fee waivers, government scholarship schemes, and everything available to BDes students at IITs. SC/ST students get full tuition waiver. General category students under ₹5 lakh annual income qualify for significant relief. The fee is not as scary as it looks.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/40">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/uceed/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:users-group-two-rounded-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-amber-600 transition-colors duration-300">Convince Your Parents — With actual data</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/uceed/convince-parents</div>
                <p className="text-slate-650 dark:text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                  Design at an IIT isn&apos;t a risk — but you&apos;ll need to explain that. This guide arms you with placement data, salary figures, career paths, and how to answer the hard questions: job security, prestige, &ldquo;is this a real IIT degree?&rdquo; Have the conversation with facts, not feeling.
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
