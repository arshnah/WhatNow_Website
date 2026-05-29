import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UCEED — What It Is | WhatNow",
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

const InfoBox = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning";
}) => (
  <div
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-indigo-50 border-primary" : "bg-orange-50 border-accent"}`}
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
    className={`border rounded-2xl p-8 relative overflow-hidden ${primary ? "bg-primary text-white border-primary" : "bg-slate-50 border-slate-200 text-neutral-dark"}`}
  >
    <div
      className={`text-sm font-bold uppercase tracking-wider mb-8 ${primary ? "text-indigo-200" : "text-slate-500"}`}
    >
      {label}
    </div>
    <div className="text-2xl font-black mb-2">{title}</div>
    <div className={primary ? "text-white" : "text-primary"}>{value}</div>
  </div>
);

export default function UceedWhatItIsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 min-h-screen">
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
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
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
            <p className="text-slate-800 leading-relaxed font-medium">
              <strong className="font-black text-accent">
                Crucial difference from JEE:
              </strong>{" "}
              You do not need to be a Science student. UCEED is open to all
              streams — Science, Commerce, and Arts.
            </p>
          </InfoBox>
        </Section>

        <Section number="02" title="Eligibility">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Three criteria. You must meet all three to write the exam.
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-black shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  Age limit
                </h3>
                <p className="text-slate-600 font-medium">
                  For General, EWS, and OBC-NCL candidates: born on or after
                  October 1, 2001. For SC, ST, and PwD candidates: born on or
                  after October 1, 1996.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-black shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  Number of attempts
                </h3>
                <p className="text-slate-600 font-medium">
                  Maximum of two attempts. They must be in consecutive years.
                  You can write it in your Class XII year, and the year
                  immediately after. That&apos;s it.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-black shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  Qualifying exam
                </h3>
                <p className="text-slate-600 font-medium">
                  You must have passed Class XII (or equivalent) in 2025, or be
                  appearing for it in 2026. All streams (Science, Commerce, Arts
                  & Humanities) are eligible.
                </p>
              </div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="font-black mb-2">The 70% Board Requirement</h4>
            <p className="text-slate-700 font-medium">
              There is no minimum aggregate for writing the UCEED exam itself.
              However, IITs internally mandate a minimum of{" "}
              <strong>70% in Class XII</strong> for admission (65% for SC/ST/PwD
              candidates). A strong UCEED rank will not override this board
              requirement.
            </p>
          </InfoBox>
        </Section>

        <Section number="03" title="Exam Structure">
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
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
            <p className="text-slate-700 font-medium">Part B is evaluated manually by two independent evaluators. If their scores differ by more than <strong>20 marks</strong>, a third evaluator is brought in. Do not use generic shading techniques; originality is aggressively rewarded.</p>
          </InfoBox>
        </Section>

        <Section number="04" title="Marking Scheme">
          <div className="overflow-x-auto border border-slate-200 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">Question Type</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">Correct</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">Partial</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">Incorrect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 border-b border-slate-100 font-black">NAT (Numerical)</td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 font-black">+4</td>
                  <td className="p-4 text-slate-400 border-b border-slate-100 font-medium">None</td>
                  <td className="p-4 text-slate-400 border-b border-slate-100 font-medium">0</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 border-b border-slate-100 font-black">MSQ (Multiple Select)</td>
                  <td className="p-4 text-emerald-600 border-b border-slate-100 font-black">+4</td>
                  <td className="p-4 text-primary border-b border-slate-100 font-black">+3 / +2 / +1</td>
                  <td className="p-4 text-red-500 border-b border-slate-100 font-black">-1</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 font-black">MCQ (Multiple Choice)</td>
                  <td className="p-4 text-emerald-600 font-black">+3</td>
                  <td className="p-4 text-slate-400 font-medium">None</td>
                  <td className="p-4 text-red-500 font-black">-0.71</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </main>
  );
}
