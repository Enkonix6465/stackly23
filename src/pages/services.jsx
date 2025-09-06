import React from "react";
import { Link } from "react-router-dom";
import serviceHeroVideo from "../assets/servicehero.mp4";

import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

// Language translations
const translations = {
  English: {
    heroTitle: 'Elevate Your Experience',
    heroDesc: 'Explore our curated services in Artificial Intelligence, Web Development, Data Science, Blockchain, Cybersecurity, and Cloud Computing. Tailored solutions that empower your learning journey and help you achieve your career goals.',
    exploreServices: 'Explore Our Services',
    readMore: 'Read More',
    valuesTitle: 'Our Values',
    excellence: 'Excellence',
    excellenceDesc: 'We strive for the highest standards in everything we do, delivering quality education and support to empower every learner.',
    innovation: 'Innovation',
    innovationDesc: 'We embrace new ideas and technologies, ensuring our programs are always relevant and future-ready for the evolving world.',
    community: 'Community',
    communityDesc: 'We foster a supportive and inclusive environment where learners, mentors, and alumni grow together and help each other succeed.',
    howToStart: 'How to Get Started',
    browseServices: 'Browse Services',
    browseServicesDesc: 'Explore our range of technology and career-focused services to find what fits your goals.',
    connectExperts: 'Connect with Experts',
    connectExpertsDesc: 'Reach out to our instructors and advisors for guidance and personalized recommendations.',
    enrollLearn: 'Enroll & Learn',
    enrollLearnDesc: 'Sign up for courses, workshops, or consulting sessions and start your learning journey.',
    achieveSuccess: 'Achieve Success',
    achieveSuccessDesc: 'Apply your new skills, earn certificates, and advance your career with our support.',
    techTools: 'Technology & Tools',
    techToolsDesc: 'We empower your learning with the latest industry-standard technologies and tools, ensuring you gain hands-on experience that truly matters. Our programs go beyond theory, focusing on practical application through real projects, case studies, and interactive challenges. Every course is designed in collaboration with industry experts, so you learn the exact skills companies are looking for today. With dedicated mentorship and continuous feedback, we help you build confidence alongside your technical expertise. Whether you are starting your career or upgrading your skills.',
    aiMl: 'AI & Machine Learning',
    webDev: 'Web Development',
    dataScience: 'Data Science & Analytics',
    blockchainCloud: 'Blockchain & Cloud',
    pricingTitle: 'Our Pricing Plans',
    basic: 'Basic',
    pro: 'Pro',
    enterprise: 'Enterprise',
    chooseBasic: 'Choose Basic',
    choosePro: 'Choose Pro',
    contactSales: 'Contact Sales',
    readyJoin: 'Ready to Join Our Journey?',
    readyJoinDesc: 'Become part of our award-winning community and unlock new opportunities for growth, learning, and success. Connect with us today to start your journey!',
    contactUs: 'Contact Us',
    // Service translations
    services: [
      {
        title: 'Courses & Programs',
        description: 'We offer a wide range of subjects including Technology, Business, Arts, and more. Our programs are structured into beginner, intermediate, and advanced levels, ensuring that learners of all stages can progress smoothly. With flexible learning paths and career-focused modules, you’ll gain both knowledge and practical experience that make you job-ready.',
      },
      {
        title: 'Live Classes & Mentorship',
        description: 'Join interactive live classes and receive guidance from industry experts through one-on-one mentorship or group sessions. Our focus is on real-time doubt clearing, personalized feedback, and helping you gain clarity on complex topics. Learn directly from professionals and build the confidence to apply your skills effectively.',
      },
      {
        title: 'Certifications & Career Support',
        description: 'Earn industry-recognized certifications upon course completion and prepare for your career with dedicated support. We help you with resume building, interview preparation, and placement opportunities. Our career-focused programs ensure you don’t just learn — you get job-ready with the skills companies demand today.',
      },
      {
        title: 'Skill Development Workshops',
        description: 'Take part in short-term bootcamps and workshops on trending topics such as Artificial Intelligence, Data Science, Digital Marketing, and more. These hands-on sessions are designed to quickly upskill you with practical knowledge, enabling you to stay ahead in today’s competitive market.',
      },
      {
        title: 'Learning Resources & Tools',
        description: 'Access a wide range of resources including e-books, recorded lectures, practice assignments, and quizzes. Learn on-the-go with our mobile app, and download study materials to continue learning anytime, anywhere. Our resources are designed to help you reinforce knowledge and track progress effectively.',
      },
      {
        title: 'Community & Networking',
        description: 'Collaborate and grow with our vibrant community of learners, mentors, and alumni. Engage in peer learning groups, join discussion forums, and become part of an active alumni network. Build meaningful professional connections that will support your learning and career journey.',
      },
    ],
  },
  Arabic: {
    heroTitle: 'ارتقِ بتجربتك',
    heroDesc: 'استكشف خدماتنا المختارة في الذكاء الاصطناعي، تطوير الويب، علم البيانات، البلوك تشين، الأمن السيبراني، والحوسبة السحابية. حلول مصممة خصيصًا لتعزيز رحلتك التعليمية ومساعدتك على تحقيق أهدافك المهنية.',
    exploreServices: 'استكشف خدماتنا',
    readMore: 'اقرأ المزيد',
    valuesTitle: 'قيمنا',
    excellence: 'التميز',
    excellenceDesc: 'نسعى لتحقيق أعلى المعايير في كل ما نقوم به، ونقدم تعليمًا عالي الجودة ودعمًا لتمكين كل متعلم.',
    innovation: 'الابتكار',
    innovationDesc: 'نحتضن الأفكار والتقنيات الجديدة، ونضمن أن برامجنا دائمًا ذات صلة وجاهزة للمستقبل في عالم متغير.',
    community: 'المجتمع',
    communityDesc: 'نرعى بيئة داعمة وشاملة حيث ينمو المتعلمون والمدربون والخريجون معًا ويساعدون بعضهم البعض على النجاح.',
    howToStart: 'كيف تبدأ',
    browseServices: 'تصفح الخدمات',
    browseServicesDesc: 'استكشف مجموعة خدماتنا التقنية والمهنية لتجد ما يناسب أهدافك.',
    connectExperts: 'تواصل مع الخبراء',
    connectExpertsDesc: 'تواصل مع مدربينا ومستشارينا للحصول على التوجيه والتوصيات الشخصية.',
    enrollLearn: 'سجل وتعلم',
    enrollLearnDesc: 'سجل في الدورات أو الورش أو جلسات الاستشارة وابدأ رحلتك التعليمية.',
    achieveSuccess: 'حقق النجاح',
    achieveSuccessDesc: 'طبق مهاراتك الجديدة، واحصل على شهادات، وتقدم في حياتك المهنية بدعمنا.',
    techTools: 'التقنيات والأدوات',
    techToolsDesc: 'نمكنك من التعلم باستخدام أحدث التقنيات والأدوات القياسية في الصناعة، ونضمن لك اكتساب خبرة عملية حقيقية. برامجنا تتجاوز النظرية، وتركز على التطبيق العملي من خلال مشاريع واقعية ودراسات حالة وتحديات تفاعلية. كل دورة مصممة بالتعاون مع خبراء الصناعة، لتتعلم المهارات التي تبحث عنها الشركات اليوم. مع الإرشاد المستمر والتغذية الراجعة، نساعدك على بناء الثقة إلى جانب خبرتك التقنية. سواء كنت تبدأ حياتك المهنية أو تطور مهاراتك.',
    aiMl: 'الذكاء الاصطناعي وتعلم الآلة',
    webDev: 'تطوير الويب',
    dataScience: 'علم البيانات والتحليلات',
    blockchainCloud: 'البلوك تشين والسحابة',
    pricingTitle: 'خطط الأسعار',
    basic: 'أساسي',
    pro: 'احترافي',
    enterprise: 'مؤسسي',
    chooseBasic: 'اختر الأساسي',
    choosePro: 'اختر الاحترافي',
    contactSales: 'تواصل مع المبيعات',
    readyJoin: 'هل أنت جاهز للانضمام إلينا؟',
    readyJoinDesc: 'كن جزءًا من مجتمعنا الحائز على جوائز وافتح فرصًا جديدة للنمو والتعلم والنجاح. تواصل معنا اليوم لبدء رحلتك!',
    contactUs: 'اتصل بنا',
    services: [
      {
        title: 'الدورات والبرامج',
        description: 'نقدم مجموعة واسعة من المواد بما في ذلك التكنولوجيا، الأعمال، الفنون، والمزيد. برامجنا منظمة لمستويات المبتدئين والمتوسطين والمتقدمين، لضمان تقدم المتعلمين بسلاسة. مع مسارات تعلم مرنة ووحدات تركز على الوظيفة، ستحصل على المعرفة والخبرة العملية التي تجعلك جاهزًا لسوق العمل.',
      },
      {
        title: 'الدروس المباشرة والإرشاد',
        description: 'انضم إلى دروس مباشرة تفاعلية واحصل على إرشاد من خبراء الصناعة من خلال جلسات فردية أو جماعية. نركز على حل الشكوك في الوقت الفعلي، والتغذية الراجعة الشخصية، ومساعدتك على فهم الموضوعات المعقدة. تعلم مباشرة من المحترفين وابنِ الثقة لتطبيق مهاراتك بفعالية.',
      },
      {
        title: 'الشهادات والدعم المهني',
        description: 'احصل على شهادات معترف بها في الصناعة بعد إكمال الدورات واستعد لمسيرتك المهنية بدعم مخصص. نساعدك في بناء السيرة الذاتية، التحضير للمقابلات، وفرص التوظيف. برامجنا تركز على الوظيفة لضمان أنك لا تتعلم فقط — بل تصبح جاهزًا لسوق العمل بالمهارات التي تطلبها الشركات اليوم.',
      },
      {
        title: 'ورش تطوير المهارات',
        description: 'شارك في معسكرات تدريبية وورش قصيرة حول مواضيع رائجة مثل الذكاء الاصطناعي، علم البيانات، التسويق الرقمي، والمزيد. هذه الجلسات العملية مصممة لتطوير مهاراتك بسرعة، وتمكنك من البقاء في صدارة السوق التنافسي اليوم.',
      },
      {
        title: 'الموارد والأدوات التعليمية',
        description: 'احصل على مجموعة واسعة من الموارد بما في ذلك الكتب الإلكترونية، المحاضرات المسجلة، الواجبات العملية، والاختبارات. تعلم أثناء التنقل مع تطبيقنا، وقم بتنزيل المواد الدراسية لمواصلة التعلم في أي وقت وأي مكان. مواردنا مصممة لمساعدتك على تعزيز المعرفة وتتبع التقدم بفعالية.',
      },
      {
        title: 'المجتمع والشبكات',
        description: 'تعاون ونمِ مع مجتمعنا النابض بالحياة من المتعلمين والمدربين والخريجين. شارك في مجموعات التعلم الجماعي، وانضم إلى المنتديات، وكن جزءًا من شبكة خريجين نشطة. ابنِ علاقات مهنية هادفة تدعم رحلتك التعليمية والمهنية.',
      },
    ],
  },
};

export default function ServiceHero() {
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

  const t = translations[language] || translations['English'];
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  return (
    <div
      className={
        `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}${isRTL ? ' rtl' : ''}`
      }
      dir={isRTL ? 'rtl' : 'ltr'}
    >
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
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            {t.heroTitle}
          </h1>
          <p className={`mt-6 text-xl md:text-2xl max-w-3xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
          >
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{t.exploreServices}</h2>
          <div className="grid gap-12">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 items-center gap-6"
              >
                {/* Image */}
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={[s1, s2, s3, s4, s5, s6][index]}
                    alt={service.title}
                    className="w-full h-80 rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{service.title}</h3>
                  <p className={(theme === 'dark' ? 'text-gray-200 mb-6' : 'text-gray-700 mb-6') + ' text-justify'}>{service.description}</p>
                  <Link
                    to={["/courses-programs", "/live-classes-mentorship", "/certifications-career-support", "/skill-development-workshops", "/learning-resources-tools", "/community-networking"][index]}
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

      {/* Values Section */}
  <section className="w-full py-16 bg-[#1e3a8a]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>{t.valuesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl shadow-md p-8 text-center bg-white text-[#1e3a8a]">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1e3a8a' }}>{t.excellence}</h3>
              <p className="text-base">{t.excellenceDesc}</p>
            </div>
            <div className="rounded-xl shadow-md p-8 text-center bg-white text-[#1e3a8a]">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1e3a8a' }}>{t.innovation}</h3>
              <p className="text-base">{t.innovationDesc}</p>
            </div>
            <div className="rounded-xl shadow-md p-8 text-center bg-white text-[#1e3a8a]">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1e3a8a' }}>{t.community}</h3>
              <p className="text-base">{t.communityDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>{t.howToStart}</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.browseServices}</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>{t.browseServicesDesc}</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.connectExperts}</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>{t.connectExpertsDesc}</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.enrollLearn}</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>{t.enrollLearnDesc}</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.achieveSuccess}</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>{t.achieveSuccessDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tools Section */}
  <section className="w-full py-16 bg-[#1e3a8a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#fff' }}>{t.techTools}</h2>
          <div className="flex  md:flex-row md:items-start gap-10">
            {/* Left: Paragraph */}
            <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start mb-8 md-:mb-0">
              <p
                className="text-lg text-justify text-white"
                style={{ maxWidth: "400px" }}
              >
                {t.techToolsDesc}
              </p>
            </div>
            {/* Right: 2x2 Grid of 4 boxes */}
            <div className="md:w-1/2 w-full grid sm:grid-cols-2 gap-6">
              {/* AI/ML */}
              <div className="p-6 rounded-xl shadow-md bg-white text-[#1e3a8a]">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.aiMl}</h3>
                <ul className="list-disc ml-5">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                </ul>
              </div>
              {/* Web Dev */}
              <div className="p-6 rounded-xl shadow-md bg-white text-[#1e3a8a]">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.webDev}</h3>
                <ul className="list-disc ml-5">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Django</li>
                </ul>
              </div>
              {/* Data Science */}
              <div className="p-6 rounded-xl shadow-md bg-white text-[#1e3a8a]">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.dataScience}</h3>
                <ul className="list-disc ml-5">
                  <li>Python</li>
                  <li>R</li>
                  <li>Tableau</li>
                </ul>
              </div>
              {/* Blockchain & Cloud */}
              <div className="p-6 rounded-xl shadow-md bg-white text-[#1e3a8a]">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>{t.blockchainCloud}</h3>
                <ul className="list-disc ml-5">
                  <li>Ethereum</li>
                  <li>Solidity</li>
                  <li>AWS</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-center mb-6" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{t.pricingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`}>
              <h3 className="text-2xl font-semibold mb-2">{t.basic}</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>$19<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Access to 3 courses</li>
                <li>✔️ Community Support</li>
                <li>✔️ Certificate of Completion</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400'}`}>{t.chooseBasic}</button>
            </div>
            {/* Pro Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 ${theme === 'dark' ? 'bg-[#181818] border-[#1e3a8a] text-white' : 'bg-white border-[#1e3a8a] text-[#1e3a8a]'}`}>
              <h3 className="text-2xl font-semibold mb-2">{t.pro}</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>$49<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Access to all courses</li>
                <li>✔️ Priority Support</li>
                <li>✔️ Certificate & Projects</li>
                <li>✔️ Monthly Webinars</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400'}`}>{t.choosePro}</button>
            </div>
            {/* Enterprise Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`}>
              <h3 className="text-2xl font-semibold mb-2">{t.enterprise}</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>$99<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Unlimited Users</li>
                <li>✔️ Dedicated Account Manager</li>
                <li>✔️ Custom Integrations</li>
                <li>✔️ All Pro Features</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400'}`}>{t.contactSales}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join Section */}
  <section className="w-full py-16 bg-[#1e3a8a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#fff' }}>{t.readyJoin}</h2>
          <p className="text-lg mb-8 text-white">{t.readyJoinDesc}</p>
          <a href="/contactus" className="inline-block font-bold py-3 px-8 rounded-full shadow-lg transition bg-[#fff] text-[#1e3a8a] hover:bg-blue-400">{t.contactUs}</a>
        </div>
      </section>

    </div>
  );
}