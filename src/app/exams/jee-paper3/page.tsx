import React from 'react';
import Link from 'next/link';
import VisualAnalytics from '@/components/ui/VisualAnalytics';
import { Icon } from '@iconify/react';

const jeePaper3AnalyticsData = {
  trends: [
    { year: 2022, applicants: 22000, seats: 850 },
    { year: 2023, applicants: 24000, seats: 900 },
    { year: 2024, applicants: 26000, seats: 950 },
    { year: 2025, applicants: 28000, seats: 950 },
    { year: 2026, applicants: 30000, seats: 950 }
  ],
  seatFunnel: {
    applicants: 30000,
    seats: 950
  }
};

export const metadata = {
  title: 'JEE Main Paper 3 — B.Planning Entrance Exam | WhatNow',
  description: 'Gateway to Bachelor of Planning (B.Plan) programs at School of Planning and Architecture (SPA Delhi, Bhopal, Vijayawada) and top NITs.',
};

export default function JeePaper3HubPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C]">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#0B0F1A] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* SVG Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="jee-paper3-hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#jee-paper3-hub-grid)" />
          </svg>
          
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />

          <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="jee-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="jee-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-wave-grad-1)" />
            <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#wave-grad-2)" />
            <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.1" />
            <path d="M0,240 C480,120 960,320 1440,160" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
            <span>›</span>
            <span className="text-teal-600">JEE Paper 3 (B.Planning)</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
            JEE Paper 3 — Entry into <em className="text-teal-600 not-italic">Top Planning Schools</em>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-6">
            JEE Main Paper 3 is the exclusive national-level entrance exam for Bachelor of Planning (B.Plan) programs at the prestigious School of Planning and Architecture (SPAs) and select NITs. If you want to design sustainable city spaces, transit routes, and policy infrastructure, this is your primary gateway.
          </p>

          <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
            Last reviewed: May 2026 · Based on National Testing Agency (NTA) guidelines
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20 mt-12">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Exam Window</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-teal-600">Jan & Apr</span></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Questions</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">105</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Duration</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">3 hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Total Seats</span>
            <span className="text-2xl md:text-3xl font-black text-teal-600">~950</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Institutes</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">SPAs, NITs & GFTIs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">Aspirants</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">~30K</span>
          </div>
        </div>

        {/* ─── RELATED CAREER LINK ─── */}
        <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Icon icon="solar:compass-bold-duotone" className="w-8 h-8 text-teal-600" />
            <span className="font-bold text-neutral-dark text-sm md:text-base">Related Career Guide: Urban Planning</span>
          </div>
          <Link href="/careers/urban-planning" className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-sm">
            View Career
          </Link>
        </div>

        {/* ─── VISUAL ANALYTICS ─── */}
        <VisualAnalytics type="exam" data={jeePaper3AnalyticsData} colorTheme="teal" />

        {/* ─── WHAT IS JEE MAIN PAPER 3 ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            What is JEE Main Paper 3
          </h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-12">
            <p>
              JEE Main Paper 3 is a separate entrance exam conducted by the National Testing Agency (NTA) for admission to undergraduate Bachelor of Planning (B.Plan) programs. While JEE Paper 1 is for B.Tech and Paper 2 is for B.Arch, Paper 3 is specifically crafted to evaluate a candidate&apos;s aptitude for urban planning, sustainability, general geography, and numerical skills.
            </p>
            <p>
              The exam is a 3-hour computer-based test containing three sections: Mathematics (Part I), Aptitude Test (Part II), and Planning-based Questions (Part III). It consists of 105 questions in total, carrying 400 marks. Part III is highly specialized and focuses on general awareness of social, economic, and political aspects of development, environmental issues, city planning elements, and basic map reading.
            </p>
            <p>
              Admission to premium government planning schools, such as the Schools of Planning and Architecture (SPA Delhi, SPA Bhopal, SPA Vijayawada), as well as central and state-funded institutes, is allocated through JoSAA (Joint Seat Allocation Authority) counselling based entirely on the JEE Paper 3 rank.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {['SPA Delhi', 'SPA Bhopal', 'SPA Vijayawada', 'CEPT University Ahmedabad', 'NIT Bhopal', 'MANIT Bhopal', 'Amity School of Planning', 'JoSAA Counselling'].map(inst => (
              <span key={inst} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-teal-50 dark:bg-teal-950/30 border-l-4 border-teal-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-teal-700">Stream Flexibility:</strong> Unlike traditional B.Tech streams that strictly require Chemistry and Physics, candidates from any stream (Science, Commerce, or Arts) who have studied <strong>Mathematics in Class XII</strong> are eligible to write JEE Main Paper 3 and qualify for JoSAA seat allocation.
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
            Everything on JEE Paper 3 — WhatNow Guides
          </h2>

          <div className="space-y-4">

            {/* Card 1 */}
            <Link href="/exams/jee-paper3/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-teal-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-teal-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-teal-600 transition-colors duration-300">Exam Pattern & Syllabus Breakdown</h3>
                <div className="text-teal-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/what-it-is</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Deep dive into the 105-question format: Mathematics, general aptitude, and the 25 planning-specific questions. Understanding MSQ, MCQ formats and marking.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/jee-paper3/scholarships" className="group flex flex-col md:flex-row gap-6 bg-emerald-50/40 dark:bg-emerald-950/30 backdrop-blur-sm border border-emerald-200/60 dark:border-emerald-900/40 rounded-[2rem] p-6 md:p-8 hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:diploma-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-emerald-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-emerald-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">02</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-emerald-600 transition-colors duration-300">SPA Fees, Seat Matrix & ROI</h3>
                <div className="text-emerald-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/scholarships</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  JoSAA seat matrix for B.Plan, reservation classifications, tuition fees at SPA Delhi, Bhopal, and Vijayawada, and merit-cum-means scholarships.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/jee-paper3/resources" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-teal-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-teal-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-teal-600 transition-colors duration-300">Resources & Self-Study Guides</h3>
                <div className="text-teal-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/resources</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Self-prep guidelines without expensive classes. Key books for Part III planning, sample questions, free mock resources, and official syllabus guidelines.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/jee-paper3/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 hover:border-teal-300 hover:bg-white/90 dark:hover:bg-slate-800/70 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-teal-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-teal-600 transition-colors duration-300">B.Plan Suitability & Self-Assessment</h3>
                <div className="text-teal-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/is-it-for-you</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Should you write JEE Paper 3? Honest comparison of B.Plan vs B.Arch vs Civil Engineering. Exit paths, salaries, and career realities in urban growth.
                </p>
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/jee-paper3/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-amber-50/40 dark:bg-amber-950/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-900/40 rounded-[2rem] p-6 md:p-8 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 relative overflow-hidden">
              <Icon 
                icon="solar:users-group-two-rounded-bold-duotone" 
                className="absolute -right-6 -bottom-6 w-36 h-36 text-amber-500 opacity-[0.15] -rotate-12 pointer-events-none select-none" 
              />
              <div className="text-4xl md:text-5xl font-black text-amber-600 leading-none opacity-80 group-hover:scale-105 transition-transform duration-300 relative z-10">05</div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-amber-600 transition-colors duration-300">Convince Your Parents — With actual data</h3>
                <div className="text-amber-600 text-xs font-semibold font-mono mb-4">/exams/jee-paper3/convince-parents</div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  Planning is a critical infrastructure career in a rapidly urbanizing India. Equip yourself with placement facts, fee/ROI comparisons, and how to handle stability worries.
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
