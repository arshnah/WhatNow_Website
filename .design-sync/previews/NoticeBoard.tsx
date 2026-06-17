import { NoticeBoard, MotionGlobalConfig } from "whatnow-web";
import { useEffect } from "react";

// Land framer-motion entry animations instantly for headless capture
// (preview page only — shipped bundle runtime is unchanged).
MotionGlobalConfig.skipAnimations = true;

// NoticeBoard is a slide-in panel of live exam alerts, opened by the
// "open-notice-board" event. It fetches a remote RSS feed and falls back to
// built-in sample notices when offline. Dispatch on mount (immediately, so the
// panel is open before the capture screenshots — the child's listener is
// already attached by the time this parent effect runs).
export const Open = () => {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("open-notice-board"));
  }, []);
  return <NoticeBoard />;
};
