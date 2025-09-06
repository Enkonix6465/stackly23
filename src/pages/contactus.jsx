import React, { useState } from "react";
import contactVideo from "../assets/contact.mp4";
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.webp";
import faqImage from "../assets/faq.jpg";

export default function ContactHero() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [theme, setTheme] = React.useState('light');
  const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'English');

  // Theme effect
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

  // Language effect
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language') || 'English';
      setLanguage(storedLang);
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
    }
  }, []);

  const isRTL = language === 'Arabic' || language === 'Hebrew';

  const translations = {
    English: {
      heroTitle: 'Get in Touch Today',
      heroDesc: "Building solutions, creating success — let's make it happen together.",
      supportTitle: 'Meet Our Support Team',
      cards: [
        { title: 'Visit Us', text: '123 Business Street, Suite 100, YourCity' },
        { title: 'Email Us', text: 'stackly.com' },
        { title: 'Customer Care', text: '+1 (800) 123-4567' },
      ],
      contactSmall: 'Get in Touch',
      contactTitle: "Need help? Let's get in touch",
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Write a Message',
        send: 'Send Message',
        submitted: 'Submitted!',
        success: 'Submitted successfully!',
      },
      locationSmall: 'Location',
      locationTitle: 'How to Reach Our Location',
      faqSmall: 'Frequently Asked Questions',
      faqTitle: "Got Questions? We've Got Answers",
      faqs: [
        { question: "How do I get started with your services?", answer: "Simply reach out to our team through the contact form or call us directly — we’ll guide you through every step." },
        { question: "What types of businesses do you work with?", answer: "We partner with startups, SMEs, and enterprises across various industries." },
        { question: "Do you provide custom solutions?", answer: "Yes, we tailor our services to meet your specific goals and challenges." },
        { question: "How quickly can you respond to urgent matters?", answer: "Our team is available for priority support, ensuring quick response times when you need us most." },
        { question: "What makes your company different?", answer: "We combine deep expertise with personalized service, delivering results you can trust." },
      ],
      newsletterTitle: 'Stay Updated',
      newsletterDesc: 'Subscribe to our newsletter and never miss our latest news, updates, and special offers.',
      newsletterPlaceholder: 'Enter your email',
      newsletterBtn: 'Subscribe',
      newsletterSuccess: 'Subscribed successfully!',
    },
    Arabic: {
      heroTitle: 'تواصل معنا اليوم',
      heroDesc: 'نبني الحلول، ونحقق النجاح — دعنا ننجز ذلك معًا.',
      supportTitle: 'تعرف على فريق الدعم الخاص بنا',
      cards: [
        { title: 'زرنا', text: '١٢٣ شارع الأعمال، جناح ١٠٠، مدينتك' },
        { title: 'راسلنا عبر البريد الإلكتروني', text: 'stackly.com' },
        { title: 'خدمة العملاء', text: '+١ (٨٠٠) ١٢٣-٤٥٦٧' },
      ],
      contactSmall: 'تواصل معنا',
      contactTitle: 'هل تحتاج إلى مساعدة؟ دعنا نتواصل',
      form: {
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'اكتب رسالتك هنا',
        send: 'إرسال الرسالة',
        submitted: 'تم الإرسال!',
        success: 'تم الإرسال بنجاح!',
      },
      locationSmall: 'الموقع',
      locationTitle: 'كيفية الوصول إلى موقعنا',
      faqSmall: 'الأسئلة الشائعة',
      faqTitle: 'هل لديك أسئلة؟ لدينا الإجابات',
      faqs: [
        { question: "كيف أبدأ مع خدماتكم؟", answer: "تواصل مع فريقنا عبر نموذج الاتصال أو اتصل بنا مباشرة — سنرشدك في كل خطوة." },
        { question: "ما أنواع الشركات التي تتعاملون معها؟", answer: "نتعاون مع الشركات الناشئة والشركات الصغيرة والمتوسطة والمؤسسات في مختلف الصناعات." },
        { question: "هل تقدمون حلولًا مخصصة؟", answer: "نعم، نخصص خدماتنا لتلبية أهدافك وتحدياتك الخاصة." },
        { question: "ما مدى سرعة استجابتكم للأمور العاجلة؟", answer: "فريقنا متاح للدعم الفوري، لضمان سرعة الاستجابة عند الحاجة." },
        { question: "ما الذي يميز شركتكم؟", answer: "نجمع بين الخبرة العميقة والخدمة الشخصية، ونقدم نتائج يمكنك الوثوق بها." },
      ],
      newsletterTitle: 'ابقَ على اطلاع',
      newsletterDesc: 'اشترك في نشرتنا الإخبارية ولا تفوت أحدث الأخبار والتحديثات والعروض الخاصة.',
      newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
      newsletterBtn: 'اشترك الآن',
      newsletterSuccess: 'تم الاشتراك بنجاح!',
    },
    Hebrew: {
      heroTitle: 'צור קשר היום',
      heroDesc: 'בונים פתרונות, יוצרים הצלחה — בואו נעשה זאת יחד.',
      supportTitle: 'הכירו את צוות התמיכה שלנו',
      cards: [
        { title: 'בקר אותנו', text: '123 רחוב העסקים, סוויטה 100, העיר שלך' },
        { title: 'שלח לנו מייל', text: 'stackly.com' },
        { title: 'שירות לקוחות', text: '+1 (800) 123-4567' },
      ],
      contactSmall: 'צור קשר',
      contactTitle: 'צריך עזרה? בואו ניצור קשר',
      form: {
        firstName: 'שם פרטי',
        lastName: 'שם משפחה',
        email: 'אימייל',
        phone: 'טלפון',
        message: 'כתוב הודעה כאן',
        send: 'שלח הודעה',
        submitted: 'נשלח!',
        success: 'נשלח בהצלחה!',
      },
      locationSmall: 'מיקום',
      locationTitle: 'איך להגיע למיקום שלנו',
      faqSmall: 'שאלות נפוצות',
      faqTitle: 'יש לך שאלות? יש לנו תשובות',
      faqs: [
        { question: "איך מתחילים עם השירותים שלכם?", answer: "פשוט פנו לצוות שלנו דרך הטופס או התקשרו — נלווה אתכם בכל שלב." },
        { question: "עם אילו עסקים אתם עובדים?", answer: "אנו משתפים פעולה עם סטארטאפים, עסקים קטנים ובינוניים וחברות גדולות במגוון תחומים." },
        { question: "האם אתם מספקים פתרונות מותאמים אישית?", answer: "כן, אנו מתאימים את השירותים שלנו למטרות ולצרכים שלכם." },
        { question: "כמה מהר אתם מגיבים לנושאים דחופים?", answer: "הצוות שלנו זמין לתמיכה מיידית, ומבטיח תגובה מהירה כשצריך." },
        { question: "מה מייחד את החברה שלכם?", answer: "אנו משלבים מומחיות עמוקה עם שירות אישי, ומספקים תוצאות שאפשר לסמוך עליהן." },
      ],
      newsletterTitle: 'הישאר מעודכן',
      newsletterDesc: 'הירשם לניוזלטר שלנו ואל תפספס את החדשות, העדכונים וההצעות המיוחדות שלנו.',
      newsletterPlaceholder: 'הזן את האימייל שלך',
      newsletterBtn: 'הירשם עכשיו',
      newsletterSuccess: 'נרשמת בהצלחה!',
    },
  };

  const t = translations[language] || translations['English'];
  const cards = t.cards.map((card, idx) => ({ ...card, img: [contact1, contact2, contact3][idx] }));
  const faqs = t.faqs;
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${theme === 'dark' ? 'min-h-screen text-white' : 'min-h-screen text-black'}${isRTL ? ' rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className={`relative h-screen flex items-center justify-center ${theme === 'dark' ? '' : ''}`}> 
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className={theme === 'dark' ? 'absolute inset-0 bg-black/60 -z-10' : 'absolute inset-0 bg-black/40 -z-10'}></div>
        <div className={`relative text-center px-4 max-w-2xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}> 
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
  <section className="py-16 bg-[#1e3a8a]"> 
        <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"> 
            {t.supportTitle}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
        className="bg-white text-black rounded-2xl shadow-md hover:shadow-xl transition text-center p-6"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>
                  {card.title}
                </h3>
        <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#1e3a8a] font-semibold uppercase mb-2">
            {t.contactSmall}
          </p>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}` }>
            {t.contactTitle}
          </h2>
          <form
            className={`${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'} rounded-2xl shadow-lg p-8 space-y-6`}
            onSubmit={e => {
              e.preventDefault();
              setFormSubmitted(true);
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t.form.firstName}
                className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              />
              <input
                type="text"
                placeholder={t.form.lastName}
                className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              />
            </div>
            <input
              type="email"
              placeholder={t.form.email}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
            />
            <input
              type="tel"
              placeholder={t.form.phone}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
            />
            <textarea
              rows="5"
              placeholder={t.form.message}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#1e3a8a] text-white font-semibold py-3 rounded-lg hover:bg-[#1a5276] transition"
              disabled={formSubmitted}
            >
              {formSubmitted ? t.form.submitted : t.form.send}
            </button>
            {formSubmitted && (
              <div className="text-green-500 text-center font-semibold mt-4">{t.form.success}</div>
            )}
          </form>
        </div>
      </section>

      {/* Location Section */}
  <section className="py-20 bg-[#1e3a8a]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#fff] font-semibold uppercase mb-2">
            {t.locationSmall}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
            {t.locationTitle}
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019826876137!2d-122.40081358468178!3d37.79361197975621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ebcc65e9%3A0x34b3b70f6a64a96f!2s456%20Market%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692225939182!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
  <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}> 
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1e3a8a] font-semibold uppercase mb-2">
              {t.faqSmall}
            </p>
    <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.faqTitle}
            </h2>
            <img 
              src={faqImage} 
              alt="FAQ illustration" 
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={theme === 'dark' ? "bg-[#222] border-gray-700 rounded-xl shadow-sm border text-white" : "bg-gray-50 border-gray-100 rounded-xl shadow-sm border"}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className={theme === 'dark' ? "w-full flex justify-between items-center p-6 text-left text-white" : "w-full flex justify-between items-center p-6 text-left"}
                >
                  <span className={theme === 'dark' ? "font-semibold text-lg text-white" : "font-semibold text-lg text-gray-900"}>
                    {faq.question}
                  </span>
                  <span className="text-[#1e3a8a] text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className={theme === 'dark' ? "px-6 pb-6 text-gray-300" : "px-6 pb-6 text-gray-600"}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
  <section className="py-20 bg-[#1e3a8a]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            {t.newsletterTitle}
          </h2>
          <p className="text-lg mb-8 text-white">
            {t.newsletterDesc}
          </p>
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={e => {
              e.preventDefault();
              setNewsletterSubmitted(true);
            }}
          >
            <input 
              type="email" 
              placeholder={t.newsletterPlaceholder} 
              className="flex-1 px-6 py-4 rounded-xl border w-full sm:w-auto focus:outline-none focus:border-[#1e3a8a] border-gray-300 text-gray-800 bg-white"
              disabled={newsletterSubmitted}
            />
            <button 
              type="submit" 
              className="bg-[#000] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#00] transition duration-300 w-full sm:w-auto"
              disabled={newsletterSubmitted}
            >
              {newsletterSubmitted ? t.newsletterBtn : t.newsletterBtn}
            </button>
          </form>
          {newsletterSubmitted && (
            <div className="text-green-500 text-center font-semibold mt-4">{t.newsletterSuccess}</div>
          )}
        </div>
      </section>
    </div>
  );
}
