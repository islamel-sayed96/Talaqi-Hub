"use client";

import { useState } from "react";
import { CATEGORIES, SERVICES } from "@/data/content";
import ServiceCard from "./ServiceCard";

export default function ServicesExplorer() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]["id"]>("all");

  return (
    <>
      <div className="filters" role="tablist">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={filter === c.id}
            className={`filter${filter === c.id ? " is-active" : ""}`}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} s={s} detailed hidden={filter !== "all" && s.cat !== filter} />
        ))}
      </div>
    </>
  );
}
