import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Convince Parents | WhatNow",
  description: "Equipping students with real-world urban planning placement statistics, career stability metrics, and logical talking points to align parents on B.Plan decisions.",
  path: "/exams/jee-paper3/convince-parents",
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
          <pattern id="jee-cp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-cp-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-cp-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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
      <div className="text-teal-600 font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function JeePaper3ConvinceParentsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="JEE Paper 3 — Talking to Your Parents"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-teal-600 transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/jee-paper3" className="hover:text-teal-600 transition-colors">
              JEE Paper 3
            </Link>{" "}
            <span>›</span>
            <span className="text-teal-600">Convince Parents</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Objection 1: 'What is B.Planning? Is it a sub-degree or a real career?'">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Many parents have never heard of a B.Plan degree and assume it is either a vocational program or a lesser version of Civil Engineering.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h4 className="font-black text-xl text-neutral-dark">The Counter-Argument:</h4>
            <p className="text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
              B.Planning is a highly professional, AICTE-approved 4-year degree. It is recognized by the **Institute of Town Planners, India (ITPI)**. With India building 100 Smart Cities and investing ₹10+ Lakh Crores in urban infrastructure (Metro systems, logistics parks, AMRUT sewage lines), the need for specialized planners who understand zoning laws, economic feasibility, and GIS mapping is at an all-time high. Traditional civil engineers do not study these policy frameworks.
            </p>
          </div>
        </Section>

        <Section number="02" title="Objection 2: 'Do planners get corporate jobs, or is it only government contracts?'">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Parents often assume that urban planning jobs are strictly government-appointed and hard to get without public sector exams.
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8 bg-white dark:bg-slate-800/50">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Employer Sector
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Sample Roles & Clients
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Starting Salary Range
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Real Estate Consultancies (JLL, Knight Frank, Cushman)
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    Valuation Analyst, Feasibility Advisory
                  </td>
                  <td className="p-4 text-emerald-600 dark:text-emerald-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    ₹5.0L - ₹8.0L/yr
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Infrastructure Developers (L&T, Tata Projects)
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    Transport Network Planner, Smart City Executive
                  </td>
                  <td className="p-4 text-emerald-600 dark:text-emerald-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    ₹6.0L - ₹9.0L/yr
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    Policy Research & NGOs (WRI India, NIUA, World Bank projects)
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">
                    Research Associate, Sustainable City Policy Officer
                  </td>
                  <td className="p-4 text-emerald-600 dark:text-emerald-300 font-black">
                    ₹4.5L - ₹7.0L/yr
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="03" title="ROI & College Affordability Argument">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              Talking about financial investments
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              If you secure admission in the **School of Planning and Architecture (SPA Delhi, Bhopal, or Vijayawada)**, tuition fees are heavily subsidized by the Central Government (~₹1.8L - ₹2.5L per year).
            </p>
            <p className="text-lg text-slate-750 dark:text-slate-300 font-medium leading-relaxed">
              This makes B.Planning at SPAs one of the most high-ROI degrees in the country compared to private engineering colleges that charge ₹15L - ₹20L with similar or lower starting salary packages. Merit-cum-means scholarships further reduce fees for eligible students.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
