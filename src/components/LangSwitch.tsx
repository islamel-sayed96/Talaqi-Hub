"use client";

import { usePathname } from "next/navigation";
import { localePath, stripLocale, type Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";

export default function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const other: Locale = locale === "ar" ? "en" : "ar";
  const href = localePath(other, stripLocale(pathname));
  const t = UI[locale].langSwitch;
  // A plain <a>: switching language swaps the root layout (lang/dir), so a full load is intended.
  return (
    <a className="tool-btn" href={href} hrefLang={other} lang={other} aria-label={t.label} title={t.label}>
      {t.code}
    </a>
  );
}
