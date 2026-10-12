"use client";

import { useEffect, useState } from "react";
import type { UIDict } from "@/i18n/ui";
import Icon from "./Icon";

type Theme = "dark" | "light";


export default function ThemeToggle({ t }: { t: UIDict["a11y"] }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  };

  const label = theme === "light" ? t.toDark : t.toLight;
  return (
    <button className="tool-btn" onClick={toggle} aria-label={label} title={label}>
      {/* Before mount the theme is unknown (null), so server and first client render match. */}
      <Icon name={theme === "light" ? "moon" : "sun"} />
    </button>
  );
}
