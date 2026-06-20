import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Merchant Navy Entry Routes — DNS vs B.Sc vs B.Tech vs GME | WhatNow",
  description: "Deck or engine? The four ways into the Merchant Navy compared on time, degree and risk — plus the smartest hedge nobody mentions: a regular Mechanical degree + GME.",
  path: "/careers/merchant-navy/entry-routes",
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
          <pattern id="mn-er-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mn-er-grid)" />
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
          <linearGradient id="mn-er-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mn-er-wave-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#mn-er-wave-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#mn-er-wave-2)" />
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

export default function MerchantNavyEntryRoutesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="Entry Routes — DNS vs B.Sc vs B.Tech vs GME"
        breadcrumbs={
          <>
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>{" "}
            <span>›</span>
            <Link href="/careers" className="hover:text-orange-600 transition-colors">Careers</Link>{" "}
            <span>›</span>
            <Link href="/careers/merchant-navy" className="hover:text-orange-600 transition-colors">Merchant Navy</Link>{" "}
            <span>›</span>
            <span className="text-orange-600">Entry Routes</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24 mt-12">

        <Section number="01" title="The first real decision: Deck or Engine">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Before you pick a course, pick a side. <strong>Deck officers</strong> navigate the ship, plan passages, and run cargo and safety operations; the top of the ladder is Captain (Master). <strong>Marine engineers</strong> run and maintain the engines, electrical and machinery systems; the top is Chief Engineer. Both command, both are paid comparably at a given rank.
          </p>
          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-orange-700 dark:text-orange-300">The quiet tiebreaker:</strong> The engine side has wider options ashore if you ever want off the ships — a mechanical/technical skillset transfers to far more shore jobs than pure navigation does.
            </p>
          </div>
        </Section>

        <Section number="02" title="The four routes, compared">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            All four lead to the same officer ranks and the same DG Shipping competency exams. DNS gets you to sea — and to earning — fastest. The degree routes cost more years but leave you with a full degree in hand if you decide the sea isn&apos;t for you.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[720px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Route</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Enter after</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Length</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Degree you end with</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Side</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Sponsorship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">DNS<br /><span className="font-medium text-slate-500 dark:text-slate-400 text-sm">(Diploma in Nautical Science)</span></td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Class 12 (PCM)</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">1 yr ashore + 18 mo sea</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">B.Sc Nautical Science (awarded after sea time + IMU sems)</td>
                  <td className="p-4 text-orange-600 border-b border-slate-100 dark:border-slate-800 font-black">Deck</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Mandatory (by rule)</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 border-b border-slate-100">B.Sc Nautical Science</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Class 12 (PCM)</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">3 yr</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">B.Sc Nautical Science</td>
                  <td className="p-4 text-orange-600 border-b border-slate-100 dark:border-slate-800 font-black">Deck</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Helpful, not required</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 border-b border-slate-100">B.Tech Marine Engineering</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Class 12 (PCM)</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">4 yr</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">B.Tech Marine Engineering</td>
                  <td className="p-4 text-orange-600 border-b border-slate-100 font-black">Engine</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Helpful, not required</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300">GME<br /><span className="font-medium text-slate-500 dark:text-slate-400 text-sm">(Graduate Marine Engineering)</span></td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">A Mechanical / Naval-Arch B.E./B.Tech</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">1 yr</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">— (conversion course; you already hold a degree)</td>
                  <td className="p-4 text-orange-600 font-black">Engine</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">Often via institute placement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="03" title="The route nobody tells you about: regular Mechanical + GME">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            If you are <em>not</em> certain about the sea — and most 17-year-olds shouldn&apos;t be — the smartest hedge is rarely sold to you, because no maritime academy makes money from it: do a normal <strong>B.Tech in Mechanical Engineering</strong> (not marine) at a good college, then convert with a <strong>1-year GME</strong> if and when you still want the sea.
          </p>

          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="font-black text-xl text-neutral-dark mb-4">Why it&apos;s the strongest fallback:</h3>
            <ul className="space-y-3">
              {[
                "You graduate with a full, portable engineering degree — opening core, IT, PSU, and higher-study options that a marine-only degree does not.",
                "You can still become a marine engineer through one extra year (GME → MEO Class IV → 4th Engineer).",
                "You keep the decision open until you're older and actually informed, instead of locking into the sea at 17.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <span className="text-orange-500 font-black mt-0.5 flex-shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            The trade-off vs a marine-only degree: you spend one extra year overall (4+1 vs 4), and a dedicated marine campus gives more hands-on shipboard exposure earlier. Marine-academy life is also closer to a quasi-military setup — uniforms, strict routine, limited social life — which suits some and not others. If you are <strong>certain</strong> about the sea and want the fastest start, DNS or B.Tech Marine is more direct. If you want an exit hatch, Mechanical + GME is hard to beat.
          </p>
        </Section>

        <Section number="04" title="Sponsorship: what it is, why it matters">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            A <strong>company-sponsored cadetship</strong> means a shipping company commits to taking you on board <em>before or at the time of admission</em> — your sea berth (the hard part) is secured up front. For the <strong>DNS route this isn&apos;t optional: a sponsorship is legally required to join.</strong> Some institutes are owned by shipping companies and pre-place every cadet; others run campus recruitment.
          </p>
          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-orange-700 dark:text-orange-300">Treat sponsorship as the thing to chase, not the college brochure.</strong> Without sponsorship, you complete the course and then have to find a berth yourself — manageable from a top institute, genuinely risky from a low-tier one. A course completed with no onboard placement is the single most common way this plan fails.
            </p>
          </div>

          <h3 className="font-black text-xl text-neutral-dark mt-8 mb-4">IMU CET vs private colleges</h3>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            <p>
              Many students use their IMU CET rank not only to compete for seats at government maritime institutes, but also to become eligible for admission at private DG Shipping&ndash;approved colleges. Some private colleges have strong company sponsorship programs, which can help cadets secure onboard training opportunities earlier.
            </p>
            <p>
              According to Abhay Singh, a serving Deck Cadet interviewed for this guide, a common strategy is to use a good IMU CET rank to keep both government and private-college options open, then compare factors such as fees, sponsorship opportunities, and placement support before deciding.
            </p>
            <p>
              Government institutes often have lower fees, while private colleges may offer different industry tie-ups. Prospective students should compare current placement and sponsorship data from individual colleges rather than assuming one route is always better. The claim that government-college placements are weaker reflects his own experience and should not be treated as a general fact without supporting data.
            </p>
          </div>
        </Section>

        <Section number="05" title="Eligibility snapshot">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            Cut-offs and age limits vary by institute and year — confirm against the IMU CET notification and the institute&apos;s DG-approved prospectus. See the{" "}
            <Link href="/exams/imu-cet" className="text-orange-600 hover:underline font-bold">IMU CET guide →</Link>{" "}
            for the exam and eligibility detail.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[640px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Route</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Academics</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">English</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Age (typical)</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Medical</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["DNS", "Class 12, ~60% in PCM", "≥50% (10th or 12th)", "17–25 (relaxations for SC/ST, women)", "DG medical incl. 6/6, no colour blindness"],
                  ["B.Sc Nautical Science", "Class 12 PCM", "≥50%", "17–25", "DG medical"],
                  ["B.Tech Marine Eng.", "Class 12, ~60% PCM", "≥50%", "17–25", "DG medical"],
                  ["GME", "Mech/Naval-Arch degree, ~50–55% final year", "≥50% in 10+2", "≤28", "DG medical"],
                  ["GPR (Rating)", "Class 10 (Eng/Maths/Sci ~40%) or Class 12 any stream", "≥40%", "17.5–25", "DG medical incl. 6/6 unaided, no colour blindness"],
                ].map(([route, acad, eng, age, med], i, arr) => (
                  <tr key={route}>
                    <td className={`p-4 font-black text-slate-700 dark:text-slate-300 ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{route}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{acad}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{eng}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{age}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{med}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 mt-10">
            <div className="text-amber-400 font-black text-xs uppercase tracking-widest mb-3">
              The &quot;a marine degree = a marine job&quot; lie
            </div>
            <p className="leading-relaxed font-medium text-slate-200">
              <strong className="text-white">A marine-only degree from a low-tier academy with no sponsorship can leave you with neither a sea job nor a portable one.</strong>{" "}The degree alone doesn&apos;t place you on a ship — the berth does. If you can&apos;t secure sponsorship or a top institute, a regular engineering degree (Mechanical + GME later) is the safer bet, because at worst you still hold a degree that works on land.
            </p>
          </div>
        </Section>

        <Section number="06" title="The non-officer route: Ratings (GPR)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Every route above leads to <em>officer</em> rank — and that&apos;s where most guides stop. There&apos;s a fifth way in that needs no PCM and no multi-year degree: joining as a <strong>Rating</strong>. Ratings are the non-officer crew who keep a ship running — deck hands, motormen, engine-room staff.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            Entry is a <strong>General Purpose Rating (GPR)</strong> course at a DG Shipping&ndash;approved marine institute — a <strong>6-month residential pre-sea programme</strong>, open after <strong>Class 10</strong> (or Class 12 in any stream). It&apos;s shorter and significantly cheaper than the officer-track degrees, and it gets you to sea sooner. It isn&apos;t a dead end either — experienced Ratings can upgrade to officer rank later through the DG Shipping competency route (detailed below).
          </p>

          <CadetQuote>
            &ldquo;There are three departments — Deck, Engine, and Rating. For Ratings, after Class 12 you do a General Purpose Rating course at a marine college.&rdquo;
          </CadetQuote>

          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-5">
            <h3 className="font-black text-xl text-neutral-dark">The GPR route, in real numbers</h3>

            <div>
              <div className="font-black text-neutral-dark mb-1">Duration</div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                A <strong>6-month</strong> residential pre-sea course, followed by onboard sea service — consistent across DG-approved institutes (e.g.{" "}
                <a href="https://www.himtcollege.com/himt_courses/gp-rating/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">HIMT</a>,{" "}
                <a href="https://imi.edu.in/course/pre-sea-courses/gp-rating/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">IMI</a>,{" "}
                <a href="https://www.tsrahaman.org/pre-sea-general-purpose-rating-training-course" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">TS Rahaman</a>).
              </p>
            </div>

            <div>
              <div className="font-black text-neutral-dark mb-1">Eligibility</div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                <strong>Class 10 pass</strong> with English, Maths &amp; Science (~40% aggregate), <em>or</em> Class 12 in any stream (~40%); English ≥ 40%. Age <strong>17.5&ndash;25</strong>. DG medical including <strong>6/6 unaided eyesight and no colour blindness</strong>. Some institutes set a higher bar — IMI, for instance, asks for 50% and PCM in Class 12 (
                <a href="https://mti.shipindia.com/courses/gp-rating-leading-to-2nd-mate-ncv/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">SCI MTI</a>,{" "}
                <a href="https://imi.edu.in/course/pre-sea-courses/gp-rating/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">IMI</a>).
              </p>
            </div>

            <div>
              <div className="font-black text-neutral-dark mb-1">Fees</div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                The standalone pre-sea GPR course commonly runs <strong>₹2.6&ndash;3 lakh</strong> all-in (hostel, mess, uniform, STCW) — e.g. ₹2.65L at{" "}
                <a href="https://www.tsrahaman.org/pre-sea-general-purpose-rating-training-course" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">TS Rahaman</a>, ₹2.95L at{" "}
                <a href="https://www.himtcollege.com/himt_courses/gp-rating/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">HIMT</a> (many institutes give female candidates a concession). Integrated &ldquo;GPR&nbsp;→&nbsp;NCV officer&rdquo; programmes cost more — SCI&apos;s runs ₹3.6&ndash;4.5L.
              </p>
            </div>

            <div>
              <div className="font-black text-neutral-dark mb-1">Becoming an officer later</div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                The recognised crossover is the <strong>Near Coastal Voyage (NWKO)</strong> route: about <strong>12 months of onboard sea service</strong> (with an approved training record), then the DG Shipping NWKO examination for a <strong>Certificate of Competency (CoC)</strong> as a watchkeeping officer.
              </p>
            </div>

            <div>
              <div className="font-black text-neutral-dark mb-1">Where</div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Confirm an institute&apos;s <em>current</em> approval against the official{" "}
                <a href="https://www.dgshipping.gov.in/Content/PageUrl.aspx?page_name=ListofallapprovedTrainingInstitutes" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">DG Shipping list of approved training institutes</a>. Established examples that run GPR include HIMT (Chennai), TS Rahaman (Chennai), IMI (Greater Noida) and SCI MTI (Mumbai).
              </p>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium pt-2 border-t border-slate-200 dark:border-slate-700">
              Figures are from institute prospectuses (reviewed June 2026) and vary by institute, batch and what&apos;s bundled — always verify the latest fees, eligibility and approval status directly with the institute and DG Shipping before applying.
            </p>
          </div>
        </Section>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            <strong className="text-slate-700 dark:text-slate-300">See also:</strong>{" "}
            <Link href="/careers/merchant-navy/colleges" className="text-orange-600 hover:underline font-bold">Colleges & DG Approval →</Link>{" "}
            ·{" "}
            <Link href="/careers/merchant-navy/salary-ranks" className="text-orange-600 hover:underline font-bold">Salary, Ranks & Progression →</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet" className="text-orange-600 hover:underline font-bold">IMU CET (exam & eligibility) →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
