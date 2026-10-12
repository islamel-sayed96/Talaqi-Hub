"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/data/site";


export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`header${scrolled || open ? " is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="logo" aria-label={SITE.name}>
          <span className="logo__mark">{SITE.nameEn.charAt(0)}</span>
          <span>{SITE.nameEn}</span>
        </Link>
        <nav className={`nav${open ? " is-open" : ""}`} id="nav" aria-label="القائمة الرئيسية">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={isActive(n.href) ? "is-active" : ""} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn btn--primary">اطلب عرض سعر</Link>
        </nav>
        <div className="header__cta">
          <Link href="/contact/" className="btn btn--primary">اطلب عرض سعر</Link>
          <button
            className="burger"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
