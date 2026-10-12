import Link from "next/link";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Cta, Faq, Marquee, Process, Stats, Testimonials, Work } from "@/components/Sections";
import { SERVICES } from "@/data/content";
import type { IconName } from "@/data/icons";

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

export default function Home() {
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
            <span className="eyebrow">وكالة تسويق رقمي متكاملة</span>
            <h1>بنحوّل فكرتك لـ <span className="text-grad">علامة تجارية</span> الناس تحبها</h1>
            <p className="hero__lead">
              من الموقع والتطبيق، للتصوير والمونتاج، للإعلانات والسوشيال ميديا — فريق واحد بيشتغل على كل اللي محتاجه مشروعك عشان يكبر.
            </p>
            <div className="hero__actions">
              <Link href="/contact/" className="btn btn--primary">ابدأ مشروعك <Icon name="arrow" /></Link>
              <WhatsAppButton>كلمنا واتساب</WhatsAppButton>
            </div>
            <div className="hero__chips">
              {["ويب", "موبايل", "UI/UX", "تصوير", "مونتاج", "إعلانات", "SEO"].map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="orbit">
              {OUTER.map((o) => <span key={o.icon} className="orbit__item" style={o.style}><Icon name={o.icon} /></span>)}
            </div>
            <div className="orbit orbit--2">
              {INNER.map((o) => <span key={o.icon} className="orbit__item" style={o.style}><Icon name={o.icon} /></span>)}
            </div>
            <div className="hero__core">نصمم<br />ننتج<br />نسوّق</div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section" id="services">
        <div className="container">
          <SectionHead
            eyebrow="خدماتنا"
            title={<>كل الخدمات اللي <span className="text-grad">مشروعك محتاجها</span></>}
            text={`أكتر من ${SERVICES.length} خدمة في التطوير، التصميم، التسويق والإنتاج — اختار اللي يناسبك أو خد باقة متكاملة.`}
          />
          <div className="services-grid">
            {SERVICES.slice(0, 8).map((s) => <ServiceCard key={s.id} s={s} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/services/" className="btn btn--ghost">شوف كل الخدمات <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ padding: "80px 0" }}>
        <div className="container"><Stats /></div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="طريقة شغلنا" title={<>4 خطوات من <span className="text-grad">الفكرة للنتيجة</span></>} text="شغل منظم، تواصل واضح، ومواعيد تسليم بنلتزم بيها." />
          <Process />
        </div>
      </section>

      <section className="section section--alt" id="work">
        <div className="container">
          <SectionHead eyebrow="أعمالنا" title={<>مشاريع <span className="text-grad">بنفتخر بيها</span></>} text="نماذج من شغلنا مع عملاء في مجالات مختلفة." />
          <Work />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="آراء العملاء" title={<>عملاءنا <span className="text-grad">بيقولوا إيه</span></>} />
          <Testimonials />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="أسئلة شائعة" title={<>عندك <span className="text-grad">سؤال؟</span></>} />
          <Faq />
        </div>
      </section>

      <Cta />
    </>
  );
}
