import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { LANG_METHODS, LANGUAGE_COURSES, STUDY_LEVELS } from "../data/languages";

export default function Languages() {
  const { t } = useTranslation();
  const { pick } = useLang();
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("languages.eyebrow")}
        title={t("languages.title")}
        subtitle={t("languages.subtitle")}
      />

      <Section>
        <SectionHeader eyebrow={t("languages.methodsEyebrow")} title={t("languages.methodsTitle")} center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LANG_METHODS.map((m, i) => (
            <Reveal key={m.title.en} delay={i * 0.05}>
              <div className="card h-full p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                  <Icon name={m.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">{pick(m.title)}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{pick(m.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <SectionHeader eyebrow={t("languages.eyebrow")} title={t("languages.coursesTitle")} center />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {LANGUAGE_COURSES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <div className="card flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{pick(c.name)}</h3>
                </div>
                <p className="muted mt-2 text-sm leading-relaxed">{pick(c.desc)}</p>
                <div className="mt-4">
                  <p className="text-xs font-medium text-navy-500 dark:text-navy-300">{t("languages.levels")}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.levels.map((lv) => (
                      <span key={lv.en} className="rounded-full bg-navy-100 px-2.5 py-1 text-xs text-navy-700 dark:bg-navy-800 dark:text-navy-100">{pick(lv)}</span>
                    ))}
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-navy-600 dark:text-navy-200">
                  {c.features.map((ft) => (
                    <li key={ft.en} className="flex items-center gap-2">
                      <Icon name="badge-check" className="h-4 w-4 flex-none text-brand-500" />
                      <span>{pick(ft)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t("languages.eyebrow")} title={t("languages.levelsTitle")} center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STUDY_LEVELS.map((s, i) => (
            <Reveal key={s.level.en} delay={i * 0.05}>
              <div className="card h-full p-6">
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(s.level)}</h3>
                <p className="mt-1 text-xs text-brand-600 dark:text-brand-400">{pick(s.duration)}</p>
                <p className="muted mt-2 text-sm leading-relaxed">{pick(s.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
