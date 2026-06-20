import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "NIFT — Is It For You? | WhatNow",
  description: "An honest check to see if pursuing a career in fashion design, apparel production, or merchandising at NIFT fits your interests and work style.",
  path: "/exams/nift/is-it-for-you",
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
          <pattern id="nift-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nift-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nift-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
        {breadcrumbs}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark dark:text-slate-100">
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
    <div className="absolute top-0 right-0 p-8 text-[6rem] font-black text-slate-50 dark:text-slate-800 leading-none select-none z-0">
      {number}
    </div>
    <div className="relative z-10">
      <div className="text-pink-600 font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark dark:text-slate-100 tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function NiftIsItForYouPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "NIFT — Is It For You? | WhatNow",
          description: "An honest check to see if pursuing a career in fashion design, apparel production, or merchandising at NIFT fits your interests and work style.",
          path: "/exams/nift/is-it-for-you",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "Is It For You", path: "/exams/nift/is-it-for-you" },
          ],
        })}
      />
      <PageHeader
        title="NIFT — Is Fashion For You?"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-pink-600 transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/nift" className="hover:text-pink-600 transition-colors">
              NIFT
            </Link>{" "}
            <span>›</span>
            <span className="text-pink-600">Is It For You?</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Runway Glamour vs Industrial Realities">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Most students target NIFT dreaming of fashion weeks, celebrity styling, and luxury boutique launches. The reality: **95% of the fashion industry is raw manufacturing, sourcing, and logistics**.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h3 className="font-black text-xl text-neutral-dark dark:text-slate-100">The Back-End Grind</h3>
            <p className="text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
              Daily tasks as a retail merchandiser or fashion technologist involve checking yarn count, auditing garment stitches, managing fabric shipments from mills, calculating material costs, and negotiating with export houses. If you think design is only drawing pretty garments, the day-to-day operations can be a rude awakening.
            </p>
          </div>
        </Section>

        <Section number="02" title="The Suitability Self-Check">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Answer these questions honestly before enrolling:
          </p>
          <div className="space-y-6">
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">1. Are you okay with physical labor and long standing hours?</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                NIFT classes require hours of pattern-making, garment stitching, fabric draping, and dyeing. In export houses and retail sectors, you will spend long days standing on factory floors auditing quality control.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">2. Do you have a head for numbers?</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                Fashion Merchandising requires analyzing sales numbers, forecasting demand trends, planning purchase budgets, and pricing products. It is as much a mathematical and logical role as a creative one.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 p-6 rounded-2xl bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">3. Can you handle fast-paced, high-pressure environments?</h4>
              <p className="text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                Fashion seasons change every few months. Tight deadlines, delay penalties in export shipments, and quick client reviews are standard stress-points.
              </p>
            </div>
          </div>
        </Section>

        <Section number="03" title="The Career Payoff">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <h3 className="text-xl font-black text-neutral-dark dark:text-slate-100 mb-4">
              Starting Salaries & Growth
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              Starting salaries for NIFT graduates average **₹3.5L to ₹6.0L per annum** for design, and **₹4L to ₹7L** for apparel technology and management. Growth is highly portfolio-driven: as you build industry relations, transition to buying houses (e.g. Li & Fung) or major brands (Zara, Aditya Birla Fashion, Reliance Retail), salaries can cross ₹12L-₹15L in 5 years.
            </p>
            <p className="text-lg text-slate-750 dark:text-slate-300 font-medium leading-relaxed">
              If you have a strong entrepreneurial drive, NIFT equips you with the technical manufacturing skills needed to launch your own brand. Make sure you align with the operational realities before committing.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
