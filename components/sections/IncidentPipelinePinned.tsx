"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INCIDENT_STEPS } from "../../data/cyberData";
import HackedText from "../effects/HackedText";
import {
  ShieldAlert,
  PhoneCall,
  FileCheck2,
  Users2,
  KeyRound,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function IncidentPipelinePinned() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [
    ShieldAlert,
    PhoneCall,
    FileCheck2,
    Users2,
    KeyRound,
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stepElements = containerRef.current?.querySelectorAll(".incident-step-card");
    if (!stepElements || stepElements.length === 0) return;

    stepElements.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top center+=100",
        end: "bottom center",
        onEnter: () => {
          setActiveStepIndex(index);
        },
        onEnterBack: () => {
          setActiveStepIndex(index);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger && typeof trigger.vars.trigger === "object") {
          // Clean up our triggers
        }
      });
    };
  }, []);

  const activeStep = INCIDENT_STEPS[activeStepIndex];
  const CurrentIcon = stepIcons[activeStepIndex] || ShieldAlert;

  return (
    <section
      id="protocol"
      ref={containerRef}
      className="relative px-4 sm:px-8 lg:px-20 py-20 border-b border-white/10 bg-[#060709]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// PROTOCOL"}</span>
            <span className="text-zinc-600">/</span>
            <span>EMERGENCY_STEPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="ANATOMY OF A BREACH" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            What to do immediately if you get tricked, threatened, or scammed online. Follow these 5
            clear steps to protect yourself and your family.
          </p>
        </div>

        {/* Golden Hour Countdown Metric */}
        <div className="border border-[#ff0055] bg-[#ff0055]/10 p-3.5 font-mono text-xs space-y-1">
          <div className="flex items-center gap-2 text-[#ff0055] font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>THE 2-HOUR &ldquo;GOLDEN HOUR&rdquo;</span>
          </div>
          <div className="text-zinc-300 text-[11px]">
            Dial 1930 immediately if money was debited so banks can freeze the transaction.
          </div>
        </div>
      </div>

      {/* GSAP Sticky Split-Screen Architecture */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Pinned Dynamic Telemetry Console */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="border border-white/20 bg-[#0a0b0e] p-6 space-y-5">
            {/* Radar Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-zinc-400">EMERGENCY GUIDE</span>
              <span className="text-[#ff0055] font-bold">STEP {activeStepIndex + 1} OF 5</span>
            </div>

            {/* Active Stage Radar Display */}
            <div className="p-4 border border-white/10 bg-[#060709] space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 border border-[#ff0055] bg-[#ff0055]/15 flex items-center justify-center text-[#ff0055]">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div className="text-right font-mono text-xs text-zinc-400">
                  <span>TIME: {activeStep.timeWindow}</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">CURRENT ACTION</div>
                <div className="text-lg font-display font-bold text-white mt-0.5">
                  {activeStep.title}
                </div>
              </div>
            </div>

            {/* 5-Step Kinetic Progress Indicators */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                PROGRESS ACROSS 5 PHASES:
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {INCIDENT_STEPS.map((step, idx) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => {
                      setActiveStepIndex(idx);
                      const el = document.getElementById(`step-anchor-${idx}`);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="py-2.5 px-1 cursor-pointer touch-manipulation group flex flex-col items-center gap-1.5 min-h-[44px] justify-center active:scale-95 transition-transform"
                    title={step.title}
                  >
                    <span
                      className={`text-[10px] font-mono font-bold transition-colors ${
                        idx === activeStepIndex ? "text-[#ff0055]" : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      0{step.step}
                    </span>
                    <div
                      className={`h-2 w-full transition-all duration-300 ${
                        idx === activeStepIndex
                          ? "bg-[#ff0055]"
                          : idx < activeStepIndex
                          ? "bg-white/40"
                          : "bg-white/10 group-hover:bg-white/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Evidence Checklist Invariant (Written for students) */}
            <div className="p-3.5 border border-white/10 bg-white/[0.02] text-xs font-mono space-y-2">
              <div className="text-zinc-300 flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff0055]" />
                <span>WHAT TO PRESERVE (DO NOT DELETE):</span>
              </div>
              <ul className="text-[11px] text-zinc-400 space-y-1.5 list-none pl-1">
                <li className="flex items-center gap-2">
                  <span className="text-[#ff0055]">■</span>
                  <span>Screenshots of all chat messages & SMS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff0055]">■</span>
                  <span>Caller phone number & exact time of the call</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff0055]">■</span>
                  <span>The 12-digit UPI reference ID (UTR) from your bank</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff0055]">■</span>
                  <span>Keep your calm — you are the victim, not at fault</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Scrolling Narrative Stages */}
        <div className="lg:col-span-7 space-y-12">
          {INCIDENT_STEPS.map((step, idx) => {
            const StepIcon = stepIcons[idx] || ShieldAlert;
            const isCurrent = idx === activeStepIndex;

            return (
              <div
                key={step.step}
                id={`step-anchor-${idx}`}
                className={`incident-step-card border p-6 sm:p-7 transition-all duration-300 ${
                  isCurrent
                    ? "border-[#ff0055] bg-[#0c0e14] shadow-[0_0_25px_rgba(255,0,85,0.08)]"
                    : "border-white/10 bg-[#0a0b0e] hover:border-white/20"
                }`}
              >
                <div className="space-y-5">
                  {/* Step Code & Category */}
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono">
                    <span
                      className={`px-2 py-0.5 font-bold ${
                        isCurrent
                          ? "bg-[#ff0055] text-white"
                          : "bg-white/10 text-zinc-400"
                      }`}
                    >
                      STEP 0{step.step}
                    </span>
                    <span className="text-zinc-500 font-mono text-[11px]">{step.timeWindow}</span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 border mt-0.5 shrink-0 ${
                        isCurrent
                          ? "border-[#ff0055] text-[#ff0055] bg-[#ff0055]/10"
                          : "border-white/10 text-zinc-400 bg-white/5"
                      }`}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                      <div className="text-xs font-mono text-zinc-400 mt-0.5">
                        {step.category}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                    {step.description}
                  </p>

                  {/* Direct Protocol Action Box */}
                  <div className="p-3.5 border-l-2 border-[#ff0055] bg-white/[0.03] space-y-1">
                    <div className="text-[10px] font-mono uppercase text-[#ff0055] font-bold">
                      WHAT YOU MUST DO
                    </div>
                    <p className="text-xs font-mono text-zinc-200 leading-relaxed">
                      {step.protocolAction}
                    </p>
                  </div>

                  {/* Red Flags Observed */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      WARNING SIGNS:
                    </div>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-zinc-400 font-sans">
                      {step.redFlags.map((flag, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-[#ff0055] font-mono">•</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Emergency Button for Helpline 1930 */}
                  {step.isCritical && (
                    <div className="pt-2">
                      <a
                        href="tel:1930"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#ff0055] hover:bg-[#ff1a6b] text-white font-mono text-xs font-bold uppercase transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>DIAL 1930 HELPLINE NOW</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
