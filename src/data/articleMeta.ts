// Lightweight, server-importable metadata for the /reads articles. Kept
// separate from the full article bodies (which live in the client reader) so
// the server route can build <title>/description and BlogPosting schema.
export interface ArticleMeta {
  title: string;
  description: string;
  datePublished: string; // ISO 8601
  author: string;
}

export const ARTICLE_META: Record<string, ArticleMeta> = {
  "iit-drop-year": {
    title: "Is an IIT brand name worth a drop year?",
    description:
      "An honest breakdown of the IIT tag value, return on investment of a gap year, and the mental tax no one warns you about before you drop.",
    datePublished: "2026-05-01",
    author: "WhatNow Editorial",
  },
  "talk-creative-fields": {
    title: "How to talk creative fields with engineering parents?",
    description:
      "A step-by-step communication playbook for students pitching design, film, or writing to parents who only understand engineering and medicine.",
    datePublished: "2026-05-01",
    author: "WhatNow Editorial",
  },
  "transitioning-cities": {
    title: "Transitioning cities for work: Guide for juniors",
    description:
      "Real, raw advice on finding PG hostels, budgeting for food, managing commutes, and surviving your first six months in a new Indian metro.",
    datePublished: "2026-05-01",
    author: "WhatNow Editorial",
  },
};
