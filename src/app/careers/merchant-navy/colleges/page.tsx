import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Merchant Navy Colleges & DG Shipping Approval | WhatNow",
  description: "The only rule that matters is DG Shipping approval. An honest tier map of Indian maritime institutes, how to verify a college in two minutes, and why a seat isn't a job.",
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
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="mn-col-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mn-col-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />
      <svg
        className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mn-col-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mn-col-wave-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#mn-col-wave-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#mn-col-wave-2)" />
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
      <div className="text-sm font-bold text-slate-400">
        Last reviewed: June 2026 · Researched from first-hand accounts of serving and trainee mariners, plus DG Shipping &amp; BIMCO/ICS data. Institutes listed as examples, not endorsements — verify on DG Shipping.
      </div>
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

export default function MerchantNavyCollegesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="Colleges & DG Shipping Approval"
        breadcrumbs={
          <>
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>{" "}
            <span>›</span>
            <Link href="/careers" className="hover:text-orange-600 transition-colors">Careers</Link>{" "}
            <span>›</span>
            <Link href="/careers/merchant-navy" className="hover:text-orange-600 transition-colors">Merchant Navy</Link>{" "}
            <span>›</span>
            <span className="text-orange-600">Colleges</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24 mt-12">

        <Section number="01" title="The one rule that matters: DG Shipping approval">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Before fees, brochures or campus photos, check one thing: is the <strong>specific course</strong> at that <strong>specific institute</strong> approved by the Directorate General of Shipping (DG Shipping)? Without it, your certificate is not valid for a seafaring career and is not recognised internationally.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong className="font-black text-orange-700">Approval is granted course-by-course.</strong> An institute can be approved for one programme and not another — so verify <em>both</em> the institute and the exact course, every time. An institute cagey about its approval number or status? Treat that as the answer.
            </p>
          </div>
        </Section>

        <Section number="02" title="The tier map (honest)">
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
            Indian maritime education runs from world-class to predatory. Roughly:
          </p>
          <p className="text-xs text-slate-400 font-medium mb-4 italic">
            This is orientation, not endorsement. WhatNow doesn&apos;t rank colleges or take referrals — always confirm current status yourself on DG Shipping.
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[640px] bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">Tier</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">What it is</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">Examples</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">The catch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-black text-slate-700 border-b border-slate-100">Govt (IMU)</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">Indian Maritime University — public, lowest fees, strong brand, merit via IMU CET</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">IMU Chennai (flagship), IMU Mumbai / Navi Mumbai, Kolkata, Visakhapatnam, Cochin; TS Chanakya</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">Competitive entry; you still arrange your own berth unless sponsored</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 border-b border-slate-100">Company-owned</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">Academies run by shipping companies that pre-place their own cadets — the safest route to an actual job</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">Anglo-Eastern Maritime Academy (Karjat); Samundra / SIMS (Lonavala); Tolani / TMI (Pune); SCI&apos;s training institute</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">Selective; often bonded to the sponsoring company</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 border-b border-slate-100">Reputed private</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">Long-running private institutes with real infrastructure and recruiters</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">HIMT, IMI, MANET, AMET, GEIMS, BP Marine, Fleet Management Training Institute, MASSA</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100 font-medium">Verify placement reality, not just the brochure</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700">Everyone else</td>
                  <td className="p-4 text-slate-600 font-medium">150+ DG-approved institutes of widely varying quality</td>
                  <td className="p-4 text-slate-500 font-medium italic">—</td>
                  <td className="p-4 text-slate-600 font-medium">A seat here is not a job; &quot;100% placement&quot; claims need scrutiny</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="03" title="How to verify a college in two minutes">
          <ol className="space-y-4">
            {[
              <>Go to the DG Shipping website (<a href="https://www.dgshipping.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-bold">dgshipping.gov.in</a>) and open the list of approved Maritime Training Institutes.</>,
              "Find the institute and the exact course (DNS, B.Sc Nautical Science, B.Tech Marine Engineering, GME, ETO, GP Rating) — each carries a separate approval number.",
              "Confirm the approval is current, not lapsed, and that intake/seats match what the institute is advertising.",
              "Separately confirm any STCW short-courses you'll need are DG-approved at that centre.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-600 text-white font-black text-sm flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-lg leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mt-8">
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong className="font-black text-orange-700">If an institute is cagey about its approval number or status, treat that as the answer.</strong>
            </p>
          </div>
        </Section>

        <Section number="04" title="Fees, roughly">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Ballpark, varying widely by institute and year. Always confirm exact fees, bond terms and stipend in writing before paying anything.
          </p>
          <ul className="space-y-4">
            {[
              { label: "DNS", detail: "Typically a few lakh for the one-year course (often the cheapest fast route, and loan-eligible because it leads to a B.Sc)." },
              { label: "B.Sc Nautical Science / B.Tech Marine Engineering", detail: "A full multi-year degree's fees; higher total, spread over 3–4 years." },
              { label: "GME", detail: "Roughly ₹3–6 lakh for the one year." },
            ].map(({ label, detail }) => (
              <li key={label} className="flex items-start gap-3 text-slate-700 font-medium">
                <span className="text-orange-500 font-black mt-0.5 flex-shrink-0">›</span>
                <span><strong className="text-slate-900">{label}</strong> — {detail}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 font-medium mt-6 text-base">
            Company-sponsored seats can be subsidised — sometimes with a service bond in return.
          </p>

          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 mt-10">
            <div className="text-amber-400 font-black text-xs uppercase tracking-widest mb-3">
              The &quot;100% placement&quot; lie
            </div>
            <p className="leading-relaxed font-medium text-slate-200">
              <strong className="text-white">&quot;100% placement&quot; on a low-tier academy&apos;s banner usually means something narrower than a guaranteed sea job.</strong> The number to ask for is onboard cadet placements with named companies — and ideally sponsorship secured before the course. A company-owned academy that pre-places cadets is worth more than a glossy campus that places almost no one.
            </p>
          </div>
        </Section>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 font-medium">
            <strong className="text-slate-700">See also:</strong>{" "}
            <Link href="/careers/merchant-navy/entry-routes" className="text-orange-600 hover:underline font-bold">Entry Routes →</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet" className="text-orange-600 hover:underline font-bold">IMU CET (how the entrance & counselling work) →</Link>{" "}
            ·{" "}
            <a href="https://www.dgshipping.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-bold">DG Shipping approved-institute list ↗</a>
          </p>
        </div>
      </div>
    </main>
  );
}
