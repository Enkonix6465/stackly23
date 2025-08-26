import React from "react";
import blogHero from "../assets/blog.mp4";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.avif";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Study Tips & Productivity",
    desc: "Boost focus, manage time effectively, and build smart study habits.",
  },
  {
    name: "Career Growth",
    desc: "Learn strategies to prepare for interviews, networking, and professional success.",
  },
  {
    name: "E-Learning Trends",
    desc: "Stay updated with the latest innovations in digital learning and online education.",
  },
  {
    name: "Skill Development",
    desc: "Explore resources to upskill in communication, finance, technology, and more.",
  },
];

const features = [
  {
    title: "Mastering Online Learning",
    description:
      "Practical tips on how to stay consistent, focused, and motivated while learning online.",
    image: blog1,
    link: "/blog/1",
  },
  {
    title: "Future Skills You Need to Learn",
    description:
      "Discover the most in-demand skills for the next decade and how online courses can help you acquire them.",
    image: blog2,
    link: "/blog/2",
  },
  {
    title: "Balancing Studies and Career",
    description:
      "Learn how to effectively balance work, study, and personal growth in today’s fast-paced environment.",
    image: blog3,
    link: "/blog/3",
  },
];

const services = [
  {
    name: "Courses & Programs",
    features: [
      "Beginner Friendly",
      "Self-paced & Live Options",
      "Certified Curriculum",
      "Career-Oriented",
    ],
  },
  {
    name: "Mentorship",
    features: [
      "1-on-1 Guidance",
      "Expert Instructors",
      "Goal Setting",
      "Personalized Roadmaps",
    ],
  },
  {
    name: "Certifications",
    features: [
      "Globally Recognized",
      "Skill Validation",
      "Practical Assessments",
      "Career Boosting",
    ],
  },
  {
    name: "Workshops",
    features: [
      "Hands-on Training",
      "Industry Projects",
      "Short Duration",
      "Networking Opportunity",
    ],
  },
];

export default function BlogHero() {
  const [theme, setTheme] = React.useState("light");
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem("theme") || "light";
        setTheme(newTheme);
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
      };
    }
  }, []);

  const [latestBlogs, setLatestBlogs] = React.useState([]);
  React.useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      setLatestBlogs(JSON.parse(stored));
    }
  }, []);

  return (
    <div
      className={
        theme === "dark"
          ? "min-h-screen bg-black text-white"
          : "min-h-screen bg-white text-black"
      }
    >
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center"
        style={{ color: theme === "dark" ? "#fff" : "#222" }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={blogHero}
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="relative text-center px-6"
          style={{ color: theme === "dark" ? "#fff" : "#fff" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore Our <span style={{ color: "#1e3a8a" }}>Learning Blogs</span>
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-white" : "text-white"
            }`}
          >
            Stay updated with{" "}
            <span className="font-semibold" style={{ color: "#1e3a8a" }}>
              study tips, e-learning trends, career advice,
            </span>{" "}
            and strategies to help you succeed in education and beyond.
          </p>
        </div>
      </section>

      {/* Latest Blogs */}
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Latest <span className="text-[#1e3a8a]">Blogs</span>
          </h2>
          {latestBlogs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {latestBlogs.map((blog, idx) => (
                <article
                  key={idx}
                  className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${
                    theme === "dark"
                      ? "bg-[#222] text-white"
                      : "bg-gray-50 text-black"
                  }`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {blog.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-2 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {blog.description}
                    </p>
                    <div
                      className={`text-xs mb-2 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      By {blog.author}
                    </div>
                    <div
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {new Date(blog.createdAt).toLocaleString()}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p
              className={`text-center text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              No blogs added yet.
            </p>
          )}
        </div>
      </section>

      {/* Featured Articles */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-[#222]" : "bg-[#1e3a8a]"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span style={{ color: "#fff" }}>Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <article
                key={index}
                className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${
                  theme === "dark"
                    ? "bg-[#222] text-white"
                    : "bg-gray-50 text-black"
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      theme === "dark" ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                  <Link
                    to={feature.link}
                    className="text-[#1e3a8a] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore by <span style={{ color: "#1e3a8a" }}>Categories</span>
            </h2>
            <p
              className={`text-lg mb-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Our blogs cover{" "}
              <span className="font-semibold" style={{ color: "#1e3a8a" }}>
                study strategies, skill-building, online learning tools,
              </span>{" "}
              and career insights to support lifelong learners.
            </p>
            <p
              className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
            >
              Whether you’re a student, professional, or educator, explore
              content curated to help you grow in academics, career, and
              personal development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${
                  theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"
                }`}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#1e3a8a" }}
                >
                  {cat.name}
                </h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-200" : "text-gray-600"
                  }
                >
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-[#222]" : "bg-[#1e3a8a]"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Service <span style={{ color: "#fff" }}>Comparison</span>
          </h2>
          <div className="overflow-x-auto">
            <table
              className={`w-full border rounded-lg shadow-md text-left ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <thead
                className={
                  theme === "dark"
                    ? "bg-[#111] text-white"
                    : "bg-[#000] text-white"
                }
              >
                <tr>
                  <th className="px-6 py-3">Features</th>
                  {services.map((service, idx) => (
                    <th key={idx} className="px-6 py-3 text-center">
                      {service.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                className={
                  theme === "dark"
                    ? "bg-[#222] divide-y divide-gray-700"
                    : "bg-white divide-y divide-gray-200"
                }
              >
                {services[0].features.map((_, i) => (
                  <tr key={i}>
                    <td
                      className={`px-6 py-4 font-semibold ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {services[0].features[i]}
                    </td>
                    {services.map((service, j) => (
                      <td
                        key={j}
                        className={`px-6 py-4 text-center ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {service.features[i] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Myths & Facts */}
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ color: "#1e3a8a" }}
          >
            Myths & Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">Myth:</h3>
                <p>Online learning isn’t as effective as classroom learning.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Studies show that well-structured online courses can be just
                  as effective, and often more flexible, than traditional
                  learning.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">Myth:</h3>
                <p>You need advanced tech skills to learn online.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Most platforms are user-friendly and designed for learners of
                  all levels to navigate easily.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">Myth:</h3>
                <p>Online certifications don’t hold value in careers.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Industry-recognized online certifications are valued by
                  employers and enhance career opportunities.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">Myth:</h3>
                <p>Learning online is isolating and without support.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Online learning includes discussion forums, peer groups, and
                  mentorship to foster collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (unchanged) */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#fff' }}>
            Unlock Exclusive Insights & Community!
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Discover the latest trends, connect with fellow readers, and get early access to special blog content. Be part of a vibrant learning community your next big idea starts here!
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white text-[#1e3a8a] hover:bg-[#e6f7ff] hover:text-[#1e3a8a] border border-[#1e3a8a]"
          >
            Join the Blog Community
          </a>
        </div>
      </section>
    </div>
  );
}
