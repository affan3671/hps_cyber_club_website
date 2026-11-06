import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  MessageSquareWarning, 
  Link2, 
  Award, 
  Share2, 
  Check, 
  Copy, 
  ShieldCheck,
  Sparkles,
  Printer
} from 'lucide-react';
import ScamQuiz from '../components/ScamQuiz';
import PhishingInspector from '../components/PhishingInspector';
import ShieldLogo from '../components/ShieldLogo';

export default function PracticeZone() {
  const [activeMode, setActiveMode] = useState('quiz'); // 'quiz' or 'inspector'
  const [quizStats, setQuizStats] = useState({ score: 0, total: 6 });
  const [inspectorStats, setInspectorStats] = useState({ score: 0, total: 5 });
  const [playerName, setPlayerName] = useState('');
  const [copiedBadge, setCopiedBadge] = useState(false);

  const totalPossible = quizStats.total + inspectorStats.total;
  const currentTotal = quizStats.score + inspectorStats.score;
  const overallPercentage = Math.round((currentTotal / totalPossible) * 100);

  const handleCopyShare = () => {
    const text = `🛡️ I scored ${currentTotal}/${totalPossible} (${overallPercentage}%) on the Cyber Shield HPS Scam Simulator at Hamdard Public School! Can you beat my scam detection score?`;
    navigator.clipboard.writeText(text);
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2500);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-400">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>PHASE 2 INTERACTIVE DEFENSE LAB</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Cyber Shield <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">Practice Zone</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Test your scam-spotting reflexes against simulated fake SMS messages, deceptive WhatsApp emergencies, spoofed calls, and fraudulent web addresses.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveMode('quiz')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-display font-bold transition-all cursor-pointer ${
            activeMode === 'quiz'
              ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
              : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700'
          }`}
        >
          <MessageSquareWarning className="w-4 h-4" />
          <span>Spot The Scam (Quiz)</span>
        </button>

        <button
          onClick={() => setActiveMode('inspector')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-display font-bold transition-all cursor-pointer ${
            activeMode === 'inspector'
              ? 'bg-emerald-400 text-slate-950 shadow-glow-green'
              : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700'
          }`}
        >
          <Link2 className="w-4 h-4" />
          <span>Phishing Link Inspector</span>
        </button>
      </div>

      {/* Active Game Component Container */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30">
        {activeMode === 'quiz' ? (
          <ScamQuiz
            onScoreUpdate={(score, total) => setQuizStats({ score, total })}
          />
        ) : (
          <PhishingInspector
            onScoreUpdate={(score, total) => setInspectorStats({ score, total })}
          />
        )}
      </div>

      {/* Shareable Defender Result Card */}
      <div className="pt-6 border-t border-slate-800 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display font-bold text-2xl text-white">
            Your Cyber Defender Status Card
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Client-side calculated score badge for Hamdard Public School students
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 max-w-xl mx-auto space-y-6 bg-gradient-to-br from-[#0B1528] to-[#070E1A] shadow-glow-cyan">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <ShieldLogo className="w-10 h-10" />
              <div>
                <h3 className="font-display font-bold text-sm text-white">CYBER DEFENDER RANK</h3>
                <p className="text-[11px] font-mono text-cyan-400">Hamdard Public School</p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold">
              {overallPercentage}% Mastery
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="badge-nickname" className="text-[11px] font-mono text-slate-400 block mb-1">
                Cadet Handle / Name:
              </label>
              <input
                id="badge-nickname"
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter nickname or initials"
                className="w-full bg-[#050B14] border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                maxLength={30}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-1">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 block">SCAM SPOTTER</span>
                <span className="text-cyan-300 font-bold text-sm">
                  {quizStats.score} / {quizStats.total} Correct
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-500 block">LINK INSPECTOR</span>
                <span className="text-emerald-300 font-bold text-sm">
                  {inspectorStats.score} / {inspectorStats.total} Solved
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={handleCopyShare}
              className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-glow-cyan"
            >
              {copiedBadge ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copiedBadge ? 'Copied Share Text!' : 'Copy Result Badge'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-slate-700"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>Print</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

