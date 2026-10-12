import type { Metadata } from "next";
import RootShell from "@/components/RootShell";
import NotFound from "@/views/NotFound";

export const metadata: Metadata = { title: "404 | تلاقي هب — Talaqi Hub", robots: { index: false } };

// Used for every unknown URL (the site has two root layouts: Arabic and English).
export default function GlobalNotFound() {
  return (
    <RootShell locale="ar">
      <NotFound locale="ar" />
    </RootShell>
  );
}
