import { WhyWhatnow, LanguageProvider } from "whatnow-web";

// "Why WhatNow" value-proposition section (icon feature cards). Reads its copy
// from the LanguageProvider, so the authored preview self-wraps.
export const Default = () => (
  <LanguageProvider>
    <WhyWhatnow />
  </LanguageProvider>
);
