import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLang } from "../lib/useLang";

const OPTIONS: { code: "ar" | "fr" | "en"; label: string }[] = [
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const choose = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-navy-200 px-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 dark:border-navy-700 dark:text-navy-100 dark:hover:bg-navy-800"
      >
        <Globe size={16} />
        <span className="uppercase">{lang}</span>
      </button>
      {open && (
        <div className="absolute z-50 mt-2 min-w-[150px] overflow-hidden rounded-xl border border-navy-100 bg-white py-1 shadow-card end-0 dark:border-navy-800 dark:bg-navy-900">
          {OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              onClick={() => choose(opt.code)}
              className="flex w-full items-center justify-between gap-3 px-3.5 py-2 text-sm text-navy-700 transition-colors hover:bg-navy-50 dark:text-navy-100 dark:hover:bg-navy-800"
            >
              <span>{opt.label}</span>
              {lang === opt.code && (
                <Check size={15} className="text-brand-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
