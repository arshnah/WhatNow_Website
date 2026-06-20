import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "NIFT Entrance — What It Is | WhatNow",
  description: "Learn about the NIFT Entrance Exam structure, CAT and GAT papers, eligibility, campuses, and selection process.",
  path: "/exams/nift/what-it-is",
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
          <pattern id="nift-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-what-it-is-grid)" />
      </svg>
      
      {/* Layered glowing blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />

      {/* Smooth vector paths */}
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nift-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nift-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#nift-wii-wave-grad-2)" />
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.1" />
        <path d="M0,240 C480,120 960,320 1440,160" stroke="#ff5a1f" strokeWidth="1.5" strokeOpacity="0.05" strokeDasharray="6 6" />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10">
      <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-8">
        {breadcrumbs}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-6 text-neutral-dark dark:text-slate-100">
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
      <div className="text-pink-600 font-black text-sm uppercase tracking-widest mb-4">
        Section {number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-neutral-dark dark:text-slate-100 tracking-tight">
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
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-pink-50 dark:bg-pink-950/30 border-pink-500" : "bg-orange-50 dark:bg-orange-950/30 border-accent"}`}
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
    className={`border rounded-2xl p-8 relative overflow-hidden ${primary ? "bg-pink-600 text-white border-pink-600" : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-neutral-dark dark:text-slate-100"}`}
  >
    <div
      className={`text-sm font-bold uppercase tracking-wider mb-8 ${primary ? "text-pink-200" : "text-slate-500 dark:text-slate-400"}`}
    >
      {label}
    </div>
    <div className="text-2xl font-black mb-2">{title}</div>
    <div className={primary ? "text-white" : "text-pink-600"}>{value}</div>
  </div>
);

export default function NiftWhatItIsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "NIFT Entrance — What It Is | WhatNow",
          description: "Learn about the NIFT Entrance Exam structure, CAT and GAT papers, eligibility, campuses, and selection process.",
          path: "/exams/nift/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "What It Is", path: "/exams/nift/what-it-is" },
          ],
        })}
      />
      <PageHeader
        title="NIFT Entrance — What It Is"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-pink-600 transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/nift" className="hover:text-pink-600 transition-colors">
              NIFT
            </Link>{" "}
            <span>›</span>
            <span className="text-pink-600">What It Is</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="The basics">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            The NIFT (National Institute of Fashion Technology) Entrance Exam is India's premier gateway for fashion and design education. Conducted annually in February, it opens doors to Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.FTech) programs across 16 campuses nationwide.
          </p>
          <BentoGrid>
            <BentoCard
              label="Exam Format"
              title="Stage 1: CAT + GAT"
              value="Creative Ability Test (Pen/Paper) + General Ability Test (CBT)"
              primary={true}
            />
            <BentoCard
              label="Total Seats"
              title="~2,800 Seats (B.Des)"
              value="Across 16 NIFT campuses"
            />
          </BentoGrid>
          <InfoBox type="warning">
            <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="font-black text-accent">
                Key Distinction:
              </strong>{" "}
              Like UCEED, the B.Des program is open to students from all streams (Arts, Science, Commerce). The B.FTech program, however, specifically requires Physics, Chemistry, and Mathematics in Class XII.
            </p>
          </InfoBox>
        </Section>

        <Section number="02" title="Eligibility">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Candidates must satisfy the following criteria to apply:
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-pink-600 font-black shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark dark:text-slate-100 mb-2">
                  Age limit
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Maximum age must be 24 years as of August 1st of the admission year. Upper age limit is relaxed by 5 years for SC, ST, and PwD candidates.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-pink-600 font-black shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-dark dark:text-slate-100 mb-2">
                  Academic qualifications
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Must have passed Class XII or equivalent. Candidates appearing for Class XII in the admission year are also eligible to sit for the exam.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section number="03" title="Exam Structure">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Stage 1 comprises two tests on the same day. Both tests are mandatory for design aspirants.
          </p>

          <BentoGrid>
            <BentoCard
              label="CAT (Creative Ability Test)"
              title="3 Hours / 100 Marks"
              value="Tests drawing skills, observation, design concept originality, and color sensibilities on paper."
              primary={true}
            />
            <BentoCard
              label="GAT (General Ability Test)"
              title="2 Hours / 100 Marks"
              value="Tests English comprehension, quantitative abilities, analytical reasoning, and general knowledge."
            />
          </BentoGrid>
        </Section>

        <Section number="04" title="Weightage & Selection">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            For Bachelor of Design (B.Des), admission relies on a three-stage weightage scheme. Shortlisted candidates from Stage 1 are invited for Stage 2 (Situation Test).
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl my-8">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white dark:bg-slate-800/50">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Component</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Weightage (B.Des)</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Format</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">Stage 1: CAT</td>
                  <td className="p-4 text-pink-600 border-b border-slate-100 dark:border-slate-800 font-black">50%</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Paper-based drawing test</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800 font-black">Stage 1: GAT</td>
                  <td className="p-4 text-pink-600 border-b border-slate-100 dark:border-slate-800 font-black">30%</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-medium">Computer-based multiple-choice test</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 dark:text-slate-300 font-black">Stage 2: Situation Test</td>
                  <td className="p-4 text-pink-600 font-black">20%</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400 font-medium">Hands-on material model making in NIFT studios</td>
                </tr>
              </tbody>
            </table>
          </div>

          <InfoBox type="info">
            <h4 className="font-black mb-2">What is the Situation Test?</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Candidates are given a set of raw materials (clay, wire, board, paper, etc.) and must construct a 3D model addressing a specific prompt under a strict 2-hour limit. They also write a short explanation of the concept. This test evaluates practical material execution and design thinking under pressure.
            </p>
          </InfoBox>
        </Section>
      </div>
    </main>
  );
}
