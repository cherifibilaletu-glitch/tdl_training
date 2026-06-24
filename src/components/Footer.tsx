import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import { CONTACT } from "../data/site";
import { useLang } from "../lib/useLang";

export default function Footer() {
  const { t } = useTranslation();
  const { pick } = useLang();
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/about", key: "nav.about" },
    { to: "/programs", key: "nav.programs" },
    { to: "/corporate", key: "nav.corporate" },
    { to: "/languages", key: "nav.languages" },
  ];
  const moreLinks = [
    { to: "/gallery", key: "nav.gallery" },
    { to: "/news", key: "nav.news" },
    { to: "/documents", key: "nav.documents" },
    { to: "/faq", key: "nav.faq" },
  ];

  return (
    <footer className="border-t border-navy-100 bg-navy-50/60 dark:border-navy-800 dark:bg-navy-950">
      <div className="container-tdi grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="muted max-w-xs text-sm leading-relaxed">
            {t("footer.about")}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-navy-900 dark:text-white">
            {t("footer.quick")}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-quiet">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-navy-900 dark:text-white">
            {t("footer.more")}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {moreLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-quiet">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-navy-900 dark:text-white">
            {t("nav.contact")}
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 muted">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-500" />
              <span>{pick(CONTACT.address)}</span>
            </li>
            <li className="flex items-center gap-2.5 muted">
              <Phone size={16} className="shrink-0 text-brand-500" />
              <span dir="ltr">{CONTACT.phonesTraining[0]}</span>
            </li>
            <li className="flex items-center gap-2.5 muted">
              <Mail size={16} className="shrink-0 text-brand-500" />
              <a
                href={"mailto:" + CONTACT.emailTraining}
                className="link-quiet"
              >
                {CONTACT.emailTraining}
              </a>
            </li>
            <li className="flex items-center gap-2.5 muted">
              <Clock size={16} className="shrink-0 text-brand-500" />
              <span>{pick(CONTACT.hours)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-100 py-5 dark:border-navy-800">
        <p className="container-tdi text-center text-xs text-navy-400">
          {t("footer.rights")} © {year} {t("brand.name")}
        </p>
      </div>
    </footer>
  );
}
