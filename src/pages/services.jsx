import React from "react";
import { Link } from "react-router-dom";
import serviceHeroVideo from "../assets/servicehero.mp4";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

const services = [
  {
    title: "Courses & Programs",
    description:
      "We offer a wide range of subjects including Technology, Business, Arts, and more. Our programs are structured into beginner, intermediate, and advanced levels, ensuring that learners of all stages can progress smoothly. With flexible learning paths and career-focused modules, you’ll gain both knowledge and practical experience that make you job-ready.",
    image: s1,
    link: "/courses-programs",
  },
  {
    title: "Live Classes & Mentorship",
    description:
      "Join interactive live classes and receive guidance from industry experts through one-on-one mentorship or group sessions. Our focus is on real-time doubt clearing, personalized feedback, and helping you gain clarity on complex topics. Learn directly from professionals and build the confidence to apply your skills effectively.",
    image: s2,
    link: "/live-classes-mentorship",
  },
  {
    title: "Certifications & Career Support",
    description:
      "Earn industry-recognized certifications upon course completion and prepare for your career with dedicated support. We help you with resume building, interview preparation, and placement opportunities. Our career-focused programs ensure you don’t just learn — you get job-ready with the skills companies demand today.",
    image: s3,
    link: "/certifications-career-support",
  },
  {
    title: "Skill Development Workshops",
    description:
      "Take part in short-term bootcamps and workshops on trending topics such as Artificial Intelligence, Data Science, Digital Marketing, and more. These hands-on sessions are designed to quickly upskill you with practical knowledge, enabling you to stay ahead in today’s competitive market.",
    image: s4,
    link: "/skill-development-workshops",
  },
  {
    title: "Learning Resources & Tools",
    description:
      "Access a wide range of resources including e-books, recorded lectures, practice assignments, and quizzes. Learn on-the-go with our mobile app, and download study materials to continue learning anytime, anywhere. Our resources are designed to help you reinforce knowledge and track progress effectively.",
    image: s5,
    link: "/learning-resources-tools",
  },
  {
    title: "Community & Networking",
    description:
      "Collaborate and grow with our vibrant community of learners, mentors, and alumni. Engage in peer learning groups, join discussion forums, and become part of an active alumni network. Build meaningful professional connections that will support your learning and career journey.",
    image: s6,
    link: "/community-networking",
  },
];

export default function ServiceHero() {
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
          src={serviceHeroVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Elevate Your <span style={{ color: '#1e3a8a' }}>Experience</span>
          </h1>
          <p className={`mt-6 text-xl md:text-2xl max-w-3xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
          >
            Explore our curated services in Artificial Intelligence, Web Development, Data Science, Blockchain, Cybersecurity, and Cloud Computing. 
            Tailored solutions that empower your learning journey and help you achieve your career goals.
          </p>
        </div>
      </section>
      {/* Service Steps Section */}
      

      {/* Services Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Explore Our services</h2>
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 items-center gap-6"
              >
                {/* Image */}
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>{service.title}</h3>
                  <p className={(theme === 'dark' ? 'text-gray-200 mb-6' : 'text-gray-700 mb-6') + ' text-justify'}>{service.description}</p>
                  <Link
                    to={service.link}
                    className={
                      `px-6 py-2 font-semibold rounded transition inline-block ` +
                      (theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400')
                    }
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={
  `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#1e3a8a]'}`
}>
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-10" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>Our Values</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className={`rounded-xl shadow-md p-8 text-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`}>
        <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Excellence</h3>
        <p className="text-base">We strive for the highest standards in everything we do, delivering quality education and support to empower every learner.</p>
      </div>
      <div className={`rounded-xl shadow-md p-8 text-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`}>
        <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Innovation</h3>
        <p className="text-base">We embrace new ideas and technologies, ensuring our programs are always relevant and future-ready for the evolving world.</p>
      </div>
      <div className={`rounded-xl shadow-md p-8 text-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`}>
        <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Community</h3>
        <p className="text-base">We foster a supportive and inclusive environment where learners, mentors, and alumni grow together and help each other succeed.</p>
      </div>
    </div>
  </div>
</section>


      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>How to Get Started</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>Browse Services</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Explore our range of technology and career-focused services to find what fits your goals.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>Connect with Experts</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Reach out to our instructors and advisors for guidance and personalized recommendations.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>Enroll & Learn</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Sign up for courses, workshops, or consulting sessions and start your learning journey.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')
              }>
                <span className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e3a8a' }}>Achieve Success</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Apply your new skills, earn certificates, and advance your career with our support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tools Section */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#000]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#fff' }}>Technology & Tools</h2>
          <div className="flex  md:flex-row md:items-start gap-10">
            {/* Left: Paragraph */}
            <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start mb-8 md:mb-0">
              <p
  className={`text-lg text-justify ${
    theme === "dark" ? "text-white" : "text-white"
  }`}
  style={{ maxWidth: "400px" }}
>
  We empower your learning with the latest industry-standard technologies and tools, 
  ensuring you gain hands-on experience that truly matters. 
  Our programs go beyond theory, focusing on practical application through real projects, 
  case studies, and interactive challenges. 
  Every course is designed in collaboration with industry experts, so you learn the 
  exact skills companies are looking for today. 
  With dedicated mentorship and continuous feedback, we help you build confidence 
  alongside your technical expertise. 
  Whether you are starting your career or upgrading your skills. </p>

            </div>
            {/* Right: 2x2 Grid of 4 boxes */}
            <div className="md:w-1/2 w-full grid  sm:grid-cols-2 gap-6">
              {/* AI/ML */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-[#1e3a8a]'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>AI & Machine Learning</h3>
                <ul className="list-disc ml-5">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                </ul>
              </div>
              {/* Web Dev */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-[#1e3a8a]'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Web Development</h3>
                <ul className="list-disc ml-5">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Django</li>
                </ul>
              </div>
              {/* Data Science */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-[#1e3a8a]'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Data Science & Analytics</h3>
                <ul className="list-disc ml-5">
                  <li>Python</li>
                  <li>R</li>
                  <li>Tableau</li>
                </ul>
              </div>
              {/* Blockchain & Cloud */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-[#1e3a8a]'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Blockchain & Cloud</h3>
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

       
    <section className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>Our Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`}>
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>$19<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Access to 3 courses</li>
                <li>✔️ Community Support</li>
                <li>✔️ Certificate of Completion</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400'}`}>Choose Basic</button>
            </div>
            {/* Pro Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 ${theme === 'dark' ? 'bg-[#181818] border-[#1e3a8a] text-white' : 'bg-white border-[#1e3a8a] text-[#1e3a8a]'}`}>
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>$49<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Access to all courses</li>
                <li>✔️ Priority Support</li>
                <li>✔️ Certificate & Projects</li>
                <li>✔️ Monthly Webinars</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400'}`}>Choose Pro</button>
            </div>
            {/* Enterprise Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-[#1e3a8a]'}`}>
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#1e3a8a' : '#1e3a8a' }}>$99<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Unlimited Users</li>
                <li>✔️ Dedicated Account Manager</li>
                <li>✔️ Custom Integrations</li>
                <li>✔️ All Pro Features</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#1e3a8a] text-white hover:bg-blue-400' : 'bg-[#1e3a8a] text-white hover:bg-blue-400'}`}>Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
      <section className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#1e3a8a]'}`
      }>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>Ready to Join Our Journey?</h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Become part of our award-winning community and unlock new opportunities for growth, learning, and success. Connect with us today to start your journey!</p>
        <a href="/contactus" className={
          `inline-block font-bold py-3 px-8 rounded-full shadow-lg transition ` +
          (theme === 'dark' ? 'bg-[#fff] text-[#1e3a8a] hover:bg-blue-400' : 'bg-[#fff] text-[#1e3a8a] hover:bg-blue-400')
        }>Contact Us</a>
      </div>
    </section>
     
    </div>
  );
}
