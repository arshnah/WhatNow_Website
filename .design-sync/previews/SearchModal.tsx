import { SearchModal, LanguageProvider, MotionGlobalConfig } from "whatnow-web";
import { useEffect } from "react";

// Land framer-motion entry animations instantly so the open dialog is captured
// fully (preview page only — shipped bundle runtime is unchanged).
MotionGlobalConfig.skipAnimations = true;

// SearchModal is a global command-palette overlay opened by the "open-search"
// event (also Ctrl/Cmd+K). It renders nothing until opened, so the preview
// fires the open event on mount to show the real search dialog.
export const Open = () => {
  useEffect(() => {
    const id = setTimeout(() => window.dispatchEvent(new CustomEvent("open-search")), 30);
    return () => clearTimeout(id);
  }, []);
  return (
    <LanguageProvider>
      <SearchModal />
    </LanguageProvider>
  );
};
