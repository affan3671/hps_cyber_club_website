"use client";

import React, { useEffect, useRef } from "react";

interface InteractiveGridProps {
  className?: string;
  perspective?: boolean;
}

export default function InteractiveGrid({
  className = "",
  perspective = true,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates and intensity
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
    };

    // Responsive cell size
    let cellSize = 44;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Adjust density for smaller screens
      if (width < 768) {
        cellSize = 36;
        mouse.radius = 120;
      } else {
        cellSize = 48;
        mouse.radius = 200;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Active illuminated cells with fade decay
    const activeCells = new Map<string, number>();

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / cellSize) + 1;
      const rows = Math.ceil(height / cellSize) + 1;

      // Draw faint structural blueprint lines
      ctx.lineWidth = 1;

      for (let i = 0; i < cols; i++) {
        const x = i * cellSize;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let j = 0; j < rows; j++) {
        const y = j * cellSize;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Proximity highlight & crosshairs
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize;
          const y = j * cellSize;
          const key = `${i}_${j}`;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let intensity = activeCells.get(key) || 0;

          if (dist < mouse.radius) {
            const proximity = 1 - dist / mouse.radius;
            intensity = Math.max(intensity, proximity);
          }

          // Decay intensity smoothly
          intensity *= 0.94;

          if (intensity > 0.01) {
            activeCells.set(key, intensity);

            // Fill active cell with cyber magenta glow
            ctx.fillStyle = `rgba(255, 0, 85, ${intensity * 0.18})`;
            ctx.fillRect(x, y, cellSize, cellSize);

            // Draw glowing cell border
            ctx.strokeStyle = `rgba(255, 0, 85, ${intensity * 0.45})`;
            ctx.strokeRect(x, y, cellSize, cellSize);

            // Draw subtle corner tick
            ctx.strokeStyle = `rgba(255, 255, 255, ${intensity * 0.8})`;
            ctx.beginPath();
            ctx.moveTo(x - 3, y);
            ctx.lineTo(x + 3, y);
            ctx.moveTo(x, y - 3);
            ctx.lineTo(x, y + 3);
            ctx.stroke();
          } else {
            activeCells.delete(key);
            // Default muted crosshair at intersections every 2 cells
            if (i % 2 === 0 && j % 2 === 0) {
              ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
              ctx.beginPath();
              ctx.moveTo(x - 2, y);
              ctx.lineTo(x + 2, y);
              ctx.moveTo(x, y - 2);
              ctx.lineTo(x, y + 2);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [perspective]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-30"
      />
      {/* Radial vignette fade from void black edges to center */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#060709]/70 to-[#060709] pointer-events-none" />
    </div>
  );
}

