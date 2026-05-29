"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SEARCH_INDEX } from "@/data/searchIndex";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"All" | "Careers" | "Exams" | "Reads">("All");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Define handleNavigate before useEffect hooks to avoid hoisting issues
  const handleNavigate = useCallback((href: string) => {
    router.push(href);
    setIsOpen(false);
  }, [router]);

  // Listen to open-search custom event and Ctrl+K / Cmd+K shortcuts
  useEffect(() => {
    const resetSearchState = () => {
      setQuery("");
      setActiveTab("All");
      setSelectedIndex(0);
    };

    const handleToggle = () => {
      setIsOpen((prev) => {
        if (!prev) resetSearchState();
        return !prev;
      });
    };
    const handleOpen = () => {
      resetSearchState();
      setIsOpen(true);
    };
    const handleClose = () => setIsOpen(false);

    window.addEventListener("toggle-search", handleToggle);
    window.addEventListener("open-search", handleOpen);
    window.addEventListener("close-search", handleClose);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) resetSearchState();
          return !prev;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("toggle-search", handleToggle);
      window.removeEventListener("open-search", handleOpen);
      window.removeEventListener("close-search", handleClose);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Compute search scoring and filtering using useMemo to avoid setState warnings
  const results = useMemo(() => {
    let filtered = SEARCH_INDEX;

    // 1. Filter by category tabs
    if (activeTab !== "All") {
      filtered = filtered.filter((item) => item.category === activeTab);
    }

    // 2. Filter by search query
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      
      const scored = filtered
        .map((item) => {
          let score = 0;
          
          // Exact title match gets highest score
          if (item.title.toLowerCase() === q) score += 100;
          // Title starts with query
          else if (item.title.toLowerCase().startsWith(q)) score += 80;
          // Title contains query
          else if (item.title.toLowerCase().includes(q)) score += 50;

          // Keyword match
          const keywordMatches = item.keywords.filter((kw) => kw.toLowerCase().includes(q));
          score += keywordMatches.length * 15;

          // Description match
          if (item.description.toLowerCase().includes(q)) score += 10;

          return { item, score };
        })
        .filter((scoredItem) => scoredItem.score > 0)
        .sort((a, b) => b.score - a.score);

      return scored.map((s) => s.item);
    } else {
      // If empty query, show featured/ready items first
      return filtered.filter((item) => item.status === "ready" || item.href === "/about");
    }
  }, [query, activeTab]);


  // Handle keyboard navigation inside search list
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleNavigate(results[selectedIndex].href);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, handleNavigate]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const highlightMatch = (text: string, search: string) => {
    if (!search.trim()) return text;
    const cleanSearch = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`(${cleanSearch})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === search.toLowerCase().trim() ? (
            <mark key={i} className="bg-primary/20 text-primary font-bold rounded px-0.5">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Careers":
        return "solar:compass-bold-duotone";
      case "Exams":
        return "solar:document-text-bold-duotone";
      case "Reads":
        return "solar:book-bookmark-bold-duotone";
      default:
        return "solar:link-circle-bold-duotone";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Careers":
        return "text-secondary bg-secondary/10 border-secondary/20";
      case "Exams":
        return "text-primary bg-primary/10 border-primary/20";
      case "Reads":
        return "text-accent bg-accent/10 border-accent/20";
      default:
        return "text-slate-500 bg-slate-100 border-slate-200";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] md:pt-[15vh]">
          {/* Glassmorphic overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-neutral-950/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-neutral-950/20 overflow-hidden flex flex-col mx-4 max-h-[70vh] z-10"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100">
              <Icon icon="solar:magnifer-linear" className="w-6 h-6 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search careers, exams, resources..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full text-lg text-neutral-dark placeholder-slate-400 bg-transparent focus:outline-none font-medium"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setSelectedIndex(0);
                  }}
                  className="p-1 rounded-full text-slate-400 hover:text-neutral-dark hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Clear input"
                >
                  <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                </button>
              )}
              <span className="hidden sm:inline-block text-[11px] font-bold text-slate-400 border border-slate-200 rounded-md px-1.5 py-0.5 bg-slate-50 uppercase tracking-widest shrink-0">
                ESC
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 px-6 py-3 bg-slate-50 border-b border-slate-100 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {(["All", "Careers", "Exams", "Reads"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedIndex(0);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                    activeTab === tab
                      ? "bg-neutral-dark text-white border-neutral-dark shadow-sm"
                      : "bg-white text-slate-500 hover:text-slate-800 border-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Results */}
            <div
              ref={resultsContainerRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {results.length > 0 ? (
                results.map((item, idx) => {
                  const isActive = idx === selectedIndex;
                  const isComingSoon = item.status === "coming-soon";

                  return (
                    <div
                      key={item.href}
                      data-active={isActive ? "true" : "false"}
                      onClick={() => !isComingSoon && handleNavigate(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-start gap-4 p-4 rounded-2xl border transition-all select-none cursor-pointer group ${
                        isActive
                          ? "bg-slate-50 border-neutral-300"
                          : "bg-white border-transparent hover:bg-slate-50/50"
                      } ${isComingSoon ? "opacity-75 cursor-not-allowed" : ""}`}
                    >
                      {/* Icon */}
                      <div
                        className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        <Icon icon={getCategoryIcon(item.category)} className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow min-w-0 pr-2">
                        <div className="flex items-center flex-wrap gap-2 mb-1">
                          <h4 className="text-base font-black text-neutral-dark group-hover:text-primary transition-colors truncate">
                            {highlightMatch(item.title, query)}
                          </h4>
                          {isComingSoon && (
                            <span className="text-[9px] font-extrabold uppercase bg-orange-50 text-orange-600 border border-orange-100 rounded-sm px-1.5 py-0.5 tracking-wider">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                          {highlightMatch(item.description, query)}
                        </p>
                      </div>

                      {/* Navigation Hint */}
                      {!isComingSoon && (
                        <div
                          className={`self-center shrink-0 text-slate-400 group-hover:text-neutral-800 transition-colors ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="h-16 w-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-4">
                    <Icon icon="solar:shield-warning-linear" className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-dark mb-1">No results found</h3>
                  <p className="text-sm text-slate-400 max-w-sm">
                    We couldn&apos;t find anything matching &ldquo;{query}&rdquo;. Try looking for &ldquo;uceed&rdquo;, &ldquo;design&rdquo;, or &ldquo;merchant navy&rdquo;.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Keyboard Guide */}
            <div className="hidden sm:flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 font-medium select-none">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="border border-slate-200 bg-white rounded px-1.5 py-0.5 shadow-sm font-sans font-bold">↑↓</kbd> to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="border border-slate-200 bg-white rounded px-1.5 py-0.5 shadow-sm font-sans font-bold">Enter</kbd> to select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="border border-slate-200 bg-white rounded px-1.5 py-0.5 shadow-sm font-sans font-bold">Esc</kbd> to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
