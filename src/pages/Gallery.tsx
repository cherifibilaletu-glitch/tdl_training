import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../lib/useLang";
import { GALLERY } from "../data/gallery";

export default function Gallery() {
  const { t } = useTranslation();
  const { pick } = useLang();
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("gallery.eyebrow")}
        title={t("gallery.title")}
        subtitle={t("gallery.subtitle")}
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.05}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <img
                  src={g.src}
                  alt={pick(g.caption)}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4 text-sm font-medium text-white">
                  {pick(g.caption)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
