import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — SPA Fees, Seat Matrix & ROI | WhatNow",
  description: "Seat distribution across SPA Delhi, Bhopal, Vijayawada, fee guidelines, and financial support schemes.",
  path: "/exams/jee-paper3/scholarships",
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
          <pattern id="jee-scholarships-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-scholarships-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-sch-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-sch-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-sch-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-sch-wave-grad-2)" />
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
      <div className="inline-block px-3 py-1 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-300 text-xs font-black uppercase tracking-wider rounded-full mb-4">
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

export default function JeePaper3ScholarshipsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="JEE Paper 3 — SPA Fees & Seats"
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
            <span className="text-teal-600">Fees & Seats</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Subsidized SPA Fee Structure">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            The School of Planning and Architecture (SPAs) are institutes of national importance funded directly by the Central Government. As a result, B.Planning education at SPAs is highly subsidized, costing approximately ₹1.0L to ₹1.8L per annum in tuition and academic charges.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Institute Name
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Tuition Fees (Per Semester)
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Approx. Total Fees (4 Years)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    SPA Delhi
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ~₹45,000 / semester
                  </td>
                  <td className="p-4 text-teal-600 dark:text-teal-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    ~₹4.80 lakhs total
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    SPA Bhopal
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ~₹50,000 / semester
                  </td>
                  <td className="p-4 text-teal-600 dark:text-teal-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    ~₹5.10 lakhs total
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    SPA Vijayawada
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ~₹45,000 / semester
                  </td>
                  <td className="p-4 text-teal-600 dark:text-teal-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    ~₹4.80 lakhs total
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    Top NITs (e.g. NIT Calicut, VNIT Nagpur)
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">
                    ~₹62,500 / semester
                  </td>
                  <td className="p-4 text-teal-600 dark:text-teal-300 font-black">
                    ~₹6.20 lakhs total
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" title="Available Scholarships & Fee Relief">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            B.Planning aspirants admitted through JoSAA/CSAB counselling can access a series of fee waivers and merit-cum-means financial aid.
          </p>

          <ScholarshipCard
            title="SC, ST and PwD Tuition Waiver"
            type="Government Policy"
            audience="All SC, ST, and PwD candidates in Central Government Technical Institutes."
            description="Under Central Ministry mandates, all SC, ST, and PwD students admitted to SPAs and NITs receive a complete (100%) waiver on their tuition fees. They are only responsible for hostel rent, mess fees, and security deposits."
            note="No income barrier applies for the category tuition waiver."
          />

          <ScholarshipCard
            title="Central Sector Top Class SC/ST Scheme"
            type="Government Policy"
            audience="Category candidates with household income below ₹8.0 lakhs per annum."
            description="Covers full tuition fees at SPAs and NITs. Also provides a monthly hostel/boarding allowance (up to ₹3,000/mo), books and stationery allowance of ₹3,000/year, and a one-time computer grant of ₹45,000."
            note="Applied directly via the National Scholarship Portal with valid category and income certificates."
          />

          <ScholarshipCard
            title="SPA Merit-cum-Means (MCM) Scholarship"
            type="Institutional Award"
            audience="General and OBC category students. Need-based."
            description="Offered directly by SPA Delhi, Bhopal, and Vijayawada. It grants a tuition fee waiver to up to 25% of UG students whose parental income does not exceed ₹4.5 lakhs per annum."
            note="Must maintain a cumulative CGPA of 6.0 or above with zero active backlogs to continue the waiver."
          />
        </Section>

        <Section number="03" title="The Honest ROI Picture">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 mb-6">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              Return on Investment for B.Plan graduates
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              Urban planning is a specialized profession. SPA graduates are hired by real estate consulting firms (JLL, CBRE, Knight Frank), infrastructure giants (L&T, Tata Consulting Engineers), and consulting agencies (PwC, EY). Starting salaries average **₹5L to ₹8L per annum**.
            </p>
            <p className="text-lg text-slate-750 dark:text-slate-300 font-medium leading-relaxed">
              Because SPA tuition fees are heavily subsidized (~₹4.8L for 4 years), the debt burden is low, leading to a quick payback period. For students from lower-income backgrounds, utilizing the institutional **MCM waivers** or government schemes makes B.Planning one of the most cost-effective and financially secure creative-technical paths in the country.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
