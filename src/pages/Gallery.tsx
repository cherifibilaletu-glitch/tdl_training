import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";
import PageHero from "../components/PageHero";
import HexGallery from "../components/HexGallery";
import { GALLERY } from "../data/gallery";

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
        eyebrow={t("gallery.eyebrow")}
        title={t("gallery.title")}
        subtitle={t("gallery.subtitle")}
      />

      <Section>
        <HexGallery items={GALLERY} />
      </Section>
    </>
  );
}
