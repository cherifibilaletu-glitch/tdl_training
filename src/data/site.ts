// Central content for TDI website. All structured data carries ar / fr / en.
// Edit text here to update every page in all three languages.

export type L = { ar: string; fr: string; en: string };

export const CONTACT = {
  address: {
    ar: "مقابل بنك السلام، الحي السكني 460، ورقلة – الجزائر",
    fr: "Face à la Banque Al Salam, Cité 460 logements, Ouargla – Algérie",
    en: "Opposite Al Salam Bank, 460 Housing District, Ouargla – Algeria",
  } as L,
  phonesTraining: ["+213670156968", "+213670146968"],
  phoneLanguages: ["+213557170546"],
  phoneExtra: ["+21329718324"],
  emailTraining: "tdiouargla@gmail.com",
  emailLanguages: "tec.dev.ins@gmail.com",
  emailCorporate: "n.laroui@gmail.com",
  whatsapp: "213670156968",
  hours: {
    ar: "الأحد - الخميس: 8:00 - 17:00",
    fr: "Dimanche - Jeudi : 8:00 - 17:00",
    en: "Sunday - Thursday: 8:00 - 17:00",
  } as L,
};

export const STATS: { value: string; label: L }[] = [
  {
    value: "1000+",
    label: { ar: "متدرب", fr: "Stagiaires", en: "Trainees" },
  },
  {
    value: "100+",
    label: { ar: "شركة", fr: "Entreprises", en: "Companies" },
  },
  {
    value: "45+",
    label: { ar: "برنامج", fr: "Programmes", en: "Programs" },
  },
  {
    value: "15+",
    label: { ar: "سنة خبرة", fr: "Ans d'expérience", en: "Years of experience" },
  },
];

export const DOMAINS: { key: string; label: L }[] = [
  { key: "all", label: { ar: "جميع المجالات", fr: "Tous les domaines", en: "All fields" } },
  { key: "mgmt-sci", label: { ar: "علوم التسيير", fr: "Sciences de gestion", en: "Management Sciences" } },
  { key: "it", label: { ar: "إعلام آلي", fr: "Informatique", en: "Computer Science" } },
  { key: "commerce", label: { ar: "تجارة", fr: "Commerce", en: "Commerce" } },
  { key: "mgmt", label: { ar: "تسيير", fr: "Gestion", en: "Management" } },
  { key: "security", label: { ar: "أمن", fr: "Sécurité", en: "Security" } },
  { key: "transport", label: { ar: "نقل", fr: "Transport", en: "Transport" } },
  { key: "industry", label: { ar: "صناعة", fr: "Industrie", en: "Industry" } },
  { key: "hydro", label: { ar: "محروقات", fr: "Hydrocarbures", en: "Hydrocarbons" } },
  { key: "hse", label: { ar: "صحة وسلامة", fr: "Santé & Sécurité", en: "Health & Safety" } },
  { key: "business", label: { ar: "أعمال", fr: "Entrepreneuriat", en: "Business" } },
];

export const LEVELS: { key: string; label: L }[] = [
  { key: "all", label: { ar: "جميع المستويات", fr: "Tous les niveaux", en: "All levels" } },
  { key: "sec3", label: { ar: "3 ثانوي", fr: "3e secondaire", en: "3rd Secondary" } },
  { key: "sec2", label: { ar: "2 ثانوي", fr: "2e secondaire", en: "2nd Secondary" } },
  { key: "mid4", label: { ar: "4 متوسط", fr: "4e moyenne", en: "4th Middle" } },
  { key: "limited", label: { ar: "مستوى محدود", fr: "Niveau limité", en: "Limited level" } },
  { key: "any", label: { ar: "كل المستويات", fr: "Tous niveaux", en: "All levels" } },
];

export type Program = {
  id: string;
  domain: string;
  level: string;
  title: L;
  desc: L;
  duration: L;
  price: L;
  cert: L;
};

const D30: L = { ar: "30 شهر", fr: "30 mois", en: "30 months" };
const D24: L = { ar: "24 شهر", fr: "24 mois", en: "24 months" };
const D18: L = { ar: "18 شهر", fr: "18 mois", en: "18 months" };
const D12: L = { ar: "12 شهر", fr: "12 mois", en: "12 months" };
const D6: L = { ar: "6 أشهر", fr: "6 mois", en: "6 months" };
const D3: L = { ar: "3 أشهر", fr: "3 mois", en: "3 months" };
const D5d: L = { ar: "5 أيام", fr: "5 jours", en: "5 days" };
const D2d: L = { ar: "2 أيام", fr: "2 jours", en: "2 days" };

const PMonth45: L = { ar: "4500,00 دج / للشهر", fr: "4500,00 DA / mois", en: "4,500.00 DA / month" };
const PMonth50: L = { ar: "5000,00 دج / للشهر", fr: "5000,00 DA / mois", en: "5,000.00 DA / month" };
const PCourse60: L = { ar: "6000,00 دج / الدورة", fr: "6000,00 DA / session", en: "6,000.00 DA / course" };

const CSup: L = { ar: "شهادة تقني سامي", fr: "Technicien Supérieur", en: "Higher Technician" };
const CTech: L = { ar: "شهادة تقني", fr: "Technicien", en: "Technician" };
const CSkill: L = { ar: "شهادة مهارة مهنية", fr: "Compétence Professionnelle", en: "Professional Skill" };
const CAbility: L = { ar: "شهادة كفاءة مهنية", fr: "Aptitude Professionnelle", en: "Professional Aptitude" };
const CQual: L = { ar: "شهادة تأهيل", fr: "Qualification", en: "Qualification" };
const CQualInit: L = { ar: "شهادة تأهيل أولي", fr: "Qualification Initiale", en: "Initial Qualification" };
const CAttend: L = { ar: "شهادة متابعة التكوين", fr: "Attestation de Formation", en: "Training Attendance" };

export const PROGRAMS: Program[] = [
  {
    id: "hr",
    domain: "mgmt",
    level: "sec3",
    title: { ar: "تسيير الموارد البشرية", fr: "Gestion des ressources humaines", en: "Human Resources Management" },
    desc: { ar: "تعلم تقنيات وأساليب تسيير الموارد البشرية", fr: "Apprenez les techniques et méthodes de gestion des ressources humaines", en: "Learn human resources management techniques and methods" },
    duration: D30,
    price: PMonth45,
    cert: CSup,
  },
  {
    id: "accounting-finance",
    domain: "mgmt-sci",
    level: "sec3",
    title: { ar: "محاسبة ومالية", fr: "Comptabilité et finance", en: "Accounting & Finance" },
    desc: { ar: "اكتساب مهارات المحاسبة والتسيير المالي للمؤسسات", fr: "Acquérir les compétences en comptabilité et gestion financière des entreprises", en: "Acquire accounting and corporate financial management skills" },
    duration: D30,
    price: PMonth45,
    cert: CSup,
  },
  {
    id: "accounting-mgmt",
    domain: "mgmt",
    level: "sec3",
    title: { ar: "محاسبة وتسيير", fr: "Comptabilité et gestion", en: "Accounting & Management" },
    desc: { ar: "التكوين في تقنيات المحاسبة وتسيير المؤسسات", fr: "Formation aux techniques de comptabilité et de gestion d'entreprise", en: "Training in accounting techniques and business management" },
    duration: D30,
    price: PMonth45,
    cert: CSup,
  },
  {
    id: "it-database",
    domain: "it",
    level: "sec3",
    title: { ar: "إعلام آلي - خيار قاعدة معطيات", fr: "Informatique - option bases de données", en: "IT - Database Option" },
    desc: { ar: "تطوير تطبيقات وإدارة قواعد المعطيات", fr: "Développer des applications et gérer des bases de données", en: "Develop applications and manage databases" },
    duration: D30,
    price: PMonth45,
    cert: CSup,
  },
  {
    id: "intl-trade",
    domain: "commerce",
    level: "sec3",
    title: { ar: "تجارة دولية", fr: "Commerce international", en: "International Trade" },
    desc: { ar: "التكوين في تقنيات التجارة والاستيراد والتصدير", fr: "Formation aux techniques du commerce, de l'import et de l'export", en: "Training in trade, import and export techniques" },
    duration: D30,
    price: PMonth45,
    cert: CSup,
  },
  {
    id: "marketing",
    domain: "commerce",
    level: "sec3",
    title: { ar: "التسويق", fr: "Marketing", en: "Marketing" },
    desc: { ar: "تعلم استراتيجيات وتقنيات التسويق الحديثة", fr: "Apprenez les stratégies et techniques du marketing moderne", en: "Learn modern marketing strategies and techniques" },
    duration: D30,
    price: PMonth45,
    cert: CSup,
  },
  {
    id: "it-technician",
    domain: "it",
    level: "sec2",
    title: { ar: "تقني إعلام آلي", fr: "Technicien en informatique", en: "IT Technician" },
    desc: { ar: "أساسيات الإعلام الآلي وصيانة الحواسيب", fr: "Notions d'informatique et maintenance des ordinateurs", en: "IT fundamentals and computer maintenance" },
    duration: D24,
    price: PMonth45,
    cert: CTech,
  },
  {
    id: "it-operator",
    domain: "it",
    level: "mid4",
    title: { ar: "عامل في الإعلام الآلي", fr: "Opérateur en informatique", en: "IT Operator" },
    desc: { ar: "التكوين في المهارات الأساسية لاستعمال الحاسوب", fr: "Formation aux compétences de base d'utilisation de l'ordinateur", en: "Training in basic computer usage skills" },
    duration: D18,
    price: PMonth45,
    cert: CSkill,
  },
  {
    id: "warehouse",
    domain: "mgmt",
    level: "mid4",
    title: { ar: "أمين مخزن", fr: "Magasinier", en: "Warehouse Keeper" },
    desc: { ar: "تنظيم وتسيير المخزون ومراقبة السلع", fr: "Organisation et gestion des stocks et contrôle des marchandises", en: "Inventory organization, management and goods control" },
    duration: D12,
    price: PMonth45,
    cert: CAbility,
  },
  {
    id: "security-agent",
    domain: "security",
    level: "sec3",
    title: { ar: "عون وقاية وأمن", fr: "Agent de prévention et de sécurité", en: "Prevention & Security Agent" },
    desc: { ar: "التكوين في تقنيات الأمن والوقاية داخل المؤسسات", fr: "Formation aux techniques de sécurité et de prévention en entreprise", en: "Training in security and prevention techniques within organizations" },
    duration: D6,
    price: PMonth50,
    cert: CQual,
  },
  {
    id: "it-assistant",
    domain: "it",
    level: "mid4",
    title: { ar: "ملحق في الإعلام الآلي", fr: "Assistant en informatique", en: "IT Assistant" },
    desc: { ar: "دعم وصيانة الأنظمة المعلوماتية", fr: "Support et maintenance des systèmes informatiques", en: "Support and maintenance of information systems" },
    duration: D6,
    price: PMonth50,
    cert: CQualInit,
  },
  {
    id: "loader-driver",
    domain: "transport",
    level: "limited",
    title: { ar: "سائق آلات الشحن", fr: "Conducteur d'engins de chargement", en: "Loading Machine Operator" },
    desc: { ar: "قيادة واستعمال آلات الشحن بأمان", fr: "Conduite et utilisation sécurisée des engins de chargement", en: "Safe operation of loading machines" },
    duration: D3,
    price: PMonth50,
    cert: CQualInit,
  },
  {
    id: "self-propelled-driver",
    domain: "transport",
    level: "limited",
    title: { ar: "سائق مركبة ذاتية الدفع", fr: "Conducteur de véhicule automoteur", en: "Self-propelled Vehicle Driver" },
    desc: { ar: "قيادة المركبات الصناعية ذاتية الدفع", fr: "Conduite des véhicules industriels automoteurs", en: "Operating self-propelled industrial vehicles" },
    duration: D3,
    price: PMonth50,
    cert: CQualInit,
  },
  {
    id: "crane-operator",
    domain: "transport",
    level: "limited",
    title: { ar: "سائق رافعة أثقال", fr: "Conducteur de grue", en: "Heavy Crane Operator" },
    desc: { ar: "تشغيل الرافعات الثقيلة وفق معايير السلامة", fr: "Exploitation des grues lourdes selon les normes de sécurité", en: "Operating heavy cranes according to safety standards" },
    duration: D3,
    price: PMonth50,
    cert: CQualInit,
  },
  {
    id: "pipe-welding",
    domain: "hydro",
    level: "mid4",
    title: { ar: "تلحيم أنابيب البترول", fr: "Soudage de pipelines pétroliers", en: "Petroleum Pipe Welding" },
    desc: { ar: "تقنيات تلحيم الأنابيب في المجال البترولي", fr: "Techniques de soudage des conduites dans le domaine pétrolier", en: "Pipe welding techniques in the petroleum sector" },
    duration: D6,
    price: PMonth50,
    cert: CQualInit,
  },
  {
    id: "oil-industries",
    domain: "hydro",
    level: "any",
    title: { ar: "الصناعات النفطية", fr: "Industries pétrolières", en: "Petroleum Industries" },
    desc: { ar: "دورة متخصصة في أساسيات الصناعات النفطية", fr: "Cours spécialisé sur les fondamentaux des industries pétrolières", en: "Specialized course on petroleum industry fundamentals" },
    duration: D5d,
    price: PCourse60,
    cert: CAttend,
  },
  {
    id: "first-aid",
    domain: "hse",
    level: "any",
    title: { ar: "دورة في الإسعاف", fr: "Cours de premiers secours", en: "First Aid Course" },
    desc: { ar: "تعلم مبادئ الإسعافات الأولية والتدخل السريع", fr: "Apprendre les principes des premiers secours et de l'intervention rapide", en: "Learn first-aid principles and rapid response" },
    duration: D2d,
    price: PCourse60,
    cert: CAttend,
  },
  {
    id: "entrepreneurship",
    domain: "business",
    level: "any",
    title: { ar: "المقاولاتية", fr: "Entrepreneuriat", en: "Entrepreneurship" },
    desc: { ar: "أساسيات إنشاء وتسيير المشاريع الصغيرة", fr: "Fondamentaux de la création et de la gestion de petits projets", en: "Fundamentals of creating and managing small projects" },
    duration: D5d,
    price: PCourse60,
    cert: CAttend,
  },
];
