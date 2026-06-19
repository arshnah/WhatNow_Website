import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Merchant Navy Salary, Ranks & Progression | WhatNow",
  description: "Rank-by-rank pay in USD and INR, the certification ladder that gates every promotion, a realistic timeline to 4th Engineer, and the macro nobody mentions — flat wages, rising competition, a real shortage at the top.",
};

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="mn-sr-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mn-sr-grid)" />
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
          <linearGradient id="mn-sr-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mn-sr-wave-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#mn-sr-wave-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#mn-sr-wave-2)" />
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
      <div className="text-sm font-bold text-slate-400 dark:text-slate-400">
        Figures reviewed June 2026 · Pay in USD; INR equivalents at ~₹85/$. Use as indicative bands — verify current rates with industry sources.
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

// Real-voice pull-quote from the Abhay Singh interview (consent confirmed).
const CadetQuote = ({ children }: { children: React.ReactNode }) => (
  <figure className="border-l-4 border-orange-500 bg-orange-50/60 dark:bg-orange-950/20 rounded-r-2xl pl-6 pr-6 py-5 my-8">
    <blockquote className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic text-lg">
      {children}
    </blockquote>
    <figcaption className="mt-3 text-sm font-black text-orange-700 dark:text-orange-300 not-italic">
      — Abhay Singh, Deck Cadet (currently serving)
    </figcaption>
  </figure>
);

export default function MerchantNavySalaryRanksPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="Salary, Ranks & Career Progression"
        breadcrumbs={
          <>
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>{" "}
            <span>›</span>
            <Link href="/careers" className="hover:text-orange-600 transition-colors">Careers</Link>{" "}
            <span>›</span>
            <Link href="/careers/merchant-navy" className="hover:text-orange-600 transition-colors">Merchant Navy</Link>{" "}
            <span>›</span>
            <span className="text-orange-600">Salary & Ranks</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24 mt-12">

        <Section number="01" title="How the pay actually works">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Four things to understand before the numbers. <strong>(1)</strong> Officers are paid in <strong>US dollars</strong>, per contract — so the rupee figure you see drifts up over the years mostly because the rupee weakens, not because the real wage rose. <strong>(2)</strong> Food and accommodation on board are free, so your salary is close to pure savings while you&apos;re sailing. <strong>(3)</strong> Leave between contracts is usually <strong>unpaid</strong> — your &apos;annual&apos; pay is really your contract months. <strong>(4)</strong> Pay varies with rank, <strong>ship type</strong> (tanker, LNG, chemical and offshore generally pay more than bulk/container), company, the vessel&apos;s <strong>flag state</strong>, the charterer, and route (international &gt; coastal) — so two officers of the same rank can earn very differently.
          </p>

          <CadetQuote>
            &ldquo;It is never fixed. It depends not only on rank but on the type of ship, the company, the registered country of the vessel, the charterer, and more. Same rank, different company — completely different salaries.&rdquo;
          </CadetQuote>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-orange-700 dark:text-orange-300">&quot;Tax-free&quot; — with an asterisk.</strong> A seafarer&apos;s foreign earnings are tax-free in India <em>only</em> if you qualify as a Non-Resident — broadly, by spending more than <strong>182 days</strong> outside India in the financial year under the rules for seafarers. Fall short of the day-count and it becomes taxable, and the status has to be re-established every year. This is general information, not tax advice — check the current Income-Tax position for your year.
            </p>
          </div>
        </Section>

        <Section number="02" title="The rank ladder & indicative pay">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            Deck and engine ranks run in parallel and are paid comparably at each level. These are indicative bands from 2025–26 industry sources, not a guarantee.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[700px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Level</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Deck</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Engine</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Typical /month (USD)</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">≈ /month (INR)</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Unlocked by</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Trainee", "Deck Cadet", "Trainee Marine Eng. (TME)", "$350–700", "₹30k–60k", "Pre-sea course + sponsorship"],
                  ["Junior officer", "Third Officer", "Fourth Engineer", "~$2,000", "₹1.5–3L", "2nd Mate CoC / MEO Class IV"],
                  ["Mid officer", "Second Officer", "Third Engineer", "~$3,000", "₹2.5–4L", "Sea time + onboard promotion"],
                  ["Senior officer", "Chief Officer (Chief Mate)", "Second Engineer", "~$4,500–6,000", "₹4–6.5L", "Mate CoC / MEO Class II"],
                  ["Command", "Captain (Master)", "Chief Engineer", "$8,000–12,000+", "₹6.5–20L", "Master CoC / MEO Class I"],
                ].map(([level, deck, engine, usd, inr, unlocked], i, arr) => (
                  <tr key={level}>
                    <td className={`p-4 font-black text-slate-700 dark:text-slate-300 ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{level}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{deck}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{engine}</td>
                    <td className={`p-4 font-black text-orange-600 ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{usd}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{inr}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium text-sm ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{unlocked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400 dark:text-slate-400 font-medium mt-4">
            Add a premium for tanker/LNG/chemical/offshore vessels and top companies. Coastal/Indian-flag pay sits below international rates.
          </p>

          <CadetQuote>
            &ldquo;Different field, different rank — there are three departments: Deck, Engine, and Rating, each with its own ladder.&rdquo;
          </CadetQuote>

          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <h3 className="font-black text-lg text-neutral-dark mb-2">The third ladder: Ratings</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
              The table above is the <em>officer</em> track. Ratings — the non-officer crew — run a separate, shorter ladder, broadly:
            </p>
            <p className="text-neutral-dark font-black mb-4">
              GP Rating → Able Seaman / Oiler-Motorman → Bosun (deck) or No.&nbsp;1 Oiler &amp; Petty Officer (engine)
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
              Ratings earn less than officers at entry, but the route is cheaper and faster to reach — and it isn&apos;t a ceiling. The recognised crossover to officer rank is the{" "}
              <strong className="text-slate-700 dark:text-slate-300">Near Coastal Voyage (NWKO)</strong> route: roughly 12 months of onboard sea service with an approved training record, then the DG Shipping NWKO examination for a Certificate of Competency (CoC) as a watchkeeping officer (
              <a href="https://mti.shipindia.com/courses/gp-rating-leading-to-2nd-mate-ncv/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">SCI MTI</a>
              ). Entry pay bands vary widely by vessel type and company — confirm current figures against the institute and your employer&apos;s collective agreement.
            </p>
          </div>
        </Section>

        <Section number="03" title="The certification ladder (this gates every promotion)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            You do not get promoted by time served alone. Each step up requires a <strong>DG Shipping Certificate of Competency (CoC)</strong> — qualifying sea time, then written and oral exams, plus mandatory courses. This is the real spine of the career.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl mb-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Engine side</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Deck side</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Roughly what it takes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800"><strong>MEO Class IV</strong> — Fourth Engineer</td>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800"><strong>2nd Mate CoC</strong> — Third Officer</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium border-b border-slate-100 dark:border-slate-800">~6 months engine-room watchkeeping (ships ≥750 kW) / structured deck sea time, + exams & courses. GME/B.Tech grads are exempt from Part A of MEO IV.</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800"><strong>MEO Class II</strong> — Second Engineer</td>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800"><strong>Mate (Chief Mate) CoC</strong> — Chief Officer</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium border-b border-slate-100 dark:border-slate-800">~12 months as an engineer officer after Class IV (with enough propelling time on ships ≥750 kW); plus advanced courses, written & oral.</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300"><strong>MEO Class I</strong> — Chief Engineer</td>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300"><strong>Master CoC</strong> — Captain</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">~12 months as Second Engineer after Class II (ships ≥3000 kW), a ~2-month prep course, plus written & oral — heavy on ship management and maritime law.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm">
              Before any of this you also need the foundational paperwork: an <strong>INDoS number</strong> (permanent seafarer ID), a <strong>CDC</strong> (Continuous Discharge Certificate — your service record), a passport, the DG medical, and the mandatory <strong>STCW basic safety courses</strong> (personal survival, fire-fighting, first aid, personal safety & social responsibility), with advanced courses layered on as you climb.
            </p>
          </div>
        </Section>

        <Section number="04" title="A realistic timeline to Fourth Engineer (the honest version)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Coaching brochures show a clean line. Reality has waiting rooms in it.
          </p>

          <ol className="space-y-4 mb-8">
            {[
              { step: "Pre-sea", detail: "1 year (GME) or 4 years (B.Tech Marine)." },
              { step: "Wait for a berth", detail: "3–6 months is normal even with a placement." },
              { step: "Onboard training", detail: "~6 months as TME / Junior Engineer." },
              { step: "MEO Class IV", detail: "~3–4 months including the required courses and the oral." },
              { step: "First sail as 4th Engineer", detail: "" },
            ].map(({ step, detail }, i) => (
              <li key={step} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-600 text-white font-black text-sm flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-lg leading-relaxed">
                  <strong>{step}</strong>{detail ? ` — ${detail}` : ""}
                </span>
              </li>
            ))}
          </ol>

          <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 mb-4">
            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Net: roughly <strong>1.5–2 years</strong> from finishing the course to sailing as a 4th Engineer — and to <strong>Captain or Chief Engineer, about 10–15 years.</strong>
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
              <strong className="text-slate-900 dark:text-slate-100">The truest sentence in this whole guide:</strong> ~90% of your timeline will not happen exactly when you planned it. Course batches fill up, berths get delayed, exams get retaken, and promotions wait in a queue behind people ahead of you. Build slack into your plan and don&apos;t treat the brochure timeline as a promise.
            </p>
          </div>
        </Section>

        <Section number="05" title="The macro you must price in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { v: "~Flat", l: "real USD wages, ~15–20 yrs" },
              { v: "~10%", l: "of world seafarers are Indian" },
              { v: "~3 lakh", l: "active Indian seafarers" },
              { v: "3rd", l: "India's rank as a supplier nation" },
            ].map(({ v, l }) => (
              <div key={l} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
                <div className="text-2xl md:text-3xl font-black text-orange-600 leading-none mb-2">{v}</div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-snug">{l}</div>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            <strong>Wages have been broadly flat in dollar terms for around 15–20 years.</strong> The bigger rupee numbers Indians quote are largely the rupee weakening, not real raises. <strong>Competition is rising</strong> — India is the third-largest supplier of seafarers (after China and the Philippines), and newer South-East-Asian academies keep adding cheaper labour.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            But it isn&apos;t all downside. The BIMCO/ICS workforce reports flag a genuine, structural <strong>shortage of officers at management level and on specialised ships</strong> — LNG, chemical and offshore in particular. Senior, well-certified officers with specialised-vessel experience stay in demand. And the energy transition (dual-fuel LNG, decarbonisation, more automation) is reshaping engine-room skills — meaning the way to future-proof this career is exactly that: stack certificates and get specialised-vessel time, rather than competing at the bottom.
          </p>
        </Section>

        <Section number="06" title="Life after sailing (the real safety net)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            The honest answer to &quot;what if I want off the ships?&quot; — and to your parents&apos; biggest fear — is that a sea career converts into a shore career, especially on the engine side.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Marine / Technical Superintendent",
              "Fleet Manager",
              "Designated Person Ashore (DPA)",
              "Port State Control / Classification Society Surveyor",
              "Marine Insurance & Surveying",
              "Ship Chartering & Broking",
              "Marine Pilot",
              "Faculty at Maritime Institutes",
            ].map((role) => (
              <div key={role} className="flex items-center gap-3 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <span className="text-orange-500 font-black flex-shrink-0">›</span>
                <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">{role}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium mt-6 leading-relaxed">
            Many officers sail to senior rank, bank the savings, and move ashore around 40–45. That option is the reason the engine side&apos;s broader skillset is worth weighing at the very start — see{" "}
            <Link href="/careers/merchant-navy/entry-routes" className="text-orange-600 hover:underline font-bold">Entry Routes →</Link>.
          </p>
        </Section>

        <Section number="07" title="Women at sea (brief, honest)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            It&apos;s a small minority onboard, but India is further ahead than most countries. By the IMO WISTA 2024 survey India counts roughly <strong>~7% women seafarers, against ~1% globally</strong>, and registered Indian women seafarers have grown from around 1,700 in 2014 to well over 14,000 by 2024, helped by government initiatives (e.g. Sagar Mein Samman) and age relaxations for women on the DNS route. Around 50 Indian women have reached Captain or Chief Engineer.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm">
              The realities are unchanged: the same medical gate (including eyesight), shipboard facilities that are improving but still uneven, and being one of very few women among a crew of 20–25 for months. Figures vary by source and definition — reviewed Jun 2026. See official MoPSW / DG Shipping releases for the latest numbers.
            </p>
          </div>

          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 mt-10">
            <div className="text-amber-400 font-black text-xs uppercase tracking-widest mb-3">
              The &quot;crore by 30&quot; lie
            </div>
            <p className="leading-relaxed font-medium text-slate-200">
              <strong className="text-white">The viral &quot;earn crores in your twenties&quot; pitch quietly ignores unpaid leave, flat real wages, taxability if you don&apos;t clear the NRI day-count, and a promotion timeline that slips.</strong> The money is genuinely good for your age — but it&apos;s a disciplined-savings career with a real human cost, not a get-rich shortcut.
            </p>
          </div>
        </Section>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            <strong className="text-slate-700 dark:text-slate-300">See also:</strong>{" "}
            <Link href="/careers/merchant-navy/is-it-for-you" className="text-orange-600 hover:underline font-bold">Is It For You →</Link>{" "}
            ·{" "}
            <Link href="/careers/merchant-navy/entry-routes" className="text-orange-600 hover:underline font-bold">Entry Routes →</Link>{" "}
            ·{" "}
            <Link href="/exams/imu-cet" className="text-orange-600 hover:underline font-bold">IMU CET →</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
