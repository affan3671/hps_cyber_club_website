import React from 'react';

export default function ShieldLogo({ className = "w-8 h-8" }) {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Shield Frame */}
        <path 
          d="M50 8 L86 24 V52 C86 73 70 89 50 95 C30 89 14 73 14 52 V24 L50 8Z" 
          fill="#0B1528"
          stroke="#00E5FF" 
          strokeWidth="3" 
          strokeLinejoin="round"
        />

        {/* Center node lines */}
        <path 
          d="M50 34 L38 48 M50 34 L62 48 M38 48 L50 64 M62 48 L50 64 M50 34 L50 64" 
          stroke="#00E5FF" 
          strokeWidth="2" 
          strokeLinecap="round"
        />

        <circle cx="50" cy="34" r="3" fill="#00E5FF" />
        <circle cx="38" cy="48" r="3" fill="#39FF88" />
        <circle cx="62" cy="48" r="3" fill="#39FF88" />
        <circle cx="50" cy="64" r="3" fill="#00E5FF" />
      </svg>
    </div>
  );
}
