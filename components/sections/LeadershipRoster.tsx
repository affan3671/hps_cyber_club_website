"use client";

import React from "react";
import { Users, Clock } from "lucide-react";
import { LEADERSHIP_ROSTER } from "../../data/cyberData";
import HackedText from "../effects/HackedText";

// Flip to true once all faculty & student leadership details are finalized in cyberData.ts
const SHOW_LEADERSHIP_ROSTER = false;

export default function LeadershipRoster() {
  return (
    <section
      id="roster"
      className="relative px-4 sm:px-8 lg:px-20 py-20 border-b border-white/10 bg-[#060709]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// TEAM"}</span>
            <span className="text-zinc-600">/</span>
            <span>STUDENT_LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="EXECUTIVE SENTINEL CADRE" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            Faculty mentorship and student leadership steering Cyber Shield HPS under the Department
            of Computer Science & Information Technology.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 hidden sm:block">
          HAMDARD PUBLIC SCHOOL // SESSION 2026-27
        </div>
      </div>

      {SHOW_LEADERSHIP_ROSTER ? (
        /* Dossier Grid — DIRECTLY MATCHING THE USER'S LOWER-THIRD REFERENCE IMAGE */
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_ROSTER.map((member) => (
            <div
              key={member.id}
              className="group border border-white/20 bg-[#0a0b0e] hover:border-[#ff0055] transition-all duration-300 p-5 space-y-4"
            >
              {/* Top Code Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono pb-2.5 border-b border-white/10 text-zinc-500">
                <span className="text-zinc-400 font-semibold">{member.code}</span>
                <span
                  className={`px-1.5 py-0.5 uppercase ${
                    member.status === "FACULTY_MENTOR"
                      ? "bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/40"
                      : "bg-white/5 text-zinc-300"
                  }`}
                >
                  {member.status === "FACULTY_MENTOR" ? "TEACHER MENTOR" : "STUDENT LEAD"}
                </span>
              </div>

              {/* Dossier Lower-Third Block (matching video lower third) */}
              <div className="border border-white/10 bg-[#060709] divide-y divide-white/10">
                {/* Name Row */}
                <div className="grid grid-cols-3 text-xs font-mono">
                  <div className="p-2.5 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                    NAME
                  </div>
                  <div className="col-span-2 p-2.5 text-white font-bold tracking-wider flex items-center truncate">
                    {member.name}
                  </div>
                </div>

                {/* Role Row */}
                <div className="grid grid-cols-3 text-xs font-mono">
                  <div className="p-2.5 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                    ROLE
                  </div>
                  <div className="col-span-2 p-2.5 text-[#ff0055] font-semibold tracking-wide flex items-center text-[11px] leading-tight">
                    {member.role}
                  </div>
                </div>

                {/* Department Row */}
                <div className="grid grid-cols-3 text-xs font-mono">
                  <div className="p-2.5 bg-white/5 text-zinc-500 uppercase border-r border-white/10 flex items-center">
                    DEPT
                  </div>
                  <div className="col-span-2 p-2.5 text-zinc-400 text-[10px] leading-tight flex items-center">
                    {member.department}
                  </div>
                </div>
              </div>

              {/* Member Bio */}
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {member.bio}
              </p>

              {/* Bottom Zebra Hash Pattern Bar (from lower third reference) */}
              <div className="flex items-center justify-between pt-1">
                <div className="h-2.5 w-16 zebra-hash opacity-60 group-hover:zebra-hash-pink transition-all" />
                <div className="text-[9px] font-mono text-zinc-600">ID: {member.id.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Temporary placeholder shown until leadership details are finalized */
        <div className="mt-10 overshoot-frame border border-white/15 bg-[#0a0b0e]">
          <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-white/10 bg-[#0c0e13] text-[10px] sm:text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="inline-block w-2 h-2 bg-[#ff0055] animate-pulse" />
              <span>ROSTER_STATUS // PENDING ANNOUNCEMENT</span>
            </div>
            <span className="text-zinc-500">SESSION 2026-27</span>
          </div>

          <div className="px-6 py-12 sm:py-16 flex flex-col items-center text-center space-y-5">
            <div className="w-12 h-12 border border-[#ff0055]/40 bg-[#ff0055]/10 flex items-center justify-center text-[#ff0055]">
              <Users className="w-6 h-6" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#ff0055]/30 bg-[#ff0055]/10 text-[#ff0055] font-mono text-[11px] uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>OFFICIAL TEAM REVEAL</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
              COMING SOON
            </h3>

            <p className="text-sm sm:text-base text-zinc-400 font-sans max-w-xl leading-relaxed">
              We are finalizing the details for our teacher mentors and student cyber leaders.
              Check back soon to meet the full HPS Cyber Shield team!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 border-t border-white/10 bg-[#060709]">
            <div className="h-2 w-20 zebra-hash-pink opacity-75" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider text-center sm:text-right">
              FACULTY MENTORS // STUDENT COUNCIL // WING LEADS
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
