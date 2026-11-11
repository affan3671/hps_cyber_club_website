"use client";

import React from "react";
import HackedText from "../effects/HackedText";
import InteractiveGrid from "../effects/InteractiveGrid";
import { Shield, Terminal, ArrowUpRight, AlertTriangle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between pt-8 pb-14 px-4 sm:px-8 lg:px-20 border-b border-white/10 overflow-hidden">
      {/* Background Subtle Blueprint Grid Canvas */}
      <InteractiveGrid className="z-0" perspective={false} />

      {/* Hero Registration Coordinates Top Bar */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-500 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[#ff0055] font-bold">HPS</span>
          <span className="text-zinc-600">{"//"}</span>
          <span className="text-zinc-300">STUDENT CYBER DEFENSE WING</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-zinc-300">MHA & CBSE COMPLIANT</span>
        </div>
      </div>

      {/* Main Asymmetric Editorial Grid */}
      <div className="relative z-10 my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Asymmetrical Typography & Hacked Text Headline */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055]" />
            <span className="text-zinc-300">CYBER AWARENESS & SAFETY // GRADES 6-12</span>
          </div>

          {/* Primary Brutalist Headline with Hacked Scramble Effect */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              <span className="block text-zinc-400 text-lg sm:text-2xl font-mono tracking-widest mb-1">
                HAMDARD PUBLIC SCHOOL
              </span>
              <HackedText text="CYBER SHIELD" />
              <span className="block text-zinc-300 text-3xl sm:text-5xl xl:text-6xl mt-1">
                <HackedText text="DEFENSE CLUB" />
              </span>
            </h1>
          </div>

          {/* Student-Friendly Description */}
          <p className="max-w-xl text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
            Learn to spot phishing tricks, identify fake social media accounts, protect your game logins,
            and know the exact 5 emergency steps to take if you or your family ever get targeted by a scam.
          </p>

          {/* Action Anchors */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            {/* Emergency 1930 Action Button */}
            <a
              href="#protocol"
              className="px-5 py-3.5 bg-[#ff0055] hover:bg-[#ff1a6b] text-white font-bold tracking-wider uppercase transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,85,0.3)] cursor-pointer"
            >
              <Shield className="w-4 h-4" />
              <span>EMERGENCY STEPS (1930)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Scam Sandbox Button */}
            <a
              href="#sandbox"
              className="px-5 py-3.5 border border-white/20 hover:border-white/50 bg-[#0a0b0e] text-zinc-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>TRY SCAM SIMULATOR</span>
            </a>

            {/* In-Browser Terminal Button */}
            <a
              href="#terminal"
              className="px-4 py-3.5 border border-white/10 hover:border-[#ff0055]/50 bg-white/5 text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-[#ff0055]" />
              <span>TERMINAL</span>
            </a>
          </div>
        </div>

        {/* Right Column: Reference-Image Inspired Architectural Lower-Third Data Card */}
        <div className="lg:col-span-5 w-full">
          <div className="border border-white/20 bg-[#0a0b0e] p-6 space-y-5">
            {/* Header Telemetry */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-zinc-400">STUDENT QUICK REFERENCE</span>
              <span className="text-[#ff0055] font-bold">AT A GLANCE</span>
            </div>

            {/* Lower-Third Technical Grid Matrix (Directly inspired by user image reference) */}
            <div className="border border-white/10 bg-[#060709] divide-y divide-white/10">
              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  GOLDEN RULE
                </div>
                <div className="col-span-2 p-3 text-white font-bold tracking-wider flex items-center">
                  STOP. THINK. ACT.
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  HELPLINE
                </div>
                <div className="col-span-2 p-3 text-[#ff0055] font-bold tracking-wider flex items-center">
                  DIAL 1930 (FREE & 24x7)
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  MEETINGS
                </div>
                <div className="col-span-2 p-3 text-zinc-300 font-medium tracking-wide flex items-center">
                  1ST WEDNESDAY MONTHLY (CJD)
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  CREED
                </div>
                <div className="col-span-2 p-3 text-zinc-300 font-medium tracking-wide flex items-center">
                  DEFENSE ONLY // ZERO VICTIM BLAMING
                </div>
              </div>
            </div>

            {/* Real-time Metric Indicators */}
            <div className="grid grid-cols-2 gap-3 pt-1 font-mono">
              <div className="p-3 border border-white/10 bg-white/[0.02]">
                <div className="text-[10px] text-zinc-500">PRACTICE TESTS</div>
                <div className="text-xl font-bold text-white mt-0.5">1,480+</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">● Solved by Students</div>
              </div>
              <div className="p-3 border border-white/10 bg-white/[0.02]">
                <div className="text-[10px] text-zinc-500">MEMBERS PLEDGED</div>
                <div className="text-xl font-bold text-white mt-0.5">2,150+</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">● Active Sentinels</div>
              </div>
            </div>

            {/* Bottom Barcode / Zebra Hash Lines (as seen in the reference lower-third) */}
            <div className="flex items-center justify-between pt-1">
              <div className="h-3 w-28 zebra-hash opacity-60" />
              <div className="text-[10px] font-mono text-zinc-500">HAMDARD PUBLIC SCHOOL</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker Anchor */}
      <div className="relative z-10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono border-t border-white/10 text-zinc-500">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#ff0055] shrink-0" />
          <span className="text-zinc-300">
            Emergency Notice: If money was unauthorizedly sent from a bank or UPI app, call Helpline 1930 within 2 hours.
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] shrink-0">
          <span className="text-zinc-400">EXPLORE EMERGENCY STEPS</span>
          <span className="text-[#ff0055]">↓</span>
        </div>
      </div>
    </section>
  );
}
