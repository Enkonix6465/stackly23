import React, { useState } from "react";
import aihero from "../assets/aihero.mp4";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpeg";
import a3 from "../assets/a3.jpg";
import englishImg from "../assets/english.jpg";
import dataScienceImg from "../assets/datascience.jpg";
import graphicImg from "../assets/graphic.jpeg";
import arts from "../assets/arts.jpg";
import businessImg from "../assets/business.jpg";
import computerImg from "../assets/computer.jpg";

export default function CoursesProgramsPage() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'English');
  const [openIndex, setOpenIndex] = useState(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language') || 'English';
      setLanguage(storedLang);
      const handleLanguageChange = () => {
        const newLang = localStorage.getItem('language') || 'English';
        setLanguage(newLang);
      };
      window.addEventListener('language-changed', handleLanguageChange);
      window.addEventListener('storage', handleLanguageChange);
      return () => {
        window.removeEventListener('language-changed', handleLanguageChange);
        window.removeEventListener('storage', handleLanguageChange);
      };
    }
  }, []);

  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Translations
  const translations = {
    English: {
      heroTitle: "Learn Anytime, Anywhere Build Your Financial Future",
      heroDesc: "Gain practical knowledge and industry recognized certifications from our expert-led courses. Whether you’re just starting out or looking to level up, our programs are designed to help you achieve financial confidence and career growth.",
      categoriesTitle: "Course Categories",
      categoriesDesc: "Explore our diverse range of course categories and find the perfect fit for your learning journey.",
      courses: [
        { title: "English For Today", category: "Language", lecturer: "Admin", price: "Free", duration: "16h 30m", lessons: "0 Lessons", image: englishImg, students: 10, rating: 3 },
        { title: "Data Science Basics", category: "Technology", lecturer: "Admin", price: "$50", duration: "20h 10m", lessons: "6 Lessons", image: dataScienceImg, students: 25, rating: 5 },
        { title: "Graphic Design", category: "Design", lecturer: "Admin", price: "$40", duration: "15h 00m", lessons: "4 Lessons", image: graphicImg, students: 12, rating: 4 },
        { title: "Creative Arts", category: "Arts", lecturer: "Admin", price: "$20", duration: "12h 15m", lessons: "3 Lessons", image: arts, students: 8, rating: 4 },
        { title: "Business Management", category: "Business", lecturer: "Admin", price: "$60", duration: "18h 00m", lessons: "5 Lessons", image: businessImg, students: 15, rating: 5 },
        { title: "Computer Basics", category: "Technology", lecturer: "Admin", price: "$30", duration: "10h 45m", lessons: "2 Lessons", image: computerImg, students: 20, rating: 4 },
      ],
      featuresTitle: "Key Features / What You’ll Get",
      features: [
        { num: '01', heading: 'Expert Mentors', desc: 'Learn from industry leaders and experienced educators.' },
        { num: '02', heading: 'Real-Time Q&A', desc: 'Get your questions answered instantly during live sessions.' },
        { num: '03', heading: 'Flexible Schedules', desc: 'Access courses anytime, anywhere, at your own pace.' },
        { num: '04', heading: 'Certification', desc: 'Earn industry-recognized certificates upon completion.' },
        { num: '05', heading: 'Global Community', desc: 'Join a diverse network of learners and professionals.' },
        { num: '06', heading: 'Hands-on Projects', desc: 'Apply your knowledge through real-world assignments and case studies.' },
      ],
      benefitsTitle: "Benefits / Outcomes",
      benefits: [
        "Gain In-Demand Skills → Learn industry-relevant skills across tech, business, and creative domains.",
        "Structured Learning Paths → Progress from beginner to advanced with step-by-step courses.",
        "Hands-on Experience → Apply knowledge through projects, assignments, and case studies.",
        "Recognized Certifications → Earn shareable certificates to boost your resume & LinkedIn profile.",
        "Career Readiness → Build portfolios, strengthen resumes, and prepare for job interviews.",
        "Flexibility & Lifelong Access → Learn anytime, anywhere, and revisit course material whenever needed."
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { question: "How do I enroll in a course or program?", answer: "Simply browse our course categories, select your desired course, and click the enroll button. You’ll be guided through a quick registration process." },
        { question: "Are the courses self-paced or scheduled?", answer: "Most of our courses are self-paced, allowing you to learn anytime, anywhere. Some programs may include live sessions or scheduled events for real-time interaction." },
        { question: "Will I receive a certificate after completing a course?", answer: "Yes! Upon successful completion, you’ll earn a shareable certificate to showcase your achievement on your resume and LinkedIn profile." },
        { question: "What kind of support is available during the course?", answer: "You’ll have access to expert mentors, real-time Q&A, and a supportive community forum to help you every step of the way." },
        { question: "Can I access course materials after finishing?", answer: "Absolutely. You’ll have lifetime access to all course materials, so you can revisit lessons and resources whenever you need." },
        { question: "Are there any prerequisites for joining a program?", answer: "Most beginner courses require no prior experience. Advanced programs may recommend some background knowledge, which will be clearly listed in the course details." },
      ],
      exploreTitle: "Explore Courses & Programs Built for Your Success",
      exploreDesc: "Unlock a wide range of curated courses designed to help you build real-world skills, earn industry-recognized certifications, and achieve your career goals. Learn at your own pace with expert guidance every step of the way.",
      exploreBtn: "Browse Courses",
    },
    Arabic: {
      heroTitle: "تعلم في أي وقت، في أي مكان وابنِ مستقبلك المالي",
      heroDesc: "اكتسب معرفة عملية وشهادات معترف بها من خبرائنا. سواء كنت مبتدئًا أو ترغب في تطوير مهاراتك، برامجنا مصممة لمساعدتك على تحقيق الثقة المالية والنمو المهني.",
      categoriesTitle: "فئات الدورات",
      categoriesDesc: "استكشف مجموعة متنوعة من فئات الدورات وابحث عن الأنسب لمسيرتك التعليمية.",
      courses: [
        { title: "الإنجليزية لليوم", category: "اللغة", lecturer: "المشرف", price: "مجاني", duration: "16س 30د", lessons: "0 درس", image: englishImg, students: 10, rating: 3 },
        { title: "أساسيات علم البيانات", category: "التقنية", lecturer: "المشرف", price: "50$", duration: "20س 10د", lessons: "6 دروس", image: dataScienceImg, students: 25, rating: 5 },
        { title: "تصميم جرافيك", category: "التصميم", lecturer: "المشرف", price: "40$", duration: "15س 00د", lessons: "4 دروس", image: graphicImg, students: 12, rating: 4 },
        { title: "الفنون الإبداعية", category: "الفنون", lecturer: "المشرف", price: "20$", duration: "12س 15د", lessons: "3 دروس", image: arts, students: 8, rating: 4 },
        { title: "إدارة الأعمال", category: "الأعمال", lecturer: "المشرف", price: "60$", duration: "18س 00د", lessons: "5 دروس", image: businessImg, students: 15, rating: 5 },
        { title: "أساسيات الحاسوب", category: "التقنية", lecturer: "المشرف", price: "30$", duration: "10س 45د", lessons: "2 درس", image: computerImg, students: 20, rating: 4 },
      ],
      featuresTitle: "المميزات الرئيسية / ماذا ستحصل عليه",
      features: [
        { num: '01', heading: 'مدربون خبراء', desc: 'تعلم من قادة الصناعة والمعلمين ذوي الخبرة.' },
        { num: '02', heading: 'أسئلة وأجوبة مباشرة', desc: 'احصل على إجابات فورية خلال الجلسات المباشرة.' },
        { num: '03', heading: 'جداول مرنة', desc: 'تعلم في أي وقت، في أي مكان، وبالوتيرة التي تناسبك.' },
        { num: '04', heading: 'شهادة', desc: 'احصل على شهادات معترف بها عند الانتهاء.' },
        { num: '05', heading: 'مجتمع عالمي', desc: 'انضم إلى شبكة متنوعة من المتعلمين والمهنيين.' },
        { num: '06', heading: 'مشاريع عملية', desc: 'طبق معرفتك من خلال مهام ودراسات حالة واقعية.' },
      ],
      benefitsTitle: "الفوائد / النتائج",
      benefits: [
        "اكتساب مهارات مطلوبة → تعلم مهارات ذات صلة بالصناعة في مجالات التقنية والأعمال والإبداع.",
        "مسارات تعلم منظمة → تقدم من المبتدئ إلى المتقدم عبر دورات متسلسلة.",
        "خبرة عملية → طبق المعرفة من خلال المشاريع والمهام ودراسات الحالة.",
        "شهادات معترف بها → احصل على شهادات قابلة للمشاركة لتعزيز سيرتك الذاتية وملفك على لينكدإن.",
        "الاستعداد المهني → بناء ملفات أعمال وتقوية السير الذاتية والاستعداد للمقابلات الوظيفية.",
        "مرونة وإمكانية الوصول مدى الحياة → تعلم في أي وقت وارجع للمواد متى شئت.",
      ],
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        { question: "كيف أسجل في دورة أو برنامج؟", answer: "تصفح فئات الدورات، اختر الدورة المطلوبة، واضغط زر التسجيل. سيتم إرشادك خلال عملية التسجيل السريعة." },
        { question: "هل الدورات ذاتية أم مجدولة؟", answer: "معظم الدورات ذاتية، ويمكنك التعلم في أي وقت ومن أي مكان. بعض البرامج تشمل جلسات مباشرة أو أحداث مجدولة للتفاعل الفوري." },
        { question: "هل سأحصل على شهادة بعد إكمال الدورة؟", answer: "نعم! بعد الإكمال بنجاح، ستحصل على شهادة قابلة للمشاركة لإبراز إنجازك في سيرتك الذاتية وملفك على لينكدإن." },
        { question: "ما نوع الدعم المتوفر أثناء الدورة؟", answer: "ستحصل على دعم من مدربين خبراء، أسئلة وأجوبة مباشرة، ومنتدى مجتمعي داعم في كل خطوة." },
        { question: "هل يمكنني الوصول للمواد بعد الانتهاء؟", answer: "بالتأكيد. ستحصل على وصول مدى الحياة لجميع المواد، ويمكنك العودة للدروس والموارد في أي وقت." },
        { question: "هل هناك متطلبات للانضمام للبرنامج؟", answer: "معظم الدورات للمبتدئين لا تتطلب خبرة سابقة. البرامج المتقدمة قد تتطلب معرفة مسبقة، وسيتم ذكر ذلك بوضوح في تفاصيل الدورة." },
      ],
      exploreTitle: "استكشف الدورات والبرامج المصممة لنجاحك",
      exploreDesc: "افتح مجموعة واسعة من الدورات المصممة لمساعدتك على بناء مهارات واقعية، والحصول على شهادات معترف بها، وتحقيق أهدافك المهنية. تعلم بالوتيرة التي تناسبك مع إرشاد الخبراء في كل خطوة.",
      exploreBtn: "تصفح الدورات",
    },
    Hebrew: {
      heroTitle: "למד בכל זמן, בכל מקום ובנה את עתידך הכלכלי",
      heroDesc: "רכוש ידע מעשי ותעודות מוכרות מהקורסים בהובלת מומחים שלנו. בין אם אתה מתחיל או רוצה להתקדם, התוכניות שלנו נועדו לעזור לך להשיג ביטחון פיננסי וצמיחה מקצועית.",
      categoriesTitle: "קטגוריות קורסים",
      categoriesDesc: "גלה מגוון רחב של קטגוריות קורסים ומצא את ההתאמה המושלמת למסע הלמידה שלך.",
      courses: [
        { title: "אנגלית להיום", category: "שפה", lecturer: "מנהל", price: "חינם", duration: "16ש 30ד", lessons: "0 שיעורים", image: englishImg, students: 10, rating: 3 },
        { title: "יסודות מדעי הנתונים", category: "טכנולוגיה", lecturer: "מנהל", price: "50$", duration: "20ש 10ד", lessons: "6 שיעורים", image: dataScienceImg, students: 25, rating: 5 },
        { title: "עיצוב גרפי", category: "עיצוב", lecturer: "מנהל", price: "40$", duration: "15ש 00ד", lessons: "4 שיעורים", image: graphicImg, students: 12, rating: 4 },
        { title: "אמנויות יצירתיות", category: "אמנות", lecturer: "מנהל", price: "20$", duration: "12ש 15ד", lessons: "3 שיעורים", image: arts, students: 8, rating: 4 },
        { title: "ניהול עסקים", category: "עסקים", lecturer: "מנהל", price: "60$", duration: "18ש 00ד", lessons: "5 שיעורים", image: businessImg, students: 15, rating: 5 },
        { title: "יסודות מחשב", category: "טכנולוגיה", lecturer: "מנהל", price: "30$", duration: "10ש 45ד", lessons: "2 שיעורים", image: computerImg, students: 20, rating: 4 },
      ],
      featuresTitle: "תכונות עיקריות / מה תקבל",
      features: [
        { num: '01', heading: 'מנטורים מומחים', desc: 'למד ממובילי תעשייה ומחנכים מנוסים.' },
        { num: '02', heading: 'שאלות ותשובות בזמן אמת', desc: 'קבל תשובות מיידיות במהלך מפגשים חיים.' },
        { num: '03', heading: 'לוחות זמנים גמישים', desc: 'למד בכל זמן, בכל מקום, ובקצב שלך.' },
        { num: '04', heading: 'תעודה', desc: 'קבל תעודות מוכרות בסיום.' },
        { num: '05', heading: 'קהילה גלובלית', desc: 'הצטרף לרשת מגוונת של לומדים ואנשי מקצוע.' },
        { num: '06', heading: 'פרויקטים מעשיים', desc: 'יישם את הידע שלך באמצעות משימות ומקרי מבחן אמיתיים.' },
      ],
      benefitsTitle: "יתרונות / תוצאות",
      benefits: [
        "רכישת מיומנויות נדרשות → למד מיומנויות רלוונטיות לתעשייה בתחומי טכנולוגיה, עסקים ויצירה.",
        "מסלולי למידה מובנים → התקדם ממתחיל למתקדם עם קורסים שלב אחר שלב.",
        "ניסיון מעשי → יישם ידע באמצעות פרויקטים, משימות ומקרי מבחן.",
        "תעודות מוכרות → קבל תעודות שניתן לשתף לחיזוק קורות החיים ופרופיל הלינקדאין שלך.",
        "הכנה לקריירה → בנה תיק עבודות, חזק קורות חיים והתכונן לראיונות עבודה.",
        "גמישות וגישה לכל החיים → למד בכל זמן, בכל מקום, וחזור לחומרי הקורס מתי שתרצה.",
      ],
      faqTitle: "שאלות נפוצות",
      faqs: [
        { question: "איך נרשמים לקורס או תוכנית?", answer: "פשוט דפדף בקטגוריות הקורסים, בחר את הקורס הרצוי ולחץ על כפתור ההרשמה. תודרך בתהליך הרשמה מהיר." },
        { question: "האם הקורסים בקצב עצמי או מתוזמנים?", answer: "רוב הקורסים בקצב עצמי, כך שתוכל ללמוד בכל זמן ובכל מקום. חלק מהתוכניות כוללות מפגשים חיים או אירועים מתוזמנים לאינטראקציה בזמן אמת." },
        { question: "האם אקבל תעודה בסיום הקורס?", answer: "כן! לאחר סיום מוצלח, תקבל תעודה שניתן לשתף כדי להציג את ההישג שלך בקורות החיים ובלינקדאין." },
        { question: "איזה סוג תמיכה יש במהלך הקורס?", answer: "יהיה לך גישה למנטורים מומחים, שאלות ותשובות בזמן אמת ופורום קהילתי תומך בכל שלב." },
        { question: "האם אוכל לגשת לחומרי הקורס לאחר הסיום?", answer: "בהחלט. תהיה לך גישה לכל החיים לכל חומרי הקורס, כך שתוכל לחזור לשיעורים ולמשאבים בכל עת." },
        { question: "האם יש דרישות מוקדמות להצטרפות לתוכנית?", answer: "רוב הקורסים למתחילים אינם דורשים ניסיון קודם. תוכניות מתקדמות עשויות להמליץ על ידע קודם, שיופיע בפרטי הקורס." },
      ],
      exploreTitle: "גלה קורסים ותוכניות שנבנו להצלחה שלך",
      exploreDesc: "פתח מגוון רחב של קורסים שנבנו כדי לעזור לך לבנות מיומנויות אמיתיות, לקבל תעודות מוכרות ולהשיג את מטרות הקריירה שלך. למד בקצב שלך עם הדרכת מומחים בכל שלב.",
      exploreBtn: "עיין בקורסים",
    },
  };

  const t = translations[language] || translations['English'];
  const courses = t.courses;
  const features = t.features;
  const benefits = t.benefits;
  const faqs = t.faqs;
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}${isRTL ? ' rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={aihero}
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
            {t.heroTitle.split(' ').map((word, i) =>
              word.toLowerCase().includes('future') ? <span key={i} style={{ color: '#1e3a8a' }}>{word} </span> : word + ' '
            )}
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{t.heroDesc}</p>
        </div>
      </section>

      {/* Service Includes Section - Course Categories */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-[#fff] text-black'}`}> 
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1e3a8a' }}>{t.categoriesTitle}</h2>
          <p className="text-center text-lg mb-10">{t.categoriesDesc}</p>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-[#1e3a8a]">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{course.category}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <span className="mr-2">{course.duration}</span>
                    <span className="mr-2">{course.lessons}</span>
                    <span>{course.price}</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500"> {course.students} {language === 'English' ? 'students' : language === 'Arabic' ? 'طلاب' : 'סטודנטים'}</span>
                    <span className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < course.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
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
            {features.map((item, idx) => (
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

    {/* Benefits / Outcomes (Courses & Programs Page) */}
    <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}> 
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#1e3a8a' }}>{t.benefitsTitle}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* Frequently Asked Questions */}
    <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}> 
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>{t.faqTitle}</h2>
        <div className="grid  lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
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

    {/* Explore Courses & Programs Section */}
    <section className={
      `py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`
    }>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div className="space-y-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.exploreTitle}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{t.exploreDesc}</p>
          <button className={
            `px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ` +
            (theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#fff] text-black hover:bg-[#0099cc]')
          }>
            {t.exploreBtn}
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center h-full">
          <img
            src={a3}
            alt="Courses & Programs"
            className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </section>

  </div>
  );
}
