import React, { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Characters: binary, hex, and cyber symbols
    const chars = '01100101010101101ABCDEF#$<>/*&%';
    const fontSize = 14;
    const columns = Math.floor(width / 28);
    const drops = new Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    let frameCount = 0;

    const render = () => {
      frameCount++;
      // Run every second frame to maintain ~30-60fps smoothly without consuming GPU
      if (frameCount % 2 === 0) {
        ctx.fillStyle = 'rgba(5, 11, 20, 0.2)';
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * 28;
          const y = drops[i] * fontSize;

          // Subtle cyan/green colors
          if (Math.random() > 0.85) {
            ctx.fillStyle = 'rgba(57, 255, 136, 0.4)';
          } else {
            ctx.fillStyle = 'rgba(0, 229, 255, 0.25)';
          }

          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.985) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Cyber Radial Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px]" />

      {/* Canvas Digital Rain */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-35" 
      />

      {/* High-tech scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
    </div>
  );
}

