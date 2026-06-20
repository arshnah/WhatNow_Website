import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "CLAT — NLU Seat Matrix, Fees & Scholarships | WhatNow",
  description: "Complete guide to fee structures across top NLUs, available Central Sector schemes, Aditya Birla scholarships, and NLU financial waivers.",
  path: "/exams/clat/scholarships",
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
          <pattern id="clat-scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clat-scholarships-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="clat-sch-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="clat-sch-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#clat-sch-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#clat-sch-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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
      <div className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4">
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
      <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-300 text-xs font-black uppercase tracking-wider rounded-full mb-4">
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

export default function ClatScholarshipsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="CLAT — NLU Fees & Scholarships"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-emerald-600 transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/clat" className="hover:text-emerald-600 transition-colors">
              CLAT
            </Link>{" "}
            <span>›</span>
            <span className="text-emerald-600">Fees & Scholarships</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="What does studying at an NLU cost?">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            National Law Universities (NLUs) are autonomous public institutions, but they receive minimal state funding compared to IITs. Consequently, NLU fee structures are relatively high, averaging ₹2.5L to ₹3.5L annually. This covers tuition, library access, residential facilities, and university utilities.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    NLU Campus
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Tuition Fees (Per Year)
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Approx. Total Annual Cost (Inc. Hostel & Mess)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    NLSIU Bangalore (Tier 1)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ~₹2.75 lakhs
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ~₹3.50 lakhs/year
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    NALSAR Hyderabad (Tier 1)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ~₹2.40 lakhs
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ~₹3.10 lakhs/year
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    WBNUJS Kolkata (Tier 1)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ~₹2.50 lakhs
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ~₹3.20 lakhs/year
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    NLU Jodhpur / GNLU Gandhinagar
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                    ~₹2.50 lakhs
                  </td>
                  <td className="p-4 text-emerald-600 font-black">
                    ~₹3.25 lakhs/year
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" title="Available Scholarships & Financial Aid">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            To ensure economic constraints do not stop deserving candidates from pursuing law, multiple central, state, and institutional support mechanisms exist.
          </p>

          <ScholarshipCard
            title="Aditya Birla Scholarship"
            type="Private Merit Scheme"
            audience="Top 20 rankers of CLAT joining NLSIU, NALSAR, NUJS, NLU Jodhpur."
            description="Highly prestigious merit-based scholarship that covers up to ₹1.80 lakhs per annum of the tuition fee. Selection is based on the CLAT rank list followed by a detailed application review and interview round."
            note="Must maintain top academic standing and clean conduct during the 5-year B.A. LL.B. course."
          />

          <ScholarshipCard
            title="Central Sector Top Class SC/ST Scheme"
            type="Government Policy"
            audience="SC and ST students with parental income below ₹8.0 lakhs per annum."
            description="Funded by the Ministry of Social Justice and Empowerment. It covers the full tuition fees of the candidate at all NLUs, along with a living expenses allowance of ₹3,000/month, books allowance of ₹5,000/year, and a one-time laptop computer allowance of ₹45,000."
            note="Applied directly through the National Scholarship Portal (NSP) with valid income and category certificates."
          />

          <ScholarshipCard
            title="NLU Merit-cum-Means (MCM) Waivers"
            type="Institutional Aid"
            audience="Economically weaker students based on household income slabs."
            description="Offered individually by top NLUs (e.g. NLSIU Financial Aid Scheme, NALSAR Need-based Scholarships). These schemes waive tuition fees up to 100% depending on parental income (typically under slabs of ₹3.0L, ₹5.0L, and ₹8.0L per annum)."
            note="Applications open in the first semester at individual university administration offices."
          />
        </Section>

        <Section number="03" title="The Honest ROI Picture">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 mb-6">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              Is NLU tuition worth the high cost?
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              If you secure a seat in a Tier-1 NLU (top 5-6 campuses), the return on investment is extremely strong. Top law firms (Cyril Amarchand Mangaldas, Shardul Amarchand Mangaldas, Khaitan & Co, Trilegal) recruit heavily from these campuses, with starting salaries for associates ranging from **₹12L to ₹18L per annum**.
            </p>
            <p className="text-lg text-slate-750 dark:text-slate-300 font-medium leading-relaxed">
              For lower-tier NLUs, salaries start around ₹5L - ₹8L, and placement rates are less certain. In such cases, qualifying for **State Scholarships** or **MCM waivers** is highly recommended to keep your student debt low and secure a favorable financial outcome.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
