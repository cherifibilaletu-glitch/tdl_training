import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { INTRO, VALUES, WHY_US } from "../data/about";

export default function About() {
  const { t } = useTranslation();
  const { pick } = useLang();
  return (
    <>
      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} subtitle={t("about.subtitle")} center />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
              alt=""
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            <p className="text-sm leading-relaxed text-navy-700 sm:text-base dark:text-navy-100">{pick(INTRO.p1)}</p>
            <p className="text-sm leading-relaxed text-navy-700 sm:text-base dark:text-navy-100">{pick(INTRO.p2)}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <SectionHeader eyebrow={t("about.valuesEyebrow")} title={t("about.valuesTitle")} center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title.en} delay={i * 0.05}>
              <div className="card h-full p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                  <Icon name={v.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">{pick(v.title)}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{pick(v.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t("about.whyEyebrow")} title={t("about.whyTitle")} center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title.en} delay={i * 0.04}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                  <Icon name={w.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(w.title)}</h3>
                  <p className="muted mt-1 text-sm leading-relaxed">{pick(w.desc)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
