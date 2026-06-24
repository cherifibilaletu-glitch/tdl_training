import { useState } from "react";
import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { CONTACT } from "../data/site";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id";

export default function Contact() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const [sent, setSent] = useState(false);

  const phones = [...CONTACT.phonesTraining, ...CONTACT.phoneLanguages, ...CONTACT.phoneExtra];
  const emails = [CONTACT.emailTraining, CONTACT.emailLanguages, CONTACT.emailCorporate];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
    } catch (err) {
      // Ignore network errors in this demo setup.
    }
    setSent(true);
    form.reset();
  };

  const inputClass =
    "w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 dark:border-navy-700 dark:bg-navy-900";
  const labelClass = "mb-1.5 block text-xs font-medium text-navy-600 dark:text-navy-300";

  return (
    <>
      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} subtitle={t("contact.subtitle")} center />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <h2 className="text-lg font-semibold text-navy-900 dark:text-white">{t("contact.infoTitle")}</h2>

            <div className="flex items-start gap-3">
              <Icon name="map-pin" className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-400" />
              <div>
                <p className="text-sm font-medium text-navy-900 dark:text-white">{t("contact.addressTitle")}</p>
                <p className="muted mt-0.5 text-sm">{pick(CONTACT.address)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="life-buoy" className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-400" />
              <div>
                <p className="text-sm font-medium text-navy-900 dark:text-white">{t("contact.phoneTitle")}</p>
                <ul className="muted mt-0.5 space-y-0.5 text-sm">
                  {phones.map((p) => (
                    <li key={p} dir="ltr"><a href={"tel:" + p} className="link-quiet">{p}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="tag" className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-400" />
              <div>
                <p className="text-sm font-medium text-navy-900 dark:text-white">{t("contact.emailTitle")}</p>
                <ul className="muted mt-0.5 space-y-0.5 text-sm">
                  {emails.map((em) => (
                    <li key={em}><a href={"mailto:" + em} className="link-quiet">{em}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="calendar" className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-400" />
              <div>
                <p className="text-sm font-medium text-navy-900 dark:text-white">{t("contact.hoursTitle")}</p>
                <p className="muted mt-0.5 text-sm">{pick(CONTACT.hours)}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="card flex h-full flex-col items-center justify-center p-8 text-center">
                <Icon name="badge-check" className="h-10 w-10 text-brand-600 dark:text-brand-400" />
                <p className="mt-3 text-sm font-medium text-navy-900 dark:text-white">{t("contact.formSubmit")}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>{t("contact.formName")}</label>
                  <input name="name" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t("contact.formEmail")}</label>
                  <input type="email" name="email" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t("contact.formPhone")}</label>
                  <input name="phone" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t("contact.formMessage")}</label>
                  <textarea name="message" rows={5} required className={inputClass} />
                </div>
                <button type="submit" className="btn btn-primary w-full">{t("contact.formSubmit")}</button>
              </form>
            )}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
