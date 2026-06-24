# TDI — معهد التطوير التقني / Institut de Développement Technique / Technical Development Institute

موقع إلكتروني ثلاثي اللغة (العربية · الفرنسية · الإنجليزية) لمعهد التطوير التقني بورقلة.

Site web trilingue (arabe · français · anglais) — Trilingual website (Arabic · French · English).

---

## 🌐 اللغات / Langues / Languages

- العربية (الافتراضية، من اليمين إلى اليسار) — خطوط عربية متعددة: Cairo · Tajawal · Almarai · Reem Kufi
- Français / English — police Inter

يمكن تبديل اللغة من الزر العلوي في شريط التنقل.

## ✨ الصفحات / Pages

الرئيسية · من نحن · برامج التكوين · التدريب للشركات · دورات اللغة · المعرض · الأخبار · تحميل الوثائق · الأسئلة الشائعة · اتصل بنا.

## 🛠️ التقنيات / Technologies

React + Vite + TypeScript + Tailwind CSS + react-i18next + framer-motion.

---

## 🚀 التشغيل خطوة بخطوة / Démarrage / Getting started

تأكد أولاً من تثبيت [Node.js](https://nodejs.org) (الإصدار 18 أو أحدث).
Installez d'abord [Node.js](https://nodejs.org) (version 18+).
First install [Node.js](https://nodejs.org) (version 18+).

```bash
# 1) تثبيت الحزم / Installer les dépendances / Install dependencies
npm install

# 2) تشغيل الموقع محلياً / Lancer en local / Run locally
npm run dev

# 3) بناء نسخة الإنتاج / Construire pour la production / Build for production
npm run build

# 4) معاينة نسخة الإنتاج / Prévisualiser / Preview the build
npm run preview
```

بعد `npm run dev` افتح الرابط الظاهر في الطرفية (عادة http://localhost:5173).

---

## ✏️ تعديل المحتوى / Modifier le contenu / Editing content

كل النصوص مجمعة في مجلدين، وكل نص مكتوب باللغات الثلاث (ar / fr / en):

- `src/data/` — المحتوى الغني (البرامج، اللغات، الأسئلة، الأخبار، الوثائق، المعرض، بيانات الاتصال).
- `src/locales/` — نصوص الواجهة (القوائم، الأزرار، عناوين الأقسام).

### أمثلة سريعة / Exemples

- لتغيير رقم الهاتف أو البريد أو العنوان: `src/data/site.ts` (الكائن `CONTACT`).
- لإضافة أو تعديل برنامج تكوين: `src/data/site.ts` (المصفوفة `PROGRAMS`).
- لإضافة خبر: `src/data/news.ts`.
- لتغيير صور المعرض: `src/data/gallery.ts`.

### نموذج الاتصال / Formulaire de contact

نموذج “اتصل بنا” يستخدم [Formspree](https://formspree.io) (مجاني).
أنشئ نموذجاً على Formspree وانسخ معرّفه، ثم ضعه في `src/pages/Contact.tsx` مكان `your_form_id`.
إذا لم تضبطه، سيفتح النموذج بريدك الإلكتروني تلقائياً. كما يوجد زر واتساب مباشر.

### الصور / Images

الصور الحالية روابط احترافية من Unsplash. يمكنك استبدالها بصور المعهد الحقيقية بتعديل الروابط في ملفات `src/data/` و`src/pages/`.

---

## 📞 التواصل / Contact

- العنوان: مقابل بنك السلام، الحي السكني 460، ورقلة – الجزائر
- التكوين المهني: +213 670 156 968 / +213 670 146 968 · tdiouargla@gmail.com
- اللغات: +213 557 170 546 · tec.dev.ins@gmail.com
- المؤسسات: n.laroui@gmail.com

© 2026 معهد التطوير التقني — جميع الحقوق محفوظة.
