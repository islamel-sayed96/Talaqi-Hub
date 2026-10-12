"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localePath, stripLocale, type Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { NAV } from "@/data/site";
import Icon from "./Icon";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LangSwitch from "./LangSwitch";

export default function Header({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const path = stripLocale(usePathname() || "/");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  const L = (p: string) => localePath(locale, p);

  return (
    <header className={`header${scrolled || open ? " is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href={L("/")} aria-label={t.nav.home}><Logo /></Link>
        <nav className={`nav${open ? " is-open" : ""}`} id="nav" aria-label={t.a11y.mainNav}>
          {NAV.map(([key, href]) => (
            <Link key={key} href={L(href)} className={isActive(href) ? "is-active" : ""} onClick={() => setOpen(false)}>
              {t.nav[key]}
            </Link>
          ))}
          <Link href={L("/contact/")} className="btn btn--primary">{t.cta.quote}</Link>
        </nav>
        <div className="header__tools">
          <Link href={L("/contact/")} className="btn btn--primary">{t.cta.quote}</Link>
          <LangSwitch locale={locale} />
          <ThemeToggle t={t.a11y} />
          <button
            className="tool-btn burger"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
