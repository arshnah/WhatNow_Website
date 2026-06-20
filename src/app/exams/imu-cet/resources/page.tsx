import React from "react";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "IMU CET — Resources & Prep Materials | WhatNow",
  description: "The study materials worth your time for IMU CET: recommended books, previous-year papers, mock tests and free online resources, plus what to skip.",
  path: "/exams/imu-cet/resources",
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
          <pattern id="imucet-resources-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ea580c" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#imucet-resources-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="imucet-wii-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imucet-wii-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#imucet-wii-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#imucet-wii-wave-grad-2)" />
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

export default function ImuCetResourcesPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <PageHeader
        title="IMU CET — Prep Materials"
        breadcrumbs={
          <>
            <Link href="/exams" className="hover:text-orange-600 transition-colors">
              Exams
            </Link>{" "}
            <span>›</span>
            <Link href="/exams/imu-cet" className="hover:text-orange-600 transition-colors">
              IMU CET
            </Link>{" "}
            <span>›</span>
            <span className="text-orange-600">Resources & Prep</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Core Academic Preparation (Class 11 & 12 NCERT)">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Since IMU CET is heavily based on state board and CBSE syllabi, candidates do not need separate coaching modules. Master these foundational elements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">Maths & Physics</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">NCERT Class 11 & 12</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                Re-solve textbook examples. Focus on Mechanics, Electromagnetism, Optics, Trigonometry, Calculus, and Coordinate Geometry.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">Maritime Reference</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Subodh Kumar Prep Guide</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                The most widely read guide for IMU CET. Contains compiled GAT papers, sample maritime aptitude questions, and general science questions.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-2">General English</span>
              <h4 className="font-black text-lg text-neutral-dark mb-2">Wren & Martin Grammar</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                Practice basic grammar exercises, active/passive voice conversions, vocabulary synonyms, and spelling checks tested in the GAT English section.
              </p>
            </div>
          </div>
        </Section>

        <Section number="02" title="Shipping Company Sponsorship Interview Preparation">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Securing a sponsorship requires clearing the shipping company's **own online test and interview**.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 space-y-4">
            <h4 className="font-black text-xl text-neutral-dark">Interview Key Areas:</h4>
            <p className="text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
              Prepare for basic physics/machinery questions (e.g. how a 4-stroke engine works, buoyancy principles, gears, and pulley systems). The interviewer will evaluate your communication skills, physical discipline, and suitability for long isolation onboard cargo ships. Show confidence, clear speech, and solid posture.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
