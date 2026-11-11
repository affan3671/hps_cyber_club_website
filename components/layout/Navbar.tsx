"use client";

import React, { useState } from "react";
import HackedText from "../effects/HackedText";
import { Menu, X, ShieldAlert } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Emergency Steps", href: "#protocol" },
    { label: "Scam Simulator", href: "#sandbox" },
    { label: "Common Threats", href: "#vectors" },
    { label: "Our Team", href: "#roster" },
    { label: "Terminal", href: "#terminal" },
    { label: "Safety Pledge", href: "#pledge" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#060709]/95 border-b border-white/10">
      {/* Main Bar */}
      <div className="w-full px-4 lg:px-20 py-3.5 flex items-center justify-between">
        {/* Brand / Club Title */}
        <a
          href="#"
          className="group flex items-center gap-3 relative cursor-pointer"
        >
          <div className="border border-white/20 px-2.5 py-1 bg-[#0a0b0e] group-hover:border-[#ff0055] transition-colors">
            <div className="text-[10px] font-mono text-[#ff0055] font-bold tracking-wider">
              HPS
            </div>
            <div className="text-base font-display font-bold tracking-tight text-white flex items-center gap-1">
              <HackedText text="CYBER SHIELD" />
            </div>
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[11px] font-sans font-medium text-zinc-300">
              Hamdard Public School
            </span>
            <span className="text-[9px] font-mono text-zinc-500">
              Student Cyber Defense Club
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Clear, simple labels for students) */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors duration-150 touch-manipulation cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Anchors */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Emergency 1930 Hotline Anchor */}
          <a
            href="tel:1930"
            className="min-h-[40px] flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 border border-[#ff0055] bg-[#ff0055]/15 hover:bg-[#ff0055] text-white transition-all group font-mono text-xs uppercase font-semibold touch-manipulation cursor-pointer active:scale-95"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#ff0055] group-hover:text-white" />
            <span>HELPLINE 1930</span>
            <span className="hidden xl:inline text-[9px] text-zinc-400 group-hover:text-white/90">
              (Free 24x7)
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 border border-white/20 text-zinc-300 hover:border-white/40 flex items-center justify-center touch-manipulation cursor-pointer bg-white/5 active:bg-white/20"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff0055]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (with data-lenis-prevent to guarantee touch scrolling & clicks) */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent
          className="lg:hidden w-full border-t border-white/10 bg-[#060709] px-6 py-6 space-y-4 pointer-events-auto"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 px-3.5 font-mono text-sm text-zinc-200 hover:text-white hover:bg-white/5 border border-white/10 flex items-center justify-between touch-manipulation cursor-pointer active:bg-white/10"
              >
                <span>{link.label}</span>
                <span className="text-[#ff0055]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="tel:1930"
              className="py-3.5 px-4 bg-[#ff0055] text-white font-mono text-xs uppercase font-bold text-center flex items-center justify-center gap-2 touch-manipulation cursor-pointer shadow-[0_0_15px_rgba(255,0,85,0.3)] active:bg-[#ff1a6b]"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>DIAL 1930 FOR CYBER EMERGENCY</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
