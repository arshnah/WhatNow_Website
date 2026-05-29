import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UCEED — Scholarships | WhatNow",
};

// --- Components ---

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="px-6 lg:px-12 pt-24 pb-16 md:pt-32 md:pb-20 max-w-5xl mx-auto w-full">
    <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 mb-8">
      {breadcrumbs}
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark">
      {title}
    </h1>
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
      <div className="text-primary font-black text-sm uppercase tracking-widest mb-4">
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
  <div className="border border-slate-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm mb-6 flex flex-col md:flex-row gap-8">
    <div className="md:w-1/3">
      <div className="inline-block px-3 py-1 bg-indigo-50 text-primary text-xs font-black uppercase tracking-wider rounded-full mb-4">
        {type}
      </div>
      <h3 className="text-2xl font-black text-neutral-dark mb-2">{title}</h3>
      <p className="text-sm font-bold text-slate-500 italic">{audience}</p>
    </div>
    <div className="md:w-2/3 flex flex-col justify-center">
      <div className="text-lg text-slate-600 font-medium leading-relaxed mb-4">
        {description}
      </div>
      {note && (
        <div className="pt-4 border-t border-slate-100 text-sm font-bold text-slate-500">
          Note: {note}
        </div>
      )}
    </div>
  </div>
);

export default function UceedScholarshipsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="UCEED — Scholarships"
        breadcrumbs={
          <>
            <Link
              href="/exams"
              className="hover:text-primary transition-colors"
            >
              Exams
            </Link>{" "}
            <span>›</span>
            <Link
              href="/exams/uceed"
              className="hover:text-primary transition-colors"
            >
              UCEED
            </Link>{" "}
            <span>›</span>
            <span className="text-primary">Scholarships</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="What does B.Des at an IIT actually cost?">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            The fee structure varies by institute. Here&apos;s a rough overview. The
            most important thing to understand: the tuition fee is the waiveable
            part — hostel, mess, and activity fees are separate and not
            typically waived.
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">
                    Institute
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">
                    Approx. total fees (4 years)
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">
                    SC/ST/PwD fees
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 border-b border-slate-100 font-black">
                    IIT Bombay
                  </td>
                  <td className="p-4 text-slate-700 border-b border-slate-100 font-medium">
                    ₹8.83 lakhs (tuition ₹8L + other)
                  </td>
                  <td className="p-4 text-primary border-b border-slate-100 font-black">
                    ~₹82,500 total
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 border-b border-slate-100 font-black">
                    IIT Delhi
                  </td>
                  <td className="p-4 text-slate-700 border-b border-slate-100 font-medium">
                    Similar to IIT Bombay range
                  </td>
                  <td className="p-4 text-primary border-b border-slate-100 font-black">
                    Full tuition waiver applies
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 font-black">
                    IIITDM Jabalpur
                  </td>
                  <td className="p-4 text-slate-700 font-medium">
                    Typically lower than IITs
                  </td>
                  <td className="p-4 text-primary font-black">
                    Reduced fees apply
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" title="Available Scholarships">
          <ScholarshipCard
            title="Merit-cum-Means (MCM)"
            type="Institute Scholarship"
            audience="General, OBC-NCL, EWS students. Family income-based."
            description="The most significant scholarship available to non-SC/ST students. Offered by each IIT to eligible undergraduate students based on economic need and academic performance. The benefit is a tuition fee waiver — partial or full — plus a monthly stipend."
            note="Maintain a minimum CPI/SPI of 6.0 each semester with no academic backlog."
          />

          <ScholarshipCard
            title="SC, ST and PwD Waiver"
            type="Government Policy"
            audience="SC, ST, and PwD students at all IITs. Automatic."
            description="All SC, ST, and PwD students admitted to IITs receive a complete waiver of tuition fees. At IIT Bombay, SC/ST students pay approximately ₹82,500 total for the four-year B.Des program versus the full fee of ₹8.83 lakhs."
            note="No separate application needed, applied automatically based on category."
          />
        </Section>

        <Section number="03" title="The Honest Picture">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50 mb-6">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              The thing parents need to hear
            </h3>
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              &ldquo;Design at an IIT&rdquo; is not a financially risky choice. The same MCM
              scholarship framework that covers B.Tech students covers B.Des
              students. The fee structure is identical across programs at most
              IITs. If you qualify for fee relief on the basis of income, you
              get it regardless of which degree you&apos;re studying.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
