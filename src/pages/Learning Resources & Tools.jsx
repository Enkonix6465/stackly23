
import React, { useState, useEffect } from "react";
import ethicalHero from "../assets/ethical.mp4";
import e1 from "../assets/e1.jpeg";
import e2 from "../assets/e2 2.jpeg";
import e3 from "../assets/e3.jpeg";

const translations = {
  English: {
    learning: "Learning",
    resourcesTools: "Resources & Tools",
    heroTitle: "Access Powerful <span style='color:#1e3a8a'>{{learning}} {{resourcesTools}}</span>",
    heroDesc: "Get e-books, recorded lectures, quizzes, assignments, and mobile app access. Learn anytime, anywhere, with downloadable content and lifelong resources.",
    sectionTitle: "What Our {{resourcesTools}} Include",
    sectionList: [
      "E-books and downloadable notes",
      "Recorded video lectures",
      "Practice assignments & exercises",
      "Self-assessment quizzes",
      "Mobile app access",
      "Lifelong access to updates",
    ],
    featuresTitle: "Key Features / What You’ll Get",
    features: [
      { num: "01", heading: "E-books & Notes", desc: "Downloadable resources to support your learning journey." },
      { num: "02", heading: "Recorded Lectures", desc: "Revisit classes anytime with on-demand access." },
      { num: "03", heading: "Assignments & Quizzes", desc: "Practice with exercises and track progress with quizzes." },
      { num: "04", heading: "Mobile App", desc: "Learn on the go with full access from your phone." },
      { num: "05", heading: "Downloadable Content", desc: "Access offline resources for uninterrupted learning." },
      { num: "06", heading: "Lifetime Access", desc: "Enjoy continuous updates and learning resources." },
    ],
    benefitsTitle: "Benefits / Outcomes",
    benefits: [
      "Learn Anytime, Anywhere → Access resources on desktop and mobile.",
      "Study at Your Own Pace → Rewatch lectures and reattempt quizzes anytime.",
      "Track Progress → Self-assess with quizzes and assignments.",
      "Offline Learning → Download e-books and resources for use without internet.",
      "Lifelong Access → Keep your resources forever, with regular updates.",
      "Boost Productivity → Learn efficiently with structured tools and resources.",
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "What types of learning resources are available?", answer: "You’ll get access to e-books, recorded lectures, practice assignments, quizzes, and more." },
      { question: "Can I download study materials?", answer: "Yes! Most of our resources, including e-books and notes, are downloadable for offline access." },
      { question: "Are the recorded lectures updated regularly?", answer: "Yes, we keep our content updated to ensure you learn with the latest knowledge and industry trends." },
      { question: "Do you provide practice tests and quizzes?", answer: "Absolutely! You’ll get quizzes, self-assessments, and practice tests to track your progress." },
      { question: "Is there mobile app access?", answer: "Yes, you can learn on the go with our mobile app and access downloadable content anytime." },
      { question: "Will I get lifetime access to resources?", answer: "Yes, once enrolled, you’ll have lifetime access to your resources and updates." },
    ],
  ctaTitle: "Ready to <span style='color:#fff'>Start {{learning}}</span> with Our {{resourcesTools}}?",
    ctaDesc: "Explore our library of e-books, lectures, quizzes, and assignments. Learn anywhere, anytime, with lifetime access and mobile-friendly tools.",
    ctaBtn: "Explore Resources",
  },
  Arabic: {
    learning: "التعلم",
    resourcesTools: "الموارد والأدوات",
    heroTitle: "احصل على <span style='color:#1e3a8a'>{{learning}} {{resourcesTools}} القوية</span>",
    heroDesc: "احصل على الكتب الإلكترونية، المحاضرات المسجلة، الاختبارات، الواجبات، وتطبيق الهاتف المحمول. تعلم في أي وقت ومن أي مكان مع محتوى قابل للتنزيل وموارد مدى الحياة.",
    sectionTitle: "ماذا تشمل {{resourcesTools}} الخاصة بنا؟",
    sectionList: [
      "كتب إلكترونية وملاحظات قابلة للتنزيل",
      "محاضرات فيديو مسجلة",
      "واجبات وتمارين عملية",
      "اختبارات التقييم الذاتي",
      "الوصول إلى تطبيق الهاتف المحمول",
      "وصول مدى الحياة إلى التحديثات",
    ],
    featuresTitle: "المميزات الرئيسية / ماذا ستحصل عليه",
    features: [
      { num: "01", heading: "كتب إلكترونية وملاحظات", desc: "موارد قابلة للتنزيل لدعم رحلتك التعليمية." },
      { num: "02", heading: "محاضرات مسجلة", desc: "أعد مشاهدة الدروس في أي وقت مع وصول عند الطلب." },
      { num: "03", heading: "واجبات واختبارات", desc: "تمرن مع التمارين وتتبع التقدم بالاختبارات." },
      { num: "04", heading: "تطبيق الهاتف المحمول", desc: "تعلم أثناء التنقل مع وصول كامل من هاتفك." },
      { num: "05", heading: "محتوى قابل للتنزيل", desc: "احصل على موارد بدون انقطاع حتى بدون إنترنت." },
      { num: "06", heading: "وصول مدى الحياة", desc: "استمتع بالتحديثات المستمرة وموارد التعلم." },
    ],
    benefitsTitle: "الفوائد / النتائج",
    benefits: [
      "تعلم في أي وقت ومن أي مكان → الوصول إلى الموارد على الكمبيوتر والهاتف المحمول.",
      "ادرس حسب وتيرتك → أعد مشاهدة المحاضرات وأعد محاولة الاختبارات في أي وقت.",
      "تتبع التقدم → قيّم نفسك بالاختبارات والواجبات.",
      "تعلم بدون إنترنت → حمل الكتب الإلكترونية والموارد للاستخدام بدون اتصال.",
      "وصول مدى الحياة → احتفظ بمواردك للأبد مع تحديثات منتظمة.",
      "زيادة الإنتاجية → تعلم بكفاءة مع أدوات وموارد منظمة.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { question: "ما أنواع موارد التعلم المتاحة؟", answer: "ستحصل على كتب إلكترونية، محاضرات مسجلة، واجبات، اختبارات، والمزيد." },
      { question: "هل يمكنني تحميل مواد الدراسة؟", answer: "نعم! معظم الموارد، بما في ذلك الكتب الإلكترونية والملاحظات، قابلة للتنزيل للاستخدام بدون اتصال." },
      { question: "هل يتم تحديث المحاضرات المسجلة بانتظام؟", answer: "نعم، نبقي المحتوى محدثًا لتتعلم بأحدث المعارف والاتجاهات." },
      { question: "هل توفرون اختبارات وتمارين؟", answer: "بالتأكيد! ستحصل على اختبارات، تقييمات ذاتية، واختبارات تدريبية لتتبع تقدمك." },
      { question: "هل يوجد تطبيق للهاتف المحمول؟", answer: "نعم، يمكنك التعلم أثناء التنقل والوصول إلى المحتوى القابل للتنزيل في أي وقت." },
      { question: "هل سأحصل على وصول مدى الحياة للموارد؟", answer: "نعم، بمجرد التسجيل ستحصل على وصول مدى الحياة للموارد والتحديثات." },
    ],
  ctaTitle: "جاهز <span style='color:#fff'>لبدء {{learning}}</span> مع {{resourcesTools}}؟",
    ctaDesc: "استكشف مكتبتنا من الكتب الإلكترونية، المحاضرات، الاختبارات، والواجبات. تعلم في أي مكان وفي أي وقت مع وصول مدى الحياة وأدوات مناسبة للهاتف المحمول.",
    ctaBtn: "استكشف الموارد",
  },
  Hebrew: {
    learning: "לימוד",
    resourcesTools: "משאבים וכלים",
    heroTitle: "גש ל{{learning}} <span style='color:#1e3a8a'>{{resourcesTools}} עוצמתיים</span>",
    heroDesc: "קבל ספרים דיגיטליים, הרצאות מוקלטות, מבחנים, משימות וגישה לאפליקציה. למד בכל זמן ובכל מקום עם תוכן להורדה ומשאבים לכל החיים.",
    sectionTitle: "מה כוללים {{resourcesTools}} שלנו?",
    sectionList: [
      "ספרים דיגיטליים והערות להורדה",
      "הרצאות וידאו מוקלטות",
      "משימות ותרגולים מעשיים",
      "מבחני הערכה עצמית",
      "גישה לאפליקציה",
      "גישה לכל החיים לעדכונים",
    ],
    featuresTitle: "תכונות עיקריות / מה תקבל",
    features: [
      { num: "01", heading: "ספרים דיגיטליים והערות", desc: "משאבים להורדה לתמיכה בלמידה שלך." },
      { num: "02", heading: "הרצאות מוקלטות", desc: "צפה בשיעורים בכל עת עם גישה לפי דרישה." },
      { num: "03", heading: "משימות ומבחנים", desc: "תרגל עם תרגולים ומבחנים ותעקוב אחרי ההתקדמות." },
      { num: "04", heading: "אפליקציה", desc: "למד תוך כדי תנועה עם גישה מלאה מהטלפון שלך." },
      { num: "05", heading: "תוכן להורדה", desc: "גש למשאבים גם ללא אינטרנט." },
      { num: "06", heading: "גישה לכל החיים", desc: "תהנה מעדכונים ומשאבים מתמשכים." },
    ],
    benefitsTitle: "יתרונות / תוצאות",
    benefits: [
      "למד בכל זמן ובכל מקום → גש למשאבים במחשב ובטלפון.",
      "למד בקצב שלך → צפה שוב בהרצאות ונסה מבחנים בכל עת.",
      "עקוב אחרי ההתקדמות → הערך את עצמך עם מבחנים ומשימות.",
      "למידה ללא אינטרנט → הורד ספרים דיגיטליים ומשאבים לשימוש ללא חיבור.",
      "גישה לכל החיים → שמור את המשאבים שלך לנצח עם עדכונים שוטפים.",
      "שפר את הפרודוקטיביות → למד ביעילות עם כלים ומשאבים מובנים.",
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      { question: "אילו סוגי משאבי לימוד זמינים?", answer: "תקבל גישה לספרים דיגיטליים, הרצאות מוקלטות, משימות, מבחנים ועוד." },
      { question: "האם אפשר להוריד חומרי לימוד?", answer: "כן! רוב המשאבים, כולל ספרים דיגיטליים והערות, ניתנים להורדה לשימוש ללא חיבור." },
      { question: "האם ההרצאות המוקלטות מתעדכנות?", answer: "כן, אנו מעדכנים את התוכן כדי שתלמד עם הידע והטרנדים העדכניים ביותר." },
      { question: "האם יש מבחנים ותרגולים?", answer: "בהחלט! תקבל מבחנים, הערכה עצמית ומבחני תרגול למעקב אחר ההתקדמות." },
      { question: "האם יש גישה לאפליקציה?", answer: "כן, תוכל ללמוד תוך כדי תנועה ולגשת לתוכן להורדה בכל עת." },
      { question: "האם אקבל גישה לכל החיים למשאבים?", answer: "כן, לאחר ההרשמה תקבל גישה לכל החיים למשאבים ולעדכונים." },
    ],
  ctaTitle: "מוכן <span style='color:#fff'>להתחיל {{learning}}</span> עם {{resourcesTools}} שלנו?",
    ctaDesc: "גלה את הספרייה שלנו של ספרים דיגיטליים, הרצאות, מבחנים ומשימות. למד בכל מקום ובכל זמן עם גישה לכל החיים וכלים ידידותיים לנייד.",
    ctaBtn: "גלה משאבים",
  },
};

export default function LearningResourcesPage() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'English');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedLang = localStorage.getItem('language') || 'English';
      setLanguage(storedLang);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLanguageChange = () => {
        const newLang = localStorage.getItem('language') || 'English';
        setLanguage(newLang);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      window.addEventListener('language-changed', handleLanguageChange);
      window.addEventListener('storage', handleLanguageChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
        window.removeEventListener('language-changed', handleLanguageChange);
        window.removeEventListener('storage', handleLanguageChange);
      };
    }
  }, []);
  function interpolate(str, dict) {
    return str.replace(/{{(\w+)}}/g, (_, k) => dict[k] || '');
  }
  const t = translations[language] || translations['English'];
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}${isRTL ? ' rtl' : ''}`
    } dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={ethicalHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Learning Resources Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            <span dangerouslySetInnerHTML={{ __html: interpolate(t.heroTitle, t) }} />
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={e1} alt={interpolate(t.learning, t) + ' ' + interpolate(t.resourcesTools, t)} className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#1e3a8a' }}>
              {interpolate(t.sectionTitle, t)}
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              {t.sectionList.map((item, idx) => (
                <li className="flex items-center" key={item}>
                  <span className={`w-3 h-3 rounded-full mr-3 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features / What You’ll Get */}
  <section className="w-full py-16 bg-[#e6f7ff] text-black"> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>{t.featuresTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {t.features.map((item, idx) => (
              <div key={item.num} className="flex items-start mb-6 rounded-2xl shadow-md p-6 bg-white text-black"> 
                <div className="relative flex-shrink-0 mr-4">
                  <span className="text-5xl font-extrabold text-black" style={{
                    background: 'linear-gradient(90deg, #1e3a8a 60%, transparent 60%)',
                    padding: '0.1em 0.5em',
                    borderRadius: '0.2em',
                    color: '#111',
                    display: 'inline-block',
                  }}>{item.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-black">{item.heading}</h3>
                  <p className="text-base max-w-md text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Outcomes */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#1e3a8a' }}>{t.benefitsTitle}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            {t.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-2xl text-[#1e3a8a]">✔</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
  <section className="w-full py-16 bg-white text-black"> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>{t.faqTitle}</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg bg-white ${theme === 'dark' ? 'text-[#1e3a8a]' : 'text-black'}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: '#1e3a8a' }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className={theme === 'dark' ? 'mt-4 text-[#1e3a8a]' : 'mt-4 text-gray-600'}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span dangerouslySetInnerHTML={{ __html: interpolate(t.ctaTitle, t) }} />
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}
            >
              {t.ctaDesc}
            </p>
            <button className={
              `px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ` +
              (theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#fff] text-black hover:bg-[#0099cc]')
            }>
              {t.ctaBtn}
            </button>
          </div>
          {/* Right Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={e3}
              alt={interpolate(t.learning, t) + ' ' + interpolate(t.resourcesTools, t) + ' CTA'}
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
