import { useEffect, useRef, useState } from "react";
import { useLang } from "../lib/useLang";
import type { L } from "../data/site";

type Item = { src: string; caption: L };

// Choose how many hexagons per full row based on viewport width.
function useColumns() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w <= 520) setCols(2);
      else if (w <= 760) setCols(3);
      else if (w <= 1100) setCols(4);
      else setCols(5);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return cols;
}

function HexCell({ item }: { item: Item }) {
  const { pick } = useLang();
  const cellRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cell = cellRef.current;
    const im = imgRef.current;
    if (!cell || !im) return;
    const r = cell.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    // Hexagon tilts toward the cursor; image shifts for a parallax depth feel.
    cell.style.transform =
      "perspective(620px) rotateX(" +
      (py * -9).toFixed(2) +
      "deg) rotateY(" +
      (px * 9).toFixed(2) +
      "deg) scale(1.05)";
    im.style.transform =
      "scale(1.2) translate(" +
      (px * -18).toFixed(1) +
      "px," +
      (py * -18).toFixed(1) +
      "px)";
  };

  const handleLeave = () => {
    const cell = cellRef.current;
    const im = imgRef.current;
    if (cell) cell.style.transform = "";
    if (im) im.style.transform = "";
  };

  return (
    <div
      ref={cellRef}
      className="hex"
      title={pick(item.caption)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <img ref={imgRef} src={item.src} alt={pick(item.caption)} loading="lazy" />
      <span className="hex-cap">{pick(item.caption)}</span>
    </div>
  );
}

export default function HexGallery({ items }: { items: Item[] }) {
  const cols = useColumns();
  const rows: Item[][] = [];
  for (let i = 0; i < items.length; i += cols) {
    rows.push(items.slice(i, i + cols));
  }
  return (
    <div className="honeycomb">
      {rows.map((row, ri) => (
        <div
          key={ri}
          className={ri % 2 === 1 ? "hex-row hex-row-offset" : "hex-row"}
        >
          {row.map((it, i) => (
            <HexCell key={it.src + i} item={it} />
          ))}
        </div>
      ))}
    </div>
  );
}
