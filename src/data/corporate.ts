import type { L } from "./site";

export const CORP_INTRO: { title: L; desc: L } = {
  title: {
    ar: "التدريب الموجّه للشركات والمؤسسات",
    fr: "Formation dédiée aux entreprises et institutions",
    en: "Training tailored for companies and institutions",
  },
  desc: {
    ar: "نصمّم برامج تدريبية مخصّصة تلبّي احتياجات مؤسّستك وترفع من كفاءة فرق العمل لديك.",
    fr: "Nous concevons des programmes de formation sur mesure qui répondent aux besoins de votre organisation et renforcent les compétences de vos équipes.",
    en: "We design customized training programs that meet your organization's needs and boost your teams' skills.",
  },
};

export const CORP_FEATURES: { icon: string; title: L; desc: L }[] = [
  {
    icon: "settings",
    title: { ar: "برامج مخصّصة", fr: "Programmes sur mesure", en: "Customized programs" },
    desc: {
      ar: "محتوى تدريبي مصمّم خصّيصاً وفق أهداف مؤسّستك.",
      fr: "Contenu de formation conçu selon les objectifs de votre organisation.",
      en: "Training content designed around your organization's goals.",
    },
  },
  {
    icon: "users",
    title: { ar: "مدرّبون خبراء", fr: "Formateurs experts", en: "Expert trainers" },
    desc: {
      ar: "نخبة من المدرّبين ذوي الخبرة الميدانية والأكاديمية.",
      fr: "Une équipe de formateurs à l'expérience terrain et académique.",
      en: "A team of trainers with field and academic experience.",
    },
  },
  {
    icon: "map-pin",
    title: { ar: "في موقعكم أو لدينا", fr: "Sur site ou chez nous", en: "On-site or at our center" },
    desc: {
      ar: "نوفّر التدريب في مقرّ مؤسّستك أو في قاعاتنا المجهّزة.",
      fr: "Nous proposons la formation dans vos locaux ou dans nos salles équipées.",
      en: "We deliver training at your premises or in our equipped halls.",
    },
  },
  {
    icon: "calendar",
    title: { ar: "جدولة مرنة", fr: "Planning flexible", en: "Flexible scheduling" },
    desc: {
      ar: "مواعيد تدريب تتكيّف مع جدول عمل فريقك.",
      fr: "Des horaires adaptés à l'emploi du temps de votre équipe.",
      en: "Schedules that adapt to your team's working hours.",
    },
  },
  {
    icon: "badge-check",
    title: { ar: "شهادات معتمدة", fr: "Certificats reconnus", en: "Recognized certificates" },
    desc: {
      ar: "شهادات إتمام معتمدة تعزّز المسار المهني للمشاركين.",
      fr: "Des certificats de fin de formation valorisant le parcours des participants.",
      en: "Completion certificates that strengthen participants' careers.",
    },
  },
  {
    icon: "briefcase",
    title: { ar: "متابعة ما بعد التدريب", fr: "Suivi post-formation", en: "Post-training follow-up" },
    desc: {
      ar: "تقييم الأثر ودعم مستمرّ بعد انتهاء البرنامج.",
      fr: "Évaluation de l'impact et accompagnement après le programme.",
      en: "Impact assessment and ongoing support after the program.",
    },
  },
];

export const CORP_STEPS: { title: L; desc: L }[] = [
  {
    title: { ar: "تحليل الاحتياجات", fr: "Analyse des besoins", en: "Needs analysis" },
    desc: {
      ar: "ندرس متطلّبات مؤسّستك ونحدّد الفجوات في المهارات.",
      fr: "Nous étudions vos besoins et identifions les écarts de compétences.",
      en: "We study your needs and identify skill gaps.",
    },
  },
  {
    title: { ar: "تصميم البرنامج", fr: "Conception du programme", en: "Program design" },
    desc: {
      ar: "نبني محتوى تدريبياً متكاملاً يحقّق أهدافك.",
      fr: "Nous élaborons un contenu complet répondant à vos objectifs.",
      en: "We build a complete curriculum that meets your goals.",
    },
  },
  {
    title: { ar: "تنفيذ التدريب", fr: "Mise en œuvre", en: "Training delivery" },
    desc: {
      ar: "ينفّذ مدرّبونا البرنامج بأساليب تفاعلية وعملية.",
      fr: "Nos formateurs animent le programme de façon interactive et pratique.",
      en: "Our trainers deliver the program in an interactive, hands-on way.",
    },
  },
  {
    title: { ar: "التقييم والمتابعة", fr: "Évaluation et suivi", en: "Evaluation & follow-up" },
    desc: {
      ar: "نقيس النتائج ونقدّم تقارير ودعماً لاحقاً.",
      fr: "Nous mesurons les résultats et fournissons rapports et suivi.",
      en: "We measure results and provide reports and follow-up.",
    },
  },
];
