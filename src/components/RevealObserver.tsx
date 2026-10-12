"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? "";
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / 1600, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/** Fades in every `.reveal` element as it scrolls into view and runs `[data-count]` counters. */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = () => Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible):not([data-observed])"));
    if (!("IntersectionObserver" in window)) {
      els().forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("is-visible");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(animateCount);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const observeNew = () =>
      els().forEach((el, i) => {
        el.dataset.observed = "";
        el.style.transitionDelay = `${(i % 4) * 80}ms`;
        io.observe(el);
      });
    observeNew();

    // Pick up elements rendered later (e.g. client components inside <Suspense>).
    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: an element can jump past the viewport without ever "intersecting"
    // (very fast scroll while fonts shift the layout). Reveal anything already scrolled past.
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>(".reveal[data-observed]:not(.is-visible)").forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("is-visible");
            el.querySelectorAll<HTMLElement>("[data-count]").forEach(animateCount);
            io.unobserve(el);
          }
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
    }
    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
