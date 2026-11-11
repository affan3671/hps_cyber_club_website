"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface HackedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div" | "p";
  className?: string;
  scrambleOnMount?: boolean;
  scrambleOnHover?: boolean;
  triggerOnView?: boolean;
  duration?: number; // total duration in ms (defaults to 500ms / 0.5s)
  speed?: number; // interval tick rate in ms (default 20ms)
  characters?: string;
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#";

export default function HackedText({
  text,
  as: Component = "span",
  className = "",
  scrambleOnMount = true,
  scrambleOnHover = true,
  triggerOnView = true,
  duration = 500, // 0.5 seconds
  speed = 20,
  characters = DEFAULT_CHARS,
}: HackedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  const startScramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    const targetText = text;
    const length = targetText.length;
    // Calculate total ticks so entire animation strictly completes in ~0.5s (duration ms)
    const tickRate = Math.min(speed, 20);
    const totalTicks = Math.max(duration / tickRate, 12);
    const iterationStep = Math.max(length / totalTicks, 0.4);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return targetText
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration) {
              return targetText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
      });

      if (iteration >= length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(targetText);
      }

      iteration += iterationStep;
    }, tickRate);
  }, [text, characters, speed, duration]);

  useEffect(() => {
    if (scrambleOnMount) {
      startScramble();
    }

    if (triggerOnView && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              hasAnimatedRef.current = true;
              startScramble();
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(elementRef.current);

      return () => {
        observer.disconnect();
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scrambleOnMount, triggerOnView, startScramble]);

  const handleMouseEnter = () => {
    if (scrambleOnHover) {
      startScramble();
    }
  };

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={elementRef as any}
      className={`inline-block tracking-tight select-none cursor-default ${className}`}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
      data-value={text}
    >
      {displayText}
    </Component>
  );
}
