import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

export const LANGS = {
  ar: { label: "العربية", dir: "rtl" as const },
  fr: { label: "Français", dir: "ltr" as const },
  en: { label: "English", dir: "ltr" as const },
};

export type LangCode = keyof typeof LANGS;

// Clear any language stored by previous builds so we start fresh.
if (typeof window !== "undefined") {
  try {
    localStorage.removeItem("tdi_lang");
    localStorage.removeItem("i18nextLng");
    sessionStorage.removeItem("tdi_lang");
    sessionStorage.removeItem("i18nextLng");
  } catch {
    /* storage may be disabled in private mode */
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: "ar",
    fallbackLng: "ar",
    supportedLngs: ["ar", "fr", "en"],
    interpolation: { escapeValue: false },
  });

// Layout is locked to RTL in every language. Switching languages only
// changes the translated text; the page layout stays exactly the same.
// We keep the `lang` attribute and `lang-*` class so per-language fonts
// (Tajawal/Cairo for Arabic, Inter for FR/EN) still apply correctly.
function applyLang(lng: string) {
  const code = (lng in LANGS ? lng : "ar") as LangCode;
  const html = document.documentElement;
  html.setAttribute("lang", code);
  html.setAttribute("dir", "rtl");
  html.classList.remove("lang-ar", "lang-fr", "lang-en");
  html.classList.add(`lang-${code}`);
}

applyLang(i18n.language);
i18n.on("languageChanged", applyLang);

export default i18n;
