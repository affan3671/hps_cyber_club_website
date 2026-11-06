import React from 'react';
import { PhoneCall, AlertTriangle, ExternalLink, Shield } from 'lucide-react';

export default function EmergencyStrip() {
  return (
    <aside aria-label="Emergency Cybercrime Assistance" className="relative z-30 bg-gradient-to-r from-red-950/80 via-[#0B1528] to-red-950/80 border-b border-red-500/30 backdrop-blur-md px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
        {/* Left Side: Alert Text */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <div className="flex items-center gap-1.5 text-red-300 font-semibold uppercase tracking-wider text-xs">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            <span>Emergency Cybercrime Action</span>
          </div>
          <span className="hidden md:inline text-slate-400">|</span>
          <p className="text-slate-200 text-xs sm:text-sm font-medium">
            Been scammed or noticed unauthorized debit? <span className="text-white font-bold">Act within the Golden Hour!</span>
          </p>
        </div>

        {/* Right Side: Quick Action CTA Buttons */}
        <div className="flex items-center gap-2.5 ml-auto sm:ml-0 flex-wrap">
          <a
            href="tel:1930"
            className="inline-flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-md shadow-glow-danger transition-all duration-200 hover:scale-105"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
            <span>Call 1930 Now</span>
          </a>

          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-cyber-surface hover:bg-slate-800 text-cyber-cyan border border-cyber-cyan/30 text-xs px-3 py-1.5 rounded-md transition-colors"
          >
            <span>cybercrime.gov.in</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>
    </aside>
  );
}

