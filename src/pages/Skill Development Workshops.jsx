
import React, { useState, useEffect } from "react";
import cryptoHero from "../assets/crypto.mp4";
import b1 from "../assets/b1.avif";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";

const translations = {
  English: {
    heroTitle: "Accelerate Your Career with <span style='color:#1e3a8a'>Skill Development Workshops</span>",
    heroDesc: "Join short-term, intensive bootcamps on AI, Data Science, Digital Marketing, and more to gain in-demand skills quickly.",
    sectionTitle: "What Our Skill Development Workshops Include",
    sectionList: [
      "Intensive Bootcamps on AI, Data Science & Digital Marketing",
      "Expert-Led Live Sessions",
      "Hands-on Industry Projects",
      "Career Guidance & Mentorship",
      "Certification of Completion",
      "Ongoing Access to Resources",
    ],
    featuresTitle: "Key Features / What You’ll Get",
    features: [
      { num: "01", heading: "Expert Mentors", desc: "Learn directly from industry professionals and domain experts." },
      { num: "02", heading: "Real-Time Q&A", desc: "Interactive sessions with live feedback and answers." },
      { num: "03", heading: "Flexible Learning", desc: "Weekend & weekday batches to suit your schedule." },
      { num: "04", heading: "Certification", desc: "Earn certificates that boost your professional profile." },
      { num: "05", heading: "Career Networking", desc: "Connect with peers, mentors, and recruiters." },
      { num: "06", heading: "Practical Projects", desc: "Work on real-world challenges to sharpen your skills." },
    ],
    benefitsTitle: "Benefits / Outcomes",
    benefits: [
      "Gain Job-Ready Skills → Specialize in trending domains like AI, Data Science, and Digital Marketing.",
      "Fast-Track Learning → Short-term workshops designed for rapid upskilling.",
      "Hands-on Experience → Work on projects, assignments, and case studies.",
      "Recognized Certificates → Boost your resume with industry-accepted credentials.",
      "Career Readiness → Portfolio building, interview prep, and placement guidance.",
      "Lifelong Access → Stay updated with recorded sessions and resources.",
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "What are skill development workshops?", answer: "They are short-term bootcamps designed to help you quickly learn and apply trending skills like AI, Data Science, and Digital Marketing." },
      { question: "How long are the workshops?", answer: "Most workshops last between 2 to 8 weeks, depending on the topic." },
      { question: "Do I need prior experience?", answer: "No prior background is required for beginner workshops. Advanced tracks are available for experienced learners." },
      { question: "Will I get a certificate?", answer: "Yes, you’ll receive a recognized certificate after successful completion." },
      { question: "Are the workshops online or offline?", answer: "Currently, all workshops are delivered online with interactive live sessions." },
      { question: "Do you offer placement support?", answer: "Yes, we provide career guidance, resume reviews, and connections with hiring partners." },
    ],
    ctaTitle: "Ready to <span style='color:#fff'>Upskill</span> with Our Workshops?",
    ctaDesc: "Join our short-term, high-impact bootcamps and gain the skills employers are looking for in today’s market.",
    ctaBtn: "Enroll Now",
  },
  Arabic: {
    heroTitle: "طور حياتك المهنية مع <span style='color:#1e3a8a'>ورش تطوير المهارات</span>",
    heroDesc: "انضم إلى معسكرات قصيرة ومكثفة في الذكاء الاصطناعي، علم البيانات، التسويق الرقمي، والمزيد لتكتسب المهارات المطلوبة بسرعة.",
    sectionTitle: "ماذا تشمل ورش تطوير المهارات لدينا",
    sectionList: [
      "معسكرات مكثفة في الذكاء الاصطناعي، علم البيانات والتسويق الرقمي",
      "جلسات مباشرة يقودها خبراء",
      "مشاريع عملية في الصناعة",
      "إرشاد مهني ودعم وظيفي",
      "شهادة إتمام",
      "وصول مستمر إلى الموارد",
    ],
    featuresTitle: "المميزات الرئيسية / ماذا ستحصل عليه",
    features: [
      { num: "01", heading: "مدربون خبراء", desc: "تعلم مباشرة من محترفين وخبراء المجال." },
      { num: "02", heading: "أسئلة وأجوبة مباشرة", desc: "جلسات تفاعلية مع تغذية راجعة وإجابات مباشرة." },
      { num: "03", heading: "تعلم مرن", desc: "مجموعات نهاية الأسبوع وأيام الأسبوع لتناسب جدولك." },
      { num: "04", heading: "شهادة", desc: "احصل على شهادات تعزز ملفك المهني." },
      { num: "05", heading: "شبكات مهنية", desc: "تواصل مع زملاء، مدربين، وموظفين التوظيف." },
      { num: "06", heading: "مشاريع عملية", desc: "اعمل على تحديات واقعية لصقل مهاراتك." },
    ],
    benefitsTitle: "الفوائد / النتائج",
    benefits: [
      "اكتساب مهارات جاهزة للعمل → تخصص في مجالات رائجة مثل الذكاء الاصطناعي، علم البيانات، والتسويق الرقمي.",
      "تعلم سريع → ورش قصيرة مصممة للتطوير السريع.",
      "خبرة عملية → اعمل على مشاريع، واجبات ودراسات حالة.",
      "شهادات معترف بها → عزز سيرتك الذاتية بمؤهلات معتمدة في الصناعة.",
      "جاهزية وظيفية → بناء ملف أعمال، التحضير للمقابلات، ودعم التوظيف.",
      "وصول مدى الحياة → ابقَ على اطلاع مع الجلسات المسجلة والموارد.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { question: "ما هي ورش تطوير المهارات؟", answer: "هي معسكرات قصيرة تهدف لمساعدتك على تعلم وتطبيق المهارات الرائجة بسرعة مثل الذكاء الاصطناعي، علم البيانات، والتسويق الرقمي." },
      { question: "كم مدة الورش؟", answer: "معظم الورش تستمر من أسبوعين إلى ثمانية أسابيع حسب الموضوع." },
      { question: "هل أحتاج إلى خبرة سابقة؟", answer: "لا يشترط وجود خلفية سابقة للورش المبتدئة. توجد مسارات متقدمة للمتعلمين ذوي الخبرة." },
      { question: "هل سأحصل على شهادة؟", answer: "نعم، ستحصل على شهادة معترف بها بعد إتمام الورشة بنجاح." },
      { question: "هل الورش أونلاين أم حضورية؟", answer: "حاليًا جميع الورش تُقدم عبر الإنترنت بجلسات مباشرة تفاعلية." },
      { question: "هل تقدمون دعمًا وظيفيًا؟", answer: "نعم، نقدم إرشادًا وظيفيًا، مراجعة السيرة الذاتية، وربطك بشركاء التوظيف." },
    ],
    ctaTitle: "جاهز <span style='color:#fff'>لتطوير مهاراتك</span> مع ورشنا؟",
    ctaDesc: "انضم إلى معسكراتنا القصيرة والمكثفة واكتسب المهارات التي يبحث عنها أصحاب العمل في السوق اليوم.",
    ctaBtn: "سجل الآن",
  },
  Hebrew: {
    heroTitle: "האץ את הקריירה שלך עם <span style='color:#1e3a8a'>סדנאות פיתוח מיומנויות</span>",
    heroDesc: "הצטרף למחנות קצרים וממוקדים ב-AI, מדעי הנתונים, שיווק דיגיטלי ועוד כדי לרכוש מיומנויות מבוקשות במהירות.",
    sectionTitle: "מה כוללות סדנאות פיתוח המיומנויות שלנו",
    sectionList: [
      "מחנות אינטנסיביים ב-AI, מדעי הנתונים ושיווק דיגיטלי",
      "מפגשים חיים בהובלת מומחים",
      "פרויקטים מעשיים בתעשייה",
      "הכוונה מקצועית ותמיכה בקריירה",
      "תעודת סיום",
      "גישה מתמשכת למשאבים",
    ],
    featuresTitle: "תכונות עיקריות / מה תקבל",
    features: [
      { num: "01", heading: "מנטורים מומחים", desc: "למד ישירות ממקצוענים ומומחי תחום." },
      { num: "02", heading: "שאלות ותשובות בזמן אמת", desc: "מפגשים אינטראקטיביים עם משוב ותשובות בזמן אמת." },
      { num: "03", heading: "למידה גמישה", desc: "קבוצות בסופי שבוע ובימי חול שיתאימו ללוח הזמנים שלך." },
      { num: "04", heading: "תעודה", desc: "קבל תעודות שמחזקות את הפרופיל המקצועי שלך." },
      { num: "05", heading: "נטוורקינג מקצועי", desc: "התחבר לעמיתים, מנטורים ומגייסים." },
      { num: "06", heading: "פרויקטים מעשיים", desc: "עבוד על אתגרים אמיתיים כדי לחדד את המיומנויות שלך." },
    ],
    benefitsTitle: "יתרונות / תוצאות",
    benefits: [
      "רכישת מיומנויות מוכנות לעבודה → התמחה בתחומים מובילים כמו AI, מדעי הנתונים ושיווק דיגיטלי.",
      "למידה מהירה → סדנאות קצרות שנועדו להאצה מקצועית.",
      "ניסיון מעשי → עבוד על פרויקטים, משימות ומקרי מבחן.",
      "תעודות מוכרות → חזק את קורות החיים עם הסמכות מוכרות בתעשייה.",
      "הכנה לקריירה → בניית תיק עבודות, הכנה לראיונות ותמיכה בהשמה.",
      "גישה לכל החיים → הישאר מעודכן עם מפגשים מוקלטים ומשאבים.",
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      { question: "מהן סדנאות פיתוח מיומנויות?", answer: "אלו מחנות קצרים שנועדו לעזור לך ללמוד וליישם מיומנויות מובילות במהירות כמו AI, מדעי הנתונים ושיווק דיגיטלי." },
      { question: "כמה זמן נמשכות הסדנאות?", answer: "רוב הסדנאות נמשכות בין שבועיים לשמונה שבועות, בהתאם לנושא." },
      { question: "האם צריך ניסיון קודם?", answer: "אין צורך ברקע קודם לסדנאות מתחילים. יש מסלולים מתקדמים ללומדים מנוסים." },
      { question: "האם אקבל תעודה?", answer: "כן, תקבל תעודה מוכרת לאחר סיום מוצלח." },
      { question: "האם הסדנאות אונליין או פרונטליות?", answer: "כרגע כל הסדנאות מועברות אונליין עם מפגשים חיים אינטראקטיביים." },
      { question: "האם יש תמיכה בהשמה?", answer: "כן, אנו מספקים הכוונה מקצועית, סקירת קורות חיים וחיבורים לשותפי גיוס." },
    ],
    ctaTitle: "מוכן <span style='color:#fff'>להתפתח</span> עם הסדנאות שלנו?",
    ctaDesc: "הצטרף למחנות הקצרים והאינטנסיביים שלנו ורכוש את המיומנויות שמעסיקים מחפשים היום.",
    ctaBtn: "הירשם עכשיו",
  },
};

export default function SkillDevelopmentWorkshopsPage() {
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
          src={cryptoHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Workshops Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            <span dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`
      }>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={b1} alt="Workshops Services" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#1e3a8a' }}>
              {t.sectionTitle}
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
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-[#e6f7ff] text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>{t.featuresTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {t.features.map((item, idx) => (
              <div key={item.num} className="flex items-start mb-6">
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
                  <p className="text-gray-600 text-base max-w-md">{item.desc}</p>
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
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`
      }>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>
            {t.faqTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: '#1e3a8a' }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className={theme === 'dark' ? 'mt-4 text-gray-200' : 'mt-4 text-gray-600'}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={
        `py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`
      }>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t.ctaTitle }} />
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
              src={b3}
              alt="Workshops CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
