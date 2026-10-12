"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { CONTENT, type CategoryId } from "@/data/content";
import { ServiceCard } from "./Sections";

export default function ServicesExplorer({ locale }: { locale: Locale }) {
  const { categories, services } = CONTENT[locale];
  const [filter, setFilter] = useState<"all" | CategoryId>("all");
  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button key={c.id} aria-pressed={filter === c.id} className={`filter${filter === c.id ? " is-active" : ""}`} onClick={() => setFilter(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.id} s={s} locale={locale} detailed hidden={filter !== "all" && s.cat !== filter} />
        ))}
      </div>
    </>
  );
}
