import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../lib/useLang";
import { STATS, DOMAINS, PROGRAMS } from "../data/site";
import { WHY_US } from "../data/about";

const img = (id: string) =>
  "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=1400&q=80";

const DOMAIN_IMGS = [
  "1454165804606-c3d57bc86b40",
  "1517048676732-d65bc937f952",
  "1497032628192-86f99bcd76bc",
  "1521737711867-e3b97375f902",
  "1456513080510-7bf3a84b82f8",
  "1427504494785-3a9ca7044f45",
  "1543269865-cbf427effbad",
];

const GALLERY = [
  "1523240795612-9a054b0db644",
  "1454165804606-c3d57bc86b40",
  "1497032628192-86f99bcd76bc",
  "1456513080510-7bf3a84b82f8",
  "1521737711867-e3b97375f902",
  "1427504494785-3a9ca7044f45",
];

const GAL_HEAD = {
  eyebrow: { ar: "في صور", fr: "En images", en: "In pictures" },
  title: { ar: "أجواء التكوين في معهدنا", fr: "L'ambiance de formation chez nous", en: "Training life at our institute" },
  subtitle: {
    ar: "لمحات من قاعاتنا وورشاتنا وأنشطة متدرّبينا",
    fr: "Un aperçu de nos salles, ateliers et activités de nos stagiaires",
    en: "A glimpse of our rooms, workshops and trainee activities",
  },
};

const WHYUS_IMG = "1581092160562-40aa08e78837";

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

const WHYUS_HEAD = {
  eyebrow: { ar: "لماذا نحن", fr: "Pourquoi nous", en: "Why us" },
  title: { ar: "لماذا تختار معهد التطوير التقني؟", fr: "Pourquoi choisir TDI ?", en: "Why choose TDI?" },
  subtitle: {
    ar: "مقوّمات تجعل تجربتك التدريبية متميّزة وفعّالة",
    fr: "Des atouts qui rendent votre expérience de formation distinctive et efficace",
    en: "Strengths that make your training experience distinctive and effective",
  },
};

const CTA = {
  title: { ar: "جاهز لتطوير مهاراتك؟", fr: "Prêt à développer vos compétences ?", en: "Ready to grow your skills?" },
  subtitle: {
    ar: "سجّل الآن في البرنامج المناسب لك وسيتواصل معك فريقنا لإتمام تسجيلك.",
    fr: "Inscrivez-vous dès maintenant au programme qui vous convient ; notre équipe vous contactera pour finaliser votre inscription.",
    en: "Register now for the program that suits you and our team will contact you to complete your enrollment.",
  },
  btn: { ar: "سجّل الآن", fr: "S'inscrire maintenant", en: "Register now" },
  btn2: { ar: "تواصل معنا", fr: "Nous contacter", en: "Contact us" },
};

const MORE = { ar: "اعرف المزيد", fr: "En savoir plus", en: "Learn more" };

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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/85 via-navy-950/60 to-navy-900/35" />
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
              <Link to="/register" className="btn btn-primary">{pick(CTA.btn)}</Link>
              <Link to="/programs" className="btn btn-outline border-white/30 text-white hover:bg-white/10">{t("home.heroCta")}</Link>
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
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {domains.map((d, i) => (
            <Reveal key={d.key} delay={i * 0.04}>
              <Link
                to={"/domains/" + d.key}
                className="group relative flex h-36 items-end overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={img(DOMAIN_IMGS[i % DOMAIN_IMGS.length])}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/45 to-transparent" />
                <span className="relative z-10 p-4 text-sm font-semibold leading-snug text-white">{pick(d.label)}</span>
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
              <article className="card group h-full overflow-hidden p-0">
                <div className="h-36 overflow-hidden">
                  <img
                    src={img(DOMAIN_IMGS[i % DOMAIN_IMGS.length])}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(p.title)}</h3>
                  <p className="muted mt-2 text-sm leading-relaxed line-clamp-3">{pick(p.desc)}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700 dark:bg-navy-800 dark:text-brand-300">{pick(p.duration)}</span>
                    <span className="text-navy-500 dark:text-navy-300">{pick(p.price)}</span>
                  </div>
                  <Link to={"/domains/" + p.domain} className="link-quiet mt-4 inline-flex text-sm">{pick(MORE)}</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={pick(GAL_HEAD.eyebrow)} title={pick(GAL_HEAD.title)} subtitle={pick(GAL_HEAD.subtitle)} center />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {GALLERY.map((id, i) => (
            <Reveal key={id} delay={i * 0.05}>
              <div className="group overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={img(id)}
                  alt=""
                  className="h-40 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-48"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60 dark:bg-navy-900/40">
        <SectionHeader eyebrow={pick(WHYUS_HEAD.eyebrow)} title={pick(WHYUS_HEAD.title)} subtitle={pick(WHYUS_HEAD.subtitle)} center />
        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="group h-full overflow-hidden rounded-3xl shadow-soft">
              <img
                src={img(WHYUS_IMG)}
                alt=""
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full"
              />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title.en} delay={i * 0.04}>
                <article className="card h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy-900 dark:text-white">{pick(w.title)}</h3>
                  <p className="muted mt-2 text-sm leading-relaxed">{pick(w.desc)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={pick(TESTI.eyebrow)} title={pick(TESTI.title)} center />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((tm, i) => (
            <Reveal key={tm.name} delay={i * 0.05}>
              <figure className="card h-full p-6">
                <div className="text-base tracking-wide text-brand-400">★★★★★</div>
                <blockquote className="mt-3 text-sm leading-relaxed text-navy-700 dark:text-navy-100">{pick(tm.quote)}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{tm.name.charAt(0)}</span>
                  <span>
                    <span className="block font-semibold text-navy-900 dark:text-white">{tm.name}</span>
                    <span className="muted block text-xs">{pick(tm.role)}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden">
        <img
          src={img("1517048676732-d65bc937f952")}
          alt=""
          className="hero-zoom absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/88 to-navy-900/70" />
        <div className="container-tdi py-16 text-center sm:py-20">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{pick(CTA.title)}</h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-200 sm:text-base">{pick(CTA.subtitle)}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/register" className="btn btn-primary">{pick(CTA.btn)}</Link>
              <Link to="/contact" className="btn btn-outline border-white/30 text-white hover:bg-white/10">{pick(CTA.btn2)}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
