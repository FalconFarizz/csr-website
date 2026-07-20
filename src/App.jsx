import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import ITSoftwarePage from './pages/services/ITSoftwarePage';
import EventManagementPage from './pages/services/EventManagementPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import RealEstatePage from './pages/services/RealEstatePage';
import ProjectDemoPage from './pages/ProjectDemoPage';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';

function ScrollHandler() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 320);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PageLoader />
      <CustomCursor />
      <ScrollHandler />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/demo/:id" element={<ProjectDemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Service Sub-Pages */}
        <Route path="/services/it-software" element={<ITSoftwarePage />} />
        <Route path="/services/event-management" element={<EventManagementPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/real-estate" element={<RealEstatePage />} />

        {/* IT Software Sub-Sub-Pages */}
        <Route path="/services/it-software/:slug" element={<ITSoftwarePage />} />
        <Route path="/services/event-management/:slug" element={<EventManagementPage />} />
        <Route path="/services/digital-marketing/:slug" element={<DigitalMarketingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
