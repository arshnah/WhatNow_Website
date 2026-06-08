import React from "react";
import Link from "next/link";

export const metadata = {
  title: "IMU CET — Medical Test & DG Shipping Norms | WhatNow",
  description: "Mandatory DG Shipping medical fitness rules, eyesight constraints, colour blindness limitations, and the truth about the LASIK myth — check your eyes before you commit.",
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
          <pattern id="imucet-medical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-medical-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />

      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-med-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-med-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-med-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-med-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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

export default function ImuCetMedicalPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="IMU CET — Medical Test & DG Shipping Norms"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-orange-600 transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/imu-cet" className="hover:text-orange-600 transition-colors">
              IMU CET
            </Link>{" "}
            <span>›</span>
            <span className="text-orange-600">Medical</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Mandatory DGS Eyesight & Physical Criteria">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Unlike other professional courses where any student can register, the Merchant Navy enforces strict medical regulations mandated by the Directorate General of Shipping (DGS). If you do not meet these, you cannot join, regardless of your IMU CET rank.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">Deck Cadet (DNS / B.Sc)</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Eyesight & Vision</h4>
              <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                Must have <strong>6/6 vision in each eye</strong> (uncorrected, or corrected to 6/6 by surgery done and healed before admission). Glasses are not permitted for deck officers at sea. Candidates must have <strong>no colour blindness</strong> whatsoever — navigation lights require reliable colour distinction.
              </p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">Engine Cadet (B.Tech / GME)</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Eyesight & Vision</h4>
              <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                Minor corrective glasses up to <strong>6/12</strong> are allowed in each eye. However, candidates must have <strong>no colour blindness</strong> — electrical wiring and alarm systems use colour coding that is safety-critical.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mt-4">
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong className="font-black text-orange-700">Get checked before you prepare.</strong> A full DG-standard eye and medical examination takes a few hours and costs very little compared to a year of coaching fees or course fees. Do not invest a year planning around this career without confirming you clear the medical first. Confirm current eyesight rules on the DG Shipping website — they are periodically revised.
            </p>
          </div>
        </Section>

        <Section number="02" title="The Isolation Self-Check">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Beyond physical fitness, assess your psychological readiness for seafaring:
          </p>
          <ul className="space-y-4">
            {[
              "Are you okay spending 4 to 9 months continuously offshore with minimal internet access (satellite limits) and limited contact with family?",
              "Can you work under military-style authority, tight watch schedules, and intensive manual or engine-room labour?",
              "Are you comfortable in high-stress weather events (rough seas, storms) far from shore facilities?",
              "Do you have interests or habits you can sustain alone, indefinitely, with no audience?",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 font-medium">
                <span className="text-orange-500 font-black mt-0.5 flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="03" title="The 'Fix Your Eyes Later' Myth — Read This First">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            A claim circulates in forums and WhatsApp groups that you can skip the medical via company sponsorship and simply do LASIK after your course. Do not build a plan on this.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 my-8">
            <div className="text-amber-400 font-black text-xs uppercase tracking-widest mb-3">
              The Lie — Named & Refuted
            </div>
            <p className="leading-relaxed font-medium text-slate-200">
              <strong className="text-white">You will hear that some companies sponsor cadets who haven&apos;t cleared the medical, and that you can do LASIK afterwards. Do not build a plan on it.</strong> DG Shipping medical fitness — including vision and colour-vision standards — is mandatory before you can sail, sponsorship or not. LASIK is age-gated and must be done <em>and</em> healed to standard <em>before</em> admission or sea service — not after you have sunk a year and lakhs into the course. Get a full DG-standard eye and medical check <strong className="text-white">before</strong> you commit. Confirm current eyesight rules on the DG Shipping site — they are periodically revised.
            </p>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            The reason this myth persists: a small number of candidates in grey-area situations have described unofficial workarounds in online communities. These accounts are not evidence of a reliable path — they are exceptions that occasionally end badly. A plan built on &quot;maybe they&apos;ll let it slide&quot; is not a plan.
          </p>
        </Section>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 font-medium">
            <strong className="text-slate-700">See also:</strong>{" "}
            <Link href="/careers/merchant-navy/is-it-for-you" className="text-orange-600 hover:underline font-bold">Is it for you — the full reality check →</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet/entry-paths" className="text-orange-600 hover:underline font-bold">DNS vs B.Sc vs B.Tech →</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet" className="text-orange-600 hover:underline font-bold">IMU CET overview →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
