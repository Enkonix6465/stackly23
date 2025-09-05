import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import heroVideo from "../assets/home1hero.mp4";
import HomeImg from "../assets/home.avif";
import impactImg from "../assets/impact.jpg";

// ✅ Import course images
import businessImg from "../assets/business.jpg";
import englishImg from "../assets/english.jpg";
import computerImg from "../assets/computer.jpg";
import dataScienceImg from "../assets/datascience.jpg";
import graphicImg from "../assets/graphic.jpeg";
import arts from "../assets/arts.jpg";
import instructorImg from "../assets/instructor.jpg";
import learningImg from "../assets/learning.jpg";
import communityImg from "../assets/community.jpg";

// Helper for count up animation
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let startTime = null;
    function animateCountUp(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCountUp);
      }
    }
    ref.current = requestAnimationFrame(animateCountUp);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return count;
}

// Main Home1 component
export default function Home1({ theme = "light" }) {
  // Theme and language state synced with Header
  const [themeState, setThemeState] = useState('light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'English');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setThemeState(storedTheme);
      const storedLang = localStorage.getItem('language') || 'English';
      setLanguage(storedLang);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setThemeState(newTheme);
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
  // Section toggles
  const [showHero, setShowHero] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  const [showWhyChoose, setShowWhyChoose] = useState(true);
  const [showTestimonials, setShowTestimonials] = useState(true);
  const [showCTA, setShowCTA] = useState(true);
  // Courses array with translation keys
  const courses = [
    {
      titleKey: "course1Title",
      categoryKey: "course1Category",
      lecturerKey: "course1Lecturer",
      priceKey: "course1Price",
      durationKey: "course1Duration",
      lessonsKey: "course1Lessons",
      image: englishImg,
      studentsKey: "course1Students",
      rating: 3,
    },
    {
      titleKey: "course2Title",
      categoryKey: "course2Category",
      lecturerKey: "course2Lecturer",
      priceKey: "course2Price",
      durationKey: "course2Duration",
      lessonsKey: "course2Lessons",
      image: dataScienceImg,
      studentsKey: "course2Students",
      rating: 5,
    },
    {
      titleKey: "course3Title",
      categoryKey: "course3Category",
      lecturerKey: "course3Lecturer",
      priceKey: "course3Price",
      durationKey: "course3Duration",
      lessonsKey: "course3Lessons",
      image: graphicImg,
      studentsKey: "course3Students",
      rating: 4,
    },
    {
      titleKey: "course4Title",
      categoryKey: "course4Category",
      lecturerKey: "course4Lecturer",
      priceKey: "course4Price",
      durationKey: "course4Duration",
      lessonsKey: "course4Lessons",
      image: arts,
      studentsKey: "course4Students",
      rating: 4,
    },
  ];

  // Features array
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from professionals with years of experience in their field.",
      image: instructorImg,
    },
    {
      title: "Flexible Learning",
      description: "Access our courses anytime, anywhere, at your own pace.",
      image: learningImg,
    },
    {
      title: "Global Community",
      description: "Join a worldwide network of learners and professionals.",
      image: communityImg,
    },
  ];

  const [courseIndex, setCourseIndex] = useState(0);
  const nextCourse = () => setCourseIndex((i) => (i + 3) % courses.length);
  const prevCourse = () => setCourseIndex((i) => (i - 3 + courses.length) % courses.length);

  let visibleCourses = courses.slice(courseIndex, courseIndex + 3);
  if (visibleCourses.length < 3) {
    visibleCourses = visibleCourses.concat(
      courses.slice(0, 3 - visibleCourses.length)
    );
  }

  // RTL support for Arabic/Hebrew
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  // Expanded translations for all sections
  const translations = {
      testimonialNames: [
        ['Chicana Males', 'شيكانا ماليس', 'צ׳יקנה מאלס'],
        ['Richard Coste', 'ريتشارد كوست', 'ריצ׳רד קוסטה'],
        ['Richard Cost', 'ريتشارد كوست', 'ריצ׳רד קוסט']
      ],
    English: {
      heroTitle: 'Discover.Learn.Achieve',
      heroDesc: 'Learn anytime, anywhere with expert-led courses, live classes, and industry-recognized certifications designed to boost your career.',
      heroBtn: 'Start Learning Today',
      hideHero: 'Hide Hero Section',
      showHero: 'Show Hero Section',
      coursesTitle: 'Popular Courses',
      coursesDesc: 'Explore our top-rated courses and start learning today.',
      lecturer: 'Lecturer',
      inCategory: 'in',
      course1Title: 'English For Today',
      course1Category: 'Language',
      course1Lecturer: 'Admin',
      course1Price: 'Free',
      course1Duration: '16h 30m',
      course1Lessons: '0 Lessons',
      course1Students: '10',
      course2Title: 'Data Science Basics',
      course2Category: 'Technology',
      course2Lecturer: 'Admin',
      course2Price: '$50',
      course2Duration: '20h 10m',
      course2Lessons: '6 Lessons',
      course2Students: '25',
      course3Title: 'Graphic Design',
      course3Category: 'Design',
      course3Lecturer: 'Admin',
      course3Price: '$40',
      course3Duration: '15h 00m',
      course3Lessons: '4 Lessons',
      course3Students: '12',
      course4Title: 'Creative Arts',
      course4Category: 'Arts',
      course4Lecturer: 'Admin',
      course4Price: '$20',
      course4Duration: '12h 15m',
      course4Lessons: '3 Lessons',
      course4Students: '8',
      aboutTitle: 'Step Into the Future of Learning',
      aboutList: [
        '✔ Access a wide variety of carefully curated online courses to boost your academics, career, and personal growth.',
        '✔ Learn directly from experienced mentors through interactive lessons and practical projects.',
        '✔ Courses tailored for every stage — from beginners to professionals.',
        '✔ Flexible schedules that let you learn at your own pace, anytime and anywhere.',
        '✔ Career-focused curriculum designed with industry demands in mind.',
        '✔ Join a global community of learners, collaborate, and grow together.'
      ],
      whyTitle: 'Why Choose Us?',
      features: [
        { title: 'Expert Instructors', desc: 'Learn from professionals with years of experience in their field.' },
        { title: 'Flexible Learning', desc: 'Access our courses anytime, anywhere, at your own pace.' },
        { title: 'Global Community', desc: 'Join a worldwide network of learners and professionals.' }
      ],
      testimonialsTitle: 'What Our Students Say',
      testimonials: [
        '"The courses here helped me master new skills and land my dream job. The mentors are supportive and the community is amazing!"',
        '"I love the flexibility and the hands-on projects. Learning at my own pace made all the difference in my career growth."',
        '"Joining this platform connected me with experts and peers worldwide. The resources and support are top-notch!"',
        '"The interactive lessons made learning fun and effective. I gained confidence and new friends!"',
        '"The career support and mentorship helped me get certified and promoted at work. Highly recommended!"'
      ],
      student: 'student',
      ctaTitle: 'Your Career Growth Starts Here!',
      ctaDesc: 'Practical, hands-on learning tailored to your goals and schedule.\nStay ahead with flexible courses designed for real-world success.',
      ctaBtn: 'Start Learning today',
    },
    Arabic: {
      heroTitle: 'اكتشف. تعلم. حقق',
      heroDesc: 'تعلم في أي وقت ومن أي مكان مع دورات يقودها خبراء، وفصول مباشرة، وشهادات معترف بها لتعزيز حياتك المهنية.',
      heroBtn: 'ابدأ التعلم اليوم',
      hideHero: 'إخفاء قسم البطل',
      showHero: 'إظهار قسم البطل',
      coursesTitle: 'الدورات الشائعة',
      coursesDesc: 'استكشف أفضل الدورات لدينا وابدأ التعلم اليوم.',
      lecturer: 'المحاضر',
      inCategory: 'في',
      course1Title: 'الإنجليزية لليوم',
      course1Category: 'اللغة',
      course1Lecturer: 'المشرف',
      course1Price: 'مجاني',
      course1Duration: '16س 30د',
      course1Lessons: '0 درس',
      course1Students: '10',
      course2Title: 'أساسيات علم البيانات',
      course2Category: 'التقنية',
      course2Lecturer: 'المشرف',
      course2Price: '50$',
      course2Duration: '20س 10د',
      course2Lessons: '6 دروس',
      course2Students: '25',
      course3Title: 'تصميم جرافيك',
      course3Category: 'التصميم',
      course3Lecturer: 'المشرف',
      course3Price: '40$',
      course3Duration: '15س 00د',
      course3Lessons: '4 دروس',
      course3Students: '12',
      course4Title: 'الفنون الإبداعية',
      course4Category: 'الفنون',
      course4Lecturer: 'المشرف',
      course4Price: '20$',
      course4Duration: '12س 15د',
      course4Lessons: '3 دروس',
      course4Students: '8',
      aboutTitle: 'خطوتك نحو مستقبل التعلم',
      aboutList: [
        '✔ الوصول إلى مجموعة واسعة من الدورات المختارة بعناية لتعزيز الأكاديميين والمهنة والنمو الشخصي.',
        '✔ تعلم مباشرة من خبراء من خلال دروس تفاعلية ومشاريع عملية.',
        '✔ دورات مصممة لكل مرحلة — من المبتدئين إلى المحترفين.',
        '✔ جداول مرنة تتيح لك التعلم حسب وتيرتك، في أي وقت وأي مكان.',
        '✔ مناهج تركز على الوظيفة مصممة وفقًا لمتطلبات الصناعة.',
        '✔ انضم إلى مجتمع عالمي من المتعلمين وتعاون ونم معًا.'
      ],
      whyTitle: 'لماذا تختارنا؟',
      features: [
        { title: 'مدربون خبراء', desc: 'تعلم من محترفين لديهم سنوات من الخبرة في مجالهم.' },
        { title: 'تعلم مرن', desc: 'يمكنك الوصول إلى الدورات في أي وقت ومن أي مكان وبالوتيرة التي تناسبك.' },
        { title: 'مجتمع عالمي', desc: 'انضم إلى شبكة عالمية من المتعلمين والمحترفين.' }
      ],
      testimonialsTitle: 'ماذا يقول طلابنا',
      testimonials: [
        '"ساعدتني الدورات هنا في اكتساب مهارات جديدة والحصول على وظيفة أحلامي. المدربون داعمون والمجتمع رائع!"',
        '"أحب المرونة والمشاريع العملية. التعلم حسب وتيرتي أحدث فرقًا كبيرًا في تطوري المهني."',
        '"انضمامي إلى هذه المنصة ربطني بخبراء وزملاء من جميع أنحاء العالم. الموارد والدعم ممتازان!"',
        '"الدروس التفاعلية جعلت التعلم ممتعًا وفعالًا. اكتسبت الثقة وأصدقاء جدد!"',
        '"الدعم المهني والإرشاد ساعدني في الحصول على شهادة وترقية في العمل. أنصح بها بشدة!"'
      ],
      student: 'طالب',
      ctaTitle: 'نمو حياتك المهنية يبدأ هنا!',
      ctaDesc: 'تعلم عملي مصمم لأهدافك وجدولك.\nابقَ في المقدمة مع دورات مرنة مصممة للنجاح الواقعي.',
      ctaBtn: 'ابدأ التعلم اليوم',
    },
    Hebrew: {
      heroTitle: 'גלה. למד. השג',
      heroDesc: 'למד בכל עת ובכל מקום עם קורסים בהובלת מומחים, שיעורים חיים ותעודות מוכרות בתעשייה לקידום הקריירה שלך.',
      heroBtn: 'התחל ללמוד היום',
      hideHero: 'הסתר את אזור הגיבור',
      showHero: 'הצג את אזור הגיבור',
      coursesTitle: 'קורסים פופולריים',
      coursesDesc: 'גלה את הקורסים המובילים שלנו והתחל ללמוד היום.',
      lecturer: 'מרצה',
      inCategory: 'ב',
      course1Title: 'אנגלית להיום',
      course1Category: 'שפה',
      course1Lecturer: 'מנהל',
      course1Price: 'חינם',
      course1Duration: '16ש 30ד',
      course1Lessons: '0 שיעורים',
      course1Students: '10',
      course2Title: 'יסודות מדעי הנתונים',
      course2Category: 'טכנולוגיה',
      course2Lecturer: 'מנהל',
      course2Price: '50$',
      course2Duration: '20ש 10ד',
      course2Lessons: '6 שיעורים',
      course2Students: '25',
      course3Title: 'עיצוב גרפי',
      course3Category: 'עיצוב',
      course3Lecturer: 'מנהל',
      course3Price: '40$',
      course3Duration: '15ש 00ד',
      course3Lessons: '4 שיעורים',
      course3Students: '12',
      course4Title: 'אמנויות יצירתיות',
      course4Category: 'אמנות',
      course4Lecturer: 'מנהל',
      course4Price: '20$',
      course4Duration: '12ש 15ד',
      course4Lessons: '3 שיעורים',
      course4Students: '8',
      aboutTitle: 'היכנס לעתיד הלמידה',
      aboutList: [
        '✔ גישה למגוון רחב של קורסים שנבחרו בקפידה לקידום אקדמי, קריירה וצמיחה אישית.',
        '✔ למידה ישירה ממנטורים מנוסים באמצעות שיעורים אינטראקטיביים ופרויקטים מעשיים.',
        '✔ קורסים מותאמים לכל שלב — ממתחילים ועד מקצוענים.',
        '✔ לוחות זמנים גמישים המאפשרים לך ללמוד בקצב שלך, בכל זמן ובכל מקום.',
        '✔ תוכנית לימודים ממוקדת קריירה שנבנתה לפי דרישות התעשייה.',
        '✔ הצטרף לקהילה גלובלית של לומדים, שתף פעולה וצמח יחד.'
      ],
      whyTitle: 'למה לבחור בנו?',
      features: [
        { title: 'מרצים מומחים', desc: 'למד ממקצוענים עם שנות ניסיון רבות בתחום.' },
        { title: 'למידה גמישה', desc: 'גש לקורסים שלנו בכל זמן, מכל מקום, ובקצב שלך.' },
        { title: 'קהילה גלובלית', desc: 'הצטרף לרשת עולמית של לומדים ומקצוענים.' }
      ],
      testimonialsTitle: 'מה אומרים הסטודנטים שלנו',
      testimonials: [
        '"הקורסים כאן עזרו לי לרכוש מיומנויות חדשות ולהשיג את עבודת החלומות שלי. המנטורים תומכים והקהילה מדהימה!"',
        '"אני אוהב את הגמישות והפרויקטים המעשיים. הלמידה בקצב שלי עשתה את כל ההבדל בצמיחה המקצועית שלי."',
        '"ההצטרפות לפלטפורמה הזו חיברה אותי עם מומחים ועמיתים מכל העולם. המשאבים והתמיכה ברמה גבוהה!"',
        '"השיעורים האינטראקטיביים הפכו את הלמידה למהנה ויעילה. רכשתי ביטחון וחברים חדשים!"',
        '"התמיכה המקצועית והחונכות עזרו לי לקבל הסמכה ולקבל קידום בעבודה. מומלץ בחום!"'
      ],
      student: 'סטודנט',
      ctaTitle: 'הצמיחה המקצועית שלך מתחילה כאן!',
      ctaDesc: 'למידה מעשית המותאמת למטרות וללוח הזמנים שלך.\nהישאר מוביל עם קורסים גמישים המיועדים להצלחה בעולם האמיתי.',
      ctaBtn: 'התחל ללמוד היום',
    },
  };
  const t = translations[language] || translations['English'];
  // Helper to get language index for testimonial names
  const langIdx = language === 'English' ? 0 : language === 'Arabic' ? 1 : 2;
  return (
    <div className={
      `${themeState === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}${isRTL ? ' rtl' : ''}`
    } dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section Toggle */}
      <button className="my-4 px-4 py-2 rounded bg-[#1e3a8a] text-white font-semibold" onClick={() => setShowHero((v) => !v)}>
        {showHero ? t.hideHero : t.showHero}
      </button>
      {showHero && (
        <section className="relative w-full h-screen overflow-hidden bg-white">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#1e3a8a" }}>
              {t.heroTitle}
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-white">
              {t.heroDesc}
            </p>
            <button className="bg-white text-[#1e3a8a] px-6 py-3 mt-5 rounded-lg transition-colors font-semibold border border-[#1e3a8a] hover:bg-[#f0f4fa]">
              {t.heroBtn}
            </button>
          </div>
        </section>
      )}

      {/* Courses Section */}
      <section className="w-full py-16 bg-[#e6f7ff] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ color: "#1e3a8a" }}
          >
            {t.coursesTitle}
          </h2>
          <p className="text-center text-lg mb-10 text-black">
            {t.coursesDesc}
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={prevCourse}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow bg-[#00BFFF] text-white hover:bg-blue-400 mr-4"
            >
              &#8592;
            </button>
            <div className="grid lg:grid-cols-3 gap-6 flex-1">
              {visibleCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-[#dff4ff] rounded-xl shadow hover:shadow-lg overflow-hidden relative border border-[#b3e6ff] flex flex-col items-center"
                >
                  {/* Image */}
                  <div className="relative w-full flex justify-center">
                    <img
                      src={course.image}
                      alt={t[course.titleKey]}
                      className="w-full h-40 object-cover rounded-t-xl"
                    />
                    <span className="absolute top-2 left-2 bg-[#00BFFF] text-white text-sm font-semibold px-3 py-1 rounded">
                      {t[course.priceKey]}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-4 w-full flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < course.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-[#00BFFF] text-center">{t[course.titleKey]}</h3>
                    <p className="text-sm text-[#1e3a8a] text-center">
                      {t.lecturer} <span className="text-[#1e3a8a]">{t[course.lecturerKey]}</span> {t.inCategory} {t[course.categoryKey]}
                    </p>
                    <div className="flex justify-between items-center mt-3 text-sm text-[#1e3a8a] w-full">
                      <span> {t[course.studentsKey]}</span>
                      <span> {t[course.durationKey]}</span>
                      <span> {t[course.lessonsKey]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextCourse}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow bg-[#00BFFF] text-white hover:bg-blue-400 ml-4"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={HomeImg}
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#fff" }}
            >
              {t.aboutTitle}
            </h2>
            <ul className="space-y-3 text-white">
              {t.aboutList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-wide" style={{ color: "#1e3a8a" }}>{t.whyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {t.features.map((feature, idx) => (
              <div key={idx} className="relative group bg-[#1e3a8a] border border-[#e0e0e0] rounded-2xl shadow-lg h-72 flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-transform">
                {/* Icon */}
                <div className="mb-4 z-10">
                  {idx === 0 && (
                    <svg width="48" height="48" fill="none" stroke="#f5c16c" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  )}
                  {idx === 1 && (
                    <svg width="48" height="48" fill="none" stroke="#f5c16c" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                  )}
                  {idx === 2 && (
                    <svg width="48" height="48" fill="none" stroke="#f5c16c" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                  )}
                </div>
                <div className="z-10">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#fff" }}>{feature.title}</h3>
                  <p className="text-white mb-4">{feature.desc}</p>
                </div>
                <img
                  src={idx === 0 ? instructorImg : idx === 1 ? learningImg : communityImg}
                  alt={feature.title}
                  className="absolute left-0 bottom-0 w-full h-full object-cover rounded-2xl translate-y-full group-hover:translate-y-0 opacity-100 transition-transform duration-500 ease-in-out z-0"
                  style={{ transitionProperty: 'transform' }}
                />
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-colors duration-500 z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-wide uppercase" style={{ color: "#fff" }}>
            {t.testimonialsTitle}
          </h2>
          <div className="flex flex-row gap-8 justify-center items-stretch w-full">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="bg-[#f5f7fa] border border-[#e0e0e0] p-6 text-left flex flex-col justify-between items-start min-w-[320px] max-w-[350px] w-full h-[340px] min-h-[340px] rounded-xl">
                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                    </svg>
                  ))}
                </div>
                {/* Feedback */}
                <div className="mb-6">
                  <p className="text-gray-700 font-medium mb-2">{t.testimonials[idx]}</p>
                  {idx === 0 && (
                    <ul className="list-disc ml-5 text-gray-600 text-sm">
                      <li>{language === 'English' ? 'Mentors are always available for support.' : language === 'Arabic' ? 'المدربون دائمًا متواجدون للدعم.' : 'המנטורים תמיד זמינים לתמיכה.'}</li>
                      <li>{language === 'English' ? 'Community events every month.' : language === 'Arabic' ? 'فعاليات مجتمعية كل شهر.' : 'אירועי קהילה כל חודש.'}</li>
                    </ul>
                  )}
                  {idx === 1 && (
                    <ul className="list-disc ml-5 text-gray-600 text-sm">
                      <li>{language === 'English' ? 'Projects helped me build a strong portfolio.' : language === 'Arabic' ? 'المشاريع ساعدتني في بناء ملف قوي.' : 'הפרויקטים עזרו לי לבנות תיק עבודות חזק.'}</li>
                      <li>{language === 'English' ? 'Flexible schedule fits my job.' : language === 'Arabic' ? 'جدول مرن يناسب عملي.' : 'לוח זמנים גמיש שמתאים לעבודה שלי.'}</li>
                    </ul>
                  )}
                  {idx === 2 && (
                    <ul className="list-disc ml-5 text-gray-600 text-sm">
                      <li>{language === 'English' ? 'Global connections and networking.' : language === 'Arabic' ? 'اتصالات وشبكات عالمية.' : 'קשרים גלובליים ורשתות.'}</li>
                      <li>{language === 'English' ? 'Resources are always up-to-date.' : language === 'Arabic' ? 'الموارد دائمًا محدثة.' : 'המשאבים תמיד מעודכנים.'}</li>
                    </ul>
                  )}
                </div>
                {/* Student Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={`https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'women' : 'men'}/${44 + idx}.jpg`}
                    alt="Student"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold">{(t.testimonialNames && t.testimonialNames[idx] && t.testimonialNames[idx][langIdx]) ? t.testimonialNames[idx][langIdx] : ''}</h4>
                    <p className="text-gray-500 text-sm">{t.student}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* CTA Section (matches Home2 style) */}
      <section
        className="w-full py-16 flex items-center justify-center bg-[#fff]"
      >
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4 text-[#1e3a8a]">{t.ctaTitle}</h2>
          <p className="text-lg mb-8 text-[#1e3a8a]">{t.ctaDesc}</p>
          <a
            href="/contactus"
            className="inline-block font-semibold px-8 py-4 rounded-lg shadow transition-colors text-xl bg-[#1e3a8a] text-[#fff] hover:bg-[#fff]"
          >
            {t.ctaBtn}
          </a>
        </div>
      </section>

    </div>

  );
}
