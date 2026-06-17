import { Footer, LanguageProvider } from "whatnow-web";

// Site footer: brand, link columns, and bottom bar. Reads copy from the
// LanguageProvider, so the authored preview self-wraps.
export const Default = () => (
  <LanguageProvider>
    <Footer />
  </LanguageProvider>
);
