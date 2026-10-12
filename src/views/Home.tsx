import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { CONTENT } from "@/data/content";
import type { IconName } from "@/data/icons";
import Icon from "@/components/Icon";
import { LogoMark } from "@/components/Logo";
import PackagesExplorer from "@/components/PackagesExplorer";
import { Cta, Faq, Marquee, Process, ProjectCard, SectionHead, ServiceCard, Stats, Team, Testimonials, Title, WhatsAppButton } from "@/components/Sections";

const OUTER: { icon: IconName; style: React.CSSProperties }[] = [
  { icon: "code", style: { top: -32, left: "calc(50% - 32px)" } },
  { icon: "camera", style: { bottom: -32, left: "calc(50% - 32px)" } },
  { icon: "megaphone", style: { top: "calc(50% - 32px)", left: -32 } },
  { icon: "mobile", style: { top: "calc(50% - 32px)", right: -32 } },
];
const INNER: { icon: IconName; style: React.CSSProperties }[] = [
  { icon: "layout", style: { top: "8%", left: "8%" } },
  { icon: "film", style: { bottom: "8%", right: "8%" } },
  { icon: "target", style: { top: "8%", right: "8%" } },
];

export default function Home({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const h = t.home;
  const c = CONTENT[locale];
  const L = (p: string) => localePath(locale, p);

  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <div className="grid-bg" />
          <div className="blob blob--1" />
          <div className="blob blob--2" />
          <div className="blob blob--3" />
        </div>
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">{h.eyebrow}</span>
            <h1><Title parts={h.title} /></h1>
            <p className="hero__lead">{h.lead}</p>
            <div className="hero__actions">
              <Link href={L("/contact/")} className="btn btn--primary">{t.cta.startProject} <Icon name="arrow" dir /></Link>
              <WhatsAppButton locale={locale}>{t.cta.whatsapp}</WhatsAppButton>
            </div>
            <div className="hero__chips">
              {h.chips.map((chip) => <span key={chip} className="chip">{chip}</span>)}
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="orbit">
              {OUTER.map((o) => <span key={o.icon} className="orbit__item" style={o.style}><Icon name={o.icon} /></span>)}
            </div>
            <div className="orbit orbit--2">
              {INNER.map((o) => <span key={o.icon} className="orbit__item" style={o.style}><Icon name={o.icon} /></span>)}
            </div>
            <div className="hero__core"><LogoMark className="" plain /></div>
          </div>
        </div>
      </section>

      <Marquee locale={locale} />

      <section className="section" id="services">
        <div className="container">
          <SectionHead eyebrow={h.servicesEyebrow} title={h.servicesTitle} text={h.servicesText(c.services.length)} />
          <div className="services-grid">
            {c.services.slice(0, 8).map((s) => <ServiceCard key={s.id} s={s} locale={locale} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href={L("/services/")} className="btn btn--ghost">{h.allServices} <Icon name="arrow" dir /></Link>
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ padding: "80px 0" }}>
        <div className="container"><Stats locale={locale} /></div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.processEyebrow} title={h.processTitle} text={h.processText} />
          <Process locale={locale} />
        </div>
      </section>

      <section className="section section--alt" id="work">
        <div className="container">
          <SectionHead eyebrow={h.workEyebrow} title={h.workTitle} text={h.workText} />
          <div className="work-grid">
            {c.work.slice(0, 6).map((p, i) => <ProjectCard key={i} p={p} locale={locale} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href={L("/work/")} className="btn btn--ghost">{h.allWork} <Icon name="arrow" dir /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.packagesEyebrow} title={h.packagesTitle} text={h.packagesText} />
          <PackagesExplorer locale={locale} />
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href={L("/packages/")} className="btn btn--ghost">{h.allPackages} <Icon name="arrow" dir /></Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow={h.teamEyebrow} title={h.teamTitle} text={h.teamText} />
          <Team locale={locale} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.testimonialsEyebrow} title={h.testimonialsTitle} />
          <Testimonials locale={locale} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow={h.faqEyebrow} title={h.faqTitle} />
          <Faq locale={locale} />
        </div>
      </section>

      <Cta locale={locale} />
    </>
  );
}
