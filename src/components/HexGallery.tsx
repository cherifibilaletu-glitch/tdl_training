import { useLang } from "../lib/useLang";
import type { L } from "../data/site";

type Item = { src: string; caption: L };

export default function HexGallery({ items }: { items: Item[] }) {
  const { pick } = useLang();
  return (
    <div className="honeycomb">
      {items.map((g) => (
        <div key={g.src} className="hex" title={pick(g.caption)}>
          <img src={g.src} alt={pick(g.caption)} loading="lazy" />
          <span className="hex-cap">{pick(g.caption)}</span>
        </div>
      ))}
    </div>
  );
}
