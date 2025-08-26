import React, { useState, useEffect } from "react";
import web from "../assets/web.mp4";
import w1 from "../assets/w1.avif";
import w2 from "../assets/w2.jpeg";
import w3 from "../assets/w3.webp";

const faqs = [
  {
    question: "How do I join a live class?",
    answer:
      "Browse our class schedule, select your preferred session, and register. You’ll receive a link to join the live session with your mentor.",
  },
  {
    question: "Are mentorship sessions one-on-one or group based?",
    answer:
      "We offer both! You can choose between personalized one-on-one mentorship or interactive group sessions, depending on your preference.",
  },
  {
    question: "Will I get recordings of live classes?",
    answer:
      "Yes, all live sessions are recorded and made available so you can review them anytime.",
  },
  {
    question: "Can I ask questions during live classes?",
    answer:
      "Absolutely! Our live classes are interactive, allowing you to ask questions and get real-time feedback from mentors.",
  },
  {
    question: "What topics are covered in mentorship?",
    answer:
      "Mentorship spans a variety of topics including personal growth, career development, communication skills, digital literacy, and more.",
  },
  {
    question: "Do I get a certificate after completing a program?",
    answer:
      "Yes! Upon successful completion, you’ll earn a certificate to showcase your skills and progress.",
  },
];

export default function WebDevServicePage() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
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
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    }>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={web}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Learn Smarter with <span style={{ color: '#1e3a8a' }}>Live Classes</span> & <span style={{ color: '#1e3a8a' }}>Mentorship</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Join engaging live sessions, connect with expert mentors, and gain skills that matter. Whether you’re exploring new subjects or advancing your career, our programs are built to help you succeed.
          </p>
        </div>
      </section>

      {/* Service Includes Section - Live Class Categories */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-[#f8fafc] text-black'}`}> 
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1e3a8a' }}>
            Live Class & Mentorship Tracks
          </h2>
          <p className="text-center text-lg mb-10">
            Choose from a range of tracks designed for personal, academic, and professional growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Development Essentials",
                mentor: "Jane Doe",
                price: "Free Trial",
                duration: "12h Live",
                lessons: "6 Sessions",
                image: w1,
                students: 18,
                rating: 5,
              },
              {
                title: "Communication & Leadership",
                mentor: "John Smith",
                price: "$49",
                duration: "20h Live",
                lessons: "8 Sessions",
                image: w2,
                students: 25,
                rating: 5,
              },
              {
                title: "Career Growth Mentorship",
                mentor: "Emily Lee",
                price: "$99",
                duration: "30h Live",
                lessons: "12 Sessions",
                image: w3,
                students: 12,
                rating: 5,
              },
            ].map((track, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <img src={track.image} alt={track.title} className="w-full h-44 object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-[#00BFFF]">{track.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Mentor: {track.mentor}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <span className="mr-2">{track.duration}</span>
                    <span className="mr-2">{track.lessons}</span>
                    <span>{track.price}</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500"> {track.students} students</span>
                    <span className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < track.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features / What You’ll Get */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-[#e6f7ff] text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>Key Features / What You’ll Get</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {[
              { num: '01', heading: 'Live Interactive Classes', desc: 'Engage in real-time with expert mentors and fellow learners.' },
              { num: '02', heading: 'Personalized Mentorship', desc: 'Get guidance tailored to your personal or career goals.' },
              { num: '03', heading: 'Practical Learning', desc: 'Apply what you learn through real-world activities and projects.' },
              { num: '04', heading: 'Flexible Schedules', desc: 'Attend sessions at times that suit your routine.' },
              { num: '05', heading: 'Career & Academic Support', desc: 'Get help with resumes, applications, and interview preparation.' },
              { num: '06', heading: 'Community Access', desc: 'Join a supportive network of peers, mentors, and industry experts.' },
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
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Confidence & Skills <span className="text-gray-500">→ Build practical knowledge and confidence to achieve your goals.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Portfolio & Achievements <span className="text-gray-500">→ Create projects, activities, or case studies to showcase your progress.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Ongoing Mentor Support <span className="text-gray-500">→ Receive guidance and feedback even after class hours.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Flexible Learning <span className="text-gray-500">→ Join live or watch recordings whenever it works best for you.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Certification <span className="text-gray-500">→ Earn certificates to strengthen your resume and profile.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Networking <span className="text-gray-500">→ Connect with mentors, peers, and industry professionals.</span></li>
          </ul>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>
            Frequently Asked Questions
          </h2>
          <div className="grid  lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: '#1e3a8a' }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {/* Answer */}
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
        `py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`
      }>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Start Your <span style={{ color: '#fff' }}>Learning Journey</span> Today
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Join our live classes and mentorship programs to unlock your potential, gain new skills, and connect with inspiring mentors. Your growth starts here!
            </p>
            <button className={
              `px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ` +
              (theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#fff] text-black hover:bg-[#0099cc]')
            }>
              Get Started
            </button>
          </div>
          {/* Right Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={w3}
              alt="Live Classes and Mentorship"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
