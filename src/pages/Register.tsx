import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  User,
  Phone,
  GraduationCap,
  FileText,
  ChevronDown,
  UploadCloud,
  CheckCircle2,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Send,
  Loader2,
  MessageCircle,
  X,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { Section } from "../components/Section";
import Reveal from "../components/Reveal";
import { useLang } from "../lib/useLang";
import { PROGRAMS, DOMAINS, LEVELS, CONTACT } from "../data/site";

// To also receive registrations by EMAIL with the attached documents,
// create a FREE access key at https://web3forms.com (just enter your email,
// no account needed) and paste it between the quotes below. While it stays
// empty, every application is sent through WhatsApp automatically.
const WEB3FORMS_ACCESS_KEY = "";

const HERO_IMG =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80";

const inputClass =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 shadow-sm outline-none transition placeholder:text-navy-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-navy-700 dark:bg-navy-900 dark:text-white dark:focus:ring-brand-900/30";
const labelClass =
  "mb-1.5 flex items-center gap-1 text-sm font-medium text-navy-700 dark:text-navy-200";

const T = {
  eyebrow: { ar: "التسجيل", fr: "Inscription", en: "Registration" },
  title: { ar: "استمارة التسجيل في المعهد", fr: "Formulaire d'inscription", en: "Institute Registration" },
  subtitle: {
    ar: "املأ بياناتك بدقّة وسيتواصل معك فريقنا لتأكيد تسجيلك في البرنامج الذي اخترته.",
    fr: "Remplissez vos informations avec précision ; notre équipe vous contactera pour confirmer votre inscription au programme choisi.",
    en: "Fill in your details accurately and our team will contact you to confirm your enrollment in the chosen program.",
  },
  trustSecure: { ar: "بياناتك تبقى سرية وآمنة", fr: "Vos données restent confidentielles", en: "Your data stays confidential" },
  trustFast: { ar: "ردّ خلال يوم عمل واحد", fr: "Réponse sous un jour ouvrable", en: "Reply within one working day" },
  trustFree: { ar: "التسجيل المبدئي مجاني", fr: "Préinscription gratuite", en: "Free pre-registration" },
  sec1: { ar: "المعلومات الشخصية", fr: "Informations personnelles", en: "Personal Information" },
  sec1sub: { ar: "كما تظهر في وثائقك الرسمية", fr: "Telles qu'elles figurent sur vos documents officiels", en: "As they appear on your official documents" },
  sec2: { ar: "معلومات الاتصال", fr: "Coordonnées", en: "Contact Information" },
  sec2sub: { ar: "حتى نتمكّن من التواصل معك", fr: "Pour que nous puissions vous joindre", en: "So we can reach you" },
  sec3: { ar: "البرنامج المطلوب", fr: "Programme souhaité", en: "Desired Program" },
  sec3sub: { ar: "اختر المجال ثمّ البرنامج المناسب", fr: "Choisissez le domaine puis le programme", en: "Choose the field then the program" },
  sec4: { ar: "الوثائق", fr: "Documents", en: "Documents" },
  sec4sub: { ar: "أرفق صور بطاقة التعريف والشهادات (اختياري)", fr: "Joignez la pièce d'identité et les diplômes (optionnel)", en: "Attach ID and diplomas (optional)" },
  firstName: { ar: "الاسم", fr: "Prénom", en: "First name" },
  lastName: { ar: "اللقب", fr: "Nom", en: "Last name" },
  birthDate: { ar: "تاريخ الميلاد", fr: "Date de naissance", en: "Date of birth" },
  gender: { ar: "الجنس", fr: "Genre", en: "Gender" },
  male: { ar: "ذكر", fr: "Homme", en: "Male" },
  female: { ar: "أنثى", fr: "Femme", en: "Female" },
  education: { ar: "المستوى الدراسي", fr: "Niveau scolaire", en: "Education level" },
  phone: { ar: "رقم الهاتف", fr: "Téléphone", en: "Phone number" },
  email: { ar: "البريد الإلكتروني", fr: "E-mail", en: "Email" },
  city: { ar: "المدينة / الولاية", fr: "Ville / Wilaya", en: "City / Wilaya" },
  address: { ar: "العنوان", fr: "Adresse", en: "Address" },
  domain: { ar: "المجال", fr: "Domaine", en: "Field" },
  program: { ar: "البرنامج", fr: "Programme", en: "Program" },
  schedule: { ar: "التوقيت المفضّل", fr: "Horaire préféré", en: "Preferred schedule" },
  morning: { ar: "صباحي", fr: "Matin", en: "Morning" },
  evening: { ar: "مسائي", fr: "Soir", en: "Evening" },
  weekend: { ar: "نهاية الأسبوع", fr: "Week-end", en: "Weekend" },
  notes: { ar: "ملاحظات إضافية", fr: "Remarques", en: "Additional notes" },
  choose: { ar: "اختر...", fr: "Choisir...", en: "Choose..." },
  dropFiles: { ar: "اضغط لاختيار الملفات أو اسحبها إلى هنا", fr: "Cliquez pour choisir des fichiers ou glissez-les ici", en: "Click to choose files or drag them here" },
  fileHint: { ar: "صور أو PDF — بطاقة التعريف، الشهادات، صورة شمسية", fr: "Images ou PDF — pièce d'identité, diplômes, photo", en: "Images or PDF — ID, diplomas, photo" },
  consent: { ar: "أؤكّد أنّ المعلومات المُدخلة صحيحة وأوافق على أن يتواصل معي المعهد.", fr: "Je confirme que les informations sont exactes et j'accepte d'être contacté par l'institut.", en: "I confirm the information is accurate and agree to be contacted by the institute." },
  submit: { ar: "إرسال طلب التسجيل", fr: "Envoyer la demande", en: "Submit registration" },
  sending: { ar: "جارٍ الإرسال...", fr: "Envoi...", en: "Sending..." },
  required: { ar: "هذا الحقل مطلوب", fr: "Ce champ est requis", en: "This field is required" },
  consentRequired: { ar: "يرجى الموافقة للمتابعة", fr: "Veuillez accepter pour continuer", en: "Please accept to continue" },
  successTitle: { ar: "تمّ استلام طلبك بنجاح", fr: "Votre demande a bien été reçue", en: "Your request was received" },
  successMsg: {
    ar: "شكراً لتسجيلك. سيتواصل معك فريق المعهد قريباً لتأكيد التسجيل واستكمال الوثائق.",
    fr: "Merci pour votre inscription. L'équipe de l'institut vous contactera bientôt pour confirmer et compléter votre dossier.",
    en: "Thank you for registering. The institute's team will contact you soon to confirm and complete your file.",
  },
  waNote: {
    ar: "افتح محادثة واتساب التي ظهرت لك وأرسل الرسالة، ثمّ أرفق صور وثائقك في نفس المحادثة.",
    fr: "Ouvrez la conversation WhatsApp affichée et envoyez le message, puis joignez vos documents dans la même conversation.",
    en: "Open the WhatsApp chat that appeared and send the message, then attach your documents in the same chat.",
  },
  openWa: { ar: "فتح واتساب", fr: "Ouvrir WhatsApp", en: "Open WhatsApp" },
  another: { ar: "تسجيل طلب آخر", fr: "Nouvelle demande", en: "Submit another" },
  errorMsg: { ar: "تعذّر الإرسال، يرجى المحاولة مجدداً أو التواصل عبر واتساب.", fr: "Échec de l'envoi, réessayez ou contactez-nous via WhatsApp.", en: "Sending failed, please try again or contact us via WhatsApp." },
};

const TRUST = [
  { icon: <ShieldCheck className="h-5 w-5" />, label: T.trustSecure },
  { icon: <Clock className="h-5 w-5" />, label: T.trustFast },
  { icon: <BadgeCheck className="h-5 w-5" />, label: T.trustFree },
];

function FormSection({
  step,
  icon,
  title,
  subtitle,
  children,
}: {
  step: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="card p-6 sm:p-8">
      <div className="mb-6 flex items-start gap-4">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-600 text-base font-bold text-white">{step}</span>
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-navy-900 dark:text-white">
            <span className="text-brand-600 dark:text-brand-400">{icon}</span>
            <span>{title}</span>
          </h2>
          <p className="muted mt-0.5 text-sm">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function Register() {
  const { pick } = useLang();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    education: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    domain: "",
    program: "",
    schedule: "",
    notes: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [waLink, setWaLink] = useState("");

  const domains = DOMAINS.filter((d) => d.key !== "all");
  const levels = LEVELS.filter((l) => l.key !== "all");
  const availablePrograms = form.domain
    ? PROGRAMS.filter((p) => p.domain === form.domain)
    : PROGRAMS;

  const set = (name: string, value: string) =>
    setForm((f) => ({ ...f, [name]: value }));

  const onDomain = (value: string) =>
    setForm((f) => ({ ...f, domain: value, program: "" }));

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  };
  const removeFile = (idx: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== idx));

  const genderLabel = () =>
    form.gender === "male" ? pick(T.male) : form.gender === "female" ? pick(T.female) : "";
  const scheduleLabel = () =>
    form.schedule === "morning"
      ? pick(T.morning)
      : form.schedule === "evening"
      ? pick(T.evening)
      : form.schedule === "weekend"
      ? pick(T.weekend)
      : "";

  const buildMessage = () => {
    const program = PROGRAMS.find((p) => p.id === form.program);
    const domainObj = DOMAINS.find((d) => d.key === form.domain);
    const eduObj = LEVELS.find((l) => l.key === form.education);
    const rows: string[] = [];
    rows.push("📝 " + pick(T.title));
    rows.push("");
    rows.push("👤 " + pick(T.sec1));
    rows.push(pick(T.firstName) + ": " + form.firstName);
    rows.push(pick(T.lastName) + ": " + form.lastName);
    if (form.birthDate) rows.push(pick(T.birthDate) + ": " + form.birthDate);
    if (genderLabel()) rows.push(pick(T.gender) + ": " + genderLabel());
    if (eduObj) rows.push(pick(T.education) + ": " + pick(eduObj.label));
    rows.push("");
    rows.push("📞 " + pick(T.sec2));
    rows.push(pick(T.phone) + ": " + form.phone);
    if (form.email) rows.push(pick(T.email) + ": " + form.email);
    rows.push(pick(T.city) + ": " + form.city);
    if (form.address) rows.push(pick(T.address) + ": " + form.address);
    rows.push("");
    rows.push("🎓 " + pick(T.sec3));
    if (domainObj) rows.push(pick(T.domain) + ": " + pick(domainObj.label));
    rows.push(pick(T.program) + ": " + (program ? pick(program.title) : "-"));
    if (scheduleLabel()) rows.push(pick(T.schedule) + ": " + scheduleLabel());
    if (files.length > 0) rows.push(pick(T.sec4) + ": " + files.length);
    if (form.notes) {
      rows.push("");
      rows.push(pick(T.notes) + ": " + form.notes);
    }
    return rows.join("\n");
  };

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.firstName.trim()) e.firstName = true;
    if (!form.lastName.trim()) e.lastName = true;
    if (!form.phone.trim()) e.phone = true;
    if (!form.city.trim()) e.city = true;
    if (!form.program) e.program = true;
    if (!consent) e.consent = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      const first = document.querySelector("[data-error='true']");
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const message = buildMessage();
    if (WEB3FORMS_ACCESS_KEY) {
      setStatus("sending");
      try {
        const data = new FormData();
        data.append("access_key", WEB3FORMS_ACCESS_KEY);
        data.append("subject", "طلب تسجيل جديد - TDI");
        data.append("from_name", (form.firstName + " " + form.lastName).trim());
        data.append("phone", form.phone);
        if (form.email) data.append("email", form.email);
        data.append("message", message);
        files.forEach((file, idx) =>
          data.append("attachment_" + (idx + 1), file, file.name),
        );
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
        const json = await res.json();
        setStatus(json.success ? "success" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      const url =
        "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(message);
      setWaLink(url);
      window.open(url, "_blank");
      setStatus("success");
    }
  };

  const reset = () => {
    setForm({
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      education: "",
      phone: "",
      email: "",
      city: "",
      address: "",
      domain: "",
      program: "",
      schedule: "",
      notes: "",
    });
    setFiles([]);
    setConsent(false);
    setErrors({});
    setWaLink("");
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <>
        <PageHero image={HERO_IMG} eyebrow={pick(T.eyebrow)} title={pick(T.successTitle)} />
        <Section>
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-navy-900 dark:text-white">{pick(T.successTitle)}</h2>
            <p className="muted mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base">{pick(T.successMsg)}</p>
            {waLink ? (
              <div className="mx-auto mt-6 max-w-md rounded-xl border border-brand-100 bg-brand-50/70 p-4 text-sm text-navy-700 dark:border-navy-800 dark:bg-navy-900 dark:text-navy-100">
                {pick(T.waNote)}
              </div>
            ) : null}
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {waLink ? (
                <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <MessageCircle size={16} />
                  <span>{pick(T.openWa)}</span>
                </a>
              ) : null}
              <button type="button" onClick={reset} className="btn btn-outline">{pick(T.another)}</button>
            </div>
          </Reveal>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHero image={HERO_IMG} eyebrow={pick(T.eyebrow)} title={pick(T.title)} subtitle={pick(T.subtitle)} />

      <section className="border-b border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-950">
        <div className="container-tdi grid grid-cols-1 gap-x-6 gap-y-4 py-8 sm:grid-cols-3">
          {TRUST.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400">{item.icon}</span>
              <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(item.label)}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <Section>
        <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-3xl space-y-6">
          <FormSection step="1" icon={<User className="h-5 w-5" />} title={pick(T.sec1)} subtitle={pick(T.sec1sub)}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div data-error={errors.firstName ? "true" : "false"}>
                <label className={labelClass}>{pick(T.firstName)}<span className="text-red-500">*</span></label>
                <input value={form.firstName} onChange={(e) => set("firstName", e.target.value)} className={inputClass + (errors.firstName ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")} />
                {errors.firstName ? <p className="mt-1 text-xs text-red-500">{pick(T.required)}</p> : null}
              </div>
              <div data-error={errors.lastName ? "true" : "false"}>
                <label className={labelClass}>{pick(T.lastName)}<span className="text-red-500">*</span></label>
                <input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} className={inputClass + (errors.lastName ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")} />
                {errors.lastName ? <p className="mt-1 text-xs text-red-500">{pick(T.required)}</p> : null}
              </div>
              <div>
                <label className={labelClass}>{pick(T.birthDate)}</label>
                <input type="date" value={form.birthDate} onChange={(e) => set("birthDate", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>{pick(T.gender)}</label>
                <div className="relative">
                  <select value={form.gender} onChange={(e) => set("gender", e.target.value)} className={inputClass + " appearance-none pe-10"}>
                    <option value="">{pick(T.choose)}</option>
                    <option value="male">{pick(T.male)}</option>
                    <option value="female">{pick(T.female)}</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>{pick(T.education)}</label>
                <div className="relative">
                  <select value={form.education} onChange={(e) => set("education", e.target.value)} className={inputClass + " appearance-none pe-10"}>
                    <option value="">{pick(T.choose)}</option>
                    {levels.map((l) => (
                      <option key={l.key} value={l.key}>{pick(l.label)}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection step="2" icon={<Phone className="h-5 w-5" />} title={pick(T.sec2)} subtitle={pick(T.sec2sub)}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div data-error={errors.phone ? "true" : "false"}>
                <label className={labelClass}>{pick(T.phone)}<span className="text-red-500">*</span></label>
                <input type="tel" dir="ltr" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass + (errors.phone ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")} placeholder="+213 ..." />
                {errors.phone ? <p className="mt-1 text-xs text-red-500">{pick(T.required)}</p> : null}
              </div>
              <div>
                <label className={labelClass}>{pick(T.email)}</label>
                <input type="email" dir="ltr" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} placeholder="example@email.com" />
              </div>
              <div data-error={errors.city ? "true" : "false"}>
                <label className={labelClass}>{pick(T.city)}<span className="text-red-500">*</span></label>
                <input value={form.city} onChange={(e) => set("city", e.target.value)} className={inputClass + (errors.city ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")} />
                {errors.city ? <p className="mt-1 text-xs text-red-500">{pick(T.required)}</p> : null}
              </div>
              <div>
                <label className={labelClass}>{pick(T.address)}</label>
                <input value={form.address} onChange={(e) => set("address", e.target.value)} className={inputClass} />
              </div>
            </div>
          </FormSection>

          <FormSection step="3" icon={<GraduationCap className="h-5 w-5" />} title={pick(T.sec3)} subtitle={pick(T.sec3sub)}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>{pick(T.domain)}</label>
                <div className="relative">
                  <select value={form.domain} onChange={(e) => onDomain(e.target.value)} className={inputClass + " appearance-none pe-10"}>
                    <option value="">{pick(T.choose)}</option>
                    {domains.map((d) => (
                      <option key={d.key} value={d.key}>{pick(d.label)}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                </div>
              </div>
              <div data-error={errors.program ? "true" : "false"}>
                <label className={labelClass}>{pick(T.program)}<span className="text-red-500">*</span></label>
                <div className="relative">
                  <select value={form.program} onChange={(e) => set("program", e.target.value)} className={inputClass + " appearance-none pe-10" + (errors.program ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")}>
                    <option value="">{pick(T.choose)}</option>
                    {availablePrograms.map((p) => (
                      <option key={p.id} value={p.id}>{pick(p.title)}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                </div>
                {errors.program ? <p className="mt-1 text-xs text-red-500">{pick(T.required)}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>{pick(T.schedule)}</label>
                <div className="relative">
                  <select value={form.schedule} onChange={(e) => set("schedule", e.target.value)} className={inputClass + " appearance-none pe-10"}>
                    <option value="">{pick(T.choose)}</option>
                    <option value="morning">{pick(T.morning)}</option>
                    <option value="evening">{pick(T.evening)}</option>
                    <option value="weekend">{pick(T.weekend)}</option>
                  </select>
                  <ChevronDown className="pointer-events-none absol