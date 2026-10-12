import Link from "next/link";
import { NAV, SITE, waLink, DEFAULT_WA_TEXT } from "@/data/site";
import { SERVICES } from "@/data/content";
import WhatsAppIcon from "./WhatsAppIcon";

const SOCIAL_LABELS: Record<string, string> = { facebook: "Fb", instagram: "Ig", tiktok: "Tk", linkedin: "In", behance: "Be" };

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <Link href="/" className="logo">
                <span className="logo__mark">{SITE.nameEn.charAt(0)}</span>
                <span>{SITE.nameEn}</span>
              </Link>
              <p style={{ marginTop: 18 }}>
                {SITE.name} — {SITE.tagline}. كل اللي محتاجه علامتك عشان تكبر، تحت سقف واحد.
              </p>
              <div className="socials">
                {Object.entries(SITE.social)
                  .filter(([, url]) => url)
                  .map(([k, url]) => (
                    <a key={k} href={url} target="_blank" rel="noopener noreferrer" aria-label={k}>
                      {SOCIAL_LABELS[k] ?? k}
                    </a>
                  ))}
              </div>
            </div>
            <div>
              <h4>خدماتنا</h4>
              <ul>
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.id}><Link href={`/services/#${s.id}`}>{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>روابط</h4>
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>تواصل</h4>
              <ul>
                <li><a href={waLink()} target="_blank" rel="noopener noreferrer">واتساب: <span dir="ltr">{SITE.phone}</span></a></li>
                <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li>{SITE.address}</li>
                <li>{SITE.hours}</li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.</span>
            <span>صُنع بشغف ✦</span>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={waLink(DEFAULT_WA_TEXT)} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
        <WhatsAppIcon />
      </a>
    </>
  );
}
