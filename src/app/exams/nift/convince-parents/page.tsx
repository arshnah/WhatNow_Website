import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "NIFT — Convince Parents | WhatNow",
  description: "Equipping students with retail industry placements statistics, career stability metrics, and logical talking points to align parents on fashion careers.",
  path: "/exams/nift/convince-parents",
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
          <pattern id="nift-convince-parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-convince-parents-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nift-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nift-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-cp-wave-grad-2)" />
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

export default function NiftConvinceParentsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "NIFT — Convince Parents | WhatNow",
          description: "Equipping students with retail industry placements statistics, career stability metrics, and logical talking points to align parents on fashion careers.",
          path: "/exams/nift/convince-parents",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "Convince Parents", path: "/exams/nift/convince-parents" },
          ],
        })}
      />
      <JsonLd
        data={faqJsonLd({
          faqs: [
            { q: "Fashion has no job security", a: "India is the world's second-largest textile exporter. NIFT is an institute set up under the Act of Parliament (Ministry of Textiles). Brand groups like Reliance Retail, Aditya Birla Fashion, Landmark, and Shahi Exports operate multi-billion dollar retail logistics chains that depend on NIFT graduates to manage merchandising, purchasing, and production." },
            { q: "Is the pay too low?", a: "A Fashion Merchandiser / Buyer starts at ₹4.5L - ₹7.0L/yr and reaches ₹9.0L - ₹15.0L/yr mid-career. An Apparel Production Manager starts at ₹4.0L - ₹6.5L/yr (₹8.0L - ₹12.0L/yr mid-career), and a Visual Merchandiser / Retail Planner starts at ₹3.5L - ₹5.5L/yr (₹7.5L - ₹11.5L/yr mid-career)." },
            { q: "Is there career longevity in fashion?", a: "Frame your course selection (especially B.FTech or Fashion Management/Merchandising) as a Retail Operations & Logistics degree. You will be managing material flow, vendor negotiation, and purchase planning. At a premier campus (NIFT Delhi, Mumbai, Bengaluru), campus placements are highly institutionalized, offering security and a clear corporate growth trajectory." },
          ],
        })}
      />
      <PageHeader
        title="NIFT — Talking to Your Parents"
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
            <span className="text-pink-600">Convince Parents</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Objection 1: 'Fashion has no job security'">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Many parents associate fashion design with boutique tailor shops. Highlight the size of the **Indian Apparel Export and Retail sectors**.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h4 className="font-black text-xl text-neutral-dark dark:text-slate-100">The Counter-Argument:</h4>
            <p className="text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
              India is the world's second-largest textile exporter. NIFT is an institute set up under the Act of Parliament (Ministry of Textiles). Brand groups like Reliance Retail, Aditya Birla Fashion, Landmark, and Shahi Exports operate multi-billion dollar retail logistics chains that depend on NIFT graduates to manage merchandising, purchasing, and production.
            </p>
          </div>
        </Section>

        <Section number="02" title="Objection 2: 'Is the pay too low?'">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Parents worry starting packages are too low to sustain metro city living.
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Role at Brand / Export House
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Starting Salary Range
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Mid-Career Salary (5 Yrs Exp)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Fashion Merchandiser / Buyer
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ₹4.5L - ₹7.0L/yr
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ₹9.0L - ₹15.0L/yr
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Apparel Production Manager
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ₹4.0L - ₹6.5L/yr
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ₹8.0L - ₹12.0L/yr
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    Visual Merchandiser / Retail Planner
                  </td>
                  <td className="p-4 text-emerald-600 font-black">
                    ₹3.5L - ₹5.5L/yr
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">
                    ₹7.5L - ₹11.5L/yr
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="03" title="Frame it as Retail Management">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <h3 className="text-xl font-black text-neutral-dark dark:text-slate-100 mb-4">
              Talking about career longevity
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              Objection-handling tip: Frame your course selection (especially B.FTech or Fashion Management/Merchandising) as a **Retail Operations & Logistics** degree. Explain that you will be managing material flow, vendor negotiation, and purchase planning.
            </p>
            <p className="text-lg text-slate-750 dark:text-slate-300 font-medium leading-relaxed">
              If you study at a premier campus (NIFT Delhi, Mumbai, Bengaluru), campus placements are highly institutionalized, offering security and a clear corporate growth trajectory.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
