"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SERVICES } from "@/data/content";
import { SITE, waLink } from "@/data/site";

const BUDGETS = [
  "أقل من 10,000 ج.م",
  "10,000 – 30,000 ج.م",
  "30,000 – 75,000 ج.م",
  "أكتر من 75,000 ج.م",
  "مش متأكد — محتاج استشارة",
];

type Errors = Partial<Record<"name" | "phone" | "services" | "message", boolean>>;

export default function ContactForm() {
  const preselected = useSearchParams().get("service");
  const [values, setValues] = useState({ name: "", phone: "", company: "", budget: "", message: "" });
  const [services, setServices] = useState<string[]>(() =>
    SERVICES.filter((s) => s.id === preselected).map((s) => s.title),
  );
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const toggleService = (title: string) => {
    setServices((cur) => (cur.includes(title) ? cur.filter((t) => t !== title) : [...cur, title]));
    setErrors((er) => ({ ...er, services: false }));
  };

  const validate = () => {
    const next: Errors = {
      name: !values.name.trim(),
      phone: !/^[+\d\s()-]{7,}$/.test(values.phone.trim()),
      services: services.length === 0,
      message: !values.message.trim(),
    };
    setErrors(next);
    const firstBad = (Object.keys(next) as (keyof Errors)[]).find((k) => next[k]);
    if (firstBad) document.getElementById(`f-${firstBad}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    return !firstBad;
  };

  const message = () =>
    [
      `مرحبا ${SITE.name} 👋`,
      `الاسم: ${values.name}`,
      `الهاتف: ${values.phone}`,
      values.company ? `الشركة / النشاط: ${values.company}` : null,
      `الخدمات المطلوبة: ${services.join("، ")}`,
      values.budget ? `الميزانية التقريبية: ${values.budget}` : null,
      "",
      "التفاصيل:",
      values.message,
    ]
      .filter((l): l is string => typeof l === "string")
      .join("\n");

  const sendWhatsApp = () => {
    if (validate()) window.open(waLink(message()), "_blank", "noopener");
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `طلب خدمة من ${values.name}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  };

  const field = (k: keyof Errors) => `field${errors[k] ? " has-error" : ""}`;

  return (
    <form
      className="form reveal"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        sendWhatsApp();
      }}
    >
      <h3>اطلب عرض سعر مجاني</h3>
      <p className="muted">اختار الخدمات اللي محتاجها واكتب تفاصيل بسيطة عن مشروعك.</p>

      <div className="form__row">
        <div className={field("name")} id="f-name">
          <label htmlFor="name">الاسم *</label>
          <input id="name" type="text" autoComplete="name" value={values.name} onChange={set("name")} />
          <div className="field__err">من فضلك اكتب اسمك</div>
        </div>
        <div className={field("phone")} id="f-phone">
          <label htmlFor="phone">رقم الموبايل / واتساب *</label>
          <input id="phone" type="tel" dir="ltr" autoComplete="tel" value={values.phone} onChange={set("phone")} />
          <div className="field__err">اكتب رقم صحيح</div>
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="company">اسم الشركة / النشاط</label>
          <input id="company" type="text" autoComplete="organization" value={values.company} onChange={set("company")} />
        </div>
        <div className="field">
          <label htmlFor="budget">الميزانية التقريبية</label>
          <select id="budget" value={values.budget} onChange={set("budget")}>
            <option value="">اختار (اختياري)</option>
            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className={field("services")} id="f-services">
        <label>الخدمات المطلوبة *</label>
        <div className="checks">
          {SERVICES.map((s) => (
            <label key={s.id}>
              <input type="checkbox" checked={services.includes(s.title)} onChange={() => toggleService(s.title)} />
              <span>{s.title}</span>
            </label>
          ))}
        </div>
        <div className="field__err">اختار خدمة واحدة على الأقل</div>
      </div>

      <div className={field("message")} id="f-message">
        <label htmlFor="message">تفاصيل المشروع *</label>
        <textarea id="message" placeholder="احكيلنا باختصار عن مشروعك وهدفك..." value={values.message} onChange={set("message")} />
        <div className="field__err">اكتب تفاصيل بسيطة عن مشروعك</div>
      </div>

      <div className="form__actions">
        <button type="submit" className="btn btn--wa">إرسال عبر واتساب</button>
        <button type="button" className="btn btn--primary" onClick={sendEmail}>إرسال عبر الإيميل</button>
      </div>
      <p className="form__note">بياناتك بتتبعت لنا مباشرة ومش بنشاركها مع أي حد.</p>
    </form>
  );
}
