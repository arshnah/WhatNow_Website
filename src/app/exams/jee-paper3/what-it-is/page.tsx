import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Exam Pattern & Syllabus Breakdown | WhatNow",
  description: "Detailed breakdown of the B.Planning entrance exam syllabus: Mathematics, general aptitude, and planning-specific topics.",
  path: "/exams/jee-paper3/what-it-is",
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
          <pattern id="jee-what-it-is-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-what-it-is-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-wii-wave-grad-2)" />
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

export default function JeePaper3WhatItIsPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — Exam Pattern & Syllabus Breakdown | WhatNow",
          description: "Detailed breakdown of the B.Planning entrance exam syllabus: Mathematics, general aptitude, and planning-specific topics.",
          path: "/exams/jee-paper3/what-it-is",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "What It Is", path: "/exams/jee-paper3/what-it-is" },
          ],
        })}
      />
      <PageHeader
        title="JEE Paper 3 — Exam Structure & Syllabus"
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
            <span className="text-teal-600">What It Is</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Exam Structure & Question Distribution">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            JEE Main Paper 3 is a 3-hour Computer-Based Test (CBT) consisting of 105 questions, totaling 400 marks. The exam structure evaluates both scientific analytical thinking and specialized creative skills suited for urban planning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">Part I</span>
              <h3 className="text-xl font-black text-teal-600 mt-1 mb-3">Mathematics</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                30 Questions (20 MCQs + 10 Numerical Value questions, out of which 5 are to be attempted).
              </p>
              <div className="text-lg font-black text-slate-700 dark:text-slate-300 mt-4">100 Marks</div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">Part II</span>
              <h3 className="text-xl font-black text-teal-600 mt-1 mb-3">Aptitude Test</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                50 Questions (MCQs only). Tests 2D/3D visualization, mental capability, spatial reasoning, and architectural/planning history.
              </p>
              <div className="text-lg font-black text-slate-700 dark:text-slate-300 mt-4">200 Marks</div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">Part III</span>
              <h3 className="text-xl font-black text-teal-600 mt-1 mb-3">Planning Questions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                25 Questions (MCQs only). Specialized questions based on urban development, environmental science, and policy awareness.
              </p>
              <div className="text-lg font-black text-slate-700 dark:text-slate-300 mt-4">100 Marks</div>
            </div>
          </div>

          <InfoBox type="info">
            <h4 className="font-black text-teal-700 mb-2">Marking Scheme:</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Every correct answer yields <span className="font-bold text-teal-700">+4 marks</span>. Correct numerical value questions also get +4. Incorrect answers carry a penalty of <span className="font-bold text-red-600">-1 mark</span> (both for MCQs and Numerical Value questions). Unattempted questions receive 0.
            </p>
          </InfoBox>
        </Section>

        <Section number="02" title="Part I: Mathematics Syllabus">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            This section is identical to the Mathematics section of JEE Main Paper 1 (B.Tech) and Paper 2 (B.Arch). The level of difficulty is high, requiring strong conceptual clarity in Class XI and XII mathematics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <div>
              <h4 className="font-black text-slate-800 dark:text-slate-100 mb-2">High Weightage Topics</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 font-semibold text-sm">
                <li>Coordinate Geometry (Straight Lines, Circles, Conics)</li>
                <li>Calculus (Limits, Continuity, Derivatives, Definite Integrals)</li>
                <li>Vectors & Three-Dimensional Geometry</li>
                <li>Probability & Statistics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-800 dark:text-slate-100 mb-2">Algebra & Trigonometry</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 font-semibold text-sm">
                <li>Matrices and Determinants</li>
                <li>Complex Numbers & Quadratic Equations</li>
                <li>Sequences and Series (AP, GP, HP)</li>
                <li>Trigonometric Equations and Identities</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section number="03" title="Part II: General Aptitude Syllabus">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            The Aptitude section tests visualization, design thinking, analytical abilities, and general knowledge.
          </p>
          <div className="space-y-6">
            <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-2">1. Visual & Spatial Aptitude</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold text-sm">
                Visualizing 3D views of objects from 2D orthographic projections. Counting surfaces, vertices, and edges of complex geometric models. Rotation, unfolding, and mirror-imaging of block designs.
              </p>
            </div>
            <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-2">2. Analytical Reasoning & Mental Ability</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold text-sm">
                Pattern recognition, series completions, logical deductions, blood relation puzzles, coding-decoding, and Venn diagrams.
              </p>
            </div>
            <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-2">3. Architecture, Cities & History GK</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold text-sm">
                Identifying famous national and international monuments, landmarks, and city shapes. Basic knowledge of architectural history, famous architects/planners, materials, and structural elements.
              </p>
            </div>
          </div>
        </Section>

        <Section number="04" title="Part III: Planning-Based Questions (Specialized)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            This section makes Paper 3 unique. It tests awareness of social, economic, and physical aspects of communities, cities, and national growth.
          </p>
          <div className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <h4 className="font-black text-teal-800 text-lg mb-2">Government Schemes & Programs</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                Deep questions about Indian government flagship missions: **Smart Cities Mission**, **AMRUT** (Atal Mission for Rejuvenation and Urban Transformation), **HRIDAY** (Heritage City Development and Augmentation Yojana), **PMAY** (Pradhan Mantri Awas Yojana), and **Swachh Bharat Abhiyan**. Understand their launch years, target populations, and primary objectives.
              </p>
            </div>
            <div>
              <h4 className="font-black text-teal-800 text-lg mb-2">Environmental Planning & Sustainability</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                Concepts of Green Buildings (GRIHA, LEED ratings), global warming, carbon footprint, solid waste management, water harvesting techniques, renewable energy sources, and sustainable development goals (SDGs).
              </p>
            </div>
            <div>
              <h4 className="font-black text-teal-800 text-lg mb-2">Urban Geography & Scale Mapping</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                Reading maps, understanding topological signs, interpreting bar diagrams, reading scales (RF - Representative Fraction calculations), and basic demographic data metrics (population density, sex ratio, decadal growth rates).
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

