import React from "react";
import SmoothScroll from "../components/effects/SmoothScroll";
import NotebookMargins from "../components/layout/NotebookMargins";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import TelemetryTicker from "../components/sections/TelemetryTicker";
import IncidentPipelinePinned from "../components/sections/IncidentPipelinePinned";
import ClubDivisions from "../components/sections/ClubDivisions";
import ThreatMatrix from "../components/sections/ThreatMatrix";
import PhishingInspector from "../components/sections/PhishingInspector";
import CyberTerminal from "../components/sections/CyberTerminal";
import LeadershipRoster from "../components/sections/LeadershipRoster";
import PledgeSection from "../components/sections/PledgeSection";
import ResourcesVault from "../components/sections/ResourcesVault";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#060709] text-[#f4f4f5] font-sans selection:bg-[#ff0055] selection:text-white overflow-x-clip">
        {/* Notebook Margins (Fixed dual vertical hairline guide rails & technical ticks) */}
        <NotebookMargins />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="relative z-10">
          <HeroSection />
          <TelemetryTicker />
          <IncidentPipelinePinned />
          <ClubDivisions />
          <ThreatMatrix />
          <PhishingInspector />
          <CyberTerminal />
          <LeadershipRoster />
          <PledgeSection />
          <ResourcesVault />
        </main>

        {/* Global Blueprint Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
