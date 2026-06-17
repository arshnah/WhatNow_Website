import { ComingSoon, LanguageProvider, MotionGlobalConfig } from "whatnow-web";

// Land framer-motion entry animations instantly so the "Prioritize" button is
// captured (preview page only — shipped bundle runtime is unchanged).
MotionGlobalConfig.skipAnimations = true;

// Full-page "blueprint incubation" placeholder shown for guides still being
// written. Takes the EN/HI page name it is drafting.
export const Default = () => (
  <LanguageProvider>
    <ComingSoon pageNameEn="Product Management" pageNameHi="उत्पाद प्रबंधन" />
  </LanguageProvider>
);
