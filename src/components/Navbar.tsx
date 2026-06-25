import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { ROUTES } from "../lib/routes";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors ${
      isActive
        ? "text-brand-600 dark:text-brand-300"
        : "text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100/80 bg-white/85 backdrop-blur-md dark:border-navy-800/80 dark:bg-navy-950/85">
      <div className="container-tdi flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {ROUTES.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              className={linkClass}
              end={r.path === "/"}
            >
              {t(r.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-navy-200 text-navy-700 xl:hidden dark:border-navy-700 dark:text-navy-100"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy-100 bg-white px-4 py-3 xl:hidden dark:border-navy-800 dark:bg-navy-950">
          <div className="container-tdi grid grid-cols-2 gap-1 sm:grid-cols-3">
            {ROUTES.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                end={r.path === "/"}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {t(r.key)}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
