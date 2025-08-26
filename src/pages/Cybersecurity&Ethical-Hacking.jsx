import React, { useState } from "react";
import ethicalHero from "../assets/ethical.mp4";
import e1 from "../assets/e1.jpeg";
import e2 from "../assets/e2 2.jpeg";
import e3 from "../assets/e3.jpeg";

const faqs = [
  {
    question: "What types of learning resources are available?",
    answer:
      "You’ll get access to e-books, recorded lectures, practice assignments, quizzes, and more.",
  },
  {
    question: "Can I download study materials?",
    answer:
      "Yes! Most of our resources, including e-books and notes, are downloadable for offline access.",
  },
  {
    question: "Are the recorded lectures updated regularly?",
    answer:
      "Yes, we keep our content updated to ensure you learn with the latest knowledge and industry trends.",
  },
  {
    question: "Do you provide practice tests and quizzes?",
    answer:
      "Absolutely! You’ll get quizzes, self-assessments, and practice tests to track your progress.",
  },
  {
    question: "Is there mobile app access?",
    answer:
      "Yes, you can learn on the go with our mobile app and access downloadable content anytime.",
  },
  {
    question: "Will I get lifetime access to resources?",
    answer:
      "Yes, once enrolled, you’ll have lifetime access to your resources and updates.",
  },
];

export default function LearningResourcesPage() {
  const [theme, setTheme] = useState('light');
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
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={ethicalHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Learning Resources Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Access Powerful <span style={{ color: '#1e3a8a' }}>Learning Resources & Tools</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Get e-books, recorded lectures, quizzes, assignments, and mobile app access. Learn anytime, anywhere, with downloadable content and lifelong resources.
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={e1} alt="Learning Resources" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#1e3a8a' }}>
              What Our Resources Include
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              {[
                'E-books and downloadable notes',
                'Recorded video lectures',
                'Practice assignments & exercises',
                'Self-assessment quizzes',
                'Mobile app access',
                'Lifelong access to updates',
              ].map((item, idx) => (
                <li className="flex items-center" key={item}>
                  <span className={`w-3 h-3 rounded-full mr-3 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features / What You’ll Get */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-[#e6f7ff] text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>Key Features / What You’ll Get</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {[
              { num: '01', heading: 'E-books & Notes', desc: 'Downloadable resources to support your learning journey.' },
              { num: '02', heading: 'Recorded Lectures', desc: 'Revisit classes anytime with on-demand access.' },
              { num: '03', heading: 'Assignments & Quizzes', desc: 'Practice with exercises and track progress with quizzes.' },
              { num: '04', heading: 'Mobile App', desc: 'Learn on the go with full access from your phone.' },
              { num: '05', heading: 'Downloadable Content', desc: 'Access offline resources for uninterrupted learning.' },
              { num: '06', heading: 'Lifetime Access', desc: 'Enjoy continuous updates and learning resources.' },
            ].map((item, idx) => (
              <div key={item.num} className="flex items-start mb-6">
                <div className="relative flex-shrink-0 mr-4">
                  <span className="text-5xl font-extrabold text-black" style={{
                    background: 'linear-gradient(90deg, #1e3a8a 60%, transparent 60%)',
                    padding: '0.1em 0.5em',
                    borderRadius: '0.2em',
                    color: '#111',
                    display: 'inline-block',
                  }}>{item.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-black">{item.heading}</h3>
                  <p className="text-gray-600 text-base max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Outcomes */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#1e3a8a' }}>Benefits / Outcomes</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Learn Anytime, Anywhere <span className="text-gray-500">→ Access resources on desktop and mobile.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Study at Your Own Pace <span className="text-gray-500">→ Rewatch lectures and reattempt quizzes anytime.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Track Progress <span className="text-gray-500">→ Self-assess with quizzes and assignments.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Offline Learning <span className="text-gray-500">→ Download e-books and resources for use without internet.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Lifelong Access <span className="text-gray-500">→ Keep your resources forever, with regular updates.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Boost Productivity <span className="text-gray-500">→ Learn efficiently with structured tools and resources.</span></li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>
            Frequently Asked Questions
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: '#1e3a8a' }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className={theme === 'dark' ? 'mt-4 text-gray-200' : 'mt-4 text-gray-600'}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to <span style={{ color: '#fff' }}>Start Learning</span> with Our Tools?
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}
            >
              Explore our library of e-books, lectures, quizzes, and assignments. Learn anywhere, anytime, with lifetime access and mobile-friendly tools.
            </p>
            <button className={
              `px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ` +
              (theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#fff] text-black hover:bg-[#0099cc]')
            }>
              Explore Resources
            </button>
          </div>
          {/* Right Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={e3}
              alt="Learning Resources CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
