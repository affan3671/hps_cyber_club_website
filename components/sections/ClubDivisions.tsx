"use client";

import React, { useState, useRef } from "react";
import HackedText from "../effects/HackedText";
import {
  ShieldAlert,
  ShieldCheck,
  CalendarDays,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ClubDivisions() {
  const [activeDivision, setActiveDivision] = useState(0);
  const dossierRef = useRef<HTMLDivElement | null>(null);

  const divisions = [
    {
      code: "DIV_01 // RED",
      title: "ADVERSARY SIMULATION WING",
      subtitle: "Deconstructing Scams & Phishing Vectors",
      icon: ShieldAlert,
      tagline: "Know the adversary's playbook to nullify their traps.",
      mission:
        "Designs safe, controlled non-destructive demonstrations: URL spoofing, homoglyph traps, fake UPI collect requests, and Trojanized APK permission analysis.",
      pillars: [
        "Curates realistic SMS & WhatsApp scam scenarios for school-wide drills.",
        "Researches emerging fraud campaigns flagged by MHA / I4C / @Cyberdost.",
        "Teaches students how domain namespaces and TLS certificates actually work.",
      ],
      deliverable: "Interactive Scam Simulator & Weekly Threat Bulletins",
      status: "ARMED // ACTIVE DRILLS",
    },
    {
      code: "DIV_02 // BLUE",
      title: "DEFENSIVE SENTINEL WING",
      subtitle: "Perimeter Hardening & Rapid Triage",
      icon: ShieldCheck,
      tagline: "Turn every student device into a hardened defensive bastion.",
      mission:
        "Standardizes digital hygiene protocols: multi-factor authentication (TOTP/FIDO2), master passphrase entropy, zero password reuse, and rapid containment.",
      pillars: [
        "Guides students through Google & Apple session revocation drills.",
        "Promotes open-source, zero-knowledge password managers (Bitwarden).",
        "Executes the 120-minute Golden Hour response framework for 1930 reporting.",
      ],
      deliverable: "Device Hardening Checklists & Incident Response Protocols",
      status: "STANDBY // MONITORING",
    },
    {
      code: "DIV_03 // CJD",
      title: "CYBER JAGROOKTA DIWAS (CJD)",
      subtitle: "CBSE & MHA Monthly Observance",
      icon: CalendarDays,
      tagline: "Monthly institutional dialogues fostering continuous vigilance.",
      mission:
        "Mandated by the Ministry of Home Affairs and CBSE to institute monthly cyber safety dialogues across all classes on the first Wednesday of every month.",
      pillars: [
        "Coordinates 30-minute interactive homeroom awareness presentations.",
        "Directs open floor discussions on gaming cheats, APKs, and fake friends.",
        "Interfaces directly with school principal and CS/IT faculty leadership.",
      ],
      deliverable: "Monthly Assembly Debriefs & Homeroom Slide Decks",
      status: "SCHEDULED // 1ST WEDNESDAY",
    },
    {
      code: "DIV_04 // PEER",
      title: "PEER SENTINEL ALLIANCE",
      subtitle: "Class Ambassadors & Counseling Shield",
      icon: Users,
      tagline: "Empathy first: zero shame, zero peer victim-blaming.",
      mission:
        "Trained student sentinels stationed across Middle (VI-VIII) and Senior (IX-XII) wings to offer confidential first-line support to bullied or scammed peers.",
      pillars: [
        "Provides immediate emotional backing and adult escalation escort.",
        "Combats secret confession handles, doxxing, and cyberbullying.",
        "Ensures incidents are reported with strict confidentiality to mentors.",
      ],
      deliverable: "Confidential Peer Escort & Anti-Bullying Vigilance",
      status: "DEPLOYED // ALL GRADES",
    },
  ];

  const current = divisions[activeDivision];
  const CurrentIcon = current.icon;

  return (
    <section
      id="divisions"
      className="relative px-4 sm:px-8 lg:px-24 py-24 border-b border-white/10 bg-[#08090d]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// TRACKS_08"}</span>
            <span className="text-zinc-600">/</span>
            <span>TACTICAL_WINGS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="CLUB DEFENSE DIVISIONS" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            Structured operational wings dividing technical simulation, defensive hardening,
            monthly CJD mandates, and peer sentinel advocacy.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 hidden sm:block">
          ORGANIZATION: 4 SPECIALIZED SQUADRONS
        </div>
      </div>

      {/* Interactive Track Selector Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Selector Buttons */}
        <div className="lg:col-span-5 space-y-3">
          {divisions.map((div, idx) => {
            const isSelected = activeDivision === idx;
            const IconComp = div.icon;

            return (
              <button
                key={div.code}
                type="button"
                onClick={() => {
                  setActiveDivision(idx);
                  if (typeof window !== "undefined" && window.innerWidth < 1024) {
                    setTimeout(() => {
                      dossierRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }, 50);
                  }
                }}
                className={`w-full text-left p-5 border cursor-pointer transition-all duration-200 relative touch-manipulation active:scale-[0.99] ${
                  isSelected
                    ? "border-[#ff0055] bg-[#0c0e14] shadow-[0_0_20px_rgba(255,0,85,0.12)]"
                    : "border-white/10 bg-[#0a0b0e] hover:border-white/25 active:border-[#ff0055]"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? "text-[#ff0055] font-bold" : "text-zinc-500"}>
                    {div.code}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase">{div.status}</span>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <IconComp
                    className={`w-5 h-5 shrink-0 ${
                      isSelected ? "text-[#ff0055]" : "text-zinc-400"
                    }`}
                  />
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      {div.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">{div.subtitle}</p>
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ff0055] hidden sm:block">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Track Detailed Technical Dossier (Notebook Margin / Lower-Third Style) */}
        <div ref={dossierRef} className="lg:col-span-7">
          <div className="border border-white/20 bg-[#0a0b0e] p-6 sm:p-7 space-y-5 relative">
            {/* Dossier Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-[#ff0055] font-bold">{current.code} SPECIFICATION</span>
              <span className="text-zinc-400">STATUS: {current.status}</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-3">
                <CurrentIcon className="w-7 h-7 text-[#ff0055]" />
                <span>{current.title}</span>
              </h3>
              <p className="text-xs font-mono text-zinc-400 italic">
                &ldquo;{current.tagline}&rdquo;
              </p>
            </div>

            {/* Mission Statement */}
            <p className="text-sm text-zinc-300 font-sans leading-relaxed">
              {current.mission}
            </p>

            {/* Operational Pillars Checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">
                OPERATIONAL PILLARS & CADRE DUTIES:
              </div>
              <ul className="space-y-2 text-xs font-sans text-zinc-300">
                {current.pillars.map((pillar, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-[#ff0055] font-mono font-bold">→</span>
                    <span className="leading-relaxed">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverable Callout */}
            <div className="p-3.5 border border-white/10 bg-[#060709] font-mono text-xs flex items-center justify-between">
              <div>
                <span className="text-zinc-500 block text-[9px]">CORE DELIVERABLE</span>
                <span className="text-zinc-200 font-semibold">{current.deliverable}</span>
              </div>
              <div className="h-3 w-16 zebra-hash opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
