import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { useLang } from "../lib/useLang";
import { CONTACT, STATS } from "../data/site";

const T = {
  call: { ar: "اتصل بنا", fr: "Appelez-nous", en: "Call us" },
  whatsapp: { ar: "واتساب", fr: "WhatsApp", en: "WhatsApp" },
  reassure: {
    ar: "نردّ على مكالماتك ورسائلك في نفس يوم العمل.",
    fr: "Nous vous répondons le jour ouvrable même.",
    en: "We reply to your calls and messages the same working day.",
  },
  directory: {
    ar: "اختر القسم المناسب لك",
    fr: "Choisissez le bon service",
    en: "Choose the right department",
  },
  depTraining: {
    ar: "التكوين المهني",
    fr: "Formation professionnelle",
    en: "Vocational Training",
  },
  depLanguages: {
    ar: "دورات اللغات",
    fr: "Cours de langues",
    en: "Language Courses",
  },
  depCorporate: {
    ar: "تدريب الشركات",
    fr: "Formation entreprises",
    en: "Corporate Training",
  },
  findUs: { ar: "موقعنا", fr: "Nous situer", en: "Find us" },
  hours: { ar: "أوقات العمل", fr: "Horaires", en: "Working hours" },
};

const DEPARTMENTS = [
  { name: T.depTraining, phones: CONTACT.phonesTraining, email: CONTACT.emailTraining },
  { name: T.depLanguages, phones: CONTACT.phoneLanguages, email: CONTACT.emailLanguages },
  { name: T.depCorporate, phones: CONTACT.phoneExtra, email: CONTACT.emailCorporate },
];

const MAP_SRC =
  "https://www.google.com/maps?q=Cit%C3%A9%20460%20logements%2C%20Ouargla%2C%20Alg%C3%A9rie&output=embed";

export default function Contact() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const waLink = "https://wa.me/" + CONTACT.whatsapp;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy-950/85" />
        <div className="container-tdi py-20 text-center sm:py-28">
          <Reveal className="mx-auto max-w-2xl">
            <p className="eyebrow mb-3 text-brand-200">{t("contact.eyebrow")}</p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("contact.title")}</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-100 sm:text-base">{pick(T.reassure)}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={"tel:" + CONTACT.phonesTraining[0]} className="btn btn-primary">
                <Phone size={16} />
                <span>{pick(T.call)}</span>
              </a>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-outline border-white/30 text-white hover:bg-white/10">
                <MessageCircle size={16} />
                <span>{pick(T.whatsapp)}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-950">
        <div className="container-tdi grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label.en} className="text-center">
              <p className="text-2xl font-bold text-navy-900 sm:text-3xl dark:text-white">{s.value}</p>
              <p className="muted mt-1 text-xs sm:text-sm">{pick(s.label)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-tdi">
          <h2 className="text-center text-xl font-bold text-navy-900 dark:text-white">{pick(T.directory)}</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-3">
            {DEPARTMENTS.map((d, i) => (
              <Reveal key={d.name.en} delay={i * 0.06}>
                <div className="card flex h-full flex-col p-6">
                  <h3 className="text-base font-semibold text-navy-900 dark:text-white">{pick(d.name)}</h3>
                  <div className="mt-4 space-y-2">
                    {d.phones.map((p) => (
                      <a key={p} href={"tel:" + p} dir="ltr" className="flex items-center gap-2.5 rounded-lg border border-navy-100 px-3 py-2 text-sm text-navy-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-navy-800 dark:text-navy-100">
                        <Phone size={15} className="flex-none text-brand-500" />
                        <span>{p}</span>
                      </a>
                    ))}
                  </div>
                  <a href={"mailto:" + d.email} className="mt-3 flex items-center gap-2.5 text-sm text-navy-600 transition hover:text-brand-700 dark:text-navy-200">
                    <Mail size={15} className="flex-none text-brand-500" />
                    <span>{d.email}</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-16 dark:bg-navy-900/40 sm:py-20">
        <div className="container-tdi grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-400" />
              <div>
                <p className="text-sm font-semibold text-navy-900 dark:text-white">{pick(T.findUs)}</p>
                <p className="muted mt-1 text-sm leading-relaxed">{pick(CONTACT.address)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-400" />
              <div>
                <p className="text-sm font-semibold text-navy-900 dark:text-white">{pick(T.hours)}</p>
                <p className="muted mt-1 text-sm leading-relaxed">{pick(CONTACT.hours)}</p>
              </div>
            </div>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              <MessageCircle size={16} />
              <span>{pick(T.whatsapp)}</span>
            </a>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-navy-100 shadow-soft dark:border-navy-800">
            <iframe
              title="TDI"
              src={MAP_SRC}
              loading="lazy"
              className="h-[360px] w-full border-0"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
