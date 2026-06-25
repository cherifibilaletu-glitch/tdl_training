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
  {
    category: "registration",
    q: { ar: "ما هي الوثائق المطلوبة عند التسجيل؟", fr: "Quels documents faut-il fournir lors de l'inscription ?", en: "What documents are required for registration?" },
    a: { ar: "عادةً تحتاج إلى نسخة من بطاقة التعريف، صور شمسية، ونسخة من آخر شهادة دراسية. قد تطلب بعض البرامج وثائق إضافية يوضّحها لك فريق الاستقبال.", fr: "En général, vous aurez besoin d'une copie de la pièce d'identité, de photos d'identité et d'une copie du dernier diplôme. Certains programmes peuvent exiger des documents supplémentaires que notre équipe d'accueil vous précisera.", en: "You usually need a copy of your ID, passport photos and a copy of your latest diploma. Some programs may require additional documents, which our reception team will clarify." },
  },
  {
    category: "registration",
    q: { ar: "هل يمكنني التسجيل عبر الهاتف أو الإنترنت؟", fr: "Puis-je m'inscrire par téléphone ou en ligne ?", en: "Can I register by phone or online?" },
    a: { ar: "نعم، يمكنك بدء التسجيل عبر الاتصال بنا أو عبر الواتساب، ثم استكمال الملف حضوريًا في المعهد لتأكيد مقعدك.", fr: "Oui, vous pouvez démarrer votre inscription par téléphone ou via WhatsApp, puis finaliser votre dossier sur place à l'institut pour confirmer votre place.", en: "Yes, you can start your registration by calling us or via WhatsApp, then complete your file in person at the institute to confirm your seat." },
  },
  {
    category: "certificates",
    q: { ar: "هل الشهادات معترف بها خارج الجزائر؟", fr: "Les certificats sont-ils reconnus à l'étranger ?", en: "Are the certificates recognized outside Algeria?" },
    a: { ar: "شهاداتنا معتمدة محليًا، وبعض البرامج تمنح شهادات في لغات ومهارات معترف بها دوليًا. تواصل معنا لمعرفة مدى الاعتراف ببرنامج معيّن في الخارج.", fr: "Nos certificats sont reconnus au niveau national, et certains programmes délivrent des certifications en langues et compétences reconnues à l'international. Contactez-nous pour connaître la reconnaissance d'un programme précis à l'étranger.", en: "Our certificates are recognized nationally, and some programs grant internationally recognized language and skills certifications. Contact us about the recognition of a specific program abroad." },
  },
  {
    category: "certificates",
    q: { ar: "متى أستلم شهادتي بعد إنهاء التكوين؟", fr: "Quand vais-je recevoir mon certificat après la formation ?", en: "When will I receive my certificate after training?" },
    a: { ar: "تُسلّم الشهادة بعد اجتياز التقييم النهائي بنجاح واستكمال شروط الحضور، عادةً خلال فترة قصيرة من نهاية البرنامج.", fr: "Le certificat est délivré après la réussite de l'évaluation finale et le respect des conditions de présence, généralement peu de temps après la fin du programme.", en: "The certificate is issued after you pass the final assessment and meet the attendance requirements, usually shortly after the program ends." },
  },
  {
    category: "payment",
    q: { ar: "ما هي طرق الدفع المتاحة؟", fr: "Quels sont les modes de paiement disponibles ?", en: "What payment methods are available?" },
    a: { ar: "يمكنك الدفع نقدًا في المعهد أو عبر التحويل البنكي. للتفاصيل والإمكانيات الأخرى يرجى التواصل مع إدارة المعهد.", fr: "Vous pouvez payer en espèces à l'institut ou par virement bancaire. Pour les détails et autres possibilités, veuillez contacter l'administration de l'institut.", en: "You can pay in cash at the institute or by bank transfer. For details and other options, please contact the institute's administration." },
  },
  {
    category: "payment",
    q: { ar: "هل توجد تخفيضات أو عروض خاصة؟", fr: "Y a-t-il des réductions ou des offres spéciales ?", en: "Are there discounts or special offers?" },
    a: { ar: "نوفر أحيانًا عروضًا خاصة وتخفيضات للتسجيل المبكر أو للمجموعات. تابع إعلاناتنا أو اسأل فريقنا عن العروض الحالية.", fr: "Nous proposons parfois des offres spéciales et des réductions pour les inscriptions anticipées ou les groupes. Suivez nos annonces ou demandez à notre équipe les offres en cours.", en: "We sometimes offer special deals and discounts for early registration or groups. Follow our announcements or ask our team about current offers." },
  },
  {
    category: "programs",
    q: { ar: "كم تدوم البرامج التكوينية؟", fr: "Quelle est la durée des programmes de formation ?", en: "How long do the training programs last?" },
    a: { ar: "تتراوح مدة البرامج بين دورات قصيرة لبضعة أسابيع وتكوينات مهنية تمتد لعدة أشهر، حسب التخصص والمستوى. تجد مدة كل برنامج في صفحة البرامج.", fr: "La durée varie entre des cours courts de quelques semaines et des formations professionnelles de plusieurs mois, selon la spécialité et le niveau. La durée de chaque programme figure sur la page des programmes.", en: "Durations range from short courses of a few weeks to professional programs lasting several months, depending on the specialty and level. Each program's duration is shown on the programs page." },
  },
  {
    category: "programs",
    q: { ar: "ما الفرق بين تقني وتقني سامي؟", fr: "Quelle est la différence entre technicien et technicien supérieur ?", en: "What is the difference between technician and higher technician?" },
    a: { ar: "التقني السامي يمثّل مستوى أعلى وأعمق من التقني، مع مدة تكوين أطول ومهارات أكثر تخصصًا تؤهّل لمسؤوليات أكبر في الميدان.", fr: "Le technicien supérieur correspond à un niveau plus élevé et plus approfondi que le technicien, avec une formation plus longue et des compétences plus spécialisées ouvrant à davantage de responsabilités sur le terrain.", en: "The higher technician represents a more advanced and in-depth level than the technician, with longer training and more specialized skills that qualify for greater responsibilities in the field." },
  },
  {
    category: "programs",
    q: { ar: "هل تقدمون دورات قصيرة ومكثّفة؟", fr: "Proposez-vous des cours courts et intensifs ?", en: "Do you offer short, intensive courses?" },
    a: { ar: "نعم، إلى جانب التكوينات الطويلة نوفر دورات قصيرة ومكثّفة في مجالات مثل اللغات والإعلام الآلي والمحاسبة لاكتساب مهارة محددة بسرعة.", fr: "Oui, en plus des formations longues, nous proposons des cours courts et intensifs dans des domaines comme les langues, l'informatique et la comptabilité pour acquérir rapidement une compétence précise.", en: "Yes, alongside long programs we offer short, intensive courses in areas such as languages, IT and accounting to quickly gain a specific skill." },
  },
  {
    category: "support",
    q: { ar: "هل تساعدون المتخرّجين في إيجاد عمل؟", fr: "Aidez-vous les diplômés à trouver un emploi ?", en: "Do you help graduates find a job?" },
    a: { ar: "نقدّم مرافقة مهنية تشمل تحسين السيرة الذاتية، التحضير للمقابلات، والتوجيه نحو فرص العمل المتاحة قدر الإمكان.", fr: "Nous offrons un accompagnement professionnel comprenant l'amélioration du CV, la préparation aux entretiens et l'orientation vers les opportunités d'emploi disponibles, dans la mesure du possible.", en: "We provide career support including CV improvement, interview preparation and guidance toward available job opportunities whenever possible." },
  },
  {
    category: "attendance",
    q: { ar: "ماذا يحدث إذا تغيّبت عن بعض الحصص؟", fr: "Que se passe-t-il si je manque certaines séances ?", en: "What happens if I miss some sessions?" },
    a: { ar: "في حال الغياب نحاول مساعدتك على تدارك ما فاتك عبر المواد الدراسية أو حصص تعويضية عند الإمكان. الحضور المنتظم شرط أساسي للحصول على الشهادة.", fr: "En cas d'absence, nous essayons de vous aider à rattraper grâce aux supports de cours ou à des séances de rattrapage lorsque c'est possible. Une présence régulière est essentielle pour obtenir le certificat.", en: "If you are absent, we try to help you catch up through study materials or make-up sessions when possible. Regular attendance is essential to obtain the certificate." },
  },
  {
    category: "materials",
    q: { ar: "هل أحتاج إلى حاسوب شخصي خاص بي؟", fr: "Ai-je besoin de mon propre ordinateur portable ?", en: "Do I need my own laptop?" },
    a: { ar: "بالنسبة لمعظم الدورات يوفّر المعهد قاعات مجهّزة بالحواسيب. امتلاك حاسوب شخصي مفيد للتدرّب في المنزل لكنه ليس إلزاميًا في الغالب.", fr: "Pour la plupart des cours, l'institut met à disposition des salles équipées d'ordinateurs. Disposer d'un ordinateur personnel est utile pour s'entraîner chez soi, mais ce n'est généralement pas obligatoire.", en: "For most courses, the institute provides rooms equipped with computers. Having a personal laptop is useful for practicing at home but is usually not mandatory." },
  },
  {
    category: "schedules",
    q: { ar: "ما هي لغة التدريس؟", fr: "Quelle est la langue d'enseignement ?", en: "What is the language of instruction?" },
    a: { ar: "تُقدّم الدروس أساسًا باللغة العربية والفرنسية حسب التخصص، مع دورات مخصّصة لتعلّم اللغات الأجنبية مثل الإنجليزية والفرنسية.", fr: "Les cours sont dispensés principalement en arabe et en français selon la spécialité, avec des cours dédiés à l'apprentissage des langues étrangères comme l'anglais et le français.", en: "Lessons are delivered mainly in Arabic and French depending on the specialty, with dedicated courses for learning foreign languages such as English and French." },
  },
  {
    category: "programs",
    q: { ar: "هل يوجد مستوى دراسي أدنى للالتحاق؟", fr: "Y a-t-il un niveau scolaire minimum pour s'inscrire ?", en: "Is there a minimum education level to enroll?" },
    a: { ar: "يختلف المستوى المطلوب حسب البرنامج؛ بعض الدورات مفتوحة للجميع وأخرى تتطلب مستوى دراسيًا معيّنًا. يرشدك فريقنا إلى البرنامج المناسب لمؤهلاتك.", fr: "Le niveau requis varie selon le programme ; certains cours sont ouverts à tous tandis que d'autres exigent un niveau scolaire précis. Notre équipe vous oriente vers le programme adapté à votre profil.", en: "The required level varies by program; some courses are open to everyone while others require a specific education level. Our team guides you to the program suited to your profile." },
  },
];
