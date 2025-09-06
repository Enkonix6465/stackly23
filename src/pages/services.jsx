import React from "react";
import { Link } from "react-router-dom";
import serviceHeroVideo from "../assets/servicehero.mp4";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
 

const services = [
  {
    title: "Courses & Programs",
    description:
      "We offer a wide range of subjects including Technology, Business, Arts, and more. Our programs are structured into beginner, intermediate, and advanced levels, ensuring that learners of all stages can progress smoothly. With flexible learning paths and career-focused modules, you’ll gain both knowledge and practical experience that make you job-ready.",
    image: s1,
    link: "/courses-programs",
  },
  {
    title: "Live Classes & Mentorship",
    description:
      "Join interactive live classes and receive guidance from industry experts through one-on-one mentorship or group sessions. Our focus is on real-time doubt clearing, personalized feedback, and helping you gain clarity on complex topics. Learn directly from professionals and build the confidence to apply your skills effectively.",
    image: s2,
    link: "/live-classes-mentorship",
  },
  {
    title: "Certifications & Career Support",
    description:
      "Earn industry-recognized certifications upon course completion and prepare for your career with dedicated support. We help you with resume building, interview preparation, and placement opportunities. Our career-focused programs ensure you don’t just learn — you get job-ready with the skills companies demand today.",
    image: s3,
    link: "/certifications-career-support",
  },
  {
    title: "Skill Development Workshops",
    description:
      "Take part in short-term bootcamps and workshops on trending topics such as Artificial Intelligence, Data Science, Digital Marketing, and more. These hands-on sessions are designed to quickly upskill you with practical knowledge, enabling you to stay ahead in today’s competitive market.",
    image: s4,
    link: "/skill-development-workshops",
  },
  {
    title: "Learning Resources & Tools",
    description:
      "Access a wide range of resources including e-books, recorded lectures, practice assignments, and quizzes. Learn on-the-go with our mobile app, and download study materials to continue learning anytime, anywhere. Our resources are designed to help you reinforce knowledge and track progress effectively.",
    image: s5,
    link: "/learning-resources-tools",
  },
  {
    title: "Community & Networking",
    description:
      "Collaborate and grow with our vibrant community of learners, mentors, and alumni. Engage in peer learning groups, join discussion forums, and become part of an active alumni network. Build meaningful professional connections that will support your learning and career journey.",
    image: s6,
    link: "/community-networking",
  },
];

export default function ServiceHero() {
  // Theme and language state synced with Header (Home1.jsx pattern)
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');
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
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  // Translation object (reuse or expand as needed)
  const translations = {
    English: {
      heroTitle: 'Elevate Your <span style="color: #1e3a8a">Experience</span>',
      heroDesc: 'Explore our curated services in Artificial Intelligence, Web Development, Data Science, Blockchain, Cybersecurity, and Cloud Computing. Tailored solutions that empower your learning journey and help you achieve your career goals.',
      exploreTitle: 'Explore Our services',
      readMore: 'Read More',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Excellence', desc: 'We strive for the highest standards in everything we do, delivering quality education and support to empower every learner.' },
        { title: 'Innovation', desc: 'We embrace new ideas and technologies, ensuring our programs are always relevant and future-ready for the evolving world.' },
        { title: 'Community', desc: 'We foster a supportive and inclusive environment where learners, mentors, and alumni grow together and help each other succeed.' }
      ],
      howToTitle: 'How to Get Started',
      steps: [
        { title: 'Browse Services', desc: 'Explore our range of technology and career-focused services to find what fits your goals.' },
        { title: 'Connect with Experts', desc: 'Reach out to our instructors and advisors for guidance and personalized recommendations.' },
        { title: 'Enroll & Learn', desc: 'Sign up for courses, workshops, or consulting sessions and start your learning journey.' },
        { title: 'Achieve Success', desc: 'Apply your new skills, earn certificates, and advance your career with our support.' }
      ],
      techTitle: 'Technology & Tools',
      techDesc: 'We empower your learning with the latest industry-standard technologies and tools, ensuring you gain hands-on experience that truly matters. Our programs go beyond theory, focusing on practical application through real projects, case studies, and interactive challenges. Every course is designed in collaboration with industry experts, so you learn the exact skills companies are looking for today. With dedicated mentorship and continuous feedback, we help you build confidence alongside your technical expertise. Whether you are starting your career or upgrading your skills.',
      techBoxes: [
        { title: 'AI & Machine Learning', items: ['TensorFlow', 'PyTorch'] },
        { title: 'Web Development', items: ['React', 'Node.js', 'Django'] },
        { title: 'Data Science & Analytics', items: ['Python', 'R', 'Tableau'] },
        { title: 'Blockchain & Cloud', items: ['Ethereum', 'Solidity', 'AWS', 'Docker'] }
      ],
      pricingTitle: 'Our Pricing Plans',
      pricing: [
        { title: 'Basic', price: '$19', period: '/mo', features: ['✔️ Access to 3 courses', '✔️ Community Support', '✔️ Certificate of Completion'], button: 'Choose Basic' },
        { title: 'Pro', price: '$49', period: '/mo', features: ['✔️ Access to all courses', '✔️ Priority Support', '✔️ Certificate & Projects', '✔️ Monthly Webinars'], button: 'Choose Pro' },
        { title: 'Enterprise', price: '$99', period: '/mo', features: ['✔️ Unlimited Users', '✔️ Dedicated Account Manager', '✔️ Custom Integrations', '✔️ All Pro Features'], button: 'Contact Sales' }
      ],
      readyTitle: 'Ready to Join Our Journey?',
      readyDesc: 'Become part of our award-winning community and unlock new opportunities for growth, learning, and success. Connect with us today to start your journey!',
      contactUs: 'Contact Us',
      services: [
        {
          title: "Courses & Programs",
          description:
            "We offer a wide range of subjects including Technology, Business, Arts, and more. Our programs are structured into beginner, intermediate, and advanced levels, ensuring that learners of all stages can progress smoothly. With flexible learning paths and career-focused modules, you’ll gain both knowledge and practical experience that make you job-ready.",
          image: s1,
          link: "/courses-programs",
        },
        {
          title: "Live Classes & Mentorship",
          description:
            "Join interactive live classes and receive guidance from industry experts through one-on-one mentorship or group sessions. Our focus is on real-time doubt clearing, personalized feedback, and helping you gain clarity on complex topics. Learn directly from professionals and build the confidence to apply your skills effectively.",
          image: s2,
          link: "/live-classes-mentorship",
        },
        {
          title: "Certifications & Career Support",
          description:
            "Earn industry-recognized certifications upon course completion and prepare for your career with dedicated support. We help you with resume building, interview preparation, and placement opportunities. Our career-focused programs ensure you don’t just learn — you get job-ready with the skills companies demand today.",
          image: s3,
          link: "/certifications-career-support",
        },
        {
          title: "Skill Development Workshops",
          description:
            "Take part in short-term bootcamps and workshops on trending topics such as Artificial Intelligence, Data Science, Digital Marketing, and more. These hands-on sessions are designed to quickly upskill you with practical knowledge, enabling you to stay ahead in today’s competitive market.",
          image: s4,
          link: "/skill-development-workshops",
        },
        {
          title: "Learning Resources & Tools",
          description:
            "Access a wide range of resources including e-books, recorded lectures, practice assignments, and quizzes. Learn on-the-go with our mobile app, and download study materials to continue learning anytime, anywhere. Our resources are designed to help you reinforce knowledge and track progress effectively.",
          image: s5,
          link: "/learning-resources-tools",
        },
        {
          title: "Community & Networking",
          description:
            "Collaborate and grow with our vibrant community of learners, mentors, and alumni. Engage in peer learning groups, join discussion forums, and become part of an active alumni network. Build meaningful professional connections that will support your learning and career journey.",
          image: s6,
          link: "/community-networking",
        },
      ]
    },
    Arabic: {
      heroTitle: 'ارتقِ بتجربتك <span style="color: #1e3a8a">التعليمية</span>',
      heroDesc: 'استكشف خدماتنا في الذكاء الاصطناعي، تطوير الويب، علم البيانات، البلوك تشين، الأمن السيبراني، والحوسبة السحابية. حلول مصممة خصيصًا لتعزيز رحلتك التعليمية وتحقيق أهدافك المهنية.',
      exploreTitle: 'استكشف خدماتنا',
      readMore: 'اقرأ المزيد',
      valuesTitle: 'قيمنا',
      values: [
        { title: 'التميز', desc: 'نسعى لأعلى المعايير في كل ما نقوم به، ونقدم تعليمًا ودعمًا عالي الجودة لتمكين كل متعلم.' },
        { title: 'الابتكار', desc: 'نحتضن الأفكار والتقنيات الجديدة، ونضمن أن برامجنا دائمًا مواكبة وجاهزة للمستقبل.' },
        { title: 'المجتمع', desc: 'نرعى بيئة داعمة وشاملة حيث ينمو المتعلمون والمدربون والخريجون معًا ويساعدون بعضهم البعض على النجاح.' }
      ],
      howToTitle: 'كيف تبدأ',
      steps: [
        { title: 'تصفح الخدمات', desc: 'استكشف مجموعة خدماتنا التقنية والمهنية للعثور على ما يناسب أهدافك.' },
        { title: 'تواصل مع الخبراء', desc: 'تواصل مع مدربينا ومستشارينا للحصول على إرشاد وتوصيات شخصية.' },
        { title: 'سجل وتعلم', desc: 'سجل في الدورات أو الورش أو جلسات الاستشارة وابدأ رحلتك التعليمية.' },
        { title: 'حقق النجاح', desc: 'طبق مهاراتك الجديدة، احصل على شهادات، وتقدم في مسيرتك المهنية بدعمنا.' }
      ],
      techTitle: 'التقنيات والأدوات',
      techDesc: 'نمكن تعلمك بأحدث التقنيات والأدوات المعتمدة في الصناعة، لضمان حصولك على خبرة عملية حقيقية. برامجنا تتجاوز النظرية، وتركز على التطبيق العملي من خلال مشاريع واقعية ودراسات حالة وتحديات تفاعلية. كل دورة مصممة بالتعاون مع خبراء الصناعة، لتتعلم المهارات التي تبحث عنها الشركات اليوم. مع الإرشاد المستمر والتغذية الراجعة، نساعدك على بناء الثقة إلى جانب خبرتك التقنية، سواء كنت تبدأ مسيرتك أو تطور مهاراتك.',
      techBoxes: [
        { title: 'الذكاء الاصطناعي وتعلم الآلة', items: ['تينسرفلو', 'بايتورتش'] },
        { title: 'تطوير الويب', items: ['ريآكت', 'نود.جي إس', 'جانغو'] },
        { title: 'علم البيانات والتحليلات', items: ['بايثون', 'آر', 'تابلو'] },
        { title: 'البلوك تشين والسحابة', items: ['إيثيريوم', 'سوليديتي', 'أمازون ويب سيرفيسز', 'دوكر'] }
      ],
      pricingTitle: 'خطط الأسعار',
      pricing: [
        { title: 'أساسي', price: '$19', period: '/شهر', features: ['✔️ الوصول إلى 3 دورات', '✔️ دعم المجتمع', '✔️ شهادة إتمام'], button: 'اختر الأساسي' },
        { title: 'احترافي', price: '$49', period: '/شهر', features: ['✔️ الوصول إلى جميع الدورات', '✔️ دعم أولوية', '✔️ شهادة ومشاريع', '✔️ ندوات شهرية'], button: 'اختر الاحترافي' },
        { title: 'مؤسسات', price: '$99', period: '/شهر', features: ['✔️ مستخدمون غير محدودين', '✔️ مدير حساب مخصص', '✔️ تكاملات مخصصة', '✔️ جميع ميزات الاحترافي'], button: 'تواصل مع المبيعات' }
      ],
      readyTitle: 'هل أنت مستعد للانضمام إلى رحلتنا؟',
      readyDesc: 'كن جزءًا من مجتمعنا الحائز على جوائز وافتح فرصًا جديدة للنمو والتعلم والنجاح. تواصل معنا اليوم لبدء رحلتك!',
      contactUs: 'اتصل بنا',
      services: [
        {
          title: "الدورات والبرامج",
          description:
            "نقدم مجموعة واسعة من المواد بما في ذلك التكنولوجيا، الأعمال، الفنون والمزيد. برامجنا منظمة لمستويات المبتدئين والمتوسطين والمتقدمين، لضمان تقدم جميع المتعلمين بسلاسة. مع مسارات تعلم مرنة ووحدات تركز على الوظيفة، ستحصل على المعرفة والخبرة العملية التي تجعلك جاهزًا لسوق العمل.",
          image: s1,
          link: "/courses-programs",
        },
        {
          title: "دروس مباشرة وإرشاد",
          description:
            "انضم إلى دروس مباشرة تفاعلية واحصل على إرشاد من خبراء الصناعة من خلال جلسات فردية أو جماعية. نركز على حل الشكوك في الوقت الفعلي، وتقديم ملاحظات شخصية، ومساعدتك على فهم المواضيع المعقدة. تعلم مباشرة من المحترفين وابنِ الثقة لتطبيق مهاراتك بفعالية.",
          image: s2,
          link: "/live-classes-mentorship",
        },
        {
          title: "الشهادات ودعم الوظائف",
          description:
            "احصل على شهادات معترف بها في الصناعة بعد إكمال الدورات واستعد لمسيرتك المهنية بدعم مخصص. نساعدك في بناء السيرة الذاتية، التحضير للمقابلات، وفرص التوظيف. برامجنا تركز على الوظيفة لتضمن أنك لا تتعلم فقط بل تصبح جاهزًا لسوق العمل بمهارات مطلوبة اليوم.",
          image: s3,
          link: "/certifications-career-support",
        },
        {
          title: "ورش تطوير المهارات",
          description:
            "شارك في معسكرات وورش قصيرة حول مواضيع رائجة مثل الذكاء الاصطناعي، علم البيانات، التسويق الرقمي والمزيد. هذه الجلسات العملية مصممة لتطوير مهاراتك بسرعة، وتمكينك من البقاء في المقدمة في سوق تنافسي اليوم.",
          image: s4,
          link: "/skill-development-workshops",
        },
        {
          title: "الموارد والأدوات التعليمية",
          description:
            "احصل على مجموعة واسعة من الموارد مثل الكتب الإلكترونية، المحاضرات المسجلة، الواجبات، والاختبارات. تعلم أثناء التنقل مع تطبيقنا، وحمّل المواد الدراسية لتواصل التعلم في أي وقت وأي مكان. مواردنا مصممة لمساعدتك على تعزيز المعرفة وتتبع التقدم بفعالية.",
          image: s5,
          link: "/learning-resources-tools",
        },
        {
          title: "المجتمع والشبكات",
          description:
            "تعاون ونمُ مع مجتمعنا النشط من المتعلمين والمدربين والخريجين. شارك في مجموعات التعلم، انضم إلى المنتديات، وكن جزءًا من شبكة خريجين نشطة. ابنِ علاقات مهنية تدعم رحلتك التعليمية والمهنية.",
          image: s6,
          link: "/community-networking",
        },
      ]
    },
    Hebrew: {
      heroTitle: 'שדרג את <span style="color: #1e3a8a">החוויה שלך</span>',
      heroDesc: 'גלה את השירותים שלנו ב-AI, פיתוח אתרים, מדעי הנתונים, בלוקצ׳יין, סייבר ומחשוב ענן. פתרונות מותאמים אישית שמעצימים את מסע הלמידה שלך ועוזרים לך להשיג מטרות קריירה.',
      exploreTitle: 'גלה את השירותים שלנו',
      readMore: 'קרא עוד',
      valuesTitle: 'הערכים שלנו',
      values: [
        { title: 'מצוינות', desc: 'אנו שואפים לסטנדרטים הגבוהים ביותר בכל מה שאנו עושים, ומספקים חינוך ותמיכה איכותיים לכל לומד.' },
        { title: 'חדשנות', desc: 'אנו מאמצים רעיונות וטכנולוגיות חדשות, ומבטיחים שהתוכניות שלנו תמיד רלוונטיות ומוכנות לעתיד.' },
        { title: 'קהילה', desc: 'אנו מטפחים סביבה תומכת ומכילה שבה לומדים, מנטורים ובוגרים גדלים יחד ועוזרים זה לזה להצליח.' }
      ],
      howToTitle: 'איך להתחיל',
      steps: [
        { title: 'עיין בשירותים', desc: 'גלה את מגוון השירותים הטכנולוגיים והמקצועיים שלנו כדי למצוא מה מתאים למטרותיך.' },
        { title: 'התחבר למומחים', desc: 'פנה למדריכים וליועצים שלנו לקבלת ליווי והמלצות אישיות.' },
        { title: 'הירשם ולמד', desc: 'הירשם לקורסים, סדנאות או מפגשי ייעוץ והתחל את מסע הלמידה שלך.' },
        { title: 'השג הצלחה', desc: 'השתמש בכישורים החדשים שלך, קבל הסמכות, וקדם את הקריירה שלך בעזרתנו.' }
      ],
      techTitle: 'טכנולוגיה וכלים',
      techDesc: 'אנו מעצימים את הלמידה שלך עם טכנולוגיות וכלים עדכניים בתעשייה, כדי להבטיח שתרכוש ניסיון מעשי אמיתי. התוכניות שלנו מעבר לתיאוריה, מתמקדות ביישום מעשי דרך פרויקטים, מקרי בוחן ואתגרים אינטראקטיביים. כל קורס נבנה בשיתוף מומחי תעשייה, כדי שתלמד את הכישורים שהחברות מחפשות היום. עם ליווי מתמשך ומשוב, נבנה איתך ביטחון לצד המומחיות הטכנית שלך, בין אם אתה מתחיל קריירה או משדרג מיומנויות.',
      techBoxes: [
        { title: 'AI ולמידת מכונה', items: ['טנסורפלואו', 'פייטורץ׳'] },
        { title: 'פיתוח אתרים', items: ['ריאקט', 'נוד.ג׳י.אס', 'דג׳אנגו'] },
        { title: 'מדעי הנתונים וניתוח', items: ['פייתון', 'אר', 'טאבלו'] },
        { title: 'בלוקצ׳יין וענן', items: ['את׳ריום', 'סולידיטי', 'אמזון', 'דוקר'] }
      ],
      pricingTitle: 'תוכניות המחיר שלנו',
      pricing: [
        { title: 'בסיסי', price: '$19', period: '/חודש', features: ['✔️ גישה ל-3 קורסים', '✔️ תמיכת קהילה', '✔️ תעודת סיום'], button: 'בחר בסיסי' },
        { title: 'מקצועי', price: '$49', period: '/חודש', features: ['✔️ גישה לכל הקורסים', '✔️ תמיכה מועדפת', '✔️ תעודה ופרויקטים', '✔️ וובינרים חודשיים'], button: 'בחר מקצועי' },
        { title: 'ארגוני', price: '$99', period: '/חודש', features: ['✔️ משתמשים ללא הגבלה', '✔️ מנהל חשבון ייעודי', '✔️ אינטגרציות מותאמות', '✔️ כל תכונות המקצועי'], button: 'צור קשר עם מכירות' }
      ],
      readyTitle: 'מוכן להצטרף למסע שלנו?',
      readyDesc: 'הפוך לחלק מהקהילה שלנו שזכתה בפרסים ופתח הזדמנויות חדשות לצמיחה, למידה והצלחה. צור קשר היום כדי להתחיל את המסע שלך!',
      contactUs: 'צור קשר',
      services: [
        {
          title: "קורסים ותוכניות",
          description:
            "אנו מציעים מגוון רחב של נושאים כולל טכנולוגיה, עסקים, אמנות ועוד. התוכניות שלנו מחולקות לרמות מתחילים, בינוניים ומתקדמים, כדי שכל לומד יוכל להתקדם בצורה חלקה. עם מסלולי לימוד גמישים ומודולים ממוקדי קריירה, תרכוש ידע וניסיון מעשי שיהפכו אותך למוכן לשוק העבודה.",
          image: s1,
          link: "/courses-programs",
        },
        {
          title: "שיעורים חיים ומנטורינג",
          description:
            "הצטרף לשיעורים חיים אינטראקטיביים וקבל ליווי ממומחי תעשייה במפגשים אישיים או קבוצתיים. אנו מתמקדים בפיתרון ספקות בזמן אמת, משוב אישי, ועוזרים לך להבין נושאים מורכבים. למד ישירות מאנשי מקצוע ובנה ביטחון ליישם את הכישורים שלך ביעילות.",
          image: s2,
          link: "/live-classes-mentorship",
        },
        {
          title: "הסמכות ותמיכה בקריירה",
          description:
            "קבל הסמכות מוכרות בתעשייה לאחר סיום הקורסים והכן את עצמך לקריירה עם תמיכה ייעודית. אנו עוזרים בבניית קורות חיים, הכנה לראיונות, והזדמנויות השמה. התוכניות שלנו ממוקדות קריירה כדי להבטיח שלא רק תלמד — אלא תהפוך למוכן לשוק העבודה עם כישורים נדרשים היום.",
          image: s3,
          link: "/certifications-career-support",
        },
        {
          title: "סדנאות פיתוח מיומנויות",
          description:
            "השתתף בבוטקאמפים וסדנאות קצרות בנושאים חמים כמו AI, מדעי הנתונים, שיווק דיגיטלי ועוד. המפגשים המעשיים הללו נועדו לשדרג אותך במהירות בידע מעשי, כדי שתישאר מוביל בשוק התחרותי של היום.",
          image: s4,
          link: "/skill-development-workshops",
        },
        {
          title: "משאבים וכלים ללמידה",
          description:
            "גש למגוון רחב של משאבים כולל ספרים דיגיטליים, הרצאות מוקלטות, תרגולים ומבחנים. למד מכל מקום עם האפליקציה שלנו, והורד חומרי לימוד להמשך לימוד בכל זמן. המשאבים שלנו נועדו לחזק ידע ולעקוב אחרי ההתקדמות שלך ביעילות.",
          image: s5,
          link: "/learning-resources-tools",
        },
        {
          title: "קהילה ורשתות מקצועיות",
          description:
            "שתף פעולה וצמח עם הקהילה התוססת שלנו של לומדים, מנטורים ובוגרים. הצטרף לקבוצות לימוד, פורומים, והפוך לחלק מרשת בוגרים פעילה. בנה קשרים מקצועיים משמעותיים שיתמכו בלמידה ובקריירה שלך.",
          image: s6,
          link: "/community-networking",
        },
      ]
    },
    // ...Arabic and Hebrew translations (add as needed)
  };
  const t = translations[language] || translations['English'];
  const servicesList = t.services;
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}${isRTL ? ' rtl' : ''}`
    } dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={serviceHeroVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }} dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          <p className={`mt-6 text-xl md:text-2xl max-w-3xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{t.heroDesc}</p>
        </div>
      </section>
      {/* Service Steps Section */}
      

      {/* Services Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{t.exploreTitle}</h2>
          <div className="grid gap-12">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 items-center gap-6"
              >
                {/* Image */}
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{service.title}</h3>
                  <p className={(theme === 'dark' ? 'text-gray-200 mb-6' : 'text-gray-700 mb-6') + ' text-justify'}>{service.description}</p>
                  <Link
                    to={service.link}
                    className={
                      `px-6 py-2 font-semibold rounded transition inline-block ` +
                      (theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400')
                    }
                  >
                    {t.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-[#1e3a8a]">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#fff' }}>{t.valuesTitle}</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {(Array.isArray(t.values) ? t.values : []).map((value, idx) => (
        <div className="rounded-xl shadow-md p-8 text-center bg-white text-[#1e3a8a]" key={value.title}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#1e3a8a' }}>{value.title}</h3>
          <p className="text-base">{value.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>{t.howToTitle}</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {(Array.isArray(t.steps) ? t.steps : []).map((step, idx) => (
              <div className="flex flex-col items-center hover:scale-105 transition smooth text-center" key={step.title}>
                <div className={
                  `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                  (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
                }>
                  <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{step.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Tools Section */}
      <section className="w-full py-16 bg-[#1e3a8a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#fff' }}>{t.techTitle}</h2>
          <div className="flex  md:flex-row md:items-start gap-10">
            {/* Left: Paragraph */}
            <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start mb-8 md:mb-0">
              <p
                className="text-lg text-justify text-white"
                style={{ maxWidth: "400px" }}
              >
                {t.techDesc}
              </p>
            </div>
            {/* Right: 2x2 Grid of 4 boxes */}
            <div className="md:w-1/2 w-full grid  sm:grid-cols-2 gap-6">
              {(Array.isArray(t.techBoxes) ? t.techBoxes : []).map((box, idx) => (
                <div className="p-6 rounded-xl shadow-md bg-white text-[#1e3a8a]" key={box.title}>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{box.title}</h3>
                  <ul className="list-disc ml-5">
                    {box.items.map((item, i) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       
    <section className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{t.pricingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(Array.isArray(t.pricing) ? t.pricing : []).map((plan, idx) => (
              <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`} key={plan.title}>
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <div className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{plan.price}<span className="text-lg font-normal">{plan.period}</span></div>
                <ul className="mb-6 space-y-2 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400'}`}>{plan.button}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-[#1e3a8a]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#fff' }}>{t.readyTitle}</h2>
        <p className="text-lg mb-8 text-white">{t.readyDesc}</p>
        <a href="/contactus" className="inline-block font-bold py-3 px-8 rounded-full shadow-lg transition bg-[#fff] text-[#1e3a8a] hover:bg-blue-400">{t.contactUs}</a>
      </div>
    </section>
     
    </div>
  );
} 