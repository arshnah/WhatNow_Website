import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "IMU CET — Is It For You? Suitability & Medical Rules | WhatNow",
  description: "Who a seafaring career actually suits, plus the DG Shipping medical gate that can end it before you start: eyesight, colour-vision and fitness rules to check first.",
  path: "/exams/imu-cet/is-it-for-you",
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
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="imucet-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-wii-wave-grad-2)" />
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

export default function ImuCetIsItForYouPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="IMU CET — Suitability & Medical Rules"
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
            <span className="text-orange-600">Is It For You?</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Mandatory DGS Eyesight & Physical Criteria">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Unlike other professional courses where any student can register, the Merchant Navy enforces strict medical regulations mandated by the Directorate General of Shipping (DGS). If you do not meet these, you cannot join, regardless of your IMU CET rank.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">Deck Cadet (DNS / B.Sc)</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Eyesight & Vision</h4>
              <p className="text-xs text-slate-550 dark:text-slate-400 font-semibold leading-relaxed">
                Must have **6/6 vision in each eye** without aid. Glasses are not allowed for deck officers. Candidates must have **no color blindness** whatsoever to ensure they can distinguish navigation lights at sea.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">Engine Cadet (B.Tech)</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Eyesight & Vision</h4>
              <p className="text-xs text-slate-550 dark:text-slate-400 font-semibold leading-relaxed">
                Minor corrective glasses up to **6/12** are allowed in each eye. However, candidates must have **no color blindness** to work safely with colored electrical wiring and alarm systems.
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" title="The Isolation Self-Check">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Beyond physical fitness, assess your psychological readiness for seafaring:
          </p>
          <ul className="list-disc list-inside text-slate-650 dark:text-slate-300 leading-relaxed font-semibold space-y-3">
            <li>Are you okay spending **3 to 6 months continuously offshore** with minimal internet access (satellite limits) and no contact with family?</li>
            <li>Can you work under military-style authority, tight shifts, and intensive manual/engine-room labor?</li>
            <li>Are you comfortable in high-stress weather events (rough seas, storms) far from shore facilities?</li>
          </ul>
        </Section>
      </div>
    </main>
  );
}
