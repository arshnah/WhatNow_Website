import type { MetadataRoute } from "next";

// PWA / web app manifest. Picked up automatically by Next at /manifest.webmanifest
// and linked from <head>. Improves mobile install + is a minor SEO/quality signal.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WhatNow — Honest career & exam guidance for India",
    short_name: "WhatNow",
    description:
      "Honest guides to every course, career, and entrance exam — from people who don't earn a cut when you choose.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4F46E5",
    lang: "en-IN",
    categories: ["education", "reference"],
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
