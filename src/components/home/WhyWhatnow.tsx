"use client";

import { Icon } from "@iconify/react";

export default function WhyWhatnow() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-20">
          <div className="flex-1">
            <h3 className="text-secondary text-xs font-extrabold tracking-[0.2em] uppercase mb-5">
              Why WhatNow
            </h3>
            <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-black text-neutral-dark tracking-tight leading-[1.1]">
              Built like a senior,<br />
              <span className="text-slate-400">not like a brand.</span>
            </h2>
          </div>
          <div className="flex-1 lg:pt-10">
            <p className="text-base md:text-xl text-slate-600 leading-relaxed font-medium">
              We made the thing we needed when we were 17 and confused. Three things make us different — and we&apos;re stubborn about all of them.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
              <Icon icon="solar:lock-unlocked-bold-duotone" className="w-64 h-64 text-green-600" />
            </div>
            <div className="h-16 w-16 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mb-10 shadow-inner">
              <Icon icon="solar:lock-unlocked-bold-duotone" className="w-8 h-8" />
            </div>
            <div className="flex items-end gap-4 mb-6">
              <span className="text-green-600 font-black text-2xl tracking-tighter opacity-80">01</span>
              <h4 className="text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5">Actually free</h4>
            </div>
            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
              No paywall, no email gate, no upsell. Every guide stays free because the next student behind you deserves the same head start.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
              <Icon icon="solar:shield-check-bold-duotone" className="w-64 h-64 text-orange-500" />
            </div>
            <div className="h-16 w-16 bg-orange-50 text-orange-500 rounded-3xl flex items-center justify-center mb-10 shadow-inner">
              <Icon icon="solar:shield-check-bold-duotone" className="w-8 h-8" />
            </div>
            <div className="flex items-end gap-4 mb-6">
              <span className="text-orange-500 font-black text-2xl tracking-tighter opacity-80">02</span>
              <h4 className="text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5">No coaching agenda</h4>
            </div>
            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
              We don&apos;t sell courses or get kickbacks. We&apos;re not pushing IIT or IIM. Just honest reads on what each path actually demands.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
              <Icon icon="solar:compass-bold-duotone" className="w-64 h-64 text-blue-600" />
            </div>
            <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-10 shadow-inner">
              <Icon icon="solar:compass-bold-duotone" className="w-8 h-8" />
            </div>
            <div className="flex items-end gap-4 mb-6">
              <span className="text-blue-600 font-black text-2xl tracking-tighter opacity-80">03</span>
              <h4 className="text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5">Careers nobody covers</h4>
            </div>
            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
              Urban planner, animator, agronomist, naval architect. The careers your career counselor forgot — written by people doing them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
