# Talaqi Hub — تلاقي هب

موقع شركة **Talaqi Hub** للتسويق الرقمي والإنتاج الإبداعي.

موقع لشركة تسويق رقمي: **Next.js + React + TypeScript** بيتعمله export كموقع ثابت (HTML/CSS/JS).
مفيش backend ولا قاعدة بيانات ولا دفع — طلبات العملاء بتتحول على **الواتساب** أو **الإيميل**.

## الصفحات
| المسار | المحتوى |
|---|---|
| `/` | الرئيسية: Hero، الخدمات، الأرقام، طريقة الشغل، الأعمال، آراء العملاء، الأسئلة الشائعة |
| `/services/` | كل الخدمات (20 خدمة) مع فلتر حسب القسم |
| `/about/` | من نحن |
| `/contact/` | نموذج طلب عرض سعر → واتساب أو إيميل |

## تعديل المحتوى
| عايز تغيّر | الملف |
|---|---|
| اسم الشركة، الواتساب، الإيميل، العنوان، السوشيال، الدومين | `src/data/site.ts` |
| الخدمات، الأعمال، آراء العملاء، الأسئلة، الأرقام | `src/data/content.ts` |
| الأيقونات | `src/data/icons.ts` |
| الألوان | أول جزء في `src/app/globals.css` (`:root`) |
| أيقونة التاب (favicon) | `src/app/icon.svg` |

> رقم الواتساب بالصيغة الدولية بدون `+` — مثال مصر: `201001234567`.

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
  app/          الصفحات (App Router) + globals.css
  components/   Header, Footer, ContactForm, ServicesExplorer, ...
  data/         site.ts (الإعدادات) · content.ts (المحتوى) · icons.ts
public/         ملفات بتترفع زي ما هي (.htaccess، صور الأعمال)
```
