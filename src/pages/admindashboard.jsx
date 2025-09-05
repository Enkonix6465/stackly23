import { useState, useEffect } from "react";
import clsx from "clsx";
import Header from "../components/Header";
// Dashboard translations
const dashboardTranslations = {
  English: {
    dataScience: 'Data Science',
    webDevelopment: 'Web Development',
    aiMl: 'AI & ML',
    business: 'Business',
    design: 'Design',
    userSignupDetails: 'User Signup Details',
    sNo: 'S.No',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    signupTime: 'Signup Time',
    signupDate: 'Signup Date',
    noSignupDetails: 'No user signup details found.',
    instructorDetails: 'Instructor Details',
    name: 'Name',
    expertise: 'Expertise',
    noInstructorDetails: 'No instructor details found.',
    dashboardGraphs: 'Dashboard Graphs',
    signupsPerDay: 'Signups Per Day',
    noSignupGraph: 'No signup data for graph.',
    instructorsPerExpertise: 'Instructors Per Expertise',
    noInstructorGraph: 'No instructor data for graph.',
    courseEnrollments: 'Course Enrollments Per Category',
    webinarRegistrations: 'Webinar Registrations',
    webinarTitle: 'Webinar Title',
    date: 'Date',
    registeredAt: 'Registered At',
    noWebinarRegistrations: 'No webinar registrations found.',
    addNewBlog: 'Add New Blog',
    blogTitle: 'Blog Title',
    imageUrl: 'Image URL',
    authorName: 'Author Name',
    description: 'Description',
    addBlog: 'Add Blog',
    noBlogs: 'No blogs added yet.',
    edit: 'Edit',
    remove: 'Remove',
    save: 'Save',
    cancel: 'Cancel',
    by: 'By',
  },
  Arabic: {
    dataScience: 'علم البيانات',
    webDevelopment: 'تطوير الويب',
    aiMl: 'الذكاء الاصطناعي وتعلم الآلة',
    business: 'الأعمال',
    design: 'التصميم',
    userSignupDetails: 'تفاصيل تسجيل المستخدمين',
    sNo: 'رقم',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    signupTime: 'وقت التسجيل',
    signupDate: 'تاريخ التسجيل',
    noSignupDetails: 'لا توجد تفاصيل تسجيل مستخدمين.',
    instructorDetails: 'تفاصيل المدربين',
    name: 'الاسم',
    expertise: 'الخبرة',
    noInstructorDetails: 'لا توجد تفاصيل مدربين.',
    dashboardGraphs: 'رسوم بيانية للوحة التحكم',
    signupsPerDay: 'التسجيلات لكل يوم',
    noSignupGraph: 'لا توجد بيانات تسجيل للرسم البياني.',
    instructorsPerExpertise: 'المدربين حسب الخبرة',
    noInstructorGraph: 'لا توجد بيانات مدربين للرسم البياني.',
    courseEnrollments: 'الالتحاق بالدورات حسب الفئة',
    webinarRegistrations: 'تسجيلات الويبينار',
    webinarTitle: 'عنوان الويبينار',
    date: 'التاريخ',
    registeredAt: 'وقت التسجيل',
    noWebinarRegistrations: 'لا توجد تسجيلات ويبينار.',
    addNewBlog: 'إضافة مدونة جديدة',
    blogTitle: 'عنوان المدونة',
    imageUrl: 'رابط الصورة',
    authorName: 'اسم المؤلف',
    description: 'الوصف',
    addBlog: 'إضافة مدونة',
    noBlogs: 'لا توجد مدونات مضافة بعد.',
    edit: 'تعديل',
    remove: 'حذف',
    save: 'حفظ',
    cancel: 'إلغاء',
    by: 'بواسطة',
  },
  Hebrew: {
    dataScience: 'מדעי הנתונים',
    webDevelopment: 'פיתוח אתרים',
    aiMl: 'בינה מלאכותית ולמידת מכונה',
    business: 'עסקים',
    design: 'עיצוב',
    userSignupDetails: 'פרטי הרשמת משתמשים',
    sNo: 'מס.',
    firstName: 'שם פרטי',
    lastName: 'שם משפחה',
    email: 'אימייל',
    phone: 'טלפון',
    signupTime: 'שעת הרשמה',
    signupDate: 'תאריך הרשמה',
    noSignupDetails: 'לא נמצאו פרטי הרשמת משתמשים.',
    instructorDetails: 'פרטי מדריכים',
    name: 'שם',
    expertise: 'תחום התמחות',
    noInstructorDetails: 'לא נמצאו פרטי מדריכים.',
    dashboardGraphs: 'גרפים בלוח מנהל',
    signupsPerDay: 'הרשמות ליום',
    noSignupGraph: 'אין נתוני הרשמה לגרף.',
    instructorsPerExpertise: 'מדריכים לפי התמחות',
    noInstructorGraph: 'אין נתוני מדריכים לגרף.',
    courseEnrollments: 'הרשמות לקורסים לפי קטגוריה',
    webinarRegistrations: 'הרשמות לוובינר',
    webinarTitle: 'כותרת וובינר',
    date: 'תאריך',
    registeredAt: 'נרשם ב-',
    noWebinarRegistrations: 'לא נמצאו הרשמות לוובינר.',
    addNewBlog: 'הוסף בלוג חדש',
    blogTitle: 'כותרת בלוג',
    imageUrl: 'כתובת תמונה',
    authorName: 'שם מחבר',
    description: 'תיאור',
    addBlog: 'הוסף בלוג',
    noBlogs: 'לא נוספו בלוגים.',
    edit: 'ערוך',
    remove: 'הסר',
    save: 'שמור',
    cancel: 'ביטול',
    by: 'מאת',
  },
};
import BlogPostsPerMonthGraph from "./BlogPostsPerMonthGraph";
import UserGrowthGraph from "./UserGrowthGraph";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

export default function UserDetailsSection() {
  // Theme and language state
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'English');
  const t = dashboardTranslations[language] || dashboardTranslations['English'];
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const syncTheme = () => setTheme(localStorage.getItem("theme") || "light");
      const syncLanguage = () => setLanguage(localStorage.getItem('language') || 'English');
      window.addEventListener("storage", syncTheme);
      window.addEventListener("theme-changed", syncTheme);
      window.addEventListener('language-changed', syncLanguage);
      window.addEventListener('storage', syncLanguage);
      return () => {
        window.removeEventListener("storage", syncTheme);
        window.removeEventListener("theme-changed", syncTheme);
        window.removeEventListener('language-changed', syncLanguage);
        window.removeEventListener('storage', syncLanguage);
      };
    }
  }, []);

  // NOTE: In your theme toggle logic (e.g., in Header), after updating localStorage, add:
  // window.dispatchEvent(new Event("themeChanged"));
  // Remove a blog (same logic as webinars)
  const handleRemoveBlog = (idx) => {
    const newBlogs = blogs.filter((_, i) => i !== idx);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs);
    setEditIdx(null);
  };

  // Start editing a blog (same logic as webinars)
  const handleEditBlog = (idx) => {
    setEditIdx(idx);
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
  };

  // Save edited blog (same logic as webinars)
  const handleBlogEditSave = (idx) => {
    if (!editForm.title || !editForm.image || !editForm.author || !editForm.description) return;
    const newBlogs = blogs.map((b, i) => i === idx ? { ...editForm, createdAt: b.createdAt } : b);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setEditIdx(null);
  };
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', date: '', time: '', description: '' });
  const [webinarRegistrations, setWebinarRegistrations] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [webinarForm, setWebinarForm] = useState({ title: '', date: '', time: '', description: '' });

  const [signupDetails, setSignupDetails] = useState([]);
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: '', image: '', author: '', description: '' });

  // Prepare data for signup graph (signups per day)
  const signupDateCounts = signupDetails.reduce((acc, user) => {
    if (user.signupDate) {
      acc[user.signupDate] = (acc[user.signupDate] || 0) + 1;
    }
    return acc;
  }, {});
  const signupGraphData = Object.entries(signupDateCounts).map(([date, count]) => ({ date, count }));

  // Prepare data for instructor graph (instructors per expertise)
  const expertiseCounts = instructorDetails.reduce((acc, inst) => {
    if (inst.expertise) {
      acc[inst.expertise] = (acc[inst.expertise] || 0) + 1;
    }
    return acc;
  }, {});
  const instructorGraphData = Object.entries(expertiseCounts).map(([expertise, count]) => ({ expertise, count }));

  useEffect(() => {
    // Fetch all admin data from localStorage
    const fetchDetails = () => {
      const storedUsers = localStorage.getItem("users");
      setSignupDetails(storedUsers ? JSON.parse(storedUsers) : []);
      const storedInstructors = localStorage.getItem("instructors");
      setInstructorDetails(storedInstructors ? JSON.parse(storedInstructors) : []);
      const storedWebinars = localStorage.getItem("webinars");
      setWebinars(storedWebinars ? JSON.parse(storedWebinars) : []);
      const storedRegistrations = localStorage.getItem("webinarRegistrations");
      setWebinarRegistrations(storedRegistrations ? JSON.parse(storedRegistrations) : []);
      const storedBlogs = localStorage.getItem("blogs");
      setBlogs(storedBlogs ? JSON.parse(storedBlogs) : []);
    };
    fetchDetails();
    window.addEventListener("storage", fetchDetails);
    return () => window.removeEventListener("storage", fetchDetails);
  }, []);

  // After adding/removing a blog, always sync with localStorage
  const syncBlogs = () => {
    const storedBlogs = localStorage.getItem("blogs");
    setBlogs(storedBlogs ? JSON.parse(storedBlogs) : []);
  };

  // After adding/removing a webinar, always sync with localStorage
  const syncWebinars = () => {
    const storedWebinars = localStorage.getItem("webinars");
    setWebinars(storedWebinars ? JSON.parse(storedWebinars) : []);
  };

  // Handle form input changes
  const handleWebinarInput = (e) => {
    const { name, value } = e.target;
    setWebinarForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleWebinarSubmit = (e) => {
    e.preventDefault();
    if (!webinarForm.title || !webinarForm.date || !webinarForm.time || !webinarForm.description) return;
    const newWebinars = [...webinars, { ...webinarForm }];
    localStorage.setItem("webinars", JSON.stringify(newWebinars));
    syncWebinars();
    setWebinarForm({ title: '', date: '', time: '', description: '' });
  };

  // Remove a webinar
  const handleRemoveWebinar = (idx) => {
    const newWebinars = webinars.filter((_, i) => i !== idx);
    localStorage.setItem("webinars", JSON.stringify(newWebinars));
    syncWebinars();
  };

  // Start editing a webinar
  const handleEditWebinar = (idx) => {
    setEditIdx(idx);
  const [editForm, setEditForm] = useState({ title: '', image: '', author: '', description: '' });
  };

  // Handle edit form input
  const handleEditInput = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };


  // Save edited webinar
  const handleEditSave = (idx) => {
    if (!editForm.title || !editForm.date || !editForm.time || !editForm.description) return;
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
    setWebinars(newWebinars);
    localStorage.setItem("webinars", JSON.stringify(newWebinars));
    setEditIdx(null);
  };

  // Handle blog form input
  const handleBlogInput = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle blog form submit
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.image || !blogForm.author || !blogForm.description) return;
    const newBlogs = [{ ...blogForm, createdAt: new Date().toISOString() }, ...blogs];
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    syncBlogs();
    setBlogForm({ title: '', image: '', author: '', description: '' });
  };

  // Cancel editing
  const handleEditCancel = () => {
    setEditIdx(null);
  };

  // RTL support for Arabic/Hebrew
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (language === 'Arabic' || language === 'Hebrew') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
  }, [language]);

  // Language dropdown logic
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    window.dispatchEvent(new Event('language-changed'));
  };

  return (
    <div className={clsx(
      "min-h-screen w-full",
      theme === "dark" ? "bg-[#10141c] text-white" : "bg-[#f6fafd] text-[#22223b]",
      (language === 'Arabic' || language === 'Hebrew') ? 'rtl' : 'ltr'
    )}>
      <div className="flex justify-end p-4">
        <select
          value={language}
          onChange={e => handleLanguageChange(e.target.value)}
          className={clsx("border rounded px-3 py-1", theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300")}
        >
          <option value="English">English</option>
          <option value="Arabic">العربية</option>
          <option value="Hebrew">עברית</option>
        </select>
      </div>
      <Header />

      {/* User Signup Table Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-16",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#1e3a8a]"
        )}>{t.userSignupDetails}</h2>
        {signupDetails.length > 0 ? (
          <div className="overflow-x-auto">
            <table className={clsx(
              "min-w-full border rounded-lg",
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            )}>
              <thead className={clsx(
                "text-white",
                theme === "dark" ? "bg-[#1e3a8a]" : "bg-[#1e3a8a]"
              )}>
                <tr>
                  <th className="px-4 py-2 text-center">{t.sNo}</th>
                  <th className="px-4 py-2 text-center">{t.firstName}</th>
                  <th className="px-4 py-2 text-center">{t.lastName}</th>
                  <th className="px-4 py-2 text-center">{t.email}</th>
                  <th className="px-4 py-2 text-center">{t.phone}</th>
                  <th className="px-4 py-2 text-center">{t.signupTime}</th>
                  <th className="px-4 py-2 text-center">{t.signupDate}</th>
                </tr>
              </thead>
              <tbody>
                {signupDetails.map((user, idx) => (
                  <tr key={user.email || idx} className={clsx("border-b", theme === "dark" ? "border-[#1e3a8a]" : "border-[#1e3a8a]") }>
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{user.firstName}</td>
                    <td className="px-4 py-2 text-center">{user.lastName}</td>
                    <td className="px-4 py-2 text-center">{user.email}</td>
                    <td className="px-4 py-2 text-center">{user.phone}</td>
                    <td className="px-4 py-2 text-center">{user.signupTime}</td>
                    <td className="px-4 py-2 text-center">{user.signupDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>{t.noSignupDetails}</p>
        )}
      </div>

      {/* Instructor Details Table Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-6",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#1e3a8a]"
        )}>{t.instructorDetails}</h2>
        {instructorDetails.length > 0 ? (
          <div className="overflow-x-auto">
            <table className={clsx(
              "min-w-full border rounded-lg",
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            )}>
              <thead className={clsx(
                "text-white",
                theme === "dark" ? "bg-[#1e3a8a]" : "bg-[#1e3a8a]"
              )}>
                <tr>
                  <th className="px-4 py-2 text-center">{t.sNo}</th>
                  <th className="px-4 py-2 text-center">{t.name}</th>
                  <th className="px-4 py-2 text-center">{t.email}</th>
                  <th className="px-4 py-2 text-center">{t.expertise}</th>
                </tr>
              </thead>
              <tbody>
                {instructorDetails.map((inst, idx) => (
                  <tr key={inst.email || idx} className={clsx("border-b", theme === "dark" ? "border-[#1e3a8a]" : "border-[#1e3a8a]") }>
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{inst.name}</td>
                    <td className="px-4 py-2 text-center">{inst.email}</td>
                    <td className="px-4 py-2 text-center">{inst.expertise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>{t.noInstructorDetails}</p>
        )}
      </div>

      {/* Dashboard Graphs */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-6",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-8 text-center",
          "text-[#1e3a8a]"
        )}>{t.dashboardGraphs}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={clsx(
              "text-lg font-semibold mb-4 text-center",
              "text-[#1e3a8a]"
            )}>{t.signupsPerDay}</h3>
            {signupGraphData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={signupGraphData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="date" stroke={theme === "dark" ? "#fff" : "#22223b"} />
                  <YAxis allowDecimals={false} stroke={theme === "dark" ? "#fff" : "#22223b"} />
                  <Tooltip contentStyle={{ background: theme === "dark" ? "#181f2a" : "#fff", color: theme === "dark" ? "#fff" : "#22223b" }} />
                  <Bar dataKey="count" fill="#1e3a8a" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>{t.noSignupGraph}</p>
            )}
          </div>
          <div>
            <h3 className={clsx(
              "text-lg font-semibold mb-4 text-center",
              "text-[#1e3a8a]"
            )}>{t.instructorsPerExpertise}</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={[
                { expertise: t.dataScience, count: 5 },
                { expertise: t.webDevelopment, count: 8 },
                { expertise: t.aiMl, count: 3 },
                { expertise: t.business, count: 4 },
                { expertise: t.design, count: 2 }
              ]} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="expertise" stroke={theme === "dark" ? "#fff" : "#22223b"} />
                <YAxis allowDecimals={false} stroke={theme === "dark" ? "#fff" : "#22223b"} />
                <Tooltip contentStyle={{ background: theme === "dark" ? "#181f2a" : "#fff", color: theme === "dark" ? "#fff" : "#22223b" }} />
                <Bar dataKey="count" fill="#1e3a8a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>




      {/* Course Enrollments Per Category (Static Graph) */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-8",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4 text-center",
          "text-[#1e3a8a]"
        )}>{t.courseEnrollments}</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={[
            { category: t.dataScience, enrollments: 120 },
            { category: t.webDevelopment, enrollments: 200 },
            { category: t.aiMl, enrollments: 80 },
            { category: t.business, enrollments: 150 },
            { category: t.design, enrollments: 60 }
          ]} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
            <XAxis dataKey="category" stroke={theme === "dark" ? "#fff" : "#22223b"} />
            <YAxis allowDecimals={false} stroke={theme === "dark" ? "#fff" : "#22223b"} />
            <Tooltip contentStyle={{ background: theme === "dark" ? "#181f2a" : "#fff", color: theme === "dark" ? "#fff" : "#22223b" }} formatter={(value, name, props) => [`${t.courseEnrollments} : ${value}`, '']} />
            <Bar dataKey="enrollments" fill="#1e3a8a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Webinar Registrations Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-8",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#1e3a8a]"
        )}>{t.webinarRegistrations}</h2>
        {webinarRegistrations.length > 0 ? (
          <div className="overflow-x-auto">
            <table className={clsx(
              "min-w-full border rounded-lg",
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            )}>
              <thead className="bg-[#1e3a8a] text-white">
                <tr>
                  <th className="px-4 py-2 text-center">{t.sNo}</th>
                  <th className="px-4 py-2 text-center">{t.webinarTitle}</th>
                  <th className="px-4 py-2 text-center">{t.date}</th>
                  <th className="px-4 py-2 text-center">{t.name}</th>
                  <th className="px-4 py-2 text-center">{t.email}</th>
                  <th className="px-4 py-2 text-center">{t.registeredAt}</th>
                </tr>
              </thead>
              <tbody>
                {webinarRegistrations.map((reg, idx) => (
                  <tr key={idx} className={clsx("border-b", theme === "dark" ? "border-gray-700" : "border-gray-200") }>
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{reg.webinarTitle}</td>
                    <td className="px-4 py-2 text-center">{reg.webinarDate}</td>
                    <td className="px-4 py-2 text-center">{reg.name}</td>
                    <td className="px-4 py-2 text-center">{reg.email}</td>
                    <td className="px-4 py-2 text-center">{new Date(reg.registeredAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>{t.noWebinarRegistrations}</p>
        )}
      </div>

      {/* Add New Blog Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-8",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#1e3a8a]"
        )}>{t.addNewBlog}</h2>
        <form className="mb-6 w-full" onSubmit={handleBlogSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="title"
              value={blogForm.title}
              onChange={handleBlogInput}
              placeholder={t.blogTitle}
              className={clsx(
                "border rounded px-4 py-3 text-lg flex-1 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
            <input
              type="text"
              name="image"
              value={blogForm.image}
              onChange={handleBlogInput}
              placeholder={t.imageUrl}
              className={clsx(
                "border rounded px-4 py-3 text-lg flex-1 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="author"
              value={blogForm.author}
              onChange={handleBlogInput}
              placeholder={t.authorName}
              className={clsx(
                "border rounded px-4 py-3 text-lg flex-1 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              value={blogForm.description}
              onChange={handleBlogInput}
              placeholder={t.description}
              className={clsx(
                "border rounded px-4 py-3 text-lg w-full min-h-[80px]",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className={clsx(
              "rounded px-5 py-2 text-base font-semibold transition",
              "bg-[#1e3a8a] text-white hover:bg-[#1e40af]"
            )}>{t.addBlog}</button>
          </div>
        </form>
        <div>
          {blogs.length > 0 ? (
            <ul className="space-y-4">
              {blogs.map((blog, idx) => (
                <li key={idx} className={clsx(
                  "border rounded p-4 flex flex-col md:flex-row md:items-center gap-4",
                  theme === "dark" ? "border-gray-700 bg-[#232b3b]" : "border-gray-200 bg-white"
                )}>
                  <img src={blog.image} alt={blog.title} className="w-24 h-24 object-cover rounded" />
                  <div className="flex-1">
                    {editIdx === idx ? (
                      <form className="flex flex-col gap-2" onSubmit={e => { e.preventDefault(); handleBlogEditSave(idx); }}>
                        <input
                          type="text"
                          name="title"
                          value={editForm.title}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <input
                          type="text"
                          name="image"
                          value={editForm.image}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <input
                          type="text"
                          name="author"
                          value={editForm.author}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <textarea
                          name="description"
                          value={editForm.description}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <div className="flex gap-2 mt-2">
                          <button type="submit" className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            "bg-[#1e3a8a] text-white hover:bg-[#1e40af]"
                          )}>{t.save}</button>
                          <button type="button" className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-300 text-black hover:bg-gray-400"
                          )} onClick={handleEditCancel}>{t.cancel}</button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <div className={clsx(
                          "font-bold text-lg",
                          "text-[#1e3a8a]"
                        )}>{blog.title}</div>
                        <div className={clsx(
                          "text-sm mb-1",
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        )}>{t.by} {blog.author}</div>
                        <div className={clsx(
                          "text-sm mb-1",
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        )}>{blog.description}</div>
                        <div className={clsx(
                          "text-xs",
                          "text-gray-400"
                        )}>{new Date(blog.createdAt).toLocaleString()}</div>
                        <div className="flex gap-2 mt-2">
                          <button className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            theme === "dark" ? "bg-yellow-500 text-white hover:bg-yellow-400" : "bg-yellow-400 text-white hover:bg-yellow-500"
                          )} onClick={() => handleEditBlog(idx)}>{t.edit}</button>
                          <button className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            theme === "dark" ? "bg-red-600 text-white hover:bg-red-500" : "bg-red-500 text-white hover:bg-red-600"
                          )} onClick={() => handleRemoveBlog(idx)}>{t.remove}</button>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={clsx("text-center", theme === "dark" ? "text-gray-400" : "text-gray-500")}>{t.noBlogs}</p>
          )}
        </div>
      </div>
    </div>
  );
}
