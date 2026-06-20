import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import JsonLd from "@/components/JsonLd";
import { pageMeta, guideJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "JEE Main Paper 3 — Is It For You? (Suitability Check) | WhatNow",
  description: "Evaluate your planning aptitude, interest in city development and policy, and decide if B.Plan is the right fit.",
  path: "/exams/jee-paper3/is-it-for-you",
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
          <pattern id="jee-is-it-for-you-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0d9488" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jee-is-it-for-you-grid)" />
      </svg>
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-[20%] -left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[60px]" />
      
      <svg className="absolute right-0 bottom-0 w-full h-full min-w-[1200px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="jee-ify-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="jee-ify-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C320,280 640,60 960,180 C1280,300 1376,140 1440,80 L1440,320 L0,320 Z" fill="url(#jee-ify-wave-grad-1)" />
        <path d="M0,240 C480,120 960,320 1440,160 L1440,320 L0,320 Z" fill="url(#jee-ify-wave-grad-2)" />
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

export default function JeePaper3IsItForYouPage() {
  return (
    <main className="flex-grow flex flex-col bg-slate-50 dark:bg-[#0B111C] min-h-screen">
      <JsonLd
        data={guideJsonLd({
          title: "JEE Main Paper 3 — Is It For You? (Suitability Check) | WhatNow",
          description: "Evaluate your planning aptitude, interest in city development and policy, and decide if B.Plan is the right fit.",
          path: "/exams/jee-paper3/is-it-for-you",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Exams", path: "/exams" },
            { name: "JEE Paper 3", path: "/exams/jee-paper3" },
            { name: "Is It For You", path: "/exams/jee-paper3/is-it-for-you" },
          ],
        })}
      />
      <PageHeader
        title="JEE Paper 3 — Is It For You?"
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
            <span className="text-teal-600">Is It For You?</span>
          </>
        }
      />

      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 pb-24">
        <Section number="01" title="Honest Comparison: Planning vs. Architecture vs. Civil Engineering">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Many students mistake B.Planning for a sub-branch of Architecture or Civil Engineering. In reality, they are fundamentally different in scope, tools, and scale.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-2xl my-8 bg-white dark:bg-slate-800/50">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-slate-50 dark:bg-slate-800/40">
                <tr>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Feature</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-teal-700 dark:text-teal-300 border-b border-slate-200 dark:border-slate-700">Bachelor of Planning (B.Plan)</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Bachelor of Architecture (B.Arch)</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Civil Engineering (B.Tech)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Primary Scale</td>
                  <td className="p-4 text-teal-700 dark:text-teal-300 font-bold border-b border-slate-100 dark:border-slate-800">Macro (City, Region, Transit corridors)</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-semibold">Micro (Individual buildings, sites)</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-semibold">Structural (Materials, soil mechanics, load)</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Core Focus</td>
                  <td className="p-4 text-teal-700 dark:text-teal-300 font-bold border-b border-slate-100 dark:border-slate-800">Policy, zoning laws, traffic patterns, sustainability</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-semibold">Aesthetics, spatial design, material detailing</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-semibold">Construction feasibility, structural safety</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Key Software Tools</td>
                  <td className="p-4 text-teal-700 dark:text-teal-300 font-bold border-b border-slate-100 dark:border-slate-800">ArcGIS, QGIS, AutoCAD Map 3D, SPSS (statistics)</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-semibold">Revit, Rhino, SketchUp, Photoshop</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 font-semibold">STAAD.Pro, ETABS, MS Project, Primavera</td>
                </tr>
                <tr>
                  <td className="p-4 font-black text-slate-700 dark:text-slate-300">Drawing Requirement</td>
                  <td className="p-4 text-teal-700 dark:text-teal-300 font-bold">None. No drawing test is conducted for B.Plan admissions.</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-semibold">High. Freehand sketching and scale drawing are core.</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-semibold">None. Focused strictly on physics and mathematics.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="02" title="The Skill Assessment Check">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            Answer the following questions to see if you have the mental makeup of an urban planner:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Are you fascinated by how cities operate? (e.g., how metro routing is decided, why certain zones are residential, and how water supply grids are planned).
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Do you enjoy analyzing data, demographics, and map layers over sketching artistic building elevations?
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Are you interested in public policy, climate change, and sustainability guidelines?
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
              <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Do you want a career that involves interacting with government bodies, environmental agencies, and community stakeholders?
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium mt-6 leading-relaxed">
            If you answered **Yes** to 3 or more of these, B.Planning is an excellent fit. You will enjoy the analytical, data-centric, and socio-economic aspects of the field.
          </p>
        </Section>

        <Section number="03" title="Professional Realities & Growth Path">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            What does life after B.Planning look like?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-3">1. Typical Work Environment</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                Planners work in offices analyzing geographic spatial layers (GIS) and writing development regulations, interspersed with field surveys to study traffic volumes, housing conditions, or pollution indices.
              </p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 bg-white dark:bg-slate-800/50">
              <h4 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-3">2. Career Evolution</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                Starting as a GIS Analyst or Associate Planner, you progress to Lead Urban Planner or Infrastructure Policy Adviser. Many graduates pursue Master's (M.Plan) programs in Environmental Planning, Transport Planning, or Housing from SPAs or European institutes to lead multi-million dollar projects.
              </p>
            </div>
          </div>
          <InfoBox type="info">
            <h4 className="font-black text-teal-700 mb-2">Corporate placements vs. Government pathways:</h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Private consultancies like **JLL, Cushman & Wakefield, Knight Frank, L&T Infrastructure, and PwC** actively recruit B.Plan graduates for real estate advisory and city transit proposals. Government options include state development authorities (e.g., DDA, CIDCO) and municipal corporations, which require clearing state-level Town Planner recruitment exams.
            </p>
          </InfoBox>
        </Section>
      </div>
    </main>
  );
}

