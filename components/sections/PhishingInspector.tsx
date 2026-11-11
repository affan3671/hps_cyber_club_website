"use client";

import React, { useState } from "react";
import { PHISHING_LINKS, SCAM_SCENARIOS } from "../../data/cyberData";
import HackedText from "../effects/HackedText";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle,
  XCircle,
  RotateCcw,
  MessageSquare,
  Globe,
} from "lucide-react";

export default function PhishingInspector() {
  const [activeTab, setActiveTab] = useState<"url" | "scenario">("url");

  // URL Inspector State
  const [urlIndex, setUrlIndex] = useState(0);
  const [urlVerdict, setUrlVerdict] = useState<boolean | null>(null);
  const [urlScore, setUrlScore] = useState(0);
  const [urlCompleted, setUrlCompleted] = useState(false);

  // Scenario Simulator State
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [scenarioVerdict, setScenarioVerdict] = useState<boolean | null>(null);
  const [scenarioScore, setScenarioScore] = useState(0);
  const [scenarioCompleted, setScenarioCompleted] = useState(false);

  const currentLink = PHISHING_LINKS[urlIndex];
  const currentScenario = SCAM_SCENARIOS[scenarioIndex];

  // URL Handling
  const handleUrlDecision = (decisionIsSafe: boolean) => {
    if (urlVerdict !== null || urlCompleted) return;
    setUrlVerdict(decisionIsSafe);

    const isCorrect = decisionIsSafe === currentLink.isSafe;
    if (isCorrect) {
      setUrlScore((prev) => Math.min(prev + 1, PHISHING_LINKS.length));
    }
  };

  const nextUrl = () => {
    if (urlIndex < PHISHING_LINKS.length - 1) {
      setUrlIndex((prev) => prev + 1);
      setUrlVerdict(null);
    } else {
      setUrlCompleted(true);
    }
  };

  const restartUrls = () => {
    setUrlIndex(0);
    setUrlVerdict(null);
    setUrlScore(0);
    setUrlCompleted(false);
  };

  // Scenario Handling
  const handleScenarioDecision = (decisionIsScam: boolean) => {
    if (scenarioVerdict !== null || scenarioCompleted) return;
    setScenarioVerdict(decisionIsScam);

    const isCorrect = decisionIsScam === currentScenario.isScam;
    if (isCorrect) {
      setScenarioScore((prev) => Math.min(prev + 1, SCAM_SCENARIOS.length));
    }
  };

  const nextScenario = () => {
    if (scenarioIndex < SCAM_SCENARIOS.length - 1) {
      setScenarioIndex((prev) => prev + 1);
      setScenarioVerdict(null);
    } else {
      setScenarioCompleted(true);
    }
  };

  const restartScenarios = () => {
    setScenarioIndex(0);
    setScenarioVerdict(null);
    setScenarioScore(0);
    setScenarioCompleted(false);
  };

  const urlPercentage = Math.round((urlScore / PHISHING_LINKS.length) * 100);
  const scenarioPercentage = Math.round((scenarioScore / SCAM_SCENARIOS.length) * 100);

  return (
    <section
      id="sandbox"
      className="relative px-4 sm:px-8 lg:px-24 py-24 border-b border-white/10 bg-[#060709]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// LAB_03"}</span>
            <span className="text-zinc-600">/</span>
            <span>FORENSIC_SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="SCAM & PHISHING SIMULATOR" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            Test your defensive intuition against real adversary artifacts. Dissect suspicious URLs,
            spoofed subdomains, and manipulative social engineering messages.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border border-white/15 bg-[#0a0b0e] p-1 font-mono text-xs">
          <button
            type="button"
            onClick={() => {
              setActiveTab("url");
            }}
            className={`px-4 py-2 flex items-center gap-2 transition-colors touch-manipulation cursor-pointer ${
              activeTab === "url"
                ? "bg-[#ff0055] text-white font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>URL DISSECTOR</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("scenario");
            }}
            className={`px-4 py-2 flex items-center gap-2 transition-colors touch-manipulation cursor-pointer ${
              activeTab === "scenario"
                ? "bg-[#ff0055] text-white font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>MESSAGE SIMULATOR</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Interactive Frame */}
      <div className="mt-12 max-w-4xl mx-auto">
        {activeTab === "url" ? (
          /* ========================================================
             MODE 1: URL FORENSIC DISSECTOR
             ======================================================== */
          <div className="border border-white/20 bg-[#0a0b0e] p-6 sm:p-8 space-y-6 relative">
            {!urlCompleted ? (
              <>
                {/* Sandbox Top Bar */}
                <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-white/10">
                  <span className="text-zinc-400">
                    CASE {urlIndex + 1} OF {PHISHING_LINKS.length}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">
                      ACCURACY:{" "}
                      <span className="text-[#ff0055] font-bold">
                        {urlScore}
                      </span>{" "}
                      / {PHISHING_LINKS.length}
                    </span>
                    <button
                      type="button"
                      onClick={restartUrls}
                      className="text-zinc-400 hover:text-zinc-200 active:text-white px-2 py-1 border border-white/10 hover:border-white/20 active:bg-white/10 flex items-center gap-1.5 text-[11px] touch-manipulation cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>RESET</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Browser URL Address Bar */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                    <span>BROWSER ADDRESS BAR INSPECTOR</span>
                    <span className="text-zinc-600">
                      {"// SCAN CHARACTER SEQUENCE"}
                    </span>
                  </div>
                  <div className="p-4 bg-[#060709] border border-white/15 flex items-center justify-between font-mono text-xs sm:text-sm text-zinc-200 break-all select-all">
                    <span>{currentLink.displayUrl}</span>
                    <span className="shrink-0 ml-3 text-[10px] px-2 py-0.5 border border-white/10 text-zinc-400">
                      TLS / SSL
                    </span>
                  </div>
                </div>

                {/* URL Structural Breakdown Anatomy (Visual Analysis) */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    DECONSTRUCTED URL SEGMENTS:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <div className="p-2.5 border border-white/10 bg-white/[0.02]">
                      <span className="text-[9px] text-zinc-500 block">
                        PROTOCOL
                      </span>
                      <span className="text-zinc-300 font-semibold">
                        {currentLink.breakdown.protocol}
                      </span>
                    </div>
                    <div className="p-2.5 border border-white/10 bg-white/[0.02]">
                      <span className="text-[9px] text-zinc-500 block">
                        SUBDOMAIN
                      </span>
                      <span className="text-zinc-300 font-semibold">
                        {currentLink.breakdown.subdomain}
                      </span>
                    </div>
                    <div className="p-2.5 border border-white/10 bg-white/[0.02]">
                      <span className="text-[9px] text-zinc-500 block">
                        PRIMARY DOMAIN
                      </span>
                      <span className="text-[#ff0055] font-bold">
                        {currentLink.breakdown.actualDomain}
                      </span>
                    </div>
                    <div className="p-2.5 border border-white/10 bg-white/[0.02]">
                      <span className="text-[9px] text-zinc-500 block">
                        PATH
                      </span>
                      <span className="text-zinc-300 truncate block">
                        {currentLink.breakdown.path}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Decision Buttons */}
                {urlVerdict === null ? (
                  <div className="space-y-3 pt-2">
                    <div className="text-center text-xs font-mono text-zinc-400">
                      EXAMINE THE ANATOMY ABOVE: IS THIS DOMAIN GENUINE OR A
                      PHISHING TRAP?
                    </div>
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                      <button
                        type="button"
                        onClick={() => handleUrlDecision(false)}
                        className="p-4 border border-[#ff0055] bg-[#ff0055]/10 hover:bg-[#ff0055] text-white font-bold uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
                      >
                        <ShieldAlert className="w-4 h-4 text-[#ff0055] group-hover:text-white" />
                        <span>VERDICT: MALICIOUS PHISHING</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUrlDecision(true)}
                        className="p-4 border border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 text-white font-bold uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                        <span>VERDICT: VERIFIED SAFE</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Forensic Result Reveal */
                  <div className="space-y-4 pt-2">
                    <div
                      className={`p-4 border font-mono text-xs space-y-2 ${
                        urlVerdict === currentLink.isSafe
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-200"
                          : "border-[#ff0055] bg-[#ff0055]/10 text-rose-200"
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center gap-2">
                          {urlVerdict === currentLink.isSafe ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>
                                EXCELLENT FORENSIC ANALYSIS. YOU WERE CORRECT.
                              </span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-[#ff0055]" />
                              <span>
                                ADVERSARY TRICKED YOU. SECURITY THREAT DETECTED.
                              </span>
                            </>
                          )}
                        </span>
                        <span className="text-[10px] uppercase px-2 py-0.5 border border-white/20">
                          VECTOR: {currentLink.vectorName}
                        </span>
                      </div>

                      <p className="text-zinc-300 font-sans leading-relaxed text-xs sm:text-sm">
                        {currentLink.explanation}
                      </p>

                      <div className="pt-2 border-t border-white/10 text-[11px] text-zinc-400">
                        <span className="text-[#ff0055] font-bold">
                          SENTINEL GOLDEN RULE:{" "}
                        </span>
                        {currentLink.forensicClue}
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={nextUrl}
                        className="px-6 py-3 bg-white text-black hover:bg-zinc-200 font-mono text-xs font-bold uppercase transition-colors cursor-pointer touch-manipulation"
                      >
                        {urlIndex === PHISHING_LINKS.length - 1
                          ? "FINALIZE FORENSIC AUDIT →"
                          : "ADVANCE TO NEXT URL →"}
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* ========================================================
                 URL FORENSIC COMPLETION REPORT
                 ======================================================== */
              <div className="text-center py-6 space-y-6">
                <div className="w-20 h-20 border border-[#ff0055] bg-[#ff0055]/10 mx-auto flex items-center justify-center text-3xl font-mono font-bold text-white shadow-[0_0_25px_rgba(255,0,85,0.3)]">
                  {urlPercentage}%
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#ff0055] uppercase tracking-wider font-bold">
                    [ FORENSIC INSPECTION COMPLETED ]
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    URL Threat Analysis Concluded
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                    You accurately triaged {urlScore} out of{" "}
                    {PHISHING_LINKS.length} web domains.
                  </p>
                </div>

                {/* Rating Badge */}
                <div className="inline-block p-3 border border-white/15 bg-white/[0.02] text-xs font-mono">
                  <span className="text-zinc-500">SENTINEL EVALUATION: </span>
                  <span
                    className={`font-bold ${
                      urlPercentage >= 80
                        ? "text-emerald-400"
                        : urlPercentage >= 60
                        ? "text-yellow-400"
                        : "text-[#ff0055]"
                    }`}
                  >
                    {urlPercentage === 100
                      ? "RANK: MASTER DEFENDER // ZERO BREACHES"
                      : urlPercentage >= 80
                      ? "RANK: VIGILANT SENTINEL // HIGH RESISTANCE"
                      : "RANK: CAUTION ADVISED // ADDITIONAL DRILLS REQUIRED"}
                  </span>
                </div>

                {/* Forensic Lesson Box */}
                <div className="p-4 bg-[#060709] border border-white/10 text-left font-mono text-xs text-zinc-300 space-y-1.5 max-w-lg mx-auto">
                  <div className="text-[10px] text-[#ff0055] font-bold uppercase">
                    INVIOLABLE SENTINEL RULE:
                  </div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    Never evaluate a domain by glancing at the start of the URL.
                    Always scan immediately to the left of the first single forward
                    slash (`/`) to identify the actual root domain and top-level
                    extension.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={restartUrls}
                    className="px-6 py-3 bg-[#ff0055] hover:bg-[#ff1a6b] text-white font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 mx-auto cursor-pointer touch-manipulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RE-INITIALIZE URL FORENSICS</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ========================================================
             MODE 2: REAL-WORLD SCAM MESSAGE SIMULATOR
             ======================================================== */
          <div className="border border-white/20 bg-[#0a0b0e] p-6 sm:p-8 space-y-6 relative">
            {!scenarioCompleted ? (
              <>
                {/* Sandbox Top Bar */}
                <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-white/10">
                  <span className="text-zinc-400">
                    SCENARIO {scenarioIndex + 1} OF {SCAM_SCENARIOS.length}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">
                      SCORE:{" "}
                      <span className="text-[#ff0055] font-bold">
                        {scenarioScore}
                      </span>{" "}
                      / {SCAM_SCENARIOS.length}
                    </span>
                    <button
                      type="button"
                      onClick={restartScenarios}
                      className="text-zinc-400 hover:text-zinc-200 active:text-white px-2 py-1 border border-white/10 hover:border-white/20 active:bg-white/10 flex items-center gap-1.5 text-[11px] touch-manipulation cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>RESET</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Phone / In-app Message Card */}
                <div className="border border-white/15 bg-[#060709] p-5 space-y-4 font-mono">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-white/10 text-white font-bold text-[10px]">
                        {currentScenario.channel.toUpperCase()}
                      </span>
                      <span className="text-zinc-400">
                        {currentScenario.sender}
                      </span>
                    </div>
                    <span className="text-zinc-500 text-[10px]">
                      {currentScenario.timestamp}
                    </span>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/10 font-sans text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {currentScenario.content}
                  </div>

                  <div className="text-[10px] text-zinc-500 flex items-center justify-between">
                    <span>THREAT DIFFICULTY: {currentScenario.difficulty}</span>
                    <span>STATUS: PENDING STUDENT VERDICT</span>
                  </div>
                </div>

                {/* Verdict Action Buttons */}
                {scenarioVerdict === null ? (
                  <div className="space-y-3 pt-2">
                    <div className="text-center text-xs font-mono text-zinc-400">
                      WOULD YOU COMPLY WITH THIS REQUEST OR REPORT IT AS SCAM?
                    </div>
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                      <button
                        type="button"
                        onClick={() => handleScenarioDecision(true)}
                        className="p-4 border border-[#ff0055] bg-[#ff0055]/10 hover:bg-[#ff0055] text-white font-bold uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
                      >
                        <ShieldAlert className="w-4 h-4 text-[#ff0055] group-hover:text-white" />
                        <span>FLAG AS SCAM / EXTORTION</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleScenarioDecision(false)}
                        className="p-4 border border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 text-white font-bold uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer touch-manipulation"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                        <span>VERIFY AS LEGITIMATE</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Scenario Explanation Reveal */
                  <div className="space-y-4 pt-2">
                    <div
                      className={`p-4 border font-mono text-xs space-y-3 ${
                        scenarioVerdict === currentScenario.isScam
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-200"
                          : "border-[#ff0055] bg-[#ff0055]/10 text-rose-200"
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center gap-2">
                          {scenarioVerdict === currentScenario.isScam ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>
                                ACCURATE TRIAGE. YOU AVOIDED THE ADVERSARY TRAP.
                              </span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-[#ff0055]" />
                              <span>
                                COMPROMISE DETECTED. YOU FELL FOR THE SOCIAL
                                TRICK.
                              </span>
                            </>
                          )}
                        </span>
                      </div>

                      <p className="text-zinc-300 font-sans leading-relaxed text-xs sm:text-sm">
                        {currentScenario.explanation}
                      </p>

                      <div className="pt-2 border-t border-white/10 space-y-1">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase font-bold">
                          FORENSIC RED FLAGS IDENTIFIED:
                        </div>
                        <ul className="space-y-1 font-sans text-xs text-zinc-300">
                          {currentScenario.clues.map((clue, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-[#ff0055] font-mono">•</span>
                              <span>{clue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={nextScenario}
                        className="px-6 py-3 bg-white text-black hover:bg-zinc-200 font-mono text-xs font-bold uppercase transition-colors cursor-pointer touch-manipulation"
                      >
                        {scenarioIndex === SCAM_SCENARIOS.length - 1
                          ? "FINALIZE SCENARIO EVALUATION →"
                          : "ADVANCE TO NEXT SCENARIO →"}
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* ========================================================
                 SCENARIO EVALUATION COMPLETION REPORT
                 ======================================================== */
              <div className="text-center py-6 space-y-6">
                <div className="w-20 h-20 border border-[#ff0055] bg-[#ff0055]/10 mx-auto flex items-center justify-center text-3xl font-mono font-bold text-white shadow-[0_0_25px_rgba(255,0,85,0.3)]">
                  {scenarioPercentage}%
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#ff0055] uppercase tracking-wider font-bold">
                    [ SCENARIO SIMULATION CONCLUDED ]
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Social Engineering Evaluation Complete
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                    You accurately triaged {scenarioScore} out of{" "}
                    {SCAM_SCENARIOS.length} high-pressure scenarios.
                  </p>
                </div>

                {/* Rating Badge */}
                <div className="inline-block p-3 border border-white/15 bg-white/[0.02] text-xs font-mono">
                  <span className="text-zinc-500">SENTINEL STATUS: </span>
                  <span
                    className={`font-bold ${
                      scenarioPercentage === 100
                        ? "text-emerald-400"
                        : scenarioPercentage >= 75
                        ? "text-yellow-400"
                        : "text-[#ff0055]"
                    }`}
                  >
                    {scenarioPercentage === 100
                      ? "RANK: ELITE SOCIAL DEFENDER // ZERO PANIC COMPLIANCE"
                      : scenarioPercentage >= 75
                      ? "RANK: DEFENSIVE SENTINEL // RESILIENT TO URGENCIES"
                      : "RANK: SUSCEPTIBLE TO EXTORTION // REVIEW GOLDEN HOUR"}
                  </span>
                </div>

                {/* Core Behavioral Doctrine Box */}
                <div className="p-4 bg-[#060709] border border-white/10 text-left font-mono text-xs text-zinc-300 space-y-1.5 max-w-lg mx-auto">
                  <div className="text-[10px] text-[#ff0055] font-bold uppercase">
                    BEHAVIORAL EMERGENCY DOCTRINE:
                  </div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    Always enforce deliberate latency: &ldquo;Stop. Think. Then Take
                    Action.&rdquo; Remember: Digital Arrest is an extortion myth
                    under Indian law. UPI PINs are exclusively for debits. If in
                    distress, dial Helpline 1930 without delay.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={restartScenarios}
                    className="px-6 py-3 bg-[#ff0055] hover:bg-[#ff1a6b] text-white font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 mx-auto cursor-pointer touch-manipulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RE-INITIALIZE SCENARIO SIMULATOR</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
