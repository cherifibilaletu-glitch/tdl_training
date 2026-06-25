import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/useLang";

type L = { ar: string; fr: string; en: string };
type Program = {
  id: string;
  title: L;
  desc: L;
  domain: string;
  duration: L;
  price: L;
};

const imgUrl = (id: string, w: number) =>
  "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + w + "&q=80";

const KICKER: L = {
  ar: "تصميم تنفيذي",
  fr: "Mise en page exécutive",
  en: "Executive layout",
};
const DETAILS: L = {
  ar: "عرض التفاصيل",
  fr: "Voir les détails",
  en: "View details",
};

type Props = {
  programs: Program[];
  images: string[];
  autoMs?: number;
};

export default function ProgramsMagazine({ programs, images, autoMs = 3600 }: Props) {
  const { pick } = useLang();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || programs.length < 2) return;
    timerRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % programs.length);
    }, autoMs);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [paused, programs.length, autoMs]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  if (programs.length === 0) return null;
  const current = programs[active];

  return (
    <div
      className="relative grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* HERO PANEL */}
      <article className="relative min-h-[460px] overflow-hidden rounded-3xl border border-white/15 shadow-card lg:min-h-[600px]">
        {programs.map((p, i) => (
          <img
            key={p.id}
            src={imgUrl(images[i % images.length], 1200)}
            alt=""
            className={
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 " +
              (i === active ? "opacity-100" : "opacity-0")
            }
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-l from-navy-950/95 via-navy-950/45 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-10 lg:p-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-xs font-bold text-navy-950 shadow-card">
            <span aria-hidden="true">✦</span>
            <span>{pick(KICKER)}</span>
          </span>
          <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {pick(current.title)}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-100 sm:text-base">
            {pick(current.desc)}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {pick(current.duration)}
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {pick(current.price)}
            </span>
          </div>
          <Link
            to={"/domains/" + current.domain}
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition-colors hover:bg-brand-400"
          >
            {pick(DETAILS)}
            <span aria-hidden="true" className="rtl:rotate-180">→</span>
          </Link>
        </div>
      </article>

      {/* LIST PANEL */}
      <div className="flex flex-col gap-3">
        {programs.map((p, i) => {
          const isActive = i === active;
          return (
            <button
              key={p.id}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={
                "group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-3.5 text-start transition-all duration-300 sm:p-4 " +
                (isActive
                  ? "border-brand-400/60 bg-gradient-to-l from-brand-500/30 to-indigo-500/20 shadow-card -translate-x-1 rtl:translate-x-1"
                  : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08] dark:border-navy-700 dark:bg-navy-900/50")
              }
            >
              <span className="h-14 w-14 flex-none overflow-hidden rounded-xl shadow-card sm:h-16 sm:w-16">
                <img
                  src={imgUrl(images[i % images.length], 240)}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-white sm:text-base">
                  {pick(p.title)}
                </span>
                <span className="block truncate text-xs text-navy-200">
                  {pick(p.duration)} · {pick(p.price)}
                </span>
              </span>
              <span
                className={
                  "ms-auto flex-none font-mono text-xl font-black tracking-tight transition-colors sm:text-2xl " +
                  (isActive
                    ? "text-white/50"
                    : "text-white/15 group-hover:text-white/30")
                }
              >
                {(i + 1).toString().padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
