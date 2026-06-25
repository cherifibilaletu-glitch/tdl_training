import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/useLang";

type L = { ar: string; fr: string; en: string };
type Domain = { key: string; label: L };

const img = (id: string) =>
  "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=600&q=80";

type Props = {
  domains: Domain[];
  images: string[];
  intervalMs?: number;
};

export default function SectorCoverflow({
  domains,
  images,
  intervalMs = 2400,
}: Props) {
  const { pick } = useLang();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || domains.length === 0) return;
    timerRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % domains.length);
    }, intervalMs);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [paused, domains.length, intervalMs]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div
      className="sector-coverflow relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="cf-stage relative mx-auto flex h-[340px] w-full max-w-md items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
        {domains.map((d, i) => {
          const o = i - active;
          const abs = Math.abs(o);
          const cardStyle = {
            transform:
              "translateX(" + o * 55 + "%) translateZ(" + -abs * 150 + "px) rotateY(" + o * -30 + "deg)",
            zIndex: 100 - abs,
            opacity: abs > 3 ? 0 : 1,
            pointerEvents: (abs > 3 ? "none" : "auto") as "none" | "auto",
          };
          const isActive = i === active;
          return (
            <Link
              key={d.key}
              to={"/domains/" + d.key}
              aria-label={pick(d.label)}
              onClick={(e) => {
                if (!isActive) {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              className={
                "cf-card absolute h-[240px] w-[170px] overflow-hidden rounded-2xl border border-white/20 shadow-card transition-all duration-700 ease-out " +
                (isActive ? "cf-card-active" : "")
              }
              style={cardStyle}
            >
              <img
                src={img(images[i % images.length])}
                alt=""
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/55 to-transparent p-3">
                <span className="block text-center text-sm font-semibold text-white">
                  {pick(d.label)}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {domains.map((d, i) => (
          <button
            key={d.key}
            type="button"
            onClick={() => setActive(i)}
            aria-label={pick(d.label)}
            className={
              "h-2 rounded-full transition-all duration-300 " +
              (i === active
                ? "w-7 bg-brand-500 shadow-[0_0_10px_rgba(212,175,55,0.7)]"
                : "w-2 bg-navy-300 hover:bg-navy-400 dark:bg-navy-700 dark:hover:bg-navy-600")
            }
          />
        ))}
      </div>
    </div>
  );
}
