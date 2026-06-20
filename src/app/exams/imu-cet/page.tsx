import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';
import { pageMeta } from "@/lib/seo";

const imucetAnalyticsData = {
  trends: [
    { year: 2022, applicants: 18000, seats: 2500 },
    { year: 2023, applicants: 20000, seats: 2800 },
    { year: 2024, applicants: 22000, seats: 3000 },
    { year: 2025, applicants: 25000, seats: 3000 },
    { year: 2026, applicants: 27000, seats: 3000 }
  ],
  seatFunnel: {
    applicants: 27000,
    seats: 3000
  }
};

export const metadata = pageMeta({
  title: 'IMU CET — Merchant Navy Entrance Exam | WhatNow',
  description: 'Indian Maritime University Common Entrance Test for B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science programs across IMU campuses and affiliated academies.',
  path: "/exams/imu-cet",
});

export default function ImuCetHubPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="imucet-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#imucet-hub-grid)" />
          </svg>
          
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="imucet-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="imucet-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
            <span>›</span>
            <span className="text-orange-600">IMU CET</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            IMU CET — Your Entry into the <em className="text-orange-600 not-italic">Merchant Navy</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            The Indian Maritime University Common Entrance Test is the primary gateway into B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science (DNS) programs. One exam, multiple career paths on the ocean. ~25,000 aspirants for ~3,000 seats.
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            Last reviewed: June 2026 · Researched from first-hand accounts of serving and trainee mariners, plus DG Shipping &amp; IMU official notifications.
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Exam Window</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-orange-600">Jun</span> 2026</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Marks</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">200</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Duration</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">3 hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Seats</span>
            <span className="text-2xl md:text-3xl font-black text-orange-600">~3,000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Programs</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">3</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Aspirants</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">~25K</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-neutral-dark text-sm md:text-base">Related Career Guide: Merchant Navy</span>
          </div>
          <Link href="/careers/merchant-navy" className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            View Career
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={imucetAnalyticsData} colorTheme="orange" />

        {/* ─── WHAT IS IMU CET ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            What is IMU CET
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>
              IMU CET (Indian Maritime University Common Entrance Test) is a national-level entrance exam conducted by the Indian Maritime University for admission into undergraduate maritime programs. It covers B.Sc Nautical Science (Deck side), B.Tech Marine Engineering (Engine side), and the accelerated DNS (Diploma in Nautical Science) course.
            </p>
            <p>
              The exam tests Physics, Chemistry, Mathematics, English, and General Aptitude — all at the Class 12 level. It&apos;s a 3-hour computer-based test with 200 objective questions. There is no negative marking, which makes it significantly more forgiving than JEE or NEET. Most candidates who are serious about maritime careers and have a decent PCM foundation can clear IMU CET with 3-4 months of focused preparation.
            </p>
            <p>
              IMU CET scores are accepted by IMU&apos;s own campuses (Chennai, Mumbai, Kolkata, Visakhapatnam, Cochin, Navi Mumbai) as well as over 100 DG Shipping-approved private maritime academies and training institutes. Your rank determines which campus and program you get — and the quality difference between top IMU campuses and low-tier private academies is enormous.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {['IMU Chennai — Flagship', 'IMU Mumbai', 'IMU Kolkata', 'IMU Visakhapatnam', 'IMU Cochin', 'IMU Navi Mumbai', 'AMET Chennai', 'TMI Pune', 'Tolani Mumbai', 'Coimbatore Marine College', '100+ DG-approved academies'].map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black">Medical fitness is non-negotiable:</strong> Even if you top IMU CET, you cannot join any maritime program without clearing the DG Shipping-mandated medical examination. Requirements include: 6/6 vision without glasses (or corrected to 6/6 with surgery pre-admission), normal colour vision, no chronic conditions, and BMI within range. Get your eyes and medical checked <em>before</em> you start preparing — not after you get your rank.
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            Everything on IMU CET — WhatNow Guides
          </h2>

          <div className="space-y-4">

            {/* Card 1 */}
            <Link href="/exams/imu-cet/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">What It Is — Full exam breakdown</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Paper pattern, subject-wise mark distribution (Physics, Chemistry, Maths, English, Aptitude), eligibility criteria, age limits, registration process, exam centres, and the complete counselling/allocation process.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/imu-cet/entry-paths" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">DNS vs B.Sc vs B.Tech — Which path?</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/entry-paths</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Duration, cost, career trajectory, and earning potential compared across all three maritime entry paths. Which is fastest, which pays best long-term, and which suits PCM backgrounds.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/imu-cet/prep" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">Preparation Strategy — Self-study roadmap</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/prep</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Subject-wise preparation strategy, best books, mock test resources, previous year paper analysis, and a 3-month preparation timeline. Coaching is not necessary for IMU CET — here is how to do it yourself.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/imu-cet/medical" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-orange-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-orange-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-orange-600 transition-colors duration-300">Medical Test & DG Shipping Norms</h3>
                <div className="text-orange-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/medical</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Complete guide to the mandatory medical fitness test: vision requirements (6/6 rule), colour blindness tests, BMI standards, and what disqualifies you.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/imu-cet/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:users-group-two-rounded-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-amber-600 transition-colors duration-300">Convince Your Parents — With actual data</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/imu-cet/convince-parents</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Merchant Navy pay is tax-free in USD, but parents need to see the safety regulations and company sponsorship placement guarantee details.
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
