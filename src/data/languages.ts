import type { L } from "./site";

export const LANG_METHODS: { icon: string; title: L; desc: L }[] = [
  {
    icon: "presentation",
    title: { ar: "دروس تفاعلية", fr: "Cours interactifs", en: "Interactive lessons" },
    desc: { ar: "دروس حية مع مدربين متخصصين", fr: "Des cours en direct avec des formateurs spécialisés", en: "Live lessons with specialized trainers" },
  },
  {
    icon: "users",
    title: { ar: "مجموعات صغيرة", fr: "Petits groupes", en: "Small groups" },
    desc: { ar: "فصول بأعداد محدودة لضمان جودة التعليم", fr: "Des classes à effectif limité pour garantir la qualité", en: "Limited class sizes to ensure teaching quality" },
  },
  {
    icon: "calendar",
    title: { ar: "جداول مرنة", fr: "Horaires flexibles", en: "Flexible schedules" },
    desc: { ar: "أوقات تدريب تناسب جدولك", fr: "Des horaires de formation adaptés à votre emploi du temps", en: "Training times that fit your schedule" },
  },
  {
    icon: "badge-check",
    title: { ar: "شهادات معتمدة", fr: "Certificats reconnus", en: "Accredited certificates" },
    desc: { ar: "شهادات دولية معترف بها", fr: "Des certificats internationaux reconnus", en: "Recognized international certificates" },
  },
];

export const LANGUAGE_COURSES: {
  id: string;
  flag: string;
  name: L;
  desc: L;
  levels: L[];
  features: L[];
}[] = [
  {
    id: "english",
    flag: "🇬🇧",
    name: { ar: "الإنجليزية", fr: "Anglais", en: "English" },
    desc: { ar: "تعلم اللغة الإنجليزية من الصفر إلى الاحترافية", fr: "Apprenez l'anglais de zéro jusqu'au niveau professionnel", en: "Learn English from scratch to professional level" },
    levels: [
      { ar: "مبتدئ", fr: "Débutant", en: "Beginner" },
      { ar: "متوسط", fr: "Intermédiaire", en: "Intermediate" },
      { ar: "متقدم", fr: "Avancé", en: "Advanced" },
      { ar: "احترافي", fr: "Professionnel", en: "Professional" },
    ],
    features: [
      { ar: "محادثة يومية", fr: "Conversation quotidienne", en: "Daily conversation" },
      { ar: "كتابة احترافية", fr: "Écriture professionnelle", en: "Professional writing" },
      { ar: "مهارات الاستماع", fr: "Compréhension orale", en: "Listening skills" },
    ],
  },
  {
    id: "french",
    flag: "🇫🇷",
    name: { ar: "الفرنسية", fr: "Français", en: "French" },
    desc: { ar: "برنامج شامل لتعلم اللغة الفرنسية", fr: "Un programme complet pour apprendre le français", en: "A comprehensive program to learn French" },
    levels: [
      { ar: "مبتدئ", fr: "Débutant", en: "Beginner" },
      { ar: "متوسط", fr: "Intermédiaire", en: "Intermediate" },
      { ar: "متقدم", fr: "Avancé", en: "Advanced" },
    ],
    features: [
      { ar: "النطق الصحيح", fr: "Prononciation correcte", en: "Correct pronunciation" },
      { ar: "القواعد النحوية", fr: "Règles grammaticales", en: "Grammar rules" },
      { ar: "الثقافة الفرنسية", fr: "Culture française", en: "French culture" },
    ],
  },
  {
    id: "spanish",
    flag: "🇪🇸",
    name: { ar: "الإسبانية", fr: "Espagnol", en: "Spanish" },
    desc: { ar: "تعلم اللغة الإسبانية بطريقة سهلة وممتعة", fr: "Apprenez l'espagnol de manière simple et agréable", en: "Learn Spanish in an easy and enjoyable way" },
    levels: [
      { ar: "مبتدئ", fr: "Débutant", en: "Beginner" },
      { ar: "متوسط", fr: "Intermédiaire", en: "Intermediate" },
    ],
    features: [
      { ar: "المحادثة اليومية", fr: "Conversation quotidienne", en: "Daily conversation" },
      { ar: "الثقافة الإسبانية", fr: "Culture espagnole", en: "Spanish culture" },
      { ar: "السفر والسياحة", fr: "Voyage et tourisme", en: "Travel and tourism" },
    ],
  },
];

export const STUDY_LEVELS: { level: L; duration: L; desc: L }[] = [
  {
    level: { ar: "مبتدئ", fr: "Débutant", en: "Beginner" },
    duration: { ar: "8 أسابيع", fr: "8 semaines", en: "8 weeks" },
    desc: { ar: "للمبتدئين تماماً - تعلم الأساسيات والمحادثة البسيطة", fr: "Pour les vrais débutants - apprendre les bases et la conversation simple", en: "For complete beginners - learn the basics and simple conversation" },
  },
  {
    level: { ar: "متوسط", fr: "Intermédiaire", en: "Intermediate" },
    duration: { ar: "10 أسابيع", fr: "10 semaines", en: "10 weeks" },
    desc: { ar: "لمن لديهم معرفة أساسية - تطوير المهارات والمفردات", fr: "Pour ceux ayant des bases - développer les compétences et le vocabulaire", en: "For those with basic knowledge - developing skills and vocabulary" },
  },
  {
    level: { ar: "متقدم", fr: "Avancé", en: "Advanced" },
    duration: { ar: "12 أسبوع", fr: "12 semaines", en: "12 weeks" },
    desc: { ar: "لمن يريدون إتقان اللغة - مهارات متقدمة وثقافة", fr: "Pour maîtriser la langue - compétences avancées et culture", en: "For those who want mastery - advanced skills and culture" },
  },
  {
    level: { ar: "احترافي", fr: "Professionnel", en: "Professional" },
    duration: { ar: "14 أسبوع", fr: "14 semaines", en: "14 weeks" },
    desc: { ar: "للمحترفين - إتقان كامل واستخدام متقدم", fr: "Pour les professionnels - maîtrise complète et usage avancé", en: "For professionals - full mastery and advanced use" },
  },
];
