import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import PageHero from "../components/PageHero";
import { useLang } from "../lib/useLang";
import { FAQ_CATEGORIES, FAQS } from "../data/faq";

export default function Faq() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(-1);

  const q = query.trim().toLowerCase();
  const filtered = FAQS.filter((f) => {
    const matchCat = cat === "all" || f.category === cat;
    const matchQuery = q === "" || pick(f.q).toLowerCase().includes(q) || pick(f.a).toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  const chip = (active: boolean) =>
    "rounded-full border px-3 py-1.5 text-xs transition " +
    (active
      ? "border-brand-600 bg-brand-600 text-white"
      : "border-navy-200 text-navy-600 hover:border-brand-400 dark:border-navy-700 dark:text-navy-200");

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("faq.eyebrow")}
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("faq.searchPlaceholder")}
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 dark:border-navy-700 dark:bg-navy-900"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {FAQ_CATEGORIES.map((c) => (
              <button key={c.key} onClick={() => setCat(c.key)} className={chip(cat === c.key)}>
                {pick(c.label)}
              </button>
            ))}
          </div>

          <div className="mt-8 divide-y divide-navy-100 dark:divide-navy-800">
            {filtered.map((f, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 text-start"
                >
                  <span className="text-sm font-medium text-navy-900 dark:text-white">{pick(f.q)}</span>
                  <span className="flex-none text-lg text-brand-600 dark:text-brand-400">{open === i ? "-" : "+"}</span>
                </button>
                {open === i && <p className="muted mt-3 text-sm leading-relaxed">{pick(f.a)}</p>}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
