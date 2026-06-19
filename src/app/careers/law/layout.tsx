import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/careers/law");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
