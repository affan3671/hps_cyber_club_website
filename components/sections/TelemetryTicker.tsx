"use client";

import React from "react";

export default function TelemetryTicker() {
  const items = [
    "EMERGENCY HELPLINE: DIAL 1930 FOR FINANCIAL FRAUD (TOLL-FREE 24x7)",
    "THE 2-HOUR GOLDEN HOUR: REPORT FAST TO FREEZE TRANSACTIONS",
    "UPI INVARIANT: YOU NEVER ENTER A UPI PIN TO RECEIVE MONEY",
    "ALERT: 'DIGITAL ARREST' IS A SCAM // POLICE NEVER ARREST OVER VIDEO CALLS",
    "CYBER JAGROOKTA DIWAS: PEER SESSIONS ON 1ST WEDNESDAY MONTHLY",
    "WHITE-HAT CREED: DEFENSE ONLY // ZERO TOLERANCE FOR CYBERBULLYING",
    "OFFICIAL GOVERNMENT PORTAL: CYBERCRIME.GOV.IN",
  ];

  return (
    <div className="w-full bg-[#0a0b0e] border-y border-white/10 py-2.5 overflow-hidden select-none">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 text-xs font-mono tracking-wider text-zinc-300 whitespace-nowrap"
          >
            <span className="text-[#ff0055] font-bold">●</span>
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
