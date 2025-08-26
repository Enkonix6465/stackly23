 import React, { useState } from "react";
import cryptoHero from "../assets/crypto.mp4";
import b1 from "../assets/b1.avif";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";

export default function BlockchainPage() {
  // Theme state synced with Header
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

  const faqs = [
    {
      question: "What are skill development workshops?",
      answer:
        "They are short-term bootcamps designed to help you quickly learn and apply trending skills like AI, Data Science, and Digital Marketing.",
    },
    {
      question: "How long are the workshops?",
      answer:
        "Most workshops last between 2 to 8 weeks, depending on the topic.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No prior background is required for beginner workshops. Advanced tracks are available for experienced learners.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, you’ll receive a recognized certificate after successful completion.",
    },
    {
      question: "Are the workshops online or offline?",
      answer:
        "Currently, all workshops are delivered online with interactive live sessions.",
    },
    {
      question: "Do you offer placement support?",
      answer:
        "Yes, we provide career guidance, resume reviews, and connections with hiring partners.",
    },
  ];

  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    }>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={cryptoHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Workshops Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Accelerate Your Career with <span style={{ color: '#00bfff' }}>Skill Development Workshops</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Join short-term, intensive bootcamps on AI, Data Science, Digital Marketing, and more to gain in-demand skills quickly.
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`
      }>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={b1} alt="Workshops Services" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#fff' }}>
              What Our Skill Development Workshops Include
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              {[
                'Intensive Bootcamps on AI, Data Science & Digital Marketing',
                'Expert-Led Live Sessions',
                'Hands-on Industry Projects',
                'Career Guidance & Mentorship',
                'Certification of Completion',
                'Ongoing Access to Resources',
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#00BFFF' }}>Key Features / What You’ll Get</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {[
              { num: '01', heading: 'Expert Mentors', desc: 'Learn directly from industry professionals and domain experts.' },
              { num: '02', heading: 'Real-Time Q&A', desc: 'Interactive sessions with live feedback and answers.' },
              { num: '03', heading: 'Flexible Learning', desc: 'Weekend & weekday batches to suit your schedule.' },
              { num: '04', heading: 'Certification', desc: 'Earn certificates that boost your professional profile.' },
              { num: '05', heading: 'Career Networking', desc: 'Connect with peers, mentors, and recruiters.' },
              { num: '06', heading: 'Practical Projects', desc: 'Work on real-world challenges to sharpen your skills.' },
            ].map((item, idx) => (
              <div key={item.num} className="flex items-start mb-6">
                <div className="relative flex-shrink-0 mr-4">
                  <span className="text-5xl font-extrabold text-black" style={{
                    background: 'linear-gradient(90deg, #00BFFF 60%, transparent 60%)',
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#00BFFF' }}>Benefits / Outcomes</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <li className="flex items-start gap-3"><span className="text-2xl text-[#00BFFF]">✔</span>Gain Job-Ready Skills <span className="text-gray-500">→ Specialize in trending domains like AI, Data Science, and Digital Marketing.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#00BFFF]">✔</span>Fast-Track Learning <span className="text-gray-500">→ Short-term workshops designed for rapid upskilling.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#00BFFF]">✔</span>Hands-on Experience <span className="text-gray-500">→ Work on projects, assignments, and case studies.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#00BFFF]">✔</span>Recognized Certificates <span className="text-gray-500">→ Boost your resume with industry-accepted credentials.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#00BFFF]">✔</span>Career Readiness <span className="text-gray-500">→ Portfolio building, interview prep, and placement guidance.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#00BFFF]">✔</span>Lifelong Access <span className="text-gray-500">→ Stay updated with recorded sessions and resources.</span></li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`
      }>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#00bfff' }}>
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
                  <span className="font-bold text-xl" style={{ color: '#00bfff' }}>
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
      <section className={
        `py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`
      }>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to <span style={{ color: '#fff' }}>Upskill</span> with Our Workshops?
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
          >
            Join our short-term, high-impact bootcamps and gain the skills employers are looking for in today’s market.
          </p>
          <button className={
            `px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ` +
            (theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#fff] text-black hover:bg-[#0099cc]')
          }>
            Enroll Now
          </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={b3}
              alt="Workshops CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
