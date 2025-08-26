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
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    }>

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
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Every Great <span style={{ color: '#1e3a8a' }}>Idea</span> Begins with a Story
          </h1>
          <p className={`mt-4 max-w-3xl text-lg md:text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Our journey started with a simple vision  to make learning smarter, simpler, and accessible to everyone. Today, we’re a team of creators, innovators, and educators working together to turn that vision into reality.
          </p>
        </div>
      </section>

      {/* Our Instructors Section */}

      {/* CTA Section */}

      {/* Vision, Mission, Values Cards Section */}


      {/* Vision & Mission Section */}


      {/* Our Journey Timeline Section - Horizontal, Circular Milestones */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ color: '#1e3a8a' }}>Our Journey Through the Years</h2>
          <div className="relative flex flex-col items-center">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1e3a8a] z-0" style={{ transform: 'translateY(-50%)' }}></div>
            {/* Timeline Items */}
            <div className="relative w-full flex flex-row justify-between items-center z-10">
              {/* Timeline milestones: word above, year in circle, description below */}
              {[
                { year: '2018', word: 'Founded', desc: 'Platform founded with a mission to make quality education accessible to all.' },
                { year: '2019', word: 'Launch', desc: 'Launched our first set of online courses and reached 1,000 learners.' },
                { year: '2020', word: 'Growth', desc: 'Expanded to 3 countries and introduced live mentorship programs.' },
                { year: '2021', word: 'Award', desc: 'Awarded for innovation in digital learning and surpassed 10,000 students.' },
                { year: '2022', word: 'Partners', desc: 'Partnered with top institutions and launched scholarship initiatives.' },
                { year: '2023', word: 'AI', desc: 'Integrated AI-driven learning paths and reached 50,000+ learners.' },
              ].map((item, idx, arr) => (
                <div key={item.year} className="flex flex-col items-center w-32">
                  {/* One-word description above */}
                  <div className="mb-2 text-base font-semibold uppercase tracking-wide" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{item.word}</div>
                  {/* Circle with year */}
                  <div className="w-20 h-20 rounded-full border-4 border-[#1e3a8a] bg-white flex items-center justify-center shadow-lg text-2xl font-bold text-[#1e3a8a]">
                    {item.year}
                  </div>
                  {/* Connector dot (except last) */}
                  {idx < arr.length - 1 && (
                    <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-1 mb-1"></div>
                  )}
                  {/* Description below */}
                  <div className="mt-3 text-xs text-center font-medium" style={{ color: theme === 'dark' ? '#e0e0e0' : '#222' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Our Vision, Mission & Values
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
                <p className="text-gray-700">To make world-class education accessible and engaging for everyone, everywhere, at no cost.</p>
              </div>
            </div>
            {/* Vision Card */}
            <div className="rounded-2xl shadow-lg flex flex-col items-center bg-white overflow-hidden">
              <div className="relative w-full min-h-[9rem] max-h-44 flex items-center justify-center">
                <img src={visionImg} alt="Vision" className="absolute inset-0 w-full h-full object-fit" />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6 pt-10 text-center">
                <p className="text-gray-700">To inspire lifelong learning and empower individuals to achieve their fullest potential through innovative digital education.</p>
              </div>
            </div>
            {/* Values Card */}
            <div className="rounded-2xl shadow-lg flex flex-col items-center bg-white overflow-hidden">
              <div className="relative w-full min-h-[9rem] max-h-44 flex items-center justify-center">
                <img src={valuesImg} alt="Values" className="absolute inset-0 w-full h-full object-fit" />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6 pt-10 text-center">
                <p className="text-gray-700">We value inclusivity, innovation, and integrity, ensuring every learner is supported and inspired to succeed.</p>
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
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Awards & Certificates</h2>
            <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Recognizing Excellence, Celebrating Achievements
              We believe that learning and growth should always be celebrated. Our services and training programs are designed not only to build skills but also to recognize your hard work with meaningful certifications.</p>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
              <li>Excellence in Learner Experience 2023 – Education Innovation Forum</li>
              <li>Innovation in Online Learning 2023 - FinTech Excellence</li>
              <li>Top 100 Fastest Growing Companies 2024 - Business Insights</li>
              <li>ISO 9001:2015 Certified for Quality Management in Education</li>
            </ul>
          </div>
          {/* Image Right */}
          <div className="flex justify-center">
            <img src={awardsImg} alt="Awards & Certificates" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
          </div>
        </div>
      </section>


      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#fff' }}>Our Instructors</h2>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Instructor 1 */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-4">
              <img src={e1} alt="Aarav Mehta" className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#e6f7ff]" />
              <span className="text-sm text-gray-400 mb-1">Lead Online Educator</span>
              <h3 className="text-lg font-bold mb-2 text-[#1e3a8a]">Aarav Mehta</h3>
              <p className="text-gray-500 text-center text-sm mb-4">Specialist in digital pedagogy, Aarav designs interactive courses that make complex concepts easy for all learners.</p>
              <div className="flex gap-4 mt-auto">
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            {/* Instructor 2 */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-4">
              <img src={e2} alt="Sana Kapoor" className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#e6f7ff]" />
              <span className="text-sm text-gray-400 mb-1">STEM Curriculum Expert</span>
              <h3 className="text-lg font-bold mb-2 text-[#1e3a8a]">Sana Kapoor</h3>
              <p className="text-gray-500 text-center text-sm mb-4">Sana brings hands-on STEM learning to life, inspiring students to explore science, technology, and engineering online.</p>
              <div className="flex gap-4 mt-auto">
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            {/* Instructor 3 */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-4">
              <img src={e3} alt="Rohan Das" className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#e6f7ff]" />
              <span className="text-sm text-gray-400 mb-1">AI & Data Science Mentor</span>
              <h3 className="text-lg font-bold mb-2 text-[#1e3a8a]">Rohan Das</h3>
              <p className="text-gray-500 text-center text-sm mb-4">Rohan mentors students in artificial intelligence and analytics, making future-ready skills accessible to all.</p>
              <div className="flex gap-4 mt-auto">
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            {/* Instructor 4 */}
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-4">
              <img src={e4} alt="Meera Joshi" className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#e6f7ff]" />
              <span className="text-sm text-gray-400 mb-1">Community Learning Coach</span>
              <h3 className="text-lg font-bold mb-2 text-[#1e3a8a]">Meera Joshi</h3>
              <p className="text-gray-500 text-center text-sm mb-4">Meera supports learners of all backgrounds, fostering an inclusive and collaborative online education community.</p>
              <div className="flex gap-4 mt-auto">
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-[#1e3a8a] hover:text-[#0077b6] text-xl"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
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
            <h2 className="text-4xl font-bold mb-6 text-[#1e3a8a]">What We Think</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}  mb-4`}>At our core, we believe education should be accessible, engaging, and transformative for everyone. Our team is passionate about breaking barriers and creating opportunities for learners from all walks of life. We embrace innovation, inclusivity, and a commitment to lifelong learning, ensuring every student can reach their full potential in a digital world.</p>
            <ul className={`list-disc ${theme === 'dark' ? 'text-white' : 'text-black'} pl-5 space-y-2 `}>
              <li>Empowering students with free, high-quality resources</li>
              <li>Fostering a supportive and diverse learning community</li>
              <li>Leveraging technology to personalize education</li>
              <li>Encouraging curiosity, creativity, and growth</li>
            </ul>
          </div>
        </div>
      </section>




    </div>
  );
}
