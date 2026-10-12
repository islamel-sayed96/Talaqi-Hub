import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import Icon from "@/components/Icon";
import { PageHero, SectionHead } from "@/components/Sections";

const COLORS = [
  { name: { ar: "إنديجو تلاقي", en: "Talaqi Indigo" }, hex: "#5048E5", role: { ar: "اللون الأساسي", en: "Primary" } },
  { name: { ar: "تركواز", en: "Teal" }, hex: "#12B5CB", role: { ar: "اللون الثانوي", en: "Secondary" } },
  { name: { ar: "كورال", en: "Coral" }, hex: "#FF7A59", role: { ar: "لون التمييز", en: "Accent" } },
  { name: { ar: "حبر", en: "Ink" }, hex: "#0A0E1A", role: { ar: "الخلفية الداكنة والنصوص", en: "Dark background & text" } },
  { name: { ar: "ضباب", en: "Mist" }, hex: "#F6F7FB", role: { ar: "الخلفية الفاتحة", en: "Light background" } },
];

export default function Brand({ locale }: { locale: Locale }) {
  const t = UI[locale].brand;
  const logos = [
    { file: "talaqi-logo-light.svg", stage: "light", label: t.logoOnLight },
    { file: "talaqi-logo-dark.svg", stage: "dark", label: t.logoOnDark },
    { file: "talaqi-mark.svg", stage: "soft", label: t.markOnly },
    { file: "talaqi-mark-outline.svg", stage: "light", label: t.outline },
  ];
  return (
    <>
      <PageHero locale={locale} crumb={t.crumb} title={t.title} text={t.text} />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">{t.conceptEyebrow}</span>
            <h2>{t.conceptTitle}</h2>
            {t.concept.map((p) => <p key={p} className="muted">{p}</p>)}
          </div>
          <div className="split__art reveal" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <path d="M13 24h10.5M40.5 24H51M32 32.5V51" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none" />
              <circle cx="32" cy="24" r="5.5" fill="#fff" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead title={["", t.logoTitle]} />
          <div className="brand-grid">
            {logos.map((l) => (
              <div key={l.file} className="brand-tile reveal">
                <div className={`brand-tile__stage brand-tile__stage--${l.stage}`}>
                  <img src={`/brand/${l.file}`} alt={`Talaqi Hub — ${l.label}`} />
                </div>
                <div className="brand-tile__foot">
                  <span>{l.label}</span>
                  <a href={`/brand/${l.file}`} download><Icon name="download" size={16} /> {t.download}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title={["", t.colorsTitle]} />
          <div className="swatches">
            {COLORS.map((c) => (
              <div key={c.hex} className="swatch reveal">
                <div className="swatch__color" style={{ background: c.hex }} />
                <div className="swatch__meta">
                  <strong>{c.name[locale]}</strong>
                  <small className="muted">{c.role[locale]}</small><br />
                  <code>{c.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead title={["", t.typeTitle]} />
          <div className="type-grid">
            <div className="type-card reveal">
              <span className="eyebrow">{t.typeHeading}</span>
              <div className="type-card__big" style={{ fontFamily: "var(--font-head)", fontWeight: 700 }}>Readex Pro</div>
              <p style={{ fontFamily: "var(--font-head)", fontSize: "1.3rem" }}>{t.sample}</p>
            </div>
            <div className="type-card reveal">
              <span className="eyebrow">{t.typeBody}</span>
              <div className="type-card__big" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>IBM Plex Sans Arabic</div>
              <p style={{ fontSize: "1.1rem" }}>{t.sample}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title={["", t.voiceTitle]} />
          <div className="voice">
            {t.voice.map((v) => (
              <div key={v} className="value reveal"><Icon name="check" /><div><p style={{ color: "var(--text)" }}>{v}</p></div></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
