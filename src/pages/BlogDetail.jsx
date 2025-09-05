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
        {
          heading: {
            English: "Benefits of Online Learning",
            Arabic: "فوائد التعلم عبر الإنترنت",
            Hebrew: "יתרונות הלמידה המקוונת"
          },
          content: {
            English: "Online learning offers flexibility, accessibility, and a wide range of resources. Learners can balance studies with work and personal life, access global experts, and choose from diverse courses. It also fosters self-discipline and time management skills.",
            Arabic: "يوفر التعلم عبر الإنترنت المرونة، سهولة الوصول، وتنوع الموارد. يمكن للمتعلمين تحقيق التوازن بين الدراسة والعمل والحياة الشخصية، الوصول إلى خبراء عالميين، واختيار دورات متنوعة. كما يعزز مهارات الانضباط الذاتي وإدارة الوقت.",
            Hebrew: "למידה מקוונת מציעה גמישות, נגישות ומגוון רחב של משאבים. הלומדים יכולים לאזן בין לימודים, עבודה וחיים אישיים, לגשת למומחים גלובליים ולבחור מתוך קורסים מגוונים. היא גם מטפחת משמעת עצמית וכישורי ניהול זמן."
          }
        },
        {
          heading: {
            English: "Challenges & Solutions",
            Arabic: "التحديات والحلول",
            Hebrew: "אתגרים ופתרונות"
          },
          content: {
            English: "Common challenges include lack of motivation, distractions, and limited social interaction. Solutions involve setting clear goals, creating a dedicated study space, and participating in online communities for support.",
            Arabic: "تشمل التحديات الشائعة نقص الدافع، المشتتات، وقلة التفاعل الاجتماعي. الحلول تتضمن وضع أهداف واضحة، إنشاء مساحة دراسة مخصصة، والمشاركة في المجتمعات الإلكترونية للحصول على الدعم.",
            Hebrew: "אתגרים נפוצים כוללים חוסר מוטיבציה, הסחות דעת ומעט אינטראקציה חברתית. הפתרונות כוללים קביעת מטרות ברורות, יצירת מרחב לימוד ייעודי והשתתפות בקהילות מקוונות לתמיכה."
          }
        },
        {
          heading: {
            English: "Tips for Success",
            Arabic: "نصائح للنجاح",
            Hebrew: "טיפים להצלחה"
          },
          content: {
            English: "Stay organized, communicate with instructors, and take advantage of interactive tools. Regularly review progress and adjust strategies as needed to maximize learning outcomes.",
            Arabic: "كن منظمًا، تواصل مع المدربين، واستفد من الأدوات التفاعلية. راجع تقدمك بانتظام وعدل استراتيجياتك حسب الحاجة لتحقيق أفضل النتائج.",
            Hebrew: "הישאר מאורגן, תקשר עם מדריכים ונצל כלים אינטראקטיביים. בדוק את ההתקדמות שלך באופן קבוע והתאם את האסטרטגיות שלך לפי הצורך כדי למקסם את תוצאות הלמידה."
          }
        },
        {
          heading: {
            English: "Community & Collaboration",
            Arabic: "المجتمع والتعاون",
            Hebrew: "קהילה ושיתוף פעולה"
          },
          content: {
            English: "Online learning includes discussion forums, peer groups, and mentorship to enhance collaboration. Engaging with others builds a sense of community and helps overcome isolation.",
            Arabic: "يشمل التعلم عبر الإنترنت منتديات النقاش، مجموعات الأقران، والإرشاد لتعزيز التعاون. التفاعل مع الآخرين يبني شعورًا بالمجتمع ويساعد في التغلب على العزلة.",
            Hebrew: "למידה מקוונת כוללת פורומים, קבוצות עמיתים והנחיה לשיפור שיתוף הפעולה. מעורבות עם אחרים יוצרת תחושת קהילה ועוזרת להתגבר על בדידות."
          }
        },
      ],
    },
    {
      id: "2",
      title: {
        English: "Future Skills You Need to Learn",
        Arabic: "مهارات المستقبل التي تحتاج لتعلمها",
        Hebrew: "הכישורים העתידיים שעליך ללמוד"
      },
      image: blog2,
      intro: {
        English: "The future of work is changing rapidly, and staying relevant means mastering the right skills. From digital literacy and critical thinking to advanced technologies like AI, data, and sustainability practices, future-ready skills empower learners to thrive in an evolving global economy.",
        Arabic: "يتغير مستقبل العمل بسرعة، والبقاء في الصدارة يتطلب إتقان المهارات الصحيحة. من الثقافة الرقمية والتفكير النقدي إلى التقنيات المتقدمة مثل الذكاء الاصطناعي والبيانات وممارسات الاستدامة، تمنحك مهارات المستقبل القدرة على النجاح في اقتصاد عالمي متغير.",
        Hebrew: "העתיד של עולם העבודה משתנה במהירות, ולהישאר רלוונטי פירושו לשלוט בכישורים הנכונים. מכישורים דיגיטליים וחשיבה ביקורתית ועד טכנולוגיות מתקדמות כמו בינה מלאכותית, נתונים ופרקטיקות קיימות, כישורים עתידיים מאפשרים ללומדים להצליח בכלכלה הגלובלית המתפתחת."
      },
      sections: [
        {
          heading: {
            English: "Digital Literacy & Technology Skills",
            Arabic: "المهارات الرقمية والتقنية",
            Hebrew: "אוריינות דיגיטלית וכישורי טכנולוגיה"
          },
          content: {
            English: "In the digital-first world, basic computer skills are no longer enough. Learners must understand cloud computing, cybersecurity, and the fundamentals of coding. Familiarity with productivity tools, collaborative platforms, and emerging technologies ensures adaptability in modern workplaces where technology drives almost every process.",
            Arabic: "في عالم رقمي أولاً، لم تعد المهارات الأساسية في الحاسوب كافية. يجب على المتعلمين فهم الحوسبة السحابية، الأمن السيبراني، وأساسيات البرمجة. المعرفة بأدوات الإنتاجية والمنصات التعاونية والتقنيات الناشئة تضمن القدرة على التكيف في أماكن العمل الحديثة حيث تقود التكنولوجيا كل عملية تقريبًا.",
            Hebrew: "בעולם דיגיטלי, כישורי מחשב בסיסיים כבר אינם מספיקים. הלומדים צריכים להבין מחשוב ענן, אבטחת סייבר ויסודות התכנות. היכרות עם כלי פרודוקטיביות, פלטפורמות שיתופיות וטכנולוגיות מתקדמות מבטיחה הסתגלות בסביבות עבודה מודרניות בהן הטכנולוגיה מניעה כמעט כל תהליך."
          }
        },
        // ...add all other sections for blog 2 with translations
      ],
    },
    {
      id: "3",
      title: {
        English: "Data Science",
        Arabic: "علم البيانات",
        Hebrew: "מדעי הנתונים"
      },
      image: blog3,
      intro: {
        English: "Data Science empowers organizations to extract insights, predict trends, and drive decision-making with data. It combines mathematics, statistics, computer science, and business knowledge to solve real-world problems and generate value from information.",
        Arabic: "علم البيانات يمكّن المؤسسات من استخراج الرؤى، توقع الاتجاهات، واتخاذ القرارات باستخدام البيانات. يجمع بين الرياضيات، الإحصاء، علوم الحاسوب، ومعرفة الأعمال لحل المشكلات الواقعية وتوليد القيمة من المعلومات.",
        Hebrew: "מדעי הנתונים מאפשרים לארגונים להפיק תובנות, לחזות מגמות ולקבל החלטות באמצעות נתונים. הוא משלב מתמטיקה, סטטיסטיקה, מדעי המחשב וידע עסקי כדי לפתור בעיות אמיתיות וליצור ערך מהמידע."
      },
      sections: [
        {
          heading: {
            English: "Introduction to Data Science",
            Arabic: "مقدمة في علم البيانات",
            Hebrew: "מבוא למדעי הנתונים"
          },
          content: {
            English: "Data Science combines statistics, computer science, and domain expertise to analyze and interpret data. It covers the full pipeline from data collection, cleaning, and preprocessing to advanced modeling and visualization. Unlike traditional analytics, Data Science uses machine learning to uncover hidden patterns and correlations. Its multidisciplinary nature makes it applicable across diverse sectors like healthcare, retail, sports, finance, and government.",
            Arabic: "يجمع علم البيانات بين الإحصاء، علوم الحاسوب، والخبرة الميدانية لتحليل وتفسير البيانات. يغطي كامل سلسلة العمليات من جمع البيانات وتنظيفها ومعالجتها إلى النمذجة المتقدمة والتصور. على عكس التحليلات التقليدية، يستخدم علم البيانات التعلم الآلي لاكتشاف الأنماط والارتباطات المخفية. طبيعته متعددة التخصصات تجعله قابلاً للتطبيق في قطاعات متنوعة مثل الصحة، التجزئة، الرياضة، المالية، والحكومة.",
            Hebrew: "מדעי הנתונים משלבים סטטיסטיקה, מדעי המחשב ומומחיות תחום כדי לנתח ולפרש נתונים. הוא מכסה את כל התהליך מאיסוף נתונים, ניקוי ועיבוד ועד מודלים מתקדמים והדמיה. בניגוד לאנליטיקה מסורתית, מדעי הנתונים משתמשים בלמידת מכונה כדי לחשוף דפוסים והקשרים נסתרים. אופיו הרב-תחומי הופך אותו לרלוונטי במגוון תחומים כמו בריאות, קמעונאות, ספורט, פיננסים וממשל."
          }
        },
        // ...add all other sections for blog 3 with translations
      ],
    },
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
