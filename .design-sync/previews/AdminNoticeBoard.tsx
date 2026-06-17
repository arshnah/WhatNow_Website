import { AdminNoticeBoard, MotionGlobalConfig } from "whatnow-web";
import { useEffect } from "react";

// Land framer-motion entry animations instantly for headless capture
// (preview page only — shipped bundle runtime is unchanged).
MotionGlobalConfig.skipAnimations = true;

// AdminNoticeBoard is the product changelog/announcements panel, opened by the
// "open-admin-notices" event. Its notices come from src/data/admin-notices.json.
// Dispatch on mount so the panel is open before the capture screenshots.
export const Open = () => {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("open-admin-notices"));
  }, []);
  return <AdminNoticeBoard />;
};
