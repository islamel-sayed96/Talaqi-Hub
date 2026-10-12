import { Suspense } from "react";
import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { DEFAULT_WA_TEXT, SITE, waLink } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { Faq, PageHero, SectionHead } from "@/components/Sections";

export default function Contact({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const c = t.contact;
  return (
    <>
      <PageHero locale={locale} crumb={t.nav.contact} title={c.title} text={c.text} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact">
          <div className="contact__info">
            <a className="info-item info-item--wa reveal" href={waLink(DEFAULT_WA_TEXT[locale])} target="_blank" rel="noopener noreferrer">
              <span className="info-item__icon"><Icon name="phone" /></span>
              <div><small>{c.waLabel}</small><strong dir="ltr">{SITE.phone}</strong></div>
            </a>
            <a className="info-item reveal" href={`mailto:${SITE.email}`}>
              <span className="info-item__icon"><Icon name="mail" /></span>
              <div><small>{c.emailLabel}</small><strong>{SITE.email}</strong></div>
            </a>
            <div className="info-item reveal">
              <span className="info-item__icon"><Icon name="pin" /></span>
              <div><small>{c.addressLabel}</small><strong>{SITE.address[locale]}</strong></div>
            </div>
            <div className="info-item reveal">
              <span className="info-item__icon"><Icon name="clock" /></span>
              <div><small>{c.hoursLabel}</small><strong>{SITE.hours[locale]}</strong></div>
            </div>
          </div>
          <Suspense fallback={null}>
            <ContactForm locale={locale} />
          </Suspense>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow={t.home.faqEyebrow} title={c.faqTitle} />
          <Faq locale={locale} />
        </div>
      </section>
    </>
  );
}
