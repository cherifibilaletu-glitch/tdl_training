import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { STATS, DOMAINS, PROGRAMS } from "../data/site";
import { WHY_US } from "../data/about";

const HERO = {
  badge: {
    ar: "معهد تكوين معتمد · أكثر من 15 سنة خبرة",
    fr: "Institut de formation agréé · plus de 15 ans d'expérience",
    en: "Accredited training institute · 15+ years of experience",
  },
  rating: {
    ar: "تقييم 4.9 / 5 من متدرّبينا",
    fr: "Noté 4,9 / 5 par nos stagiaires",
    en: "Rated 4.9 / 5 by our trainees",
  },
};

const TRUST = [
  {
    icon: "badge-check",
    label: { ar: "شهادات معتمدة رسمياً", fr: "Certificats officiels", en: "Officially accredited" },
  },
  {
    icon: "users",
    label: { ar: "مدرّبون خبراء", fr: "Formateurs experts", en: "Expert trainers" },
  },
  {
    icon: "briefcase",
    label: { ar: "مرافقة نحو التوظيف", fr: "Accompagnement vers l'emploi", en: "Career support" },
  },
  {
    icon: "building",
    label: { ar: "فضاءات مجهّزة حديثاً", fr: "Locaux modernes équipés", en: "Modern equipped facilities" },
  },
];

const TESTI = {
  eyebrow: { ar: "آراء المتدربين", fr: "Témoignages", en: "Testimonials" },
  title: { ar: "ماذا يقول متدرّبونا", fr: "Ce que disent nos stagiaires", en: "What our trainees say" },
};

const TESTIMONIALS = [
  {
    name: "أمين",
    role: { ar: "خرّيج محاسبة وتسيير", fr: "Diplômé Comptabilité & Gestion", en: "Accounting & Management graduate" },
    quote: {
      ar: "تكوين عملي ومدرّبون محترفون. وجدت عملاً بعد أشهر قليلة من تخرّجي.",
      fr: "Formation pratique et formateurs professionnels. J'ai trouvé un emploi quelques mois après l'obtention de mon diplôme.",
      en: "Practical training and professional trainers. I found a job a few months after graduating.",
    },
  },
  {
    name: "سارة",
    role: { ar: "متدرّبة دورات اللغات", fr: "Stagiaire cours de langues", en: "Language courses trainee" },
    quote: {
      ar: "أجواء راقية ومنهجية واضحة. تحسّن مستواي في اللغة بشكل كبير.",
      fr: "Une ambiance soignée et une méthode claire. Mon niveau de langue s'est nettement amélioré.",
      en: "A refined atmosphere and a clear method. My language level improved significantly.",
    },
  },
  {
    name: "يوسف",
    role: { ar: "خرّيج إعلام آلي", fr: "Diplômé Informatique", en: "IT graduate" },
    quote: {
      ar: "برامج محيّنة ومرافقة حقيقية. أنصح كل شاب يبحث عن مستقبل مهني.",
      fr: "Des programmes à jour et un vrai accompagnement. Je le recommande à tout jeune ambitieux.",
      en: "Up-to-date programs and real support. I recommend it to every ambitious young person.",
    },
  },
];

export default function Home() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const domains = DOMAINS.filter((d) => d.key !== "all");
  const featured = PROGRAMS.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="hero-zoom absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/92 via-navy-950/75 to-navy-900/55" />
        <div className="container-tdi py-24 sm:py-32">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Icon name="badge-check" className="h-4 w-4 text-brand-300" />
              <span>{pick(HERO.badge)}</span>
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {t("home.heroTitle")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
              {t("home.heroSubtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/programs" className="btn btn-primary">{t("home.heroCta")}</Link>
              <Link to="/contact" className="btn btn-outline border-white/30 text-white hover:bg-white/10">{t("home.heroCta2")}</Link>
            </div>
            <div className="mt-7 flex items-center gap-2.5 text-sm text-navy-100">
              <span className="text-base tracking-wide text-brand-300">★★★★★</span>
              <span>{pick(HERO.rating)}</span>
            </div>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white to-transparent dark:from-navy-950" />
      </section>

      <section className="border-b border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-950">
        <div className="container-tdi grid grid-cols-2 gap-x-6 gap-y-5 py-8 sm:grid-cols-4">
          {TRUST.map((item, i) => (
            <Reveal key={item.label.en} delay={i * 0.05} className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(item.label)}</span>
            </Reveal>
          ))}
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
              <Link
                to={"/domains/" + d.key}
                className="card flex h-full items-center justify-center p-5 text-center text-sm font-medium text-navy-700 transition hover:border-brand-400 hover:text-brand-700 dark:text-navy-100 dark:hover:text-brand-300"
              >
                {pick(d.label)}
              </Link>
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
                <p className="muted mt-2