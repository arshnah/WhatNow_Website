import { ContextMenu, LanguageProvider, MotionGlobalConfig } from "whatnow-web";
import { useEffect } from "react";

// Land framer-motion entry animations instantly for headless capture
// (preview page only — shipped bundle runtime is unchanged).
MotionGlobalConfig.skipAnimations = true;

// ContextMenu is the custom right-click menu mounted globally. It opens on the
// native "contextmenu" event at the cursor position. Dispatch it on a real DOM
// element (the handler calls target.closest(...), which window lacks) near the
// top-left so the open menu is visible.
export const Open = () => {
  useEffect(() => {
    document.documentElement.dispatchEvent(
      new MouseEvent("contextmenu", { clientX: 48, clientY: 48, bubbles: true, cancelable: true })
    );
  }, []);
  return (
    <LanguageProvider>
      <ContextMenu />
    </LanguageProvider>
  );
};
