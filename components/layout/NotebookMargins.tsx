"use client";

import React, { useEffect, useState } from "react";

export default function NotebookMargins() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 hidden lg:block overflow-hidden"
      aria-hidden="true"
    >
      {/* ========================================================
          VIEWFINDER / NOTEBOOK MARGIN RAILS & INTERSECTIONS
          (Directly matching reference image corner crop marks)
          ======================================================== */}

      {/* Left Vertical Guide Rail */}
      <div className="absolute top-0 bottom-0 left-6 xl:left-12 w-[1px] bg-white/[0.08] select-none">
        {/* Vertical Margin Brand Tag */}
        <div className="absolute top-20 -left-2 text-[10px] font-mono text-zinc-500 tracking-widest rotate-90 origin-left flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055]" />
          <span>CYBER SHIELD HPS</span>
          <span className="text-zinc-600">{"//"}</span>
          <span className="text-zinc-600">NOTEBOOK_MARGIN</span>
        </div>
      </div>

      {/* Right Vertical Guide Rail & Scroll Tracker */}
      <div className="absolute top-0 bottom-0 right-6 xl:right-12 w-[1px] bg-white/[0.08] select-none">
        {/* Dynamic Vertical Scroll Progress Line */}
        <div
          className="absolute top-0 right-0 w-[2px] bg-[#ff0055] transition-all duration-75"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Scroll Percentage Marker */}
        <div className="absolute top-20 -right-2 text-[10px] font-mono text-zinc-400 tracking-widest -rotate-90 origin-right flex items-center gap-2">
          <span className="text-[#ff0055] font-bold">
            {scrollProgress.toFixed(0)}%
          </span>
          <span className="text-zinc-600">{"//"}</span>
          <span className="text-zinc-500">PAGE</span>
        </div>
      </div>

      {/* Top Horizontal Viewfinder Guide Line */}
      <div className="absolute left-0 right-0 top-4 xl:top-6 h-[1px] bg-white/[0.08]" />

      {/* Bottom Horizontal Viewfinder Guide Line */}
      <div className="absolute left-0 right-0 bottom-4 xl:bottom-6 h-[1px] bg-white/[0.08]" />

      {/* Corner Crop Crosshairs (Intersections as in the reference photo) */}
      {/* Top-Left Corner Crosshair */}
      <div className="absolute top-4 xl:top-6 left-6 xl:left-12 w-6 h-6 -translate-x-3 -translate-y-3">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#ff0055]/70" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#ff0055]/70" />
      </div>

      {/* Top-Right Corner Crosshair */}
      <div className="absolute top-4 xl:top-6 right-6 xl:right-12 w-6 h-6 translate-x-3 -translate-y-3">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/40" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/40" />
      </div>

      {/* Bottom-Left Corner Crosshair */}
      <div className="absolute bottom-4 xl:bottom-6 left-6 xl:left-12 w-6 h-6 -translate-x-3 translate-y-3">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/40" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/40" />
      </div>

      {/* Bottom-Right Corner Crosshair with Reference-Image Style Badge */}
      <div className="absolute bottom-4 xl:bottom-6 right-6 xl:right-12 w-6 h-6 translate-x-3 translate-y-3">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#ff0055]/70" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#ff0055]/70" />
      </div>

      {/* Bottom-Right Technical Seal (Echoing the reference image watermark) */}
      <div className="absolute bottom-6 xl:bottom-8 right-8 xl:right-14 text-[9px] font-mono text-zinc-500 flex items-center gap-2 select-none">
        <div className="w-2 h-2 border border-[#ff0055] bg-[#ff0055]/20 flex items-center justify-center">
          <span className="w-1 h-1 bg-[#ff0055]" />
        </div>
        <span className="text-zinc-500 tracking-wider">SEC_CADRE // HPS</span>
      </div>
    </div>
  );
}
