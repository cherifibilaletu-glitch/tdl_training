import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { CORP_INTRO, CORP_FEATURES, CORP_STEPS } from "../data/corporate";

export default function Corporate() {
  const { t } = useTranslation();
  const { pick } = useLang();
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy-950/80" />
        <div className="container-tdi py-20 sm:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-3 text-brand-200">{t("corporate.eyebrow")}</p>
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl">{pick(CORP_INTRO.title)}</h1>
            <p className="mt-4 text-sm leading-relaxed text-navy-100 sm:text-base">{pick(CORP_INTRO.desc)}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow={t("corporate.featuresEyebrow")} title={t("corporate.featuresTitle")} center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORP_FEATURES.map((f, i) => (
            <Reveal key={f.title.en} delay={i * 0.04}>
              <div className="card h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">{pick(f.title)}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{pick(f.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <SectionHeader eyebrow={t("corporate.stepsEyebrow")} title={t("corporate.stepsTitle")} center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORP_STEPS.map((s, i) => (
            <Reveal key={s.title.en} delay={i * 0.05}>
              <div className="h-full">
                <div className="text-3xl font-bold text-brand-200 dark:text-navy-700">{i + 1}</div>
                <h3 className="mt-2 text-base font-semibold text-navy-900 dark:text-white">{pick(s.title)}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{pick(s.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="rounded-2xl border border-navy-100 bg-navy-50/60 p-8 text-center sm:p-12 dark:border-navy-800 dark:bg-navy-900/40">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl dark:text-white">{t("corporate.ctaTitle")}</h2>
          <p className="muted mx-auto mt-3 max-w-xl text-sm sm:text-base">{t("corporate.ctaSubtitle")}</p>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="btn btn-primary">{t("corporate.ctaBtn")}</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
