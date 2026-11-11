"use client";

import React, { useState, useRef, useEffect } from "react";
import HackedText from "../effects/HackedText";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function CyberTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "sys_init",
      output: (
        <div className="space-y-1 text-zinc-300">
          <div className="text-emerald-400 font-bold">
            [OK] HPS CYBER SENTINEL TERMINAL v2.4
          </div>
          <div className="text-zinc-400 text-xs">
            Student Cyber Safety System Online. Type a command or tap any shortcut below:
          </div>
        </div>
      ),
    },
  ]);
  const [cmdHistoryList, setCmdHistoryList] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Scroll ONLY the terminal container internally, NOT the browser window
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    setCmdHistoryList((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-zinc-300 text-xs">
            <div className="text-[#ff0055] font-bold">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div>
                <span className="text-white font-bold">status</span> - School safety status
              </div>
              <div>
                <span className="text-white font-bold">threats</span> - Common scam vectors
              </div>
              <div>
                <span className="text-white font-bold">roster</span> - Club teachers & student leads
              </div>
              <div>
                <span className="text-white font-bold">cjd</span> - Monthly Cyber Jagrookta Diwas
              </div>
              <div>
                <span className="text-white font-bold">1930</span> - Helpline 1930 instructions
              </div>
              <div>
                <span className="text-white font-bold">pledge</span> - 7 student safety rules
              </div>
              <div>
                <span className="text-white font-bold">flag</span> - Secret CTF challenge flag
              </div>
              <div>
                <span className="text-white font-bold">clear</span> - Clear terminal screen
              </div>
            </div>
          </div>
        );
        break;

      case "status":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <div className="text-emerald-400 font-bold">STATUS: OPERATIONAL // ALL SYSTEMS SAFE</div>
            <div>School: Hamdard Public School, Sangam Vihar</div>
            <div>Teacher Coordinator: Mustafa Azizi (CS/IT Dept)</div>
            <div>Emergency Interlock: National Helpline 1930 Active</div>
          </div>
        );
        break;

      case "threats":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <div className="text-[#ff0055] font-bold">REGISTERED ONLINE THREATS:</div>
            <div>1. UPI & QR Code Scams (Never enter PIN to get money)</div>
            <div>2. Fake CBI & Digital Arrest Video Calls (100% Fake)</div>
            <div>3. Spoofed Links & Typosquatting (Look before the /)</div>
            <div>4. Malicious Modded APKs (Free skins/cheats with malware)</div>
            <div>5. Cyberbullying & Slander (Tell a teacher immediately)</div>
          </div>
        );
        break;

      case "roster":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <div className="text-white font-bold">HPS CYBER SHIELD ROSTER:</div>
            <div>• Mustafa Azizi - Teacher Coordinator & Mentor (CS/IT)</div>
            <div>• Student President - Club Head</div>
            <div>• Student Vice-President - Operations</div>
            <div>• General Secretary - Official Records</div>
            <div>• Technical Lead - Web Sandboxes</div>
            <div>• CJD Coordinator - Monthly Peer Sessions</div>
          </div>
        );
        break;

      case "cjd":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <div className="text-[#ff0055] font-bold">CYBER JAGROOKTA DIWAS (CJD):</div>
            <div>When: First Wednesday of Every Month</div>
            <div>Where: Homeroom classrooms across Grades 6 to 12</div>
            <div>Topics: Safe passwords, social media privacy & spotting scams</div>
          </div>
        );
        break;

      case "1930":
        output = (
          <div className="p-2 border border-[#ff0055] bg-[#ff0055]/10 text-xs text-zinc-200 space-y-1">
            <div className="text-[#ff0055] font-bold">NATIONAL HELPLINE: 1930</div>
            <div>Call within 2 hours if bank or UPI money was sent to a scammer.</div>
            <div>Toll-free, 24x7 across all states in India.</div>
          </div>
        );
        break;

      case "pledge":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <div className="text-white font-bold">THE SENTINEL SAFETY CREED:</div>
            <div>1. Download apps only from official stores.</div>
            <div>2. Never share your UPI PIN or OTP with anyone.</div>
            <div>3. Reject Digital Arrest calls — hang up immediately.</div>
            <div>4. Stop. Think. Then Take Action.</div>
            <div>5. If tricked, talk to a teacher or parent — zero shame!</div>
          </div>
        );
        break;

      case "flag":
      case "flag{...}":
      case "flag{hps_defense_sentinel_2026}":
        output = (
          <div className="p-2.5 border border-emerald-500 bg-emerald-500/10 text-emerald-200 text-xs font-mono space-y-1">
            <div className="font-bold">FLAG CAPTURED!</div>
            <div className="break-all font-bold text-white">flag&#123;HPS_DEFENSE_SENTINEL_2026&#125;</div>
            <div>Curiosity and vigilance make a great cyber defender!</div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            Unknown command: &apos;{trimmed}&apos;. Type <span className="underline font-bold">help</span> or tap a shortcut below.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistoryList.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < cmdHistoryList.length) {
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistoryList[cmdHistoryList.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistoryList[cmdHistoryList.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  const quickCommands = ["help", "status", "threats", "cjd", "1930", "pledge", "flag", "clear"];

  return (
    <section
      id="terminal"
      className="relative px-4 sm:px-8 lg:px-20 py-20 border-b border-white/10 bg-[#08090d]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055]">
            <span>{"// TERMINAL"}</span>
            <span className="text-zinc-600">/</span>
            <span>COMMAND_INTERFACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            <HackedText text="CADET COMMAND TERMINAL" />
          </h2>
          <p className="text-zinc-400 font-sans max-w-xl text-sm sm:text-base">
            Try real commands in the sandbox terminal. Check system status, learn scam vectors, or
            find the hidden CTF flag.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 hidden sm:flex items-center gap-2">
          <span>INTERACTIVE STUDENT SHELL</span>
        </div>
      </div>

      {/* Terminal Box */}
      <div className="mt-8 max-w-4xl mx-auto border border-white/20 bg-[#060709] shadow-2xl relative">
        {/* Terminal Title Bar */}
        <div className="px-4 py-2.5 bg-[#0e1015] border-b border-white/10 flex items-center justify-between text-xs font-mono select-none">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff0055]" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-zinc-300 ml-2">cadet@hps-sentinel:~</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>SHELL</span>
          </div>
        </div>

        {/* Quick Shortcut Chips (Essential for mobile tap-to-execute) */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-2 bg-[#090b0f] border-b border-white/10 flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-[10px] text-zinc-500 uppercase mr-1 w-full sm:w-auto mb-1 sm:mb-0">SHORTCUTS:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
              className="min-h-[34px] sm:min-h-0 px-2.5 py-1 sm:px-2 sm:py-0.5 bg-white/5 hover:bg-white/15 active:bg-[#ff0055]/20 text-zinc-300 hover:text-white border border-white/10 active:border-[#ff0055] text-xs sm:text-[11px] transition-colors cursor-pointer touch-manipulation flex items-center justify-center"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body (Internal Scroll Container) */}
        <div
          ref={terminalBodyRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[240px] max-h-[380px] sm:min-h-[300px] sm:max-h-[440px] overflow-y-auto space-y-3 cursor-text"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 text-zinc-400">
                <span className="text-[#ff0055] font-bold">cadet:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-3">{item.output}</div>
            </div>
          ))}

          {/* Interactive Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <span className="hidden sm:inline text-[#ff0055] font-bold shrink-0">
              cadet@hps-sentinel:~$
            </span>
            <span className="sm:hidden text-[#ff0055] font-bold shrink-0">
              cadet:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type command..."
              className="flex-1 bg-transparent text-white font-mono text-base sm:text-xs focus:outline-none caret-[#ff0055] placeholder-zinc-600 min-w-0"
              spellCheck={false}
              autoComplete="off"
            />
            <button
              type="submit"
              className="min-w-[38px] min-h-[38px] sm:min-w-0 sm:min-h-0 p-2 sm:p-1.5 text-zinc-300 hover:text-white active:bg-[#ff0055] bg-white/10 border border-white/20 shrink-0 flex items-center justify-center touch-manipulation cursor-pointer"
              title="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Terminal Footer Bar */}
        <div className="px-4 py-2 bg-[#0a0b0e] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>TAP ANY SHORTCUT ABOVE OR TYPE TO RUN</span>
          <span className="hidden sm:inline">HAMDARD PUBLIC SCHOOL</span>
        </div>
      </div>
    </section>
  );
}
