import type { L } from "./site";

export type DomainDetail = {
  image: string;
  intro: L;
  topics: L[];
  careers: L[];
};

const IMG = (id: string) =>
  "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=2000&q=80";

export const DOMAIN_DETAILS: Record<string, DomainDetail> = {
  "mgmt-sci": {
    image: IMG("photo-1454165804606-c3d57bc86b40"),
    intro: {
      ar: "علوم التسيير تجمع بين المحاسبة والمالية والاقتصاد لتكوين مختصين قادرين على إدارة موارد المؤسسة بكفاءة واتخاذ قرارات مبنية على الأرقام.",
      fr: "Les sciences de gestion associent comptabilité, finance et économie pour former des spécialistes capables de gérer efficacement les ressources de l'entreprise et de prendre des décisions fondées sur les chiffres.",
      en: "Management sciences combine accounting, finance and economics to train specialists able to manage company resources efficiently and make data-driven decisions.",
    },
    topics: [
      { ar: "محاسبة عامة وتحليلية", fr: "Comptabilité générale et analytique", en: "General and analytical accounting" },
      { ar: "التسيير المالي والميزانيات", fr: "Gestion financière et budgets", en: "Financial management and budgeting" },
      { ar: "مبادئ الاقتصاد", fr: "Principes d'économie", en: "Principles of economics" },
      { ar: "تحليل البيانات المالية", fr: "Analyse des données financières", en: "Financial data analysis" },
      { ar: "استخدام برمجيات المحاسبة", fr: "Utilisation des logiciels de comptabilité", en: "Using accounting software" },
    ],
    careers: [
      { ar: "محاسب", fr: "Comptable", en: "Accountant" },
      { ar: "مساعد مالي", fr: "Assistant financier", en: "Financial assistant" },
      { ar: "مكلف بالتسيير", fr: "Chargé de gestion", en: "Management officer" },
      { ar: "مراقب تسيير", fr: "Contrôleur de gestion", en: "Management controller" },
    ],
  },
  it: {
    image: IMG("photo-1523240795612-9a054b0db644"),
    intro: {
      ar: "يكوّن مجال الإعلام الآلي تقنيين قادرين على تطوير التطبيقات وإدارة قواعد البيانات وصيانة الأنظمة والشبكات وفق متطلبات سوق العمل الرقمي.",
      fr: "Le domaine de l'informatique forme des techniciens capables de développer des applications, de gérer des bases de données et de maintenir systèmes et réseaux selon les besoins du marché numérique.",
      en: "The IT field trains technicians able to develop applications, manage databases and maintain systems and networks according to digital-market needs.",
    },
    topics: [
      { ar: "تطوير التطبيقات", fr: "Développement d'applications", en: "Application development" },
      { ar: "قواعد البيانات", fr: "Bases de données", en: "Databases" },
      { ar: "صيانة الحواسيب والشبكات", fr: "Maintenance informatique et réseaux", en: "Computer and network maintenance" },
      { ar: "أنظمة التشغيل", fr: "Systèmes d'exploitation", en: "Operating systems" },
      { ar: "أساسيات الأمن المعلوماتي", fr: "Notions de cybersécurité", en: "Cybersecurity fundamentals" },
    ],
    careers: [
      { ar: "مطوّر تطبيقات", fr: "Développeur", en: "Application developer" },
      { ar: "تقني صيانة", fr: "Technicien de maintenance", en: "Maintenance technician" },
      { ar: "مسيّر قواعد بيانات", fr: "Administrateur de bases de données", en: "Database administrator" },
      { ar: "عون دعم تقني", fr: "Agent de support technique", en: "Technical support agent" },
    ],
  },
  commerce: {
    image: IMG("photo-1517048676732-d65bc937f952"),
    intro: {
      ar: "يهتم مجال التجارة بتقنيات البيع والتسويق والتجارة الدولية والاستيراد والتصدير، لتكوين مهنيين قادرين على تنمية نشاط المؤسسات التجارية.",
      fr: "Le domaine du commerce porte sur les techniques de vente, de marketing et de commerce international, afin de former des professionnels capables de développer l'activité des entreprises commerciales.",
      en: "The commerce field covers sales, marketing and international trade techniques to train professionals able to grow commercial businesses.",
    },
    topics: [
      { ar: "تقنيات البيع والتفاوض", fr: "Techniques de vente et de négociation", en: "Sales and negotiation techniques" },
      { ar: "التسويق الرقمي والتقليدي", fr: "Marketing digital et traditionnel", en: "Digital and traditional marketing" },
      { ar: "التجارة الدولية", fr: "Commerce international", en: "International trade" },
      { ar: "الاستيراد والتصدير", fr: "Import et export", en: "Import and export" },
      { ar: "دراسة السوق", fr: "Étude de marché", en: "Market research" },
    ],
    careers: [
      { ar: "مكلف بالتسويق", fr: "Chargé de marketing", en: "Marketing officer" },
      { ar: "مندوب تجاري", fr: "Commercial", en: "Sales representative" },
      { ar: "مكلف بالاستيراد والتصدير", fr: "Responsable import-export", en: "Import-export officer" },
      { ar: "مسيّر نقطة بيع", fr: "Responsable point de vente", en: "Store manager" },
    ],
  },
  mgmt: {
    image: IMG("photo-1497032628192-86f99bcd76bc"),
    intro: {
      ar: "يركّز مجال التسيير على إدارة الموارد البشرية والمخزون والعمليات اليومية للمؤسسة، مع تنمية مهارات التنظيم والقيادة.",
      fr: "Le domaine de la gestion se concentre sur la gestion des ressources humaines, des stocks et des opérations quotidiennes de l'entreprise, tout en développant les compétences d'organisation et de leadership.",
      en: "The management field focuses on managing human resources, inventory and daily operations while developing organization and leadership skills.",
    },
    topics: [
      { ar: "تسيير الموارد البشرية", fr: "Gestion des ressources humaines", en: "Human resources management" },
      { ar: "تسيير المخزون", fr: "Gestion des stocks", en: "Inventory management" },
      { ar: "تنظيم العمل", fr: "Organisation du travail", en: "Work organization" },
      { ar: "التواصل المهني", fr: "Communication professionnelle", en: "Professional communication" },
      { ar: "إدارة المشاريع الصغيرة", fr: "Gestion de petits projets", en: "Small project management" },
    ],
    careers: [
      { ar: "مساعد إداري", fr: "Assistant administratif", en: "Administrative assistant" },
      { ar: "مكلف بالموارد البشرية", fr: "Chargé des ressources humaines", en: "HR officer" },
      { ar: "أمين مخزن", fr: "Magasinier", en: "Warehouse keeper" },
      { ar: "مسيّر مكتب", fr: "Responsable de bureau", en: "Office manager" },
    ],
  },
  security: {
    image: IMG("photo-1521737711867-e3b97375f902"),
    intro: {
      ar: "يكوّن مجال الأمن أعوان وقاية مؤهلين لحماية الأشخاص والممتلكات والوقاية من المخاطر داخل المؤسسات والمنشآت.",
      fr: "Le domaine de la sécurité forme des agents de prévention qualifiés pour protéger les personnes et les biens et prévenir les risques au sein des entreprises et des installations.",
      en: "The security field trains qualified prevention agents to protect people and property and prevent risks within companies and facilities.",
    },
    topics: [
      { ar: "تقنيات الوقاية والأمن", fr: "Techniques de prévention et de sécurité", en: "Prevention and security techniques" },
      { ar: "مكافحة الحرائق", fr: "Lutte contre les incendies", en: "Firefighting" },
      { ar: "التدخل في حالات الطوارئ", fr: "Intervention en cas d'urgence", en: "Emergency response" },
      { ar: "مراقبة المداخل", fr: "Contrôle des accès", en: "Access control" },
      { ar: "القواعد القانونية للأمن", fr: "Cadre juridique de la sécurité", en: "Legal framework of security" },
    ],
    careers: [
      { ar: "عون أمن", fr: "Agent de sécurité", en: "Security agent" },
      { ar: "عون وقاية", fr: "Agent de prévention", en: "Prevention agent" },
      { ar: "مراقب", fr: "Surveillant", en: "Surveillance officer" },
      { ar: "مسؤول أمن موقع", fr: "Responsable sécurité de site", en: "Site security supervisor" },
    ],
  },
  transport: {
    image: IMG("photo-1427504494785-3a9ca7044f45"),
    intro: {
      ar: "يؤهّل مجال النقل سائقي الآلات والمركبات الصناعية للعمل في الورشات والموانئ والمواقع البترولية وفق معايير السلامة.",
      fr: "Le domaine du transport qualifie les conducteurs d'engins et de véhicules industriels pour travailler dans les ateliers, les ports et les sites pétroliers selon les normes de sécurité.",
      en: "The transport field qualifies operators of machinery and industrial vehicles to work in workshops, ports and oil sites according to safety standards.",
    },
    topics: [
      { ar: "قيادة آلات الشحن", fr: "Conduite d'engins de chargement", en: "Operating loading machines" },
      { ar: "قيادة المركبات ذاتية الدفع", fr: "Conduite de véhicules automoteurs", en: "Operating self-propelled vehicles" },
      { ar: "تشغيل الرافعات", fr: "Exploitation des grues", en: "Crane operation" },
      { ar: "قواعد السلامة في النقل", fr: "Règles de sécurité du transport", en: "Transport safety rules" },
      { ar: "صيانة أولية للآلات", fr: "Maintenance de premier niveau des engins", en: "Basic machine maintenance" },
    ],
    careers: [
      { ar: "سائق آلات شحن", fr: "Conducteur d'engins de chargement", en: "Loading machine operator" },
      { ar: "سائق رافعة", fr: "Conducteur de grue", en: "Crane operator" },
      { ar: "عون مناورة", fr: "Agent de manœuvre", en: "Maneuvering agent" },
      { ar: "سائق مركبات صناعية", fr: "Conducteur de véhicules industriels", en: "Industrial vehicle driver" },
    ],
  },
  industry: {
    image: IMG("photo-1581092160562-40aa08e78837"),
    intro: {
      ar: "يغطّي مجال الصناعة المهارات التقنية للإنتاج والصيانة الصناعية، ويهيّئ المتدربين للعمل في الوحدات والمصانع الإنتاجية.",
      fr: "Le domaine de l'industrie couvre les compétences techniques de production et de maintenance industrielle et prépare les stagiaires à travailler dans les unités et usines de production.",
      en: "The industry field covers technical production and industrial maintenance skills and prepares trainees to work in production units and factories.",
    },
    topics: [
      { ar: "أساسيات الإنتاج الصناعي", fr: "Bases de la production industrielle", en: "Industrial production basics" },
      { ar: "الصيانة الصناعية", fr: "Maintenance industrielle", en: "Industrial maintenance" },
      { ar: "قراءة المخططات التقنية", fr: "Lecture de plans techniques", en: "Reading technical drawings" },
      { ar: "مراقبة الجودة", fr: "Contrôle qualité", en: "Quality control" },
      { ar: "معايير السلامة الصناعية", fr: "Normes de sécurité industrielle", en: "Industrial safety standards" },
    ],
    careers: [
      { ar: "عون إنتاج", fr: "Agent de production", en: "Production agent" },
      { ar: "تقني صيانة", fr: "Technicien de maintenance", en: "Maintenance technician" },
      { ar: "مراقب جودة", fr: "Contrôleur qualité", en: "Quality controller" },
      { ar: "مشغّل آلات", fr: "Opérateur de machines", en: "Machine operator" },
    ],
  },
  hydro: {
    image: IMG("photo-1581092160562-40aa08e78837"),
    intro: {
      ar: "يختص مجال المحروقات بالتقنيات المرتبطة بالصناعات النفطية، من تلحيم الأنابيب إلى أساسيات العمليات البترولية، استجابةً لاحتياجات قطاع الطاقة.",
      fr: "Le domaine des hydrocarbures se spécialise dans les techniques liées aux industries pétrolières, du soudage des conduites aux fondamentaux des opérations pétrolières, pour répondre aux besoins du secteur de l'énergie.",
      en: "The hydrocarbons field specializes in techniques related to petroleum industries, from pipe welding to petroleum operation fundamentals, to meet the energy sector's needs.",
    },
    topics: [
      { ar: "تلحيم أنابيب البترول", fr: "Soudage de pipelines", en: "Petroleum pipe welding" },
      { ar: "أساسيات الصناعات النفطية", fr: "Fondamentaux des industries pétrolières", en: "Petroleum industry fundamentals" },
      { ar: "السلامة في المواقع البترولية", fr: "Sécurité sur les sites pétroliers", en: "Safety on oil sites" },
      { ar: "قراءة المخططات", fr: "Lecture de plans", en: "Reading diagrams" },
      { ar: "التجهيزات النفطية", fr: "Équipements pétroliers", en: "Petroleum equipment" },
    ],
    careers: [
      { ar: "ملحّم أنابيب", fr: "Soudeur de pipelines", en: "Pipe welder" },
      { ar: "عون موقع بترولي", fr: "Agent de site pétrolier", en: "Oil site agent" },
      { ar: "تقني محروقات", fr: "Technicien hydrocarbures", en: "Hydrocarbons technician" },
      { ar: "عون سلامة صناعية", fr: "Agent de sécurité industrielle", en: "Industrial safety agent" },
    ],
  },
  hse: {
    image: IMG("photo-1543269865-cbf427effbad"),
    intro: {
      ar: "يهدف مجال الصحة والسلامة إلى تكوين مختصين في الوقاية من المخاطر المهنية والإسعافات الأولية لضمان بيئة عمل آمنة.",
      fr: "Le domaine de la santé et de la sécurité vise à former des spécialistes de la prévention des risques professionnels et des premiers secours pour garantir un environnement de travail sûr.",
      en: "The health and safety field aims to train specialists in occupational risk prevention and first aid to ensure a safe work environment.",
    },
    topics: [
      { ar: "الإسعافات الأولية", fr: "Premiers secours", en: "First aid" },
      { ar: "الوقاية من المخاطر المهنية", fr: "Prévention des risques professionnels", en: "Occupational risk prevention" },
      { ar: "التدخل في الطوارئ", fr: "Intervention d'urgence", en: "Emergency response" },
      { ar: "معايير الصحة والسلامة", fr: "Normes de santé et de sécurité", en: "Health and safety standards" },
      { ar: "تقييم المخاطر", fr: "Évaluation des risques", en: "Risk assessment" },
    ],
    careers: [
      { ar: "عون صحة وسلامة", fr: "Agent santé et sécurité", en: "Health & safety agent" },
      { ar: "مكلف بالوقاية", fr: "Chargé de prévention", en: "Prevention officer" },
      { ar: "مسعف", fr: "Secouriste", en: "First responder" },
      { ar: "مراقب HSE", fr: "Contrôleur HSE", en: "HSE supervisor" },
    ],
  },
  business: {
    image: IMG("photo-1456513080510-7bf3a84b82f8"),
    intro: {
      ar: "يساعد مجال الأعمال والمقاولاتية الراغبين في إنشاء مشاريعهم على اكتساب مهارات التخطيط والتسيير وبناء نماذج أعمال ناجحة.",
      fr: "Le domaine de l'entrepreneuriat aide ceux qui souhaitent créer leur projet à acquérir des compétences de planification, de gestion et de construction de modèles d'affaires performants.",
      en: "The business field helps aspiring founders acquire planning, management and business-model skills to build successful ventures.",
    },
    topics: [
      { ar: "إنشاء المؤسسات", fr: "Création d'entreprise", en: "Business creation" },
      { ar: "بناء نموذج العمل", fr: "Construction du modèle d'affaires", en: "Building the business model" },
      { ar: "التخطيط المالي للمشروع", fr: "Planification financière du projet", en: "Project financial planning" },
      { ar: "التسويق للمشاريع الناشئة", fr: "Marketing des startups", en: "Startup marketing" },
      { ar: "تسيير المشاريع الصغيرة", fr: "Gestion de petits projets", en: "Small project management" },
    ],
    careers: [
      { ar: "صاحب مشروع", fr: "Porteur de projet", en: "Project owner" },
      { ar: "مقاول", fr: "Entrepreneur", en: "Entrepreneur" },
      { ar: "مستشار مشاريع", fr: "Conseiller en projets", en: "Project advisor" },
      { ar: "مسيّر مؤسسة ناشئة", fr: "Gérant de startup", en: "Startup manager" },
    ],
  },
};
