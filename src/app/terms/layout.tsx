import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Use | WhatNow",
  description:
    "The terms of using WhatNow: what the guidance is and isn't, accuracy disclaimers, and your responsibilities. Plain language, no fine-print traps.",
  path: "/terms",
  type: "website",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
