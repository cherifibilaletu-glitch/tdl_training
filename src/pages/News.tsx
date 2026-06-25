import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../lib/useLang";
import { NEWS } from "../data/news";

export default function News() {
  const { t } = useTranslation();
  const { pick, lang } = useLang();
  const locale = lang === "ar" ? "ar-DZ" : lang === "fr" ? "fr-FR" : "en-US";

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("news.eyebrow")}
        title={t("news.title")}
        subtitle={t("news.subtitle")}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n, i) => {
            const dateLabel = new Date(n.date).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <Reveal key={n.id} delay={(i % 3) * 0.05}>
                <article className="card flex h-full flex-col overflow-hidden">
                  <img src={n.image} alt={pick(n.title)} className="aspect-[16/9] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-navy-500 dark:text-navy-300">
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700 dark:bg-navy-800 dark:text-brand-300">{pick(n.tag)}</span>
                      <time dateTime={n.date}>{dateLabel}</time>
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-navy-900 dark:text-white">{pick(n.title)}</h3>
                    <p className="muted mt-2 text-sm leading-relaxed">{pick(n.excerpt)}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
