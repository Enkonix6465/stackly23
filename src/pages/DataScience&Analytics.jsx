import React, { useState } from "react";
import d1 from "../assets/b1.avif";
import data from "../assets/data.mp4";

const faqs = [
	{
		question: "What types of certifications do you offer?",
		answer: "We provide industry-recognized certifications in finance, business, and technology that validate your skills and enhance your career opportunities.",
	},
	{
		question: "Are your certifications globally recognized?",
		answer: "Yes, our certifications are accredited and recognized by leading organizations and employers worldwide.",
	},
	{
		question: "Do you offer career guidance after certification?",
		answer: "Absolutely! Our career support includes resume building, interview preparation, and job placement assistance.",
	},
	{
		question: "Can I study at my own pace?",
		answer: "Yes, our certification programs are flexible and designed to fit your schedule, whether you’re a student or working professional.",
	},
	{
		question: "Will I get hands-on experience?",
		answer: "Yes, we focus on practical projects and real-world case studies to ensure you’re job-ready after completing your certification.",
	},
];

export default function CertificationsCareerSupportPage() {
	const [theme, setTheme] = useState("light");
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
	const [openIndex, setOpenIndex] = useState(null);
	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
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
				className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden"
				style={{ color: theme === "dark" ? "#fff" : "#fff" }}
			>
				{/* Background Video */}
				<video
					className="absolute top-0 left-0 w-full h-full object-cover"
					src={data}
					autoPlay
					loop
					muted
					playsInline
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
				<div className="relative z-10 px-6 flex flex-col items-center justify-center h-full">
					<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug">
						Certifications & Career Support
					</h1>
					<p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white">
						Get certified, build your resume, prepare for interviews, and receive
						placement support—all in one place. Our platform is dedicated to
						helping you become career-ready with recognized certificates and
						expert guidance.
					</p>
				</div>
			</section>

			{/* Certifications & Career Support Section */}
			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#222]" : "bg-[#1e3a8a]"
				}`}
			>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
					{/* Left Image */}
					<div className="flex justify-center">
						<img
							src={d1}
							alt="Certifications & Career Support"
							className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
						/>
					</div>
					{/* Right Content */}
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight">
							Your Pathway to Career Success
						</h2>
						<ul className="space-y-4 text-base sm:text-lg">
							<li className="flex items-center">
								<span
									className={`w-3 h-3 rounded-full mr-3 ${
										theme === "dark" ? "bg-white" : "bg-black"
									}`}
								></span>
								Industry-Recognized Certificates for All Programs
							</li>
							<li className="flex items-center">
								<span
									className={`w-3 h-3 rounded-full mr-3 ${
										theme === "dark" ? "bg-white" : "bg-black"
									}`}
								></span>
								Career-Ready Learning Paths & Programs
							</li>
							<li className="flex items-center">
								<span
									className={`w-3 h-3 rounded-full mr-3 ${
										theme === "dark" ? "bg-white" : "bg-black"
									}`}
								></span>
								Resume Building & LinkedIn Profile Optimization
							</li>
							<li className="flex items-center">
								<span
									className={`w-3 h-3 rounded-full mr-3 ${
										theme === "dark" ? "bg-white" : "bg-black"
									}`}
								></span>
								Live Interview Preparation Sessions
							</li>
							<li className="flex items-center">
								<span
									className={`w-3 h-3 rounded-full mr-3 ${
										theme === "dark" ? "bg-white" : "bg-black"
									}`}
								></span>
								Placement Support & Job Referrals
							</li>
							<li className="flex items-center">
								<span
									className={`w-3 h-3 rounded-full mr-3 ${
										theme === "dark" ? "bg-white" : "bg-black"
									}`}
								></span>
								Ongoing Career Mentorship
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Key Features / What You’ll Get */}
			<section
				className={`w-full py-16 ${
					theme === "dark" ? "bg-[#181818] text-white" : "bg-[#e6f7ff] text-black"
				}`}
			>
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
						Key Features / What You’ll Get
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-2 gap-10">
						{[
							{
								num: "01",
								heading: "Certification-Focused Curriculum",
								desc: "Courses designed to help you earn valuable, industry-recognized certificates.",
							},
							{
								num: "02",
								heading: "Career Support",
								desc: "Resume building, LinkedIn optimization, and job placement assistance.",
							},
							{
								num: "03",
								heading: "Live Interview Prep",
								desc: "Participate in mock interviews and get real-time feedback from experts.",
							},
							{
								num: "04",
								heading: "Portfolio Projects",
								desc: "Build and showcase real-world projects to impress employers.",
							},
							{
								num: "05",
								heading: "Mentorship & Guidance",
								desc: "Ongoing support from experienced mentors throughout your journey.",
							},
							{
								num: "06",
								heading: "Flexible Learning",
								desc: "Access live sessions or recordings and learn at your own pace.",
							},
						].map((item, idx) => (
							<div key={item.num} className="flex items-start mb-6">
								<div className="relative flex-shrink-0 mr-4">
									<span
										className="text-5xl font-extrabold text-black"
										style={{
											background:
												"linear-gradient(90deg, #1e3a8a 60%, transparent 60%)",
											padding: "0.1em 0.5em",
											borderRadius: "0.2em",
											color: "#111",
											display: "inline-block",
										}}
									>
										{item.num}
									</span>
								</div>
								<div>
									<h3 className="text-xl font-bold mb-1 text-black">
										{item.heading}
									</h3>
									<p className="text-gray-600 text-base max-w-md">
										{item.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits / Outcomes */}
			<section
				className={`w-full py-16 ${
					theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"
				}`}
			>
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
						Benefits / Outcomes
					</h2>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
						<li className="flex items-start gap-3">
							<span className="text-2xl text-[#1e3a8a]">✔</span>
							Get Certified{" "}
							<span className="text-gray-500">
								→ Earn certificates that boost your resume and LinkedIn profile.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-2xl text-[#1e3a8a]">✔</span>
							Career-Ready Skills{" "}
							<span className="text-gray-500">
								→ Build practical skills for real-world roles.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-2xl text-[#1e3a8a]">✔</span>
							Resume & Interview Prep{" "}
							<span className="text-gray-500">
								→ Get expert help with resume building and interview practice.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-2xl text-[#1e3a8a]">✔</span>
							Placement Support{" "}
							<span className="text-gray-500">
								→ Access job referrals and placement assistance.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-2xl text-[#1e3a8a]">✔</span>
							Portfolio Development{" "}
							<span className="text-gray-500">
								→ Build and showcase projects to employers.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-2xl text-[#1e3a8a]">✔</span>
							Mentorship{" "}
							<span className="text-gray-500">
								→ Ongoing guidance from industry experts.
							</span>
						</li>
					</ul>
				</div>
			</section>

			{/* Frequently Asked Questions */}
			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#181818]" : "bg-gray-50"
				}`}
			>
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
						Frequently Asked Questions
					</h2>
					<div className="grid lg:grid-cols-2 gap-6">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ${
									theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"
								}`}
								onClick={() => toggleFAQ(index)}
							>
								<div className="flex justify-between items-center">
									<h3 className="text-lg font-semibold">{faq.question}</h3>
									<span
										className="font-bold text-xl"
										style={{ color: "#1e3a8a" }}
									>
										{openIndex === index ? "-" : "+"}
									</span>
								</div>
								{openIndex === index && (
									<p
										className={
											theme === "dark"
												? "mt-4 text-gray-200"
												: "mt-4 text-gray-600"
										}
									>
										{faq.answer}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#fff' : '#111' }}>
            Ready to Take the Next Step?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Join thousands of successful learners who have transformed their careers with our certifications. Sign up now and unlock your potential!
          </p>
          <a
            href="#"
            className={`inline-block px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#fff] text-[#1e3a8a] hover:bg-[#e6f7ff]'
                : 'bg-[#1e3a8a] text-white hover:bg-[#005bb5]'
            }`}
          >
            Get Started Today
          </a>
        </div>
			</section>
		</div>
	);
}