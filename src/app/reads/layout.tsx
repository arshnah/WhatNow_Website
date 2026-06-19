import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Reads | WhatNow" },
  description:
    "Honest long-form articles for Indian students — drop-year ROI, talking creative careers with parents, moving cities for work, and other decisions nobody explains.",
  alternates: { canonical: "/reads" },
  openGraph: {
    title: "Reads | WhatNow",
    description:
      "Honest long-form articles for Indian students — the decisions nobody explains.",
    url: "https://whatnowindia.vercel.app/reads",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
