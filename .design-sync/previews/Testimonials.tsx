import { Testimonials, MotionGlobalConfig } from "whatnow-web";

// Land the opacity/translate animations instantly for a crisp capture
// (preview page only — shipped bundle runtime is unchanged).
MotionGlobalConfig.skipAnimations = true;

// Testimonials gates its entire content behind a framer-motion `whileInView`
// (opacity 0 → 1 once in view). Under headless capture the IntersectionObserver
// callback doesn't fire in time, leaving the card blank — though it renders
// fine in a real browser. Stub IntersectionObserver to report immediate
// intersection so the capture reflects the live render. (Preview-only; runs
// before the component mounts.)
class IOStub {
  cb: IntersectionObserverCallback;
  constructor(cb: IntersectionObserverCallback) { this.cb = cb; }
  observe(el: Element) {
    this.cb([{ isIntersecting: true, target: el, intersectionRatio: 1 } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
  }
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
(globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = IOStub;

// Masonry-style grid of student testimonials with names and roles.
export const Default = () => <Testimonials />;
