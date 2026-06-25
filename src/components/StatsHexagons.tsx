import { useRef, type MouseEvent } from "react";
import CountUp from "./CountUp";
import { useLang } from "../lib/useLang";
import type { L } from "../data/site";

type Stat = { value: string; label: L };

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

function HexStat({ stat, index }: { stat: Stat; index: number }) {
  const { pick } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  // Cursor-reactive 3D tilt: the hexagon leans toward the mouse position.
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-py * 16).toFixed(2);
    const ry = (px * 16).toFixed(2);
    el.style.transform =
      "perspective(620px) rotateX(" + rx + "deg) rotateY(" + ry +
      "deg) translateY(-8px) scale(1.06)";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(620px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
  };

  return (
    <div className={"flex justify-center " + (index % 2 === 1 ? "sm:mt-14" : "sm:mt-0")}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="hexstat group relative w-24 transition-transform duration-300 ease-out will-change-transform sm:w-32"
        style={ { aspectRatio: "1 / 1.1547", transformStyle: "preserve-3d" } }
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-300 via-brand-500 to-brand-600 drop-shadow-[0_8px_22px_rgba(212,175,55,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_16px_36px_rgba(212,175,55,0.6)]"
          style={ { clipPath: HEX_CLIP } }
        />
        <div
          className="absolute inset-[3px] bg-gradient-to-b from-navy-900 to-navy-950"
          style={ { clipPath: HEX_CLIP } }
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-gold display text-2xl font-extrabold leading-none sm:text-3xl">
            <CountUp value={stat.value} />
          </span>
          <span className="mt-1.5 px-2 text-[10px] font-medium text-brand-200/90 sm:text-xs">
            {pick(stat.label)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StatsHexagons({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-6">
      {stats.map((s, i) => (
        <HexStat key={s.value} stat={s} index={i} />
      ))}
    </div>
  );
}
