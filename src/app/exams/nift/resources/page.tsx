import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "NIFT Entrance — Preparation Guides & Study Material | WhatNow",
  description: "Detailed syllabus breakdowns for CAT & GAT, Situation Test prep kits, recommended prep books, and mock strategies.",
  path: "/exams/nift/resources",
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
          <pattern id="nift-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nift-resources-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-[#ff5a1f]/5 rounded-full blur-[60px]" />
      
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

export default function NiftResourcesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "NIFT Entrance — Preparation Guides & Study Material | WhatNow",
          description: "Detailed syllabus breakdowns for CAT & GAT, Situation Test prep kits, recommended prep books, and mock strategies.",
          path: "/exams/nift/resources",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "NIFT", path: "/exams/nift" },
            { name: "Resources", path: "/exams/nift/resources" },
          ],
        })}
      />
      <PageHeader
        title="NIFT — Prep Roadmap & Resources"
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
            <span className="text-pink-600">Resources & Prep</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Syllabus Breakdown: CAT & GAT">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            The NIFT written entrance consists of two papers conducted on the same day: the **Creative Ability Test (CAT)** (50% weightage) and the **General Ability Test (GAT)** (30% weightage).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-pink-600 block mb-2">CAT (Creative Ability Test)</span>
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">Drawing & Visualisation</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                Tests design aptitude, color theory, product styling, and spatial illustration. Typical questions ask you to design a kitchen utility item, illustrate a festival scene from a bird's-eye view, or draw a poster representing environmental changes.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-pink-600 block mb-2">GAT (General Ability Test)</span>
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">General Aptitude</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                Objective MCQs testing English Comprehension, Quantitative Ability (standard Class 10 math), Analytical Reasoning, and General Knowledge (with a heavy focus on fashion industry news, brand acquisitions, and textile history).
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" title="Recommended Guides & Material Kits">
          <div className="space-y-6">
            <div className="border-l-4 border-pink-500/80 pl-6">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">Primary Reference Books</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                Use the **Arihant NIFT Entrance Exam Guide** or **Dharmendra Mittal's Prep Book** to study past question patterns and complete standard GAT verbal/non-verbal reasoning chapters.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500/80 pl-6">
              <h4 className="font-black text-lg text-neutral-dark dark:text-slate-100 mb-2">Situation Test Material Kit (20% Weightage)</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-3">
                If you qualify the written round, you sit for the Situation Test, which involves building 3D models using a limited set of materials. Practice at home by creating models of kiosks, trophies, and bags using:
              </p>
              <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 font-semibold space-y-1">
                <li>Cardboard, mount board, and colorful sheets.</li>
                <li>Copper wire, cotton wool, matchsticks, and thermocol.</li>
                <li>Clay, transparency sheets, thread, and standard adhesive.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section number="03" title="Self-Prep Roadmap">
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-black text-neutral-dark dark:text-slate-100 mb-4">Timely Preparation Flow</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-4 text-sm">
              Start by building basic sketching skills (proportion, light & shade, human anatomy) 4-6 months before the exam. Solve past 10 years of NIFT CAT and GAT papers under strict exam timelines. Keep tracking current developments in national and international fashion houses.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
