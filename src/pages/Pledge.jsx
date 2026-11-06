import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ShieldCheck, 
  Award, 
  Printer, 
  RotateCcw, 
  ExternalLink,
  Lock,
  Sparkles
} from 'lucide-react';
import ShieldLogo from '../components/ShieldLogo';
import { PLEDGE_ITEMS, PLEDGE_CREDIT } from '../data/pledgeData';

export default function Pledge() {
  const [checkedItems, setCheckedItems] = useState({});
  const [studentName, setStudentName] = useState('');
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const totalItems = PLEDGE_ITEMS.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllChecked = checkedCount === totalItems;

  const toggleCheck = (id) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      return next;
    });
  };

  const checkAll = () => {
    const all = {};
    PLEDGE_ITEMS.forEach((item) => {
      all[item.id] = true;
    });
    setCheckedItems(all);
  };

  const resetAll = () => {
    setCheckedItems({});
    setHasCelebrated(false);
  };

  // Trigger celebration when all checked
  useEffect(() => {
    if (isAllChecked && !hasCelebrated) {
      setHasCelebrated(true);
      
      // Multi-stage confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00E5FF', '#39FF88', '#FF9933', '#FFFFFF', '#138808'],
        });

        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#00E5FF', '#39FF88', '#8B5CF6'],
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#00E5FF', '#39FF88', '#8B5CF6'],
          });
        }, 300);
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }
  }, [isAllChecked, hasCelebrated]);

  const todayFormatted = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'long',
  }).format(new Date());

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>OFFICIAL CYBER SAFETY COMMITMENT</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          The Cyber Safety <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400">Pledge</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Adopt the national student principles guided by the Ministry of Home Affairs. Read and tick each pledge item to generate your personal Certificate of Commitment.
        </p>
      </div>

      {/* Progress & Quick Actions Bar */}
      <div className="glass-panel p-4 rounded-xl border border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center font-display font-bold text-sm text-cyan-300">
            {checkedCount}/{totalItems}
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Pledge Progress</p>
            <p className="text-xs text-white font-medium">
              {isAllChecked ? 'All 7 commitments affirmed! Jai Hind!' : 'Review and affirm each statement below'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isAllChecked ? (
            <button
              onClick={checkAll}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-colors cursor-pointer"
            >
              Affirm All Items
            </button>
          ) : (
            <button
              onClick={resetAll}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Interactive Pledge Checklist */}
      <div className="space-y-3">
        {PLEDGE_ITEMS.map((item, idx) => {
          const isChecked = !!checkedItems[item.id];
          const isFinal = item.isFinal;

          return (
            <motion.div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-4 ${
                isChecked
                  ? isFinal
                    ? 'bg-gradient-to-r from-emerald-950/40 via-cyan-950/40 to-purple-950/40 border-emerald-400 shadow-glow-green'
                    : 'bg-[#0B1528] border-cyan-400/60 shadow-glow-cyan'
                  : 'glass-panel border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Custom Checkbox */}
              <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors border ${
                isChecked
                  ? 'bg-cyan-400 border-cyan-300 text-slate-950'
                  : 'bg-slate-900 border-slate-700 text-transparent'
              }`}>
                <Check className="w-4 h-4 stroke-[3]" />
              </div>

              {/* Text */}
              <div className="space-y-1">
                <p className={`font-display text-sm sm:text-base leading-snug ${
                  isChecked ? 'text-white font-semibold' : 'text-slate-300'
                } ${isFinal ? 'text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-emerald-400' : ''}`}>
                  {item.text}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {item.explanation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Name Input & Certificate Generation Card */}
      <div className="pt-6 border-t border-slate-800 space-y-6">
        
        {/* Input Name field */}
        <div className="glass-panel p-5 rounded-2xl border border-cyan-500/20 max-w-xl mx-auto space-y-2">
          <label htmlFor="student-name" className="block text-xs font-mono uppercase tracking-wider text-cyan-300">
            Enter Your Full Name to Personalize Certificate:
          </label>
          <div className="flex gap-2">
            <input
              id="student-name"
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="e.g. Aryan Khan / Zoya Fatima"
              className="w-full bg-[#050B14] border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              maxLength={40}
            />
          </div>
          <p className="text-[11px] text-slate-400 font-mono">
            * 100% Client-side. No name or personal data is collected or stored.
          </p>
        </div>

        {/* Certificate Display Card */}
        <AnimatePresence>
          {isAllChecked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Printable Certificate Frame */}
              <div 
                id="pledge-certificate"
                className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0B1528] via-[#070E1A] to-[#0B1528] border-2 border-cyan-400 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,229,255,0.25)] text-center space-y-6"
              >
                {/* Decorative Indian Tri-Color subtle line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

                {/* Badge & School Header */}
                <div className="flex flex-col items-center justify-center space-y-2">
                  <ShieldLogo className="w-16 h-16 animate-pulse" />
                  <h3 className="font-display font-extrabold text-xs uppercase tracking-widest text-cyan-400">
                    Hamdard Public School • Cyber Shield Club
                  </h3>
                  <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                    CERTIFICATE OF CYBER SAFETY COMMITMENT
                  </h2>
                </div>

                {/* Recipient Statement */}
                <div className="space-y-2 py-4 border-y border-cyan-500/20 max-w-2xl mx-auto">
                  <p className="text-xs sm:text-sm text-slate-400 uppercase font-mono tracking-wider">
                    This is proudly presented to
                  </p>
                  <p className="font-display font-black text-2xl sm:text-4xl text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                    {studentName.trim() || 'Valued Student Ambassador'}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                    for upholding the national principles of cyber hygiene, zero credential sharing, vigilant scam verification, and committing to:
                  </p>
                  <p className="font-display font-bold text-base sm:text-lg text-emerald-400 tracking-wide">
                    "Stop. Think. Then Take Action."
                  </p>
                </div>

                {/* Footer Stamp & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center pt-2 text-xs font-mono text-slate-400">
                  <div>
                    <span className="text-slate-400 block text-[11px]">ISSUED BY</span>
                    <span className="text-white font-bold">Cyber Shield HPS</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">DATE OF PLEDGE</span>
                    <span className="text-cyan-300 font-bold">{todayFormatted}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">COMMUNITY</span>
                    <span className="text-white font-bold">Hamdard Public School</span>
                  </div>
                </div>

                {/* Jai Hind Celebration Sign-off */}
                <div className="pt-4">
                  <span className="inline-block px-5 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-display font-bold text-sm tracking-widest shadow-glow-green">
                    🇮🇳 JAI HIND! 🇮🇳
                  </span>
                </div>
              </div>

              {/* Print Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-bold text-sm flex items-center gap-2 shadow-glow-cyan transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print or Save Certificate</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Official Mandatory Credit Line */}
      <div className="p-4 rounded-xl bg-[#070E1A] border border-slate-800 text-center space-y-1">
        <p className="text-xs text-slate-400">
          Pledge text by the{' '}
          <a
            href="https://i4c.mha.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:underline font-medium inline-flex items-center gap-1"
          >
            <span>Ministry of Home Affairs / Indian Cyber Crime Coordination Centre (I4C)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
        <p className="text-[11px] text-slate-400 font-mono">
          Adapted for student awareness by Cyber Shield HPS at Hamdard Public School.
        </p>
      </div>

    </div>
  );
}

