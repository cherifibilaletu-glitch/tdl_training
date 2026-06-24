import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

export const LANGS = {
  ar: { label: "العربية", dir: "rtl" as const },
  fr: { label: "Français", dir: "ltr" as const },
  en: { label: "English", dir: "ltr" as const },
};

export type LangCode = keyof typeof LANGS;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      fr: { translation: fr },
      en: { translation: en },
    },
    fallbackLng: "ar",
    supportedLngs: ["ar", "fr", "en"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "tdi_lang",
    },
    interpolation: { escapeValue: false },
  });

function applyDir(lng: string) {
  const code = (lng in LANGS ? lng : "ar") as LangCode;
  const { dir } = LANGS[code];
  const html = document.documentElement;
  html.setAttribute("lang", code);
  html.setAttribute("dir", dir);
  html.classList.remove("lang-ar", "lang-fr", "lang-en");
  html.classList.add(`lang-${code}`);
}

applyDir(i18n.language);
i18n.on("languageChanged", applyDir);

export default i18n;
