"use client";

import React from "react";
import { ArrowUp, AlertCircle } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040507] border-t border-white/10 px-4 sm:px-8 lg:px-24 py-16 text-xs font-mono">
      {/* Top Footer Manifest Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-start">
        {/* Left Column: Institutional Seal */}
        <div className="md:col-span-5 space-y-4">
          <div className="border border-white/20 p-4 bg-[#08090d] inline-block space-y-2">
            <div className="text-[10px] text-[#ff0055] font-bold">
              [ HPS_SEC_ARCHIVE {"//"} 2026 ]
            </div>
            <div className="text-xl font-display font-bold text-white tracking-tight">
              CYBER SHIELD HPS
            </div>
            <div className="text-[11px] text-zinc-400">
              Department of Computer Science & Information Technology
            </div>
          </div>

          <p className="text-zinc-500 font-sans text-xs leading-relaxed max-w-sm">
            Hamdard Public School, Sangam Vihar, New Delhi. Dedicated to cultivating defensive digital
            hygiene, ethical skepticism, and zero-panic triage across the student body.
          </p>

          <div className="flex items-center gap-3 text-[10px] text-zinc-500">
            <span className="text-emerald-400">● ZERO_DATA_TRACKING</span>
            <span>{"//"}</span>
            <span>NO COOKIES</span>
            <span>{"//"}</span>
            <span>STATIC DEPLOYMENT</span>
          </div>
        </div>

        {/* Center: Statutory Mandates & Links */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-zinc-300 font-bold uppercase tracking-wider pb-1 border-b border-white/10">
            STATUTORY DIRECTIVES
          </div>
          <ul className="space-y-2 text-zinc-400">
            <li>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>MHA Cybercrime Reporting Portal</span>
                <span className="text-zinc-600">cybercrime.gov.in</span>
              </a>
            </li>
            <li>
              <a
                href="https://i4c.mha.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Indian Cyber Crime Coordination Centre</span>
                <span className="text-zinc-600">i4c.mha.gov.in</span>
              </a>
            </li>
            <li>
              <a
                href="https://sancharsaathi.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>DoT Sanchar Saathi & Chakshu</span>
                <span className="text-zinc-600">sancharsaathi.gov.in</span>
              </a>
            </li>
            <li>
              <a
                href="https://cbse.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>CBSE Cyber Jagrookta Diwas (CJD)</span>
                <span className="text-zinc-600">cbse.gov.in</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Quick Emergency Actions */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-zinc-300 font-bold uppercase tracking-wider pb-1 border-b border-white/10">
            RAPID DISPATCH
          </div>
          <div className="p-3 border border-[#ff0055] bg-[#ff0055]/10 space-y-2">
            <div className="text-[#ff0055] font-bold text-[11px] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>HELPLINE 1930</span>
            </div>
            <p className="text-[10px] text-zinc-300">
              National 24x7 toll-free helpline for rapid freeze of unauthorized financial debits.
            </p>
            <a
              href="tel:1930"
              className="block text-center py-2 bg-[#ff0055] text-white font-bold text-xs hover:bg-[#ff1a6b] transition-colors"
            >
              CALL 1930 NOW
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-full py-2.5 border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-colors text-xs touch-manipulation cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>RETURN TO SUMMIT [TOP]</span>
          </button>
        </div>
      </div>

      {/* Bottom Architectural Blueprint Bar */}
      <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] text-zinc-500">
        <div className="flex items-center gap-4">
          <div className="h-3 w-24 zebra-hash opacity-60" />
          <span>
            © 2026 HAMDARD PUBLIC SCHOOL CYBER DEFENSE WING. WHITE-HAT DEFENSE ONLY.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span>LAT: 28.5144° N</span>
          <span className="text-zinc-700">|</span>
          <span>LON: 77.2511° E</span>
          <span className="text-zinc-700">|</span>
          <span className="text-[#ff0055]">STATUS: ARMED</span>
        </div>
      </div>
    </footer>
  );
}
