import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../lib/useLang";
import { DOMAINS, LEVELS, PROGRAMS } from "../data/site";

const REGISTER = {
  ar: "سجّل في هذا البرنامج",
  fr: "S'inscrire à ce programme",
  en: "Register for this program",
};

export default function Programs() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const [domain, setDomain] = useState("all");
  const [level, setLevel] = useState("all");

  const filtered = PROGRAMS.filter(
    (p) => (domain === "all" || p.domain === domain) && (level === "all" || p.level === level)
  );

  const chip = (active: boolean) =>
    "rounded-full border px-3 py-1.5 text-xs transition " +
    (active
      ? "border-brand-600 bg-brand-600 text-white"
      : "border-navy-200 text-navy-600 hover:border-brand-400 dark:border-navy-700 dark:text-navy-200");

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("programs.eyebrow")}
        title={t("programs.title")}
        subtitle={t("programs.subtitle")}
      />

      <Section>
        <div className="space-y-5">
          <div>
            <p className="mb-2 text-xs font-medium text-navy-500 dark:text-navy-300">{t("programs.filterDomain")}</p>
            <div className="flex flex-wrap gap-2">
              {DOMAINS.map((d) => (
                <button key={d.key} onClick={() => setDomain(d.key)} className={chip(domain === d.key)}>
                  {pick(d.label)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-navy-500 dark:text-navy-300">{t("programs.filterLevel")}</p>
            <div className="flex flex-wrap gap-2">
              {LEVELS.map((l) => (
                <button key={l.key} onClick={() => setLevel(l.key)} className={chip(level === l.key)}>
                  {pick(l.label)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <p className="muted text-center text-sm">{t("programs.noResults")}</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 0.04}>
                  <article className="card flex h-full flex-col p-6">
                    <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(p.title)}</h3>
                    <p className="muted mt-2 text-sm leading-relaxed">{pick(p.desc)}</p>
                    <dl className="mt-4 space-y-1.5 text-xs">
                      <div className="flex justify-between gap-4">
                        <dt className="text-navy-500 dark:text-navy-400">{t("programs.duration")}</dt>
                        <dd className="text-navy-700 dark:text-navy-100">{pick(p.duration)}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-navy-500 dark:text-navy-400">{t("programs.price")}</dt>
                        <dd className="text-navy-700 dark:text-navy-100">{pick(p.price)}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-navy-500 dark:text-navy-400">{t("programs.cert")}</dt>
                        <dd className="text-navy-700 dark:text-navy-100">{pick(p.cert)}</dd>
                      </div>
                    </dl>
                    <Link
                      to={"/register?program=" + p.id}
                      className="btn btn-primary mt-6 w-full justify-center text-sm"
                    >
                      {pick(REGISTER)}
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
