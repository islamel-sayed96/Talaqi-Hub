import type { Viewport } from "next";
import RootShell from "@/components/RootShell";

export const viewport: Viewport = { themeColor: "#0a0e1a" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="ar">{children}</RootShell>;
}
