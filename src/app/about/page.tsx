import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function AboutPage() {
  return (
    <main className="flex-grow flex flex-col">
      {/* ─── HERO ─── */}
      <section className="relative px-6 lg:px-12 pt-24 pb-20 md:pt-32 md:pb-28 max-w-6xl mx-auto w-full">
        <p className="text-secondary text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-8">
          About WhatNow
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] tracking-tight mb-8 text-neutral-dark max-w-5xl">
          India has no shortage of career options.<br className="hidden md:block" />
          It has a shortage of <span className="text-neutral-dark underline block decoration-accent underline-offset-8 decoration-4 md:decoration-8">honest guidance.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
          WhatNow exists to fix that.
        </p>
      </section>

      {/* ─── SECTION 1: THE PROBLEM ─── */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs font-extrabold tracking-[0.2em] uppercase mb-5">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight text-neutral-dark max-w-3xl tracking-tight">
            A broken system making a consequential decision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            <div className="md:col-span-7 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Every year, millions of Indian students make one of the biggest decisions
                of their lives with almost no real information.
              </p>
              <p>
                Their teachers default to two options. Their parents repeat what worked a
                generation ago. Paid consultants push whichever college pays them
                commission. And the internet gives them either exam prep material, or just some basic empathy or trolling.
              </p>
            </div>

            <div className="md:col-span-12">
              <div className="border-l-4 border-accent pl-6 md:pl-10 my-6 md:my-12 py-2">
                <p className="font-black text-2xl md:text-4xl text-neutral-dark leading-[1.3] max-w-4xl tracking-tight">
                  Nobody is asking the harder question: is this path actually right for you?
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Not &ldquo;how do you crack NEET&rdquo; &mdash; but <em className="font-bold text-slate-800">should</em> you be writing NEET at
                all? What does a doctor&apos;s life actually look like at 35? What happens if
                you crack UCEED but hate sitting at a screen for eight hours? Is merchant
                navy the right call if you can&apos;t stand being away from home for months?
              </p>
              <p>
                These are the questions that determine whether someone spends the next
                decade building something they love — or quietly resenting a choice they
                made at seventeen. Nobody was answering them honestly. So we built WhatNow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT WE ARE ─── */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs font-extrabold tracking-[0.2em] uppercase mb-5">What We Are</p>
          <h2 className="text-3xl md:text-5xl font-black mb-16 leading-tight text-neutral-dark tracking-tight">
            Free. Honest. No agenda.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>

            <div className="space-y-6 text-lg text-slate-500 leading-relaxed pr-0 md:pr-8">
              <p>
                WhatNow is a free, structured career guidance platform built specifically
                for Indian students. We are not a coaching centre. We don&apos;t sell courses.
                We don&apos;t rank colleges or push you toward anything. We have no financial
                relationship with any institution.
              </p>
              <p>
                We cover careers nobody else covers properly — design, law, merchant navy,
                urban planning, game design, agriculture, forensic science, occupational
                therapy, international relations. The careers your school counsellor has
                never heard of and your parents don&apos;t know how to evaluate.
              </p>
            </div>

            <div className="space-y-6 text-lg text-slate-800 leading-relaxed font-medium pl-0 md:pl-8">
              <p>
                What we do is simpler — and harder — than all of that: we tell you the
                truth about careers. What a path actually looks like. What the exam really
                tests. What the day-to-day feels like five years in. What the money
                situation is. Whether you need to convince your parents and how.
              </p>
              <p className="text-xl font-bold text-neutral-dark mt-8">
                And we do it for free. Always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: PILLARS ─── */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-secondary text-xs font-extrabold tracking-[0.2em] uppercase mb-5">How We&apos;re Organised</p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-neutral-dark tracking-tight">
            Three sections. One purpose.
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl">
            WhatNow is structured around three sections. Here&apos;s what each one is for.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Careers */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10">
              <Icon icon="solar:compass-bold-duotone" className="w-10 h-10 text-secondary mb-6 opacity-80" />
              <h3 className="text-2xl font-black text-neutral-dark mb-4 tracking-tight">Careers</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Every career gets its own deep-dive hub. Not a Wikipedia summary.
                A real, honest look about what it actually is, who it&apos;s for,
                what the day-to-day looks like, what the money trajectory is,
                what people get wrong about it, and what you should know before
                you decide.
              </p>
              <p className="font-bold text-secondary text-sm flex items-center gap-2 mt-auto">
                Every hub answers: is this right for me?
              </p>
            </div>

            {/* Exams */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10">
              <Icon icon="solar:document-text-bold-duotone" className="w-10 h-10 text-primary mb-6 opacity-80" />
              <h3 className="text-2xl font-black text-neutral-dark mb-4 tracking-tight">Exams</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Every entrance exam gets its own hub, but we approach exams
                differently. We don&apos;t lead with &ldquo;how to crack it.&rdquo; We lead with
                &ldquo;should you be writing it?&rdquo; Because the exam is not the goal.
                The career is.
              </p>
              <p className="font-bold text-primary text-sm flex items-center gap-2 mt-auto">
                Exam and career hubs are interlinked
              </p>
            </div>

            {/* Reads */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10">
              <Icon icon="solar:book-bookmark-bold-duotone" className="w-10 h-10 text-accent mb-6 opacity-80" />
              <h3 className="text-2xl font-black text-neutral-dark mb-4 tracking-tight">Reads</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Standalone editorial pieces — longer, honest, opinionated writing
                on questions that don&apos;t fit neatly into one career or one exam.
                Should you move to a metro? Is the IIT brand worth it?
                What does it mean to follow your passion?
              </p>
              <p className="font-bold text-accent text-sm flex items-center gap-2 mt-auto">
                The pieces we wished existed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: BOUNDARIES (Dark Contrast Section) ─── */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-[#0D1B3D] text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-5">Boundaries</p>
          <h2 className="text-3xl md:text-5xl font-black mb-16 leading-tight tracking-tight">
            What we don&apos;t do — and why
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <div className="text-slate-500 font-black text-sm tracking-widest mb-3">01</div>
              <h4 className="text-xl font-bold mb-4">No exam prep material</h4>
              <p className="text-slate-300 leading-relaxed">
                Coaching content, question banks, mock tests — that world is
                well-served. We&apos;re not adding to it.
              </p>
            </div>
            <div>
              <div className="text-slate-500 font-black text-sm tracking-widest mb-3">02</div>
              <h4 className="text-xl font-bold mb-4">No college rankings</h4>
              <p className="text-slate-300 leading-relaxed">
                Anyone who gives you a universal ranking is selling you something.
                The &ldquo;best&rdquo; college depends on the student, city, budget, and goal.
              </p>
            </div>
            <div>
              <div className="text-slate-500 font-black text-sm tracking-widest mb-3">03</div>
              <h4 className="text-xl font-bold mb-4">We don&apos;t tell you what to do</h4>
              <p className="text-slate-300 leading-relaxed">
                We give you what you need to decide for yourself. The decision
                is yours. It should be.
              </p>
            </div>
            <div>
              <div className="text-slate-500 font-black text-sm tracking-widest mb-3">04</div>
              <h4 className="text-xl font-bold mb-4">We don&apos;t charge anything</h4>
              <p className="text-slate-300 leading-relaxed">
                Not now, not ever for the core guidance. The students who need
                honest guidance most are often the ones with the least access to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHERE WE ARE ─── */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="flex-1">
            <p className="text-primary text-xs font-extrabold tracking-[0.2em] uppercase mb-5">Where We Are</p>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-neutral-dark tracking-tight">
              New. Building carefully.
            </h2>
            <div className="flex flex-wrap gap-3 mt-10">
              <span className="border border-slate-200 text-slate-600 font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <Icon icon="solar:global-line-duotone" className="w-5 h-5 text-primary" /> Website
              </span>
              <span className="border border-slate-200 text-slate-600 font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <Icon icon="solar:play-circle-line-duotone" className="w-5 h-5 text-red-500" /> YouTube
              </span>
              <span className="border border-slate-200 text-slate-600 font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <Icon icon="solar:camera-line-duotone" className="w-5 h-5 text-pink-500" /> Instagram
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-6 text-lg text-slate-600 leading-relaxed pt-2">
            <p>
              WhatNow is new. We&apos;re building it carefully — going deep on one vertical
              at a time rather than publishing shallow content across everything at once.
            </p>
            <p>
              Our first vertical is UCEED, the design entrance exam for IITs. We chose
              it because the guidance gap is the largest and the aspirants are the most
              underserved. From there we expand — to NIFT, CLAT, NDA, and beyond.
            </p>
            <p className="font-bold text-slate-800">
              We publish across three platforms. Everything points back here.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="py-24 md:py-40 px-6 lg:px-12 bg-neutral-dark text-center relative overflow-hidden flex flex-col items-center">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_60%)] pointer-events-none"></div>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16 relative z-10">
          A student in a small town with no access to a paid consultant
          should be able to come to WhatNow and get the same quality of honest,
          structured guidance as someone whose parents can afford to pay for it.
          <br /><br />
          <span className="font-bold text-white">That gap exists. We&apos;re closing it.</span>
        </p>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tight relative z-10">
          One career at a time.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 w-full sm:w-auto">
          <Link href="/careers" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/25">
            Explore Careers
          </Link>
          <Link href="/exams" className="bg-transparent border-2 border-white/20 hover:border-white/50 text-white font-bold py-4 px-8 rounded-xl transition-all">
            Browse Exams
          </Link>
          <Link href="/reads" className="bg-transparent border-2 border-white/20 hover:border-white/50 text-white font-bold py-4 px-8 rounded-xl transition-all">
            Read our Reads
          </Link>
        </div>
      </section>
    </main>
  );
}
