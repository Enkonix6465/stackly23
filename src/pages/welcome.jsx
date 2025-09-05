import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeImg from "../assets/welcome.jpg";
import logoImg from "../assets/logo.png";

export default function WelcomePage() {
  // Language dropdown state
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('language') || 'English');
  // RTL and translations
  const isRTL = selectedLanguage === 'Arabic' || selectedLanguage === 'Hebrew';
  const translations = {
    English: {
      login: 'Login',
      email: 'Email',
      password: 'Password',
      forgot: 'Forgot password?',
      signup: 'Sign up',
      dontHaveAccount: 'Don’t have an account?',
      resetPassword: 'Reset Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm New Password',
      cancel: 'Cancel',
      signupTitle: 'Sign Up',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Phone',
      signupBtn: 'Signup',
      welcome: 'Welcome to Stackly23',
    },
    Arabic: {
      login: 'تسجيل الدخول',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      forgot: 'هل نسيت كلمة المرور؟',
      signup: 'إنشاء حساب',
      dontHaveAccount: 'ليس لديك حساب؟',
      resetPassword: 'إعادة تعيين كلمة المرور',
      newPassword: 'كلمة المرور الجديدة',
      confirmNewPassword: 'تأكيد كلمة المرور الجديدة',
      cancel: 'إلغاء',
      signupTitle: 'إنشاء حساب',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      phone: 'الهاتف',
      signupBtn: 'إنشاء حساب',
      welcome: 'مرحبًا بك في Stackly23',
    },
    Hebrew: {
      login: 'התחברות',
      email: 'אימייל',
      password: 'סיסמה',
      forgot: 'שכחת סיסמה?',
      signup: 'הרשמה',
      dontHaveAccount: 'אין לך חשבון?',
      resetPassword: 'איפוס סיסמה',
      newPassword: 'סיסמה חדשה',
      confirmNewPassword: 'אישור סיסמה חדשה',
      cancel: 'ביטול',
      signupTitle: 'הרשמה',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      phone: 'טלפון',
      signupBtn: 'הרשמה',
      welcome: 'ברוך הבא ל-Stackly23',
    },
  };
  const t = translations[selectedLanguage] || translations['English'];
  // Sync with localStorage
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    localStorage.setItem('language', lang);
    window.dispatchEvent(new Event('language-changed'));
    setIsLanguageDropdownOpen(false);
  };
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotPassword, setForgotPassword] = useState("");
  const [forgotConfirm, setForgotConfirm] = useState("");

  // Handle Forgot Password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (forgotPassword !== forgotConfirm) {
      alert("Passwords do not match.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex(u => u.email === forgotEmail);
    if (idx === -1) {
      alert("Email not found.");
      return;
    }
    users[idx].password = forgotPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Password updated successfully!");
    setShowForgot(false);
    setForgotEmail("");
    setForgotPassword("");
    setForgotConfirm("");
  };
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    // Check for admin credentials
    if (loginEmail === "admin@enkonix.in" && loginPassword === "admin123") {
      localStorage.setItem("firstname", "admin");
      localStorage.setItem("lastname", "dashboard");
      localStorage.setItem("email", loginEmail);
      navigate("/admindashboard");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      // Store user details in localStorage for dashboard/avatar
      localStorage.setItem("firstname", user.firstName || "");
      localStorage.setItem("lastname", user.lastName || "");
      localStorage.setItem("email", user.email || "");
      navigate("/home1");
    } else {
      alert("Invalid email or password.");
    }
  };

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === signupData.email)) {
      alert("Email already registered.");
      return;
    }
    const now = new Date();
    const newUser = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      phone: signupData.phone,
      password: signupData.password,
      signupTime: now.toLocaleTimeString(),
      signupDate: now.toLocaleDateString()
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    setShowSignup(false);
    setSignupData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center${isRTL ? ' rtl' : ''}`}
      style={{ backgroundImage: `url(${welcomeImg})` }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Languages Dropdown */}
      <div className="relative mt-8 mb-2">
        <button
          className="flex items-center px-4 py-2 rounded bg-white text-[#1e3a8a] font-semibold border border-[#1e3a8a] shadow hover:bg-[#f0f4fa]"
          onClick={() => setIsLanguageDropdownOpen((v) => !v)}
        >
          {selectedLanguage} <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {isLanguageDropdownOpen && (
          <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 bg-white">
            <button className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'English' ? 'font-bold' : ''} text-[#1e3a8a] hover:bg-[#e0e7ff]`} onClick={() => handleLanguageChange('English')}>English</button>
            <button className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'Arabic' ? 'font-bold' : ''} text-[#1e3a8a] hover:bg-[#e0e7ff]`} onClick={() => handleLanguageChange('Arabic')}>Arabic</button>
            <button className={`block w-full text-left px-4 py-2 ${selectedLanguage === 'Hebrew' ? 'font-bold' : ''} text-[#1e3a8a] hover:bg-[#e0e7ff]`} onClick={() => handleLanguageChange('Hebrew')}>Hebrew</button>
          </div>
        )}
      </div>
      <div className="w-full max-w-md bg-transparent rounded-xl shadow-lg p-8 flex flex-col items-center justify-center">
        {!showSignup && !showForgot ? (
          // LOGIN FORM
          <div>
            <div className="flex flex-col items-center mb-4">
              <img src={logoImg} alt="Logo" className="h-13 w-20 mb-2" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 text-left w-full">{t.login}</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder={t.email}
                className="w-full border p-3 rounded-lg"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder={t.password}
                className="w-full border p-3 rounded-lg"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                required
              />
              <div className="flex justify-between items-center text-sm">
                <button type="button" className="text-[#1e3a8a] hover:underline" onClick={() => setShowForgot(true)}>
                  {t.forgot}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1e3a8a] text-white p-3 rounded-lg hover:bg-[#1e40af]"
              >
                {t.login}
              </button>
            </form>

            <p className="mt-4 text-sm text-white text-center">
              {t.dontHaveAccount}{" "}
              <button
                className="text-[#1e3a8a] hover:underline"
                onClick={() => setShowSignup(true)}
              >
                {t.signup}
              </button>
            </p>
          </div>
        ) : showForgot ? (
          // FORGOT PASSWORD FORM
          <div>
            <div className="flex flex-col items-center mb-4">
              <img src={logoImg} alt="Logo" className="h-13 w-20 mb-2" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-[#1e3a8a]">{t.resetPassword}</h2>
            <form className="space-y-4" onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder={t.email}
                className="w-full border p-3 rounded-lg"
                value={forgotEmail}
                onChange={e => setForgotEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder={t.newPassword}
                className="w-full border p-3 rounded-lg"
                value={forgotPassword}
                onChange={e => setForgotPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder={t.confirmNewPassword}
                className="w-full border p-3 rounded-lg"
                value={forgotConfirm}
                onChange={e => setForgotConfirm(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#1e3a8a] text-white p-3 rounded-lg hover:bg-[#1e40af]"
              >
                {t.resetPassword}
              </button>
              <button
                type="button"
                className="w-full mt-2 bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300"
                onClick={() => setShowForgot(false)}
              >
                {t.cancel}
              </button>
            </form>
          </div>
        ) : (
          // SIGNUP FORM
          <>
                // SIGNUP FORM
                <div>
                  <div className="flex flex-col items-center mb-4">
                    <img src={logoImg} alt="Logo" className="h-13 w-20 mb-2" />
                  </div>
                  <h2 className="text-2xl font-bold mb-6 text-center text-[#1e3a8a]">{t.signupTitle}</h2>
                  <form className="space-y-4" onSubmit={handleSignup}>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder={t.firstName}
                        className="w-1/2 border p-3 rounded-lg"
                        value={signupData.firstName}
                        onChange={e => setSignupData({ ...signupData, firstName: e.target.value })}
                        required />
                      <input
                        type="text"
                        placeholder={t.lastName}
                        className="w-1/2 border p-3 rounded-lg"
                        value={signupData.lastName}
                        onChange={e => setSignupData({ ...signupData, lastName: e.target.value })}
                        required />
                    </div>
                    <input
                      type="email"
                      placeholder={t.email}
                      className="w-full border p-3 rounded-lg"
                      value={signupData.email}
                      onChange={e => setSignupData({ ...signupData, email: e.target.value })}
                      required />
                    <input
                      type="tel"
                      placeholder={t.phone}
                      className="w-full border p-3 rounded-lg"
                      value={signupData.phone}
                      onChange={e => setSignupData({ ...signupData, phone: e.target.value })}
                      required />
                    <input
                      type="password"
                      placeholder={t.password}
                      className="w-full border p-3 rounded-lg"
                      value={signupData.password}
                      onChange={e => setSignupData({ ...signupData, password: e.target.value })}
                      required />
                    <input
                      type="password"
                      placeholder={t.confirmNewPassword}
                      className="w-full border p-3 rounded-lg"
                      value={signupData.confirmPassword}
                      onChange={e => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      required />
                    <button
                      type="submit"
                      className="w-full bg-[#1e3a8a] text-white p-3 rounded-lg hover:bg-[#1e40af]"
                    >
                      {t.signupBtn}
                    </button>
                  </form>
                  <p className="mt-4 text-sm text-white text-center">
                    Already have an account?{" "}
                    <button
                      className="text-[#1e3a8a] hover:underline"
                      onClick={() => setShowSignup(false)}
                    >
                      {t.login}
                    </button>
                  </p>
                </div><p className="mt-4 text-sm text-white text-center">
                  Already have an account?{" "}
                  <button
                    className="text-[#1e3a8a] hover:underline"
                    onClick={() => setShowSignup(false)}
                  >
                    Login
                  </button>
                </p></>
        )
      }
      </div>
    </div>
  );
}
