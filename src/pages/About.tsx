import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { INTRO, VALUES, WHY_US } from "../data/about";

const img = (id: string) =>
  "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=1400&q=80";

const VIDEO_HEAD = {
  eyebrow: { ar: "فيديو تعريفي", fr: "Vidéo de présentation", en: "Introduction video" },
  title: {
    ar: "تعرّف على معهد التطوير التقني",
    fr: "Découvrez l'Institut de Développement Technique",
    en: "Get to know the Technical Development Institute",
  },
  subtitle: {
    ar: "جولة قصيرة داخل معهدنا وأجواء التكوين فيه",
    fr: "Une courte visite de notre institut et de son ambiance de formation",
    en: "A short tour inside our institute and its training atmosphere",
  },
};

const STORY = {
  eyebrow: { ar: "قصتنا", fr: "Notre histoire", en: "Our story" },
  title: {
    ar: "خبرة متجدّدة في خدمة المتدرّبين",
    fr: "Une expertise renouvelée au service des stagiaires",
    en: "Renewed expertise serving our trainees",
  },
  p1: {
    ar: "منذ تأسيسه ومعهد التطوير التقني يرافق الشباب والمؤسسات في بناء الكفاءات، من خلال برامج عملية تجمع بين المعرفة النظرية والتطبيق الميداني.",
    fr: "Depuis sa création, l'Institut de Développement Technique accompagne les jeunes et les entreprises dans le développement des compétences, grâce à des programmes pratiques alliant savoir théorique et application sur le terrain.",
    en: "Since its founding, the Technical Development Institute has supported youth and organizations in building skills through practical programs that combine theory with hands-on application.",
  },
  p2: {
    ar: "نعتمد على فريق من المدرّبين الخبراء وفضاءات مجهّزة حديثاً، مع مواكبة دائمة لمتطلبات سوق العمل ومرافقة المتدرّب حتّى التوظيف.",
    fr: "Nous nous appuyons sur une équipe de formateurs experts et des espaces modernes équipés, avec une veille permanente sur les besoins du marché du travail et un accompagnement jusqu'à l'emploi.",
    en: "We rely on a team of expert trainers and modern, well-equipped facilities, with constant attention to labor-market needs and support for trainees all the way to employment.",
  },
};

const ABOUT_STATS = [
  { value: "+15", label: { ar: "سنة خبرة", fr: "ans d'expérience", en: "years of experience" } },
  { value: "+5000", label: { ar: "متدرّب", fr: "stagiaires formés", en: "trainees" } },
  { value: "+30", label: { ar: "برنامج تكويني", fr: "programmes", en: "training programs" } },
  { value: "+40", label: { ar: "مدرّب خبير", fr: "formateurs experts", en: "expert trainers" } },
];

const ABOUT_CTA = {
  title: { ar: "هل تحتاج برنامجاً لمؤسستك؟", fr: "Besoin d'un programme pour votre organisation ?", en: "Need a program for your organization?" },
  subtitle: {
    ar: "تواصل معنا لتصميم حل تدريبي يناسب احتياجاتك.",
    fr: "Contactez-nous pour concevoir une solution de formation adaptée à vos besoins.",
    en: "Contact us to design a training solution that fits your needs.",
  },
  quote: { ar: "اطلب عرض سعر", fr: "Demander un devis", en: "Request a quote" },
  register: { ar: "سجّل الآن", fr: "S'inscrire maintenant", en: "Register now" },
};

export default function About() {
  const { t } = useTranslation();
  const { pick } = useLang();
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      <Section>
        <SectionHeader eyebrow={pick(VIDEO_HEAD.eyebrow)} title={pick(VIDEO_HEAD.title)} subtitle={pick(VIDEO_HEAD.subtitle)} center />
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy-100 dark:ring-navy-800">
            <video
              controls
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80"
              className="aspect-video w-full bg-navy-950"
            >
              <source src="/tdi-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={img("1523240795612-9a054b0db644")}
              alt=""
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            <p className="text-sm leading-relaxed text-navy-700 sm:text-base dark:text-navy-100">{pick(INTRO.p1)}</p>
            <p className="text-sm leading-relaxed text-navy-700 sm:text-base dark:text-navy-100">{pick(INTRO.p2)}</p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal delay={0.1} className="order-2 space-y-4 lg:order-1">
            <p className="eyebrow text-brand-600 dark:text-brand-400">{pick(STORY.eyebrow)}</p>
            <h2 className="text-xl font-bold text-navy-900 sm:text-2xl dark:text-white">{pick(STORY.title)}</h2>
            <p className="text-sm leading-relaxed text-navy-700 sm:text-base dark:text-navy-100">{pick(STORY.p1)}</p>
            <p className="text-sm leading-relaxed text-navy-700 sm:text-base dark:text-navy-100">{pick(STORY.p2)}</p>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <img
              src={img("1581092160562-40aa08e78837")}
              alt=""
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-navy-100 dark:border-navy-800">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {ABOUT_STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.05} className="text-center">
              <div className="text-3xl font-bold text-brand-600 sm:text-4xl dark:text-brand-400">{s.value}</div>
              <div className="muted mt-1 text-sm">{pick(s.label)}</div>
            </Reveal>
          ))}
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

      <Section>
        <Reveal className="rounded-2xl border border-navy-100 bg-navy-50/60 p-8 text-center sm:p-12 dark:border-navy-800 dark:bg-navy-900/40">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl dark:text-white">{pick(ABOUT_CTA.title)}</h2>
          <p className="muted mx-auto mt-3 max-w-xl text-sm sm:text-base">{pick(ABOUT_CTA.subtitle)}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-primary">{pick(ABOUT_CTA.quote)}</Link>
            <Link to="/register" className="btn btn-outline">{pick(ABOUT_CTA.register)}</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
