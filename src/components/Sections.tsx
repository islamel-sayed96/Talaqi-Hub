import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { CONTENT, type Project, type Service, type TeamMember } from "@/data/content";
import { DEFAULT_WA_TEXT, waLink } from "@/data/site";
import Icon from "./Icon";

/** Renders ["plain ", "highlighted", " plain"] with the middle part in the brand gradient. */
export function Title({ parts }: { parts: readonly string[] }) {
  return <>{parts.map((p, i) => (i % 2 === 1 ? <span key={i} className="text-grad">{p}</span> : p))}</>;
}

export function SectionHead({ eyebrow, title, text }: { eyebrow?: string; title: readonly string[]; text?: string }) {
  return (
    <div className="section-head reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2><Title parts={title} /></h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function WhatsAppButton({ locale, text, className = "btn btn--wa", children }: { locale: Locale; text?: string; className?: string; children: React.ReactNode }) {
  return (
    <a className={className} href={waLink(text ?? DEFAULT_WA_TEXT[locale])} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function PageHero({ locale, crumb, title, text }: { locale: Locale; crumb: string; title: readonly string[]; text: string }) {
  return (
    <section className="page-hero">
      <div className="hero__bg">
        <div className="grid-bg" />
        <div className="blob blob--1" />
        <div className="blob blob--2" />
      </div>
      <div className="container" style={{ position: "relative" }}>
        <div className="crumbs"><Link href={localePath(locale, "/")}>{UI[locale].crumbsHome}</Link> / {crumb}</div>
        <h1><Title parts={title} /></h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function Marquee({ locale }: { locale: Locale }) {
  const items = [...CONTENT[locale].services, ...CONTENT[locale].services];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => <span key={i} className="marquee__item">{s.title}</span>)}
      </div>
    </div>
  );
}

export function ServiceCard({ s, locale, detailed = false, hidden = false }: { s: Service; locale: Locale; detailed?: boolean; hidden?: boolean }) {
  const t = UI[locale].services;
  return (
    // `hidden` is an inline style (not a class) so React never overwrites the
    // `is-visible` class that RevealObserver adds to the element.
    <article className="card reveal" id={detailed ? s.id : undefined} style={hidden ? { display: "none" } : undefined}>
      <div className="card__icon"><Icon name={s.icon} /></div>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      {detailed && (
        <ul className="card__list">
          {s.features.map((f) => <li key={f}><Icon name="check" /><span>{f}</span></li>)}
        </ul>
      )}
      <Link className="card__link" href={localePath(locale, detailed ? `/contact/?service=${s.id}` : `/services/#${s.id}`)}>
        {detailed ? t.request : t.learnMore} <Icon name="arrow" dir />
      </Link>
    </article>
  );
}

export function Stats({ locale }: { locale: Locale }) {
  return (
    <div className="stats">
      {CONTENT[locale].stats.map((s) => (
        <div key={s.label} className="stat reveal">
          <div className="stat__value text-grad" data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Process({ locale }: { locale: Locale }) {
  return (
    <div className="process">
      {CONTENT[locale].process.map((p) => (
        <div key={p.n} className="step reveal">
          <div className="step__n text-grad">{p.n}</div>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ p, locale, hidden = false }: { p: Project; locale: Locale; hidden?: boolean }) {
  const art = p.image
    ? { backgroundImage: `url(${p.image})` }
    : { background: `linear-gradient(135deg,hsl(${p.hue} 75% 55%),hsl(${(p.hue + 50) % 360} 80% 42%))` };
  const inner = (
    <>
      <div className={`work__art${p.image ? "" : " work__art--grad"}`} style={art} />
      {p.year && <span className="work__year">{p.year}</span>}
      <div className="work__info">
        <h3>{p.title}</h3>
        <div className="work__tags">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </>
  );
  const style = hidden ? { display: "none" } : undefined;
  return p.link ? (
    <a className="work reveal" href={p.link} target="_blank" rel="noopener noreferrer" style={style} aria-label={`${p.title} — ${UI[locale].work.view}`}>{inner}</a>
  ) : (
    <div className="work reveal" style={style}>{inner}</div>
  );
}

export function TeamCard({ m }: { m: TeamMember }) {
  return (
    <div className="member reveal">
      <div className="member__avatar">
        {m.photo ? <img src={m.photo} alt={m.name} /> : <span><Icon name="user" /></span>}
      </div>
      <h3>{m.name}</h3>
      <div className="member__role">{m.role}</div>
      <p>{m.bio}</p>
    </div>
  );
}

export function Team({ locale }: { locale: Locale }) {
  return <div className="team-grid">{CONTENT[locale].team.map((m, i) => <TeamCard key={i} m={m} />)}</div>;
}

export function Testimonials({ locale }: { locale: Locale }) {
  return (
    <div className="testimonials">
      {CONTENT[locale].testimonials.map((q) => (
        <figure key={q.name} className="quote reveal">
          <div className="quote__stars">★★★★★</div>
          <p>“{q.text}”</p>
          <figcaption className="quote__who">
            <div className="avatar">{q.name.charAt(0)}</div>
            <div><strong>{q.name}</strong><small>{q.role}</small></div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Faq({ locale }: { locale: Locale }) {
  return (
    <div className="faq">
      {CONTENT[locale].faq.map((f, i) => (
        <details key={f.q} className="reveal" open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Cta({ locale, title, text }: { locale: Locale; title?: string; text?: string }) {
  const t = UI[locale];
  return (
    <section className="section">
      <div className="container">
        <div className="cta reveal">
          <h2>{title ?? t.home.ctaTitle}</h2>
          <p>{text ?? t.home.ctaText}</p>
          <div className="cta__actions">
            <WhatsAppButton locale={locale}>{t.cta.whatsappShort}</WhatsAppButton>
            <Link href={localePath(locale, "/contact/")} className="btn btn--ghost">{t.cta.form}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
