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
    excerpt: { ar: "أعلن معهد التطوير التقني عن فتح باب التسجيل لجميع البرامج التدريبية للموسم الجديد.", fr: "L'Institut de Developpement Technique annonce l'ouverture des inscriptions pour tous les programmes de la nouvelle saison.", en: "The Technical Development Institute announces the opening of enrollment for all training programs of the new season." },
  },
  {
    id: "partnership",
    date: "2025-12-02",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    tag: { ar: "شراكات", fr: "Partenariats", en: "Partnerships" },
    title: { ar: "شراكة جديدة مع مؤسسات محلية", fr: "Nouveau partenariat avec des entreprises locales", en: "New partnership with local companies" },
    excerpt: { ar: "وقّع المعهد اتفاقيات شراكة جديدة لتوفير تدريب عملي وفرص توظيف للمتدربين.", fr: "L'institut a signe de nouveaux accords de partenariat pour offrir une formation pratique et des opportunites d'emploi aux stagiaires.", en: "The institute signed new partnership agreements to provide practical training and employment opportunities for trainees." },
  },
  {
    id: "language-courses",
    date: "2025-11-10",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    tag: { ar: "دورات", fr: "Cours", en: "Courses" },
    title: { ar: "إطلاق دورات لغوية جديدة", fr: "Lancement de nouveaux cours de langues", en: "Launch of new language courses" },
    excerpt: { ar: "أضفنا مستويات جديدة في دورات اللغات لتلبية احتياجات المتدربين بمختلف المستويات.", fr: "Nous avons ajoute de nouveaux niveaux dans les cours de langues pour repondre aux besoins des stagiaires de tous niveaux.", en: "We added new levels to the language courses to meet the needs of trainees at all levels." },
  },
  {
    id: "workshop-week",
    date: "2025-10-05",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    tag: { ar: "فعاليات", fr: "Evenements", en: "Events" },
    title: { ar: "أسبوع الورشات التطبيقية", fr: "Semaine des ateliers pratiques", en: "Practical workshops week" },
    excerpt: { ar: "نظّم المعهد أسبوعاً كاملاً من الورشات التطبيقية في مختلف التخصصات التقنية والمهنية.", fr: "L'institut a organise une semaine complete d'ateliers pratiques dans diverses specialites techniques et professionnelles.", en: "The institute organized a full week of hands-on workshops across various technical and professional fields." },
  },
  {
    id: "certification",
    date: "2025-09-18",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80",
    tag: { ar: "شهادات", fr: "Certificats", en: "Certificates" },
    title: { ar: "تسليم الشهادات المعتمدة للدفعة الجديدة", fr: "Remise des certificats a la nouvelle promotion", en: "Accredited certificates awarded to the new cohort" },
    excerpt: { ar: "احتفل المعهد بتسليم الشهادات المعتمدة لمتدربي الدفعة الجديدة بعد إتمام برامجهم بنجاح.", fr: "L'institut a celebre la remise des certificats accredites aux stagiaires de la nouvelle promotion apres la reussite de leurs programmes.", en: "The institute celebrated awarding accredited certificates to the new cohort after successfully completing their programs." },
  },
];
