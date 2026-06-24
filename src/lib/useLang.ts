import { useTranslation } from "react-i18next";
import type { L } from "../data/site";

export type LangCode = "ar" | "fr" | "en";

export function useLang() {
  const { i18n } = useTranslation();
  const current = i18n.language?.split("-")[0];
  const lang = (
    ["ar", "fr", "en"].includes(current) ? current : "ar"
  ) as LangCode;
  const isRtl = lang === "ar";
  const pick = (obj: L) => obj[lang];
  return { lang, isRtl, pick };
}
