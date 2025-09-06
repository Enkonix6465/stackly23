import React from "react";
import aboutHero from "../assets/abouthero.mp4";
import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.jpeg";
import valuesImg from "../assets/values.jpeg";
import e1 from "../assets/e1.avif";
import e2 from "../assets/e2.jpeg";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.jpg";
import e5 from "../assets/e5.jpg";
import e6 from "../assets/e6.jpg";
import awardsImg from "../assets/awards.jpeg";
import whatwethinkImg from "../assets/whatwethink.jpg";

const communityPrograms = [
  {
    title: "Free Learning Access",
    description:
      "We've provided over 10,000 free course enrollments to students from underprivileged communities, helping bridge the digital education gap.",
    stat: "10,000+ Students Empowered",
  },
  {
    title: "Environmental Awareness",
    description:
      "Our platform promotes eco-friendly practices by using digital-first content delivery, reducing paper usage and carbon footprint by 35%.",
    stat: "35% Carbon Reduction",
  },
  {
    title: "Scholarship & Grants",
    description:
      "We offer scholarships and micro-grants to support talented learners, enabling them to access premium courses and skill-building programs.",
    stat: "$200K+ in Scholarships",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Our students come from over 40 countries and diverse backgrounds. We are committed to creating an inclusive learning environment for all.",
    stat: "40+ Countries Represented",
  },
  {
    title: "Volunteer Mentorship",
    description:
      "Our educators and alumni have volunteered over 5,000 hours mentoring students, guiding them through career and project challenges.",
    stat: "5,000+ Volunteer Hours",
  },
  {
    title: "Tech for Social Good",
    description:
      "We develop tools and projects that leverage technology to enhance learning accessibility and provide educational resources to underserved communities.",
    stat: "5+ Digital Initiatives",
  },
];

export default function AboutPage() {
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
      heroTitle: 'Every Great <span style="color: #1e3a8a">Idea</span> Begins with a Story',
      heroDesc: 'Our journey started with a simple vision  to make learning smarter, simpler, and accessible to everyone. Today, we’re a team of creators, innovators, and educators working together to turn that vision into reality.',
      journeyTitle: 'Our Journey Through the Years',
      journeyTimeline: [
        { year: '2018', word: 'Founded', desc: 'Platform founded with a mission to make quality education accessible to all.' },
        { year: '2019', word: 'Launch', desc: 'Launched our first set of online courses and reached 1,000 learners.' },
        { year: '2020', word: 'Growth', desc: 'Expanded to 3 countries and introduced live mentorship programs.' },
        { year: '2021', word: 'Award', desc: 'Awarded for innovation in digital learning and surpassed 10,000 students.' },
        { year: '2022', word: 'Partners', desc: 'Partnered with top institutions and launched scholarship initiatives.' },
        { year: '2023', word: 'AI', desc: 'Integrated AI-driven learning paths and reached 50,000+ learners.' },
      ],
      visionMissionValuesTitle: 'Our Vision, Mission & Values',
      mission: 'To make world-class education accessible and engaging for everyone, everywhere, at no cost.',
      vision: 'To inspire lifelong learning and empower individuals to achieve their fullest potential through innovative digital education.',
      values: 'We value inclusivity, innovation, and integrity, ensuring every learner is supported and inspired to succeed.',
      awardsTitle: 'Awards & Certificates',
      awardsDesc: 'Recognizing Excellence, Celebrating Achievements We believe that learning and growth should always be celebrated. Our services and training programs are designed not only to build skills but also to recognize your hard work with meaningful certifications.',
      awardsList: [
        'Excellence in Learner Experience 2023 – Education Innovation Forum',
        'Innovation in Online Learning 2023 - FinTech Excellence',
        'Top 100 Fastest Growing Companies 2024 - Business Insights',
        'ISO 9001:2015 Certified for Quality Management in Education',
      ],
      instructorsTitle: 'Our Instructors',
      whatWeThinkTitle: 'What We Think',
      whatWeThinkDesc: 'At our core, we believe education should be accessible, engaging, and transformative for everyone. Our team is passionate about breaking barriers and creating opportunities for learners from all walks of life. We embrace innovation, inclusivity, and a commitment to lifelong learning, ensuring every student can reach their full potential in a digital world.',
      whatWeThinkList: [
        'Empowering students with free, high-quality resources',
        'Fostering a supportive and diverse learning community',
        'Leveraging technology to personalize education',
        'Encouraging curiosity, creativity, and growth',
      ],
    },
    Arabic: {
      heroTitle: 'كل فكرة عظيمة <span style="color: #1e3a8a">تبدأ بقصة</span>',
      heroDesc: 'بدأت رحلتنا برؤية بسيطة لجعل التعلم أكثر ذكاءً وسهولة ومتاحة للجميع. اليوم، نحن فريق من المبدعين والمبتكرين والمعلمين نعمل معًا لتحقيق تلك الرؤية.',
      journeyTitle: 'رحلتنا عبر السنوات',
      journeyTimeline: [
        { year: '2018', word: 'تأسيس', desc: 'تأسيس المنصة بهدف جعل التعليم عالي الجودة متاحًا للجميع.' },
        { year: '2019', word: 'إطلاق', desc: 'إطلاق أول مجموعة من الدورات عبر الإنترنت والوصول إلى 1000 متعلم.' },
        { year: '2020', word: 'نمو', desc: 'التوسع إلى 3 دول وتقديم برامج الإرشاد المباشر.' },
        { year: '2021', word: 'جائزة', desc: 'الحصول على جائزة الابتكار في التعلم الرقمي وتجاوز 10,000 طالب.' },
        { year: '2022', word: 'شراكات', desc: 'الشراكة مع مؤسسات رائدة وإطلاق مبادرات المنح الدراسية.' },
        { year: '2023', word: 'ذكاء اصطناعي', desc: 'دمج مسارات التعلم المدعومة بالذكاء الاصطناعي والوصول إلى أكثر من 50,000 متعلم.' },
      ],
      visionMissionValuesTitle: 'رؤيتنا، مهمتنا وقيمنا',
      mission: 'جعل التعليم العالمي متاحًا وجذابًا للجميع، في كل مكان، مجانًا.',
      vision: 'إلهام التعلم مدى الحياة وتمكين الأفراد من تحقيق إمكاناتهم الكاملة من خلال التعليم الرقمي المبتكر.',
      values: 'نحن نقدر الشمولية والابتكار والنزاهة، ونضمن دعم وإلهام كل متعلم للنجاح.',
      awardsTitle: 'الجوائز والشهادات',
      awardsDesc: 'الاعتراف بالتميز والاحتفال بالإنجازات نؤمن بأن التعلم والنمو يجب أن يكونا دائمًا موضع احتفال. خدماتنا وبرامجنا التدريبية مصممة ليس فقط لبناء المهارات ولكن أيضًا للاعتراف بجهودك من خلال شهادات ذات معنى.',
      awardsList: [
        'التميز في تجربة المتعلم 2023 – منتدى الابتكار التعليمي',
        'الابتكار في التعلم عبر الإنترنت 2023 - تميز التكنولوجيا المالية',
        'أفضل 100 شركة الأسرع نموًا 2024 - رؤى الأعمال',
        'حاصلون على شهادة ISO 9001:2015 لإدارة الجودة في التعليم',
      ],
      instructorsTitle: 'مدرسونا',
      whatWeThinkTitle: 'ماذا نعتقد',
      whatWeThinkDesc: 'في جوهرنا، نؤمن بأن التعليم يجب أن يكون متاحًا وجذابًا وتحويليًا للجميع. فريقنا شغوف بكسر الحواجز وخلق الفرص للمتعلمين من جميع مناحي الحياة. نحن نحتضن الابتكار والشمولية والالتزام بالتعلم مدى الحياة، ونضمن أن كل طالب يمكنه تحقيق إمكاناته الكاملة في عالم رقمي.',
      whatWeThinkList: [
        'تمكين الطلاب من خلال موارد مجانية وعالية الجودة',
        'تعزيز مجتمع تعليمي داعم ومتعدد الثقافات',
        'استخدام التكنولوجيا لتخصيص التعليم',
        'تشجيع الفضول والإبداع والنمو',
      ],
    },
    Hebrew: {
      heroTitle: 'כל רעיון גדול <span style="color: #1e3a8a">מתחיל בסיפור</span>',
      heroDesc: 'המסע שלנו התחיל עם חזון פשוט להפוך את הלמידה לחכמה, פשוטה ונגישה לכולם. היום, אנחנו צוות של יוצרים, חדשנים ומחנכים שעובדים יחד כדי להפוך את החזון הזה למציאות.',
      journeyTitle: 'המסע שלנו לאורך השנים',
      journeyTimeline: [
        { year: '2018', word: 'הקמה', desc: 'הפלטפורמה הוקמה במטרה להנגיש חינוך איכותי לכולם.' },
        { year: '2019', word: 'השקה', desc: 'השקנו את מערך הקורסים הראשון והגענו ל-1,000 לומדים.' },
        { year: '2020', word: 'צמיחה', desc: 'התרחבות ל-3 מדינות והצגת תוכניות חונכות חיות.' },
        { year: '2021', word: 'פרס', desc: 'זכייה בפרס חדשנות בלמידה דיגיטלית והגעה ל-10,000 תלמידים.' },
        { year: '2022', word: 'שותפים', desc: 'שיתוף פעולה עם מוסדות מובילים והשקת יוזמות מלגות.' },
        { year: '2023', word: 'בינה מלאכותית', desc: 'שילוב מסלולי למידה מבוססי AI והגעה ל-50,000+ לומדים.' },
      ],
      visionMissionValuesTitle: 'החזון, המשימה והערכים שלנו',
      mission: 'להנגיש חינוך עולמי איכותי ומרתק לכל אחד, בכל מקום, ללא עלות.',
      vision: 'להעניק השראה ללמידה מתמשכת ולהעצים אנשים לממש את הפוטנציאל שלהם באמצעות חינוך דיגיטלי חדשני.',
      values: 'אנו מעריכים הכלה, חדשנות ויושרה, ומבטיחים שכל לומד יקבל תמיכה והשראה להצלחה.',
      awardsTitle: 'פרסים ותעודות',
      awardsDesc: 'הכרה במצוינות, חגיגת הישגים אנו מאמינים שלמידה וצמיחה צריכות תמיד להיחגג. השירותים והתוכניות שלנו נועדו לא רק לפתח מיומנויות אלא גם להכיר בעמלך עם תעודות משמעותיות.',
      awardsList: [
        'מצוינות בחוויית הלומד 2023 – פורום החדשנות בחינוך',
        'חדשנות בלמידה מקוונת 2023 - מצוינות הפינטק',
        '100 החברות הצומחות ביותר 2024 - תובנות עסקיות',
        'תעודת ISO 9001:2015 לניהול איכות בחינוך',
      ],
      instructorsTitle: 'המרצים שלנו',
      whatWeThinkTitle: 'מה אנחנו חושבים',
      whatWeThinkDesc: 'בלבנו, אנו מאמינים שחינוך צריך להיות נגיש, מרתק ומשנה חיים לכולם. הצוות שלנו נלהב לשבור מחסומים וליצור הזדמנויות ללומדים מכל תחומי החיים. אנו מאמצים חדשנות, הכלה ומחויבות ללמידה מתמשכת, ומבטיחים שכל תלמיד יוכל לממש את הפוטנציאל שלו בעולם דיגיטלי.',
      whatWeThinkList: [
        'העצמת תלמידים עם משאבים איכותיים וחינמיים',
        'טיפוח קהילה לימודית תומכת ומגוונת',
        'שימוש בטכנולוגיה להתאמת החינוך',
        'עידוד סקרנות, יצירתיות וצמיחה',
      ],
    },
  };
  const t = translations[language] || translations['English'];
  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
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
  // Instructor data per language
  const instructorData = {
    English: [
      {
        img: e1,
        role: 'Lead Online Educator',
        name: 'Aarav Mehta',
        desc: 'Specialist in digital pedagogy, Aarav designs interactive courses that make complex concepts easy for all learners.',
      },
      {
        img: e2,
        role: 'STEM Curriculum Expert',
        name: 'Sana Kapoor',
        desc: 'Sana brings hands-on STEM learning to life, inspiring students to explore science, technology, and engineering online.',
      },
      {
        img: e3,
        role: 'AI & Data Science Mentor',
        name: 'Rohan Das',
        desc: 'Rohan mentors students in artificial intelligence and analytics, making future-ready skills accessible to all.',
      },
      {
        img: e4,
        role: 'Community Learning Coach',
        name: 'Meera Joshi',
        desc: 'Meera supports learners of all backgrounds, fostering an inclusive and collaborative online education community.',
      },
    ],
    Arabic: [
      {
        img: e1,
        role: 'مدرس عبر الإنترنت',
        name: 'أراف ميهتا',
        desc: 'متخصص في طرق التدريس الرقمية، يصمم أراف دورات تفاعلية تجعل المفاهيم المعقدة سهلة لجميع المتعلمين.',
      },
      {
        img: e2,
        role: 'خبيرة مناهج STEM',
        name: 'سانا كابور',
        desc: 'تجلب سانا التعلم العملي في العلوم والتكنولوجيا والهندسة، وتلهم الطلاب لاستكشاف هذه المجالات عبر الإنترنت.',
      },
      {
        img: e3,
        role: 'مرشد الذكاء الاصطناعي وعلوم البيانات',
        name: 'روهان داس',
        desc: 'يرشد روهان الطلاب في الذكاء الاصطناعي والتحليلات، ويجعل المهارات المستقبلية متاحة للجميع.',
      },
      {
        img: e4,
        role: 'مدربة التعلم المجتمعي',
        name: 'ميرا جوشي',
        desc: 'تدعم ميرا المتعلمين من جميع الخلفيات، وتعزز بيئة تعليمية شاملة وتعاونية عبر الإنترنت.',
      },
    ],
    Hebrew: [
      {
        img: e1,
        role: 'מדריך ראשי ללמידה מקוונת',
        name: 'אראב מהטה',
        desc: 'מומחה לפדגוגיה דיגיטלית, אראב מעצב קורסים אינטראקטיביים שמפשטים מושגים מורכבים לכל הלומדים.',
      },
      {
        img: e2,
        role: 'מומחית לתוכנית STEM',
        name: 'סנה קאפור',
        desc: 'סנה מביאה למידה מעשית במדעים, טכנולוגיה והנדסה, ומעוררת השראה לתלמידים לחקור תחומים אלו אונליין.',
      },
      {
        img: e3,
        role: 'מנטור AI ומדעי הנתונים',
        name: 'רוהאן דאס',
        desc: 'רוהאן מדריך תלמידים בבינה מלאכותית וניתוח נתונים, ומנגיש מיומנויות עתידיות לכולם.',
      },
      {
        img: e4,
        role: 'מאמנת למידה קהילתית',
        name: 'מירה ג׳ושי',
        desc: 'מירה תומכת בלומדים מכל הרקעים, ומטפחת קהילה לימודית שיתופית ומגוונת אונליין.',
      },
    ],
  };
  const instructors = instructorData[language] || instructorData['English'];
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}${isRTL ? ' rtl' : ''}`
    } dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={aboutHero}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }} dangerouslySetInnerHTML={{__html: t.heroTitle}} />
          <p className={`mt-4 max-w-3xl text-lg md:text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{t.heroDesc}</p>
        </div>
      </section>

      {/* Our Instructors Section */}

      {/* CTA Section */}

      {/* Vision, Mission, Values Cards Section */}


      {/* Vision & Mission Section */}


      {/* Our Journey Timeline Section - Horizontal, Circular Milestones */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ color: '#1e3a8a' }}>{t.journeyTitle}</h2>
          <div className="relative flex flex-col items-center">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1e3a8a] z-0" style={{ transform: 'translateY(-50%)' }}></div>
            {/* Timeline Items */}
            <div className="relative w-full flex flex-row justify-between items-center z-10">
              {t.journeyTimeline.map((item, idx, arr) => (
                <div key={item.year} className="flex flex-col items-center w-32">
                  <div className="mb-2 text-base font-semibold uppercase tracking-wide" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{item.word}</div>
                  <div className="w-20 h-20 rounded-full border-4 border-[#1e3a8a] bg-white flex items-center justify-center shadow-lg text-2xl font-bold text-[#1e3a8a]">
                    {item.year}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-1 mb-1"></div>
                  )}
                  <div className="mt-3 text-xs text-center font-medium" style={{ color: theme === 'dark' ? '#e0e0e0' : '#222' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



  <section className={`w-full py-16 bg-[#1e3a8a]`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#fff' }}>
            {t.visionMissionValuesTitle}
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            {/* Mission Card */}
            <div className="rounded-2xl shadow-lg flex flex-col items-center bg-white overflow-hidden">
              <div className="relative w-full min-h-[9rem] max-h-44 flex items-center justify-center">
                <div style={{backgroundColor: '#1e3a8a'}} className="absolute inset-0 w-full h-full z-0"></div>
                <img src={missionImg} alt="Mission" className="absolute inset-0 w-full h-full object-fit z-10" />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6 pt-10 text-center">
                <p className="text-gray-700">{t.mission}</p>
              </div>
            </div>
            {/* Vision Card */}
            <div className="rounded-2xl shadow-lg flex flex-col items-center bg-white overflow-hidden">
              <div className="relative w-full min-h-[9rem] max-h-44 flex items-center justify-center">
                <img src={visionImg} alt="Vision" className="absolute inset-0 w-full h-full object-fit" />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6 pt-10 text-center">
                <p className="text-gray-700">{t.vision}</p>
              </div>
            </div>
            {/* Values Card */}
            <div className="rounded-2xl shadow-lg flex flex-col items-center bg-white overflow-hidden">
              <div className="relative w-full min-h-[9rem] max-h-44 flex items-center justify-center">
                <img src={valuesImg} alt="Values" className="absolute inset-0 w-full h-full object-fit" />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6 pt-10 text-center">
                <p className="text-gray-700">{t.values}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Timeline Section */}
      {/* Awards & Certificates Section */}
      <section className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="max-w-7xl mx-auto px-6 text-justify lg:px-8 grid  lg:grid-cols-2 gap-27 items-center">
          {/* Content Left */}
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>{t.awardsTitle}</h2>
            <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.awardsDesc}</p>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.awardsList.map((award, idx) => (<li key={idx}>{award}</li>))}</ul>
          </div>
          {/* Image Right */}
          <div className="flex justify-center">
            <img src={awardsImg} alt="Awards & Certificates" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
          </div>
        </div>
      </section>


  <section className={`w-full py-16 bg-[#1e3a8a]`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#fff' }}>{t.instructorsTitle}</h2>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((inst, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-4">
                <img src={inst.img} alt={inst.name} className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#e6f7ff]" />
                <span className="text-sm text-gray-400 mb-1">{inst.role}</span>
                <h3 className="text-lg font-bold mb-2 text-[#1e3a8a]">{inst.name}</h3>
                <p className="text-gray-500 text-center text-sm mb-4">{inst.desc}</p>
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 items-stretch gap-8">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img src={whatwethinkImg} alt="What We Think" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-[400px] min-h-[300px]" />
          </div>
          {/* Right: Content */}
          <div className={`md:w-1/2   w-full flex flex-col justify-center`}>
            <h2 className="text-4xl font-bold mb-6 text-[#1e3a8a]">{t.whatWeThinkTitle}</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}  mb-4`}>{t.whatWeThinkDesc}</p>
            <ul className={`list-disc ${theme === 'dark' ? 'text-white' : 'text-black'} pl-5 space-y-2 `}>
              {t.whatWeThinkList.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </div>
        </div>
      </section>




    </div>
  );
}
