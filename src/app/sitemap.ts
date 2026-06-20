import type { MetadataRoute } from "next";
import { publishedVoices } from "@/data/voices";

const BASE = "https://whatnowindia.vercel.app";

// Public, indexable routes grouped by section. /coming-soon and /demo are
// intentionally excluded (placeholder / non-content). Keep in sync when adding
// guides — the reads slugs are the three published long-form articles.
const core = ["/", "/about", "/convince-parents", "/scholarships", "/contact", "/faq", "/discord", "/voices"];

const careers = [
  "/careers",
  "/careers/design",
  "/careers/fashion-design",
  "/careers/law",
  "/careers/urban-planning",
  "/careers/merchant-navy",
  "/careers/merchant-navy/colleges",
  "/careers/merchant-navy/entry-routes",
  "/careers/merchant-navy/is-it-for-you",
  "/careers/merchant-navy/salary-ranks",
];

const exams = [
  "/exams",
  "/exams/clat", "/exams/clat/what-it-is", "/exams/clat/is-it-for-you", "/exams/clat/resources", "/exams/clat/scholarships", "/exams/clat/convince-parents",
  // NOTE: imu-cet is-it-for-you/resources/scholarships 301-redirect (see next.config.ts) → list only canonical destinations
  "/exams/imu-cet", "/exams/imu-cet/what-it-is", "/exams/imu-cet/entry-paths", "/exams/imu-cet/medical", "/exams/imu-cet/prep", "/exams/imu-cet/convince-parents",
  "/exams/jee-paper3", "/exams/jee-paper3/what-it-is", "/exams/jee-paper3/is-it-for-you", "/exams/jee-paper3/resources", "/exams/jee-paper3/scholarships", "/exams/jee-paper3/convince-parents",
  "/exams/nift", "/exams/nift/what-it-is", "/exams/nift/is-it-for-you", "/exams/nift/resources", "/exams/nift/scholarships", "/exams/nift/convince-parents",
  "/exams/uceed", "/exams/uceed/what-it-is", "/exams/uceed/is-it-for-you", "/exams/uceed/resources", "/exams/uceed/scholarships", "/exams/uceed/convince-parents",
];

const reads = ["/reads", "/reads/iit-drop-year", "/reads/talk-creative-fields", "/reads/transitioning-cities"];

const legal = ["/privacy", "/terms", "/cookies", "/editorial-guidelines", "/content-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const make = (
    paths: string[],
    priority: number,
    changeFrequency: "weekly" | "monthly" | "yearly",
  ): MetadataRoute.Sitemap =>
    paths.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority: path === "/" ? 1 : priority,
    }));

  const voices = publishedVoices().map((v) => `/careers/${v.vertical}/voices/${v.slug}`);

  return [
    ...make(core, 0.7, "monthly"),
    ...make(careers, 0.8, "monthly"),
    ...make(voices, 0.6, "monthly"),
    ...make(exams, 0.8, "monthly"),
    ...make(reads, 0.7, "monthly"),
    ...make(legal, 0.3, "yearly"),
  ];
}
