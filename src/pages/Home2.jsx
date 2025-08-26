import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import home2Video from "../assets/home2hero.mp4";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.webp";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";
import logo10 from "../assets/10.png";

// Animated Counter Hook with scroll trigger
function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const elRef = useRef();

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;
    let observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and animate every time it enters view
          setCount(0);
          let start = 0;
          let end = typeof target === 'number' ? target : parseInt(target);
          if (isNaN(end)) return;
          let startTime = null;
          function animateCount(ts) {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
              ref.current = requestAnimationFrame(animateCount);
            } else {
              setCount(end);
            }
          }
          ref.current = requestAnimationFrame(animateCount);
        } else {
          // Optionally reset to 0 when out of view
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [target, duration]);

  return [count, elRef];
}


// Animated stat component for impact section
function ImpactStat({ end, suffix, label }) {
  const [count, elRef] = useCountUp(end);
  let display = count;
  if (end >= 1000) {
    display = count >= 1000 ? (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : count;
  }
  return (
    <div ref={elRef}>
      <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: '#1e3a8a' }}>
        {display}{suffix}
      </div>
      <div className="uppercase text-xs font-semibold text-[#222] tracking-wide">{label}</div>
    </div>
  );
}

export default function Home2() {
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
  const [showRegister, setShowRegister] = React.useState(null); // index of webinar or null
  const [registerForm, setRegisterForm] = React.useState({ name: '', email: '' });

  // Handle registration form input
  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle registration submit
  const handleRegisterSubmit = (e, webinar) => {
    e.preventDefault();
    if (!registerForm.name || !registerForm.email) return;
    const stored = localStorage.getItem('webinarRegistrations');
    const registrations = stored ? JSON.parse(stored) : [];
    registrations.push({
      ...registerForm,
      webinarTitle: webinar.title,
      webinarDate: webinar.date,
      webinarDescription: webinar.description,
      registeredAt: new Date().toISOString(),
    });
    localStorage.setItem('webinarRegistrations', JSON.stringify(registrations));
    setRegisterForm({ name: '', email: '' });
    setShowRegister(null);
    alert('Registration successful!');
  };
  const [webinars, setWebinars] = React.useState([]);
  React.useEffect(() => {
    const storedWebinars = localStorage.getItem("webinars");
    if (storedWebinars) {
      setWebinars(JSON.parse(storedWebinars));
    }
    const handleStorage = () => {
      const updated = localStorage.getItem("webinars");
      setWebinars(updated ? JSON.parse(updated) : []);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const offers = [
    {
      title: "Merit-Based Scholarships",
      description: "Apply for scholarships awarded to top-performing students to help cover your tuition.",
      bg: "bg-[#00BFFF]",
    },
    {
      title: "Financial Aid & Discounts",
      description: "Need-based financial support and special discounts make learning accessible for everyone.",
      bg: "bg-[#00BFFF]",
    },
    {
      title: "Free Trial & Affordable Plans",
      description: "Start with a free trial and choose from flexible, budget-friendly subscription options.",
      bg: "bg-[#00BFFF]",
    },
  ];
  const insights = [
  {
    title: "10K+",
    subtitle: "Students Enrolled",
  },
  {
    title: "500+",
    subtitle: "Expert Instructors",
  },
  {
    title: "120+",
    subtitle: "Courses Available",
  },
  {
    title: "95%",
    subtitle: "Student Satisfaction",
  },
];


  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
  const scrollRef = React.useRef(null);
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen  text-white' : 'min-h-screen  text-white'}`
    }>

      {/* Hero Section */}
      <section
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={home2Video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Learn Without Limits,<span style={{ color: '#1e3a8a' }}>Grow Without Boundaries</span>
          </h1>
          <p className={`mt-4 max-w-4xl text-lg md:text-xl ${theme === 'dark' ? 'text-fff' : 'text-fff'}`}>
            Learn from industry experts with engaging, practical lessons.
Turn knowledge into skills and skills into opportunities.
Your success story starts with just one course.
          </p>
          <button
            className={
              `mt-6 px-6 py-3 rounded-lg shadow transition font-semibold ` +
              (theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-[#00BFFF]' : 'bg-[#1e3a8a] text-white hover:bg-[#00BFFF]')
            }
            onClick={() => {
              const el = document.getElementById('upcoming');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </button>
        </div>
      </section>
      <section
        className={
          `w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" id="upcoming" style={{ color: '#1e3a8a' }}>Upcoming Webinars</h2>
          {webinars.length > 0 ? (
            <div className="grid  lg:grid-cols-3 gap-8">
              {webinars.map((webinar, idx) => (
                <div key={idx} className={
                  `rounded-xl shadow p-6 flex flex-col items-center ` +
                  (theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]')
                }>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#00BFFF' }}>{webinar.title}</h3>
                  <div className={theme === 'dark' ? 'text-gray-400 mb-2' : 'text-gray-600 mb-2'}>{webinar.date}</div>
                  <div className={theme === 'dark' ? 'text-gray-400 mb-2' : 'text-gray-600 mb-2'}>{webinar.time}</div>
                  <div className={theme === 'dark' ? 'text-gray-200 mb-4' : 'text-gray-800 mb-4'}>{webinar.description}</div>
                  <button
                    className={
                      `${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-500'} px-4 py-2 rounded mb-2 transition-colors`
                    }
                    onClick={() => setShowRegister(idx)}
                  >
                    Register
                  </button>
                  {showRegister === idx && (
                    <form className="w-full mt-2 space-y-2" onSubmit={e => handleRegisterSubmit(e, webinar)}>
                      <input
                        type="text"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterInput}
                        placeholder="Your Name"
                        className={
                          `border rounded px-3 py-2 w-full ` +
                          (theme === 'dark' ? 'bg-[#181818] text-white border-[#00BFFF]' : 'bg-white text-black border-gray-300')
                        }
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterInput}
                        placeholder="Your Email"
                        className={
                          `border rounded px-3 py-2 w-full ` +
                          (theme === 'dark' ? 'bg-[#181818] text-white border-[#00BFFF]' : 'bg-white text-black border-gray-300')
                        }
                        required
                      />
                      <div className="flex gap-2">
                        <button type="submit" className={
                          `${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-500'} rounded px-4 py-2 transition-colors`
                        }>Submit</button>
                        <button type="button" className={
                          `${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 text-black hover:bg-gray-400'} rounded px-4 py-2 transition-colors`
                        } onClick={() => setShowRegister(null)}>Cancel</button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={theme === 'dark' ? 'text-gray-400 text-center' : 'text-gray-500 text-center'}>No upcoming webinars at the moment.</p>
          )}
        </div>
      </section>

      {/* Scholarships & Financial Support Section */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#1e3a8a]' : 'bg-[#1e3a8a]'}`}>
        <div className="w-full mx-auto px-6 lg:px-8 grid text-justify lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Info */}
          <div className="flex-1 flex flex-col justify-center md:pr-8 mb-8 md:mb-0">
            <span className="uppercase text-[#FFF] font-semibold tracking-wide mb-2">Affordability & Access</span>
            <h2 className="text-4xl font-extrabold mb-2 text-[#b3d8f7]" style={{lineHeight:'1.1'}}>
              <span className="text-[#FFF] font-bold" style={{opacity:0.7}}>Scholarships & </span>
              <span className="text-[#FFF] font-bold">Financial Support</span>
            </h2>
            <p className="mb-6 text-[#FFF] text-base font-medium" style={{maxWidth:'500px'}}>
              We believe education should be accessible to everyone. Explore our scholarships, financial aid, and affordable plans designed to help you achieve your goals—no matter your background. Enjoy discounts, free trials, and more to make learning within reach for all.
            </p>
            <a
              href="/contactus"
              className="inline-block font-semibold px-8 py-3 rounded-full shadow transition-colors text-lg bg-[#FFF] text-[#1e3a8a] hover:from-[#0099cc] hover:to-[#00BFFF]"
              style={{minWidth:'180px', textAlign:'center'}}>
              Know More
            </a>
          </div>
          {/* Right Side Cards - 2x2 grid, visually aligned */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 shadow-lg bg-white text-[#1e3a8a] min-h-[120px] flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-2">Merit-Based Scholarships</h3>
              <p className="text-sm font-medium">Apply for scholarships awarded to top-performing students to help cover your tuition.</p>
            </div>
            <div className="rounded-xl p-6 shadow-lg bg-white text-[#1e3a8a] min-h-[120px] flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-2">Financial Aid & Discounts</h3>
              <p className="text-sm font-medium">Need-based financial support and special discounts make learning accessible for everyone.</p>
            </div>
            <div className="rounded-xl p-6 shadow-lg bg-white text-[#1e3a8a] min-h-[120px] flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-2">Community Driven</h3>
              <p className="text-sm font-medium">We foster a collaborative environment where users can share, review, and discover the best opportunities together.</p>
            </div>
            <div className="rounded-xl p-6 shadow-lg bg-white text-[#1e3a8a] min-h-[120px] flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-2">Innovation & Integrity</h3>
              <p className="text-sm font-medium">We value creativity, transparency, and ethical support in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#FFF]'}`}> 
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 bg-white/90 rounded-2xl shadow-lg border border-[#e0f2fe]">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-10 items-center">
            {/* Left: Large Heading */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-[#222]" style={{letterSpacing:'-1px'}}>
                We Empower Learners<br/>To Achieve More
              </h2>
            </div>
            {/* Right: Description and Button */}
            <div className="flex-1 flex flex-col items-start md:items-end">
              <p className="mb-4 text-[#222] text-base max-w-md font-medium">
                Whether you're upskilling for a new career, exploring the latest in tech, or seeking expert guidance, our platform delivers quality education, real-world skills, and a supportive community to help you succeed.
              </p>
              <a href="/aboutus" className="px-6 py-2 rounded-md font-semibold bg-[#1e3a8a] text-white shadow hover:from-[#0099cc] hover:to-[#00BFFF] transition-colors">Know More About Us</a>
            </div>
          </div>
          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[#1e3a8a] text-center mt-6">
            <ImpactStat end={10000} suffix="+" label="Students Enrolled" />
            <ImpactStat end={500} suffix="+" label="Expert Instructors" />
            <ImpactStat end={120} suffix="+" label="Courses Available" />
            <ImpactStat end={95} suffix="%" label="Student Satisfaction" />
          </div>
        </div>
      </section>




    <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#1e3a8a]'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-2 text-xl font-semibold tracking-widest uppercase" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
          Our Partners
        </div>
         
        <p className={theme === 'dark' ? 'text-white mb-10' : 'text-white mb-10'}>
          We collaborate with industry-leading organizations to deliver the best learning experience.
        </p>
        <div className="grid grid-cols-5 sm:grid-cols-4 gap-6 md:gap-8 justify-center items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 flex items-center justify-center h-24 transition-transform hover:scale-105" style={{ minWidth: '120px', minHeight: '80px' }}>
              <img src={logo} alt={`Partner ${idx + 1}`} className="h-12 object-contain max-w-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </section>


       

      <section
        className={`w-full py-16 flex items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#fff]'}`}
      >
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#fff' : '#1e3a8a' }}>Ready to Transform Your Career?</h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-white' : 'text-[#1e3a8a]'}`}>Join thousands of learners who have upskilled and advanced their careers with our expert-led online courses. Start your journey today!</p>
          <Link
            to="/contactus"
            className={`inline-block font-semibold px-8 py-4 rounded-lg shadow transition-colors text-xl ${theme === 'dark' ? 'bg-[#1e3a8a] text-[#00BFFF] hover:bg-gray-200' : 'bg-[#1e3a8a] text-[#fff] hover:bg-blue-100'}`}
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
