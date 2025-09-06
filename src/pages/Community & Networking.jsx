
import React, { useState, useEffect } from "react";
import communityHero from "../assets/cloud.mp4";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.avif";

const translations = {
  English: {
    heroTitle: "Grow Together with <span style='color:#1e3a8a'>Community & Networking</span>",
    heroDesc: "Connect with peers, join alumni groups, and collaborate through discussion forums. Build lasting relationships, exchange knowledge, and accelerate your growth with a strong network.",
    sectionTitle: "What Our Community Offers",
    sectionList: [
      "Peer Learning Groups",
      "Discussion Forums",
      "Alumni Network",
      "Collaborative Projects",
      "Mentorship Opportunities",
      "Networking Events & Meetups",
    ],
    featuresTitle: "Key Features / What You’ll Get",
    features: [
      { num: "01", heading: "Peer Learning", desc: "Collaborate with like-minded learners in small groups." },
      { num: "02", heading: "Alumni Access", desc: "Stay connected with our strong alumni network for lifelong support." },
      { num: "03", heading: "Discussion Forums", desc: "Engage in topic-based forums to ask, share, and learn." },
      { num: "04", heading: "Mentorship", desc: "Get guidance from experienced alumni and professionals." },
      { num: "05", heading: "Networking Events", desc: "Attend online and offline meetups, webinars, and events." },
      { num: "06", heading: "Collaborative Growth", desc: "Work on projects and initiatives together with peers." },
    ],
    benefitsTitle: "Benefits / Outcomes",
    benefits: [
      "Expand Your Network → Connect with peers, alumni, and mentors worldwide.",
      "Collaborative Learning → Share ideas, solve problems, and grow together.",
      "Access to Mentorship → Learn from experienced professionals and alumni.",
      "Career Opportunities → Leverage connections for jobs, internships, and collaborations.",
      "Lifelong Alumni Support → Stay connected beyond your learning journey.",
      "Confidence & Growth → Develop interpersonal and leadership skills through networking.",
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "What is the Community & Networking service?", answer: "It’s a platform for peer learning, discussions, and networking where students and professionals collaborate, share ideas, and grow together." },
      { question: "Do I get access to alumni groups?", answer: "Yes, you’ll join our alumni network for lifelong connections, mentorship, and career support." },
      { question: "Can I participate in discussion forums?", answer: "Absolutely! Our forums allow you to share knowledge, ask questions, and collaborate with peers globally." },
      { question: "Is networking only online?", answer: "We offer both online groups and offline meetups/events for deeper engagement." },
      { question: "Do you provide mentorship opportunities?", answer: "Yes, through alumni and expert-led sessions, you’ll gain mentorship and career guidance." },
      { question: "Is there a cost to join?", answer: "Community & Networking access is included with many of our programs, with premium events available separately." },
    ],
    ctaTitle: "Ready to <span style='color:#fff'>Connect & Collaborate?</span>",
    ctaDesc: "Join our peer groups, alumni network, and discussion forums today. Build meaningful relationships, collaborate on ideas, and grow your career with the power of community.",
    ctaBtn: "Join the Community",
  },
  Arabic: {
    heroTitle: "انمو معًا مع <span style='color:#1e3a8a'>المجتمع والشبكات</span>",
    heroDesc: "تواصل مع الأقران، وانضم إلى مجموعات الخريجين، وتعاون من خلال المنتديات. ابنِ علاقات دائمة، وتبادل المعرفة، وسرّع نموك مع شبكة قوية.",
    sectionTitle: "ماذا يقدم مجتمعنا؟",
    sectionList: [
      "مجموعات التعلم الجماعي",
      "منتديات النقاش",
      "شبكة الخريجين",
      "مشاريع تعاونية",
      "فرص الإرشاد",
      "فعاليات ولقاءات الشبكات",
    ],
    featuresTitle: "المميزات الرئيسية / ماذا ستحصل عليه",
    features: [
      { num: "01", heading: "تعلم جماعي", desc: "تعاون مع متعلمين مشابهين في مجموعات صغيرة." },
      { num: "02", heading: "الوصول للخريجين", desc: "ابقَ على اتصال مع شبكة الخريجين القوية للدعم مدى الحياة." },
      { num: "03", heading: "منتديات النقاش", desc: "شارك في منتديات موضوعية للسؤال والمشاركة والتعلم." },
      { num: "04", heading: "الإرشاد", desc: "احصل على التوجيه من خريجين ومحترفين ذوي خبرة." },
      { num: "05", heading: "فعاليات الشبكات", desc: "احضر لقاءات وندوات وفعاليات عبر الإنترنت وخارجها." },
      { num: "06", heading: "النمو التعاوني", desc: "اعمل على مشاريع ومبادرات مع الأقران." },
    ],
    benefitsTitle: "الفوائد / النتائج",
    benefits: [
      "وسّع شبكتك → تواصل مع الأقران والخريجين والمرشدين حول العالم.",
      "تعلم تعاوني → شارك الأفكار، حل المشكلات، وانمو معًا.",
      "الوصول للإرشاد → تعلم من محترفين وخريجين ذوي خبرة.",
      "فرص وظيفية → استفد من العلاقات للحصول على وظائف وتدريب وتعاون.",
      "دعم الخريجين مدى الحياة → ابقَ على اتصال بعد رحلتك التعليمية.",
      "الثقة والنمو → طور مهاراتك الشخصية والقيادية من خلال الشبكات.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { question: "ما هي خدمة المجتمع والشبكات؟", answer: "هي منصة للتعلم الجماعي، والنقاشات، والشبكات حيث يتعاون الطلاب والمحترفون، ويتبادلون الأفكار، وينمون معًا." },
      { question: "هل أحصل على الوصول لمجموعات الخريجين؟", answer: "نعم، ستنضم إلى شبكة الخريجين لدينا للاتصالات مدى الحياة، والإرشاد، والدعم المهني." },
      { question: "هل يمكنني المشاركة في المنتديات؟", answer: "بالتأكيد! تتيح لك منتدياتنا مشاركة المعرفة، وطرح الأسئلة، والتعاون مع الأقران عالميًا." },
      { question: "هل الشبكات فقط عبر الإنترنت؟", answer: "نقدم مجموعات عبر الإنترنت ولقاءات/فعاليات خارجية لمزيد من التفاعل." },
      { question: "هل توفرون فرص إرشاد؟", answer: "نعم، من خلال جلسات الخريجين والخبراء ستحصل على الإرشاد والتوجيه المهني." },
      { question: "هل هناك تكلفة للانضمام؟", answer: "الوصول للمجتمع والشبكات مشمول في العديد من برامجنا، مع فعاليات مميزة متاحة بشكل منفصل." },
    ],
    ctaTitle: "جاهز <span style='color:#fff'>للتواصل والتعاون؟</span>",
    ctaDesc: "انضم إلى مجموعات الأقران، وشبكة الخريجين، ومنتديات النقاش اليوم. ابنِ علاقات هادفة، وتعاون على الأفكار، ونمِ حياتك المهنية بقوة المجتمع.",
    ctaBtn: "انضم للمجتمع",
  },
  Hebrew: {
    heroTitle: "צמחו יחד עם <span style='color:#1e3a8a'>קהילה ורישות</span>",
    heroDesc: "התחברו עם עמיתים, הצטרפו לקבוצות בוגרים, ושיתפו פעולה בפורומים. בנו קשרים מתמשכים, החליפו ידע, והאיצו את הצמיחה שלכם עם רשת חזקה.",
    sectionTitle: "מה הקהילה שלנו מציעה?",
    sectionList: [
      "קבוצות לימוד עמיתים",
      "פורומי דיון",
      "רשת בוגרים",
      "פרויקטים שיתופיים",
      "הזדמנויות חונכות",
      "אירועי רישות ומפגשים",
    ],
    featuresTitle: "תכונות עיקריות / מה תקבלו",
    features: [
      { num: "01", heading: "למידה עמיתים", desc: "שתפו פעולה עם לומדים דומים בקבוצות קטנות." },
      { num: "02", heading: "גישה לבוגרים", desc: "הישארו מחוברים עם רשת בוגרים חזקה לתמיכה לכל החיים." },
      { num: "03", heading: "פורומי דיון", desc: "השתתפו בפורומים נושאיים לשאול, לשתף וללמוד." },
      { num: "04", heading: "חונכות", desc: "קבלו הדרכה מבוגרים ומקצוענים מנוסים." },
      { num: "05", heading: "אירועי רישות", desc: "השתתפו במפגשים, וובינרים ואירועים אונליין ואופליין." },
      { num: "06", heading: "צמיחה שיתופית", desc: "עבדו על פרויקטים ויוזמות יחד עם עמיתים." },
    ],
    benefitsTitle: "יתרונות / תוצאות",
    benefits: [
      "הרחיבו את הרשת שלכם → התחברו עם עמיתים, בוגרים וחונכים ברחבי העולם.",
      "למידה שיתופית → שתפו רעיונות, פתרו בעיות וצמחו יחד.",
      "גישה לחונכות → למדו ממקצוענים ובוגרים מנוסים.",
      "הזדמנויות קריירה → נצלו קשרים למשרות, התמחות ושיתופי פעולה.",
      "תמיכת בוגרים לכל החיים → הישארו מחוברים מעבר למסע הלמידה שלכם.",
      "ביטחון וצמיחה → פתחו מיומנויות בין-אישיות ומנהיגות דרך רישות.",
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      { question: "מהי שירות קהילה ורישות?", answer: "זו פלטפורמה ללמידה עמיתים, דיונים ורישות בה סטודנטים ומקצוענים משתפים פעולה, מחליפים רעיונות וצומחים יחד." },
      { question: "האם אקבל גישה לקבוצות בוגרים?", answer: "כן, תצטרפו לרשת הבוגרים שלנו לקשרים לכל החיים, חונכות ותמיכה בקריירה." },
      { question: "האם אפשר להשתתף בפורומים?", answer: "בהחלט! הפורומים שלנו מאפשרים לשתף ידע, לשאול שאלות ולשתף פעולה עם עמיתים גלובלית." },
      { question: "האם הרישות רק אונליין?", answer: "אנו מציעים קבוצות אונליין ומפגשים/אירועים אופליין למעורבות עמוקה יותר." },
      { question: "האם יש הזדמנויות חונכות?", answer: "כן, דרך מפגשי בוגרים ומומחים תקבלו חונכות והכוונה מקצועית." },
      { question: "האם יש עלות להצטרף?", answer: "הגישה לקהילה ורישות כלולה בהרבה מהתוכניות שלנו, עם אירועים פרימיום בנפרד." },
    ],
    ctaTitle: "מוכן <span style='color:#fff'>להתחבר ולשתף פעולה?</span>",
    ctaDesc: "הצטרפו לקבוצות עמיתים, רשת הבוגרים ופורומי הדיון היום. בנו קשרים משמעותיים, שתפו פעולה על רעיונות וצמחו בקריירה עם כוח הקהילה.",
    ctaBtn: "הצטרף לקהילה",
  },
};

export default function CommunityNetworkingPage() {
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
          src={communityHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Community & Networking Hero Background Video"
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
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          <div className="flex justify-center">
            <img src={c1} alt="Community Networking" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
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

      {/* Key Features */}
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
                className="rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg bg-white text-black"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: '#1e3a8a' }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
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
          <div className="flex justify-center items-center h-full">
            <img
              src={c3}
              alt="Community Networking CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
