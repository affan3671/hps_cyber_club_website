import React, { useState, useMemo } from 'react';
import { HABIT_CATEGORIES, RED_FLAG_CHECKLIST } from '../data/staySafeData';

export default function StaySafe() {
  const [activeTab, setActiveTab] = useState(HABIT_CATEGORIES[0].id);
  const [copiedPass, setCopiedPass] = useState(false);
  const [samplePassphrase, setSamplePassphrase] = useState('Falcon#River#Orbit#99');
  const [testInput, setTestInput] = useState('Hamdard#Student2026');
  const [showPassword, setShowPassword] = useState(false);

  const activeCategory = HABIT_CATEGORIES.find((cat) => cat.id === activeTab) || HABIT_CATEGORIES[0];

  // Dynamic Password Crack Time Estimation
  const passwordStats = useMemo(() => {
    const pwd = testInput;
    if (!pwd) {
      return { score: 0, timeToCrack: 'Enter text to test', label: 'Empty', color: 'slate' };
    }

    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
    const len = pwd.length;

    let pool = 0;
    if (hasLower) pool += 26;
    if (hasUpper) pool += 26;
    if (hasNumber) pool += 10;
    if (hasSymbol) pool += 33;
    if (pool === 0) pool = 10;

    const combinations = Math.pow(pool, len);
    const seconds = combinations / (2 * 1e10);

    let timeToCrack = 'Instant (under 1 second)';
    let score = 1;
    let label = 'Very weak';

    if (seconds < 1) {
      timeToCrack = 'Instant (under 1 second)';
      score = 1;
      label = 'Very weak';
    } else if (seconds < 60) {
      timeToCrack = `${Math.ceil(seconds)} seconds`;
      score = 1;
      label = 'Weak';
    } else if (seconds < 3600) {
      timeToCrack = `${Math.ceil(seconds / 60)} minutes`;
      score = 2;
      label = 'Moderate';
    } else if (seconds < 86400) {
      timeToCrack = `${Math.ceil(seconds / 3600)} hours`;
      score = 2;
      label = 'Fair';
    } else if (seconds < 31536000) {
      timeToCrack = `${Math.ceil(seconds / 86400)} days`;
      score = 3;
      label = 'Good';
    } else if (seconds < 31536000 * 1000) {
      timeToCrack = `${Math.ceil(seconds / 31536000)} years`;
      score = 4;
      label = 'Strong';
    } else {
      timeToCrack = 'Centuries (practically uncrackable)';
      score = 4;
      label = 'Very strong';
    }

    return {
      score,
      timeToCrack,
      label,
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      len,
    };
  }, [testInput]);

  const generatePassphrase = () => {
    const words = ['Falcon', 'River', 'Orbit', 'Shadow', 'Tiger', 'Shield', 'Galaxy', 'Breeze', 'Matrix', 'Zenith'];
    const syms = ['#', '!', '$', '%', '&'];
    const p1 = words[Math.floor(Math.random() * words.length)];
    const p2 = words[Math.floor(Math.random() * words.length)];
    const p3 = words[Math.floor(Math.random() * words.length)];
    const num = Math.floor(Math.random() * 90 + 10);
    const sym = syms[Math.floor(Math.random() * syms.length)];
    setSamplePassphrase(`${p1}${sym}${p2}${sym}${p3}${sym}${num}`);
    setCopiedPass(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(samplePassphrase);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-white">
          Safe online habits
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Straightforward habits to protect your personal accounts, prevent unauthorized access, and avoid falling for deceptive links.
        </p>
      </div>

      {/* Tabs */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-none">
          {HABIT_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-cyber-cyan text-[#050B14] font-semibold'
                    : 'bg-[#0B1528] text-slate-300 hover:text-white hover:bg-[#111F38] border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="panel p-5 sm:p-6 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="font-display font-bold text-xl text-white">
              {activeCategory.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {activeCategory.tagline}
            </p>
          </div>

          {/* Tips List */}
          <div className="space-y-4">
            {activeCategory.tips.map((tip, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-md bg-[#070E1A] border border-slate-800 space-y-2"
              >
                <h3 className="font-semibold text-sm sm:text-base text-white">
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {tip.detail}
                </p>
                <p className="text-xs text-cyber-green pt-1 border-t border-slate-800/80">
                  <span className="font-semibold text-slate-200">Recommended action:</span> {tip.action}
                </p>
              </div>
            ))}
          </div>

          {/* Passphrase Generator and Password Tester */}
          {activeCategory.id === 'passwords-2fa' && (
            <div className="space-y-6 pt-4 border-t border-slate-800">
              
              {/* Passphrase Generator */}
              <div className="p-4 rounded-md bg-[#070E1A] border border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-sm text-white">
                      Passphrase generator
                    </h3>
                    <p className="text-xs text-slate-400">
                      Four random words separated by symbols take decades for automated guessing tools to crack.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={generatePassphrase}
                      className="px-3 py-1.5 rounded-md bg-cyber-cyan text-[#050B14] font-medium text-xs hover:bg-[#39FF88] transition-colors"
                    >
                      Generate new
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="px-3 py-1.5 rounded-md bg-[#111F38] text-slate-200 hover:text-white border border-slate-700 text-xs transition-colors"
                    >
                      {copiedPass ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-[#050B14] rounded-md border border-slate-800 text-center font-mono text-xs sm:text-sm text-cyber-cyan select-all">
                  {samplePassphrase}
                </div>
              </div>

              {/* Password Tester */}
              <div className="p-4 rounded-md bg-[#070E1A] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white">
                    Password strength estimator
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Tested in local memory; nothing is transmitted
                  </span>
                </div>

                <div className="flex gap-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    placeholder="Type a test password..."
                    className="flex-grow bg-[#050B14] border border-slate-700 focus:border-cyber-cyan rounded-md px-3 py-2 text-xs sm:text-sm text-white font-mono focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-3 py-1.5 rounded-md bg-[#111F38] text-slate-300 text-xs border border-slate-700 hover:text-white"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-t border-slate-800 pt-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Rating:</span>
                    <span className="font-semibold text-white">{passwordStats.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Time needed to crack:</span>
                    <span className="font-semibold text-cyber-cyan">{passwordStats.timeToCrack}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* Warning Signs Checklist */}
      <section className="space-y-4 pt-2">
        <div className="space-y-1 border-b border-slate-800 pb-3">
          <h2 className="font-display font-bold text-xl text-white">
            Common warning signs of an online scam
          </h2>
          <p className="text-xs text-slate-400">
            If an interaction has any of these traits, stop before sharing information or clicking links.
          </p>
        </div>

        <div className="panel divide-y divide-slate-800">
          {RED_FLAG_CHECKLIST.map((item, idx) => (
            <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <h3 className="font-semibold text-xs sm:text-sm text-red-300 sm:w-1/3 shrink-0">
                {item.flag}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed sm:w-2/3">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
