import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home1 from './pages/Home1';
import Home2Hero from './pages/Home2';
import AboutHero from './pages/aboutus';
import ServiceHero from './pages/services';
import WelcomePage from './pages/welcome';
import AIServicePage from './pages/Courses & Programs.jsx';
import WebDevServicePage from './pages/Live Classes & Mentorship.jsx';
import CertificationsCareerSupportPage from './pages/Certifications & Career Support.jsx';
import BlockchainPage from './pages/Skill Development Workshops.jsx';
import LearningResourcesPage from './pages/Learning Resources & Tools.jsx';
import CommunityNetworkingPage from './pages/Community & Networking.jsx';
import BlogHero from './pages/blog';
import BlogDetail from './pages/BlogDetail';
import ContactHero from './pages/contactus';
import UserDetailsSection from './pages/admindashboard'; //
import UserDashboard from './pages/userdashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Redirect root to /welcome */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          {/* Admin Dashboard route without Header/Footer */}
          <Route path="/admindashboard" element={<UserDetailsSection />} />
          {/* All other routes with Header/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="home1" element={<Home1 />} />
                  <Route path="home2" element={<Home2Hero />} />
                  <Route path="aboutus" element={<AboutHero />} />
                  <Route path="services" element={<ServiceHero />} />
                  <Route path="Courses & Programs" element={<AIServicePage />} />
                  <Route path="Live Classes & Mentorship" element={<WebDevServicePage />} />
                  <Route path="Certifications & Career Support" element={<CertificationsCareerSupportPage />} />
                  <Route path="Skill Development Workshops" element={<BlockchainPage />} />
                  <Route path="Learning Resources & Tools" element={<LearningResourcesPage />} />
                  <Route path="Community & Networking" element={<CommunityNetworkingPage />} />
                  <Route path="blog" element={<BlogHero />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="contactus" element={<ContactHero />} />
                  <Route path="/userdashboard" element={<UserDashboard />} />
                  {/* Add more routes as needed */}
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;