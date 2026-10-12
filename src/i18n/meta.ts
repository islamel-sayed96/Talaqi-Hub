import type { Metadata } from "next";
import { localePath, type Locale } from "./config";
import { SITE } from "@/data/site";

/** Page metadata with canonical + hreflang links between the Arabic and English versions. */
export function pageMeta(locale: Locale, path: string, title: string | null, description: string): Metadata {
  const full = title ? `${title} | ${SITE.name[locale]}` : `${SITE.name[locale]} | ${SITE.tagline[locale]}`;
  return {
    metadataBase: new URL(SITE.url),
    title: full,
    description,
    alternates: {
      canonical: localePath(locale, path),
      languages: { ar: localePath("ar", path), en: localePath("en", path), "x-default": localePath("ar", path) },
    },
    openGraph: {
      type: "website",
      title: full,
      description,
      siteName: SITE.name[locale],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: localePath(locale, path),
    },
  };
}

export const DESCRIPTIONS: Record<string, Record<Locale, string>> = {
  home: {
    ar: "تلاقي هب — وكالة تسويق رقمي متكاملة: تصميم مواقع، تطبيقات موبايل، UI/UX، هوية بصرية، سوشيال ميديا، إعلانات ممولة، SEO، تصوير ومونتاج.",
    en: "Talaqi Hub — a full-service digital marketing agency: websites, mobile apps, UI/UX, branding, social media, paid ads, SEO, photography and video.",
  },
  services: {
    ar: "كل خدماتنا: تطوير مواقع وتطبيقات، UI/UX، هوية بصرية، سوشيال ميديا، إعلانات ممولة، SEO، تصوير، مونتاج، موشن جرافيك و3D.",
    en: "All our services: web & app development, UI/UX, branding, social media, paid ads, SEO, photography, editing, motion graphics and 3D.",
  },
  packages: {
    ar: "باقات تلاقي هب للسوشيال ميديا والمواقع والهوية البصرية والتصوير — أسعار واضحة تبدأ من.",
    en: "Talaqi Hub packages for social media, websites, branding and production — clear starting prices.",
  },
  work: { ar: "أعمال تلاقي هب — مشاريع في التطوير والتصميم والتسويق والإنتاج.", en: "Talaqi Hub portfolio — projects in development, design, marketing and production." },
  about: { ar: "تعرف على تلاقي هب وفريقنا ورؤيتنا.", en: "Meet Talaqi Hub, our team and our vision." },
  contact: { ar: "تواصل مع تلاقي هب عبر واتساب أو الإيميل واطلب عرض سعر مجاني.", en: "Contact Talaqi Hub on WhatsApp or email and get a free quote." },
  brand: { ar: "الهوية البصرية لتلاقي هب: الشعار والألوان والخطوط.", en: "The Talaqi Hub brand identity: logo, colors and typography." },
};
