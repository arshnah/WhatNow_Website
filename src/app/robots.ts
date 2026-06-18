import type { MetadataRoute } from "next";

const BASE = "https://whatnowindia.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/coming-soon", "/demo"],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
