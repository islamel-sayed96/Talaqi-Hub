import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";

export default function NotFound({ locale }: { locale: Locale }) {
  const t = UI[locale].notFound;
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="container">
        <h1 className="text-grad" style={{ fontSize: "6rem" }}>404</h1>
        <p style={{ marginBottom: 30 }}>{t.text}</p>
        <Link href={localePath(locale, "/")} className="btn btn--primary">{t.back}</Link>
      </div>
    </section>
  );
}
