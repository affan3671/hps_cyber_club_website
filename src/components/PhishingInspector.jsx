import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { PHISHING_LINKS } from '../data/linksData';

export default function PhishingInspector({ onScoreUpdate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userVerdict, setUserVerdict] = useState(null);
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
      <div className="p-6 text-center space-y-4 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[#111F38] text-cyber-green text-2xl font-bold border border-slate-700">
          {percentage}%
        </div>

        <div className="space-y-1">
          <h3 className="font-display font-bold text-xl text-white">
            Inspection complete
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            You evaluated {score} out of {total} web addresses correctly.
          </p>
        </div>

        <p className="text-xs text-slate-400 bg-[#050B14] p-3 rounded-md border border-slate-800 text-left leading-relaxed">
          Rule: Never verify a website by looking only at the beginning of the address. Look directly before the first single forward slash to identify the real domain and extension.
        </p>

        <button
          onClick={handleRestart}
          className="px-4 py-2 rounded-md bg-[#111F38] hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center gap-2 mx-auto transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Inspect again</span>
        </button>
      </div>
    );
  }

  const isAnswered = userVerdict !== null;
  const isCorrect = isAnswered && userVerdict === link.isSafe;

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      
      {/* Tracker */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
        <span>Address {currentIndex + 1} of {total}</span>
        <span>Score: <strong className="text-white">{score}</strong></span>
      </div>

      {/* Target Link Display */}
      <div className="panel p-5 space-y-4">
        
        <div className="space-y-1.5">
          <span className="text-xs text-slate-400 block font-medium">
            Analyze this web address:
          </span>
          <div className="p-3 rounded-md bg-[#050B14] border border-slate-700 font-mono text-xs sm:text-sm text-white select-all break-all">
            {link.displayUrl}
          </div>
        </div>

        {/* Anatomical Breakdown */}
        <div className="space-y-2">
          <span className="text-xs text-slate-400 block font-medium">
            Address breakdown:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            
            <div className="p-2.5 rounded-md bg-[#050B14] border border-slate-800">
              <span className="text-[11px] text-slate-500 block">Protocol</span>
              <span className={`font-mono ${link.breakdown.protocol.includes('https') ? 'text-cyber-green' : 'text-red-400 font-medium'}`}>
                {link.breakdown.protocol}
              </span>
            </div>

            <div className="p-2.5 rounded-md bg-[#050B14] border border-slate-800">
              <span className="text-[11px] text-slate-500 block">Subdomain</span>
              <span className="font-mono text-slate-200 truncate block">
                {link.breakdown.subdomain}
              </span>
            </div>

            <div className="p-2.5 rounded-md bg-[#050B14] border border-cyber-cyan/40">
              <span className="text-[11px] text-cyber-cyan block">Primary domain</span>
              <span className="font-mono text-white font-medium truncate block">
                {link.breakdown.actualDomain}
              </span>
            </div>

            <div className="p-2.5 rounded-md bg-[#050B14] border border-slate-800">
              <span className="text-[11px] text-slate-500 block">Extension</span>
              <span className="font-mono text-slate-200 truncate block">
                {link.breakdown.tld}
              </span>
            </div>

          </div>
        </div>

        {/* Choice Buttons */}
        {!isAnswered ? (
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
            <span className="text-xs text-slate-300">
              Is this destination authentic or phishing?
            </span>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleDecision(true)}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-md bg-[#070E1A] hover:bg-[#111F38] border border-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                Legitimate address
              </button>

              <button
                type="button"
                onClick={() => handleDecision(false)}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-md bg-[#160B0E] hover:bg-[#2A0F14] border border-red-800/80 text-red-300 text-xs font-medium transition-colors"
              >
                Phishing spoof
              </button>
            </div>
          </div>
        ) : (
          /* Post-Answer Feedback */
          <div className={`p-4 rounded-md border space-y-2.5 text-xs sm:text-sm ${
            isCorrect ? 'bg-[#091712] border-emerald-800/60' : 'bg-[#160B0E] border-red-800/60'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                {isCorrect ? 'Correct call' : 'Incorrect call'}
              </span>
              <span className="text-xs text-slate-300">
                {link.isSafe ? 'Authentic address' : 'Phishing spoof'}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {link.explanation}
            </p>

            <div className="p-2.5 bg-[#050B14] rounded-md border border-slate-800 text-xs text-slate-300">
              <strong className="text-white">Analysis tip: </strong> {link.analysisTip}
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={handleNext}
                className="px-4 py-1.5 rounded-md bg-cyber-green text-[#050B14] font-medium text-xs hover:bg-cyber-cyan transition-colors"
              >
                {currentIndex < total - 1 ? 'Next address' : 'Complete inspection'}
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
