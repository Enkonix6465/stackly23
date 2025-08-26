import React, { useState } from "react";
import communityHero from "../assets/cloud.mp4";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.avif";

export default function CommunityNetworkingPage() {
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
      question: "What is the Community & Networking service?",
      answer:
        "It’s a platform for peer learning, discussions, and networking where students and professionals collaborate, share ideas, and grow together.",
    },
    {
      question: "Do I get access to alumni groups?",
      answer:
        "Yes, you’ll join our alumni network for lifelong connections, mentorship, and career support.",
    },
    {
      question: "Can I participate in discussion forums?",
      answer:
        "Absolutely! Our forums allow you to share knowledge, ask questions, and collaborate with peers globally.",
    },
    {
      question: "Is networking only online?",
      answer:
        "We offer both online groups and offline meetups/events for deeper engagement.",
    },
    {
      question: "Do you provide mentorship opportunities?",
      answer:
        "Yes, through alumni and expert-led sessions, you’ll gain mentorship and career guidance.",
    },
    {
      question: "Is there a cost to join?",
      answer:
        "Community & Networking access is included with many of our programs, with premium events available separately.",
    },
  ];

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={communityHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Community & Networking Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Grow Together with <span style={{ color: '#1e3a8a' }}>Community & Networking</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Connect with peers, join alumni groups, and collaborate through discussion forums. Build lasting relationships, exchange knowledge, and accelerate your growth with a strong network.
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          <div className="flex justify-center">
            <img src={c1} alt="Community Networking" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#fff' }}>
              What Our Community Offers
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              {[
                'Peer Learning Groups',
                'Discussion Forums',
                'Alumni Network',
                'Collaborative Projects',
                'Mentorship Opportunities',
                'Networking Events & Meetups',
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

      {/* Key Features */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-[#e6f7ff] text-black'}`}> 
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>Key Features / What You’ll Get</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {[
              { num: '01', heading: 'Peer Learning', desc: 'Collaborate with like-minded learners in small groups.' },
              { num: '02', heading: 'Alumni Access', desc: 'Stay connected with our strong alumni network for lifelong support.' },
              { num: '03', heading: 'Discussion Forums', desc: 'Engage in topic-based forums to ask, share, and learn.' },
              { num: '04', heading: 'Mentorship', desc: 'Get guidance from experienced alumni and professionals.' },
              { num: '05', heading: 'Networking Events', desc: 'Attend online and offline meetups, webinars, and events.' },
              { num: '06', heading: 'Collaborative Growth', desc: 'Work on projects and initiatives together with peers.' },
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
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Expand Your Network <span className="text-gray-500">→ Connect with peers, alumni, and mentors worldwide.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Collaborative Learning <span className="text-gray-500">→ Share ideas, solve problems, and grow together.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Access to Mentorship <span className="text-gray-500">→ Learn from experienced professionals and alumni.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Career Opportunities <span className="text-gray-500">→ Leverage connections for jobs, internships, and collaborations.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Lifelong Alumni Support <span className="text-gray-500">→ Stay connected beyond your learning journey.</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl text-[#1e3a8a]">✔</span>Confidence & Growth <span className="text-gray-500">→ Develop interpersonal and leadership skills through networking.</span></li>
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
          <div className="space-y-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to <span style={{ color: '#fff' }}>Connect & Collaborate?</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            Join our peer groups, alumni network, and discussion forums today. Build meaningful relationships, collaborate on ideas, and grow your career with the power of community.
          </p>
          <button className={
            `px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ` +
            (theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#fff] text-black hover:bg-[#0099cc]')
          }>
            Join the Community
          </button>
          </div>
          <div className="flex justify-center items-center h-full">
            <img
              src={c3}
              alt="Community Networking CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
