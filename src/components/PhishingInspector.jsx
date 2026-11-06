import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Eye, 
  ExternalLink,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { PHISHING_LINKS } from '../data/linksData';

export default function PhishingInspector({ onScoreUpdate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userVerdict, setUserVerdict] = useState(null); // true = safe, false = phishing
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const link = PHISHING_LINKS[currentIndex];
  const total = PHISHING_LINKS.length;

  const handleDecision = (isSafeDecision) => {
    if (userVerdict !== null) return;
    setUserVerdict(isSafeDecision);

    const isCorrect = isSafeDecision === link.isSafe;
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) setScore(newScore);

    if (onScoreUpdate) {
      onScoreUpdate(newScore, total);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserVerdict(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserVerdict(null);
    setScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="glass-panel p-8 rounded-3xl border border-emerald-400 text-center space-y-6 max-w-xl mx-auto shadow-glow-green">
        <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-emerald-500/10 border-2 border-emerald-400 text-emerald-300 text-3xl font-display font-extrabold">
          {percentage}%
        </div>

        <div className="space-y-1">
          <h3 className="font-display font-black text-2xl text-white">
            {percentage >= 80 ? 'URL Inspector Pro! 🔍' : 'Decent Dissection! 💡'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            You solved <strong>{score}</strong> out of <strong>{total}</strong> complex web address puzzles.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#050B14] border border-slate-800 text-left font-mono text-xs space-y-2">
          <p className="text-slate-400 uppercase tracking-wider text-[11px]">Key Lesson</p>
          <p className="text-slate-200">
            Never trust a URL by glancing only at the beginning. Always read the base domain immediately to the left of the first single slash `/`!
          </p>
        </div>

        <button
          onClick={handleRestart}
          className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 mx-auto cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Inspect Again</span>
        </button>
      </div>
    );
  }

  const isAnswered = userVerdict !== null;
  const isCorrect = isAnswered && userVerdict === link.isSafe;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
        <span>URL Challenge {currentIndex + 1} of {total}</span>
        <span>Score: <strong className="text-emerald-400">{score}</strong></span>
      </div>

      {/* Target URL Display */}
      <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 space-y-5">
        
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1.5">
            Dissect This Address:
          </span>
          <div className="p-3.5 rounded-xl bg-[#050B14] border border-slate-700 text-center font-mono text-xs sm:text-sm text-white select-all break-all shadow-inner">
            {link.displayUrl}
          </div>
        </div>

        {/* Anatomical Breakdown */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
            Domain Anatomy Analyzer:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
            
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-500 block">PROTOCOL</span>
              <span className={link.breakdown.protocol.includes('https') ? 'text-emerald-400' : 'text-red-400 font-bold'}>
                {link.breakdown.protocol}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-500 block">SUBDOMAIN</span>
              <span className="text-purple-300 truncate block">
                {link.breakdown.subdomain}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/40">
              <span className="text-[10px] text-cyan-400 block">REAL DOMAIN</span>
              <span className="text-white font-bold truncate block">
                {link.breakdown.actualDomain}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-500 block">TLD EXTENSION</span>
              <span className="text-amber-400 truncate block">
                {link.breakdown.tld}
              </span>
            </div>

          </div>
        </div>

        {/* User Choice Buttons */}
        {!isAnswered ? (
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
            <span className="text-xs font-mono text-slate-300">
              What is your verdict on this URL?
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleDecision(true)}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-bold text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Legitimate & Safe</span>
              </button>

              <button
                onClick={() => handleDecision(false)}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-red-950 hover:bg-red-900 border border-red-500/50 text-red-300 font-bold text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Phishing Trap</span>
              </button>
            </div>
          </div>
        ) : (
          /* Post-Answer Feedback */
          <div className={`p-5 rounded-xl border space-y-3 ${
            isCorrect ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-red-950/30 border-red-500/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <h4 className="font-display font-bold text-sm text-white">
                  {isCorrect ? 'Accurate Call! 🔍' : 'Watch Out! ⚠️'}
                </h4>
              </div>

              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                link.isSafe ? 'bg-emerald-900/60 text-emerald-300' : 'bg-red-900/60 text-red-300'
              }`}>
                {link.isSafe ? 'AUTHENTIC SITE' : 'PHISHING SPOOF'}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {link.explanation}
            </p>

            <div className="p-3 bg-[#050B14]/80 rounded-lg border border-slate-800 text-[11px] font-mono text-cyan-300">
              💡 <strong>Pro Inspection Rule:</strong> {link.analysisTip}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-xs flex items-center gap-2 cursor-pointer shadow-glow-green"
              >
                <span>{currentIndex < total - 1 ? 'Next URL Challenge' : 'Complete Inspection'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

