import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UCEED — Is It For You? | WhatNow",
  description: "An honest suitability assessment and check to see if pursuing a B.Des degree at an IIT aligns with your interest, skills, and daily work preferences.",
};

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-white border-b border-slate-200/60 pt-24 pb-16 md:pt-32 md:pb-20">
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="uceed-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="uceed-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uceed-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#5563ED" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 mb-8">
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
  <section className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-primary font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function UceedIsItForYouPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="UCEED — Is Design at an IIT For You?"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-primary transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/uceed" className="hover:text-primary transition-colors">
              UCEED
            </Link>{" "}
            <span>›</span>
            <span className="text-primary">Is It For You?</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="What kind of person actually ends up here">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Most people who end up at a B.Des program at an IIT didn&apos;t follow a
            straight path to it. Some found design early — through drawing, through
            noticing how things are made, through frustration with how apps or
            products work. Others found it by elimination — they knew they didn&apos;t
            want pure engineering, but they didn&apos;t want to lose the IIT option either.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Both are valid starting points. But they lead to very different
            experiences. If design is the thing you&apos;re actually drawn to, the program
            feeds it. If you&apos;re there because you wanted the IIT tag and this seemed
            like a less competitive route, it&apos;s a miserable four years.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
            This page is about helping you figure out which one you are — before you
            spend a year preparing.
          </p>
          <blockquote className="border-l-4 border-primary bg-indigo-50 rounded-r-2xl p-6 md:p-8 my-8">
            <p className="text-slate-700 italic font-medium leading-relaxed mb-4">
              &ldquo;The first time I came across UCEED, I was around 13. I had joined
              a portrait course at what I later found out was a design coaching. I just
              kept drawing after that and made up my mind about a creative field. UCEED
              was my main goal because I wasn&apos;t much interested in fashion, and NID
              wasn&apos;t as well-known — my parents would&apos;ve been harder to convince.&rdquo;
            </p>
            <footer className="text-primary font-black text-sm not-italic">
              — A UCEED 2026 qualifier, in conversation with WhatNow
            </footer>
          </blockquote>
        </Section>

        <Section number="02" title="Four honest questions to ask yourself">
          <div className="space-y-6">
            <div className="border border-slate-200 p-6 rounded-2xl bg-white">
              <h4 className="font-black text-lg text-neutral-dark mb-2">1. Do you notice the world, or just move through it?</h4>
              <p className="text-slate-600 font-semibold leading-relaxed">
                UCEED Part A has a section on observation and design sensitivity.
                It asks you to look at an image and catch what most people miss — a
                structural anomaly, a visual inconsistency, something that doesn&apos;t belong.
                This isn&apos;t a skill you can mug up. It&apos;s a habit of noticing. If you tend
                to look at a product and think about why it&apos;s shaped that way, or look at
                a poster and think about why the text is placed where it is, you already
                have this. If you&apos;ve never thought about it before, it&apos;s worth asking
                whether you&apos;ll enjoy developing it.
              </p>
            </div>
            <div className="border border-slate-200 p-6 rounded-2xl bg-white">
              <h4 className="font-black text-lg text-neutral-dark mb-2">2. Are you drawn to making things, or to figuring things out — or both?</h4>
              <p className="text-slate-600 font-semibold leading-relaxed">
                B.Des covers a wide range: product design, communication design,
                interaction design, animation, spatial design. The common thread is that
                you&apos;re either making something or solving a problem that results in
                something made. You don&apos;t have to be a great technical draughtsperson,
                but you have to care about the output — the object, the interface, the
                image, the space.
              </p>
            </div>
            <div className="border border-slate-200 p-6 rounded-2xl bg-white">
              <h4 className="font-black text-lg text-neutral-dark mb-2">3. Can you sit with a bad drawing and keep going?</h4>
              <p className="text-slate-600 font-semibold leading-relaxed">
                Part B has a drawing question. If you&apos;ve never drawn anything in
                your life, you&apos;ll need to build this skill — and it takes more than a few
                weeks. But drawing ability is not fixed talent. What separates people who
                improve from people who don&apos;t is tolerance for the early phase of being
                bad at something and continuing anyway.
              </p>
            </div>
            <div className="border border-slate-200 p-6 rounded-2xl bg-white">
              <h4 className="font-black text-lg text-neutral-dark mb-2">4. What specifically draws you to design? Can you answer this in one sentence?</h4>
              <p className="text-slate-600 font-semibold leading-relaxed">
                You don&apos;t need a polished answer. But if you have no answer
                at all — if you can&apos;t point to a thing you like, a type of problem you want
                to work on, a kind of output you find satisfying — that&apos;s worth paying
                attention to. Not as a disqualifier, but as a signal to explore more
                before committing a year to preparation.
              </p>
            </div>
          </div>
        </Section>

        <Section number="03" title="What the program is actually like">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50">
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-4">
              B.Des at an IIT is studio-based learning. That means project work,
              critiques, iteration, and a lot of time working on things that don&apos;t
              have one correct answer. It is not lecture-heavy. The workload is real —
              design projects take time in ways that are different from solving problem
              sets — but the stress is creative rather than exam-based.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-4">
              Most B.Des programs at IITs cover a broad design foundation in years one
              and two before you specialise. The disciplines available vary by institute
              — IIT Bombay&apos;s IDC covers industrial design, communication design,
              animation, interaction design, and mobility design. IIT Hyderabad&apos;s B.Des
              has specialisation tracks across product design, visual design, interaction
              design, and film and animation. IIT Indore&apos;s program is framed around
              innovation systems — urban, healthcare, education, energy.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              On careers: fresh B.Des graduates from IITs primarily enter tech sectors,
              design consultancies, and product companies. Starting salary ranges are
              broadly comparable to B.Tech graduates from the same institutes — ₹8–20
              lakhs per annum at placement, with variation by role, company, and
              specialisation. The honest version: the floor is good, the ceiling is high,
              and the trajectory depends heavily on what you build during the four years.
            </p>
          </div>
        </Section>

        <Section number="04" title="If you're from Arts or Commerce">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            You can write UCEED. And you can get into IIT Bombay, IIT Delhi, IIT
            Hyderabad, and IIT Indore — which includes the most prestigious design
            program in the country (IDC, IIT Bombay). The PCM stream restriction
            applies only to IIT Guwahati, IIT Roorkee, and IIITDM Jabalpur.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            This is not a consolation prize. Arts and Commerce students bring
            something to design programs that Science students often have to work
            to develop — comfort with ambiguity, cultural awareness, a different
            relationship with visual language.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            What you will need to prepare for: Part A tests logical reasoning, spatial
            ability, and English comprehension — none of which requires a Science
            background. Part B tests drawing and design thinking. Neither section has
            Physics, Chemistry, or Mathematics as prerequisites.
          </p>
        </Section>
      </div>
    </main>
  );
}
