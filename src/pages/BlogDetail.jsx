import React from "react";
import { useParams, Link } from "react-router-dom";
import blog1 from "../assets/online.jpg";
import blog2 from "../assets/future.jpg";
import blog3 from "../assets/learning (2).jpg";

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
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  const { id } = useParams();

  // Translated blog data
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
            English: "The advantages of online learning include flexibility, affordability, and accessibility. Learners can balance education with work or personal commitments while reducing travel and material costs. Online platforms also offer a wide range of courses from universities, companies, and experts worldwide, making specialized knowledge available to everyone. Learners gain control over their pace and learning style, leading to improved outcomes.",
            Arabic: "تشمل مزايا التعلم عبر الإنترنت المرونة، التكلفة المنخفضة، وسهولة الوصول. يمكن للمتعلمين تحقيق التوازن بين التعليم والعمل أو الالتزامات الشخصية مع تقليل تكاليف السفر والمواد. توفر المنصات عبر الإنترنت أيضًا مجموعة واسعة من الدورات من جامعات وشركات وخبراء حول العالم، مما يجعل المعرفة المتخصصة متاحة للجميع. يحصل المتعلمون على التحكم في وتيرتهم وأسلوب تعلمهم، مما يؤدي إلى نتائج أفضل.",
            Hebrew: "היתרונות של למידה מקוונת כוללים גמישות, עלות נמוכה ונגישות. הלומדים יכולים לאזן בין לימודים, עבודה ומחויבויות אישיות תוך הפחתת עלויות נסיעה וחומרים. פלטפורמות מקוונות מציעות גם מגוון רחב של קורסים מאוניברסיטאות, חברות ומומחים ברחבי העולם, מה שהופך ידע מקצועי לזמין לכולם. הלומדים מקבלים שליטה על הקצב וסגנון הלמידה שלהם, מה שמוביל לתוצאות טובות יותר."
          }
        },
        {
          heading: {
            English: "Effective Learning Strategies",
            Arabic: "استراتيجيات التعلم الفعالة",
            Hebrew: "אסטרטגיות למידה יעילות"
          },
          content: {
            English: "To succeed in online learning, students should set clear goals, maintain a study schedule, and engage actively in discussions. Note-taking, regular self-assessments, and participation in group projects enhance understanding. Using productivity tools, minimizing distractions, and seeking support from mentors or peers ensures steady progress. Developing self-discipline and time management are the keys to mastering online education.",
            Arabic: "لتحقيق النجاح في التعلم عبر الإنترنت، يجب على الطلاب تحديد أهداف واضحة، الحفاظ على جدول دراسة، والمشاركة النشطة في المناقشات. تدوين الملاحظات، التقييم الذاتي المنتظم، والمشاركة في المشاريع الجماعية تعزز الفهم. استخدام أدوات الإنتاجية، تقليل المشتتات، وطلب الدعم من المرشدين أو الأقران يضمن التقدم المستمر. تطوير الانضباط الذاتي وإدارة الوقت هما مفتاحا إتقان التعليم عبر الإنترنت.",
            Hebrew: "כדי להצליח בלמידה מקוונת, על התלמידים לקבוע מטרות ברורות, לשמור על לוח זמנים ללמידה ולהשתתף באופן פעיל בדיונים. רישום הערות, הערכה עצמית קבועה והשתתפות בפרויקטים קבוצתיים משפרים את ההבנה. שימוש בכלי פרודוקטיביות, צמצום הסחות דעת וחיפוש תמיכה ממנטורים או עמיתים מבטיחים התקדמות יציבה. פיתוח משמעת עצמית וניהול זמן הם המפתחות לשליטה בלמידה מקוונת."
          }
        },
        {
          heading: {
            English: "Building a Supportive Environment",
            Arabic: "بناء بيئة داعمة",
            Hebrew: "בניית סביבה תומכת"
          },
          content: {
            English: "A dedicated study environment is essential for online learning success. Creating a distraction-free workspace, having reliable internet, and setting specific learning hours help students stay focused. Institutions can further support learners by providing discussion forums, peer groups, and mentorship programs that replicate the collaborative nature of physical classrooms.",
            Arabic: "بيئة دراسة مخصصة ضرورية لنجاح التعلم عبر الإنترنت. إنشاء مساحة خالية من المشتتات، وجود إنترنت موثوق، وتحديد ساعات تعلم محددة يساعد الطلاب على التركيز. يمكن للمؤسسات دعم المتعلمين أكثر من خلال توفير منتديات النقاش، مجموعات الأقران، وبرامج الإرشاد التي تحاكي الطبيعة التعاونية للفصول الدراسية التقليدية.",
            Hebrew: "סביבת לימוד ייעודית חיונית להצלחה בלמידה מקוונת. יצירת מרחב ללא הסחות דעת, חיבור אינטרנט אמין וקביעת שעות לימוד מסוימות עוזרים לתלמידים להישאר ממוקדים. מוסדות יכולים לתמוך בלומדים על ידי מתן פורומים לדיון, קבוצות עמיתים ותוכניות חונכות שמדמות את שיתוף הפעולה בכיתות המסורתיות."
          }
        },
        {
          heading: {
            English: "Leveraging Technology",
            Arabic: "الاستفادة من التكنولوجيا",
            Hebrew: "ניצול הטכנולוגיה"
          },
          content: {
            English: "Modern online education platforms use advanced tools such as interactive quizzes, gamified learning modules, and AI-powered recommendations. Video conferencing software, cloud-based storage, and collaborative tools enhance engagement and teamwork. By leveraging technology effectively, students can enjoy personalized learning journeys and track their progress more efficiently.",
            Arabic: "تستخدم منصات التعليم عبر الإنترنت الحديثة أدوات متقدمة مثل الاختبارات التفاعلية، وحدات التعلم الممزوجة، والتوصيات المدعومة بالذكاء الاصطناعي. برامج مؤتمرات الفيديو، التخزين السحابي، وأدوات التعاون تعزز التفاعل والعمل الجماعي. من خلال الاستفادة الفعالة من التكنولوجيا، يمكن للطلاب الاستمتاع برحلات تعلم مخصصة وتتبع تقدمهم بشكل أكثر كفاءة.",
            Hebrew: "פלטפורמות חינוך מקוונות מודרניות משתמשות בכלים מתקדמים כגון חידונים אינטראקטיביים, מודולים למידה מגומיפיים והמלצות מבוססות בינה מלאכותית. תוכנות ועידות וידאו, אחסון בענן וכלי שיתוף פעולה משפרים את המעורבות והעבודה בצוות. על ידי ניצול הטכנולוגיה בצורה יעילה, התלמידים יכולים ליהנות ממסלולי למידה מותאמים אישית ולעקוב אחר ההתקדמות שלהם בצורה יעילה יותר."
          }
        },
        {
          heading: {
            English: "Overcoming Challenges",
            Arabic: "تجاوز التحديات",
            Hebrew: "התמודדות עם אתגרים"
          },
          content: {
            English: "Online learners often face challenges such as lack of motivation, digital fatigue, or limited interaction. Solutions include breaking study sessions into manageable chunks, practicing active learning techniques, and joining peer study groups for accountability. Institutions can support learners with mentorship, counseling, and engaging course design to reduce dropout rates and boost learner satisfaction.",
            Arabic: "غالبًا ما يواجه المتعلمون عبر الإنترنت تحديات مثل نقص الدافع، الإرهاق الرقمي، أو التفاعل المحدود. تشمل الحلول تقسيم جلسات الدراسة إلى أجزاء قابلة للإدارة، ممارسة تقنيات التعلم النشط، والانضمام إلى مجموعات دراسة الأقران للمساءلة. يمكن للمؤسسات دعم المتعلمين من خلال الإرشاد، الاستشارة، وتصميم الدورات الجذاب لتقليل معدلات الانسحاب وزيادة رضا المتعلمين.",
            Hebrew: "לומדים מקוונים מתמודדים לעיתים קרובות עם אתגרים כמו חוסר מוטיבציה, עייפות דיגיטלית או אינטראקציה מוגבלת. פתרונות כוללים חלוקת מפגשי לימוד לחלקים ניתנים לניהול, תרגול טכניקות למידה פעילה והצטרפות לקבוצות לימוד עמיתים לצורך אחריות. מוסדות יכולים לתמוך בלומדים באמצעות חונכות, ייעוץ ועיצוב קורסים מרתק כדי להפחית את שיעורי הנשירה ולהגביר את שביעות רצון הלומדים."
          }
        },
        {
          heading: {
            English: "Future of Online Education",
            Arabic: "مستقبل التعليم عبر الإنترنت",
            Hebrew: "עתיד החינוך המקוון"
          },
          content: {
            English: "The future of online learning lies in immersive technologies like virtual reality classrooms, AI tutors, and adaptive learning platforms that tailor content to individual needs. Lifelong learning will become the norm as industries evolve rapidly, and professionals will continually update their skills through micro-courses and certifications. Online education will not only complement traditional methods but may become the primary mode of learning in the digital era.",
            Arabic: "يكمن مستقبل التعلم عبر الإنترنت في التقنيات الغامرة مثل الفصول الدراسية الافتراضية، المدرسين المدعومين بالذكاء الاصطناعي، ومنصات التعلم التكيفية التي تخصص المحتوى للاحتياجات الفردية. سيصبح التعلم مدى الحياة هو القاعدة مع تطور الصناعات بسرعة، وسيواصل المهنيون تحديث مهاراتهم من خلال الدورات القصيرة والشهادات. لن يكمل التعليم عبر الإنترنت الطرق التقليدية فحسب، بل قد يصبح الوضع الأساسي للتعلم في العصر الرقمي.",
            Hebrew: "עתיד הלמידה המקוונת טמון בטכנולוגיות סוחפות כמו כיתות מציאות מדומה, מורים מבוססי בינה מלאכותית ופלטפורמות למידה אדפטיביות שמותאמות לצרכים האישיים. למידה לאורך כל החיים תהפוך לנורמה ככל שהתעשיות יתפתחו במהירות, ואנשי מקצוע יעדכנו את כישוריהם באופן מתמיד באמצעות קורסים קצרים והסמכות. החינוך המקוון לא רק ישלים את השיטות המסורתיות אלא עשוי להפוך לאמצעי הלמידה העיקרי בעידן הדיגיטלי."
          }
        }
      ]
    },
    {
      id: "2",
      title: {
        English: "Future Skills You Need to Learn",
        Arabic: "مهارات المستقبل التي تحتاج لتعلمها",
        Hebrew: "מיומנויות העתיד שצריך ללמוד"
      },
      image: blog2,
      intro: {
        English: "Discover the most in-demand skills for the next decade and how online courses can help you acquire them. Stay ahead in your career by learning what matters most in the digital age.",
        Arabic: "اكتشف أكثر المهارات المطلوبة للعقد القادم وكيف يمكن للدورات عبر الإنترنت مساعدتك في اكتسابها. كن في المقدمة في حياتك المهنية من خلال تعلم ما يهم في العصر الرقمي.",
        Hebrew: "גלה את המיומנויות המבוקשות ביותר לעשור הקרוב וכיצד קורסים אונליין יכולים לעזור לך לרכוש אותן. היה מוביל בקריירה שלך על ידי למידת מה שחשוב בעידן הדיגיטלי."
      },
      sections: [
        {
          heading: {
            English: "Top Future Skills",
            Arabic: "أهم مهارات المستقبل",
            Hebrew: "מיומנויות העתיד המובילות"
          },
          content: {
            English: "Skills like data analysis, digital marketing, coding, project management, and emotional intelligence are increasingly vital. Online learning platforms offer specialized courses to help you master these skills and stay competitive.",
            Arabic: "مهارات مثل تحليل البيانات، التسويق الرقمي، البرمجة، إدارة المشاريع، والذكاء العاطفي أصبحت أكثر أهمية. توفر منصات التعلم عبر الإنترنت دورات متخصصة لمساعدتك على إتقان هذه المهارات والبقاء في المنافسة.",
            Hebrew: "מיומנויות כמו ניתוח נתונים, שיווק דיגיטלי, קידוד, ניהול פרויקטים ואינטליגנציה רגשית הופכות לחשובות יותר ויותר. פלטפורמות לימוד אונליין מציעות קורסים ייחודיים שיעזרו לך לשלוט במיומנויות אלו ולהישאר תחרותי."
          }
        },
        {
          heading: {
            English: "Why Future Skills Matter",
            Arabic: "لماذا مهارات المستقبل مهمة",
            Hebrew: "למה מיומנויות העתיד חשובות"
          },
          content: {
            English: "The workplace is evolving rapidly. Employers seek adaptable professionals who can learn new technologies and collaborate globally. Future skills ensure you’re ready for new opportunities and challenges.",
            Arabic: "مكان العمل يتطور بسرعة. يبحث أصحاب العمل عن محترفين قادرين على التكيف وتعلم تقنيات جديدة والتعاون عالميًا. مهارات المستقبل تضمن استعدادك للفرص والتحديات الجديدة.",
            Hebrew: "מקום העבודה משתנה במהירות. מעסיקים מחפשים אנשי מקצוע גמישים שיכולים ללמוד טכנולוגיות חדשות ולשתף פעולה גלובלית. מיומנויות העתיד מבטיחות שתהיה מוכן להזדמנויות ואתגרים חדשים."
          }
        },
        {
          heading: {
            English: "How to Learn Future Skills",
            Arabic: "كيف تتعلم مهارات المستقبل",
            Hebrew: "איך ללמוד מיומנויות עתיד"
          },
          content: {
            English: "Use online courses, join communities, and practice regularly. Set clear goals, track your progress, and seek feedback from mentors and peers to accelerate your growth.",
            Arabic: "استخدم الدورات عبر الإنترنت، انضم إلى المجتمعات، وتمرن بانتظام. حدد أهدافًا واضحة، تتبع تقدمك، واطلب ملاحظات من المرشدين والأقران لتسريع نموك.",
            Hebrew: "השתמש בקורסים אונליין, הצטרף לקהילות ותרגל באופן קבוע. קבע מטרות ברורות, עקוב אחרי ההתקדמות שלך וקבל משוב ממנטורים ועמיתים כדי להאיץ את הצמיחה שלך."
          }
        },
        {
          heading: {
            English: "Practical Applications",
            Arabic: "تطبيقات عملية",
            Hebrew: "יישומים מעשיים"
          },
          content: {
            English: "Apply future skills in real-world scenarios such as building a portfolio, contributing to open-source projects, or volunteering for tech initiatives. These experiences help you gain confidence and demonstrate your abilities to employers.",
            Arabic: "طبّق مهارات المستقبل في سيناريوهات واقعية مثل بناء ملف أعمال، المساهمة في مشاريع مفتوحة المصدر، أو التطوع في مبادرات تقنية. هذه التجارب تساعدك على اكتساب الثقة وإظهار قدراتك لأصحاب العمل.",
            Hebrew: "השתמש במיומנויות העתיד במצבים אמיתיים כמו בניית תיק עבודות, תרומה לפרויקטים בקוד פתוח או התנדבות ביוזמות טכנולוגיות. חוויות אלו עוזרות לך לצבור ביטחון ולהציג את היכולות שלך למעסיקים."
          }
        },
        {
          heading: {
            English: "Resources for Learning",
            Arabic: "مصادر للتعلم",
            Hebrew: "משאבים ללמידה"
          },
          content: {
            English: "Explore online platforms, podcasts, webinars, and books dedicated to future skills. Join online communities and forums to stay updated and network with professionals in your field.",
            Arabic: "استكشف منصات الإنترنت، البودكاست، الندوات، والكتب المخصصة لمهارات المستقبل. انضم إلى المجتمعات والمنتديات عبر الإنترنت للبقاء على اطلاع وبناء شبكة علاقات مع محترفين في مجالك.",
            Hebrew: "גלה פלטפורמות אונליין, פודקאסטים, וובינרים וספרים המוקדשים למיומנויות העתיד. הצטרף לקהילות ופורומים ברשת כדי להישאר מעודכן וליצור קשרים עם אנשי מקצוע בתחום שלך."
          }
        },
        {
          heading: {
            English: "Industry Examples",
            Arabic: "أمثلة من الصناعة",
            Hebrew: "דוגמאות מהתעשייה"
          },
          content: {
            English: "Tech companies, financial institutions, and healthcare organizations are actively seeking candidates with future skills. Case studies show how professionals have advanced their careers by mastering these abilities.",
            Arabic: "شركات التقنية، المؤسسات المالية، والمنظمات الصحية تبحث بنشاط عن مرشحين يمتلكون مهارات المستقبل. دراسات الحالة تظهر كيف تقدم المحترفون في حياتهم المهنية من خلال إتقان هذه المهارات.",
            Hebrew: "חברות טכנולוגיה, מוסדות פיננסיים וארגוני בריאות מחפשים באופן פעיל מועמדים עם מיומנויות העתיד. מחקרי מקרה מראים כיצד אנשי מקצוע קידמו את הקריירה שלהם על ידי שליטה במיומנויות אלו."
          }
        }
      ],
    },
    {
      id: "3",
      title: {
        English: "Balancing Studies and Career",
        Arabic: "موازنة الدراسة والعمل",
        Hebrew: "איזון לימודים וקריירה"
      },
      image: blog3,
      intro: {
        English: "Learn how to effectively balance work, study, and personal growth in today’s fast-paced environment. Discover strategies to manage your time, set priorities, and achieve your goals.",
        Arabic: "تعلم كيفية تحقيق التوازن بين العمل والدراسة والنمو الشخصي في بيئة سريعة التغير. اكتشف استراتيجيات لإدارة وقتك، تحديد الأولويات، وتحقيق أهدافك.",
        Hebrew: "למד כיצד לאזן בין עבודה, לימודים וצמיחה אישית בסביבה מהירה. גלה אסטרטגיות לניהול זמן, קביעת סדרי עדיפויות והשגת מטרותיך."
      },
      sections: [
        {
          heading: {
            English: "Time Management Tips",
            Arabic: "نصائح لإدارة الوقت",
            Hebrew: "טיפים לניהול זמן"
          },
          content: {
            English: "Create a daily schedule, set realistic goals, and use productivity tools. Prioritize tasks and avoid multitasking to stay focused and reduce stress.",
            Arabic: "أنشئ جدولًا يوميًا، حدد أهدافًا واقعية، واستخدم أدوات الإنتاجية. رتب المهام حسب الأولوية وتجنب تعدد المهام للبقاء مركزًا وتقليل التوتر.",
            Hebrew: "צור לוח זמנים יומי, קבע מטרות ריאליות והשתמש בכלי פרודוקטיביות. סדר עדיפויות למשימות והימנע מריבוי משימות כדי להישאר ממוקד ולהפחית לחץ."
          }
        },
        {
          heading: {
            English: "Setting Priorities",
            Arabic: "تحديد الأولويات",
            Hebrew: "קביעת סדרי עדיפויות"
          },
          content: {
            English: "Identify what matters most in your studies and career. Focus on high-impact activities and learn to say no to distractions.",
            Arabic: "حدد ما هو الأكثر أهمية في دراستك وحياتك المهنية. ركز على الأنشطة ذات التأثير العالي وتعلم قول لا للمشتتات.",
            Hebrew: "זהה מה חשוב ביותר בלימודים ובקריירה שלך. התמקד בפעילויות בעלות השפעה גבוהה ולמד לומר לא להסחות דעת."
          }
        },
        {
          heading: {
            English: "Achieving Personal Growth",
            Arabic: "تحقيق النمو الشخصي",
            Hebrew: "השגת צמיחה אישית"
          },
          content: {
            English: "Balance work and study with self-care, hobbies, and social connections. Celebrate your achievements and reflect on your progress regularly.",
            Arabic: "وازن بين العمل والدراسة مع العناية الذاتية، الهوايات، والروابط الاجتماعية. احتفل بإنجازاتك وراجع تقدمك بانتظام.",
            Hebrew: "איזן בין עבודה ולימודים עם טיפוח עצמי, תחביבים וקשרים חברתיים. חגוג את ההישגים שלך וחשוב על ההתקדמות שלך באופן קבוע."
          }
        },
        {
          heading: {
            English: "Work-Life Balance Strategies",
            Arabic: "استراتيجيات التوازن بين العمل والحياة",
            Hebrew: "אסטרטגיות לאיזון עבודה-חיים"
          },
          content: {
            English: "Set boundaries for work and study hours, schedule regular breaks, and make time for hobbies and relaxation. Use digital tools to track your progress and avoid burnout.",
            Arabic: "حدد حدودًا لساعات العمل والدراسة، وجدول فترات راحة منتظمة، وخصص وقتًا للهوايات والاسترخاء. استخدم الأدوات الرقمية لتتبع تقدمك وتجنب الإرهاق.",
            Hebrew: "קבע גבולות לשעות עבודה ולימודים, תכנן הפסקות קבועות וקדש זמן לתחביבים ומנוחה. השתמש בכלים דיגיטליים כדי לעקוב אחרי ההתקדמות שלך ולמנוע שחיקה."
          }
        },
        {
          heading: {
            English: "Mental Health Tips",
            Arabic: "نصائح للصحة النفسية",
            Hebrew: "טיפים לבריאות הנפש"
          },
          content: {
            English: "Practice mindfulness, connect with supportive friends or mentors, and seek professional help if needed. Remember that personal growth includes caring for your mental well-being.",
            Arabic: "مارس التأمل الذهني، تواصل مع أصدقاء أو مرشدين داعمين، واطلب المساعدة المهنية إذا لزم الأمر. تذكر أن النمو الشخصي يشمل الاهتمام بصحتك النفسية.",
            Hebrew: "תרגל מיינדפולנס, שמור על קשר עם חברים או מנטורים תומכים ופנה לעזרה מקצועית אם צריך. זכור שצמיחה אישית כוללת גם דאגה לבריאות הנפש שלך."
          }
        },
        {
          heading: {
            English: "Success Stories",
            Arabic: "قصص نجاح",
            Hebrew: "סיפורי הצלחה"
          },
          content: {
            English: "Read about individuals who have successfully balanced studies and career, and learn from their experiences. Their journeys can inspire you to create your own path to success.",
            Arabic: "اقرأ عن أشخاص نجحوا في تحقيق التوازن بين الدراسة والعمل، وتعلم من تجاربهم. يمكن أن تلهمك رحلاتهم لصنع طريقك الخاص نحو النجاح.",
            Hebrew: "קרא על אנשים שהצליחו לאזן בין לימודים לקריירה ולמד מהניסיון שלהם. המסע שלהם יכול להעניק לך השראה ליצור את הדרך שלך להצלחה."
          }
        }
      ],
    }
  ];


  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className={
        `text-center py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`
      } dir={isRTL ? 'rtl' : 'ltr'}>
        <h2 className="text-2xl font-bold">{language === 'Arabic' ? 'لم يتم العثور على المدونة' : language === 'Hebrew' ? 'הבלוג לא נמצא' : 'Blog Not Found'}</h2>
        <Link to="/blog" className="text-[#1e3a8a] underline mt-4 block">
          {language === 'Arabic' ? 'العودة إلى المدونات' : language === 'Hebrew' ? 'חזרה לבלוגים' : 'Back to Blogs'}
        </Link>
      </div>
    );
  }

  return (
  <div className={theme === 'dark' ? 'pt-20 min-h-screen bg-black text-white' : 'pt-20 min-h-screen bg-white text-black'} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Back Link */}
      <Link to="/blog" className="text-[#1e3a8a] underline mt-4 block">
        Back to Blogs
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
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#1e3a8a' }}>
          {blog.title[language]}
        </h1>
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