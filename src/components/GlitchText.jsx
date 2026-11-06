import React, { useState, useEffect } from 'react';

export default function GlitchText({ text, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const chars = '01#_%/><*!&';
    
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      setIsDone(true);
      return;
    }

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        // Scramble next char slightly
        const currentSlice = text.slice(0, currentIndex);
        const randomChar = currentIndex < text.length ? chars[Math.floor(Math.random() * chars.length)] : '';
        setDisplayText(currentSlice + randomChar);
        currentIndex++;
      } else {
        setDisplayText(text);
        setIsDone(true);
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`inline-block relative ${className}`}>
      <span>{displayText}</span>
      {!isDone && (
        <span className="inline-block w-2.5 h-6 ml-1 bg-[#00E5FF] animate-pulse align-middle" />
      )}
    </span>
  );
}

