import { Navbar, LanguageProvider } from "whatnow-web";

// Top navigation bar: logo, Careers/Exams/Reads dropdowns, search, language
// toggle, and the "vibe theme" switcher. Fixed to the top of the viewport.
export const Default = () => (
  <LanguageProvider>
    <Navbar />
  </LanguageProvider>
);
