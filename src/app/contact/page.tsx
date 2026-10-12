import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { Faq, PageHero } from "@/components/Sections";
import { SITE, waLink, DEFAULT_WA_TEXT } from "@/data/site";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل معنا عبر واتساب أو الإيميل واطلب عرض سعر مجاني لمشروعك.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="تواصل معنا"
        title={<>يلا <span className="text-grad">نتكلم</span></>}
        text="املأ النموذج وهيتبعت لنا على الواتساب أو الإيميل مباشرة — بنرد خلال 24 ساعة."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact">
          <div className="contact__info">
            <a className="info-item info-item--wa reveal" href={waLink(DEFAULT_WA_TEXT)} target="_blank" rel="noopener noreferrer">
              <span className="info-item__icon"><Icon name="phone" /></span>
              <div><small>واتساب (الأسرع)</small><strong dir="ltr">{SITE.phone}</strong></div>
            </a>
            <a className="info-item reveal" href={`mailto:${SITE.email}`}>
              <span className="info-item__icon"><Icon name="mail" /></span>
              <div><small>البريد الإلكتروني</small><strong>{SITE.email}</strong></div>
            </a>
            <div className="info-item reveal">
              <span className="info-item__icon"><Icon name="pin" /></span>
              <div><small>العنوان</small><strong>{SITE.address}</strong></div>
            </div>
            <div className="info-item reveal">
              <span className="info-item__icon"><Icon name="clock" /></span>
              <div><small>مواعيد العمل</small><strong>{SITE.hours}</strong></div>
            </div>
          </div>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="أسئلة شائعة" title={<>قبل ما <span className="text-grad">تسأل</span></>} />
          <Faq />
        </div>
      </section>
    </>
  );
}
