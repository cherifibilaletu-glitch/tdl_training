import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { DOCUMENTS, DOC_NOTES } from "../data/documents";

export default function Documents() {
  const { t } = useTranslation();
  const { pick } = useLang();
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("documents.eyebrow")}
        title={t("documents.title")}
        subtitle={t("documents.subtitle")}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {DOCUMENTS.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.05}>
              <div className="card flex h-full items-start gap-4 p-6">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                  <Icon name="clipboard-check" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(d.title)}</h3>
                  <p className="muted mt-1 text-sm leading-relaxed">{pick(d.desc)}</p>
                  <a href={d.url} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                    <Icon name="badge-check" className="h-4 w-4" />
                    <span>{t("documents.download")}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-navy-100 p-6 dark:border-navy-800">
          <h3 className="text-sm font-semibold text-navy-900 dark:text-white">{t("documents.notesTitle")}</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-600 dark:text-navy-200">
            {DOC_NOTES.map((n) => (
              <li key={n.en} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                <span>{pick(n)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}
