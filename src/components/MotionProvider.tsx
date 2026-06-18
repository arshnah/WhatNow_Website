"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every framer-motion animation on the site honour the OS
 * "reduce motion" setting (reducedMotion="user"): transform/layout
 * animations are skipped for those users, opacity is kept. Covers the
 * page-transition template, the search modal, the nav tab indicator, etc.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
