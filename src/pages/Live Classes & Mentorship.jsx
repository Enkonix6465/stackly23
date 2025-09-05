import React, { useState, useEffect } from "react";
import web from "../assets/web.mp4";
import w1 from "../assets/w1.avif";
import w2 from "../assets/w2.jpeg";
import w3 from "../assets/w3.webp";

const translations = {
  English: {
    heroTitle: "Learn Smarter with <span style='color:#1e3a8a'>Live Classes</span> & <span style='color:#1e3a8a'>Mentorship</span>",
    heroDesc: "Join engaging live sessions, connect with expert mentors, and gain skills that matter. Whether you’re exploring new subjects or advancing your career, our programs are built to help you succeed.",
    tracksTitle: "Live Class & Mentorship Tracks",
    tracksDesc: "Choose from a range of tracks designed for personal, academic, and professional growth.",
    tracks: [
      { title: "Personal Development Essentials", mentor: "Jane Doe", price: "Free Trial", duration: "12h Live", lessons: "6 Sessions", image: w1, students: 18, rating: 5 },
      { title: "Communication & Leadership", mentor: "John Smith", price: "$49", duration: "20h Live", lessons: "8 Sessions", image: w2, students: 25, rating: 5 },
      { title: "Career Growth Mentorship", mentor: "Emily Lee", price: "$99", duration: "30h Live", lessons: "12 Sessions", image: w3, students: 12, rating: 5 },
    ],
    featuresTitle: "Key Features / What You’ll Get",
    features: [
      { num: '01', heading: 'Live Interactive Classes', desc: 'Engage in real-time with expert mentors and fellow learners.' },
      { num: '02', heading: 'Personalized Mentorship', desc: 'Get guidance tailored to your personal or career goals.' },
      { num: '03', heading: 'Practical Learning', desc: 'Apply what you learn through real-world activities and projects.' },
      { num: '04', heading: 'Flexible Schedules', desc: 'Attend sessions at times that suit your routine.' },
      { num: '05', heading: 'Career & Academic Support', desc: 'Get help with resumes, applications, and interview preparation.' },
      { num: '06', heading: 'Community Access', desc: 'Join a supportive network of peers, mentors, and industry experts.' },
    ],
    benefitsTitle: "Benefits / Outcomes",
    benefits: [
      "Confidence & Skills → Build practical knowledge and confidence to achieve your goals.",
      "Portfolio & Achievements → Create projects, activities, or case studies to showcase your progress.",
      "Ongoing Mentor Support → Receive guidance and feedback even after class hours.",
      "Flexible Learning → Join live or watch recordings whenever it works best for you.",
      "Certification → Earn certificates to strengthen your resume and profile.",
      "Networking → Connect with mentors, peers, and industry professionals."
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How do I join a live class?", answer: "Browse our class schedule, select your preferred session, and register. You’ll receive a link to join the live session with your mentor." },
      { question: "Are mentorship sessions one-on-one or group based?", answer: "We offer both! You can choose between personalized one-on-one mentorship or interactive group sessions, depending on your preference." },
      { question: "Will I get recordings of live classes?", answer: "Yes, all live sessions are recorded and made available so you can review them anytime." },
      { question: "Can I ask questions during live classes?", answer: "Absolutely! Our live classes are interactive, allowing you to ask questions and get real-time feedback from mentors." },
      { question: "What topics are covered in mentorship?", answer: "Mentorship spans a variety of topics including personal growth, career development, communication skills, digital literacy, and more." },
      { question: "Do I get a certificate after completing a program?", answer: "Yes! Upon successful completion, you’ll earn a certificate to showcase your skills and progress." },
    ],
    ctaTitle: "Start Your <span style='color:#fff'>Learning Journey</span> Today",
    ctaDesc: "Join our live classes and mentorship programs to unlock your potential, gain new skills, and connect with inspiring mentors. Your growth starts here!",
    ctaBtn: "Get Started",
  },
  Arabic: {
    heroTitle: "تعلم بذكاء مع <span style='color:#1e3a8a'>الفصول المباشرة</span> و <span style='color:#1e3a8a'>الإرشاد</span>",
    heroDesc: "انضم إلى جلسات مباشرة تفاعلية، وتواصل مع خبراء، واكتسب مهارات مهمة. سواء كنت تستكشف مواضيع جديدة أو تطور حياتك المهنية، برامجنا مصممة لمساعدتك على النجاح.",
    tracksTitle: "مسارات الفصول المباشرة والإرشاد",
    tracksDesc: "اختر من بين مجموعة من المسارات المصممة للنمو الشخصي والأكاديمي والمهني.",
    tracks: [
      { title: "أساسيات التطوير الشخصي", mentor: "جين دو", price: "تجربة مجانية", duration: "12س مباشر", lessons: "6 جلسات", image: w1, students: 18, rating: 5 },
      { title: "التواصل والقيادة", mentor: "جون سميث", price: "49$", duration: "20س مباشر", lessons: "8 جلسات", image: w2, students: 25, rating: 5 },
      { title: "إرشاد نمو الحياة المهنية", mentor: "إميلي لي", price: "99$", duration: "30س مباشر", lessons: "12 جلسة", image: w3, students: 12, rating: 5 },
    ],
    featuresTitle: "المميزات الرئيسية / ماذا ستحصل عليه",
    features: [
      { num: '01', heading: 'فصول تفاعلية مباشرة', desc: 'تفاعل في الوقت الحقيقي مع خبراء وزملاء متعلمين.' },
      { num: '02', heading: 'إرشاد شخصي', desc: 'احصل على توجيه مخصص لأهدافك الشخصية أو المهنية.' },
      { num: '03', heading: 'تعلم عملي', desc: 'طبق ما تتعلمه من خلال أنشطة ومشاريع واقعية.' },
      { num: '04', heading: 'جداول مرنة', desc: 'احضر الجلسات في الأوقات التي تناسبك.' },
      { num: '05', heading: 'دعم مهني وأكاديمي', desc: 'احصل على المساعدة في السير الذاتية والتقديمات والاستعداد للمقابلات.' },
      { num: '06', heading: 'الوصول إلى المجتمع', desc: 'انضم إلى شبكة داعمة من الأقران والخبراء.' },
    ],
    benefitsTitle: "الفوائد / النتائج",
    benefits: [
      "الثقة والمهارات → بناء معرفة عملية وثقة لتحقيق أهدافك.",
      "الإنجازات والملف الشخصي → أنشئ مشاريع وأنشطة ودراسات حالة لعرض تقدمك.",
      "دعم مستمر من المرشدين → تلقي التوجيه والتغذية الراجعة حتى بعد انتهاء الجلسات.",
      "تعلم مرن → انضم مباشرة أو شاهد التسجيلات في الوقت المناسب لك.",
      "شهادة → احصل على شهادات لتعزيز سيرتك الذاتية وملفك الشخصي.",
      "شبكات → تواصل مع مرشدين وزملاء ومحترفين في المجال."
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { question: "كيف أنضم إلى فصل مباشر؟", answer: "تصفح جدول الفصول، اختر الجلسة المفضلة، وسجل. ستحصل على رابط للانضمام للجلسة المباشرة مع المرشد." },
      { question: "هل جلسات الإرشاد فردية أم جماعية؟", answer: "نقدم كلاهما! يمكنك اختيار الإرشاد الفردي أو الجلسات الجماعية التفاعلية حسب رغبتك." },
      { question: "هل سأحصل على تسجيلات الفصول المباشرة؟", answer: "نعم، جميع الجلسات المباشرة مسجلة ومتاحة للمراجعة في أي وقت." },
      { question: "هل يمكنني طرح الأسئلة أثناء الفصول المباشرة؟", answer: "بالتأكيد! الفصول المباشرة تفاعلية وتتيح لك طرح الأسئلة والحصول على إجابات فورية." },
      { question: "ما المواضيع التي يغطيها الإرشاد؟", answer: "الإرشاد يشمل مجموعة متنوعة من المواضيع مثل النمو الشخصي، التطوير المهني، مهارات التواصل، الثقافة الرقمية، والمزيد." },
      { question: "هل أحصل على شهادة بعد إكمال البرنامج؟", answer: "نعم! بعد الإكمال بنجاح، ستحصل على شهادة لعرض مهاراتك وتقدمك." },
    ],
    ctaTitle: "ابدأ <span style='color:#fff'>رحلة التعلم</span> اليوم",
    ctaDesc: "انضم إلى الفصول المباشرة وبرامج الإرشاد لتكتشف إمكانياتك، وتكتسب مهارات جديدة، وتتواصل مع مرشدين ملهمين. نموك يبدأ هنا!",
    ctaBtn: "ابدأ الآن",
  },
  Hebrew: {
    heroTitle: "למד חכם עם <span style='color:#1e3a8a'>שיעורים חיים</span> ו <span style='color:#1e3a8a'>חונכות</span>",
    heroDesc: "הצטרף למפגשים חיים מרתקים, התחבר למנטורים מומחים, ורכוש מיומנויות חשובות. בין אם אתה חוקר נושאים חדשים או מתקדם בקריירה, התוכניות שלנו נועדו לעזור לך להצליח.",
    tracksTitle: "מסלולי שיעורים חיים וחונכות",
    tracksDesc: "בחר מתוך מגוון מסלולים המיועדים לצמיחה אישית, אקדמית ומקצועית.",
    tracks: [
      { title: "יסודות ההתפתחות האישית", mentor: "ג׳יין דו", price: "ניסיון חינם", duration: "12ש חי", lessons: "6 מפגשים", image: w1, students: 18, rating: 5 },
      { title: "תקשורת ומנהיגות", mentor: "ג׳ון סמית", price: "49$", duration: "20ש חי", lessons: "8 מפגשים", image: w2, students: 25, rating: 5 },
      { title: "חונכות לצמיחה בקריירה", mentor: "אמילי לי", price: "99$", duration: "30ש חי", lessons: "12 מפגשים", image: w3, students: 12, rating: 5 },
    ],
    featuresTitle: "תכונות עיקריות / מה תקבל",
    features: [
      { num: '01', heading: 'שיעורים חיים אינטראקטיביים', desc: 'השתתף בזמן אמת עם מנטורים מומחים ולומדים נוספים.' },
      { num: '02', heading: 'חונכות אישית', desc: 'קבל הדרכה מותאמת אישית למטרותיך האישיות או המקצועיות.' },
      { num: '03', heading: 'למידה מעשית', desc: 'יישם את מה שלמדת באמצעות פעילויות ופרויקטים אמיתיים.' },
      { num: '04', heading: 'לוחות זמנים גמישים', desc: 'השתתף במפגשים בזמנים שנוחים לך.' },
      { num: '05', heading: 'תמיכה מקצועית ואקדמית', desc: 'קבל עזרה בקורות חיים, הגשות והכנה לראיונות.' },
      { num: '06', heading: 'גישה לקהילה', desc: 'הצטרף לרשת תומכת של עמיתים, מנטורים ומומחים.' },
    ],
    benefitsTitle: "יתרונות / תוצאות",
    benefits: [
      "ביטחון ומיומנויות → בנה ידע מעשי וביטחון להשגת מטרותיך.",
      "הישגים ותיק עבודות → צור פרויקטים, פעילויות או מקרי מבחן להציג את ההתקדמות שלך.",
      "תמיכה מתמשכת ממנטורים → קבל הדרכה ומשוב גם לאחר שעות השיעור.",
      "למידה גמישה → הצטרף לשידור חי או צפה בהקלטות בזמנים שנוחים לך.",
      "תעודה → קבל תעודות לחיזוק קורות החיים והפרופיל שלך.",
      "נטוורקינג → התחבר למנטורים, עמיתים ואנשי מקצוע בתעשייה."
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      { question: "איך מצטרפים לשיעור חי?", answer: "דפדף בלוח השיעורים, בחר את המפגש המועדף, והרשם. תקבל קישור להצטרפות לשיעור החי עם המנטור." },
      { question: "האם החונכות אישית או קבוצתית?", answer: "אנו מציעים את שניהם! תוכל לבחור בין חונכות אישית או מפגשים קבוצתיים אינטראקטיביים, לפי העדפתך." },
      { question: "האם אקבל הקלטות של השיעורים החיים?", answer: "כן, כל המפגשים החיים מוקלטים וזמינים לצפייה בכל עת." },
      { question: "האם אפשר לשאול שאלות במהלך השיעורים החיים?", answer: "בהחלט! השיעורים החיים אינטראקטיביים ומאפשרים לשאול שאלות ולקבל תשובות בזמן אמת." },
      { question: "אילו נושאים מכסה החונכות?", answer: "החונכות כוללת מגוון נושאים כמו צמיחה אישית, פיתוח קריירה, מיומנויות תקשורת, אוריינות דיגיטלית ועוד." },
      { question: "האם אקבל תעודה בסיום התוכנית?", answer: "כן! לאחר סיום מוצלח, תקבל תעודה להצגת הכישורים וההתקדמות שלך." },
    ],
    ctaTitle: "התחל את <span style='color:#fff'>מסע הלמידה</span> שלך היום",
    ctaDesc: "הצטרף לשיעורים חיים ולתוכניות חונכות כדי לגלות את הפוטנציאל שלך, לרכוש מיומנויות חדשות, ולהתחבר למנטורים מעוררי השראה. הצמיחה שלך מתחילה כאן!",
    ctaBtn: "התחל עכשיו",
  },
};

export default function LiveWorkshopPage() {
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
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={web}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            <span dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Service Includes Section - Live Class Categories */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-[#f8fafc] text-black'}`}> 
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1e3a8a' }}>
            {t.tracksTitle}
          </h2>
          <p className="text-center text-lg mb-10">
            {t.tracksDesc}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {t.tracks.map((track, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <img src={track.image} alt={track.title} className="w-full h-44 object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-[#00BFFF]">{track.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{language === 'English' ? 'Mentor' : language === 'Arabic' ? 'المرشد' : 'מנטור'}: {track.mentor}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <span className="mr-2">{track.duration}</span>
                    <span className="mr-2">{track.lessons}</span>
                    <span>{track.price}</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500"> {track.students} {language === 'English' ? 'students' : language === 'Arabic' ? 'طالب' : 'סטודנטים'}</span>
                    <span className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < track.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
              <li key={idx} className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>
            {t.faqTitle}
          </h2>
          <div className="grid  lg:grid-cols-2 gap-6">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: '#1e3a8a' }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {/* Answer */}
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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6">
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
              src={w3}
              alt="Live Classes and Mentorship"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
