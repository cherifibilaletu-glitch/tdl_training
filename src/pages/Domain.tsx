import { useParams, Link } from "react-router-dom";
import { Section } from "../components/Section";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { DOMAINS, PROGRAMS } from "../data/site";
import { DOMAIN_DETAILS } from "../data/domainDetails";
import NotFound from "./NotFound";

const T = {
  eyebrow: { ar: "مجال تكوين", fr: "Domaine de formation", en: "Training field" },
  learn: { ar: "ماذا ستتعلّم", fr: "Ce que vous apprendrez", en: "What you will learn" },
  careers: { ar: "آفاق مهنية", fr: "Débouchés professionnels", en: "Career outcomes" },
  related: { ar: "برامج في هذا المجال", fr: "Programmes dans ce domaine", en: "Programs in this field" },
  browseAll: { ar: "تصفّح كل البرامج", fr: "Voir tous les programmes", en: "Browse all programs" },
  ctaTitle: { ar: "مهتم بهذا المجال؟", fr: "Intéressé par ce domaine ?", en: "Interested in this field?" },
  ctaSub: {
    ar: "تواصل معنا وسنرشدك إلى البرنامج المناسب لمستواك وأهدافك.",
    fr: "Contactez-nous et nous vous orienterons vers le programme adapté à votre niveau et à vos objectifs.",
    en: "Contact us and we'll guide you to the program that fits your level and goals.",
  },
  contact: { ar: "اتصل بنا", fr: "Nous contacter", en: "Contact us" },
  duration: { ar: "المدة", fr: "Durée", en: "Duration" },
  cert: { ar: "الشهادة", fr: "Certificat", en: "Certificate" },
};

export default function Domain() {
  const { key = "" } = useParams();
  const { pick } = useLang();
  const domain = DOMAINS.find((d) => d.key === key);
  const detail = DOMAIN_DETAILS[key];
  if (!domain || !detail) return <NotFound />;
  const programs = PROGRAMS.filter((p) => p.domain === key);

  return (
    <>
      <PageHero
        image={detail.image}
        eyebrow={pick(T.eyebrow)}
        title={pick(domain.label)}
        subtitle={pick(detail.intro)}
      />

      <Section>
        <h2 className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl dark:text-white">{pick(T.learn)}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {detail.topics.map((tp, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="card flex h-full items-start gap-3 p-5">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                  <Icon name="badge-check" className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(tp)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <h2 className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl dark:text-white">{pick(T.careers)}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {detail.careers.map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 dark:border-navy-800 dark:bg-navy-900">
                <Icon name="briefcase" className="h-5 w-5 flex-none text-brand-600 dark:text-brand-400" />
                <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(c)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {programs.length > 0 ? (
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl dark:text-white">{pick(T.related)}</h2>
            <Link to="/programs" className="link-quiet whitespace-nowrap text-sm">{pick(T.browseAll)}</Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04}>
                <article className="card h-full p-6">
                  <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(p.title)}</h3>
                  <p className="muted mt-2 text-sm leading-relaxed">{pick(p.desc)}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy-500 dark:text-navy-300">
                    <span>{pick(T.duration)}: {pick(p.duration)}</span>
                    <span>{pick(T.cert)}: {pick(p.cert)}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <Reveal className="rounded-2xl border border-navy-100 bg-navy-50/60 p-8 text-center sm:p-12 dark:border-navy-800 dark:bg-navy-900/40">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl dark:text-white">{pick(T.ctaTitle)}</h2>
          <p className="muted mx-auto mt-3 max-w-xl text-sm sm:text-base">{pick(T.ctaSub)}</p>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="btn btn-primary">{pick(T.contact)}</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
