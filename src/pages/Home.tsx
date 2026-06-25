import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import StatsHexagons from "../components/StatsHexagons";
import SectorCoverflow from "../components/SectorCoverflow";
import ProgramsMagazine from "../components/ProgramsMagazine";
import HexGallery from "../components/HexGallery";
import { useLang } from "../lib/useLang";
import { STATS, DOMAINS, PROGRAMS } from "../data/site";
import { GALLERY as GALLERY_PHOTOS } from "../data/gallery";
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
  { icon: "badge-check", label: { ar: "شهادات معتمدة رسمياً", fr: "Certificats officiels", en: "Officially accredited" } },
  { icon: "users", label: { ar: "مدرّبون خبراء", fr: "Formateurs experts", en: "Expert trainers" } },
  { icon: "briefcase", label: { ar: "مرافقة نحو التوظيف", fr: "Accompagnement vers l'emploi", en: "Career support" } },
  { icon: "building", label: { ar: "فضاءات مجهّزة حديثاً", fr: "Locaux modernes équipés", en: "Modern equipped facilities" } },
];

const ORBIT = {
  browse: { ar: "تصفّح كل البرامج", fr: "Voir tous les programmes", en: "Browse all programs" },
};

const ORBIT_INFO = {
  eyebrow: { ar: "مجالاتنا", fr: "Nos domaines", en: "Our domains" },
  title: {
    ar: "اختر مجالك وابدأ مسارك المهني",
    fr: "Choisissez votre domaine et lancez votre carrière",
    en: "Pick your field and start your career",
  },
  body: {
    ar: "نغطّي أكثر القطاعات طلباً في سوق العمل عبر عدّة مجالات تكوينية. اضغط على المجال الذي يناسبك لاكتشاف برامجه.",
    fr: "Nous couvrons les secteurs les plus demandés à travers plusieurs domaines de formation. Cliquez sur le domaine qui vous intéresse pour découvrir ses programmes.",
    en: "We cover the most in-demand sectors across several training domains. Click the field that interests you to explore its programs.",
  },
  points: [
    { icon: "target", label: { ar: "مجالات تكوينية متخصصة", fr: "Des domaines de formation spécialisés", en: "Specialized training domains" } },
    { icon: "badge-check", label: { ar: "شهادات معتمدة رسمياً", fr: "Certificats officiellement reconnus", en: "Officially accredited certificates" } },
    { icon: "briefcase", label: { ar: "برامج موجّهة نحو سوق العمل", fr: "Des programmes orientés vers l'emploi", en: "Programs geared toward employment" } },
  ],
};

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

const STATS_HEAD = {
  eyebrow: { ar: "أرقامنا", fr: "En chiffres", en: "By the numbers" },
  title: { ar: "ثقة تترجمها الأرقام", fr: "Une confiance traduïte en chiffres", en: "Trust reflected in numbers" },
};

const TESTI = {
  eyebrow: { ar: "آراء المتدربين", fr: "Témoignages", en: "Testimonials" },
  title: { ar: "ماذا يقول متدرّبونا", fr: "Ce que disent nos stagiaires", en: "What our trainees say" },
};

const TESTIMONIALS = [
  { name: "أمين", role: { ar: "خرّيج محاسبة وتسيير", fr: "Diplômé Comptabilité & Gestion", en: "Accounting & Management graduate" }, quote: { ar: "تكوين عملي ومدرّبون محترفون. وجدت عملاً بعد أشهر قليلة من تخرّجي.", fr: "Formation pratique et formateurs professionnels. J'ai trouvé un emploi quelques mois après l'obtention de mon diplôme.", en: "Practical training and professional trainers. I found a job a few months after graduating." } },
  { name: "سارة", role: { ar: "متدرّبة دورات اللغات", fr: "Stagiaire cours de langues", en: "Language courses trainee" }, quote: { ar: "أجواء راقية ومنهجية واضحة. تحسّن مستواي في اللغة بشكل كبير.", fr: "Une ambiance soignée et une méthode claire. Mon niveau de langue s'est nettement amélioré.", en: "A refined atmosphere and a clear method. My language level improved significantly." } },
  { name: "يوسف", role: { ar: "خرّيج إعلام آلي", fr: "Diplômé Informatique", en: "IT graduate" }, quote: { ar: "برامج محيّنة ومرافقة حقيقية. أنصح كل شاب يبحث عن مستقبل مهني.", fr: "Des programmes à jour et un vrai accompagnement. Je le recommande à tout jeune ambitieux.", en: "Up-to-date programs and real support. I recommend it to every ambitious young person." } },
];

export default function Home() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const domains = DOMAINS.filter((d) => d.key !== "all");
  const featured = PROGRAMS.slice(0, 6);
  const homeGallery = GALLERY_PHOTOS.slice(0, 9);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="hero-zoom absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/85 via-navy-950/60 to-navy-900/35" />
        <div className="container-tdi py-24 sm:py-32">
          <Reveal className="max-w-3xl ltr:ml-auto rtl:mr-auto ltr:text-right rtl:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Icon name="badge-check" className="h-4 w-4 text-brand-300" />
              <span>{pick(HERO.badge)}</span>
            </span>
            <h1 className="font-calligraphy text-gold mt-6 text-5xl font-bold leading-[1.7] drop-shadow-[0_4px_22px_rgba(212,175,55,0.4)] sm:text-6xl lg:text-7xl" dir="rtl">معهد التطوير التقني</h1>
            <p className="mt-5 max-w-xl text-xs leading-relaxed text-navy-100 sm:text-sm ltr:ml-auto rtl:mr-auto">
              {t("home.heroSubtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 ltr:justify-end rtl:justify-start">
              <Link to="/register" className="btn btn-primary">{pick(CTA.btn)}</Link>
              <Link to="/programs" className="btn btn-outline border-white/30 text-white hover:bg-white/10">{t("home.heroCta")}</Link>
            </div>
            <div className="mt-7 flex items-center gap-2.5 text-sm text-navy-100 ltr:justify-end rtl:justify-start">
              <span className="text-base tracking-wide text-brand-300">★★★★★</span>
              <span>{pick(HERO.rating)}</span>
            </div>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white to-transparent dark:from-navy-950" />
      </section>

      <section className="relative isolate overflow-hidden border-y border-navy-100 bg-gradient-to-b from-white to-navy-50/60 dark:border-navy-800 dark:from-navy-950 dark:to-navy-900/50">
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="container-tdi relative py-14 sm:py-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {TRUST.map((item, i) => (
              <Reveal key={item.label.en} delay={i * 0.08} className="group">
                <div className="flex h-full items-center gap-3 rounded-2xl border border-navy-100/80 bg-white/70 p-4 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card dark:border-navy-800 dark:bg-navy-900/60">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/25 to-brand-600/10 text-brand-600 ring-1 ring-brand-300/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-brand-300">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-navy-700 dark:text-navy-100">{pick(item.label)}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent" />

          <Reveal className="text-center">
            <span className="eyebrow">{pick(STATS_HEAD.eyebrow)}</span>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-2xl">{pick(STATS_HEAD.title)}</h2>
          </Reveal>

          <Reveal className="mt-12">
            <StatsHexagons stats={STATS} />
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="eyebrow">{pick(ORBIT_INFO.eyebrow)}</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-3xl">{pick(ORBIT_INFO.title)}</h2>
            <p className="muted mt-4 text-sm leading-relaxed sm:text-base">{pick(ORBIT_INFO.body)}</p>
            <ul className="mt-6 space-y-3">
              {ORBIT_INFO.points.map((pt) => (
                <li key={pt.label.en} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">
                    <Icon name={pt.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(pt.label)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/programs" className="btn btn-primary">{pick(ORBIT.browse)}</Link>
              <Link to="/register" className="btn btn-outline">{pick(CTA.btn)}</Link>
            </div>
          </Reveal>

          <Reveal className="flex justify-center">
            <SectorCoverflow domains={domains} images={DOMAIN_IMGS} />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-navy-100/40 dark:bg-navy-950">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow={t("home.programsEyebrow")} title={t("home.programsTitle")} subtitle={t("home.programsSubtitle")} />
          <Link to="/programs" className="link-quiet whitespace-nowrap text-sm">{t("common.viewAll")}</Link>
        </div>
        <Reveal className="mt-10">
          <ProgramsMagazine programs={featured} images={DOMAIN_IMGS} />
        </Reveal>
      </Section>

      <Section>
        <SectionHeader eyebrow={pick(GAL_HEAD.eyebrow)} title={pick(GAL_HEAD.title)} subtitle={pick(GAL_HEAD.subtitle)} center />
        <Reveal className="mt-10">
          <HexGallery items={homeGallery} />
        </Reveal>
        <div className="mt-8 flex justify-center">
          <Link to="/gallery" className="btn btn-outline">{t("common.viewAll")}</Link>
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
