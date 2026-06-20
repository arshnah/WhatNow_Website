import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy | WhatNow",
  description:
    "What WhatNow collects, what it doesn't, and the choices you have. A plain-language privacy policy for an ad-free, non-sponsored student guidance site.",
  path: "/privacy",
  type: "website",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
