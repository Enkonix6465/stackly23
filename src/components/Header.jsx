import React, { useState, useEffect } from 'react';
import ScrollToTop from '../pages/scroll-top';

import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const translations = {
  English: {
    languages: 'Languages',
    home: 'Home',
    home1: 'Home 1',
    home2: 'Home 2',
    aboutUs: 'About Us',
    services: 'Services',
    allServices: 'All Services',
    coursesPrograms: 'Courses & Programs',
    liveClasses: 'Live Classes & Mentorship',
    certifications: 'Certifications & Career Support',
    skillWorkshops: 'Skill Development Workshops',
    learningResources: 'Learning Resources & Tools',
    community: 'Community & Networking',
    blog: 'Blog',
    contactUs: 'Contact Us',
    backToAdmin: 'Back to Admin Dashboard',
    userDashboard: 'User Dashboard',
    logout: 'Logout',
  },
  Arabic: {
    languages: 'اللغات',
    home: 'الرئيسية',
    home1: 'الرئيسية 1',
    home2: 'الرئيسية 2',
    aboutUs: 'معلومات عنا',
    services: 'الخدمات',
    allServices: 'كل الخدمات',
    coursesPrograms: 'الدورات والبرامج',
    liveClasses: 'دروس مباشرة وإرشاد',
    certifications: 'الشهادات والدعم المهني',
    skillWorkshops: 'ورش تطوير المهارات',
    learningResources: 'موارد وأدوات التعلم',
    community: 'المجتمع والشبكات',
    blog: 'مدونة',
    contactUs: 'اتصل بنا',
    backToAdmin: 'العودة إلى لوحة الإدارة',
    userDashboard: 'لوحة المستخدم',
    logout: 'تسجيل الخروج',
  },
  Hebrew: {
    languages: 'שפות',
    home: 'בית',
    home1: 'בית 1',
    home2: 'בית 2',
    aboutUs: 'אודות',
    services: 'שירותים',
    allServices: 'כל השירותים',
    coursesPrograms: 'קורסים ותוכניות',
    liveClasses: 'שיעורים חיים וחונכות',
    certifications: 'הסמכות ותמיכה בקריירה',
    skillWorkshops: 'סדנאות פיתוח מיומנויות',
    learningResources: 'משאבים וכלים ללמידה',
    community: 'קהילה ורישות',
    blog: 'בלוג',
    contactUs: 'צור קשר',
    backToAdmin: 'חזרה ללוח מנהל',
    userDashboard: 'לוח משתמש',
    logout: 'התנתקות',
  },
};

const Header = () => {
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const homeDropdownTimeout = React.useRef();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownTimeout = React.useRef();
  const [theme, setTheme] = useState('light');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownTimeout = React.useRef();
  const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('language') || 'English');
  // Ensure theme and language are set only after mount (SSR-safe)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedLang = localStorage.getItem('language') || 'English';
      setSelectedLanguage(storedLang);
    }
  }, []);

  // Sync theme and language with localStorage and document root
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      window.dispatchEvent(new Event('theme-changed'));
      localStorage.setItem('language', selectedLanguage);
      window.dispatchEvent(new Event('language-changed'));
    }
  }, [theme, selectedLanguage]);

  // Listen for theme and language changes from other tabs/pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLanguageChange = () => {
        const newLang = localStorage.getItem('language') || 'English';
        setSelectedLanguage(newLang);
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const t = translations[selectedLanguage] || translations['English'];
  const isRTL = selectedLanguage === 'Arabic' || selectedLanguage === 'Hebrew';
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full !fixed !top-0 !left-0 !right-0 !z-50 transition-colors duration-300${isRTL ? ' rtl' : ''} ${theme === 'dark' ? 'bg-[#000] border-b border-[#141B25]' : 'bg-white border-b border-gray-200'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="w-full px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => navigate('/home1')} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>
          {/* Right side - Navigation and Icons */}
          <div className="hidden min-[480px]:flex items-right space-x-16">
            {/* Languages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (languageDropdownTimeout.current) clearTimeout(languageDropdownTimeout.current);
                setIsLanguageDropdownOpen(true);
              }}
              onMouseLeave={() => {
                languageDropdownTimeout.current = setTimeout(() => setIsLanguageDropdownOpen(false), 200);
              }}
            >
              <button
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#1e3a8a] transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isLanguageDropdownOpen}
                onClick={() => setIsLanguageDropdownOpen((v) => !v)}
              >
                {t.languages}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <button
                    className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'English' ? 'font-bold' : ''} ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => { setSelectedLanguage('English'); localStorage.setItem('language', 'English'); window.dispatchEvent(new Event('language-changed')); setIsLanguageDropdownOpen(false); }}
                  >
                    English
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'Arabic' ? 'font-bold' : ''} ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => { setSelectedLanguage('Arabic'); localStorage.setItem('language', 'Arabic'); window.dispatchEvent(new Event('language-changed')); setIsLanguageDropdownOpen(false); }}
                  >
                    Arabic
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'Hebrew' ? 'font-bold' : ''} ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => { setSelectedLanguage('Hebrew'); localStorage.setItem('language', 'Hebrew'); window.dispatchEvent(new Event('language-changed')); setIsLanguageDropdownOpen(false); }}
                  >
                    Hebrew
                  </button>
                </div>
              )}
            </div>
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#1e3a8a] transition-colors duration-200`}
                  aria-haspopup="true"
                  aria-expanded={isHomeDropdownOpen}
                >
                  {t.home}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                    <Link to="/home1" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{t.home1}</Link>
                    <Link to="/home2" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{t.home2}</Link>
                  </div>
                )}
              </div>
            </div>


            <Link
              to="/aboutus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#1e3a8a] transition-colors duration-200`}
            >
              {t.aboutUs}
            </Link>

            {/* User Dashboard link for non-admin users */}
            

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesDropdownTimeout.current = setTimeout(() => setIsServicesDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/services')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#1e3a8a] transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                {t.services}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.allServices}</Link>
                  <Link to="/Courses%20&%20Programs" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.coursesPrograms}</Link>
                  <Link to="/Live%20Classes%20&%20Mentorship" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.liveClasses}</Link>
                  <Link to="/Certifications%20&%20Career%20Support" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.certifications}</Link>
                  <Link to="/Skill%20Development%20Workshops" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.skillWorkshops}</Link>
                  <Link to="/Learning%20Resources%20&%20Tools" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.learningResources}</Link>
                  <Link to="/Community%20&%20Networking" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.community}</Link>
                </div>
              )}
            </div>
            
          
            <Link
              to="/blog"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#1e3a8a] transition-colors duration-200`}
            >
              {t.blog}
            </Link>

            <Link
              to="/contactus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
            >
              {t.contactUs}
            </Link>

            {/* Dark Mode Toggle */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-[#e0e7ff] border-[#1e3a8a] hover:bg-[#c7d2fe]'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown */}
             <div className="relative">
              {(() => {
                // Always use first letter of firstname and lastname for initials
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                const email = (localStorage.getItem('email') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                if (!initials) {
                  initials = '?';
                }
  return (
    <>
      <ScrollToTop />
                    <button
                      className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}> 
                        {email === 'admin@enkonix.in' && (
                          <button
                            className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1e3a8a]' : 'text-gray-800 hover:bg-[#e0e7ff]'}`}
                            onClick={() => { setIsAvatarDropdownOpen(false); navigate('/admindashboard'); }}
                          >
                            {t.backToAdmin}
                          </button>
                        )}
                        {/* User Dashboard link for non-admin users */}
                        {email && email !== 'admin@enkonix.in' && (
                          <button
                            className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1e3a8a]' : 'text-gray-800 hover:bg-[#e0e7ff]'}`}
                            onClick={() => { setIsAvatarDropdownOpen(false); navigate('/userdashboard'); }}
                          >
                            {t.userDashboard}
                          </button>
                        )}
                        <button
                          className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1e3a8a]' : 'text-gray-800 hover:bg-[#e0e7ff]'}`}
                          onClick={() => { setIsAvatarDropdownOpen(false); navigate('/welcome'); }}
                        >
                          {t.logout}
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

          {/* Mobile icons - Only visible on very small screens */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            {/* Languages Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 bg-[#e0e7ff] border-[#1e3a8a] hover:bg-[#c7d2fe]"
                onClick={() => setIsLanguageDropdownOpen((v) => !v)}
                aria-label="Select language"
              >
                <span className="text-[#1e3a8a] font-semibold">🌐</span>
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <button className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'English' ? 'font-bold' : ''} text-gray-800 hover:bg-blue-100`} onClick={() => { setSelectedLanguage('English'); setIsLanguageDropdownOpen(false); }}>English</button>
                  <button className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'Arabic' ? 'font-bold' : ''} text-gray-800 hover:bg-blue-100`} onClick={() => { setSelectedLanguage('Arabic'); setIsLanguageDropdownOpen(false); }}>Arabic</button>
                  <button className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'Hebrew' ? 'font-bold' : ''} text-gray-800 hover:bg-blue-100`} onClick={() => { setSelectedLanguage('Hebrew'); setIsLanguageDropdownOpen(false); }}>Hebrew</button>
                </div>
              )}
            </div>
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-[#e0e7ff] border-[#1e3a8a] hover:bg-[#c7d2fe]'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown (Mobile) */}
            <div className="relative">
              {(() => {
                // Always use first letter of firstname and lastname for initials
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                const email = (localStorage.getItem('email') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                if (!initials) {
                  initials = '?';
                }
                return (
                  <>
                    <button
                      className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {email === 'admin@enkonix.in' && (
                          <button
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                            onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/admindashboard'; }}
                          >
                            Back to Admin Dashboard
                          </button>
                        )}
                        <button
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                          onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
              

        {/* Mobile Navigation Menu - Only visible on very small screens */}
        {isMobileMenuOpen && (
          <div className="min-[480px]:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Home Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{t.home}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="/home1" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.home1}</a>
                    <a href="/home2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.home2}</a>
                  </div>
                )}
              </div>

              <Link to="/aboutus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.aboutUs}
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{t.services}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.allServices}</Link>
                    <Link to="/Courses%20&%20Programs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.coursesPrograms}</Link>
                    <Link to="/Live%20Classes%20&%20Mentorship" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.liveClasses}</Link>
                    <Link to="/Certifications%20&%20Career%20Support" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.certifications}</Link>
                    <Link to="/Skill%20Development%20Workshops" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.skillWorkshops}</Link>
                    <Link to="/Learning%20Resources%20&%20Tools" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.learningResources}</Link>
                    <Link to="/Community%20&%20Networking" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.community}</Link>
                  </div>
                )}
              </div>


              <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.blog}
              </Link>

              <Link to="/contactus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.contactUs}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
