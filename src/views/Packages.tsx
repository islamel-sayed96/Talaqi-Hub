import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import PackagesExplorer from "@/components/PackagesExplorer";
import { Faq, PageHero, SectionHead, WhatsAppButton } from "@/components/Sections";

export default function Packages({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <>
      <PageHero locale={locale} crumb={t.nav.packages} title={t.packages.title} text={t.packages.text} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <PackagesExplorer locale={locale} />
          <p className="pkg-note">{t.packages.note}</p>
          <div className="pkg-custom reveal">
            <div>
              <h3>{t.packages.customTitle}</h3>
              <p>{t.packages.customText}</p>
            </div>
            <WhatsAppButton locale={locale}>{t.cta.whatsappShort}</WhatsAppButton>
          </div>
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
