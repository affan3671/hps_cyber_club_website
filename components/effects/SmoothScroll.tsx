"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // On mobile / touch devices, DO NOT run virtual smooth-scrolling.
    // Native mobile momentum scrolling is already 120Hz smooth and does NOT intercept or cancel button taps.
    const isTouchOrMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 1024 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    if (isTouchOrMobile) {
      ScrollTrigger.refresh();
      return;
    }

    // On desktop, run Lenis with touch interception disabled
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
