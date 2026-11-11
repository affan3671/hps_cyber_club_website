"use client";

import React from "react";
import { STATUTORY_RESOURCES } from "../../data/cyberData";
import HackedText from "../effects/HackedText";
import { Phone, ArrowUpRight } from "lucide-react";

export default function ResourcesVault() {
  return (
    <section
      id="resources"
      className="relative px-4 sm:px-8 lg:px-24 py-24 border-b border-white/10 bg-[#060709]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// VAULT_07"}</span>
            <span className="text-zinc-600">/</span>
            <span>STATUTORY_CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="SOVEREIGN EMERGENCY CHANNELS" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            Direct statutory pipelines to Government of India enforcement authorities, national
            reporting portals, and citizen defense registries.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 hidden sm:block">
          ENFORCEMENT: 24x7 INTER-BANK GATEWAYS
        </div>
      </div>

      {/* Grid of Resource Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATUTORY_RESOURCES.map((res) => (
          <div
            key={res.id}
            className={`border p-5 space-y-4 flex flex-col justify-between transition-all duration-200 ${
              res.isEmergency
                ? "border-[#ff0055] bg-[#0c0e14] shadow-[0_0_20px_rgba(255,0,85,0.15)]"
                : "border-white/10 bg-[#0a0b0e] hover:border-white/20"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-zinc-500">{res.code}</span>
                <span
                  className={`px-2 py-0.5 font-bold ${
                    res.isEmergency
                      ? "bg-[#ff0055] text-white"
                      : "bg-white/5 text-zinc-300"
                  }`}
                >
                  {res.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  {res.title}
                </h3>
                <div className="text-xs font-mono text-[#ff0055] mt-0.5">
                  {res.authority}
                </div>
              </div>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={res.contactOrUrl}
                target={res.contactOrUrl.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`w-full py-2.5 px-3 font-mono text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 ${
                  res.isEmergency
                    ? "bg-[#ff0055] hover:bg-[#ff1a6b] text-white"
                    : "border border-white/20 hover:border-white/40 bg-white/5 text-zinc-200"
                }`}
              >
                {res.contactOrUrl.startsWith("tel:") ? (
                  <Phone className="w-3.5 h-3.5" />
                ) : (
                  <ArrowUpRight className="w-3.5 h-3.5" />
                )}
                <span>
                  {res.contactOrUrl.startsWith("tel:")
                    ? `DIAL ${res.contactOrUrl.replace("tel:", "")}`
                    : "VISIT SOVEREIGN PORTAL"}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
