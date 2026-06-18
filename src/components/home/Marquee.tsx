'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollVelocity from '../ui/ScrollVelocity';

// Each ticker term links to its guide. Topics we haven't published yet point
// at /coming-soon (honest, and gives the placeholder a real job) rather than
// a dead hub.
const ITEMS: { label: string; href: string }[] = [
  { label: "JEE", href: "/exams/jee-paper3" },
  { label: "NEET", href: "/coming-soon" },
  { label: "UCEED", href: "/exams/uceed" },
  { label: "CLAT", href: "/exams/clat" },
  { label: "NDA", href: "/coming-soon" },
  { label: "NIFT", href: "/exams/nift" },
  { label: "Merchant Navy", href: "/careers/merchant-navy" },
  { label: "Urban Planning", href: "/careers/urban-planning" },
  { label: "Game Design", href: "/coming-soon" },
  { label: "Agriculture", href: "/coming-soon" },
];

export default function Marquee() {
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Honour the OS "reduce motion" setting — keep the ticker still for those users.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const marqueeContent = (
    <div className="flex items-center">
      {ITEMS.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            href={item.href}
            className="text-gray-400 hover:text-primary dark:hover:text-primary font-bold text-lg md:text-2xl tracking-widest uppercase whitespace-nowrap transition-colors cursor-pointer focus-visible:text-primary focus-visible:outline-none"
          >
            {item.label}
          </Link>
          <span className="mx-10 md:mx-16 w-2 h-2 rounded-full bg-gray-300 shrink-0"></span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden bg-white dark:bg-[#0E111E] py-6 lg:py-8 flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-[#0E111E] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-[#0E111E] to-transparent z-10 pointer-events-none"></div>

      <ScrollVelocity
        texts={[marqueeContent]}
        velocity={50}
        damping={50}
        stiffness={400}
        numCopies={8}
        scrollerClassName="scroller"
        paused={hovered || reducedMotion}
      />
    </div>
  );
}
