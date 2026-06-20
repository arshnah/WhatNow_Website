"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

// --- Types ---
interface Testimonial {
  text: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "I was completely split between choosing engineering or pure science research. The roadmap on IISERs and JEE guidance gave me the absolute clarity I needed.",
    name: "Aditya",
    role: "Class 12 Student",
  },
  {
    text: "Preparing for NEET had me constantly stressed out. The breakdown of alternative options like Biotechnology and Veterinary Science really eased my anxiety.",
    name: "Atul",
    role: "JEE/NEET Aspirant",
  },
  {
    text: "The comparison guide between CBSE and IB board pathways is incredibly detailed. It helped my parents support my decision to switch boards.",
    name: "Aasif",
    role: "Class 10 Student",
  },
  {
    text: "The Law and CLAT preparation resources here are highly structured. I didn't even realize how many legal specializations existed outside of corporate law.",
    name: "Shaurya",
    role: "CLAT Aspirant",
  },
  {
    text: "I share these comprehensive career pathway articles with my high school students all the time. The layout is exceptionally clean and logical.",
    name: "Tanya",
    role: "School Counselor",
  },
  {
    text: "Decent career resource indexes, although I would love more detailed local college cutoff data. Still, the NID and Design design path was a massive eye-opener!",
    name: "Anjali",
    role: "Class 11 Humanities",
  },
  {
    text: "Honestly, the JEE main prep was overwhelming. The drop-year guide helped me think rationally instead of feeling like a failure. It gave me real perspective.",
    name: "Sanjana",
    role: "JEE Aspirant",
  },
  {
    text: "Finding unbiased, non-sponsored educational path advice for my daughter's architecture career was tough. This platform has been a breath of fresh air.",
    name: "Lakshanya",
    role: "Parent",
  },
  {
    text: "Very good breakdown of the NIFT fashion technology curriculum. It could use a preparation checklist, but the overall career roadmap is highly beneficial.",
    name: "Lucky",
    role: "NIFT Aspirant",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  className="p-10 rounded-[2rem] border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md bg-white/80 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-500 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 max-w-xs w-full"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <div className="h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-700/50 border border-slate-200/80 dark:border-slate-700 group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20 flex items-center justify-center text-slate-400 select-none transition-all duration-500">
                        <Icon icon="solar:user-linear" className="w-5 h-5 transition-colors duration-500 group-hover:text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <cite className="font-extrabold not-italic tracking-tight leading-5 text-neutral-dark transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-xs font-bold leading-5 tracking-tight text-slate-400 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 dark:text-slate-100 transition-colors">
            Our students&apos; reaction
          </h2>
          <p className="text-center mt-5 text-neutral-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm transition-colors">
            Discover how students like you found their way with our guidance.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
}
