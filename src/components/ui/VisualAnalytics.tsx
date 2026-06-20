"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface CareerData {
  jobs: { year: number; openings: number }[];
  salaries: { level: string; levelHi: string; amount: string; numericAmount: number }[];
}

interface ExamData {
  trends: { year: number; applicants: number; seats: number }[];
  seatFunnel: { applicants: number; seats: number };
}

interface VisualAnalyticsProps {
  type: 'career' | 'exam';
  data: CareerData | ExamData;
  colorTheme?: 'indigo' | 'pink' | 'orange' | 'emerald' | 'teal';
}

const themeClasses = {
  indigo: {
    primary: 'stroke-indigo-500 fill-indigo-500 bg-indigo-500',
    primaryLight: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    accent: 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-700',
    text: 'text-indigo-600',
    fillGradStart: '#818cf8',
    fillGradStop: '#e0e7ff',
  },
  pink: {
    primary: 'stroke-pink-500 fill-pink-500 bg-pink-500',
    primaryLight: 'bg-pink-50 text-pink-600 border-pink-100',
    accent: 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-700',
    text: 'text-pink-600',
    fillGradStart: '#f472b6',
    fillGradStop: '#fce7f3',
  },
  orange: {
    primary: 'stroke-orange-500 fill-orange-500 bg-orange-500',
    primaryLight: 'bg-orange-50 text-orange-600 border-orange-100',
    accent: 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-700',
    text: 'text-orange-600',
    fillGradStart: '#fb923c',
    fillGradStop: '#ffedd5',
  },
  emerald: {
    primary: 'stroke-emerald-500 fill-emerald-500 bg-emerald-500',
    primaryLight: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    accent: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700',
    text: 'text-emerald-600',
    fillGradStart: '#34d399',
    fillGradStop: '#ecfdf5',
  },
  teal: {
    primary: 'stroke-teal-500 fill-teal-500 bg-teal-500',
    primaryLight: 'bg-teal-50 text-teal-600 border-teal-100',
    accent: 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-700',
    text: 'text-teal-600',
    fillGradStart: '#2dd4bf',
    fillGradStop: '#f0fdfa',
  }
};

const translations = {
  en: {
    competitionTab: "Competition Trend",
    funnelTab: "Seat Funnel",
    jobTab: "Job Opportunities",
    salaryTab: "Salary Arc",
    applicants: "Applicants",
    seats: "Seats",
    successRate: "Success Rate",
    annualOpenings: "Annual Openings",
    experienceLevel: "Experience Level",
    salaryLabel: "Average Salary",
    yearLabel: "Year",
    levelLabel: "Level",
    acceptanceRate: "Acceptance Rate",
    hiringDemand: "Hiring Demand",
    perMonth: "(Per Month)",
  },
  hi: {
    competitionTab: "प्रतिस्पर्धा प्रवृत्ति",
    funnelTab: "सीट फ़नल",
    jobTab: "नौकरी के अवसर",
    salaryTab: "वेतन आर्क",
    applicants: "आवेदक",
    seats: "सीटें",
    successRate: "सफलता दर",
    annualOpenings: "वार्षिक रिक्तियां",
    experienceLevel: "अनुभव स्तर",
    salaryLabel: "औसत वेतन",
    yearLabel: "वर्ष",
    levelLabel: "स्तर",
    acceptanceRate: "स्वीकृति दर",
    hiringDemand: "भर्ती मांग",
    perMonth: "(प्रति माह)",
  }
};

export default function VisualAnalytics({ type, data, colorTheme = 'indigo' }: VisualAnalyticsProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const theme = themeClasses[colorTheme];

  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Layout calculations
  const width = 500;
  const height = 240;
  const paddingLeft = 55;
  const paddingRight = 25;
  const paddingTop = 25;
  const paddingBottom = 40;
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  if (type === 'exam') {
    const examData = data as ExamData;

    if (activeTab === 'tab1') {
      // Line chart: Applicants and Seats over time
      const maxVal = Math.max(...examData.trends.map(d => d.applicants));
      
      const getCoords = (val: number, idx: number, total: number) => {
        const x = paddingLeft + (idx / (total - 1)) * chartWidth;
        const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
        return { x, y };
      };

      const pointsApplicants = examData.trends.map((d, i) => getCoords(d.applicants, i, examData.trends.length));
      const pointsSeats = examData.trends.map((d, i) => getCoords(d.seats, i, examData.trends.length));

      const pathD = (points: { x: number; y: number }[]) => 
        points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '');

      const areaD = (points: { x: number; y: number }[]) => {
        if (points.length === 0) return '';
        const startX = points[0].x;
        const endX = points[points.length - 1].x;
        const baseLineY = paddingTop + chartHeight;
        return `${pathD(points)} L ${endX} ${baseLineY} L ${startX} ${baseLineY} Z`;
      };

      return (
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">
              {t.competitionTab}
            </h4>
            <div className="flex gap-2 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700 p-0.5 rounded-xl">
              <button
                onClick={() => { setActiveTab('tab1'); setHoveredIdx(null); }}
                className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white dark:bg-slate-700 shadow-xs`}
              >
                {t.competitionTab}
              </button>
              <button
                onClick={() => { setActiveTab('tab2'); setHoveredIdx(null); }}
                className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555 dark:text-slate-400"
              >
                {t.funnelTab}
              </button>
            </div>
          </div>

          {/* SVG line chart */}
          <div className="relative flex-grow">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none">
              <defs>
                <linearGradient id={`grad-applicants-${colorTheme}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={theme.fillGradStart} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={theme.fillGradStop} stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((r, i) => {
                const y = paddingTop + r * chartHeight;
                return (
                  <line 
                    key={i} 
                    x1={paddingLeft} 
                    y1={y} 
                    x2={width - paddingRight} 
                    y2={y} 
                    stroke="#e2e8f0" 
                    strokeWidth="1" 
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Grid labels Y */}
              {[0, 0.25, 0.5, 0.75, 1].map((r, i) => {
                const val = Math.round(((1 - r) * maxVal) / 1000);
                const y = paddingTop + r * chartHeight;
                return (
                  <text 
                    key={i} 
                    x={paddingLeft - 8} 
                    y={y + 4} 
                    textAnchor="end" 
                    className="text-[10px] font-extrabold fill-slate-400"
                  >
                    {val}K
                  </text>
                );
              })}

              {/* Area path for applicants */}
              <path d={areaD(pointsApplicants)} fill={`url(#grad-applicants-${colorTheme})`} />

              {/* Line path for applicants */}
              <motion.path 
                d={pathD(pointsApplicants)} 
                fill="none" 
                className={theme.primary} 
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Line path for seats */}
              <motion.path 
                d={pathD(pointsSeats)} 
                fill="none" 
                stroke="#64748b" 
                strokeWidth="2.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />

              {/* Hover interactions */}
              {examData.trends.map((d, i) => {
                const pApp = pointsApplicants[i];
                return (
                  <g 
                    key={i}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="cursor-pointer"
                  >
                    {/* Transparent bar for wider hover surface */}
                    <rect 
                      x={pApp.x - 25} 
                      y={paddingTop} 
                      width="50" 
                      height={chartHeight} 
                      fill="transparent" 
                    />

                    {/* Vertical line indicator */}
                    {hoveredIdx === i && (
                      <line 
                        x1={pApp.x} 
                        y1={paddingTop} 
                        x2={pApp.x} 
                        y2={paddingTop + chartHeight} 
                        stroke="#cbd5e1" 
                        strokeWidth="1.5" 
                      />
                    )}

                    {/* Points for applicants */}
                    <circle 
                      cx={pApp.x} 
                      cy={pApp.y} 
                      r={hoveredIdx === i ? "6" : "4"} 
                      className={`transition-all duration-150 ${theme.primary}`} 
                      stroke="#fff"
                      strokeWidth="1.5"
                    />

                    {/* Points for seats */}
                    <circle 
                      cx={pointsSeats[i].x} 
                      cy={pointsSeats[i].y} 
                      r={hoveredIdx === i ? "5" : "3.5"} 
                      fill="#64748b" 
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}

              {/* X Axis labels */}
              {examData.trends.map((d, i) => {
                const x = paddingLeft + (i / (examData.trends.length - 1)) * chartWidth;
                return (
                  <text 
                    key={i} 
                    x={x} 
                    y={paddingTop + chartHeight + 18} 
                    textAnchor="middle" 
                    className="text-[10px] font-black fill-slate-500"
                  >
                    {d.year}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Legend and Active Tooltip Info */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700">
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className={`w-3 h-3 rounded-full ${theme.primary}`} />
                <span>{t.applicants}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="w-3 h-3 rounded-full bg-slate-400 border border-dashed border-slate-600" />
                <span>{t.seats}</span>
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {hoveredIdx !== null ? (
                <motion.div 
                  key={hoveredIdx}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  className="text-xs font-black text-slate-800 dark:text-slate-100 flex gap-3"
                >
                  <span>
                    {t.applicants}: <span className={theme.text}>{examData.trends[hoveredIdx].applicants.toLocaleString()}</span>
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <span>
                    {t.seats}: <span className="text-slate-600 dark:text-slate-400">{examData.trends[hoveredIdx].seats.toLocaleString()}</span>
                  </span>
                </motion.div>
              ) : (
                <span className="text-xs font-bold text-slate-405 dark:text-slate-400 italic">
                  Hover points to inspect values
                </span>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
    } else {
      // Funnel Chart
      const rate = ((examData.seatFunnel.seats / examData.seatFunnel.applicants) * 100).toFixed(1);
      return (
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">
              {t.funnelTab}
            </h4>
            <div className="flex gap-2 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700 p-0.5 rounded-xl">
              <button
                onClick={() => { setActiveTab('tab1'); setHoveredIdx(null); }}
                className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555 dark:text-slate-400"
              >
                {t.competitionTab}
              </button>
              <button
                onClick={() => { setActiveTab('tab2'); setHoveredIdx(null); }}
                className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white dark:bg-slate-700 shadow-xs`}
              >
                {t.funnelTab}
              </button>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center space-y-6">
            {/* Visual Funnel Representation */}
            <div className="space-y-4">
              {/* Applicants Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black text-slate-700 dark:text-slate-300">
                  <span>{t.applicants}</span>
                  <span>{examData.seatFunnel.applicants.toLocaleString()}</span>
                </div>
                <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200/50 dark:border-slate-700">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-slate-400/30"
                  />
                </div>
              </div>

              {/* Seats Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black text-slate-700 dark:text-slate-300">
                  <span>{t.seats}</span>
                  <span className={theme.text}>{examData.seatFunnel.seats.toLocaleString()}</span>
                </div>
                <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200/50 dark:border-slate-700">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(examData.seatFunnel.seats / examData.seatFunnel.applicants) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`h-full ${theme.primary}`}
                  />
                </div>
              </div>
            </div>

            {/* Acceptance Callout Box */}
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700 rounded-2xl p-4 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-400 block mb-1">
                {t.acceptanceRate}
              </span>
              <span className={`text-4xl font-black ${theme.text}`}>
                {rate}%
              </span>
              <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-2 max-w-xs mx-auto">
                Only {examData.seatFunnel.seats.toLocaleString()} seats are allocated for every {examData.seatFunnel.applicants.toLocaleString()} total applicants.
              </p>
            </div>
          </div>
        </div>
      );
    }
  } else {
    // Career Data rendering
    const careerData = data as CareerData;

    if (activeTab === 'tab1') {
      // Annual Job openings trend
      const maxVal = Math.max(...careerData.jobs.map(d => d.openings));

      return (
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">
              {t.jobTab}
            </h4>
            <div className="flex gap-2 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700 p-0.5 rounded-xl">
              <button
                onClick={() => { setActiveTab('tab1'); setHoveredIdx(null); }}
                className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white dark:bg-slate-700 shadow-xs`}
              >
                {t.jobTab}
              </button>
              <button
                onClick={() => { setActiveTab('tab2'); setHoveredIdx(null); }}
                className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555 dark:text-slate-400"
              >
                {t.salaryTab}
              </button>
            </div>
          </div>

          <div className="relative flex-grow">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none">
              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((r, i) => {
                const y = paddingTop + r * chartHeight;
                return (
                  <line 
                    key={i} 
                    x1={paddingLeft} 
                    y1={y} 
                    x2={width - paddingRight} 
                    y2={y} 
                    stroke="#e2e8f0" 
                    strokeWidth="1" 
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Grid labels Y */}
              {[0, 0.25, 0.5, 0.75, 1].map((r, i) => {
                const val = Math.round(((1 - r) * maxVal) / 1000);
                const y = paddingTop + r * chartHeight;
                return (
                  <text 
                    key={i} 
                    x={paddingLeft - 8} 
                    y={y + 4} 
                    textAnchor="end" 
                    className="text-[10px] font-extrabold fill-slate-400"
                  >
                    {val}K
                  </text>
                );
              })}

              {/* Bars rendering */}
              {careerData.jobs.map((d, i) => {
                const barWidth = 35;
                const barSpacing = chartWidth / careerData.jobs.length;
                const x = paddingLeft + i * barSpacing + (barSpacing - barWidth) / 2;
                const barHeight = (d.openings / maxVal) * chartHeight;
                const y = paddingTop + chartHeight - barHeight;

                return (
                  <g 
                    key={i}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="cursor-pointer"
                  >
                    {/* Animated bar rect */}
                    <motion.rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      rx="6"
                      className={`${hoveredIdx === i ? 'fill-slate-400/50' : `${theme.primary} fill-opacity-80`}`}
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    />

                    {/* Wider transparent rectangle for hover triggers */}
                    <rect 
                      x={x - 10} 
                      y={paddingTop} 
                      width={barWidth + 20} 
                      height={chartHeight} 
                      fill="transparent" 
                    />
                  </g>
                );
              })}

              {/* X Axis labels */}
              {careerData.jobs.map((d, i) => {
                const barSpacing = chartWidth / careerData.jobs.length;
                const x = paddingLeft + i * barSpacing + barSpacing / 2;
                return (
                  <text 
                    key={i} 
                    x={x} 
                    y={paddingTop + chartHeight + 18} 
                    textAnchor="middle" 
                    className="text-[10px] font-black fill-slate-500"
                  >
                    {d.year}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Active Tooltip and info */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <span className={`w-3.5 h-3.5 rounded-md ${theme.primary}`} />
              <span>{t.annualOpenings}</span>
            </span>

            <AnimatePresence mode="wait">
              {hoveredIdx !== null ? (
                <motion.div 
                  key={hoveredIdx}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  className="text-xs font-black text-slate-800 dark:text-slate-100"
                >
                  <span>
                    {t.yearLabel}: <span className="text-slate-600 dark:text-slate-400">{careerData.jobs[hoveredIdx].year}</span>
                  </span>
                  <span className="text-slate-300 dark:text-slate-600 mx-2">|</span>
                  <span>
                    {t.hiringDemand}: <span className={theme.text}>{careerData.jobs[hoveredIdx].openings.toLocaleString()}</span>
                  </span>
                </motion.div>
              ) : (
                <span className="text-xs font-bold text-slate-405 dark:text-slate-400 italic">
                  Hover bars to inspect values
                </span>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
    } else {
      // Career Salary Arc Chart
      const maxVal = Math.max(...careerData.salaries.map(d => d.numericAmount));

      return (
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-400">
              {t.salaryTab} <span className="text-[10px] lowercase font-normal">{t.perMonth}</span>
            </h4>
            <div className="flex gap-2 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700 p-0.5 rounded-xl">
              <button
                onClick={() => { setActiveTab('tab1'); setHoveredIdx(null); }}
                className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555 dark:text-slate-400"
              >
                {t.jobTab}
              </button>
              <button
                onClick={() => { setActiveTab('tab2'); setHoveredIdx(null); }}
                className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white dark:bg-slate-700 shadow-xs`}
              >
                {t.salaryTab}
              </button>
            </div>
          </div>

          <div className="relative flex-grow">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none">
              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((r, i) => {
                const y = paddingTop + r * chartHeight;
                return (
                  <line 
                    key={i} 
                    x1={paddingLeft} 
                    y1={y} 
                    x2={width - paddingRight} 
                    y2={y} 
                    stroke="#e2e8f0" 
                    strokeWidth="1" 
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Grid labels Y */}
              {[0, 0.25, 0.5, 0.75, 1].map((r, i) => {
                const val = Math.round(((1 - r) * maxVal) / 1000);
                const y = paddingTop + r * chartHeight;
                return (
                  <text 
                    key={i} 
                    x={paddingLeft - 8} 
                    y={y + 4} 
                    textAnchor="end" 
                    className="text-[10px] font-extrabold fill-slate-400"
                  >
                    {val >= 100 ? `${(val / 100).toFixed(1)}L` : `${val}K`}
                  </text>
                );
              })}

              {/* Horizontal steps connected by a line */}
              {(() => {
                const barSpacing = chartWidth / careerData.salaries.length;
                const points = careerData.salaries.map((s, idx) => {
                  const x = paddingLeft + idx * barSpacing + barSpacing / 2;
                  const y = paddingTop + chartHeight - (s.numericAmount / maxVal) * chartHeight;
                  return { x, y };
                });

                const lineD = points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '');

                return (
                  <>
                    {/* Connection line */}
                    <motion.path 
                      d={lineD} 
                      fill="none" 
                      className={theme.primary} 
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Step interaction dots */}
                    {careerData.salaries.map((s, i) => {
                      const p = points[i];
                      return (
                        <g 
                          key={i}
                          onMouseEnter={() => setHoveredIdx(i)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          className="cursor-pointer"
                        >
                          <circle 
                            cx={p.x} 
                            cy={p.y} 
                            r={hoveredIdx === i ? "8" : "5.5"} 
                            className={`transition-all duration-150 ${theme.primary}`} 
                            stroke="#fff"
                            strokeWidth="2"
                          />
                          {/* Wider transparent rectangle for hover triggers */}
                          <rect 
                            x={p.x - 20} 
                            y={paddingTop} 
                            width="40" 
                            height={chartHeight} 
                            fill="transparent" 
                          />
                        </g>
                      );
                    })}
                  </>
                );
              })()}

              {/* X Axis labels */}
              {careerData.salaries.map((s, i) => {
                const barSpacing = chartWidth / careerData.salaries.length;
                const x = paddingLeft + i * barSpacing + barSpacing / 2;
                const label = language === 'hi' ? s.levelHi : s.level;
                return (
                  <text 
                    key={i} 
                    x={x} 
                    y={paddingTop + chartHeight + 18} 
                    textAnchor="middle" 
                    className="text-[10px] font-black fill-slate-500"
                  >
                    {label}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Active Tooltip and info */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <span className={`w-3.5 h-3.5 rounded-full ${theme.primary}`} />
              <span>{t.salaryLabel}</span>
            </span>

            <AnimatePresence mode="wait">
              {hoveredIdx !== null ? (
                <motion.div 
                  key={hoveredIdx}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  className="text-xs font-black text-slate-800 dark:text-slate-100"
                >
                  <span>
                    {t.levelLabel}: <span className="text-slate-600 dark:text-slate-400">{language === 'hi' ? careerData.salaries[hoveredIdx].levelHi : careerData.salaries[hoveredIdx].level}</span>
                  </span>
                  <span className="text-slate-300 dark:text-slate-600 mx-2">|</span>
                  <span>
                    {t.salaryLabel}: <span className={theme.text}>{careerData.salaries[hoveredIdx].amount}</span>
                  </span>
                </motion.div>
              ) : (
                <span className="text-xs font-bold text-slate-405 dark:text-slate-400 italic">
                  Hover points to inspect values
                </span>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
    }
  }
}
