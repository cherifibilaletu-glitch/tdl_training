import type { L } from "./site";

export const DOC_CATEGORIES: { key: string; label: L; count: number }[] = [
  { key: "general", label: { ar: "دليل عام", fr: "Guide général", en: "General guide" }, count: 1 },
  { key: "programs", label: { ar: "برامج", fr: "Programmes", en: "Programs" }, count: 1 },
];

export const DOCUMENTS: {
  id: string;
  category: string;
  title: L;
  desc: L;
  url: string;
}[] = [
  {
    id: "internal-regulation",
    category: "general",
    title: { ar: "القانون الداخلي للمعهد", fr: "Règlement intérieur de l'institut", en: "Institute internal regulations" },
    desc: { ar: "القانون الداخلي للمعهد بالنسبة للمتربصين المتكونين داخلياً في المؤسسة", fr: "Le règlement intérieur de l'institut pour les stagiaires formés en interne.", en: "The institute's internal regulations for internally trained students." },
    url: "#",
  },
  {
    id: "programs-guide",
    category: "programs",
    title: { ar: "دليل البرامج التدريبية", fr: "Guide des programmes de formation", en: "Training programs guide" },
    desc: { ar: "قائمة كاملة بجميع البرامج التدريبية الموجهة للشركات المتاحة مع التفاصيل", fr: "Une liste complète de tous les programmes de formation destinés aux entreprises, avec les détails.", en: "A complete list of all corporate training programs available, with details." },
    url: "#",
  },
];

export const DOC_NOTES: L[] = [
  { ar: "جميع الوثائق متاحة بصيغة PDF وجاهزة للتحميل والطباعة", fr: "Tous les documents sont disponibles au format PDF, prêts à télécharger et à imprimer.", en: "All documents are available in PDF format, ready to download and print." },
  { ar: "يمكنك تحميل الوثائق في أي وقت دون الحاجة إلى تسجيل", fr: "Vous pouvez télécharger les documents à tout moment, sans inscription.", en: "You can download the documents at any time without registration." },
  { ar: "إذا واجهت أي مشكلة في التحميل، يرجى التواصل معنا", fr: "En cas de problème de téléchargement, veuillez nous contacter.", en: "If you encounter any download problem, please contact us." },
];
