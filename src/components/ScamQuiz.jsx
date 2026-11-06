import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  ArrowRight, 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  ShieldCheck,
  Smartphone,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCAM_SCENARIOS } from '../data/quizData';

export default function ScamQuiz({ onScoreUpdate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // true = scam, false = real
  const [userScore, setUserScore] = useState(0);
  const [answeredMap, setAnsweredMap] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const scenario = SCAM_SCENARIOS[currentIndex];
  const total = SCAM_SCENARIOS.length;

  const handleChoice = (choice) => {
    if (selectedAnswer !== null) return; // Prevent double answer
    setSelectedAnswer(choice);

    const isCorrect = choice === scenario.isScam;
    const nextScore = isCorrect ? userScore + 1 : userScore;
    
    if (isCorrect) {
      setUserScore(nextScore);
    }

    setAnsweredMap((prev) => ({
      ...prev,
      [scenario.id]: {
        userChoice: choice,
        isCorrect,
      },
    }));

    if (onScoreUpdate) {
      onScoreUpdate(nextScore, total);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsCompleted(true);
      if (userScore >= total - 1) {
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch (e) {}
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setUserScore(0);
    setAnsweredMap({});
    setIsCompleted(false);
  };

  const getChannelBadge = (type) => {
    switch (type) {
      case 'sms':
        return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-mono"><Smartphone className="w-3.5 h-3.5" /> SMS</span>;
      case 'whatsapp':
        return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono"><MessageSquare className="w-3.5 h-3.5" /> WhatsApp</span>;
      case 'email':
        return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono"><Mail className="w-3.5 h-3.5" /> Email</span>;
      case 'call':
        return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono"><PhoneCall className="w-3.5 h-3.5" /> Incoming Call</span>;
      default:
        return null;
    }
  };

  if (isCompleted) {
    const percentage = Math.round((userScore / total) * 100);

    return (
      <div className="glass-panel p-8 rounded-3xl border border-cyan-400 text-center space-y-6 max-w-xl mx-auto shadow-glow-cyan">
        <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-cyan-500/10 border-2 border-cyan-400 text-cyan-300 text-3xl font-display font-extrabold">
          {percentage}%
        </div>

        <div className="space-y-1">
          <h3 className="font-display font-black text-2xl text-white">
            {percentage >= 80 ? 'Master Scam Spotter! 🛡️' : percentage >= 50 ? 'Sharp Eyes, Stay Alert! 👀' : 'Keep Training, Rookie! 💡'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            You accurately identified <strong>{userScore}</strong> out of <strong>{total}</strong> simulated communication vectors.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#050B14] border border-slate-800 text-left font-mono text-xs space-y-2">
          <p className="text-slate-400 uppercase tracking-wider text-[11px]">Quick Assessment Summary</p>
          <p className="text-slate-200">
            {percentage >= 80 
              ? 'Excellent instincts! You catch subtle domain typos, urgency flags, and impersonation scripts with ease.'
              : 'Remember: Real authorities never demand urgent secrecy or threaten digital arrest over video calls.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Simulation</span>
          </button>
        </div>
      </div>
    );
  }

  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === scenario.isScam;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      
      {/* Top Tracker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
        <span>Scenario {currentIndex + 1} of {total}</span>
        <div className="flex items-center gap-2">
          <span>Score: <strong className="text-cyan-400">{userScore}</strong></span>
          <span>•</span>
          <span>Difficulty: <strong className="text-amber-400">{scenario.difficulty}</strong></span>
        </div>
      </div>

      {/* Realistic Communication Simulation Mockup */}
      <div className="relative rounded-2xl border border-slate-700/80 bg-[#070E1A] overflow-hidden shadow-2xl">
        
        {/* Device Top Bar */}
        <div className="bg-[#0B1528] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            {getChannelBadge(scenario.type)}
            <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-xs">{scenario.sender}</span>
          </div>
          <span className="text-[11px] text-slate-500">{scenario.timestamp}</span>
        </div>

        {/* Message Container Body */}
        <div className="p-6 space-y-4">
          
          {scenario.type === 'email' && (
            <div className="border-b border-slate-800/80 pb-3 space-y-1 text-xs">
              <span className="text-slate-500 font-mono">Subject: </span>
              <span className="text-white font-bold">{scenario.subject}</span>
            </div>
          )}

          {scenario.type === 'call' ? (
            <div className="space-y-4 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 mx-auto flex items-center justify-center animate-pulse border border-red-500/40">
                <PhoneCall className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-mono text-red-300 uppercase">Suspicious Voice Call Transcript</p>
                <p className="text-white font-mono text-sm mt-1">{scenario.sender}</p>
              </div>
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-xs sm:text-sm text-slate-200 italic leading-relaxed text-left font-serif">
                {scenario.content}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans space-y-2">
              <p>{scenario.content}</p>
            </div>
          )}
        </div>

        {/* Action Prompt */}
        {!isAnswered ? (
          <div className="p-4 bg-[#0B1528] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-300">
              Is this message <strong>Real</strong> or a <strong>Scam</strong>?
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleChoice(false)}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-bold text-xs font-mono transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Legitimate / Real</span>
              </button>

              <button
                type="button"
                onClick={() => handleChoice(true)}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-red-950 hover:bg-red-900 border border-red-500/50 text-red-300 font-bold text-xs font-mono transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>It's a Scam!</span>
              </button>
            </div>
          </div>
        ) : (
          /* Post-Answer Feedback Box */
          <div className={`p-5 border-t space-y-4 ${
            isCorrect 
              ? 'bg-emerald-950/30 border-emerald-500/40' 
              : 'bg-red-950/30 border-red-500/40'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <h4 className="font-display font-bold text-sm text-white">
                  {isCorrect ? 'Correct Analysis! 🎯' : 'Incorrect Analysis! ⚠️'}
                </h4>
              </div>

              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                scenario.isScam ? 'bg-red-900/60 text-red-300' : 'bg-emerald-900/60 text-emerald-300'
              }`}>
                Verdict: {scenario.isScam ? 'SCAM DETECTED' : 'LEGITIMATE COMMUNICATION'}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-[#050B14]/70 p-3 rounded-lg border border-slate-800">
              {scenario.explanation}
            </p>

            <div className="space-y-1 text-[11px] font-mono">
              <span className="text-slate-400 block font-bold">Key Indicators:</span>
              <ul className="space-y-1 text-slate-300 pl-4 list-disc">
                {scenario.clues.map((clue, idx) => (
                  <li key={idx}>{clue}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-bold text-xs flex items-center gap-2 cursor-pointer shadow-glow-cyan"
              >
                <span>{currentIndex < total - 1 ? 'Next Scenario' : 'View Results'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

