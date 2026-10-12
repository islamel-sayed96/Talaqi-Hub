import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import WorkExplorer from "@/components/WorkExplorer";
import { Cta, PageHero } from "@/components/Sections";

export default function Work({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <>
      <PageHero locale={locale} crumb={t.nav.work} title={t.work.title} text={t.work.text} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container"><WorkExplorer locale={locale} /></div>
      </section>
      <Cta locale={locale} title={t.work.ctaTitle} text={t.work.ctaText} />
    </>
  );
}
