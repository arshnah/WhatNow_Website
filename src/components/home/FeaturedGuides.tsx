import Link from "next/link";
import { Icon } from "@iconify/react";
import React from "react";

interface GuideCardProps {
  category: string;
  title: React.ReactNode;
  description: string;
  badgeClass: string;
}

function GuideCard({ category, title, description, badgeClass }: GuideCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 flex flex-col h-full border border-neutral-200/60 hover:border-neutral-300 hover:bg-neutral-50/50 transition-colors group cursor-pointer">
      <div className="mb-6 flex items-start">
        <span className={`font-semibold text-sm px-3 py-1 rounded-xl border ${badgeClass}`}>
          {category}
        </span>
      </div>

      <h3 className="text-[26px] lg:text-[28px] font-bold text-neutral-800 mb-5 leading-[1.3]">
        {title}
      </h3>

      <p className="text-neutral-500 leading-relaxed mb-10 flex-grow">
        {description}
      </p>

      <div className="mt-auto flex items-center gap-2">
        <span className="text-neutral-500 font-medium group-hover:text-neutral-800 transition-colors">
          Read article
        </span>
        <Icon icon="ph:arrow-right" className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800 transition-colors transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}

const GUIDES = [
  {
    category: "Design",
    title: <>UCEED — Cracking it<br className="hidden lg:block" /> without coaching</>,
    description: "What the entrance actually tests, how seniors prepped at home, and which prep books are honestly worth your money.",
    badgeClass: "bg-indigo-50/80 text-indigo-600 border-indigo-100/50",
  },
  {
    category: "Defence",
    title: <>NDA — Beyond the uniform myth</>,
    description: "What life looks like after Class 12 if you pick this path. Pay, postings, exit options, and the parts recruiters skip.",
    badgeClass: "bg-emerald-50/80 text-emerald-600 border-emerald-100/50",
  },
  {
    category: "Maritime",
    title: <>Merchant Navy — Salary, sea time & reality</>,
    description: "From DG Shipping to your first contract. What cadets earn, what they don't tell you, and how to actually break in.",
    badgeClass: "bg-orange-50/80 text-orange-600 border-orange-100/50",
  }
];

export default function FeaturedGuides() {
  return (
    <section className="bg-[#F8F8F6] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#111827] tracking-tight">
              Start here. Three guides<br className="hidden sm:block" /> we wish we had.
            </h2>
          </div>

          <Link
            href="/guides"
            className="group flex items-center gap-2 font-medium text-neutral-500 hover:text-neutral-800 transition-colors w-fit pb-2"
          >
            <span>View all guides</span>
            <Icon icon="ph:arrow-right" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Guides Grid */}
        <div className="max-w-[72rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {GUIDES.map((guide, idx) => (
              <GuideCard
                key={idx}
                category={guide.category}
                title={guide.title}
                description={guide.description}
                badgeClass={guide.badgeClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
