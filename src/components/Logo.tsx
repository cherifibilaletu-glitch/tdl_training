import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  withText?: boolean;
  className?: string;
  inverted?: boolean;
};

// Recreated TDI logo: dark "TDI" wordmark + blue gradient badge + subtitle.
export default function Logo({
  withText = true,
  className = "",
  inverted = false,
}: Props) {
  const { t } = useTranslation();
  const wordColor = inverted ? "text-white" : "text-navy-900 dark:text-white";

  return (
    <Link
      to="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="TDI"
    >
      <div className="flex items-center gap-2">
        <span className={`text-2xl font-extrabold tracking-tight ${wordColor}`}>
          TDI
        </span>
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-soft transition-transform duration-300 group-hover:scale-105">
          <span className="text-[11px] font-extrabold text-white">TDI</span>
        </span>
      </div>
      {withText && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className={`text-sm font-bold ${wordColor}`}>
            {t("brand.name")}
          </span>
          <span className="text-[10px] font-medium text-navy-400 dark:text-navy-300">
            Technical Development Institute
          </span>
        </span>
      )}
    </Link>
  );
}
