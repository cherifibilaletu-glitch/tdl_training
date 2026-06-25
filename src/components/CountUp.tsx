import { useEffect, useRef, useState } from "react";

// Animates a numeric value from 0 to its target when it scrolls into view.
// Preserves any prefix/suffix (e.g. "+", "%") around the number.
export default function CountUp({
  value,
  duration = 1800,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numStr = match ? match[2].replace(/,/g, "") : "0";
  const suffix = match ? match[3] : value;
  const target = parseFloat(numStr) || 0;
  const decimals = numStr.includes(".") ? (numStr.split(".")[1] || "").length : 0;

  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setCurrent(target * eased);
              if (p < 1) requestAnimationFrame(step);
              else setCurrent(target);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  const display =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
