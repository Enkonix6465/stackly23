import React from "react";
import blogHero from "../assets/blog.mp4";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.avif";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Personal Finance",
    desc: "Master budgeting, saving, and money management tips.",
  },
  {
    name: "Investments",
    desc: "Stay updated on stocks, mutual funds, and wealth strategies.",
  },
  {
    name: "Business & Entrepreneurship",
    desc: "Learn business finance, growth strategies, and success stories.",
  },
  {
    name: "Financial Technology",
    desc: "Discover the role of fintech in shaping the future of money.",
  },
];

const features = [
  {
    title: "Building Strong Financial Habits",
    description:
      "Learn step-by-step how to save smarter, avoid debt traps, and plan your financial future effectively.",
    image: blog1,
    link: "/blog/1",
  },
  {
    title: "Beginner’s Guide to Investments",
    description:
      "From mutual funds to stock markets, understand how to start investing with confidence and low risk.",
    image: blog2,
    link: "/blog/2",
  },
  {
    title: "Top Skills for the Future of Work",
    description:
      "Explore essential skills like digital literacy, financial knowledge, and entrepreneurship to stay career-ready.",
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
            Explore Our <span style={{ color: "#1e3a8a" }}>Blogs</span>
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-white" : "text-white"
            }`}
          >
            Stay updated with expert tips, insights, and stories in{" "}
            <span className="font-semibold" style={{ color: "#1e3a8a" }}>
              Finance, Learning, Career Growth
            </span>{" "}
            and more. Learn, grow, and achieve your goals with us!
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
              Our blogs are organized to make learning easier — covering{" "}
              <span className="font-semibold" style={{ color: "#1e3a8a" }}>
                Finance, Investments, Business,
              </span>{" "}
              and the future of learning through technology.
            </p>
            <p
              className={
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }
            >
              Dive into content curated for students, professionals, and
              entrepreneurs. Gain insights, tips, and strategies that help you
              stay ahead in finance and career development.
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
                <p>Online courses are not as valuable as traditional ones.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Accredited online courses and certifications are highly
                  recognized and career-relevant.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">Myth:</h3>
                <p>You need a finance degree to manage money effectively.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Anyone can learn personal finance and investing through guided
                  online resources.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">Myth:</h3>
                <p>Certifications don’t help in career growth.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Industry-recognized certifications add credibility and boost
                  your resume.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <h3 className="text-red-600 font-bold">Myth:</h3>
                <p>Learning online is lonely and without support.</p>
              </div>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold">Fact:</h3>
                <p>
                  Modern platforms provide mentorship, communities, and peer
                  support for learners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
