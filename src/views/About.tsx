import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import type { IconName } from "@/data/icons";
import Icon from "@/components/Icon";
import { LogoMark } from "@/components/Logo";
import { Cta, PageHero, SectionHead, Stats, Team, Testimonials, Title } from "@/components/Sections";

export default function About({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const a = t.about;
  return (
    <>
      <PageHero locale={locale} crumb={t.nav.about} title={a.title} text={a.text} />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">{a.storyEyebrow}</span>
            <h2><Title parts={a.storyTitle} /></h2>
            {a.story.map((p) => <p key={p} className="muted">{p}</p>)}
            <div className="values">
              {a.values.map((v) => (
                <div key={v.title} className="value">
                  <Icon name={v.icon as IconName} />
                  <div><h4>{v.title}</h4><p>{v.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="split__art reveal"><LogoMark className="" plain /></div>
        </div>
      </section>
      <section className="section section--alt" style={{ padding: "80px 0" }}>
        <div className="container"><Stats locale={locale} /></div>
      </section>
      <section className="section" id="team">
        <div className="container">
          <SectionHead eyebrow={t.home.teamEyebrow} title={a.teamTitle} text={t.home.teamText} />
          <Team locale={locale} />
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow={t.home.testimonialsEyebrow} title={a.testimonialsTitle} />
          <Testimonials locale={locale} />
        </div>
      </section>
      <Cta locale={locale} title={a.ctaTitle} text={a.ctaText} />
    </>
  );
}
