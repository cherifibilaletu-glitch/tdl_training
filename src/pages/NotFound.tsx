import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Section className="text-center">
      <p className="text-6xl font-bold text-brand-600 dark:text-brand-400">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900 dark:text-white">{t("notFound.title")}</h1>
      <p className="muted mx-auto mt-3 max-w-md text-sm">{t("notFound.subtitle")}</p>
      <div className="mt-6 flex justify-center">
        <Link to="/" className="btn btn-primary">{t("common.back")}</Link>
      </div>
    </Section>
  );
}
