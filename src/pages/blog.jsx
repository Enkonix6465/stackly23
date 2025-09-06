
export default function BlogHero() {
  const [theme, setTheme] = React.useState("light");
  const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'English');
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      const storedLang = localStorage.getItem('language') || 'English';
      setLanguage(storedLang);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem("theme") || "light";
        setTheme(newTheme);
      };
      const handleLanguageChange = () => {
        const newLang = localStorage.getItem('language') || 'English';
        setLanguage(newLang);
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);
      window.addEventListener('language-changed', handleLanguageChange);
      window.addEventListener('storage', handleLanguageChange);
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
        window.removeEventListener('language-changed', handleLanguageChange);
        window.removeEventListener('storage', handleLanguageChange);
      };
    }
  }, []);

  // RTL support
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Translations
  const translations = {
    English: {
      heroTitle: 'Explore Our Learning Blogs',
      heroDesc: 'Stay updated with study tips, e-learning trends, career advice, and strategies to help you succeed in education and beyond.',
      latestTitle: 'Latest Blogs',
      featuredTitle: 'Featured Articles',
      categoriesTitle: 'Explore by Categories',
      categoriesDesc: 'Our blogs cover study strategies, skill-building, online learning tools, and career insights to support lifelong learners.',
      categoriesSubDesc: 'Whether you’re a student, professional, or educator, explore content curated to help you grow in academics, career, and personal development.',
      serviceTitle: 'Service Comparison',
      mythsTitle: 'Myths & Facts',
      myth1: 'Online learning isn’t as effective as classroom learning.',
      fact1: 'Studies show that well-structured online courses can be just as effective, and often more flexible, than traditional learning.',
      myth2: 'You need advanced tech skills to learn online.',
      fact2: 'Most platforms are user-friendly and designed for learners of all levels to navigate easily.',
      myth3: 'Online certifications don’t hold value in careers.',
      fact3: 'Industry-recognized online certifications are valued by employers and enhance career opportunities.',
      myth4: 'Learning online is isolating and without support.',
      fact4: 'Online learning includes discussion forums, peer groups, and mentorship to foster collaboration.',
      ctaTitle: 'Unlock Exclusive Insights & Community!',
      ctaDesc: 'Discover the latest trends, connect with fellow readers, and get early access to special blog content. Be part of a vibrant learning community your next big idea starts here!',
      ctaBtn: 'Join the Blog Community',
      noBlogs: 'No blogs added yet.',
      readMore: 'Read More →',
      features: [
        'Beginner Friendly',
        'Self-paced & Live Options',
        'Certified Curriculum',
        'Career-Oriented',
      ],
      categories: [
        { name: "Study Tips & Productivity", desc: "Boost focus, manage time effectively, and build smart study habits." },
        { name: "Career Growth", desc: "Learn strategies to prepare for interviews, networking, and professional success." },
        { name: "E-Learning Trends", desc: "Stay updated with the latest innovations in digital learning and online education." },
        { name: "Skill Development", desc: "Explore resources to upskill in communication, finance, technology, and more." },
      ],
      featured: [
        { title: "Mastering Online Learning", description: "Practical tips on how to stay consistent, focused, and motivated while learning online.", image: blog1, link: "/blog/1" },
        { title: "Future Skills You Need to Learn", description: "Discover the most in-demand skills for the next decade and how online courses can help you acquire them.", image: blog2, link: "/blog/2" },
        { title: "Balancing Studies and Career", description: "Learn how to effectively balance work, study, and personal growth in today’s fast-paced environment.", image: blog3, link: "/blog/3" },
      ],
      services: [
        { name: "Courses & Programs", features: ["Beginner Friendly", "Self-paced & Live Options", "Certified Curriculum", "Career-Oriented"] },
        { name: "Mentorship", features: ["1-on-1 Guidance", "Expert Instructors", "Goal Setting", "Personalized Roadmaps"] },
        { name: "Certifications", features: ["Globally Recognized", "Skill Validation", "Practical Assessments", "Career Boosting"] },
        { name: "Workshops", features: ["Hands-on Training", "Industry Projects", "Short Duration", "Networking Opportunity"] },
      ],
    },
    Arabic: {
      heroTitle: 'استكشف مدونات التعلم لدينا',
      heroDesc: 'ابقَ على اطلاع بأحدث نصائح الدراسة، اتجاهات التعلم الإلكتروني، نصائح مهنية، واستراتيجيات النجاح في التعليم وما بعده.',
      latestTitle: 'أحدث المدونات',
      featuredTitle: 'مقالات مميزة',
      categoriesTitle: 'استكشف حسب الفئات',
      categoriesDesc: 'تغطي مدوناتنا استراتيجيات الدراسة، بناء المهارات، أدوات التعلم عبر الإنترنت، ورؤى مهنية لدعم المتعلمين مدى الحياة.',
      categoriesSubDesc: 'سواء كنت طالبًا أو محترفًا أو معلمًا، استكشف محتوى مصممًا لمساعدتك على النمو أكاديميًا ومهنيًا وشخصيًا.',
      serviceTitle: 'مقارنة الخدمات',
      mythsTitle: 'الخرافات والحقائق',
      myth1: 'التعلم عبر الإنترنت ليس فعالًا مثل التعلم في الفصل.',
      fact1: 'تظهر الدراسات أن الدورات عبر الإنترنت المصممة جيدًا يمكن أن تكون فعالة مثل التعلم التقليدي وغالبًا أكثر مرونة.',
      myth2: 'تحتاج إلى مهارات تقنية متقدمة للتعلم عبر الإنترنت.',
      fact2: 'معظم المنصات سهلة الاستخدام ومصممة لجميع مستويات المتعلمين.',
      myth3: 'الشهادات عبر الإنترنت ليس لها قيمة في الوظائف.',
      fact3: 'الشهادات المعترف بها عبر الإنترنت لها قيمة لدى أصحاب العمل وتعزز فرص العمل.',
      myth4: 'التعلم عبر الإنترنت منعزل وبدون دعم.',
      fact4: 'يشمل التعلم عبر الإنترنت منتديات النقاش، مجموعات الأقران، والإرشاد لتعزيز التعاون.',
      ctaTitle: 'افتح رؤى حصرية وانضم للمجتمع!',
      ctaDesc: 'اكتشف أحدث الاتجاهات، تواصل مع القراء الآخرين، واحصل على وصول مبكر لمحتوى المدونة الخاص. كن جزءًا من مجتمع تعليمي نابض بالحياة، حيث تبدأ فكرتك الكبيرة التالية هنا!',
      ctaBtn: 'انضم إلى مجتمع المدونة',
      noBlogs: 'لم تتم إضافة مدونات بعد.',
      readMore: 'اقرأ المزيد →',
      features: [
        'مناسب للمبتدئين',
        'خيارات ذاتية ومباشرة',
        'منهج معتمد',
        'موجه نحو الوظيفة',
      ],
      categories: [
        { name: "نصائح الدراسة والإنتاجية", desc: "عزز التركيز، نظم وقتك بفعالية، وابنِ عادات دراسة ذكية." },
        { name: "نمو مهني", desc: "تعلم استراتيجيات التحضير للمقابلات، بناء العلاقات المهنية، والنجاح الوظيفي." },
        { name: "اتجاهات التعلم الإلكتروني", desc: "ابقَ على اطلاع بأحدث الابتكارات في التعلم الرقمي والتعليم عبر الإنترنت." },
        { name: "تطوير المهارات", desc: "استكشف الموارد لتطوير مهاراتك في التواصل، المالية، التكنولوجيا، والمزيد." },
      ],
      featured: [
        { title: "إتقان التعلم عبر الإنترنت", description: "نصائح عملية للبقاء متسقًا، مركزًا، ومحفزًا أثناء التعلم عبر الإنترنت.", image: blog1, link: "/blog/1" },
        { title: "مهارات المستقبل التي تحتاج لتعلمها", description: "اكتشف أكثر المهارات المطلوبة للعقد القادم وكيف يمكن للدورات عبر الإنترنت مساعدتك في اكتسابها.", image: blog2, link: "/blog/2" },
        { title: "موازنة الدراسة والعمل", description: "تعلم كيفية تحقيق التوازن بين العمل والدراسة والنمو الشخصي في بيئة سريعة التغير.", image: blog3, link: "/blog/3" },
      ],
      services: [
        { name: "الدورات والبرامج", features: ["مناسب للمبتدئين", "خيارات ذاتية ومباشرة", "منهج معتمد", "موجه نحو الوظيفة"] },
        { name: "الإرشاد", features: ["إرشاد فردي", "مدربون خبراء", "تحديد الأهداف", "خطط شخصية"] },
        { name: "الشهادات", features: ["معترف بها عالميًا", "تأكيد المهارات", "تقييمات عملية", "تعزيز الوظيفة"] },
        { name: "ورش العمل", features: ["تدريب عملي", "مشاريع صناعية", "مدة قصيرة", "فرص للتواصل"] },
      ],
    },
    Hebrew: {
      heroTitle: 'גלה את בלוגי הלמידה שלנו',
      heroDesc: 'הישאר מעודכן עם טיפים ללמידה, מגמות בלמידה מקוונת, עצות לקריירה ואסטרטגיות להצלחה בחינוך ומעבר לו.',
      latestTitle: 'הבלוגים האחרונים',
      featuredTitle: 'מאמרים נבחרים',
      categoriesTitle: 'גלה לפי קטגוריות',
      categoriesDesc: 'הבלוגים שלנו מכסים אסטרטגיות לימוד, בניית מיומנויות, כלים ללמידה מקוונת ותובנות קריירה לתמיכה בלומדים לכל החיים.',
      categoriesSubDesc: 'בין אם אתה סטודנט, מקצוען או מחנך, גלה תוכן שנועד לעזור לך לצמוח באקדמיה, בקריירה ובפיתוח אישי.',
      serviceTitle: 'השוואת שירותים',
      mythsTitle: 'מיתוסים ועובדות',
      myth1: 'למידה מקוונת אינה יעילה כמו למידה בכיתה.',
      fact1: 'מחקרים מראים שקורסים מקוונים מובנים היטב יכולים להיות יעילים כמו למידה מסורתית ולעיתים אף גמישים יותר.',
      myth2: 'צריך מיומנויות טכנולוגיות מתקדמות כדי ללמוד אונליין.',
      fact2: 'רוב הפלטפורמות ידידותיות למשתמש ומיועדות לכל הרמות.',
      myth3: 'תעודות מקוונות אינן בעלות ערך בקריירה.',
      fact3: 'תעודות מקוונות מוכרות בתעשייה מוערכות על ידי מעסיקים ומקדמות הזדמנויות קריירה.',
      myth4: 'למידה אונליין מבודדת וללא תמיכה.',
      fact4: 'למידה אונליין כוללת פורומים, קבוצות עמיתים והנחיה לשיתוף פעולה.',
      ctaTitle: 'פתח תובנות בלעדיות והצטרף לקהילה!',
      ctaDesc: 'גלה את המגמות האחרונות, התחבר עם קוראים נוספים וקבל גישה מוקדמת לתוכן מיוחד. היה חלק מקהילת למידה תוססת, הרעיון הגדול הבא שלך מתחיל כאן!',
      ctaBtn: 'הצטרף לקהילת הבלוג',
      noBlogs: 'לא נוספו בלוגים עדיין.',
      readMore: 'קרא עוד →',
      features: [
        'מתאים למתחילים',
        'אפשרויות גמישות ומקוונות',
        'תוכנית לימודים מוסמכת',
        'ממוקד קריירה',
      ],
      categories: [
        { name: "טיפים ללמידה ופרודוקטיביות", desc: "שפר ריכוז, נהל זמן ביעילות ובנה הרגלי לימוד חכמים." },
        { name: "צמיחה בקריירה", desc: "למד אסטרטגיות להתכונן לראיונות, נטוורקינג והצלחה מקצועית." },
        { name: "מגמות בלמידה מקוונת", desc: "הישאר מעודכן עם החידושים האחרונים בלמידה דיגיטלית וחינוך אונליין." },
        { name: "פיתוח מיומנויות", desc: "גלה משאבים לשיפור מיומנויות בתקשורת, פיננסים, טכנולוגיה ועוד." },
      ],
      featured: [
        { title: "שליטה בלמידה אונליין", description: "טיפים מעשיים לשמירה על עקביות, ריכוז ומוטיבציה בלמידה אונליין.", image: blog1, link: "/blog/1" },
        { title: "מיומנויות העתיד שצריך ללמוד", description: "גלה את המיומנויות המבוקשות ביותר לעשור הקרוב וכיצד קורסים אונליין יכולים לעזור לך לרכוש אותן.", image: blog2, link: "/blog/2" },
        { title: "איזון לימודים וקריירה", description: "למד כיצד לאזן בין עבודה, לימודים וצמיחה אישית בסביבה מהירה.", image: blog3, link: "/blog/3" },
      ],
      services: [
        { name: "קורסים ותוכניות", features: ["מתאים למתחילים", "אפשרויות גמישות ומקוונות", "תוכנית לימודים מוסמכת", "ממוקד קריירה"] },
        { name: "הנחיה", features: ["הנחיה אישית", "מדריכים מומחים", "הגדרת מטרות", "תוכניות מותאמות אישית"] },
        { name: "תעודות", features: ["מוכר גלובלית", "אימות מיומנויות", "הערכות מעשיות", "קידום קריירה"] },
        { name: "סדנאות", features: ["הדרכה מעשית", "פרויקטים בתעשייה", "משך קצר", "הזדמנויות נטוורקינג"] },
      ],
    },
  };
  const t = translations[language] || translations['English'];

  const [latestBlogs, setLatestBlogs] = React.useState([]);
  React.useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      setLatestBlogs(JSON.parse(stored));
    }
  }, []);

  return (
    <div
      className={
        `${theme === "dark" ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"}${isRTL ? ' rtl' : ''}`
      }
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center"
        style={{ color: theme === "dark" ? "#fff" : "#222" }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={blogHero}
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="relative text-center px-6"
          style={{ color: theme === "dark" ? "#fff" : "#fff" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.heroTitle}
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === "dark" ? "text-white" : "text-white"}`}
          >
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className={`py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t.latestTitle}
          </h2>
          {latestBlogs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {latestBlogs.map((blog, idx) => (
                <article
                  key={idx}
                  className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === "dark" ? "bg-[#222] text-white" : "bg-gray-50 text-black"}`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      {blog.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
                      {blog.description}
                    </p>
                    <div className={`text-xs mb-2 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      {language === 'Arabic' ? 'بواسطة' : language === 'Hebrew' ? 'מאת' : 'By'} {blog.author}
                    </div>
                    <div className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      {new Date(blog.createdAt).toLocaleString(language === 'Arabic' ? 'ar' : language === 'Hebrew' ? 'he' : 'en')}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className={`text-center text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t.noBlogs}</p>
          )}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{t.featuredTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.featured.map((feature, index) => (
              <article key={index} className="rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden bg-white text-black">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a]">{feature.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 text-[#1e3a8a]">{feature.description}</p>
                  <Link to={feature.link} className="text-[#1e3a8a] font-semibold hover:underline">{t.readMore}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
  <section className="py-16 bg-[#e6f7ff]">
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.categoriesTitle}
            </h2>
            <p className="text-lg mb-6 text-gray-700">{t.categoriesDesc}</p>
            <p className="text-gray-600">{t.categoriesSubDesc}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.categories.map((cat, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white text-black">
                <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">{cat.name}</h3>
                <p className="text-[#1e3a8a]">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className={`py-16 ${theme === "dark" ? "bg-[#222]" : "bg-[#1e3a8a]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t.serviceTitle}
          </h2>
          <div className="overflow-x-auto">
            <table className={`w-full border rounded-lg shadow-md text-left ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
              <thead className={theme === "dark" ? "bg-[#111] text-white" : "bg-[#000] text-white"}>
                <tr>
                  <th className="px-6 py-3">{language === 'Arabic' ? 'الميزات' : language === 'Hebrew' ? 'תכונות' : 'Features'}</th>
                  {t.services.map((service, idx) => (
                    <th key={idx} className="px-6 py-3 text-center">{service.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={theme === "dark" ? "bg-[#222] divide-y divide-gray-700" : "bg-white divide-y divide-gray-200"}>
                {t.services[0].features.map((_, i) => (
                  <tr key={i}>
                    <td className={`px-6 py-4 font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{t.services[0].features[i]}</td>
                    {t.services.map((service, j) => (
                      <td key={j} className={`px-6 py-4 text-center ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{service.features[i] || "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Myths & Facts */}
      <section className="py-16 bg-[#e6f7ff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>{t.mythsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">{language === 'Arabic' ? 'خرافة:' : language === 'Hebrew' ? 'מיתוס:' : 'Myth:'}</h3>
                <p className="text-[#1e3a8a]">{t.myth1}</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">{language === 'Arabic' ? 'حقيقة:' : language === 'Hebrew' ? 'עובדה:' : 'Fact:'}</h3>
                <p className="text-[#1e3a8a]">{t.fact1}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">{language === 'Arabic' ? 'خرافة:' : language === 'Hebrew' ? 'מיתוס:' : 'Myth:'}</h3>
                <p className="text-[#1e3a8a]">{t.myth2}</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">{language === 'Arabic' ? 'حقيقة:' : language === 'Hebrew' ? 'עובדה:' : 'Fact:'}</h3>
                <p className="text-[#1e3a8a]">{t.fact2}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">{language === 'Arabic' ? 'خرافة:' : language === 'Hebrew' ? 'מיתוס:' : 'Myth:'}</h3>
                <p className="text-[#1e3a8a]">{t.myth3}</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">{language === 'Arabic' ? 'حقيقة:' : language === 'Hebrew' ? 'עובדה:' : 'Fact:'}</h3>
                <p className="text-[#1e3a8a]">{t.fact3}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">{language === 'Arabic' ? 'خرافة:' : language === 'Hebrew' ? 'מיתוס:' : 'Myth:'}</h3>
                <p className="text-[#1e3a8a]">{t.myth4}</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">{language === 'Arabic' ? 'حقيقة:' : language === 'Hebrew' ? 'עובדה:' : 'Fact:'}</h3>
                <p className="text-[#1e3a8a]">{t.fact4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#fff' }}>{t.ctaTitle}</h2>
          <p className="text-lg mb-8 text-gray-100">{t.ctaDesc}</p>
          <a href="#" className="inline-block px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white text-[#1e3a8a] hover:bg-[#e6f7ff] hover:text-[#1e3a8a] border border-[#1e3a8a]">
            {t.ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
}
// ...existing code...
import React from "react";
import blogHero from "../assets/blog.mp4";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.avif";
import { Link } from "react-router-dom";
