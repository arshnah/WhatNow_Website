import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Editorial Guidelines | WhatNow",
  description:
    "How WhatNow researches and writes: sourcing standards, the corrections policy, and why nobody pays us to recommend anything.",
  path: "/editorial-guidelines",
  type: "website",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
