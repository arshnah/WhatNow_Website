import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Careers | WhatNow" },
  description:
    "Deep-dive guides to non-traditional careers in India — Law, Design, Fashion, Merchant Navy, Urban Planning and more, with entry routes, colleges, salaries and honest reality checks.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | WhatNow",
    description:
      "Deep-dive guides to non-traditional careers in India — entry routes, colleges, salaries and honest reality checks.",
    url: "https://whatnowindia.vercel.app/careers",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
