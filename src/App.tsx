
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Documentation from './pages/Documentation';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import TeamMember from './pages/TeamMember';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black relative">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Features />
              <Services />
              <Portfolio />
              <Process />
              <Team />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/team/:memberId" element={<TeamMember />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
