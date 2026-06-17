// design-sync barrel entry. The converter's synth-entry uses `export * from`,
// which does NOT re-export `default` exports — and almost every WhatNow
// component is a default export — so this barrel re-exports each as a NAMED
// export onto window.WhatNow.*. LanguageProvider is exported so it can be the
// cfg.provider wrapper for components that call useLanguage().
//
// MUST be first: defines a minimal `process` global before any dependent
// module evaluates (several bundled deps read process.env.* at load time).
import "./process-polyfill";

export { default as AdminNoticeBoard } from "@/components/AdminNoticeBoard";
export { default as ComingSoon } from "@/components/ComingSoon";
export { default as ContextMenu } from "@/components/ContextMenu";
export { default as Footer } from "@/components/Footer";
export { default as Navbar } from "@/components/Navbar";
export { default as NoticeBoard } from "@/components/NoticeBoard";
export { default as SearchModal } from "@/components/SearchModal";

export { default as FeaturedGuides } from "@/components/home/FeaturedGuides";
export { default as Hero } from "@/components/home/Hero";
export { default as Marquee } from "@/components/home/Marquee";
export { default as Testimonials } from "@/components/home/Testimonials";
export { default as WhyWhatnow } from "@/components/home/WhyWhatnow";

export { Button } from "@/components/ui/Button";
export { ScrollVelocity } from "@/components/ui/ScrollVelocity";
export { default as VisualAnalytics } from "@/components/ui/VisualAnalytics";

export { LanguageProvider } from "@/context/LanguageContext";

// Exposed for authored previews only: lets a preview set
// `MotionGlobalConfig.skipAnimations = true` on the bundle's own framer-motion
// instance so entry/whileInView animations land instantly under headless
// capture. Setting it runs per preview page; it never affects designs built
// with the DS (those load the bundle fresh with the default config).
export { MotionGlobalConfig } from "framer-motion";
