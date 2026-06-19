import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Exams | WhatNow" },
  description:
    "Structured guides to entrance exams in India — CLAT, UCEED, NIFT, IMU-CET and JEE Paper 3 — covering pattern, prep resources, fees, scholarships and how to convince your parents.",
  alternates: { canonical: "/exams" },
  openGraph: {
    title: "Exams | WhatNow",
    description:
      "Structured guides to entrance exams in India — pattern, prep, fees, scholarships and more.",
    url: "https://whatnowindia.vercel.app/exams",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
