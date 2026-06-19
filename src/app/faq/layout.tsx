import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/faq");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
