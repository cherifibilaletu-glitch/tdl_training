import type { L } from "./site";

export const FAQ_CATEGORIES: { key: string; label: L }[] = [
  { key: "all", label: { ar: "الكل", fr: "Tout", en: "All" } },
  { key: "certificates", label: { ar: "الشهادات", fr: "Certificats", en: "Certificates" } },
  { key: "registration", label: { ar: "التسجيل", fr: "Inscription", en: "Registration" } },
  { key: "schedules", label: { ar: "الجداول", fr: "Horaires", en: "Schedules" } },
  { key: "payment", label: { ar: "الدفع", fr: "Paiement", en: "Payment" } },
  { key: "programs", label: { ar: "البرامج", fr: "Programmes", en: "Programs" } },
  { key: "support", label: { ar: "الدعم", fr: "Support", en: "Support" } },
  { key: "attendance", label: { ar: "الحضور", fr: "Présence", en: "Attendance" } },
  { key: "materials", label: { ar: "المواد", fr: "Supports", en: "Materials" } },
];

export const FAQS: { category: string; q: L; a: L }[] = [
  {
    category: "certificates",
    q: { ar: "هل الشهادات معتمدة؟", fr: "Les certificats sont-ils reconnus ?", en: "Are the certificates accredited?" },
    a: { ar: "نعم، جميع شهاداتنا معتمدة ومعترف بها من الجهات الحكومية والخاصة، وتعزز فرصك في سوق العمل.", fr: "Oui, tous nos certificats sont reconnus par les organismes publics et privés et renforcent vos chances sur le marché du travail.", en: "Yes, all our certificates are accredited and recognized by public and private bodies, boosting your job-market opportunities." },
  },
  {
    category: "registration",
    q: { ar: "ما هي شروط التسجيل؟", fr: "Quelles sont les conditions d'inscription ?", en: "What are the registration requirements?" },
    a: { ar: "تختلف الشروط حسب البرنامج والمستوى الدراسي المطلوب. يكفي تعبئة استمارة التسجيل وتقديم الوثائق المطلوبة، وفريقنا يساعدك في كل خطوة.", fr: "Les conditions varient selon le programme et le niveau requis. Il suffit de remplir le formulaire d'inscription et de fournir les documents demandés ; notre équipe vous accompagne à chaque étape.", en: "Requirements vary by program and required level. Simply fill in the registration form and provide the required documents; our team guides you through every step." },
  },
  {
    category: "schedules",
    q: { ar: "ما هي أوقات الدراسة؟", fr: "Quels sont les horaires des cours ?", en: "What are the study hours?" },
    a: { ar: "نوفر جداول صباحية ومسائية ونهاية الأسبوع لتناسب الطلاب والموظفين على حد سواء.", fr: "Nous proposons des horaires du matin, du soir et du week-end pour convenir aux étudiants comme aux salariés.", en: "We offer morning, evening and weekend schedules to suit both students and working professionals." },
  },
  {
    category: "payment",
    q: { ar: "هل يمكن تقسيط الرسوم الدراسية؟", fr: "Peut-on payer les frais en plusieurs fois ?", en: "Can tuition fees be paid in installments?" },
    a: { ar: "نعم، نوفر خيارات تقسيط مرنة تسهل عليك دفع الرسوم على أقساط ميسرة.", fr: "Oui, nous proposons des options de paiement échelonné flexibles pour faciliter le règlement des frais.", en: "Yes, we offer flexible installment options to make paying the fees easier." },
  },
  {
    category: "programs",
    q: { ar: "هل يمكن الالتحاق ببرنامج متقدم بدون أخذ المستوى الأساسي؟", fr: "Peut-on suivre un programme avancé sans le niveau de base ?", en: "Can I join an advanced program without taking the basic level?" },
    a: { ar: "يمكن ذلك بعد اجتياز اختبار تحديد المستوى للتأكد من ملائمة البرنامج لمهاراتك الحالية.", fr: "C'est possible après avoir passé un test de niveau pour s'assurer que le programme correspond à vos compétences actuelles.", en: "This is possible after passing a placement test to ensure the program matches your current skills." },
  },
  {
    category: "support",
    q: { ar: "هل هناك دعم بعد انتهاء البرنامج؟", fr: "Y a-t-il un accompagnement après le programme ?", en: "Is there support after the program ends?" },
    a: { ar: "نعم، نقدم دعمًا ما بعد التدريب يشمل الاستشارات المهنية والمساعدة في الاندماج في سوق العمل.", fr: "Oui, nous offrons un accompagnement post-formation comprenant des conseils professionnels et une aide à l'insertion sur le marché du travail.", en: "Yes, we provide post-training support including career advice and help integrating into the job market." },
  },
  {
    category: "attendance",
    q: { ar: "هل يمكن الالتحاق بالدورات عن بعد؟", fr: "Peut-on suivre les cours à distance ?", en: "Can courses be taken remotely?" },
    a: { ar: "تتوفر بعض الدورات بصيغة عن بعد أو مدمجة، حسب طبيعة البرنامج. تواصل معنا لمعرفة الخيارات المتاحة.", fr: "Certains cours sont disponibles à distance ou en format hybride, selon la nature du programme. Contactez-nous pour connaître les options.", en: "Some courses are available remotely or in a hybrid format, depending on the program. Contact us to learn the available options." },
  },
  {
    category: "materials",
    q: { ar: "هل تتوفر مواد دراسية مكتوبة؟", fr: "Des supports de cours écrits sont-ils fournis ?", en: "Are written study materials provided?" },
    a: { ar: "نعم، يحصل كل متدرب على مواد دراسية شاملة ومراجع عملية ترافق كل برنامج.", fr: "Oui, chaque stagiaire reçoit des supports de cours complets et des références pratiques pour chaque programme.", en: "Yes, every trainee receives comprehensive study materials and practical references for each program." },
  },
];
