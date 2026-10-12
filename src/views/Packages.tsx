import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import PackagesExplorer from "@/components/PackagesExplorer";
import { Faq, PageHero, SectionHead } from "@/components/Sections";
import { Negotiable, Offers } from "@/components/Promo";

export default function Packages({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <>
      <PageHero locale={locale} crumb={t.nav.packages} title={t.packages.title} text={t.packages.text} />
      <section className="section section--offers" style={{ paddingTop: 20 }}>
        <div className="container"><Offers locale={locale} /></div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={t.home.packagesEyebrow} title={t.home.packagesTitle} text={t.home.packagesText} />
          <PackagesExplorer locale={locale} />
          <p className="pkg-note">{t.packages.note}</p>
          <div style={{ marginTop: 60 }}><Negotiable locale={locale} /></div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} />
          <Faq locale={locale} />
        </div>
      </section>
    </>
  );
}
