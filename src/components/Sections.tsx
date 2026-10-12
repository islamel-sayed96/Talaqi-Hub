import Link from "next/link";
import { FAQ, PROCESS, SERVICES, STATS, TESTIMONIALS, WORK } from "@/data/content";
import WhatsAppButton from "./WhatsAppButton";

export function Marquee() {
  const items = [...SERVICES, ...SERVICES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => <span key={i} className="marquee__item">{s.title}</span>)}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="stats">
      {STATS.map((s) => (
        <div key={s.label} className="stat reveal">
          <div className="stat__value text-grad" data-count={s.value} data-suffix={s.suffix}>0{s.suffix}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Process() {
  return (
    <div className="process">
      {PROCESS.map((p) => (
        <div key={p.n} className="step reveal">
          <div className="step__n text-grad">{p.n}</div>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Work() {
  return (
    <div className="work-grid">
      {WORK.map((w) => (
        <Link key={w.title} className="work reveal" href="/contact/">
          <div
            className="work__art"
            style={{ background: `linear-gradient(135deg,hsl(${w.hue} 80% 55%),hsl(${(w.hue + 60) % 360} 85% 45%))` }}
          />
          <div className="work__info"><h3>{w.title}</h3><span>{w.cat}</span></div>
        </Link>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="testimonials">
      {TESTIMONIALS.map((t) => (
        <figure key={t.name} className="quote reveal" style={{ margin: 0 }}>
          <div className="quote__stars">★★★★★</div>
          <p>“{t.text}”</p>
          <figcaption className="quote__who">
            <div className="avatar">{t.name.charAt(0)}</div>
            <div><strong>{t.name}</strong><small>{t.role}</small></div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <div className="faq">
      {FAQ.map((f, i) => (
        <details key={f.q} className="reveal" open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Cta({ title = "جاهز تكبّر مشروعك؟", text = "ابعتلنا فكرتك ونرد عليك بخطة وعرض سعر خلال 24 ساعة — الاستشارة الأولى مجانية." }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta reveal">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta__actions">
            <WhatsAppButton>تواصل واتساب</WhatsAppButton>
            <Link href="/contact/" className="btn btn--ghost">املأ نموذج الطلب</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ crumb, title, text }: { crumb: string; title: React.ReactNode; text: string }) {
  return (
    <section className="page-hero">
      <div className="hero__bg">
        <div className="grid-bg" />
        <div className="blob blob--1" />
        <div className="blob blob--2" />
      </div>
      <div className="container" style={{ position: "relative" }}>
        <div className="crumbs"><Link href="/">الرئيسية</Link> / {crumb}</div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
