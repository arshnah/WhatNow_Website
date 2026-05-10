'use client';
import React, { useRef, useEffect, useState } from 'react';

const ITEMS = [
  "JEE",
  "NEET",
  "UCEED",
  "CLAT",
  "NDA",
  "NIFT",
  "Merchant Navy",
  "Urban Planning",
  "Game Design",
  "Agriculture"
];

export default function Marquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Adjust speed based on hover state (pixels per millisecond)
      const speed = isHovered ? 0.02 : 0.08; 
      
      // Update position
      positionRef.current -= speed * deltaTime;

      if (scrollerRef.current) {
        // Since we duplicated the items (2 sets), half the scrollWidth is the true width of one set
        const halfWidth = scrollerRef.current.scrollWidth / 2;
        
        // Loop back when we've scrolled exactly one set
        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current += halfWidth;
        }

        scrollerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full overflow-hidden bg-white border-y border-gray-100 py-6 lg:py-8 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div ref={scrollerRef} className="flex w-max will-change-transform">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center whitespace-nowrap shrink-0">
            {ITEMS.map((item, index) => (
              <React.Fragment key={`${i}-${index}`}>
                <span className="text-gray-400 font-bold text-lg md:text-2xl tracking-widest uppercase">{item}</span>
                <span className="mx-10 md:mx-16 w-2 h-2 rounded-full bg-gray-300"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
