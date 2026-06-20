import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "IMU CET — Path Costs & Placements | WhatNow",
  description: "What DNS, B.Sc Nautical Science and B.Tech Marine Engineering actually cost, and how their fees, sponsorship and placement outcomes compare.",
  path: "/exams/imu-cet/scholarships",
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
          <pattern id="imucet-scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-scholarships-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-sch-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-sch-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-sch-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-sch-wave-grad-2)" />
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

const ScholarshipCard = ({
  title,
  type,
  audience,
  description,
  note,
}: {
  title: string;
  type: string;
  audience: string;
  description: React.ReactNode;
  note?: string;
}) => (
  <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-800/50 shadow-sm mb-6 flex flex-col md:flex-row gap-8">
    <div className="md:w-1/3">
      <div className="inline-block px-3 py-1 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 text-xs font-black uppercase tracking-wider rounded-full mb-4">
        {type}
      </div>
      <h3 className="text-2xl font-black text-neutral-dark mb-2">{title}</h3>
      <p className="text-sm font-bold text-slate-500 dark:text-slate-400 italic">{audience}</p>
    </div>
    <div className="md:w-2/3 flex flex-col justify-center">
      <div className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-4">
        {description}
      </div>
      {note && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-500 dark:text-slate-400">
          Note: {note}
        </div>
      )}
    </div>
  </div>
);

export default function ImuCetScholarshipsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="IMU CET — Path Costs & Placements"
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
            <span className="text-orange-600">Nautical Paths compared</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="DNS vs B.Sc vs B.Tech: Duration, Fees & Sea-Time">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Entering the Merchant Navy requires choosing one of three primary pre-sea training courses approved by the Directorate General of Shipping (DGS). These courses vary greatly in their academic duration, tuition cost, and the sea-time needed to sit for Officer competency examinations.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Course Path
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Duration & Training
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Approx. Total Cost (Academic)
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Onboard Training (Sea-Time)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Diploma in Nautical Science (DNS)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    1 Year Pre-Sea Academy
                  </td>
                  <td className="p-4 text-orange-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ₹4.5L - ₹6.5L
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-bold">
                    18 Months (mandatory)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    B.Sc Nautical Science (Deck Officer)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    3 Years Degree Course
                  </td>
                  <td className="p-4 text-orange-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ₹6.0L - ₹9.0L
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-bold">
                    12 Months (mandatory)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    B.Tech Marine Engineering (Engine Officer)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                    4 Years Degree Course
                  </td>
                  <td className="p-4 text-orange-600 font-black">
                    ₹9.0L - ₹14.0L
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-bold">
                    6 Months (mandatory)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" title="Sponsorships and Financial Concessions">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Unlike other careers, the standard scholarship in the Merchant Navy is **Company Sponsorship**. Securing a sponsorship means a commercial shipping company finances or guarantees your placement, training, and employment prior to your course commencement.
          </p>

          <ScholarshipCard
            title="Company Sponsorship"
            type="Merchant Navy Priority"
            audience="Open to all candidates clearing company entrance exams & medical rounds."
            description="The most secure financing mechanism. Prominent shipping lines (e.g. Anglo-Eastern, Synergy Maritime, Fleet Management, Great Eastern Shipping) conduct examinations and interviews. Sponsored cadets are guaranteed 12-18 months of onboard training, a monthly stipend during sea-time, and automatic employment."
            note="Never join a DNS course without securing a shipping company's sponsorship beforehand."
          />

          <ScholarshipCard
            title="IMU Female Cadet Tuition Subsidy"
            type="Institutional Subsidy"
            audience="All female candidates enrolled in IMU Campuses."
            description="To improve gender diversity in maritime professions, the Indian Maritime University offers a tuition fee waiver of ₹25,000 per semester to all female cadets admitted to its campuses for maritime programs."
            note="Applied automatically at the time of fee payment for female candidates."
          />

          <ScholarshipCard
            title="Maritime Training Trust (MTT) Scholarship"
            type="Trust Grant"
            audience="Deserving Indian female cadets pursuing pre-sea courses."
            description="The Maritime Training Trust provides financial support ranging from ₹50,000 to ₹1,00,000 per year to outstanding female deck and engine cadets to assist with academy tuition and boarding fees."
            note="Requires an application submission through the academy dean's office with academic certificates."
          />
        </Section>

        <Section number="03" title="The Honest ROI Picture">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 mb-6">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              Return on Investment: cadet stipend vs officer wage
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              While training is intensive and costly, the Merchant Navy offers an exceptionally quick recovery of education costs. As a deck cadet during your 12-18 months of sea-time, you earn a monthly stipend of **$300 - $600 USD (₹25,000 - ₹50,000)** with free food and accommodation on board.
            </p>
            <p className="text-lg text-slate-750 dark:text-slate-300 font-medium leading-relaxed">
              Once you pass the MMD Second Mate/Class IV written and oral examinations and receive your License (CoC), you join as a Third Officer or Fourth Engineer. Your starting salary jumps to **$2,000 - $3,500 USD per month (₹1.6L - ₹3L/mo) tax-free**. Most cadets recover their full educational loans within their first 12-18 months of sailing as a licensed officer.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
