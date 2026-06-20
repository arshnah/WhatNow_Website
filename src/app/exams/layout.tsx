import type { ReactNode } from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

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

const EXAMS = [
  { name: "CLAT — Common Law Admission Test", path: "/exams/clat" },
  { name: "IMU CET — Merchant Navy Entrance Exam", path: "/exams/imu-cet" },
  { name: "JEE Paper 3 (B.Plan) — Planning Entrance", path: "/exams/jee-paper3" },
  { name: "NIFT Entrance Exam — Fashion & Design", path: "/exams/nift" },
  { name: "UCEED — Design Aptitude Test", path: "/exams/uceed" },
];

const examsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/exams`,
      url: `${SITE_URL}/exams`,
      name: "Entrance Exam Guides — WhatNow",
      description:
        "Structured, sponsor-free guides to entrance exams in India: pattern, prep, fees, scholarships and more.",
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "WhatNow", url: SITE_URL },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: EXAMS.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: e.name,
          url: `${SITE_URL}${e.path}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Exams", item: `${SITE_URL}/exams` },
      ],
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={examsJsonLd} />
      {children}
    </>
  );
}
