"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useRef, useState, useEffect } from "react";

interface GuideCardProps {
  category: string;
  title: React.ReactNode;
  description: string;
  badgeClass: string;
}

function GuideCard({ category, title, description, badgeClass }: GuideCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 flex flex-col h-full border border-neutral-200/60 hover:border-neutral-300 transition-colors group cursor-pointer shadow-sm">
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

      <div className="mt-auto flex items-center gap-2 justify-end">
        <span className="text-neutral-500 font-medium group-hover:text-neutral-800 transition-colors">
          Read
        </span>
        <Icon icon="ph:arrow-right" className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800 transition-all transform group-hover:translate-x-1" />
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
  },
  {
    category: "Maritime",
    title: <>Merchant Navy — Salary, sea time & reality</>,
    description: "From DG Shipping to your first contract. What cadets earn, what they don't tell you, and how to actually break in.",
    badgeClass: "bg-orange-50/80 text-orange-600 border-orange-100/50",
  },
  {
    category: "Maritime",
    title: <>Merchant Navy — Salary, sea time & reality</>,
    description: "From DG Shipping to your first contract. What cadets earn, what they don't tell you, and how to actually break in.",
    badgeClass: "bg-orange-50/80 text-orange-600 border-orange-100/50",
  }
];

export default function FeaturedGuides() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current || !firstCardRef.current || !lastCardRef.current) return;

    const containerRect = scrollRef.current.getBoundingClientRect();
    const firstCardRect = firstCardRef.current.getBoundingClientRect();
    const lastCardRect = lastCardRef.current.getBoundingClientRect();

    setShowLeft(firstCardRect.left < containerRect.left - 10);

    setShowRight(lastCardRect.right > containerRect.right + 10);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -420 : 420;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F8F8F6] py-20 lg:py-28 overflow-hidden">
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

        {/* Guides Slider */}
        <div className="relative w-full mt-10">

          {/* Left Gradient & Button */}
          <div className={`hidden md:flex absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-[#F8F8F6] via-[#F8F8F6]/90 to-transparent z-10 items-center justify-start pointer-events-none transition-opacity duration-300 ${showLeft ? "opacity-100" : "opacity-0"}`}>
            <button
              onClick={() => scroll("left")}
              disabled={!showLeft}
              className="pointer-events-auto p-2 ml-2 lg:ml-6 text-neutral-300 hover:text-neutral-800 transition-colors cursor-pointer disabled:cursor-default"
              aria-label="Scroll left"
            >
              <Icon icon="weui:arrow-filled" className="w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem] rotate-180" />
            </button>
          </div>

          {/* Right Gradient & Button */}
          <div className={`hidden md:flex absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-[#F8F8F6] via-[#F8F8F6]/90 to-transparent z-10 items-center justify-end pointer-events-none transition-opacity duration-300 ${showRight ? "opacity-100" : "opacity-0"}`}>
            <button
              onClick={() => scroll("right")}
              disabled={!showRight}
              className="pointer-events-auto p-2 mr-2 lg:mr-6 text-neutral-300 hover:text-neutral-800 transition-colors cursor-pointer disabled:cursor-default"
              aria-label="Scroll right"
            >
              <Icon icon="weui:arrow-filled" className="w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem]" />
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-8 -mb-8 px-4 sm:px-6 lg:px-8 xl:px-[calc((100vw-1280px)/2)] 2xl:px-[calc((100vw-1536px)/2)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {GUIDES.map((guide, idx) => (
              <div
                key={idx}
                ref={idx === 0 ? firstCardRef : idx === GUIDES.length - 1 ? lastCardRef : null}
                className="w-[85vw] sm:w-[380px] lg:w-[400px] flex-none snap-center lg:snap-start"
              >
                <GuideCard
                  category={guide.category}
                  title={guide.title}
                  description={guide.description}
                  badgeClass={guide.badgeClass}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
