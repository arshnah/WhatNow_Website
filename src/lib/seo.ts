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
