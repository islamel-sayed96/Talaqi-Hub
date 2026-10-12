import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import ServicesExplorer from "@/components/ServicesExplorer";
import { Cta, PageHero, Process, SectionHead } from "@/components/Sections";

export default function Services({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <>
      <PageHero locale={locale} crumb={t.nav.services} title={t.services.title} text={t.services.text} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container"><ServicesExplorer locale={locale} /></div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow={t.home.processEyebrow} title={t.services.processTitle} />
          <Process locale={locale} />
        </div>
      </section>
      <Cta locale={locale} title={t.services.ctaTitle} text={t.services.ctaText} />
    </>
  );
}
