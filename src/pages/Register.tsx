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
import { RT } from "../data/registerCopy";

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
const errClass = inputClass + " border-red-400 focus:border-red-500 focus:ring-red-100";

type Opt = { value: string; label: string };

function Section1({
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

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: boolean;
  errText: string;
  type?: string;
  dir?: string;
  placeholder?: string;
  full?: boolean;
}) {
  return (
    <div className={props.full ? "sm:col-span-2" : ""} data-error={props.error ? "true" : "false"}>
      <label className={labelClass}>
        <span>{props.label}</span>
        {props.required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        type={props.type || "text"}
        dir={props.dir}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className={props.error ? errClass : inputClass}
      />
      {props.error ? <p className="mt-1 text-xs text-red-500">{props.errText}</p> : null}
    </div>
  );
}

function Picker(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: Opt[];
  required?: boolean;
  error?: boolean;
  errText: string;
  full?: boolean;
}) {
  return (
    <div className={props.full ? "sm:col-span-2" : ""} data-error={props.error ? "true" : "false"}>
      <label className={labelClass}>
        <span>{props.label}</span>
        {props.required ? <span className="text-red-500">*</span> : null}
      </label>
      <div className="relative">
        <select
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          className={(props.error ? errClass : inputClass) + " appearance-none pe-10"}
        >
          <option value="">{props.placeholder}</option>
          {props.options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
      </div>
      {props.error ? <p className="mt-1 text-xs text-red-500">{props.errText}</p> : null}
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

  const req = pick(RT.required);
  const set = (name: string, value: string) => setForm((f) => ({ ...f, [name]: value }));
  const onDomain = (value: string) => setForm((f) => ({ ...f, domain: value, program: "" }));
  const onFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  };
  const removeFile = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const genderLabel = () =>
    form.gender === "male" ? pick(RT.male) : form.gender === "female" ? pick(RT.female) : "";
  const scheduleLabel = () =>
    form.schedule === "morning"
      ? pick(RT.morning)
      : form.schedule === "evening"
      ? pick(RT.evening)
      : form.schedule === "weekend"
      ? pick(RT.weekend)
      : "";

  const buildMessage = () => {
    const program = PROGRAMS.find((p) => p.id === form.program);
    const domainObj = DOMAINS.find((d) => d.key === form.domain);
    const eduObj = LEVELS.find((l) => l.key === form.education);
    const rows: string[] = [];
    rows.push("📝 " + pick(RT.title));
    rows.push("");
    rows.push("👤 " + pick(RT.sec1));
    rows.push(pick(RT.firstName) + ": " + form.firstName);
    rows.push(pick(RT.lastName) + ": " + form.lastName);
    if (form.birthDate) rows.push(pick(RT.birthDate) + ": " + form.birthDate);
    if (genderLabel()) rows.push(pick(RT.gender) + ": " + genderLabel());
    if (eduObj) rows.push(pick(RT.education) + ": " + pick(eduObj.label));
    rows.push("");
    rows.push("📞 " + pick(RT.sec2));
    rows.push(pick(RT.phone) + ": " + form.phone);
    if (form.email) rows.push(pick(RT.email) + ": " + form.email);
    rows.push(pick(RT.city) + ": " + form.city);
    if (form.address) rows.push(pick(RT.address) + ": " + form.address);
    rows.push("");
    rows.push("🎓 " + pick(RT.sec3));
    if (domainObj) rows.push(pick(RT.domain) + ": " + pick(domainObj.label));
    rows.push(pick(RT.program) + ": " + (program ? pick(program.title) : "-"));
    if (scheduleLabel()) rows.push(pick(RT.schedule) + ": " + scheduleLabel());
    if (files.length > 0) rows.push(pick(RT.sec4) + ": " + files.length);
    if (form.notes) {
      rows.push("");
      rows.push(pick(RT.notes) + ": " + form.notes);
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
        files.forEach((file, idx) => data.append("attachment_" + (idx + 1), file, file.name));
        const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
        const json = await res.json();
        setStatus(json.success ? "success" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      const url = "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(message);
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
        <PageHero image={HERO_IMG} eyebrow={pick(RT.eyebrow)} title={pick(RT.successTitle)} />
        <Section>
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-navy-900 dark:text-white">{pick(RT.successTitle)}</h2>
            <p className="muted mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base">{pick(RT.successMsg)}</p>
            {waLink ? (
              <div className="mx-auto mt-6 max-w-md rounded-xl border border-brand-100 bg-brand-50/70 p-4 text-sm text-navy-700 dark:border-navy-800 dark:bg-navy-900 dark:text-navy-100">
                {pick(RT.waNote)}
              </div>
            ) : null}
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {waLink ? (
                <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <MessageCircle size={16} />
                  <span>{pick(RT.openWa)}</span>
                </a>
              ) : null}
              <button type="button" onClick={reset} className="btn btn-outline">{pick(RT.another)}</button>
            </div>
          </Reveal>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHero image={HERO_IMG} eyebrow={pick(RT.eyebrow)} title={pick(RT.title)} subtitle={pick(RT.subtitle)} />

      <section className="border-b border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-950">
        <div className="container-tdi grid grid-cols-1 gap-x-6 gap-y-4 py-8 sm:grid-cols-3">
          <Reveal className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400"><ShieldCheck className="h-5 w-5" /></span>
            <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(RT.trustSecure)}</span>
          </Reveal>
          <Reveal delay={0.05} className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400"><Clock className="h-5 w-5" /></span>
            <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(RT.trustFast)}</span>
          </Reveal>
          <Reveal delay={0.1} className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-navy-800 dark:text-brand-400"><BadgeCheck className="h-5 w-5" /></span>
            <span className="text-sm font-medium text-navy-700 dark:text-navy-100">{pick(RT.trustFree)}</span>
          </Reveal>
        </div>
      </section>

      <Section>
        <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-3xl space-y-6">
          <Section1 step="1" icon={<User className="h-5 w-5" />} title={pick(RT.sec1)} subtitle={pick(RT.sec1sub)}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={pick(RT.firstName)} value={form.firstName} onChange={(v) => set("firstName", v)} required error={errors.firstName} errText={req} />
              <Field label={pick(RT.lastName)} value={form.lastName} onChange={(v) => set("lastName", v)} required error={errors.lastName} errText={req} />
              <Field label={pick(RT.birthDate)} type="date" value={form.birthDate} onChange={(v) => set("birthDate", v)} errText={req} />
              <Picker label={pick(RT.gender)} value={form.gender} onChange={(v) => set("gender", v)} placeholder={pick(RT.choose)} errText={req} options={[{ value: "male", label: pick(RT.male) }, { value: "female", label: pick(RT.female) }]} />
              <Picker full label={pick(RT.education)} value={form.education} onChange={(v) => set("education", v)} placeholder={pick(RT.choose)} errText={req} options={levels.map((l) => ({ value: l.key, label: pick(l.label) }))} />
            </div>
          </Section1>

          <Section1 step="2" icon={<Phone className="h-5 w-5" />} title={pick(RT.sec2)} subtitle={pick(RT.sec2sub)}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={pick(RT.phone)} type="tel" dir="ltr" placeholder="+213 ..." value={form.phone} onChange={(v) => set("phone", v)} required error={errors.phone} errText={req} />
              <Field label={pick(RT.email)} type="email" dir="ltr" placeholder="example@email.com" value={form.email} onChange={(v) => set("email", v)} errText={req} />
              <Field label={pick(RT.city)} value={form.city} onChange={(v) => set("city", v)} required error={errors.city} errText={req} />
              <Field label={pick(RT.address)} value={form.address} onChange={(v) => set("address", v)} errText={req} />
            </div>
          </Section1>

          <Section1 step="3" icon={<GraduationCap className="h-5 w-5" />} title={pick(RT.sec3)} subtitle={pick(RT.sec3sub)}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Picker label={pick(RT.domain)} value={form.domain} onChange={onDomain} placeholder={pick(RT.choose)} errText={req} options={domains.map((d) => ({ value: d.key, label: pick(d.label) }))} />
              <Picker label={pick(RT.program)} value={form.program} onChange={(v) => set("program", v)} placeholder={pick(RT.choose)} required error={errors.program} errText={req} options={availablePrograms.map((p) => ({ value: p.id, label: pick(p.title) }))} />
              <Picker full label={pick(RT.schedule)} value={form.schedule} onChange={(v) => set("schedule", v)} placeholder={pick(RT.choose)} errText={req} options={[{ value: "morning", label: pick(RT.morning) }, { value: "evening", label: pick(RT.evening) }, { value: "weekend", label: pick(RT.weekend) }]} />
            </div>
          </Section1>

          <Section1 step="4" icon={<FileText className="h-5 w-5" />} title={pick(RT.sec4)} subtitle={pick(RT.sec4sub)}>
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-navy-200 bg-navy-50/50 px-6 py-10 text-center transition hover:border-brand-400 hover:bg-brand-50/40 dark:border-navy-700 dark:bg-navy-900/40">
              <UploadCloud className="h-8 w-8 text-brand-500" />
              <span className="mt-3 text-sm font-medium text-navy-700 dark:text-navy-100">{pick(RT.dropFiles)}</span>
              <span className="muted mt-1 text-xs">{pick(RT.fileHint)}</span>
              <input type="file" multiple accept="image/*,application/pdf" onChange={(e) => onFiles(e.target.files)} className="hidden" />
            </label>
            {files.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {files.map((file, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 rounded-lg border border-navy-100 bg-white px-3 py-2 text-sm dark:border-navy-800 dark:bg-navy-900">
                    <span className="flex items-center gap-2 truncate text-navy-700 dark:text-navy-100">
                      <FileText className="h-4 w-4 flex-none text-brand-500" />
                      <span className="truncate">{file.name}</span>
                    </span>
                    <button type="button" onClick={() => removeFile(i)} aria-label="remove" className="flex-none rounded-md p-1 text-navy-400 transition hover:bg-navy-100 hover:text-red-500 dark:hover:bg-navy-800">
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5">
              <label className={labelClass}>{pick(RT.notes)}</label>
              <textarea rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} className={inputClass} />
            </div>
          </Section1>

          <div className="card p-6 sm:p-8">
            <label className="flex cursor-pointer items-start gap-3">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 flex-none rounded border-navy-300 text-brand-600 focus:ring-brand-500" />
              <span className="text-sm leading-relaxed text-navy-600 dark:text-navy-200">{pick(RT.consent)}</span>
            </label>
            {errors.consent ? <p className="mt-2 text-xs text-red-500">{pick(RT.consentRequired)}</p> : null}
            <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-6 w-full justify-center sm:w-auto">
              {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send size={16} />}
              <span>{status === "sending" ? pick(RT.sending) : pick(RT.submit)}</span>
            </button>
            {status === "error" ? <p className="mt-3 text-sm text-red-500">{pick(RT.errorMsg)}</p> : null}
          </div>
        </form>
      </Section>
    </>
  );
}
