"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { UI } from "@/i18n/ui";
import { CONTENT } from "@/data/content";
import { SITE, waLink } from "@/data/site";

type Errors = Partial<Record<"name" | "phone" | "services" | "message", boolean>>;

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = UI[locale].form;
  const services = CONTENT[locale].services;
  const preselected = useSearchParams().get("service");
  const [values, setValues] = useState({ name: "", phone: "", company: "", budget: "", message: "" });
  const [picked, setPicked] = useState<string[]>(() => services.filter((s) => s.id === preselected).map((s) => s.title));
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const toggle = (title: string) => {
    setPicked((cur) => (cur.includes(title) ? cur.filter((x) => x !== title) : [...cur, title]));
    setErrors((er) => ({ ...er, services: false }));
  };

  const validate = () => {
    const next: Errors = {
      name: !values.name.trim(),
      phone: !/^[+\d\s()-]{7,}$/.test(values.phone.trim()),
      services: picked.length === 0,
      message: !values.message.trim(),
    };
    setErrors(next);
    const firstBad = (Object.keys(next) as (keyof Errors)[]).find((k) => next[k]);
    if (firstBad) document.getElementById(`f-${firstBad}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    return !firstBad;
  };

  const message = () =>
    [
      `${t.msg.hello} ${SITE.name[locale]} 👋`,
      `${t.msg.name}: ${values.name}`,
      `${t.msg.phone}: ${values.phone}`,
      values.company ? `${t.msg.company}: ${values.company}` : null,
      `${t.msg.services}: ${picked.join(t.sep)}`,
      values.budget ? `${t.msg.budget}: ${values.budget}` : null,
      "",
      `${t.msg.details}:`,
      values.message,
    ]
      .filter((l): l is string => typeof l === "string")
      .join("\n");

  const sendWhatsApp = () => {
    if (validate()) window.open(waLink(message()), "_blank", "noopener");
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `${t.msg.subject} ${values.name}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  };

  const field = (k: keyof Errors) => `field${errors[k] ? " has-error" : ""}`;

  return (
    <form className="form reveal" noValidate onSubmit={(e) => { e.preventDefault(); sendWhatsApp(); }}>
      <h3>{t.title}</h3>
      <p className="muted">{t.intro}</p>

      <div className="form__row">
        <div className={field("name")} id="f-name">
          <label htmlFor="name">{t.name}</label>
          <input id="name" type="text" autoComplete="name" value={values.name} onChange={set("name")} />
          <div className="field__err">{t.nameErr}</div>
        </div>
        <div className={field("phone")} id="f-phone">
          <label htmlFor="phone">{t.phone}</label>
          <input id="phone" type="tel" dir="ltr" autoComplete="tel" value={values.phone} onChange={set("phone")} />
          <div className="field__err">{t.phoneErr}</div>
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="company">{t.company}</label>
          <input id="company" type="text" autoComplete="organization" value={values.company} onChange={set("company")} />
        </div>
        <div className="field">
          <label htmlFor="budget">{t.budget}</label>
          <select id="budget" value={values.budget} onChange={set("budget")}>
            <option value="">{t.budgetNone}</option>
            {t.budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className={field("services")} id="f-services">
        <label>{t.services}</label>
        <div className="checks">
          {services.map((s) => (
            <label key={s.id}>
              <input type="checkbox" checked={picked.includes(s.title)} onChange={() => toggle(s.title)} />
              <span>{s.title}</span>
            </label>
          ))}
        </div>
        <div className="field__err">{t.servicesErr}</div>
      </div>

      <div className={field("message")} id="f-message">
        <label htmlFor="message">{t.message}</label>
        <textarea id="message" placeholder={t.messagePh} value={values.message} onChange={set("message")} />
        <div className="field__err">{t.messageErr}</div>
      </div>

      <div className="form__actions">
        <button type="submit" className="btn btn--wa">{t.sendWa}</button>
        <button type="button" className="btn btn--primary" onClick={sendEmail}>{t.sendEmail}</button>
      </div>
      <p className="form__note">{t.note}</p>
    </form>
  );
}
