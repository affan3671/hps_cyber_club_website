import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyStrip from './components/EmergencyStrip';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Threats from './pages/Threats';
import StaySafe from './pages/StaySafe';
import IncidentResponse from './pages/IncidentResponse';
import Pledge from './pages/Pledge';
import PracticeZone from './pages/PracticeZone';
import Resources from './pages/Resources';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 flex flex-col font-sans selection:bg-[#00E5FF] selection:text-[#050B14]">
      {/* Scroll to Top on page navigation */}
      <ScrollToTop />

      {/* Emergency Strip (Helpline 1930 & cybercrime.gov.in) */}
      <EmergencyStrip />

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threats" element={<Threats />} />
          <Route path="/stay-safe" element={<StaySafe />} />
          <Route path="/what-to-do" element={<IncidentResponse />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/practice-zone" element={<PracticeZone />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
