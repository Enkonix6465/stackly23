import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import home2Video from "../assets/home2hero.mp4";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.webp";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";
import logo10 from "../assets/10.png";

// Animated Counter Hook with scroll trigger
function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const elRef = useRef();

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;
    let observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and animate every time it enters view
          setCount(0);
          let start = 0;
          let end = typeof target === 'number' ? target : parseInt(target);
          if (isNaN(end)) return;
          let startTime = null;
          function animateCount(ts) {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
              ref.current = requestAnimationFrame(animateCount);
            } else {
              setCount(end);
            }
          }
          ref.current = requestAnimationFrame(animateCount);
        } else {
          // Optionally reset to 0 when out of view
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [target, duration]);

  return [count, elRef];
}


// Animated stat component for impact section
function ImpactStat({ end, suffix, label }) {
  const [count, elRef] = useCountUp(end);
  let display = count;
  if (end >= 1000) {
    display = count >= 1000 ? (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : count;
  }
  return (
    <div ref={elRef}>
      <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: '#1e3a8a' }}>
        {display}{suffix}
      </div>
      <div className="uppercase text-xs font-semibold text-[#222] tracking-wide">{label}</div>
    </div>
  );
}

export default function Home2() {
  // Theme state and toggle handler
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new Event('theme-changed'));
  };
  React.useEffect(() => {
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
  }, []);
  // Language and RTL support
  const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'English');
  React.useEffect(() => {
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
  }, []);
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  // Translations for all content
  const translations = {
    English: {
      heroTitle: 'Learn Without Limits,',
      heroSpan: 'Grow Without Boundaries',
      heroDesc: 'Learn from industry experts with engaging, practical lessons. Turn knowledge into skills and skills into opportunities. Your success story starts with just one course.',
      getStarted: 'Get Started',
      upcomingTitle: 'Upcoming Webinars',
      webinars: [
        {
          title: "AI in Education: Transforming Learning",
          date: "September 15, 2025",
          time: "5:00 PM - 6:00 PM",
          description: "Explore how artificial intelligence is revolutionizing classrooms, personalized learning, and student engagement. Join our expert panel for insights and Q&A.",
        },
        {
          title: "Career Paths in Data Science",
          date: "September 22, 2025",
          time: "4:00 PM - 5:30 PM",
          description: "Discover the latest trends, required skills, and job opportunities in data science. Hear from industry leaders and get tips for breaking into the field.",
        },
        {
          title: "Design Thinking for Innovation",
          date: "October 1, 2025",
          time: "6:00 PM - 7:00 PM",
          description: "Learn how design thinking can drive creativity and problem-solving in any career. Participate in interactive exercises and real-world case studies.",
        },
      ],
      register: 'Register',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      submit: 'Submit',
      cancel: 'Cancel',
      noWebinars: 'No webinars scheduled.',
      scholarshipsTitle: 'Scholarships & Financial Support',
      scholarshipsDesc: 'We believe education should be accessible to everyone. Explore our scholarships, financial aid, and affordable plans designed to help you achieve your goals—no matter your background. Enjoy discounts, free trials, and more to make learning within reach for all.',
      scholarshipsKnowMore: 'Know More',
      scholarshipsOffers: [
        { title: 'Merit-Based Scholarships', desc: 'Apply for scholarships awarded to top-performing students to help cover your tuition.' },
        { title: 'Financial Aid & Discounts', desc: 'Need-based financial support and special discounts make learning accessible for everyone.' },
        { title: 'Community Driven', desc: 'We foster a collaborative environment where users can share, review, and discover the best opportunities together.' },
        { title: 'Innovation & Integrity', desc: 'We value creativity, transparency, and ethical support in everything we do.' },
      ],
      impactTitle: 'We Empower Learners\nTo Achieve More',
      impactDesc: 'Whether you\'re upskilling for a new career, exploring the latest in tech, or seeking expert guidance, our platform delivers quality education, real-world skills, and a supportive community to help you succeed.',
      impactKnowMore: 'Know More About Us',
      impactStats: [
        { end: 10000, suffix: '+', label: 'Students Enrolled' },
        { end: 500, suffix: '+', label: 'Expert Instructors' },
        { end: 120, suffix: '+', label: 'Courses Available' },
        { end: 95, suffix: '%', label: 'Student Satisfaction' },
      ],
      partnersTitle: 'Our Partners',
      partnersDesc: 'We collaborate with industry-leading organizations to deliver the best learning experience.',
      readyTitle: 'Ready to Transform Your Career?',
      readyDesc: 'Join thousands of learners who have upskilled and advanced their careers with our expert-led online courses. Start your journey today!',
      readyGetStarted: 'Get Started',
    },
    Arabic: {
      heroTitle: 'تعلم بلا حدود،',
      heroSpan: 'انمو بلا قيود',
      heroDesc: 'تعلم من خبراء الصناعة من خلال دروس عملية وممتعة. حول المعرفة إلى مهارات والمهارات إلى فرص. تبدأ قصة نجاحك بدورة واحدة فقط.',
      getStarted: 'ابدأ الآن',
      upcomingTitle: 'الندوات القادمة',
      webinars: [
        {
          title: "الذكاء الاصطناعي في التعليم: تحويل التعلم",
          date: "15 سبتمبر 2025",
          time: "5:00 م - 6:00 م",
          description: "اكتشف كيف يغير الذكاء الاصطناعي الفصول الدراسية والتعلم المخصص وتفاعل الطلاب. انضم إلى خبرائنا للنقاش والأسئلة.",
        },
        {
          title: "مسارات مهنية في علم البيانات",
          date: "22 سبتمبر 2025",
          time: "4:00 م - 5:30 م",
          description: "اكتشف أحدث الاتجاهات والمهارات المطلوبة وفرص العمل في علم البيانات. استمع إلى قادة الصناعة واحصل على نصائح للانطلاق في المجال.",
        },
        {
          title: "التفكير التصميمي للابتكار",
          date: "1 أكتوبر 2025",
          time: "6:00 م - 7:00 م",
          description: "تعلم كيف يدفع التفكير التصميمي الإبداع وحل المشكلات في أي مهنة. شارك في تمارين تفاعلية ودراسات حالة واقعية.",
        },
      ],
      register: 'سجل الآن',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      submit: 'إرسال',
      cancel: 'إلغاء',
      noWebinars: 'لا توجد ندوات مجدولة.',
      scholarshipsTitle: 'المنح والدعم المالي',
      scholarshipsDesc: 'نؤمن بأن التعليم يجب أن يكون متاحًا للجميع. اكتشف المنح والمساعدات المالية والخطط الميسرة لمساعدتك في تحقيق أهدافك بغض النظر عن خلفيتك. استمتع بالخصومات والتجارب المجانية والمزيد لجعل التعلم في متناول الجميع.',
      scholarshipsKnowMore: 'اعرف المزيد',
      scholarshipsOffers: [
        { title: 'منح التفوق الدراسي', desc: 'تقدم للمنح المخصصة للطلاب المتفوقين للمساعدة في تغطية الرسوم الدراسية.' },
        { title: 'المساعدات المالية والخصومات', desc: 'دعم مالي حسب الحاجة وخصومات خاصة لجعل التعلم متاحًا للجميع.' },
        { title: 'مجتمع تعاوني', desc: 'نحن نرعى بيئة تعاونية حيث يمكن للمستخدمين المشاركة والمراجعة واكتشاف أفضل الفرص معًا.' },
        { title: 'الابتكار والنزاهة', desc: 'نحن نقدر الإبداع والشفافية والدعم الأخلاقي في كل ما نقوم به.' },
      ],
      impactTitle: 'نمكن المتعلمين\nلتحقيق المزيد',
      impactDesc: 'سواء كنت تطور مهاراتك لمهنة جديدة أو تستكشف أحدث التقنيات أو تبحث عن إرشاد الخبراء، منصتنا تقدم تعليمًا عالي الجودة ومهارات واقعية ومجتمعًا داعمًا لمساعدتك على النجاح.',
      impactKnowMore: 'اعرف المزيد عنا',
      impactStats: [
        { end: 10000, suffix: '+', label: 'طالب مسجل' },
        { end: 500, suffix: '+', label: 'مدرس خبير' },
        { end: 120, suffix: '+', label: 'دورة متاحة' },
        { end: 95, suffix: '%', label: 'رضا الطلاب' },
      ],
      partnersTitle: 'شركاؤنا',
      partnersDesc: 'نتعاون مع مؤسسات رائدة في الصناعة لتقديم أفضل تجربة تعليمية.',
      readyTitle: 'جاهز لتحويل مسارك المهني؟',
      readyDesc: 'انضم إلى آلاف المتعلمين الذين طوروا مهاراتهم وتقدموا في مسيرتهم المهنية من خلال دوراتنا عبر الإنترنت بقيادة خبراء. ابدأ رحلتك اليوم!',
      readyGetStarted: 'ابدأ الآن',
    },
    Hebrew: {
      heroTitle: 'למד ללא גבולות,',
      heroSpan: 'צמח ללא מגבלות',
      heroDesc: 'למד ממומחי תעשייה עם שיעורים מעשיים ומרתקים. הפוך ידע לכישורים וכישורים להזדמנויות. סיפור ההצלחה שלך מתחיל בקורס אחד בלבד.',
      getStarted: 'התחל עכשיו',
      upcomingTitle: 'וובינרים קרובים',
      webinars: [
        {
          title: "בינה מלאכותית בחינוך: מהפכת הלמידה",
          date: "15 בספטמבר 2025",
          time: "17:00 - 18:00",
          description: "גלה כיצד הבינה המלאכותית משנה את הכיתות, הלמידה האישית ומעורבות התלמידים. הצטרף לפאנל מומחים לשאלות ותשובות.",
        },
        {
          title: "מסלולי קריירה במדעי הנתונים",
          date: "22 בספטמבר 2025",
          time: "16:00 - 17:30",
          description: "גלה את המגמות האחרונות, הכישורים הנדרשים וההזדמנויות התעסוקתיות במדעי הנתונים. שמע ממובילי התעשייה וקבל טיפים לכניסה לתחום.",
        },
        {
          title: "חשיבה עיצובית לחדשנות",
          date: "1 באוקטובר 2025",
          time: "18:00 - 19:00",
          description: "למד כיצד חשיבה עיצובית יכולה להניע יצירתיות ופתרון בעיות בכל קריירה. השתתף בתרגילים אינטראקטיביים ומקרי בוחן אמיתיים.",
        },
      ],
      register: 'הירשם',
      namePlaceholder: 'השם שלך',
      emailPlaceholder: 'האימייל שלך',
      submit: 'שלח',
      cancel: 'ביטול',
      noWebinars: 'אין וובינרים מתוכננים.',
      scholarshipsTitle: 'מלגות ותמיכה כלכלית',
      scholarshipsDesc: 'אנו מאמינים שחינוך צריך להיות נגיש לכולם. גלה מלגות, סיוע כלכלי ותוכניות משתלמות שיעזרו לך להשיג את מטרותיך ללא קשר לרקע שלך. תהנה מהנחות, תקופת ניסיון חינם ועוד כדי להפוך את הלמידה לנגישה לכולם.',
      scholarshipsKnowMore: 'למידע נוסף',
      scholarshipsOffers: [
        { title: 'מלגות הצטיינות', desc: 'הגש בקשה למלגות המוענקות לסטודנטים מצטיינים כדי לסייע במימון שכר הלימוד.' },
        { title: 'סיוע כלכלי והנחות', desc: 'סיוע כלכלי לפי צורך והנחות מיוחדות כדי להפוך את הלמידה לנגישה לכולם.' },
        { title: 'קהילה שיתופית', desc: 'אנו מטפחים סביבה שיתופית בה משתמשים יכולים לשתף, לבחון ולגלות את ההזדמנויות הטובות ביותר יחד.' },
        { title: 'חדשנות ויושרה', desc: 'אנו מעריכים יצירתיות, שקיפות ותמיכה אתית בכל מה שאנו עושים.' },
      ],
      impactTitle: 'אנחנו מעצימים לומדים\nלהשיג יותר',
      impactDesc: 'בין אם אתה משדרג קריירה, חוקר את החדשנות בטכנולוגיה או מחפש הדרכה מקצועית, הפלטפורמה שלנו מספקת חינוך איכותי, מיומנויות מעשיות וקהילה תומכת להצלחה שלך.',
      impactKnowMore: 'למידע נוסף עלינו',
      impactStats: [
        { end: 10000, suffix: '+', label: 'סטודנטים רשומים' },
        { end: 500, suffix: '+', label: 'מרצים מומחים' },
        { end: 120, suffix: '+', label: 'קורסים זמינים' },
        { end: 95, suffix: '%', label: 'שביעות רצון סטודנטים' },
      ],
      partnersTitle: 'השותפים שלנו',
      partnersDesc: 'אנו משתפים פעולה עם ארגונים מובילים בתעשייה כדי לספק את חוויית הלמידה הטובה ביותר.',
      readyTitle: 'מוכן לשדרג את הקריירה שלך?',
      readyDesc: 'הצטרף לאלפי לומדים ששדרגו את הקריירה שלהם עם הקורסים המקוונים שלנו בהובלת מומחים. התחל את המסע שלך היום!',
      readyGetStarted: 'התחל עכשיו',
    },
  };
  const t = translations[language] || translations['English'];
  // Show register modal state
  const [showRegister, setShowRegister] = React.useState(null);
  // Theme state synced with Header
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
          <h2 className="text-3xl font-bold mb-8 text-center" id="upcoming" style={{ color: '#1e3a8a' }}>Upcoming Webinars</h2>
          {webinars.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {webinars.map((webinar, idx) => (
                <div key={idx} className={`rounded-xl shadow p-6 flex flex-col items-center bg-[#dff4ff] border border-[#b3e6ff]`}>
                  <h3 className="text-xl font-bold mb-2 text-'#1e3a8a' text-center">{webinar.title}</h3>
                  <div className="text-gray-600 mb-2 text-center">{webinar.date}</div>
                  <div className="text-gray-600 mb-2 text-center">{webinar.time}</div>
                  <div className="text-gray-800 mb-4 text-center">{webinar.description}</div>
                  <button
                    className="bg-['#1e3a8a'] text-white hover:bg-blue-500 px-4 py-2 rounded mb-2 transition-colors"
                    onClick={() => setShowRegister(idx)}
                  >
                    Register
                  </button>
                  {showRegister === idx && (
                    <form className="w-full mt-2 space-y-2" onSubmit={e => handleRegisterSubmit(e, webinar)}>
                      <input
                        type="text"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterInput}
                        placeholder="Your Name"
                        className="border rounded px-3 py-2 w-full bg-white text-black border-gray-300"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterInput}
                        placeholder="Your Email"
                        className="border rounded px-3 py-2 w-full bg-white text-black border-gray-300"
                        required
                      />
                      <div className="flex gap-2">
                        <button type="submit" className="bg-[#00BFFF] text-white hover:bg-blue-500 rounded px-4 py-2 transition-colors">Submit</button>
                        <button type="button" className="bg-gray-300 text-black hover:bg-gray-400 rounded px-4 py-2 transition-colors" onClick={() => setShowRegister(null)}>Cancel</button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No webinars scheduled.</div>
          )}
    }
    const handleStorage = () => {
      const updated = localStorage.getItem("webinars");
      setWebinars(updated ? JSON.parse(updated) : defaultWebinars);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  };
  []  }, []);
  const offers = [
    {
      title: "Merit-Based Scholarships",
      description: "Apply for scholarships awarded to top-performing students to help cover your tuition.",
      bg: "bg-[#1e3a8a]",
    },
    {
      title: "Financial Aid & Discounts",
      description: "Need-based financial support and special discounts make learning accessible for everyone.",
      bg: "bg-[#1e3a8a]",
    },
    {
      title: "Free Trial & Affordable Plans",
      description: "Start with a free trial and choose from flexible, budget-friendly subscription options.",
      bg: "bg-[#1e3a8a]",
    },
  ];
  const insights = [
  {
    title: "10K+",
    subtitle: "Students Enrolled",
  },
  {
    title: "500+",
    subtitle: "Expert Instructors",
  },
  {
    title: "120+",
    subtitle: "Courses Available",
  },
  {
    title: "95%",
    subtitle: "Student Satisfaction",
  },
];


  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
  const scrollRef = React.useRef(null);
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen text-white' : 'min-h-screen text-black'}${isRTL ? ' rtl' : ''}`
    } dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Theme Toggle Button */}
      <button
        className={`my-4 px-4 py-2 rounded font-semibold border transition-colors ${theme === 'dark' ? 'bg-white text-[#1e3a8a] border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white' : 'bg-[#1e3a8a] text-white border-[#1e3a8a] hover:bg-white hover:text-[#1e3a8a]'}`}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>

      {/* Hero Section */}
      <section
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={home2Video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            {t.heroTitle}<span style={{ color: '#1e3a8a' }}>{t.heroSpan}</span>
          </h1>
          <p className={`mt-4 max-w-4xl text-lg md:text-xl ${theme === 'dark' ? 'text-fff' : 'text-fff'}`}>
            {t.heroDesc}
          </p>
          <button
            className={
              `mt-6 px-6 py-3 rounded-lg shadow transition font-semibold ` +
              (theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-[#00BFFF]' : 'bg-[#1e3a8a] text-white hover:bg-[#00BFFF]')
            }
            onClick={() => {
              const el = document.getElementById('upcoming');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.getStarted}
          </button>
        </div>
      </section>
      <section
        className={
          `w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : ''}`} id="upcoming" style={theme === 'dark' ? {} : { color: '#1e3a8a' }}>{t.upcomingTitle}</h2>
          {t.webinars && t.webinars.length > 0 ? (
            <div className="grid  lg:grid-cols-3 gap-8">
              {t.webinars.map((webinar, idx) => (
                <div key={idx} className={
                  `rounded-xl shadow p-6 flex flex-col items-center ` +
                  (theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]')
                }>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#fff' : '#1e3a8a' }}>{webinar.title}</h3>
                  <div className={theme === 'dark' ? 'text-gray-400 mb-2' : 'text-gray-600 mb-2'}>{webinar.date}</div>
                  <div className={theme === 'dark' ? 'text-gray-400 mb-2' : 'text-gray-600 mb-2'}>{webinar.time}</div>
                  <div className={theme === 'dark' ? 'text-gray-200 mb-4' : 'text-gray-800 mb-4'}>{webinar.description}</div>
                  <button
                    className={
                      `${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-900' : 'bg-[#1e3a8a] text-white hover:bg-blue-900'} px-4 py-2 rounded mb-2 transition-colors`
                    }
                    onClick={() => setShowRegister(idx)}
                  >
                    {t.register}
                  </button>
                  {showRegister === idx && (
                    <form className="w-full mt-2 space-y-2" onSubmit={e => handleRegisterSubmit(e, webinar)}>
                      <input
                        type="text"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterInput}
                        placeholder={t.namePlaceholder}
                        className={
                          `border rounded px-3 py-2 w-full ` +
                          (theme === 'dark' ? 'bg-[#181818] text-white border-[#00BFFF]' : 'bg-white text-black border-gray-300')
                        }
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterInput}
                        placeholder={t.emailPlaceholder}
                        className={
                          `border rounded px-3 py-2 w-full ` +
                          (theme === 'dark' ? 'bg-[#181818] text-white border-[#00BFFF]' : 'bg-white text-black border-gray-300')
                        }
                        required
                      />
                      <div className="flex gap-2">
                        <button type="submit" className={
                          `${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-900' : 'bg-[#1e3a8a] text-white hover:bg-blue-900'} rounded px-4 py-2 transition-colors`
                        }>{t.submit}</button>
                        <button type="button" className={
                          `${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 text-black hover:bg-gray-400'} rounded px-4 py-2 transition-colors`
                        } onClick={() => setShowRegister(null)}>{t.cancel}</button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={theme === 'dark' ? 'text-gray-400 text-center' : 'text-gray-500 text-center'}>{t.noWebinars}</p>
          )}
        </div>
      </section>

      {/* Scholarships & Financial Support Section */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#1e3a8a]' : 'bg-[#1e3a8a]'}`}>
        <div className="w-full mx-auto px-6 lg:px-8 grid text-justify lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Info */}
          <div className="flex-1 flex flex-col justify-center md:pr-8 mb-8 md:mb-0">
            <h2 className="text-4xl font-extrabold mb-2 text-[#b3d8f7]" style={{lineHeight:'1.1'}}>
              <span className="text-[#FFF] font-bold" style={{opacity:0.7}}>{t.scholarshipsTitle}</span>
            </h2>
            <p className="mb-6 text-[#FFF] text-base font-medium" style={{maxWidth:'500px'}}>
              {t.scholarshipsDesc}
            </p>
            <a
              href="/contactus"
              className="inline-block font-semibold px-8 py-3 rounded-full shadow transition-colors text-lg bg-[#FFF] text-[#1e3a8a] hover:from-[#0099cc] hover:to-[#00BFFF]"
              style={{minWidth:'180px', textAlign:'center'}}>
              {t.scholarshipsKnowMore}
            </a>
          </div>
          {/* Right Side Cards - 2x2 grid, visually aligned */}
          <div className="grid lg:grid-cols-2 gap-6">
            {t.scholarshipsOffers.map((offer, idx) => (
              <div key={idx} className="rounded-xl p-6 shadow-lg bg-white text-[#1e3a8a] min-h-[120px] flex flex-col justify-center">
                <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                <p className="text-sm font-medium">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#FFF]'}`}> 
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 bg-white/90 rounded-2xl shadow-lg border border-[#e0f2fe]">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-10 items-center">
            {/* Left: Large Heading */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-[#222]" style={{letterSpacing:'-1px'}}>
                {t.impactTitle.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>{line}<br/></React.Fragment>
                ))}
              </h2>
            </div>
            {/* Right: Description and Button */}
            <div className="flex-1 flex flex-col items-start md:items-end">
              <p className="mb-4 text-[#222] text-base max-w-md font-medium">
                {t.impactDesc}
              </p>
              <a href="/aboutus" className="px-6 py-2 rounded-md font-semibold bg-[#1e3a8a] text-white shadow hover:from-[#0099cc] hover:to-[#00BFFF] transition-colors">{t.impactKnowMore}</a>
            </div>
          </div>
          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[#1e3a8a] text-center mt-6">
            {t.impactStats.map((stat, idx) => (
              <ImpactStat key={idx} end={stat.end} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>




  <section className={`w-full py-16 bg-[#1e3a8a]`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
  <div className="mb-2 text-xl font-semibold tracking-widest uppercase" style={{ color: '#fff' }}>
          {t.partnersTitle}
        </div>
  <p className={'text-white mb-10'}>
          {t.partnersDesc}
        </p>
        <div className="grid grid-cols-5 sm:grid-cols-4 gap-6 md:gap-8 justify-center items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 flex items-center justify-center h-24 transition-transform hover:scale-105" style={{ minWidth: '120px', minHeight: '80px' }}>
              <img src={logo} alt={`Partner ${idx + 1}`} className="h-12 object-contain max-w-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </section>


       

      <section
        className={`w-full py-16 flex items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`}
      >
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#fff' : '#1e3a8a' }}>{t.readyTitle}</h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-white' : 'text-[#1e3a8a]'}`}>{t.readyDesc}</p>
          <Link
            to="/contactus"
            className={`inline-block font-semibold px-8 py-4 rounded-lg shadow transition-colors text-xl ${theme === 'dark' ? 'bg-[#1e3a8a] text-[#00BFFF] hover:bg-gray-200' : 'bg-[#1e3a8a] text-[#fff] hover:bg-blue-100'}`}
          >
            {t.readyGetStarted}
          </Link>
        </div>
      </section>
    </div>
  );
}
