import Link from "next/link";
import type { Service } from "@/data/content";
import Icon from "./Icon";

export default function ServiceCard({ s, detailed = false, hidden = false }: { s: Service; detailed?: boolean; hidden?: boolean }) {
  return (
    // `hidden` uses an inline style (not a class) so React never overwrites the
    // `is-visible` class that RevealObserver adds to the element.
    <article className="card reveal" id={detailed ? s.id : undefined} style={hidden ? { display: "none" } : undefined}>
      <div className="card__icon"><Icon name={s.icon} /></div>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      {detailed && (
        <ul className="card__list">
          {s.features.map((f) => (
            <li key={f}><Icon name="check" /><span>{f}</span></li>
          ))}
        </ul>
      )}
      <Link className="card__link" href={detailed ? `/contact/?service=${s.id}` : `/services/#${s.id}`}>
        {detailed ? "اطلب الخدمة" : "اعرف أكتر"} <Icon name="arrow" />
      </Link>
    </article>
  );
}
