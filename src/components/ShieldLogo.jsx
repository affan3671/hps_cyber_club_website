import React from 'react';

export default function ShieldLogo({ className = "w-8 h-8", alt = "Cyber Shield HPS Logo" }) {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}shield-icon.svg`}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
