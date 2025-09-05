
import React, { useState, useEffect } from "react";
import d1 from "../assets/b1.avif";
import data from "../assets/data.mp4";

const translations = {
	English: {
		heroTitle: "Certifications & Career Support",
		heroDesc: "Get certified, build your resume, prepare for interviews, and receive placement support all in one place. Our platform is dedicated to helping you become career-ready with recognized certificates and expert guidance.",
		sectionTitle: "Your Pathway to Career Success",
		sectionList: [
			"Industry-Recognized Certificates for All Programs",
			"Career-Ready Learning Paths & Programs",
			"Resume Building & LinkedIn Profile Optimization",
			"Live Interview Preparation Sessions",
			"Placement Support & Job Referrals",
			"Ongoing Career Mentorship",
		],
		featuresTitle: "Key Features / What You’ll Get",
		features: [
			{ num: "01", heading: "Certification-Focused Curriculum", desc: "Courses designed to help you earn valuable, industry-recognized certificates." },
			{ num: "02", heading: "Career Support", desc: "Resume building, LinkedIn optimization, and job placement assistance." },
			{ num: "03", heading: "Live Interview Prep", desc: "Participate in mock interviews and get real-time feedback from experts." },
			{ num: "04", heading: "Portfolio Projects", desc: "Build and showcase real-world projects to impress employers." },
			{ num: "05", heading: "Mentorship & Guidance", desc: "Ongoing support from experienced mentors throughout your journey." },
			{ num: "06", heading: "Flexible Learning", desc: "Access live sessions or recordings and learn at your own pace." },
		],
		benefitsTitle: "Benefits / Outcomes",
		benefits: [
			"Get Certified → Earn certificates that boost your resume and LinkedIn profile.",
			"Career-Ready Skills → Build practical skills for real-world roles.",
			"Resume & Interview Prep → Get expert help with resume building and interview practice.",
			"Placement Support → Access job referrals and placement assistance.",
			"Portfolio Development → Build and showcase projects to employers.",
			"Mentorship → Ongoing guidance from industry experts.",
		],
		faqTitle: "Frequently Asked Questions",
		faqs: [
			{ question: "What types of certifications do you offer?", answer: "We provide industry-recognized certifications in finance, business, and technology that validate your skills and enhance your career opportunities." },
			{ question: "Are your certifications globally recognized?", answer: "Yes, our certifications are accredited and recognized by leading organizations and employers worldwide." },
			{ question: "Do you offer career guidance after certification?", answer: "Absolutely! Our career support includes resume building, interview preparation, and job placement assistance." },
			{ question: "Can I study at my own pace?", answer: "Yes, our certification programs are flexible and designed to fit your schedule, whether you’re a student or working professional." },
			{ question: "Will I get hands-on experience?", answer: "Yes, we focus on practical projects and real-world case studies to ensure you’re job-ready after completing your certification." },
		],
		ctaTitle: "Ready to Take the Next Step?",
		ctaDesc: "Join thousands of successful learners who have transformed their careers with our certifications.<br />Sign up now and unlock your potential!",
		ctaBtn: "Get Started Today",
	},
	Arabic: {
		heroTitle: "الشهادات والدعم المهني",
		heroDesc: "احصل على شهادة، وابنِ سيرتك الذاتية، واستعد للمقابلات، واحصل على دعم التوظيف في مكان واحد. منصتنا مكرسة لمساعدتك على أن تصبح جاهزًا للعمل بشهادات معترف بها وإرشاد خبراء.",
		sectionTitle: "طريقك نحو النجاح المهني",
		sectionList: [
			"شهادات معترف بها لجميع البرامج",
			"مسارات وبرامج تعليمية جاهزة للعمل",
			"بناء السيرة الذاتية وتحسين ملف LinkedIn",
			"جلسات تحضير للمقابلات المباشرة",
			"دعم التوظيف وترشيحات الوظائف",
			"إرشاد مهني مستمر",
		],
		featuresTitle: "المميزات الرئيسية / ماذا ستحصل عليه",
		features: [
			{ num: "01", heading: "منهج يركز على الشهادات", desc: "دورات مصممة لمساعدتك في الحصول على شهادات معترف بها." },
			{ num: "02", heading: "دعم مهني", desc: "بناء السيرة الذاتية، تحسين LinkedIn، ودعم التوظيف." },
			{ num: "03", heading: "تحضير للمقابلات المباشرة", desc: "شارك في مقابلات تجريبية واحصل على تغذية راجعة فورية من الخبراء." },
			{ num: "04", heading: "مشاريع ملف الأعمال", desc: "ابنِ وقدم مشاريع واقعية لإبهار أصحاب العمل." },
			{ num: "05", heading: "إرشاد ودعم", desc: "دعم مستمر من مرشدين ذوي خبرة طوال رحلتك." },
			{ num: "06", heading: "تعلم مرن", desc: "احصل على جلسات مباشرة أو تسجيلات وتعلم حسب وتيرتك." },
		],
		benefitsTitle: "الفوائد / النتائج",
		benefits: [
			"احصل على شهادة → احصل على شهادات تعزز سيرتك الذاتية وملف LinkedIn.",
			"مهارات جاهزة للعمل → ابنِ مهارات عملية لأدوار واقعية.",
			"تحضير السيرة الذاتية والمقابلات → احصل على دعم خبير في بناء السيرة الذاتية والتدريب على المقابلات.",
			"دعم التوظيف → احصل على ترشيحات ودعم التوظيف.",
			"تطوير ملف الأعمال → ابنِ وقدم مشاريع لأصحاب العمل.",
			"إرشاد → دعم مستمر من خبراء المجال.",
		],
		faqTitle: "الأسئلة الشائعة",
		faqs: [
			{ question: "ما أنواع الشهادات التي تقدمونها؟", answer: "نقدم شهادات معترف بها في المالية والأعمال والتقنية تثبت مهاراتك وتعزز فرصك المهنية." },
			{ question: "هل شهاداتكم معترف بها عالميًا؟", answer: "نعم، شهاداتنا معتمدة ومعترف بها من قبل منظمات وأصحاب عمل رائدين حول العالم." },
			{ question: "هل تقدمون إرشادًا مهنيًا بعد الشهادة؟", answer: "بالتأكيد! يشمل دعمنا المهني بناء السيرة الذاتية، التحضير للمقابلات، والمساعدة في التوظيف." },
			{ question: "هل يمكنني الدراسة حسب وتيرتي؟", answer: "نعم، برامجنا مرنة ومصممة لتناسب جدولك سواء كنت طالبًا أو محترفًا." },
			{ question: "هل سأحصل على خبرة عملية؟", answer: "نعم، نركز على المشاريع العملية ودراسات الحالة الواقعية لضمان جاهزيتك للعمل بعد الشهادة." },
		],
		ctaTitle: "هل أنت جاهز للخطوة التالية؟",
		ctaDesc: "انضم إلى آلاف المتعلمين الناجحين الذين غيروا حياتهم المهنية بشهاداتنا.<br />سجل الآن واكتشف إمكانياتك!",
		ctaBtn: "ابدأ اليوم",
	},
	Hebrew: {
		heroTitle: "תעודות ותמיכה בקריירה",
		heroDesc: "קבל תעודה, בנה קורות חיים, התכונן לראיונות וקבל תמיכה בהשמה במקום אחד. הפלטפורמה שלנו מוקדשת לעזור לך להיות מוכן לקריירה עם תעודות מוכרות והכוונה מקצועית.",
		sectionTitle: "הדרך שלך להצלחה מקצועית",
		sectionList: [
			"תעודות מוכרות לכל התוכניות",
			"מסלולי לימוד מוכנים לקריירה",
			"בניית קורות חיים ושיפור פרופיל LinkedIn",
			"מפגשי הכנה לראיונות חיים",
			"תמיכה בהשמה והמלצות עבודה",
			"חונכות מקצועית מתמשכת",
		],
		featuresTitle: "תכונות עיקריות / מה תקבל",
		features: [
			{ num: "01", heading: "תוכנית לימודים ממוקדת תעודות", desc: "קורסים שנועדו לעזור לך לקבל תעודות מוכרות וחשובות." },
			{ num: "02", heading: "תמיכה בקריירה", desc: "בניית קורות חיים, שיפור LinkedIn, וסיוע בהשמה." },
			{ num: "03", heading: "הכנה לראיונות חיים", desc: "השתתף בראיונות מדומים וקבל משוב בזמן אמת ממומחים." },
			{ num: "04", heading: "פרויקטים לתיק עבודות", desc: "בנה והצג פרויקטים אמיתיים להרשים מעסיקים." },
			{ num: "05", heading: "חונכות והכוונה", desc: "תמיכה מתמשכת ממנטורים מנוסים לאורך כל הדרך." },
			{ num: "06", heading: "למידה גמישה", desc: "גש למפגשים חיים או להקלטות ולמד בקצב שלך." },
		],
		benefitsTitle: "יתרונות / תוצאות",
		benefits: [
			"קבל תעודה → קבל תעודות שמחזקות את קורות החיים ופרופיל LinkedIn שלך.",
			"מיומנויות מוכנות לקריירה → בנה מיומנויות מעשיות לתפקידים אמיתיים.",
			"הכנה לקורות חיים וראיונות → קבל עזרה מקצועית בבניית קורות חיים ואימון לראיונות.",
			"תמיכה בהשמה → קבל המלצות עבודה וסיוע בהשמה.",
			"פיתוח תיק עבודות → בנה והצג פרויקטים למעסיקים.",
			"חונכות → הכוונה מתמשכת ממומחים בתעשייה.",
		],
		faqTitle: "שאלות נפוצות",
		faqs: [
			{ question: "אילו סוגי תעודות אתם מציעים?", answer: "אנו מציעים תעודות מוכרות בתחומי פיננסים, עסקים וטכנולוגיה שמאמתות את כישוריך ומקדמות את הקריירה שלך." },
			{ question: "האם התעודות שלכם מוכרות בעולם?", answer: "כן, התעודות שלנו מוסמכות ומוכרות על ידי ארגונים מובילים ומעסיקים ברחבי העולם." },
			{ question: "האם יש תמיכה בקריירה לאחר קבלת התעודה?", answer: "בהחלט! התמיכה שלנו כוללת בניית קורות חיים, הכנה לראיונות, וסיוע בהשמה." },
			{ question: "האם אפשר ללמוד בקצב אישי?", answer: "כן, התוכניות שלנו גמישות ומותאמות ללוח הזמנים שלך, בין אם אתה סטודנט או עובד." },
			{ question: "האם אקבל ניסיון מעשי?", answer: "כן, אנו מתמקדים בפרויקטים מעשיים ומקרי מבחן אמיתיים כדי להבטיח מוכנות לעבודה לאחר קבלת התעודה." },
		],
		ctaTitle: "מוכן לשלב הבא?",
		ctaDesc: "הצטרף לאלפי לומדים מצליחים ששינו את הקריירה שלהם עם התעודות שלנו.<br />הירשם עכשיו וגלה את הפוטנציאל שלך!",
		ctaBtn: "התחל היום",
	},
};

export default function CertificationsCareerSupportPage() {
	const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState(() => localStorage.getItem("language") || "English");
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme") || "light";
			setTheme(storedTheme);
			const storedLang = localStorage.getItem("language") || "English";
			setLanguage(storedLang);
			const handleThemeChange = () => {
				const newTheme = localStorage.getItem("theme") || "light";
				setTheme(newTheme);
			};
			const handleLanguageChange = () => {
				const newLang = localStorage.getItem("language") || "English";
				setLanguage(newLang);
			};
			window.addEventListener("theme-changed", handleThemeChange);
			window.addEventListener("storage", handleThemeChange);
			window.addEventListener("language-changed", handleLanguageChange);
			window.addEventListener("storage", handleLanguageChange);
			return () => {
				window.removeEventListener("theme-changed", handleThemeChange);
				window.removeEventListener("storage", handleThemeChange);
				window.removeEventListener("language-changed", handleLanguageChange);
				window.removeEventListener("storage", handleLanguageChange);
			};
		}
	}, []);
	const t = translations[language] || translations["English"];
	const isRTL = language === "Arabic" || language === "Hebrew";
	const [openIndex, setOpenIndex] = useState(null);
	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div className={
			`${theme === "dark" ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"}${isRTL ? " rtl" : ""}`
		} dir={isRTL ? "rtl" : "ltr"}>
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
					<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: '#fff' }}>
						{t.heroTitle}
					</h1>
					<p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white">
						{t.heroDesc}
					</p>
				</div>
			</section>

			{/* Certifications & Career Support Section */}
			<section className={`py-16 ${theme === "dark" ? "bg-[#222]" : "bg-[#fff]"}`}>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
					{/* Left Image */}
					<div className="flex justify-center">
						<img
							src={d1}
							alt={t.heroTitle}
							className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
						/>
					</div>
					{/* Right Content */}
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#1e3a8a' }}>
							{t.sectionTitle}
						</h2>
						<ul className="space-y-4 text-base sm:text-lg">
							{t.sectionList.map((item, idx) => (
								<li key={idx} className="flex items-center">
									<span
										className={`w-3 h-3 rounded-full mr-3 ${theme === "dark" ? "bg-white" : "bg-black"}`}
									></span>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Key Features / What You’ll Get */}
			<section className={`w-full py-16 ${theme === "dark" ? "bg-[#181818] text-white" : "bg-[#e6f7ff] text-black"}`}>
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>
						{t.featuresTitle}
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-2 gap-10">
						{t.features.map((item, idx) => (
							<div key={item.num} className="flex items-start mb-6">
								<div className="relative flex-shrink-0 mr-4">
									<span
										className="text-5xl font-extrabold text-black"
										style={{
											background: "linear-gradient(90deg, #1e3a8a 60%, transparent 60%)",
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
									<h3 className="text-xl font-bold mb-1" style={{ color: '#1e3a8a' }}>
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
			<section className={`w-full py-16 ${theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"}`}>
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#1e3a8a' }}>
						{t.benefitsTitle}
					</h2>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
						{t.benefits.map((benefit, idx) => (
							<li key={idx} className="flex items-start gap-3">
								<span className="text-2xl text-[#1e3a8a]">✔</span>
								{benefit}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Frequently Asked Questions */}
			<section className={`py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-gray-50"}`}>
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#1e3a8a' }}>
						{t.faqTitle}
					</h2>
					<div className="grid lg:grid-cols-2 gap-6">
						{t.faqs.map((faq, index) => (
							<div
								key={index}
								className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ${theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"}`}
								onClick={() => toggleFAQ(index)}
							>
								<div className="flex justify-between items-center">
									<h3 className="text-lg font-semibold" style={{ color: '#1e3a8a' }}>{faq.question}</h3>
									<span className="font-bold text-xl" style={{ color: "#1e3a8a" }}>
										{openIndex === index ? "-" : "+"}
									</span>
								</div>
								{openIndex === index && (
									<p className={theme === "dark" ? "mt-4 text-gray-200" : "mt-4 text-gray-600"}>
										{faq.answer}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#1e3a8a]'}`}>
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#fff' }}>
						{t.ctaTitle}
					</h2>
					<p className={`text-lg mb-8 ${theme === 'dark' ? 'text-white' : 'text-white'}`} dangerouslySetInnerHTML={{ __html: t.ctaDesc }} />
					<a
						href="#"
						className={`inline-block px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${theme === 'dark' ? 'bg-[#fff] text-[#1e3a8a] hover:bg-[#e6f7ff]' : 'bg-[#fff] text-[#1e3a8a] hover:bg-[#005bb5]'}`}
					>
						{t.ctaBtn}
					</a>
				</div>
			</section>
		</div>
	);
}