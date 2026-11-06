import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { SCAM_SCENARIOS } from '../data/quizData';

export default function ScamQuiz({ onScoreUpdate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const scenario = SCAM_SCENARIOS[currentIndex];
  const total = SCAM_SCENARIOS.length;

  const handleChoice = (choice) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(choice);

    const isCorrect = choice === scenario.isScam;
    const nextScore = isCorrect ? userScore + 1 : userScore;
    
    if (isCorrect) {
      setUserScore(nextScore);
    }

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
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setUserScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const percentage = Math.round((userScore / total) * 100);

    return (
      <div className="p-6 text-center space-y-4 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[#111F38] text-cyber-cyan text-2xl font-bold border border-slate-700">
          {percentage}%
        </div>

        <div className="space-y-1">
          <h3 className="font-display font-bold text-xl text-white">
            Simulation complete
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            You accurately identified {userScore} out of {total} messages.
          </p>
        </div>

        <p className="text-xs text-slate-400 bg-[#050B14] p-3 rounded-md border border-slate-800 text-left leading-relaxed">
          Remember: Legitimate institutions never threaten legal arrest over WhatsApp or Skype, and banks never ask for passwords or OTPs over text messages.
        </p>

        <button
          onClick={handleRestart}
          className="px-4 py-2 rounded-md bg-[#111F38] hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center gap-2 mx-auto transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Retake simulation</span>
        </button>
      </div>
    );
  }

  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === scenario.isScam;

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      
      {/* Tracker */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
        <span>Scenario {currentIndex + 1} of {total}</span>
        <div className="flex items-center gap-3">
          <span>Score: <strong className="text-white">{userScore}</strong></span>
          <span>Difficulty: <strong className="text-slate-200">{scenario.difficulty}</strong></span>
        </div>
      </div>

      {/* Message Box */}
      <div className="rounded-md border border-slate-700 bg-[#070E1A] overflow-hidden">
        
        {/* Device Header */}
        <div className="bg-[#0B1528] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#111F38] text-slate-200 text-[11px]">
              {scenario.channel}
            </span>
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-xs">{scenario.sender}</span>
          </div>
          <span className="text-slate-500 text-[11px]">{scenario.timestamp}</span>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          {scenario.type === 'email' && (
            <div className="border-b border-slate-800 pb-2 text-xs">
              <span className="text-slate-400">Subject: </span>
              <span className="text-white font-medium">{scenario.subject}</span>
            </div>
          )}

          {scenario.type === 'call' ? (
            <div className="space-y-2 py-2">
              <p className="text-xs text-slate-400 font-medium">Caller transcript:</p>
              <blockquote className="p-3.5 rounded-md bg-[#160B0E] border border-red-900/60 text-xs sm:text-sm text-slate-200 leading-relaxed">
                {scenario.content}
              </blockquote>
            </div>
          ) : (
            <div className="p-3.5 rounded-md bg-[#050B14] border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {scenario.content}
            </div>
          )}
        </div>

        {/* Buttons / Answer prompt */}
        {!isAnswered ? (
          <div className="p-3.5 bg-[#0B1528] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-300">
              Is this message real or a scam?
            </span>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleChoice(false)}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-md bg-[#070E1A] hover:bg-[#111F38] border border-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                Legitimate message
              </button>

              <button
                type="button"
                onClick={() => handleChoice(true)}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-md bg-[#160B0E] hover:bg-[#2A0F14] border border-red-800/80 text-red-300 text-xs font-medium transition-colors"
              >
                This is a scam
              </button>
            </div>
          </div>
        ) : (
          /* Feedback Box */
          <div className={`p-4 border-t space-y-3 text-xs sm:text-sm ${
            isCorrect ? 'bg-[#091712] border-emerald-800/60' : 'bg-[#160B0E] border-red-800/60'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                {isCorrect ? 'Correct analysis' : 'Incorrect analysis'}
              </span>
              <span className="text-xs text-slate-300">
                {scenario.isScam ? 'Identified as scam' : 'Identified as legitimate'}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-[#050B14] p-3 rounded-md border border-slate-800">
              {scenario.explanation}
            </p>

            <div className="space-y-1 text-xs">
              <span className="font-semibold text-slate-200">Key indicators:</span>
              <ul className="list-disc pl-4 text-slate-300 space-y-0.5">
                {scenario.clues.map((clue, idx) => (
                  <li key={idx}>{clue}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={handleNext}
                className="px-4 py-1.5 rounded-md bg-cyber-cyan text-[#050B14] font-medium text-xs hover:bg-[#39FF88] transition-colors"
              >
                {currentIndex < total - 1 ? 'Next scenario' : 'View results'}
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
