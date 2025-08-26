import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import heroVideo from "../assets/home1hero.mp4";
import HomeImg from "../assets/home.avif";
import impactImg from "../assets/impact.jpg";

// ✅ Import course images
import businessImg from "../assets/business.jpg";
import englishImg from "../assets/english.jpg";
import computerImg from "../assets/computer.jpg";
import dataScienceImg from "../assets/datascience.jpg";
import graphicImg from "../assets/graphic.jpeg";
import arts from "../assets/arts.jpg";
import instructorImg from "../assets/instructor.jpg";
import learningImg from "../assets/learning.jpg";
import communityImg from "../assets/community.jpg";

// Helper for count up animation
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let startTime = null;
    function animateCountUp(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCountUp);
      }
    }
    ref.current = requestAnimationFrame(animateCountUp);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return count;
}

// Main Home1 component
export default function Home1({ theme = "light" }) {
  // Courses array
  const courses = [
    {
      title: "English For Today",
      category: "Language",
      lecturer: "Admin",
      price: "Free",
      duration: "16h 30m",
      lessons: "0 Lessons",
      image: englishImg,
      students: 10,
      rating: 3,
    },
    {
      title: "Data Science Basics",
      category: "Technology",
      lecturer: "Admin",
      price: "$50",
      duration: "20h 10m",
      lessons: "6 Lessons",
      image: dataScienceImg,
      students: 25,
      rating: 5,
    },
    {
      title: "Graphic Design",
      category: "Design",
      lecturer: "Admin",
      price: "$40",
      duration: "15h 00m",
      lessons: "4 Lessons",
      image: graphicImg,
      students: 12,
      rating: 4,
    },
    {
      title: "Creative Arts",
      category: "Arts",
      lecturer: "Admin",
      price: "$20",
      duration: "12h 15m",
      lessons: "3 Lessons",
      image: arts,
      students: 8,
      rating: 4,
    },
  ];

  // Features array
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from professionals with years of experience in their field.",
      image: instructorImg,
    },
    {
      title: "Flexible Learning",
      description: "Access our courses anytime, anywhere, at your own pace.",
      image: learningImg,
    },
    {
      title: "Global Community",
      description: "Join a worldwide network of learners and professionals.",
      image: communityImg,
    },
  ];

  const [courseIndex, setCourseIndex] = useState(0);
  const nextCourse = () => setCourseIndex((i) => (i + 3) % courses.length);
  const prevCourse = () => setCourseIndex((i) => (i - 3 + courses.length) % courses.length);

  let visibleCourses = courses.slice(courseIndex, courseIndex + 3);
  if (visibleCourses.length < 3) {
    visibleCourses = visibleCourses.concat(
      courses.slice(0, 3 - visibleCourses.length)
    );
  }

  return (
    <div
      className="min-h-screen bg-white text-black"
    >

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-white">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#1e3a8a" }}>
            Discover<span className="text-white">.Learn.</span>Achieve
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-white">
            Learn anytime, anywhere with expert-led courses, live classes, and
            industry-recognized certifications designed to boost your career.
          </p>
          <button className="bg-white text-[#1e3a8a] px-6 py-3 mt-5 rounded-lg transition-colors font-semibold border border-[#1e3a8a] hover:bg-[#f0f4fa]">
            Start Learning Today
          </button>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="w-full py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ color: "#1e3a8a" }}
          >
            Popular Courses
          </h2>
          <p className="text-center text-lg mb-10 text-black">
            Explore our top-rated courses and start learning today.
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={prevCourse}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow bg-[#1e3a8a] text-white hover:bg-[#274690] mr-4"
            >
              &#8592;
            </button>
            <div className="grid lg:grid-cols-3 gap-6 flex-1">
              {visibleCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-[#f5f7fa] rounded-lg shadow hover:shadow-lg overflow-hidden relative border border-[#e0e0e0]"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[#1e3a8a] text-white text-sm font-semibold px-3 py-1 rounded">
                      {course.price}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < course.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#1e3a8a" }}>{course.title}</h3>
                    <p className="text-sm text-[#1e3a8a]">
                      Lecturer{" "}
                      <span className="text-[#1e3a8a]">{course.lecturer}</span> in{" "}
                      {course.category}
                    </p>
                    <div className="flex justify-between items-center mt-3 text-sm text-[#1e3a8a]">
                      <span> {course.students}</span>
                      <span> {course.duration}</span>
                      <span> {course.lessons}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextCourse}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow bg-[#1e3a8a] text-white hover:bg-[#274690] ml-4"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={HomeImg}
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#fff" }}
            >
              Step Into the Future of Learning
            </h2>
            <ul className="space-y-3 text-white">
              <li>✔ Access a wide variety of carefully curated online courses to boost your academics, career, and personal growth.</li>
              <li>✔ Learn directly from experienced mentors through interactive lessons and practical projects.</li>
              <li>✔ Courses tailored for every stage — from beginners to professionals.</li>
              <li>✔ Flexible schedules that let you learn at your own pace, anytime and anywhere.</li>
              <li>✔ Career-focused curriculum designed with industry demands in mind.</li>
              <li>✔ Join a global community of learners, collaborate, and grow together.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-wide" style={{ color: "#1e3a8a" }}>Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1: Expert Instructors */}
            <div className="relative group bg-[#1e3a8a] border border-[#e0e0e0] rounded-2xl shadow-lg h-72 flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-transform">
              {/* Icon */}
              <div className="mb-4 z-10">
                <svg width="48" height="48" fill="none" stroke="#f5c16c" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              </div>
              <div className="z-10">
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#fff" }}>Expert Instructors</h3>
                <p className="text-white mb-4">Learn from professionals with years of experience in their field.</p>
               </div>
              {/* Hover Image Slide Up */}
              <img
                src={instructorImg}
                alt="Expert Instructors"
                className="absolute left-0 bottom-0 w-full h-full object-cover rounded-2xl translate-y-full group-hover:translate-y-0 opacity-100 transition-transform duration-500 ease-in-out z-0"
                style={{ transitionProperty: 'transform' }}
              />
              <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-colors duration-500 z-0"></div>
            </div>
            {/* Card 2: Flexible Learning */}
            <div className="relative group bg-[#1e3a8a] border border-[#e0e0e0] rounded-2xl shadow-lg h-72 flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-transform">
              <div className="mb-4 z-10">
                <svg width="48" height="48" fill="none" stroke="#f5c16c" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
              </div>
              <div className="z-10">
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#fff" }}>Flexible Learning</h3>
                <p className="text-white mb-4">Access our courses anytime, anywhere, at your own pace.</p>
               </div>
              <img
                src={learningImg}
                alt="Flexible Learning"
                className="absolute left-0 bottom-0 w-full h-full object-cover rounded-2xl translate-y-full group-hover:translate-y-0 opacity-100 transition-transform duration-500 ease-in-out z-0"
                style={{ transitionProperty: 'transform' }}
              />
              <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-colors duration-500 z-0"></div>
            </div>
            {/* Card 3: Global Community */}
            <div className="relative group bg-[#1e3a8a] border border-[#e0e0e0] rounded-2xl shadow-lg h-72 flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-transform">
              <div className="mb-4 z-10">
                <svg width="48" height="48" fill="none" stroke="#f5c16c" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
              </div>
              <div className="z-10">
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#fff" }}>Global Community</h3>
                <p className="text-white mb-4">Join a worldwide network of learners and professionals.</p>
               </div>
              <img
                src={communityImg}
                alt="Global Community"
                className="absolute left-0 bottom-0 w-full h-full object-cover rounded-2xl translate-y-full group-hover:translate-y-0 opacity-100 transition-transform duration-500 ease-in-out z-0"
                style={{ transitionProperty: 'transform' }}
              />
              <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-colors duration-500 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-wide uppercase" style={{ color: "#fff" }}>
            What Our Students Say
          </h2>
          <div className="flex flex-row gap-8 justify-center items-stretch w-full">
            {/* Testimonial 1 */}
            <div className="bg-[#f5f7fa] border border-[#e0e0e0] p-6 text-left flex flex-col justify-between items-start min-w-[320px] max-w-[350px] w-full h-[340px] min-h-[340px] rounded-xl">
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
              {/* Feedback */}
              <p className="text-gray-700 mb-6">
                If you ipsum dolor sit amet, conses ctetur adipisicing elit, sed do lor sit amet,
                conse ctetur. If you are in an emergency situation, do not worry, we provide call service.
              </p>
              {/* Student Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#1e3a8a] font-semibold">Chicana Males</h4>
                  <p className="text-gray-500 text-sm">Co-Founder</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-[#f5f7fa] border border-[#e0e0e0] p-6 text-left flex flex-col justify-between items-start min-w-[320px] max-w-[350px] w-full h-[340px] min-h-[340px] rounded-xl">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                If you ipsum dolor sit amet, conses ctetur adipisicing elit, sed do lor sit amet,
                conse ctetur. If you are in an emergency situation, do not worry, we provide call service.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#1e3a8a] font-semibold">Richard Coste</h4>
                  <p className="text-gray-500 text-sm">Marketing</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-[#f5f7fa] border border-[#e0e0e0] p-6 text-left flex flex-col justify-between items-start min-w-[320px] max-w-[350px] w-full h-[340px] min-h-[340px] rounded-xl">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                If you ipsum dolor sit amet, conses ctetur adipisicing elit, sed do lor sit amet,
                conse ctetur. If you are in an emergency situation, do not worry, we provide call service.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#1e3a8a] font-semibold">Richard Cost</h4>
                  <p className="text-gray-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
        {/* CTA Section (matches Home2 style) */}
        <section
          className="w-full py-16 flex items-center justify-center bg-[#fff]"
        >
          <div className="max-w-2xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-4 text-[#1e3a8a]">Your Career Growth Starts Here!</h2>
            <p className="text-lg mb-8 text-[#1e3a8a]">Practical, hands-on learning tailored to your goals and schedule.
Stay ahead with flexible courses designed for real-world success.</p>
            <a
              href="/contactus"
              className="inline-block font-semibold px-8 py-4 rounded-lg shadow transition-colors text-xl bg-[#1e3a8a] text-[#fff] hover:bg-[#fff]"
            >
              Start Learning today
            </a>
          </div>
        </section>
       



    </div>

  );
}
