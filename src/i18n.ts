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

// Belt-and-suspenders: previous builds used i18next-browser-languagedetector,
// which stored a chosen language under "tdi_lang" (and i18next's own keys).
// Wipe those before init so every fresh page load starts in Arabic for
// everyone, regardless of browser language or any leftover preference.
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

// Defensive: force Arabic again right after init in case anything else
// (browser extension, future detector, etc.) tries to change it on boot.
if (i18n.language !== "ar") {
  i18n.changeLanguage("ar");
}

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
