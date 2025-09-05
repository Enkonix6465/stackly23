import React from "react";
import { useParams, Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.avif";

// BlogDetail translations
const blogTranslations = {
  English: {
    blogNotFound: 'Blog Not Found',
    backToBlogs: 'Back to Blogs',
  },
  Arabic: {
    blogNotFound: 'لم يتم العثور على المدونة',
    backToBlogs: 'العودة إلى المدونات',
  },
  Hebrew: {
    blogNotFound: 'הבלוג לא נמצא',
    backToBlogs: 'חזרה לבלוגים',
  },
};

export default function BlogDetail() {
  // Theme and language state synced with Header
  const [theme, setTheme] = React.useState('light');
  const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'English');
  React.useEffect(() => {
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

  // RTL support for Arabic/Hebrew
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (language === 'Arabic' || language === 'Hebrew') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
  }, [language]);

  const t = blogTranslations[language] || blogTranslations['English'];
  const { id } = useParams();

  // Example blog data (you can replace with Admin DB later)
  const blogs = [
    {
      id: "1",
      title: {
        English: "Mastering Online Learning",
        Arabic: "إتقان التعلم عبر الإنترنت",
        Hebrew: "לשלוט בלמידה מקוונת"
      },
      image: blog1,
      intro: {
        English: "Online learning has transformed education by making knowledge accessible anytime, anywhere. From virtual classrooms and self-paced courses to collaborative communities, mastering online learning helps students and professionals unlock their full potential while balancing flexibility with discipline.",
        Arabic: "لقد غيّر التعلم عبر الإنترنت التعليم من خلال جعل المعرفة متاحة في أي وقت وفي أي مكان. من الفصول الافتراضية والدورات الذاتية إلى المجتمعات التعاونية، يساعد إتقان التعلم عبر الإنترنت الطلاب والمهنيين على تحقيق إمكاناتهم الكاملة مع تحقيق التوازن بين المرونة والانضباط.",
        Hebrew: "למידה מקוונת שינתה את החינוך בכך שהיא הופכת את הידע לנגיש בכל זמן ובכל מקום. מכיתות וירטואליות וקורסים בקצב עצמי ועד קהילות שיתופיות, שליטה בלמידה מקוונת עוזרת לסטודנטים ולאנשי מקצוע לממש את הפוטנציאל שלהם תוך איזון בין גמישות למשמעת."
      },
      sections: [
        {
          heading: {
            English: "Introduction to Online Learning",
            Arabic: "مقدمة في التعلم عبر الإنترنت",
            Hebrew: "מבוא ללמידה מקוונת"
          },
          content: {
            English: "Online learning refers to education delivered via digital platforms, enabling learners to study from any location at their own pace. It encompasses live classes, recorded lectures, interactive assignments, and peer-to-peer collaboration. With the right approach, online education empowers learners with flexibility and global access to quality knowledge without traditional barriers of time and place.",
            Arabic: "يشير التعلم عبر الإنترنت إلى التعليم الذي يتم تقديمه عبر المنصات الرقمية، مما يمكّن المتعلمين من الدراسة من أي مكان وبالوتيرة التي تناسبهم. ويشمل الدروس المباشرة والمحاضرات المسجلة والواجبات التفاعلية والتعاون بين الأقران. مع النهج الصحيح، يمنح التعليم عبر الإنترنت المتعلمين المرونة والوصول العالمي إلى المعرفة الجيدة دون الحواجز التقليدية للوقت والمكان.",
            Hebrew: "למידה מקוונת מתייחסת לחינוך הניתן באמצעות פלטפורמות דיגיטליות, המאפשרות ללומדים ללמוד מכל מקום ובקצב שלהם. היא כוללת שיעורים חיים, הרצאות מוקלטות, משימות אינטראקטיביות ושיתופי פעולה בין עמיתים. עם הגישה הנכונה, החינוך המקוון מעניק ללומדים גמישות וגישה עולמית לידע איכותי ללא מחסומי זמן ומקום מסורתיים."
          }
        },
        // ...repeat for all sections, providing translations for each
      ],
    },
    // ...repeat for other blogs
  ];

  

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className={
        `text-center py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`
      }>
        <h2 className="text-2xl font-bold">{t.blogNotFound}</h2>
        <Link to="/blog" className="text-[#1e3a8a] underline mt-4 block">
          {t.backToBlogs}
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === 'dark' ? 'pt-20 min-h-screen bg-black text-white' : 'pt-20 min-h-screen bg-white text-black'} dir={language === 'Arabic' || language === 'Hebrew' ? 'rtl' : 'ltr'}>
      {/* Back Link */}
      <Link to="/blog" className="text-[#1e3a8a] underline mt-4 block">
        {t.backToBlogs}
      </Link>
      {/* Blog Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={blog.image}
          alt={blog.title[language]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#1e3a8a' }}>{blog.title[language]}</h1>
        <p className={`text-lg md:text-xl max-w-5xl text-center mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          {blog.intro[language]}
        </p>
        {blog.sections.map((sec, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e3a8a' }}>
              {sec.heading[language]}
            </h2>
            <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{sec.content[language]}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
