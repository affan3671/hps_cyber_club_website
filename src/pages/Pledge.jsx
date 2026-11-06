import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Check, Printer, RotateCcw, ExternalLink } from 'lucide-react';
import ShieldLogo from '../components/ShieldLogo';
import { PLEDGE_ITEMS } from '../data/pledgeData';

export default function Pledge() {
  const [checkedItems, setCheckedItems] = useState({});
  const [studentName, setStudentName] = useState('');
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const totalItems = PLEDGE_ITEMS.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllChecked = checkedCount === totalItems;

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
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

  useEffect(() => {
    if (isAllChecked && !hasCelebrated) {
      setHasCelebrated(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#00E5FF', '#39FF88', '#FF9933', '#FFFFFF', '#138808'],
        });
      } catch (err) {}
    }
  }, [isAllChecked, hasCelebrated]);

  const todayFormatted = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'long',
  }).format(new Date());

  const handlePrintCertificate = () => {
    document.body.classList.add('print-certificate-active');

    let printStyle = document.getElementById('print-page-style');
    if (!printStyle) {
      printStyle = document.createElement('style');
      printStyle.id = 'print-page-style';
      document.head.appendChild(printStyle);
    }
    printStyle.innerHTML = `
      @page {
        size: A4 landscape;
        margin: 6mm;
      }
    `;

    const cleanup = () => {
      document.body.classList.remove('print-certificate-active');
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
      if (isAllChecked) {
        document.body.classList.add('print-certificate-active');
        let printStyle = document.getElementById('print-page-style');
        if (!printStyle) {
          printStyle = document.createElement('style');
          printStyle.id = 'print-page-style';
          document.head.appendChild(printStyle);
        }
        printStyle.innerHTML = `
          @page {
            size: A4 landscape;
            margin: 6mm;
          }
        `;
      }
    };
    const handleAfterPrint = () => {
      document.body.classList.remove('print-certificate-active');
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
  }, [isAllChecked]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6 no-print">
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-white">
          Cyber safety pledge
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The official cyber safety commitments from the Ministry of Home Affairs and Indian Cyber Crime Coordination Centre (I4C). Tick each line to generate your personal certificate.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="panel p-4 flex flex-wrap items-center justify-between gap-4 no-print">
        <div className="space-y-0.5">
          <p className="text-xs text-slate-400">Pledge completion</p>
          <p className="text-sm font-semibold text-white">
            {checkedCount} of {totalItems} commitments ticked
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!isAllChecked ? (
            <button
              onClick={checkAll}
              className="px-3 py-1.5 rounded-md bg-[#111F38] hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              Tick all commitments
            </button>
          ) : (
            <button
              onClick={resetAll}
              className="px-3 py-1.5 rounded-md bg-[#111F38] hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-2.5 no-print">
        {PLEDGE_ITEMS.map((item) => {
          const isChecked = !!checkedItems[item.id];

          return (
            <label
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-lg border transition-colors cursor-pointer select-none flex items-start gap-3 ${
                isChecked
                  ? 'bg-[#0B1528] border-cyber-cyan/60 text-white'
                  : 'panel hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                isChecked
                  ? 'bg-cyber-cyan border-cyber-cyan text-[#050B14]'
                  : 'bg-[#050B14] border-slate-700'
              }`}>
                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>

              <div className="space-y-1">
                <p className="text-sm sm:text-base font-medium leading-snug">
                  {item.text}
                </p>
                <p className="text-xs text-slate-400">
                  {item.explanation}
                </p>
              </div>
            </label>
          );
        })}
      </div>

      {/* Name Input & Certificate */}
      <div className="pt-4 border-t border-slate-800 space-y-6">
        
        <div className="panel p-5 max-w-xl mx-auto space-y-2 no-print">
          <label htmlFor="student-name" className="block text-xs font-semibold text-slate-200">
            Enter your name to personalize the certificate:
          </label>
          <input
            id="student-name"
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student full name"
            className="w-full bg-[#050B14] border border-slate-700 focus:border-cyber-cyan rounded-md px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none"
            maxLength={40}
          />
          <p className="text-xs text-slate-500">
            This certificate is generated locally in your browser. No data is collected or stored.
          </p>
        </div>

        {isAllChecked && (
          <div className="space-y-4">
            {/* Certificate Frame */}
            <div 
              id="pledge-certificate"
              className="panel border-2 border-cyber-cyan p-8 sm:p-10 text-center space-y-5"
            >
              {/* Indian Tri-Color Bar */}
              <div className="h-1.5 w-full flex rounded-full overflow-hidden">
                <div className="w-1/3 bg-[#FF9933]" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-[#138808]" />
              </div>

              {/* Certificate Header */}
              <div className="space-y-1.5 pt-2">
                <ShieldLogo className="w-12 h-12 mx-auto" />
                <p className="text-xs font-medium text-cyber-cyan uppercase">
                  Hamdard Public School, Cyber Shield Club
                </p>
                <h2 className="font-display font-bold text-xl sm:text-3xl text-white">
                  Certificate of Cyber Safety Commitment
                </h2>
                <p className="text-xs text-slate-400">
                  Verification ID: HPS-CS-PLEDGE-{new Date().getFullYear()}
                </p>
              </div>

              {/* Recipient Statement */}
              <div className="space-y-2 py-3 border-y border-slate-800 max-w-xl mx-auto">
                <p className="text-xs text-slate-400 uppercase">
                  This certificate is presented to
                </p>
                <p className="font-display font-bold text-2xl sm:text-3xl text-cyber-cyan">
                  {studentName.trim() || 'Student Ambassador'}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  for affirming the national student cyber hygiene commitments, agreeing never to share OTPs or download unverified apps, and pledging:
                </p>
                <p className="font-display font-semibold text-base sm:text-lg text-cyber-green">
                  "Stop. Think. Then Take Action."
                </p>
              </div>

              {/* Details and Sign-off */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
                <div>
                  <span className="text-slate-400 block text-[11px]">Issued by</span>
                  <span className="text-white font-medium">Cyber Shield HPS</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Date</span>
                  <span className="text-white font-medium">{todayFormatted}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Institution</span>
                  <span className="text-white font-medium">Hamdard Public School</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Pledge formulated by the Ministry of Home Affairs and Indian Cyber Crime Coordination Centre (I4C). Helpline 1930.
              </div>
            </div>

            {/* Print Button */}
            <div className="flex justify-center no-print">
              <button
                type="button"
                onClick={handlePrintCertificate}
                className="px-5 py-2.5 rounded-md bg-cyber-cyan hover:bg-[#39FF88] text-[#050B14] font-semibold text-sm flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" aria-hidden="true" />
                <span>Print or save certificate</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Credit Line */}
      <div className="panel p-4 text-center space-y-1 no-print text-xs text-slate-400">
        <p>
          Pledge text by the{' '}
          <a
            href="https://i4c.mha.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-cyan hover:underline inline-flex items-center gap-1"
          >
            <span>Ministry of Home Affairs / Indian Cyber Crime Coordination Centre (I4C)</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </p>
        <p className="text-slate-500">
          Adapted for student awareness by Cyber Shield HPS at Hamdard Public School.
        </p>
      </div>

    </div>
  );
}
