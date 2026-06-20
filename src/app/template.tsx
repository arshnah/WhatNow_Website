// Page entrance transition. Intentionally CSS-driven (see `.page-enter` in
// globals.css), NOT framer-motion: a JS `initial:{opacity:0}` here could get
// stuck at opacity 0 on tab-switch rAF throttling / hydration race /
// interrupted navigation, making the whole page + cards disappear. A CSS
// animation always reaches its end state, so content can't be trapped hidden.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter flex-grow flex flex-col">{children}</div>;
}
