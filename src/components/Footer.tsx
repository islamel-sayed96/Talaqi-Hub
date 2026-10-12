import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { CONTENT } from "@/data/content";
import { NAV, SITE, waLink, DEFAULT_WA_TEXT } from "@/data/site";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

import BrandIcon from "./BrandIcon";
import { BRAND_ICONS, type BrandName } from "@/data/brandIcons";

// LinkedIn isn't in Simple Icons (trademark), so it falls back to a text label.
const TEXT_LABELS: Record<string, string> = { linkedin: "in" };

export default function Footer({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const L = (p: string) => localePath(locale, p);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <Link href={L("/")}><Logo /></Link>
              <p style={{ marginTop: 18 }}>{SITE.name[locale]} — {SITE.tagline[locale]}. {t.footer.about}</p>
              <div className="socials">
                {Object.entries(SITE.social)
                  .filter(([, url]) => url)
                  .map(([k, url]) => (
                    <a key={k} href={url} target="_blank" rel="noopener noreferrer" aria-label={k}>
                      {k in BRAND_ICONS ? <BrandIcon name={k as BrandName} mono /> : TEXT_LABELS[k] ?? k}
                    </a>
                  ))}
              </div>
            </div>
            <div>
              <h4>{t.footer.services}</h4>
              <ul>
                {CONTENT[locale].services.slice(0, 6).map((s) => (
                  <li key={s.id}><Link href={L(`/services/#${s.id}`)}>{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>{t.footer.links}</h4>
              <ul>
                {NAV.map(([key, href]) => (
                  <li key={key}><Link href={L(href)}>{t.nav[key]}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>{t.footer.contact}</h4>
              <ul>
                <li><a href={waLink()} target="_blank" rel="noopener noreferrer">{t.footer.whatsapp}: <span dir="ltr">{SITE.phone}</span></a></li>
                <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li>{SITE.address[locale]}</li>
                <li>{SITE.hours[locale]}</li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {SITE.name[locale]}. {t.footer.rights}</span>
            <Link href={L("/brand/")}>{t.footer.brand}</Link>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={waLink(DEFAULT_WA_TEXT[locale])} target="_blank" rel="noopener noreferrer" aria-label={t.a11y.whatsappFloat}>
        <WhatsAppIcon />
      </a>
    </>
  );
}
