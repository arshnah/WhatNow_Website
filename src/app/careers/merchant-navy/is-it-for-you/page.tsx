import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Merchant Navy — Is It For You? | WhatNow",
  description: "Isolation, the family cost, the medical gate, and a blunt self-check. The honest test of whether a life at sea actually fits you — before you commit a year to it.",
  path: "/careers/merchant-navy/is-it-for-you",
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
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="mn-isfy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mn-isfy-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />
      <svg
        className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mn-isfy-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mn-isfy-wave-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#mn-isfy-wave-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#mn-isfy-wave-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
      </svg>
    </div>
    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
        {breadcrumbs}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
        {title}
      </h1>
      <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
        Last reviewed: June 2026 · Researched from first-hand accounts of serving and trainee mariners, plus DG Shipping &amp; BIMCO/ICS data.
      </div>
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
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 dark:text-slate-800 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-orange-600 font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// Real-voice pull-quote from the Abhay Singh interview (consent confirmed).
const CadetQuote = ({ children }: { children: React.ReactNode }) => (
  <figure className="border-l-4 border-orange-500 bg-orange-50/60 dark:bg-orange-950/20 rounded-r-2xl pl-6 pr-6 py-5 my-8">
    <blockquote className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic text-lg">
      {children}
    </blockquote>
    <figcaption className="mt-3 text-sm font-black text-orange-700 dark:text-orange-300 not-italic">
      — Abhay Singh, Deck Cadet (currently serving)
    </figcaption>
  </figure>
);

export default function MerchantNavyIsItForYouPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="Is It For You — The Hard Truth"
        breadcrumbs={
          <>
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>{" "}
            <span>›</span>
            <Link href="/careers" className="hover:text-orange-600 transition-colors">Careers</Link>{" "}
            <span>›</span>
            <Link href="/careers/merchant-navy" className="hover:text-orange-600 transition-colors">Merchant Navy</Link>{" "}
            <span>›</span>
            <span className="text-orange-600">Is It For You</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24 mt-12">

        <Section number="01" title="The trade you're actually making">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Strip away the uniform and the travel photos, and a career at sea is one exchange, repeated for twenty years: you give up being present in your own life on land, and in return you get money that&apos;s high for your age, time off in large blocks, and a job that switches off completely the moment your contract ends. If that trade sounds good to you stated this plainly, read on. If it only sounds good wrapped in glamour, this career will hurt.
          </p>

          <CadetQuote>
            &ldquo;It was my own willingness that brought me here. I genuinely find this environment fascinating.&rdquo; The cadets who last tend to come in for a reason like that — not for the salary, the uniform, or the travel photos.
          </CadetQuote>

          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <h3 className="font-black text-xl text-neutral-dark mb-4">Two honest outcomes, both real</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              The same career produces a Chief Engineer who retired at 45, debt-free, having travelled the world — and a Captain who says he missed his children&apos;s entire childhood and would not do it again. Neither is lying. Which one you become depends less on luck than on one trait: how you handle isolation.
            </p>
          </div>
        </Section>

        <Section number="02" title="The isolation test (this is the real deciding factor)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Talk to enough serving officers and the pattern is unmistakable: the people who quit rarely quit over money or hours. They quit because they could not handle the isolation. You will spend 4–9 months at a stretch on a steel box with the same 20–25 people, often with slow and expensive internet, no weekends, and no exit until the contract ends. There is nowhere to go.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            The ones who thrive almost all share one habit — they bring something that travels: the gym, books, a craft, study for the next certificate. Idle time at sea is what breaks people. Occupied time at sea is survivable, even good.
          </p>

          <CadetQuote>
            &ldquo;There&rsquo;s very little personal time to sit and overthink — time runs fast when you work continuously. In the beginning it feels lonely, but later you adapt.&rdquo;
          </CadetQuote>

          <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <h3 className="font-black text-lg text-neutral-dark mb-4">Ask yourself, honestly:</h3>
            <ul className="space-y-3">
              {[
                "Can you go weeks with patchy contact with the people you love — not as a one-off, but as your normal?",
                "Do you have an interest you can sustain alone, indefinitely, with no audience?",
                "When you're bored and stuck somewhere, do you get resourceful — or do you spiral?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <span className="text-orange-500 font-black mt-0.5 flex-shrink-0">›</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section number="03" title="What you will actually miss">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Not abstractly. Specifically. Over a sailing career you will miss weddings, funerals, festivals, birthdays, a parent falling ill, a partner&apos;s milestones, and — if you have them — stretches of your children growing up. Companies grant emergency leave for the worst events, but a ship mid-ocean cannot simply drop you home, and reliefs take time to arrange. Relationships survive this only with a partner who genuinely understands the rhythm. Go in knowing the price; do not let anyone sell you a version where it isn&apos;t there.
          </p>
        </Section>

        <Section number="04" title="The physical reality (heaviest as a junior)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            Glamour shots don&apos;t show the engine room at 45 °C, the noise, or a junior engineer on a watch rotation doing hot, manual, dirty work. On the deck side it&apos;s bridge watches including nights, mooring operations, cargo work, and weather that doesn&apos;t care about your schedule. The good news: the heavy physical labour decreases as you rise in rank. The catch: it&apos;s replaced by responsibility and accountability — at the top, every decision and every incident is on you.
          </p>

          <CadetQuote>
            &ldquo;There are MLC rules on working and rest hours, but as a seafarer you have to be ready for the job at any time. There are watches — at the bridge when you&rsquo;re sailing, or at cargo operations when you&rsquo;re in port.&rdquo; The convention sets the floor; the ship decides when you&rsquo;re needed.
          </CadetQuote>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "4–9 mo", l: "typical contract at sea" },
              { v: "20–25", l: "people on board, for months" },
              { v: "45 °C+", l: "engine room, for juniors" },
              { v: "No", l: "weekends, while sailing" },
            ].map(({ v, l }) => (
              <div key={l} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
                <div className="text-2xl md:text-3xl font-black text-orange-600 leading-none mb-2">{v}</div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-snug">{l}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="05" title="The medical gate (read this before you plan anything)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            None of the above matters if you can&apos;t clear the DG Shipping medical. Core requirements: vision of 6/6 (correctable to 6/6 by surgery <em>before</em> admission in most cases), no colour blindness, BMI in range, and no disqualifying chronic conditions. Get a full DG-standard eye and medical check <strong>before</strong> you invest a year and lakhs — not after you have a rank in hand. Details and the current eyesight rules are on the{" "}
            <Link href="/exams/imu-cet/medical" className="text-orange-600 hover:underline font-bold">
              IMU CET medical guide →
            </Link>.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8">
            <div className="text-amber-400 font-black text-xs uppercase tracking-widest mb-3">
              The &quot;fix your eyes later&quot; lie
            </div>
            <p className="leading-relaxed font-medium text-slate-200">
              <strong className="text-white">You&apos;ll hear that sponsorship lets you skip the medical and do LASIK afterwards. Don&apos;t build a plan on it.</strong> Medical fitness is mandatory before you sail, sponsorship or not, and corrective surgery has to be done and healed to standard <em>before</em>{" "}admission — not after you&apos;ve spent the year and the money. Check your eyes first.
            </p>
          </div>
        </Section>

        <Section number="06" title="The blunt self-check">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            If you&apos;re flinching at most of these, this career isn&apos;t for you — and that&apos;s a useful answer, not a failure.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "I am genuinely okay with long isolation, not just the idea of travel.",
              "I can occupy myself alone for months without it eroding me.",
              "I accept I will miss important family events, repeatedly.",
              "I can clear (or already meet) the DG medical, including eyesight and colour vision.",
              "I'm doing this for the money/time-off trade with eyes open — not for an image of it.",
              "I have a fallback plan if the medical or the market doesn't cooperate.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
                <span className="text-orange-500 font-black mt-0.5 flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            <strong className="text-slate-700 dark:text-slate-300">Next:</strong>{" "}
            <Link href="/careers/merchant-navy/entry-routes" className="text-orange-600 hover:underline font-bold">Entry Routes →</Link>{" "}
            ·{" "}
            <Link href="/careers/merchant-navy/salary-ranks" className="text-orange-600 hover:underline font-bold">Salary, Ranks & Progression →</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet/medical" className="text-orange-600 hover:underline font-bold">IMU CET medical guide →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
