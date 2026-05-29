import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'UCEED — Design at an IIT | WhatNow',
  description: 'The one exam that gets you into the Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, and four other IITs.',
};

export default function UceedHubPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50">
      {/* ─── PAGE HEADER ─── */}
      <section className="px-6 lg:px-12 pt-24 pb-16 md:pt-32 md:pb-20 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 mb-8">
          <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
          <span>›</span>
          <span className="text-primary">UCEED</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark">
          UCEED — Design at an <em className="text-primary not-italic">IIT</em>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium mb-6">
          The one exam that gets you into the Bachelor of Design (B.Des) programs at IIT Bombay, IIT Delhi, IIT Guwahati, and four other IITs. 245 seats. Around 15,000 students. This is everything you need to know — no coaching centre bias, no fluff.
        </p>

        <div className="text-sm font-bold text-slate-400">
          Last reviewed: May 2026 · Based on UCEED 2026 official brochure
        </div>
      </section>

      <div className="px-6 lg:px-12 pb-20 md:pb-32 max-w-4xl mx-auto w-full space-y-20">

        {/* ─── STAT BAR ─── */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Exam Date</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark"><span className="text-primary">Jan</span> 18</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Total Marks</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">300</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Duration</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">3 hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Total Seats</span>
            <span className="text-2xl md:text-3xl font-black text-primary">245</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Institutes</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">7</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Aspirants (2025)</span>
            <span className="text-2xl md:text-3xl font-black text-neutral-dark">~15K</span>
          </div>
        </div>

        {/* ─── WHAT IS UCEED ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b-2 border-slate-200 pb-4 mb-8">
            What is UCEED
          </h2>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium mb-12">
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
              <span key={inst} className="bg-white border border-slate-200 text-slate-700 font-bold text-sm px-4 py-2 rounded-lg shadow-sm">
                {inst}
              </span>
            ))}
          </div>

          <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong className="font-black">Stream restriction — read this before anything else.</strong> All streams can write the exam. But Arts/Commerce students can only apply to IIT Bombay, IIT Delhi, IIT Hyderabad, and IIT Indore — not Guwahati or Roorkee. If you&apos;re from a non-PCM background, your college choices are narrower. This is buried in eligibility tables everywhere. We&apos;re putting it here.
            </p>
          </div>
        </section>

        {/* ─── NAVIGATION TO SUBPAGES ─── */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b-2 border-slate-200 pb-4 mb-8">
            Everything on UCEED — WhatNow Guides
          </h2>

          <div className="space-y-4">

            {/* Card 1 */}
            <Link href="/exams/uceed/what-it-is" className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-primary transition-colors shadow-sm hover:shadow-md">
              <div className="text-4xl md:text-5xl font-black text-primary leading-none opacity-80">01</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-primary transition-colors">What It Is — The complete breakdown</h3>
                <div className="text-primary text-xs font-mono mb-4">/exams/uceed/what-it-is</div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Everything about the exam itself. How Part A and Part B work, what the marking scheme actually means (especially those tricky MSQs), complete syllabus, eligibility, all 7 institutes in detail, seat matrix, counselling process, and what closing ranks look like in practice. If you want to understand UCEED from scratch, start here.
                </p>
                <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/exams/uceed/is-it-for-you" className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-slate-300 transition-colors shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">02</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">Is It For You — Honest self-check</h3>
                <div className="text-slate-400 text-xs font-mono mb-4">/exams/uceed/is-it-for-you</div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This is the question most guides skip. Should you actually go for UCEED? What kind of person thrives in a BDes program versus regrets it? Questions you should ask yourself before committing a year — or two — to this. No cheerleading, no coaching centre pitch.
                </p>
                <span className="inline-block bg-orange-50 text-orange-700 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">Coming soon</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/exams/uceed/resources" className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-slate-300 transition-colors shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">03</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">Resources — What actually helps</h3>
                <div className="text-slate-400 text-xs font-mono mb-4">/exams/uceed/resources</div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Books worth buying, books worth skipping, coaching vs. self-study (honest assessment), where to find past papers for free, mock test platforms, and a week-by-week preparation roadmap. Written by someone who&apos;s seen what works and what wastes time.
                </p>
                <span className="inline-block bg-orange-50 text-orange-700 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">Coming soon</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/exams/uceed/scholarships" className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-primary transition-colors shadow-sm hover:shadow-md">
              <div className="text-4xl md:text-5xl font-black text-primary leading-none opacity-80">04</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1 group-hover:text-primary transition-colors">Scholarships — Don&apos;t pay more than you have to</h3>
                <div className="text-primary text-xs font-mono mb-4">/exams/uceed/scholarships</div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Institute-wise fee waivers, government scholarship schemes, and everything available to BDes students at IITs. SC/ST students get full tuition waiver. General category students under ₹5 lakh annual income qualify for significant relief. The fee is not as scary as it looks.
                </p>
                <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">✓ Ready to read</span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/exams/uceed/convince-parents" className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-slate-300 transition-colors shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-300 leading-none">05</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-neutral-dark mb-1">Convince Your Parents — With actual data</h3>
                <div className="text-slate-400 text-xs font-mono mb-4">/exams/uceed/convince-parents</div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Design at an IIT isn&apos;t a risk — but you&apos;ll need to explain that. This guide arms you with placement data, salary figures, career paths, and how to answer the hard questions: job security, prestige, &ldquo;is this a real IIT degree?&rdquo; Have the conversation with facts, not feeling.
                </p>
                <span className="inline-block bg-orange-50 text-orange-700 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">Coming soon</span>
              </div>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}
