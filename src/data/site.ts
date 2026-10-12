/*
 * إعدادات الموقع — عدّل هنا بس وكل الصفحات هتتحدّث تلقائيًا.
 */
export const SITE = {
  name: "تلاقي هب", // اسم الشركة
  nameEn: "TALAQI HUB", // اسم الشركة بالإنجليزي (اللوجو)
  tagline: "وكالة تسويق رقمي وإنتاج إبداعي",
  url: "https://example.com", // دومين الموقع بعد الرفع

  // رقم الواتساب بالصيغة الدولية بدون + (مثال مصر: 201001234567)
  whatsapp: "201000000000",
  email: "hello@example.com",
  phone: "+20 100 000 0000",
  address: "القاهرة، مصر",
  hours: "السبت – الخميس، 10 ص – 7 م",

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

export const DEFAULT_WA_TEXT = "مرحبا، عايز أستفسر عن خدماتكم";

// روابط القائمة الرئيسية (الهيدر والفوتر)
export const NAV = [
  { href: "/", label: "الرئيسية" },
  { href: "/services/", label: "خدماتنا" },
  { href: "/#work", label: "أعمالنا" },
  { href: "/about/", label: "من نحن" },
  { href: "/contact/", label: "تواصل معنا" },
];
