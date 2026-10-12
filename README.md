# Talaqi Hub — تلاقي هب

موقع شركة **Talaqi Hub** للتسويق الرقمي والإنتاج الإبداعي.

موقع لشركة تسويق رقمي: **Next.js + React + TypeScript** بيتعمله export كموقع ثابت (HTML/CSS/JS).
مفيش backend ولا قاعدة بيانات ولا دفع — طلبات العملاء بتتحول على **الواتساب** أو **الإيميل**.

## الصفحات
كل صفحة موجودة بالعربي (اللغة الأساسية) على `/` وبالإنجليزي على `/en/`:

| عربي | إنجليزي | المحتوى |
|---|---|---|
| `/` | `/en/` | الرئيسية: Hero، الخدمات، الأرقام، طريقة الشغل، الأعمال، الباقات، الفريق، آراء العملاء، الأسئلة |
| `/services/` | `/en/services/` | كل الخدمات (20 خدمة) مع فلتر حسب القسم |
| `/packages/` | `/en/packages/` | الباقات والأسعار (سوشيال، مواقع، هوية، تصوير) |
| `/work/` | `/en/work/` | الأعمال (البورتفوليو) مع فلتر |
| `/about/` | `/en/about/` | من نحن + فريق العمل |
| `/contact/` | `/en/contact/` | نموذج طلب عرض سعر → واتساب أو إيميل |
| `/brand/` | `/en/brand/` | دليل الهوية البصرية (اللوجو، الألوان، الخطوط) |

الموقع فيه **وضع داكن وفاتح** (زرار الشمس/القمر) — بيتبع إعداد جهاز الزائر أول مرة، وبيفتكر اختياره بعد كده.

## تعديل المحتوى
| عايز تغيّر | الملف |
|---|---|
| الواتساب، الإيميل، العنوان، السوشيال، الدومين، العملة | `src/data/site.ts` |
| الخدمات، **الباقات والأسعار**، **الفريق**، **الأعمال**، آراء العملاء، الأسئلة (عربي) | `src/data/content/ar.ts` |
| نفس المحتوى بالإنجليزي | `src/data/content/en.ts` |
| نصوص الأزرار والعناوين (اللغتين) | `src/i18n/ui.ts` |
| الألوان (الوضعين) | أول جزء في `src/app/globals.css` |
| ملفات اللوجو | `public/brand/` و `src/app/icon.svg` |

> رقم الواتساب بالصيغة الدولية بدون `+` — مثال مصر: `201001234567`.
> صور الأعمال حطها في `public/work/` وصور الفريق في `public/team/`، واكتب المسار في `image` / `photo` (مثال: `"/work/coffee.jpg"`).

## التشغيل
```bash
npm install
npm run dev      # http://localhost:3000
```

## الرفع على Hostinger

> ⚠️ متترفعش ملفات الريبو نفسها (`src/`, `package.json`...) — الهوست مش هيلاقي `index.html` وهيطلع **403 Forbidden**.
> المطلوب يترفع هو الموقع **بعد البناء**.

### الطريقة 1 (أوتوماتيك — الأفضل): Git deployment على برانش `hostinger`
كل push على `main` بيبني الموقع تلقائيًا (GitHub Actions) ويحط الملفات الجاهزة على برانش **`hostinger`**.
1. hPanel ← **Websites ← Advanced ← Git**.
2. Repository: `https://github.com/islamel-sayed96/Talaqi-Hub.git` — Branch: **`hostinger`** — Directory: فاضي (يعني `public_html`).
   - لازم `public_html` يكون **فاضي** قبل ما تعمل Create (امسح أي ملفات فيه، زي `default.php`).
3. اعمل **Deploy**، وفعّل **Auto Deployment** (Webhook) عشان أي تعديل ينزل لوحده.

### الطريقة 2 (يدوي)
```bash
npm install
npm run build    # بيطلّع الموقع جاهز في فولدر out/
```
ارفع **محتوى** فولدر `out/` (مش الفولدر نفسه) جوه `public_html` — لازم `index.html` يبقى مباشرة جوه `public_html`.
أو نزّل برانش `hostinger` كـ ZIP من GitHub وارفعه وفكّه في `public_html`.

### Vercel / Netlify
اربط الريبو — Build command: `npm run build`، Output directory: `out`.

## الهيكل
```
src/
  app/(ar)/     الصفحات العربي (اللغة الأساسية)
  app/(en)/en/  الصفحات الإنجليزي
  views/        محتوى كل صفحة (مشترك بين اللغتين)
  components/   Header, Footer, Logo, ThemeToggle, ContactForm, PackagesExplorer, ...
  data/         site.ts (الإعدادات) · content/ar.ts + en.ts (المحتوى) · icons.ts
  i18n/         إعدادات اللغات ونصوص الواجهة
public/         ملفات بتترفع زي ما هي (.htaccess، اللوجو، صور الأعمال والفريق)
```
