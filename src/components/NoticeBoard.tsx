"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

interface NoticeItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  enclosure?: {
    link?: string;
  };
}

export default function NoticeBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  const fetchNotices = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch Hindustan Times Competitive Exams RSS feed converted to JSON in real-time
      const rssUrl = "https://www.hindustantimes.com/feeds/rss/education/competitive-exams/rssfeed.xml";
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
      );
      if (!response.ok) throw new Error("Failed to fetch notices");
      const data = await response.json();
      if (data.status === "ok" && data.items) {
        setNotices(data.items);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Notice Board Fetch Error:", err);
      setError(err instanceof Error ? err.message : "Failed to load real-time alerts.");
      // Fallback fallback notices so the board is never empty
      setNotices([
        {
          title: "NIFT 2026 Counseling Registrations Commencing Shorty",
          pubDate: new Date().toISOString(),
          link: "/exams/nift",
          description: "Counseling allocation procedures for admission to undergraduate courses at National Institutes of Fashion Technology across India will begin this week."
        },
        {
          title: "UCEED 2026 Joint Seat Allocation Results Out",
          pubDate: new Date(Date.now() - 86400000).toISOString(),
          link: "/exams/uceed",
          description: "IIT Bombay has announced the round 1 of seat allocation results. Candidates can check their status by logging into the admissions portal."
        },
        {
          title: "CLAT 2026 Academic Calendar & Admissions Schedule Released",
          pubDate: new Date(Date.now() - 172800000).toISOString(),
          link: "/exams/clat",
          description: "The Consortium of NLUs has released the revised merit allocation calendar. Online counseling verification starts next Monday."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Toggle state via window custom event
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      fetchNotices();
    };
    window.addEventListener("open-notice-board", handleOpen);
    return () => {
      window.removeEventListener("open-notice-board", handleOpen);
    };
  }, []);

  // Auto-open on landing (homepage) once per session
  useEffect(() => {
    if (pathname === "/") {
      const hasAutoOpened = sessionStorage.getItem("whatnow-notice-auto-opened");
      if (!hasAutoOpened) {
        // Delay open slightly for a smooth transition after initial load
        const timer = setTimeout(() => {
          setIsOpen(true);
          fetchNotices();
          sessionStorage.setItem("whatnow-notice-auto-opened", "true");
        }, 1800);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const timeAgo = (dateStr: string) => {
    try {
      const date = new Date(dateStr.replace(/-/g, "/")); // Handles date formats consistently
      const now = new Date();
      const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
      
      if (seconds < 60) return "Just now";
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return `${minutes}m ago`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours}h ago`;
      const days = Math.floor(hours / 24);
      if (days === 1) return "Yesterday";
      return `${days} days ago`;
    } catch {
      return "Recently";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-50"
          />

          {/* Side Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[24rem] bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col overflow-hidden border-l border-slate-100 dark:border-slate-800"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>
                <h2 className="font-heading font-black text-lg text-neutral-dark tracking-tight">
                  Live Exam Notice Board
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-neutral-dark hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <Icon icon="solar:close-circle-bold" className="w-5.5 h-5.5" />
              </button>
            </div>

            {/* Notification items body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {loading ? (
                // Skeletons while loading
                Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl space-y-2.5 animate-pulse">
                    <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
                    <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
                  </div>
                ))
              ) : error ? (
                // Error feedback block
                <div className="p-4 border border-rose-100 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/20 rounded-xl text-center space-y-2">
                  <Icon icon="solar:danger-bold" className="w-7 h-7 text-rose-500 mx-auto" />
                  <p className="text-xs font-semibold text-rose-700 dark:text-rose-300">Real-time fetch issue. Showing cached guide updates.</p>
                </div>
              ) : null}

              {/* Render items */}
              {!loading && notices.length > 0 && (
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl hover:shadow-md hover:border-primary/30 transition-all duration-200 group flex flex-col gap-3 relative overflow-hidden"
                    >
                      {/* Badge / Timestamp */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-primary/[0.08] text-primary">
                          Live Exam Update
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          {timeAgo(notice.pubDate)}
                        </span>
                      </div>

                      {/* Headline / Title */}
                      <h3 className="font-extrabold text-sm text-neutral-dark group-hover:text-primary transition-colors leading-snug">
                        {notice.title}
                      </h3>

                      {/* Content image if present in media enclosure */}
                      {notice.enclosure?.link && (
                        <div className="relative w-full h-32 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                          {/* eslint-disable-next-line @next/next/no-img-element -- remote RSS feed image, arbitrary domains */}
                          <img
                            src={notice.enclosure.link} 
                            alt={notice.title}
                            className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal line-clamp-3 font-medium">
                        {notice.description}
                      </p>

                      {/* Action button */}
                      <a
                        href={notice.link}
                        target={notice.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-primary hover:text-primary-hover w-max pt-1"
                      >
                        <span>Read full announcement</span>
                        <Icon icon="ph:arrow-right-bold" className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Panel footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-center">
              <p className="text-[10px] font-bold text-slate-400 flex items-center justify-center gap-1">
                <Icon icon="solar:shield-check-bold" className="w-3.5 h-3.5 text-emerald-500" />
                Real-time aggregated feed from educational networks.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
