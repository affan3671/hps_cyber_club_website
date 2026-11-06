import React, { useState, useEffect } from 'react';
import { MessageSquareWarning, Link2, Check, Copy, Printer } from 'lucide-react';
import ScamQuiz from '../components/ScamQuiz';
import PhishingInspector from '../components/PhishingInspector';
import ShieldLogo from '../components/ShieldLogo';

export default function PracticeZone() {
  const [activeMode, setActiveMode] = useState('quiz');
  const [quizStats, setQuizStats] = useState({ score: 0, total: 6 });
  const [inspectorStats, setInspectorStats] = useState({ score: 0, total: 5 });
  const [playerName, setPlayerName] = useState('');
  const [copiedBadge, setCopiedBadge] = useState(false);

  const totalPossible = quizStats.total + inspectorStats.total;
  const currentTotal = quizStats.score + inspectorStats.score;
  const overallPercentage = Math.round((currentTotal / totalPossible) * 100);

  const todayFormatted = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
  }).format(new Date());

  const handleCopyShare = () => {
    const text = `I scored ${currentTotal}/${totalPossible} (${overallPercentage}%) on the Cyber Shield HPS scam detection exercises at Hamdard Public School.`;
    navigator.clipboard.writeText(text);
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2000);
  };

  const handlePrintResultCard = () => {
    document.body.classList.add('print-result-active');

    let printStyle = document.getElementById('print-page-style');
    if (!printStyle) {
      printStyle = document.createElement('style');
      printStyle.id = 'print-page-style';
      document.head.appendChild(printStyle);
    }
    printStyle.innerHTML = `
      @page {
        size: A4 portrait;
        margin: 8mm;
      }
    `;

    const cleanup = () => {
      document.body.classList.remove('print-result-active');
      if (printStyle) {
        printStyle.remove();
      }
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);

    setTimeout(() => {
      window.print();
      setTimeout(cleanup, 2500);
    }, 50);
  };

  useEffect(() => {
    const handleBeforePrint = () => {
      document.body.classList.add('print-result-active');
      let printStyle = document.getElementById('print-page-style');
      if (!printStyle) {
        printStyle = document.createElement('style');
        printStyle.id = 'print-page-style';
        document.head.appendChild(printStyle);
      }
      printStyle.innerHTML = `
        @page {
          size: A4 portrait;
          margin: 8mm;
        }
      `;
    };
    const handleAfterPrint = () => {
      document.body.classList.remove('print-result-active');
      const printStyle = document.getElementById('print-page-style');
      if (printStyle) {
        printStyle.remove();
      }
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
      const printStyle = document.getElementById('print-page-style');
      if (printStyle) {
        printStyle.remove();
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6 no-print">
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-white">
          Practice zone: spot the scam
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Test your ability to spot deceptive messages and suspicious web links. No personal data is collected or saved.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 no-print">
        <button
          onClick={() => setActiveMode('quiz')}
          className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
            activeMode === 'quiz'
              ? 'bg-cyber-cyan text-[#050B14] font-semibold'
              : 'bg-[#0B1528] text-slate-300 hover:text-white hover:bg-[#111F38] border border-slate-800'
          }`}
        >
          Spot the scam (Quiz)
        </button>

        <button
          onClick={() => setActiveMode('inspector')}
          className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
            activeMode === 'inspector'
              ? 'bg-cyber-cyan text-[#050B14] font-semibold'
              : 'bg-[#0B1528] text-slate-300 hover:text-white hover:bg-[#111F38] border border-slate-800'
          }`}
        >
          Phishing link inspector
        </button>
      </div>

      {/* Active Game Component Container */}
      <div className="panel p-5 sm:p-6 no-print">
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

      {/* Result Card */}
      <div className="pt-4 border-t border-slate-800 space-y-5">
        <div className="space-y-1 no-print">
          <h2 className="font-display font-bold text-xl text-white">
            Performance summary
          </h2>
          <p className="text-xs text-slate-400">
            Calculated locally on your device for Hamdard Public School students
          </p>
        </div>

        <div 
          id="defender-result-card"
          className="panel p-6 max-w-lg mx-auto space-y-5"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <ShieldLogo className="w-8 h-8" />
              <div>
                <h3 className="font-display font-bold text-sm text-white">Cyber defense summary</h3>
                <p className="text-xs text-slate-400">Hamdard Public School</p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-md bg-[#111F38] text-cyber-cyan text-xs font-semibold">
              {overallPercentage}% correct
            </span>
          </div>

          <div className="space-y-3">
            <div className="no-print">
              <label htmlFor="badge-nickname" className="text-xs text-slate-400 block mb-1">
                Student identifier or initials:
              </label>
              <input
                id="badge-nickname"
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Type your name or initials"
                className="w-full bg-[#050B14] border border-slate-700 rounded-md px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyber-cyan"
                maxLength={30}
              />
            </div>

            <div className="hidden print:block py-1 border-b border-slate-800">
              <span className="text-xs text-slate-400 block">Student identifier:</span>
              <span className="font-semibold text-sm text-white">
                {playerName.trim() || 'Student'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 rounded-md bg-[#050B14] border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Scam messages</span>
                <span className="text-white font-semibold text-sm">
                  {quizStats.score} of {quizStats.total} correct
                </span>
              </div>

              <div className="p-3 rounded-md bg-[#050B14] border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Web links</span>
                <span className="text-white font-semibold text-sm">
                  {inspectorStats.score} of {inspectorStats.total} correct
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Date: {todayFormatted}</span>
            <span>Helpline: 1930</span>
          </div>

          <div className="pt-1 flex items-center justify-between gap-2.5 no-print">
            <button
              onClick={handleCopyShare}
              className="flex-1 py-2 px-3 rounded-md bg-cyber-cyan hover:bg-[#39FF88] text-[#050B14] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedBadge ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedBadge ? 'Copied to clipboard' : 'Copy score summary'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrintResultCard}
              className="py-2 px-3 rounded-md bg-[#111F38] hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>Print card</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
