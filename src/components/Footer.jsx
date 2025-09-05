import React, { useEffect, useState } from 'react';
import ScrollToTop from '../pages/scroll-top';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const translations = {
  English: {
    companyName: 'Online Training Platform',
    description: 'Equipping learners across the globe with engaging online courses, guidance from experienced instructors, and practical skills to thrive at every stage of their career journey.',
    quickLinks: 'Quick Links',
    home: 'Home',
    aboutUs: 'About Us',
    services: 'Services',
    blog: 'Blog',
    contactUs: 'Contact Us',
    ourServices: 'Our Services',
    coursesPrograms: 'Courses & Programs',
    liveClasses: 'Live Classes & Mentorship',
    certifications: 'Certifications & Career Support',
    skillWorkshops: 'Skill Development Workshops',
    learningResources: 'Learning Resources & Tools',
    community: 'Community & Networking',
    getInTouch: 'Get In Touch',
    phone: '+919390594407',
    email: 'training@stackly.in',
    country: 'India',
    hours: 'Mon - Fri: 9am - 6pm',
    startJourney: 'Start Your Journey',
    copyright: '© 2025 Finance & Accounting Company. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookie: 'Cookie Policy',
  },
  Arabic: {
    companyName: 'منصة التدريب عبر الإنترنت',
    description: 'تزويد المتعلمين حول العالم بدورات تفاعلية عبر الإنترنت، وإرشاد من مدربين ذوي خبرة، ومهارات عملية للنجاح في كل مرحلة من مراحل حياتهم المهنية.',
    quickLinks: 'روابط سريعة',
    home: 'الرئيسية',
    aboutUs: 'معلومات عنا',
    services: 'الخدمات',
    blog: 'مدونة',
    contactUs: 'اتصل بنا',
    ourServices: 'خدماتنا',
    coursesPrograms: 'الدورات والبرامج',
    liveClasses: 'دروس مباشرة وإرشاد',
    certifications: 'الشهادات والدعم المهني',
    skillWorkshops: 'ورش تطوير المهارات',
    learningResources: 'موارد وأدوات التعلم',
    community: 'المجتمع والشبكات',
    getInTouch: 'تواصل معنا',
    phone: '+919390594407',
    email: 'training@stackly.in',
    country: 'الهند',
    hours: 'الاثنين - الجمعة: 9 صباحًا - 6 مساءً',
    startJourney: 'ابدأ رحلتك',
    copyright: '© 2025 شركة المالية والمحاسبة. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    cookie: 'سياسة الكوكيز',
  },
  Hebrew: {
    companyName: 'פלטפורמת הדרכה מקוונת',
    description: 'העצמת לומדים ברחבי העולם עם קורסים מקוונים מרתקים, הדרכה ממדריכים מנוסים, ומיומנויות מעשיות להצלחה בכל שלב בקריירה.',
    quickLinks: 'קישורים מהירים',
    home: 'בית',
    aboutUs: 'אודות',
    services: 'שירותים',
    blog: 'בלוג',
    contactUs: 'צור קשר',
    ourServices: 'השירותים שלנו',
    coursesPrograms: 'קורסים ותוכניות',
    liveClasses: 'שיעורים חיים וחונכות',
    certifications: 'הסמכות ותמיכה בקריירה',
    skillWorkshops: 'סדנאות פיתוח מיומנויות',
    learningResources: 'משאבים וכלים ללמידה',
    community: 'קהילה ורישות',
    getInTouch: 'צור קשר',
    phone: '+919390594407',
    email: 'training@stackly.in',
    country: 'הודו',
    hours: 'ב׳ - ו׳: 9:00 - 18:00',
    startJourney: 'התחל את המסע שלך',
    copyright: '© 2025 חברת פיננסים וחשבונאות. כל הזכויות שמורות.',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאי שירות',
    cookie: 'מדיניות עוגיות',
  },
};

const Footer = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'English');
  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    const handleLanguageChange = () => setLanguage(localStorage.getItem('language') || 'English');
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
  }, []);
  const t = translations[language] || translations['English'];
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  // Removed duplicate theme declaration
  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);
  const bg = theme === 'dark' ? 'bg-[#000]' : 'bg-white';
  const textMain = theme === 'dark' ? 'text-white' : 'text-black';
  const textSub = theme === 'dark' ? 'text-gray-300' : 'text-black';
  const border = theme === 'dark' ? 'border-gray-700' : 'border-gray-800';
  return (
    <>
      <ScrollToTop />
      <footer className={`${bg} ${textMain}${isRTL ? ' rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 min-[768px]:grid-cols-4 gap-16 justify-between">
          
          {/* Column 1 - Company Information */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="STACKLY" className="h-8 w-auto" />
            </div>
            
            {/* Company Name */}
            <h3 className="text-[#1e3a8a] font-semibold text-lg">
              {t.companyName}
            </h3>
            
            {/* Description */}
            <p className={`${textSub} text-sm leading-relaxed`}>
              {t.description}
            </p>
            
            {/* Social Media Icons */}
           <div className="flex space-x-3 pt-2">
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-full ${
      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-800'
  } flex items-center justify-center hover:bg-[#1e3a8a] transition-colors duration-200`}
  >
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-full ${
      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-800'
    } flex items-center justify-center hover:bg-[#00bfff] transition-colors duration-200`}
  >
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  </a>

  <a
    href="https://facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1e3a8a] transition-colors duration-200"
  >
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  </a>

  <a
    href="https://pinterest.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00bfff] transition-colors duration-200"
  >
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
    </svg>
  </a>
</div>

          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#1e3a8a] font-semibold text-lg">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home1" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/services" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                  {t.services}
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link to="/contactus" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="space-y-4">
            <h3 className="text-[#1e3a8a] font-semibold text-lg">
              {t.ourServices}
            </h3>
            <ul className="space-y-2">
  
              <li>
                <Link to="/Courses & Programs" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.coursesPrograms}</Link>
              </li>
              <li>
                <Link to="/Live Classes & Mentorship" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.liveClasses}
                </Link>
              </li>
              <li>
                <Link to="/Certifications & Career Support" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.certifications}
                </Link>
              </li>
              <li>
                <Link to="/Skill Development Workshops" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.skillWorkshops}
                </Link>
              </li>
              <li>
                <Link to="/Learning Resources & Tools" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.learningResources}
                </Link>
              </li>
              <li>
                <Link to="/Community & Networking" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.community}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-[#1e3a8a] font-semibold text-lg">
              {t.getInTouch}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className={`${textSub}`}>{t.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className={`${textSub}`}>{t.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={`${textSub}`}>{t.country}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`${textSub}`}>{t.hours}</span>
              </div>
            </div>
            
            {/* Call to Action Button */}
           <Link 
  to="/contactus" 
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4 whitespace-nowrap text-center block"
>
  {t.startJourney}
</Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar - Legal Links */}
      <div className={`border-t ${border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className={`${textSub} text-sm`}>
              {t.copyright}
            </div>
            
            {/* Legal Links */}
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'} text-sm`}>
              <a href="#" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.privacy}
              </a>
              <a href="#" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.terms}
              </a>
              <a href="#" className={`${textSub} hover:text-[#1e3a8a] transition-colors duration-200`}>
                {t.cookie}
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;