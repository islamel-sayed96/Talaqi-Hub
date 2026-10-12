"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { CONTENT, type CategoryId } from "@/data/content";
import { ProjectCard } from "./Sections";

export default function WorkExplorer({ locale }: { locale: Locale }) {
  const { categories, work } = CONTENT[locale];
  const [filter, setFilter] = useState<"all" | CategoryId>("all");
  // Only show categories that have at least one project.
  const used = categories.filter((c) => c.id === "all" || work.some((p) => p.cat === c.id));
  return (
    <>
      <div className="filters">
        {used.map((c) => (
          <button key={c.id} aria-pressed={filter === c.id} className={`filter${filter === c.id ? " is-active" : ""}`} onClick={() => setFilter(c.id)}>
            {c.id === "all" ? UI[locale].work.all : c.label}
          </button>
        ))}
      </div>
      <div className="work-grid">
        {work.map((p, i) => <ProjectCard key={i} p={p} locale={locale} hidden={filter !== "all" && p.cat !== filter} />)}
      </div>
    </>
  );
}
