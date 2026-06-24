import type { L } from "./site";

export const NEWS: {
  id: string;
  date: string;
  image: string;
  tag: L;
  title: L;
  excerpt: L;
}[] = [
  {
    id: "new-season",
    date: "2026-01-15",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    tag: { ar: "تسجيل", fr: "Inscription", en: "Enrollment" },
    title: { ar: "فتح التسجيل للموسم التدريبي الجديد", fr: "Ouverture des inscriptions pour la nouvelle saison", en: "Enrollment open for the new training season" },
    excerpt: { ar: "أعلن معهد التطوير التقني عن فتح باب التسجيل لجميع البرامج التدريبية للموسم الجديد.", fr: "L'Institut de Développement Technique annonce l'ouverture des inscriptions pour tous les programmes de la nouvelle saison.", en: "The Technical Development Institute announces the opening of enrollment for all training programs of the new season." },
  },
  {
    id: "partnership",
    date: "2025-12-02",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    tag: { ar: "شراكات", fr: "Partenariats", en: "Partnerships" },
    title: { ar: "شراكة جديدة مع مؤسسات محلية", fr: "Nouveau partenariat avec des entreprises locales", en: "New partnership with local companies" },
    excerpt: { ar: "وقّع المعهد اتفاقيات شراكة جديدة لتوفير تدريب عملي وفرص توظيف للمتدربين.", fr: "L'institut a signé de nouveaux accords de partenariat pour offrir une formation pratique et des opportunités d'emploi aux stagiaires.", en: "The institute signed new partnership agreements to provide practical training and employment opportunities for trainees." },
  },
  {
    id: "language-courses",
    date: "2025-11-10",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    tag: { ar: "دورات", fr: "Cours", en: "Courses" },
    title: { ar: "إطلاق دورات لغوية جديدة", fr: "Lancement de nouveaux cours de langues", en: "Launch of new language courses" },
    excerpt: { ar: "أضفنا مستويات جديدة في دورات اللغات لتلبية احتياجات المتدربين بمختلف المستويات.", fr: "Nous avons ajouté de nouveaux niveaux dans les cours de langues pour répondre aux besoins des stagiaires de tous niveaux.", en: "We added new levels to the language courses to meet the needs of trainees at all levels." },
  },
];
