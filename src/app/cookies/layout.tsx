import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cookie Policy | WhatNow",
  description:
    "How WhatNow uses cookies: the minimal set we rely on and how to control them. No ad-tracking, no selling your data.",
  path: "/cookies",
  type: "website",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
