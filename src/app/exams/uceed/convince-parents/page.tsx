import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "UCEED — Convince Parents | WhatNow",
  description: "Equipping students with real IIT placement statistics, average starting packages, and logical arguments to convince parents about design careers.",
  path: "/exams/uceed/convince-parents",
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
          <pattern id="uceed-convince-parents-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff5a1f" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-convince-parents-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#ff5a1f]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="uceed-cp-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uceed-cp-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-cp-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-cp-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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

export default function UceedConvinceParentsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — Convince Parents | WhatNow",
          description: "Equipping students with real IIT placement statistics, average starting packages, and logical arguments to convince parents about design careers.",
          path: "/exams/uceed/convince-parents",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
            { name: "Convince Parents", path: "/exams/uceed/convince-parents" },
          ],
        })}
      />
      <JsonLd
        data={faqJsonLd({
          faqs: [
            { q: "Design is not a stable career", a: "Every app, software, banking portal, and website requires digital designers to function. It is a core tech job. Frame it as \"software engineering for the user interface.\" UI/UX design is one of the highest-paying and fastest-growing segments in the Indian IT sector." },
            { q: "Why not B.Tech instead?", a: "An IIT B.Des has a starting salary range of ₹10L - ₹18L per annum, carries the identical \"IIT Graduate\" tag, and is recruited by Google, Microsoft, Samsung, and Adobe." },
            { q: "Is B.Des a real degree?", a: "Show your parents the official IIT placements portals. B.Des students share the same hostel rooms, same placement office, and same alumni network as B.Tech computer science students. Pursuing a B.Des at an IIT is a safe, high-paying, and prestigious career choice that offers immediate entry into top tech firms." },
          ],
        })}
      />
      <PageHeader
        title="UCEED — Talking to Your Parents"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-primary transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/uceed" className="hover:text-primary transition-colors">
              UCEED
            </Link>{" "}
            <span>›</span>
            <span className="text-primary">Convince Parents</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Objection 1: 'Design is not a stable career'">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Many parents associate the word "design" with boutique dressmakers or sketching logos. You must frame it as **Creative Technology (UI/UX)**.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4 mb-6">
            <h4 className="font-black text-xl text-neutral-dark">The Counter-Argument:</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              Every app, software, banking portal, and website requires digital designers to function. It is a core tech job. Frame it as "software engineering for the user interface." UI/UX design is one of the highest-paying and fastest-growing segments in the Indian IT sector.
            </p>
          </div>
        </Section>

        <Section number="02" title="Objection 2: 'Why not B.Tech instead?'">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            In India, the IIT brand is highly prestigious. Parents feel B.Tech is the only "real" degree offered by IITs.
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Metric
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    IIT B.Des (Design)
                  </th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    Average B.Tech (Mid-Tier)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Starting Salary Range
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    ₹10L - ₹18L per annum
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    ₹6L - ₹10L per annum
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">
                    Brand Value
                  </td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">
                    Identical "IIT Graduate" Tag
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">
                    State/Private college tag
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">
                    Major Recruiters
                  </td>
                  <td className="p-4 text-emerald-600 font-black">
                    Google, Microsoft, Samsung, Adobe
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">
                    TCS, Infosys, Cognizant
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="03" title="Objection 3: 'Is B.Des a real degree?'">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <h3 className="text-xl font-black text-neutral-dark mb-4">
              Providing Institutional Security
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
              Show your parents the official IIT placements portals. Highlight that B.Des students share the **same hostel rooms, same placement office, and same alumni network** as B.Tech computer science students.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              If they qualify for fee concessions based on family income, the same rules apply. Pursuing a B.Des at an IIT is a safe, high-paying, and prestigious career choice that offers immediate entry into top tech firms.
            </p>
          </div>
          <div className="border-l-4 border-orange-400 bg-orange-50 dark:bg-orange-950/30 rounded-r-2xl p-5 mt-6">
            <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed text-sm">
              On the &apos;it&apos;s too expensive&apos; objection: SC/ST/PwD students get full
              tuition waiver — the four-year program at IIT Bombay costs roughly
              ₹82,500 total rather than the full ₹8.83 lakhs. For families with
              annual income under ₹5 lakh, the MCM scholarship covers full tuition
              regardless of category. See the{" "}
              <Link href="/exams/uceed/scholarships" className="text-primary font-black underline underline-offset-2 hover:text-primary/80 transition-colors">
                Scholarships page
              </Link>{" "}
              on this site for the complete breakdown.
            </p>
          </div>
        </Section>

        <Section number="04" title="When the counsellor argues your side">
          <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/30 rounded-r-2xl p-6 md:p-8 my-8">
            <p className="text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed mb-4">
              &ldquo;My parents were very against UCEED from the start. I even went to
              join Allen. The counsellor there actually ended up convincing them.
              I even tried to say no, that I&apos;d be fine doing engineering — but they
              were set on UCEED after whatever the counsellor said.&rdquo;
            </p>
            <footer className="text-orange-600 font-black text-sm not-italic">
              — A UCEED 2026 qualifier, in conversation with WhatNow
            </footer>
          </blockquote>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            The pushback on UCEED doesn&apos;t always come from parents being
            closed-minded. Sometimes it comes from genuine uncertainty — about
            stability, about prestige, about whether design is a real career.
            That uncertainty is reasonable.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            What&apos;s interesting is that even traditional coaching institute
            counsellors — who have every financial incentive to push engineering
            preparation — sometimes see the value in design for the right student.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            The implication: if your parents trust a specific authority figure — a
            family friend in a relevant field, a counsellor, a senior whose opinion
            they respect — that endorsement may carry more weight than your own
            argument. Find that person and have the conversation with them first.
          </p>
        </Section>
      </div>
    </main>
  );
}
