"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { CONTENT } from "@/data/content";
import { formatPrice, waLink } from "@/data/site";
import Icon from "./Icon";

export default function PackagesExplorer({ locale, initial = 0 }: { locale: Locale; initial?: number }) {
  const t = UI[locale].packages;
  const groups = CONTENT[locale].packages;
  const [active, setActive] = useState(initial);
  const group = groups[active];

  return (
    <>
      <div className="filters" role="tablist">
        {groups.map((g, i) => (
          <button key={g.id} role="tab" aria-selected={i === active} className={`filter${i === active ? " is-active" : ""}`} onClick={() => setActive(i)}>
            <Icon name={g.icon} /> {g.label}
          </button>
        ))}
      </div>
      <div className="pkg-grid" role="tabpanel">
        {group.packages.map((p) => (
          <div key={group.id + p.name} className={`pkg${p.popular ? " pkg--popular" : ""}`}>
            {p.popular && <span className="pkg__badge">{t.popular}</span>}
            <h3>{p.name}</h3>
            <p className="pkg__desc">{p.desc}</p>
            <div className="pkg__price">
              <span className="pkg__from">{t.from}</span>
              <span className="pkg__amount">{formatPrice(p.price, locale)}</span>
              {p.period && <span className="pkg__period">{p.period}</span>}
            </div>
            <ul className="pkg__list">
              {p.features.map((f) => <li key={f}><Icon name="check" /><span>{f}</span></li>)}
            </ul>
            <a
              className={`btn btn--block ${p.popular ? "btn--primary" : "btn--ghost"}`}
              href={waLink(t.waText(p.name, group.label))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.choose}
            </a>
            <span className="pkg__nego">{UI[locale].negotiable.chip} ✓</span>
          </div>
        ))}
      </div>
    </>
  );
}
