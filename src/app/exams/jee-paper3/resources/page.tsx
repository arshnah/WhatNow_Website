import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Study Material & Prep Guides | WhatNow",
  description: "Free preparation strategies for B.Planning entrance, syllabus guides, general geography maps, and previous mock tests.",
  path: "/exams/jee-paper3/resources",
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
          <pattern id="jee-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-resources-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-res-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-res-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-res-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-res-wave-grad-2)" />
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

const InfoBox = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning";
}) => (
  <div
    className={`p-6 md:p-8 my-8 rounded-2xl border-l-4 ${type === "info" ? "bg-teal-50 dark:bg-teal-950/30 border-teal-500" : "bg-orange-50 dark:bg-orange-950/30 border-accent"}`}
  >
    {children}
  </div>
);

export default function JeePaper3ResourcesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — Study Material & Prep Guides | WhatNow",
          description: "Free preparation strategies for B.Planning entrance, syllabus guides, general geography maps, and previous mock tests.",
          path: "/exams/jee-paper3/resources",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "Resources", path: "/exams/jee-paper3/resources" },
          ],
        })}
      />
      <PageHeader
        title="JEE Paper 3 — Resources & Study Plan"
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
            <span className="text-teal-600">Resources</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Recommended Books & Preparation Guides">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Unlike B.Tech preparation which demands heavy coaching, JEE Main Paper 3 (B.Planning) can be cracked with self-study. The following resources are highly recommended by SPA graduates:
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm">
              <div className="text-teal-600">
                <Icon icon="solar:book-bookmark-bold-duotone" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg">Self-Study Guide for B.Arch & B.Planning (PK Mishra / Arihant Publications)</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-1 text-sm font-semibold">
                  The primary reference guide covering both general aptitude and mock planning questions. Includes past papers with detailed explanations of design and planning logic.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm">
              <div className="text-teal-600">
                <Icon icon="solar:map-bold-duotone" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg">Class XI & XII Geography NCERTs (Human Geography & Indian Economy)</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-1 text-sm font-semibold">
                  Essential for Part III. Covers urban settlements, transportation patterns, demographics, rural-urban migration models, and resources in India. Almost 40% of Part III planning questions are directly derived from these textbooks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm">
              <div className="text-teal-600">
                <Icon icon="solar:document-text-bold-duotone" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg">NTA Past Year Question Papers (2020 - 2025)</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-1 text-sm font-semibold">
                  Available on the official NTA website. Practicing past papers is the single most effective way to understand Part III questions since the planning syllabus is highly objective and repeats specific themes.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section number="02" title="Section-wise Self-Study Strategy">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-teal-800 mb-2">Part I: Mathematics (100 Marks)</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                Since Math is highly competitive, prioritize topics that require less calculation time but have high accuracy:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                <li>**Matrices & Determinants**: Scoring and relatively easy to practice.</li>
                <li>**Mathematical Reasoning & Statistics**: Usually yields 2 direct questions that are highly scoring.</li>
                <li>**Vector Algebra & 3D Geometry**: Highly visual and has consistent question formats every year.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
              <h3 className="text-xl font-black text-teal-800 mb-2">Part II: Aptitude (200 Marks)</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                This is the highest-scoring section of the exam. Do not skip it:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                <li>Practice **3D object visualization** (identifying top, front, and side views of structures) using online puzzle sets and PK Mishra guides.</li>
                <li>Memorize **famous monuments, major dams, national parks, and metropolitan plans in India**.</li>
                <li>Create a cheatsheet of famous architects/urban planners (e.g., Le Corbusier for Chandigarh, Edwin Lutyens for Delhi, Charles Correa) and their landmark projects.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
              <h3 className="text-xl font-black text-teal-800 mb-2">Part III: Planning (100 Marks)</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                Score 80+ in this section with targeted general awareness:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm font-semibold">
                <li>Read summaries of MoHUA (Ministry of Housing and Urban Affairs) guidelines on **Smart Cities** and **AMRUT**.</li>
                <li>Study basic concepts of **Green Architecture** (LEED, GRIHA rating parameters, solar passive design).</li>
                <li>Understand maps: Learn how to read RF scales (e.g., converting 1:50,000 scale to ground distance) and standard map legend symbols.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section number="03" title="12-Week Prep Roadmap">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            A balanced preparation timetable alongside regular school or board exams:
          </p>
          <div className="relative border-l border-teal-200 dark:border-teal-900/40 ml-4 space-y-8">
            <div className="relative pl-6">
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-teal-500 rounded-full" />
              <h4 className="font-black text-slate-800 dark:text-slate-100">Weeks 1 - 4: Core Concepts & Aptitude</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mt-1">
                Complete NCERT geography readings. Start practicing 10-15 3D-visualization questions daily. Review Class XII Math chapters like Matrices and Vectors.
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-teal-500 rounded-full" />
              <h4 className="font-black text-slate-800 dark:text-slate-100">Weeks 5 - 8: Planning & Architecture GK</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mt-1">
                Make notes on Indian development schemes and environmental science basics. Work on scale conversion questions. Solve math sectional tests.
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-teal-500 rounded-full" />
              <h4 className="font-black text-slate-800 dark:text-slate-100">Weeks 9 - 12: Mock Tests & Time Management</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mt-1">
                Solve full-length JEE Paper 3 papers under a 3-hour timer. Focus on speed in Math and precision in Planning MCQs to minimize negative marks.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

