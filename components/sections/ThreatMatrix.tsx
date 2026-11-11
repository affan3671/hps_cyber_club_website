"use client";

import React, { useState } from "react";
import { THREAT_MATRIX } from "../../data/cyberData";
import HackedText from "../effects/HackedText";
import {
  ChevronDown,
  ChevronUp,
  AlertOctagon,
  Check,
  Search,
} from "lucide-react";

export default function ThreatMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("upi-qr-fraud");

  const categories = [
    "All",
    "Financial Scams",
    "Identity & Social",
    "Malware & Devices",
    "Account Security",
  ];

  const filteredThreats = THREAT_MATRIX.filter((threat) => {
    const matchesCategory =
      selectedCategory === "All" || threat.category === selectedCategory;
    const matchesSearch =
      threat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      threat.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      threat.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="vectors"
      className="relative px-4 sm:px-8 lg:px-20 py-20 border-b border-white/10 bg-[#08090d]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// THREATS"}</span>
            <span className="text-zinc-600">/</span>
            <span>LEARN_THE_TRICKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="THREAT INTELLIGENCE MATRIX" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            Understand how online scams, fake calls, and malicious downloads work so you never get tricked.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search scams..."
            className="w-full bg-[#0a0b0e] border border-white/15 pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff0055]"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-6 pb-6 text-xs font-mono">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCategory(cat);
            }}
            className={`min-h-[36px] px-3.5 py-1.5 border transition-all cursor-pointer touch-manipulation flex items-center ${
              selectedCategory === cat
                ? "border-[#ff0055] bg-[#ff0055] text-white font-bold"
                : "border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/25 active:bg-white/15"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Threat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {filteredThreats.map((threat) => {
          const isExpanded = expandedId === threat.id;

          return (
            <div
              key={threat.id}
              className={`border transition-all duration-200 bg-[#0a0b0e] ${
                isExpanded
                  ? "border-[#ff0055] shadow-[0_0_20px_rgba(255,0,85,0.08)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Card Header & Preview */}
              <button
                type="button"
                onClick={() => toggleExpand(threat.id)}
                className="w-full text-left p-5 cursor-pointer space-y-3 touch-manipulation active:bg-white/[0.02]"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500 font-bold">{threat.category}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold ${
                        threat.severity === "CRITICAL"
                          ? "bg-[#ff0055] text-white"
                          : threat.severity === "HIGH"
                          ? "bg-white/15 text-zinc-200 border border-white/20"
                          : "bg-white/5 text-zinc-400"
                      }`}
                    >
                      {threat.severity}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-zinc-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400" />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#ff0055]">
                    {threat.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5">
                    {threat.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  {threat.summary}
                </p>
              </button>

              {/* Expandable Technical Dossier */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-white/10 space-y-5 text-xs font-sans">
                  {/* How it works */}
                  <div className="p-3.5 bg-[#060709] border border-white/10 space-y-1 font-mono">
                    <div className="text-[10px] text-[#ff0055] font-bold uppercase">
                      HOW SCAMMERS OPERATE:
                    </div>
                    <p className="text-zinc-300 leading-relaxed text-xs">
                      {threat.technicalMechanics}
                    </p>
                  </div>

                  {/* Red Flags Observed */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                      <AlertOctagon className="w-3.5 h-3.5 text-[#ff0055]" />
                      <span>RED FLAGS TO SPOT:</span>
                    </div>
                    <ul className="space-y-1 text-zinc-300">
                      {threat.redFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#ff0055] font-mono shrink-0">!</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tactical Countermeasures */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>HOW TO PROTECT YOURSELF:</span>
                    </div>
                    <ul className="space-y-1 text-zinc-300">
                      {threat.countermeasures.map((cm, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-mono shrink-0">✓</span>
                          <span>{cm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
