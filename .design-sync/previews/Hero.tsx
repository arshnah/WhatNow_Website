import { Hero, LanguageProvider } from "whatnow-web";

// Hero is the homepage hero: headline, subtitle, primary/outline CTAs, the
// illustration, and the looping exam/career Marquee underneath. No props —
// content comes from its own EN/HI translations, so it must render inside the
// LanguageProvider (authored previews self-wrap; the card harness doesn't).
export const Default = () => (
  <LanguageProvider>
    <Hero />
  </LanguageProvider>
);
