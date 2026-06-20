import type { Metadata } from "next";
import { SEARCH_INDEX } from "@/data/searchIndex";

export const SITE_URL = "https://whatnowindia.vercel.app";

/**
 * Per-route metadata sourced from the site search index (single source of
 * truth for titles + descriptions). Use from a route's server `layout.tsx`
 * so client-component pages still get real <title>/description/OG tags:
 *
 *   export const metadata = buildMetadata("/careers/law");
 */
/**
 * Full per-page metadata for a route that knows its own title/description
 * (server-component pages with an inline `export const metadata`). Sets the
 * OpenGraph + Twitter fields too, so social embeds use THIS page's title and
 * description instead of inheriting a parent layout's generic card.
 *
 *   export const metadata = pageMeta({
 *     title: "IMU CET — Syllabus, Pattern & Reg Guidelines | WhatNow",
 *     description: "...",
 *     path: "/exams/imu-cet/what-it-is",
 *   });
 */
export function pageMeta({
  title,
  description,
  path,
  type = "article",
}: {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: `${SITE_URL}${path}`, type },
    twitter: { card: "summary_large_image", title, description },
  };
}

/**
 * Article + BreadcrumbList JSON-LD for a guide/exam page, for SEO and GEO
 * (so answer engines can parse what the page is and where it sits). Render the
 * result through the <JsonLd> component. Reuse the same title/description/path
 * passed to pageMeta(), plus the page's breadcrumb trail.
 */
export function guideJsonLd({
  title,
  description,
  path,
  breadcrumbs,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title.replace(/\s*\|\s*WhatNow\s*$/, ""),
        description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        inLanguage: "en-IN",
        isPartOf: { "@type": "WebSite", name: "WhatNow", url: SITE_URL },
        publisher: { "@type": "Organization", name: "WhatNow", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`,
        })),
      },
    ],
  };
}

/**
 * FAQPage JSON-LD for a page that visibly renders question/answer pairs (for
 * SEO rich results + GEO). Pass the REAL on-page Q&A text verbatim — schema
 * must mirror what the reader sees. Render the result through <JsonLd>.
 *
 *   <JsonLd data={faqJsonLd({ faqs: [{ q: "...", a: "..." }] })} />
 */
export function faqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildMetadata(href: string): Metadata {
  const entry = SEARCH_INDEX.find((i) => i.href === href);
  if (!entry) return {};

  const { title, description } = entry;
  // absolute so the suffix is consistent with the self-describing guide pages;
  // skip the suffix when the title already says "WhatNow" (e.g. "About WhatNow").
  const pageTitle = /whatnow/i.test(title) ? title : `${title} | WhatNow`;
  return {
    title: { absolute: pageTitle },
    description,
    alternates: { canonical: href },
    openGraph: {
      title: `${title} | WhatNow`,
      description,
      url: `${SITE_URL}${href}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | WhatNow`,
      description,
    },
  };
}
