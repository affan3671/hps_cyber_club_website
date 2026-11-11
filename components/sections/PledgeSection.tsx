"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { PLEDGE_RULES } from "../../data/cyberData";
import HackedText from "../effects/HackedText";
import { ShieldCheck, Check, Copy, CheckCheck } from "lucide-react";

export default function PledgeSection() {
  const [checkedRules, setCheckedRules] = useState<Record<string, boolean>>({});
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [issuedCredential, setIssuedCredential] = useState<{
    id: string;
    hash: string;
    timestamp: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleRule = (id: string) => {
    setCheckedRules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allRulesChecked =
    PLEDGE_RULES.length > 0 &&
    PLEDGE_RULES.every((rule) => !!checkedRules[rule.id]);

  const handleCommitPledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allRulesChecked || !studentName.trim()) return;

    // Fire cyber celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff0055", "#ffffff", "#71717a"],
      });
    } catch {
      // fallback
    }

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const mockHash = `0xHPS_${Math.random().toString(16).substring(2, 10).toUpperCase()}_SENTINEL`;
    const dateStr = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    setIssuedCredential({
      id: `HPS-SENTINEL-${randomId}`,
      hash: mockHash,
      timestamp: dateStr,
    });
  };

  const copyCredential = () => {
    if (!issuedCredential) return;
    navigator.clipboard.writeText(
      `CYBER SHIELD HPS // CERTIFIED SENTINEL\nName: ${studentName}\nGrade: ${studentGrade}\nID: ${issuedCredential.id}\nHash: ${issuedCredential.hash}\nIssued by Hamdard Public School Cyber Defense Wing & I4C`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="pledge"
      className="relative px-4 sm:px-8 lg:px-24 py-24 border-b border-white/10 bg-[#08090d]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// STATUTORY_06"}</span>
            <span className="text-zinc-600">/</span>
            <span>MHA_I4C_PLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="THE STUDENT CYBER SAFETY PLEDGE" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            Formalized in alignment with the Ministry of Home Affairs (MHA) and Indian Cyber Crime
            Coordination Centre (I4C). Reaffirm your commitment to defensive white-hat integrity.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 hidden sm:block">
          MANDATE: NATIONAL CYBER HYGIENE CITIZEN CREED
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-12">
        {/* 7-Point Interactive Checklist */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-between">
            <span>COMMITMENT CHECKLIST (ALL 7 REQUIRED)</span>
            <span className="text-[#ff0055]">
              {Object.values(checkedRules).filter(Boolean).length} / {PLEDGE_RULES.length} CONFIRMED
            </span>
          </div>

          <div className="space-y-3">
            {PLEDGE_RULES.map((rule) => {
              const isChecked = !!checkedRules[rule.id];

              return (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => toggleRule(rule.id)}
                  className={`w-full text-left p-4 border cursor-pointer transition-all flex items-start gap-4 touch-manipulation active:bg-white/10 ${
                    isChecked
                      ? "border-[#ff0055] bg-[#0c0e14]"
                      : "border-white/10 bg-[#0a0b0e] hover:border-white/20 active:border-[#ff0055]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? "border-[#ff0055] bg-[#ff0055] text-white"
                        : "border-white/20 bg-white/5"
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="space-y-1 font-mono text-xs flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500 font-bold">{rule.code}</span>
                      <span className="text-zinc-200 font-sans text-xs sm:text-sm">
                        {rule.rule}
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      RATIONALE: {rule.technicalReason}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sentinel Credential Issuance Form */}
        {!issuedCredential ? (
          <div className="border border-white/20 bg-[#0a0b0e] p-6 sm:p-7 space-y-5">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider pb-3 border-b border-white/10">
              OPERATOR REGISTRATION & CREDENTIAL ISSUE
            </div>

            <form onSubmit={handleCommitPledge} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 font-mono text-xs">
                  <label className="text-zinc-400">STUDENT FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Zaid Khan"
                    className="w-full bg-[#060709] border border-white/15 px-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff0055]"
                  />
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label className="text-zinc-400">CLASS & SECTION *</label>
                  <input
                    type="text"
                    required
                    value={studentGrade}
                    onChange={(e) => setStudentGrade(e.target.value)}
                    placeholder="e.g. Class XI-A (Computer Science)"
                    className="w-full bg-[#060709] border border-white/15 px-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff0055]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!allRulesChecked || !studentName.trim()}
                  className={`w-full py-4 font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2 touch-manipulation ${
                    allRulesChecked && studentName.trim()
                      ? "bg-[#ff0055] hover:bg-[#ff1a6b] text-white shadow-[0_0_20px_rgba(255,0,85,0.4)] cursor-pointer"
                      : "bg-white/5 text-zinc-600 border border-white/10 cursor-not-allowed"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    {allRulesChecked
                      ? "COMMIT PLEDGE & ISSUE SENTINEL CREDENTIAL CARD"
                      : "CONFIRM ALL 7 PLEDGE RULES ABOVE TO UNLOCK CREDENTIAL"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* ========================================================
             DIGITAL SENTINEL CREDENTIAL CARD (INSPIRED BY REFERENCE IMAGE)
             ======================================================== */
          <div className="border border-[#ff0055] bg-[#0a0b0e] p-6 sm:p-7 space-y-5 shadow-[0_0_30px_rgba(255,0,85,0.15)]">
            {/* Credential Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-[#ff0055] font-bold">
                OFFICIAL CYBER SENTINEL CREDENTIAL // HPS-SEC
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED STATUS
              </span>
            </div>

            {/* Reference-Image Inspired Lower-Third Data Block */}
            <div className="border border-white/10 bg-[#060709] divide-y divide-white/10">
              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  NAME
                </div>
                <div className="col-span-2 p-3 text-white font-bold text-sm tracking-wider flex items-center">
                  {studentName.toUpperCase()}
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  CADRE
                </div>
                <div className="col-span-2 p-3 text-zinc-200 tracking-wide flex items-center">
                  {studentGrade.toUpperCase()}
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  SENTINEL_ID
                </div>
                <div className="col-span-2 p-3 text-[#ff0055] font-bold tracking-wider flex items-center">
                  {issuedCredential.id}
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  HASH_SIG
                </div>
                <div className="col-span-2 p-3 text-zinc-400 text-[10px] truncate flex items-center">
                  {issuedCredential.hash}
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-3 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                  ISSUED
                </div>
                <div className="col-span-2 p-3 text-zinc-300 flex items-center">
                  {issuedCredential.timestamp} {"// HAMDARD PUBLIC SCHOOL"}
                </div>
              </div>
            </div>

            {/* Bottom Barcode / Zebra Stripe & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="h-4 w-36 zebra-hash-pink opacity-90" />
                <span className="text-[9px] font-mono text-zinc-500">I4C VERIFIED CREDENTIAL</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyCredential}
                  className="px-4 py-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs flex items-center gap-2 transition-colors touch-manipulation cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY CREDENTIAL HASH</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
