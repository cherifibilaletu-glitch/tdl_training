import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { STATS, DOMAINS, PROGRAMS } from "../data/site";
import { WHY_US } from "../data/about";

export default function Home() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const domains = DOMAINS.filter((d) => d.key !== "all");
  const featured = PROGRAMS.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy-950/80" />
        <div className="container-tdi py-24 sm:py-32">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-3 text-brand-200">{t("home.heroEyebrow")}</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {t("home.heroTitle")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
              {t("home.heroSubtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/programs" className="btn btn-primary">{t("home.heroCta")}</Link>
              <Link to="/contact" className="btn btn-outline border-white/30 text-white">{t("home.heroCta2")}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="border-b border-navy-100 dark:border-navy-800">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.05} className="text-center">
              <div className="text-3xl font-bold text-brand-600 sm:text-4xl dark:text-brand-400">{s.value}</div>
              <div className="muted mt-1 text-sm">{pick(s.label)}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t("home.domainsEyebrow")} title={t("home.domainsTitle")} subtitle={t("home.domainsSubtitle")} center />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {domains.map((d, i) => (
            <Reveal key={d.key} delay={i * 0.03}>
              <div className="card flex h-full items-center justify-center p-5 text-center text-sm font-medium text-navy-700 dark:text-navy-100">
                {pick(d.label)}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow={t("home.programsEyebrow")} title={t("home.programsTitle")} subtitle={t("home.programsSubtitle")} />
          <Link to="/programs" className="link-quiet whitespace-nowrap text-sm">{t("common.viewAll")}</Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <article className="card h-full p-6">
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(p.title)}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{pick(p.desc)}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy-500 dark:text-navy-300">
                  <span>{t("programs.duration")}: {pick(p.duration)}</span>
                  <span>{t("programs.cert")}: {pick(p.cert)}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t("home.whyEyebrow")} title={t("home.whyTitle")} subtitle={t("home.whySubtitle")} center />
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

      <Section>
        <Reveal className="rounded-2xl border border-navy-100 bg-navy-50/60 p-8 text-center sm:p-12 dark:border-navy-800 dark:bg-navy-900/40">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl dark:text-white">{t("home.ctaTitle")}</h2>
          <p className="muted mx-auto mt-3 max-w-xl text-sm sm:text-base">{t("home.ctaSubtitle")}</p>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="btn btn-primary">{t("home.ctaBtn")}</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
