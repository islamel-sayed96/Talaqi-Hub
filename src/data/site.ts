/*
 * بيانات الشركة — عدّل هنا بس وكل الصفحات (عربي وإنجليزي) هتتحدّث تلقائيًا.
 */
import type { Locale } from "@/i18n/config";

export const SITE = {
  brand: "Talaqi Hub", // الاسم في اللوجو (ثابت في اللغتين)
  name: { ar: "تلاقي هب", en: "Talaqi Hub" },
  tagline: { ar: "وكالة تسويق رقمي وإنتاج إبداعي", en: "Digital marketing & creative production agency" },
  url: "https://example.com", // دومين الموقع بعد الرفع

  // رقم الواتساب بالصيغة الدولية بدون + (مثال الإمارات: 971501234567)
  whatsapp: "971500000000",
  email: "hello@example.com",
  phone: "+971 50 000 0000",
  address: { ar: "الإمارات العربية المتحدة", en: "United Arab Emirates" },
  hours: { ar: "السبت – الخميس، 10 ص – 7 م", en: "Sat – Thu, 10 AM – 7 PM" },

  // عملة الأسعار (درهم إماراتي)
  currency: { ar: "د.إ", en: "AED" },

  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
    behance: "#",
  } as Record<string, string>,
};

export const waLink = (text = "") =>
  `https://wa.me/${SITE.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;

export const DEFAULT_WA_TEXT: Record<Locale, string> = {
  ar: "مرحبا، عايز أستفسر عن خدماتكم",
  en: "Hi, I'd like to ask about your services",
};

// Arabic: "499 د.إ" — English: "AED 499"
export const formatPrice = (n: number, locale: Locale) =>
  locale === "en" ? `${SITE.currency.en} ${n.toLocaleString("en-US")}` : `${n.toLocaleString("en-US")} ${SITE.currency.ar}`;

/** Main navigation: [key in UI.nav, path without locale prefix]. */
export const NAV = [
  ["home", "/"],
  ["services", "/services/"],
  ["packages", "/packages/"],
  ["work", "/work/"],
  ["about", "/about/"],
  ["contact", "/contact/"],
] as const;
