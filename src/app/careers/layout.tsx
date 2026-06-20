import type { ReactNode } from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

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

const CAREERS = [
  { name: "Law — Careers & Pathways", path: "/careers/law" },
  { name: "Design — Careers & Pathways", path: "/careers/design" },
  { name: "Fashion Design — Careers & Pathways", path: "/careers/fashion-design" },
  { name: "Merchant Navy — Careers & Pathways", path: "/careers/merchant-navy" },
  { name: "Urban Planning — Careers & Pathways", path: "/careers/urban-planning" },
];

const careersJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/careers`,
      url: `${SITE_URL}/careers`,
      name: "Career Guides — WhatNow",
      description:
        "Deep-dive, sponsor-free guides to non-traditional careers in India: entry routes, colleges, salaries and honest reality checks.",
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "WhatNow", url: SITE_URL },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: CAREERS.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          url: `${SITE_URL}${c.path}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
      ],
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={careersJsonLd} />
      {children}
    </>
  );
}
