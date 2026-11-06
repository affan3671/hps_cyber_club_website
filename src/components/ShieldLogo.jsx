import React from 'react';

export default function ShieldLogo({ className = "w-9 h-9", animated = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(0,229,255,0.7)]"
      >
        <defs>
          <linearGradient id="shieldGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#39FF88" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <radialGradient id="shieldFillGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#111F38" />
            <stop offset="100%" stopColor="#070E1A" />
          </radialGradient>
        </defs>

        {/* Outer Shield Frame */}
        <path 
          d="M50 8 L88 23 V52 C88 74 71 90 50 96 C29 90 12 74 12 52 V23 L50 8Z" 
          fill="url(#shieldFillGrad)"
          stroke="url(#shieldGradComp)" 
          strokeWidth="3.5" 
          strokeLinejoin="round"
        />

        {/* Inner Cyber Border */}
        <path 
          d="M50 18 L78 29 V50 C78 67 65 79 50 85 C35 79 22 67 22 50 V29 L50 18Z" 
          stroke="#00E5FF" 
          strokeWidth="1.2" 
          strokeDasharray="4 2" 
          opacity="0.65"
          fill="none" 
        />

        {/* Central Cyber Node Network */}
        <path 
          d="M50 35 L38 50 M50 35 L62 50 M38 50 L50 66 M62 50 L50 66 M50 35 L50 66" 
          stroke="#00E5FF" 
          strokeWidth="1.8" 
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Glowing Nodes */}
        <circle cx="50" cy="35" r="3.5" fill="#00E5FF" className={animated ? "animate-pulse" : ""} />
        <circle cx="38" cy="50" r="3" fill="#39FF88" />
        <circle cx="62" cy="50" r="3" fill="#39FF88" />
        <circle cx="50" cy="66" r="3.2" fill="#8B5CF6" />
      </svg>
    </div>
  );
}

