import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import type { IconName } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { formatPrice, waLink } from "@/data/site";
import BrandIcon from "./BrandIcon";
import Icon from "./Icon";
import { SectionHead } from "./Sections";

/** Limited-time offers (website from 499, Meta ads from 999). */
export function Offers({ locale, head = true }: { locale: Locale; head?: boolean }) {
  const t = UI[locale].offers;
  const neg = UI[locale].negotiable;
  return (
    <div id="offers" className="offers-wrap">
      {head && <SectionHead eyebrow={t.eyebrow} title={t.title} text={t.text} />}
      <div className="offers">
        {CONTENT[locale].offers.map((o) => (
          <div key={o.id} className="offer reveal">
            <div className="offer__glow" aria-hidden="true" />
            <div className="offer__top">
              <span className="offer__badge">{t.badge}</span>
              <span className="offer__icon">{o.brand ? <BrandIcon name={o.brand} /> : <Icon name={o.icon} />}</span>
            </div>
            <h3>{o.title}</h3>
            <p className="offer__desc">{o.desc}</p>
            <div className="offer__price">
              <span className="offer__from">{t.from}</span>
              <span className="offer__amount">{formatPrice(o.price, locale)}</span>
              {o.period && <span className="pkg__period">{o.period}</span>}
            </div>
            <ul className="pkg__list">
              {o.features.map((f) => <li key={f}><Icon name="check" /><span>{f}</span></li>)}
            </ul>
            <div className="offer__foot">
              <a className="btn btn--primary" href={waLink(o.waText)} target="_blank" rel="noopener noreferrer">{t.cta}</a>
              <span className="nego-chip">{neg.chip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** "Everything is negotiable": price, scope, timeline, payment. */
export function Negotiable({ locale }: { locale: Locale }) {
  const t = UI[locale].negotiable;
  return (
    <div className="nego reveal">
      <div className="nego__intro">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title[0]}<span className="text-grad">{t.title[1]}</span></h2>
        <p>{t.text}</p>
        <a className="btn btn--wa" href={waLink(t.waText)} target="_blank" rel="noopener noreferrer">{t.cta}</a>
      </div>
      <div className="nego__points">
        {t.points.map((p) => (
          <div key={p.title} className="nego__point">
            <span className="nego__icon"><Icon name={p.icon as IconName} /></span>
            <div><h4>{p.title}</h4><p>{p.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
