import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "UCEED — What It Is | WhatNow",
  description: "UCEED — the Undergraduate Common Entrance Exam for Design conducted by IIT Bombay — is the only standardised entrance exam for Bachelor of Design (B.Des) programs at the IITs.",
  path: "/exams/uceed/what-it-is",
});

// --- Components ---

const PageHeader = ({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: React.ReactNode;
}) => (
  <section className="relative overflow-hidden bg-white dark:bg-[#0E111E] border-b border-slate-200/60 dark:border-slate-700 pt-24 pb-16 md:pt-32 md:pb-20">
    {/* SVG Hero Background */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Subtle grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="uceed-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5563ED" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uceed-what-it-is-grid)" />
      </svg>
      
      {/* Layered glowing blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-[#5563ED]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      {/* Smooth vector paths */}
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="uceed-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5563ED" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#5563ED" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uceed-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#uceed-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#5563ED" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
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

const InfoBox = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning";
}) => (
  <div
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-indigo-50 dark:bg-indigo-950/30 border-primary" : "bg-orange-50 dark:bg-orange-950/30 border-accent"}`}
  >
    {children}
  </div>
);

const BentoGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">{children}</div>
);

const BentoCard = ({
  title,
  value,
  label,
  primary = false,
}: {
  title: string;
  value: string;
  label: string;
  primary?: boolean;
}) => (
  <div
    className={`border rounded-2xl p-8 relative overflow-hidden ${primary ? "bg-primary text-white border-primary" : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-neutral-dark"}`}
  >
    <div
      className={`text-sm font-bold uppercase tracking-wider mb-8 ${primary ? "text-indigo-200" : "text-slate-500 dark:text-slate-400"}`}
    >
      {label}
    </div>
    <div className="text-2xl font-black mb-2">{title}</div>
    <div className={primary ? "text-white" : "text-primary"}>{value}</div>
  </div>
);

export default function UceedWhatItIsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "UCEED — What It Is | WhatNow",
          description: "UCEED — the Undergraduate Common Entrance Exam for Design conducted by IIT Bombay — is the only standardised entrance exam for Bachelor of Design (B.Des) programs at the IITs.",
          path: "/exams/uceed/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "UCEED", path: "/exams/uceed" },
            { name: "What It Is", path: "/exams/uceed/what-it-is" },
          ],
        })}
      />
      <PageHeader
        title="UCEED — What It Is"
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
            <span className="text-primary">What It Is</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="The basics">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            UCEED — Undergraduate Common Entrance Exam for Design — is conducted
            by IIT Bombay every January. It&apos;s the only standardised entrance
            exam that opens the door to Bachelor of Design (B.Des) programs at
            IITs at the undergraduate level. If you want to study design at an
            IIT, this is the one exam you write.
          </p>
          <BentoGrid>
            <BentoCard
              label="Exam Format"
              title="Part A + Part B"
              value="Computer based + Pen & Paper"
              primary={true}
            />
            <BentoCard
              label="Total Seats"
              title="245 Seats"
              value="Across 7 participating institutes"
            />
          </BentoGrid>
          <InfoBox type="warning">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-accent">
                Crucial difference from JEE:
              </strong>{" "}
              You do not need to be a Science student. UCEED is open to all
              streams — Science, Commerce, and Arts.
            </p>
          </InfoBox>
        </Section>

        <Section number="02" title="Eligibility">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Three criteria. You must meet all three to write the exam.
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  Age limit
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  For General, EWS, and OBC-NCL candidates: born on or after
                  October 1, 2001. For SC, ST, and PwD candidates: born on or
                  after October 1, 1996.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  Number of attempts
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Maximum of two attempts. They must be in consecutive years.
                  You can write it in your Class XII year, and the year
                  immediately after. That&apos;s it.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  Qualifying exam
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  You must have passed Class XII (or equivalent) in 2025, or be
                  appearing for it in 2026. All streams (Science, Commerce, Arts
                  & Humanities) are eligible.
                </p>
              </div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="font-black mb-2">The 70% Board Requirement</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              There is no minimum aggregate for writing the UCEED exam itself.
              However, IITs internally mandate a minimum of{" "}
              <strong>70% in Class XII</strong> for admission (65% for SC/ST/PwD
              candidates). A strong UCEED rank will not override this board
              requirement.
            </p>
          </InfoBox>
        </Section>

        <Section number="03" title="Exam Structure">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            One paper. Three hours total. 300 marks. Two mandatory parts — both must be attempted. Missing either Part A or Part B is not an option.
          </p>

          <BentoGrid>
            <BentoCard 
              label="Part A (Computer-based)" 
              title="2 Hours / 200 Marks" 
              value="Tests spatial reasoning, visual dynamics, and analytical skills through MCQ, MSQ, and NAT formats." 
              primary={true} 
            />
            <BentoCard 
              label="Part B (Pen & Paper)" 
              title="1 Hour / 100 Marks" 
              value="Tests drawing, sketching, and design aptitude. Only evaluated if you clear the Part A cutoff." 
            />
          </BentoGrid>
          
          <InfoBox type="warning">
            <h4 className="font-black mb-2">Part B Discrepancy Rule</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Part B is evaluated manually by two independent evaluators. If their scores differ by more than <strong>20 marks</strong>, a third evaluator is brought in. Do not use generic shading techniques; originality is aggressively rewarded.</p>
          </InfoBox>
        </Section>

        <Section number="04" title="Marking Scheme">
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Question Type</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Correct</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Partial</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Incorrect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">NAT (Numerical)</td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">+4</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">None</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">0</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">MSQ (Multiple Select)</td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 dark:border-slate-800 font-black">+4</td>
                  <td className="p-4 text-primary border-b border-slate-100 dark:border-slate-800 font-black">+3 / +2 / +1</td>
                  <td className="p-4 text-red-500 border-b border-slate-100 dark:border-slate-800 font-black">-1</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">MCQ (Multiple Choice)</td>
                  <td className="p-4 text-emerald-600 font-black">+3</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 font-medium">None</td>
                  <td className="p-4 text-red-500 font-black">-0.71</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="05" title="Syllabus — what actually appears">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            IIT Bombay explicitly states that the syllabus is &ldquo;exhaustive and indicative&rdquo; — meaning nothing outside these topics will appear, but not all topics are tested every year.
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">Part A topics</h3>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Topic area</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">What it actually tests</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black align-top">Visualization and Spatial Reasoning</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Rotating and transforming 2D shapes and 3D objects mentally. Folding/unfolding, mirror images, pattern completion, spatial relationships.</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black align-top">Practical and Scientific Knowledge</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">How everyday objects work — mechanisms, materials, physics of daily life. Basic engineering and science intuition, not textbook formulae.</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black align-top">Observation and Design Sensitivity</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Noticing what most people tune out. Visual hierarchies, anomalies in images, &ldquo;what&apos;s wrong here,&rdquo; attention to detail. This is developed through habit, not mugging.</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black align-top">Environment and Society</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">General awareness of how design intersects with environmental issues, culture, and society. Indian crafts, sustainability, socially relevant design.</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black align-top">Analytical and Logical Reasoning</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Verbal and non-verbal reasoning, sequences, pattern recognition, quantitative reasoning.</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black align-top">Language</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Reading and understanding standard English. Comprehension passages, vocabulary in context.</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black align-top">Creativity</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">Analogies (verbal and non-verbal), metaphors, signs and symbols. Lateral thinking and novel associations.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-black text-neutral-dark mt-10 mb-4">Part B topics</h3>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[500px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Sub-section</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">What it tests in practice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black align-top">Drawing</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Draw products, people, or scenes in proportion. Tests line quality, composition, perspective, shading, and your ability to communicate visually. Annotation matters — explain what you&apos;re drawing and why. A clean, labelled, well-composed drawing will outscore a technically polished one that&apos;s poorly explained.</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black align-top">Design Aptitude</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">A structured design problem. You&apos;re asked to identify a real-world issue, propose a solution, and justify your thinking. Think about: user, context, materials, ergonomics, feasibility. Drawing quality matters less here than structured reasoning. This section is worth 50 marks and significantly underprepped by most students.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="06" title="The cutoff system — two walls, not one">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Most students think &ldquo;cutoff&rdquo; means the rank you need to get into an IIT. There are actually two separate cutoffs. Failing the first one means your Part B drawing never even gets evaluated.
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">Wall 1 — Part A qualifying cutoff</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-4">
            After Part A is scored, IIT Bombay calculates a qualifying cutoff using the mean and standard deviation of all Part A scores. Only candidates who clear this mark have their Part B evaluated and receive a rank.
          </p>
          <InfoBox type="info">
            <p className="font-black text-neutral-dark mb-2">UCEED 2026 Part A stats (official, released February 5, 2026):</p>
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">Mean score: <strong>70.86</strong> &nbsp;·&nbsp; Standard deviation: <strong>25.77</strong></p>
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-3">Formula: Cutoff (δ) = mean (μ) + 0.5 × standard deviation (σ)</p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              General cutoff — <strong>83.74 marks</strong> out of 200<br />
              OBC-NCL / EWS: 0.9 × δ &nbsp;|&nbsp; SC / ST / PwD: 0.5 × δ
            </p>
          </InfoBox>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
            In 2025, approximately 15,986 students appeared, and only around 5,703 — roughly 36% — cleared the Part A cutoff and received a rank. If you don&apos;t clear Part A, your Part B answer booklet isn&apos;t evaluated and your scorecard only shows Part A marks.
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">Wall 2 — Admission closing ranks</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-4">
            Getting a rank doesn&apos;t guarantee admission. Seats are filled in five counselling rounds based on All India Rank. The table below shows approximate closing ranks (General/Open category) based on 2026 Round 1 data and historical trends.
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[500px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Institute</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Approx. closing rank (Open, 2026)</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Seats (Open)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["IIT Bombay", "~14 (Round 1, 2026)", "14"],
                  ["IIT Delhi", "~30–40", "8"],
                  ["IIT Hyderabad", "~40–55", "11"],
                  ["IIT Guwahati", "~70–80", "22"],
                  ["IIT Roorkee", "~90–110", "8"],
                  ["IIT Indore", "~100–130", "6"],
                  ["IIITDM Jabalpur", "~150–200", "25"],
                ].map(([inst, rank, seats], i, arr) => (
                  <tr key={inst}>
                    <td className={`p-4 text-slate-700 dark:text-slate-300 font-black ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{inst}</td>
                    <td className={`p-4 text-primary font-black ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{rank}</td>
                    <td className={`p-4 text-slate-600 dark:text-slate-400 font-medium ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>{seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoBox type="info">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              <strong className="font-black">Note:</strong> These are General/Open category closing ranks. SC, ST, OBC-NCL, EWS, and PwD candidates have separate rank lists with different cutoffs — generally more accessible. Always plan around your own category rank, not just AIR.
            </p>
          </InfoBox>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-4">Score-to-outcome rough guide</h3>
          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden my-4">
            {[
              { range: "200+", outcome: "Serious IIT Bombay territory. The 2025 topper scored 230.16 out of 300.", dark: false },
              { range: "170–200", outcome: "IIT Delhi to IIT Guwahati range. Competitive for any top program outside Bombay.", dark: true },
              { range: "150–170", outcome: "IIT Hyderabad, IIT Roorkee, IIT Indore, IIITDM Jabalpur in reach.", dark: false },
              { range: "120–150", outcome: "May qualify Part A; IIITDM Jabalpur possible. Also look at result-sharing institutes.", dark: true },
            ].map(({ range, outcome, dark }, i, arr) => (
              <div key={range} className={`flex items-center gap-6 p-5 ${i < arr.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""} ${dark ? "bg-slate-50 dark:bg-slate-800/40" : "bg-white dark:bg-slate-800/50"}`}>
                <div className="text-2xl font-black text-neutral-dark min-w-[110px] shrink-0">{range}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{outcome}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="07" title="The seven institutes — what each one actually is">
          <div className="space-y-6">
            {[
              {
                name: "IIT Bombay",
                seats: "37 seats",
                dept: "IDC School of Design, Mumbai",
                paras: [
                  "The oldest and most recognised design program in the country. IDC — Industrial Design Centre — has been running since 1969 and has built the strongest alumni network in Indian design. The B.Des program runs eight semesters with heavy project-based learning. In year three, students can choose to shift to a five-year dual-degree B.Des + M.Des.",
                  "Specialisations available at IDC include Industrial Design, Communication Design, Animation Design, Interaction Design, and Mobility and Vehicle Design.",
                ],
                note: "Stream restriction: All streams eligible · Fees: ~₹8.83 lakhs total (4 years)",
                noteRed: false,
                accent: false,
              },
              {
                name: "IIT Delhi",
                seats: "20 seats",
                dept: "Department of Design, New Delhi",
                paras: [
                  "The capital gives IIT Delhi a location advantage no other institute has — direct access to government, policy, and every major consultancy and firm in India. The B.Des program is explicitly human-centred: studio-based learning, multidisciplinary collaborations, and strong industry interface.",
                  "Small intake (20 seats) means intense peer competition and close faculty attention. Open category closes around rank 15–40 consistently — it's the second most competitive design program in India.",
                ],
                note: "Stream restriction: All streams eligible",
                noteRed: false,
                accent: false,
              },
              {
                name: "IIT Guwahati",
                seats: "56 seats",
                dept: "Department of Design, Guwahati",
                paras: [
                  "The largest seat pool among the participating IITs — 56 seats — which makes it a strong destination for students in the rank range of 50–100. The program focuses on the intersection of technology and experience design, with interdisciplinary research cutting across engineering, design, and social sciences. Located on the Brahmaputra, the campus environment is unlike any urban IIT.",
                ],
                note: "Stream restriction: Physics, Chemistry, Mathematics required — Arts/Commerce students NOT eligible",
                noteRed: true,
                accent: false,
              },
              {
                name: "IIT Hyderabad",
                seats: "30 seats",
                dept: "Department of Design, Hyderabad",
                paras: [
                  "Established in 2014 with an interdisciplinary approach at its core. The B.Des curriculum is structured in four levels — broad foundation in year one to specialisation by year three. Students can specialise in Product Design, Visual Design, Interaction Design, UX Design, or Film and Animation.",
                  "Hyderabad as a city is increasingly relevant for design — strong startup ecosystem, major tech firms, and a growing creative industry.",
                ],
                note: "Stream restriction: All streams eligible",
                noteRed: false,
                accent: false,
              },
              {
                name: "IIT Indore",
                seats: "16 seats",
                dept: "School of Innovation, Indore",
                paras: [
                  "The newest program in this list — first batch joined in 2025. IIT Indore frames design through innovation, with four specialisation areas: Urban System Innovation, Educational Technologies, Healthcare Systems, and Sustainable Energy Systems. Less traditional design school, more innovation-focused — which suits students who want to work on large systems problems.",
                  "Only 16 seats makes this a smaller, tighter cohort. Given how new it is, there's limited alumni data on placements — factor this in.",
                ],
                note: "Stream restriction: All streams eligible · Program started 2025 — placement data limited",
                noteRed: false,
                accent: false,
              },
              {
                name: "IIT Roorkee",
                seats: "20 seats",
                dept: "Department of Design, Roorkee",
                paras: [
                  "India's oldest technical institution (1847) now offering design. The B.Des curriculum combines design with computing, engineering, and manufacturing — covering product design, user experience, materials, ergonomics, and sustainability. More industrially grounded than most other IIT design programs.",
                ],
                note: "Stream restriction: Physics, Chemistry, Mathematics required — Arts/Commerce students NOT eligible",
                noteRed: true,
                accent: false,
              },
              {
                name: "IIITDM Jabalpur",
                seats: "66 seats",
                dept: "Design Discipline, Jabalpur",
                paras: [
                  "The largest seat count of any participating institute — 66 seats — and consistently the most accessible in terms of closing rank (~150–200 for Open category). The curriculum covers multiple design areas in initial semesters before specialising in product, space, or communication design.",
                  "Not an IIT — it's an IIITDM (Indian Institute of Information Technology Design and Manufacturing). The distinction matters when comparing prestige and alumni networks, but the program quality is solid. It also conducts spot admission rounds if seats remain vacant after counselling, unlike the IITs.",
                ],
                note: "Stream restriction: Physics, Chemistry, Mathematics or Biology required",
                noteRed: true,
                accent: true,
              },
            ].map(({ name, seats, dept, paras, note, noteRed, accent }) => (
              <div key={name} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-black text-neutral-dark">{name}</h3>
                  <span className={`text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg shrink-0 ${accent ? "bg-accent" : "bg-primary"}`}>{seats}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold italic mb-4">{dept}</p>
                {paras.map((para, i) => (
                  <p key={i} className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-3 last:mb-4">{para}</p>
                ))}
                <div className={`border-t border-slate-100 dark:border-slate-800 pt-4 text-sm font-semibold ${noteRed ? "text-red-500 font-black" : "text-slate-500 dark:text-slate-400"}`}>{note}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="08" title="Seat matrix — category-wise breakdown">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            245 total seats. The table below is from the UCEED 2026 seat matrix.
          </p>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-4">
            <table className="w-full text-left border-collapse min-w-[700px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  {["Institute", "Open", "EWS", "OBC-NCL", "SC", "ST", "PwD*", "Total"].map((h) => (
                    <th key={h} className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["IIT Bombay",      "14", "4",  "9",  "5",  "3", "2", "37"],
                  ["IIT Delhi",       "8",  "2",  "5",  "3",  "1", "1", "20"],
                  ["IIT Guwahati",    "22", "6",  "15", "7",  "3", "3", "56"],
                  ["IIT Hyderabad",   "11", "3",  "8",  "4",  "2", "2", "30"],
                  ["IIT Indore",      "6",  "2",  "4",  "2",  "1", "1", "16"],
                  ["IIT Roorkee",     "8",  "2",  "4",  "3",  "2", "1", "20"],
                  ["IIITDM Jabalpur", "25", "6",  "18", "10", "4", "3", "66"],
                ].map(([inst, ...cols]) => (
                  <tr key={inst}>
                    <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">{inst}</td>
                    {cols.slice(0, -1).map((v, i) => (
                      <td key={i} className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">{v}</td>
                    ))}
                    <td className="p-4 text-primary border-b border-slate-100 dark:border-slate-800 font-black">{cols[cols.length - 1]}</td>
                  </tr>
                ))}
                <tr className="bg-slate-900 text-white">
                  <td className="p-4 font-black">Total</td>
                  {["94", "25", "63", "34", "17", "13"].map((v) => (
                    <td key={v} className="p-4 font-black">{v}</td>
                  ))}
                  <td className="p-4 text-accent font-black">245</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-3 leading-relaxed">
            *PwD seats are horizontal — distributed within each category (Open, EWS, OBC-NCL, SC, ST), not separate from them. EWS certificates issued on or after April 1, 2026 are accepted. OBC-NCL certificates must also be dated April 1, 2026 or later.
          </p>
        </Section>

        <Section number="09" title="Important dates — UCEED 2026 timeline">
          <div className="mt-4 space-y-0">
            {[
              { date: "Oct 1, 2025",     event: "Registration opens",                  detail: "Online at uceed.iitb.ac.in (1:00 PM onwards)" },
              { date: "Nov 5, 2025",     event: "Regular registration closes",          detail: "Late fee period: Nov 5–10" },
              { date: "Nov 10, 2025",    event: "Late registration closes",             detail: "5:00 PM. Portal shuts automatically." },
              { date: "Jan 2, 2026",     event: "Admit card available",                 detail: "Download from candidate portal" },
              { date: "Jan 8, 2026",     event: "Last date to report discrepancies",    detail: "In admit card (5:00 PM)" },
              { date: "Jan 18, 2026",    event: "UCEED 2026 exam",                      detail: "Sunday, 9:00 AM to 12:00 noon. Reporting from 7:00 AM." },
              { date: "Jan 20, 2026",    event: "Draft answer key released",            detail: "Part A responses also available for download until results" },
              { date: "Feb 5, 2026",     event: "Part A cutoff announced",              detail: "Mean and standard deviation released" },
              { date: "Mar 6, 2026",     event: "Results declared",                     detail: "Rank list published" },
              { date: "Mar 14 – Apr 10", event: "B.Des application window",             detail: "Apply separately for institute admission" },
              { date: "Apr 21, 2026",    event: "Round 1 seat allotment",               detail: "" },
              { date: "Jul 31, 2026",    event: "Last date to download scorecard",      detail: "" },
            ].map(({ date, event, detail }, i) => (
              <div key={i} className="flex gap-6 pb-6 last:pb-0">
                <div className="min-w-[140px] text-sm font-black text-primary pt-1 shrink-0">{date}</div>
                <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-6 pb-2">
                  <p className="font-black text-neutral-dark text-base">{event}</p>
                  {detail && <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-1">{detail}</p>}
                </div>
              </div>
            ))}
          </div>
          <InfoBox type="info">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              <strong className="font-black">Important:</strong> UCEED and B.Des admission are two separate processes. Qualifying the exam and getting a rank does not automatically enrol you. You must separately apply for B.Des admission through the IIT Bombay Admissions Portal between March 14 and April 10. Application processing fee: ₹4,000 (non-refundable).
            </p>
          </InfoBox>
        </Section>

        <Section number="10" title="Counselling — how seats get allocated">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
            Five rounds of seat allotment. Based on your AIR, your category, and the order of institutes you listed in your preference. You will receive allotment letters by email. Each round has a payment deadline — missing it cancels your seat.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Apply for admission",
                desc: "After results, apply separately via the IIT Bombay Admissions Portal (March 14 – April 10). Fill your institute preferences in order. You can edit until the deadline — your final submission is locked.",
              },
              {
                num: "2",
                title: "Round 1 allotment (April 21)",
                desc: "You receive a provisional allotment. If you get your first-choice institute: ACCEPT (freeze) or DECLINE. If you get a lower-preference institute: ACCEPT and FREEZE, or ACCEPT and FLOAT.",
              },
              {
                num: "3",
                title: "Freeze or Float",
                desc: "Freeze = accept the current allotment, exit the process. Float = accept the current allotment but stay in the pool for subsequent rounds. If a higher-preference seat becomes available in a later round, it is automatically allocated to you and you lose the earlier one. Float is active until Round 4.",
              },
              {
                num: "4",
                title: "Pay the Seat Acceptance Fee",
                desc: "₹60,000 for General/EWS/OBC-NCL. ₹15,000 for SC/ST/PwD. Pay only once — it's adjusted against institute fees at joining. Miss the payment window and your seat is cancelled; you're out of all further rounds.",
              },
              {
                num: "5",
                title: "Rounds 2–5 (May–July)",
                desc: "Vacant seats from declined or forfeited allotments are redistributed. Rounds 3–5 fill residual vacancies. If you paid in Round 1 and chose Float, you may be upgraded in later rounds automatically.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-sm shrink-0 mt-1">{num}</div>
                <div>
                  <h4 className="font-black text-neutral-dark text-base mb-1">{title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <InfoBox type="warning">
            <p className="text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
              <strong className="font-black text-accent">On withdrawals:</strong> Candidates who accepted seats in Rounds 1 or 2 can withdraw before the Round 2 withdrawal deadline for a partial refund (₹55,000 back for General; ₹10,000 back for SC/ST/PwD — ₹5,000 cancellation charge is deducted). After the Round 2 withdrawal deadline, fees from Rounds 3–5 are non-refundable.
            </p>
          </InfoBox>
        </Section>

        <Section number="11" title="Exam day — what to bring and expect">
          <h3 className="text-xl font-black text-neutral-dark mt-2 mb-3">Reporting and entry</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
            Reporting from 7:00 AM. Exam starts at 9:00 AM sharp — no entry after that. Bring a printed copy of your admit card and an original photo ID. Biometric data (thumb impression, photo) is captured on exam day and may be re-verified at admission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-6">
              <h4 className="font-black text-neutral-dark mb-4">What you can bring</h4>
              <ul className="space-y-3">
                {[
                  "Pencils (black shades only) in a transparent packet",
                  "A writing board of A4 size (optional but useful for Part B)",
                  "Admit card (printed)",
                  "Original photo ID",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium items-start">
                    <span className="text-emerald-600 font-black shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-2xl p-6">
              <h4 className="font-black text-neutral-dark mb-4">What you cannot bring</h4>
              <ul className="space-y-3">
                {[
                  "Mobile phones, smartwatches, or any electronic device",
                  "Sketch pens, colour pencils, poster colours, or any colouring material",
                  "Geometry boxes, log books, calculators",
                  "Any study material of any kind",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium items-start">
                    <span className="text-red-500 font-black shrink-0 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-black text-neutral-dark mt-8 mb-3">Part A logistics</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
            Computer-based. The exam interface is the same system IIT Bombay uses for other CBT exams — practise it beforehand using the official sample interface at uceed.iitb.ac.in. Technical issues are handled by invigilators and time lost to technical problems is automatically compensated. You cannot leave during the exam.
          </p>

          <h3 className="text-xl font-black text-neutral-dark mt-6 mb-3">Part B logistics</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
            The questions appear on your computer screen. You draw and write answers in the physical answer booklet provided by the invigilator. Booklets are collected at the end of the examination. Do not leave early — you must remain in the hall for the full three hours.
          </p>

          <InfoBox type="info">
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
              <strong className="font-black">Exam cities (27 in 2026):</strong> Ahmedabad, Bengaluru, Bhopal, Bhubaneswar, Chandigarh/Mohali, Chennai, Coimbatore, Dehradun, Delhi, Ernakulam, Guwahati, Hubballi, Hyderabad, Jaipur, Kolkata, Kozhikode, Lucknow, Mumbai, Nagpur, Noida, Panaji, Patna, Pune, Raipur, Thiruvananthapuram, Thrissur, Visakhapatnam.
            </p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Pick three cities in preference order at registration. City change requests are not accepted after registration is complete.
            </p>
          </InfoBox>
        </Section>
      </div>
    </main>
  );
}
