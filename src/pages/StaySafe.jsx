import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  KeyRound, 
  ShieldCheck, 
  DownloadCloud, 
  EyeOff, 
  WifiOff, 
  AlertOctagon, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Shield, 
  HelpCircle, 
  Copy,
  Lock,
  Clock,
  Eye,
  EyeOff as EyeSlash
} from 'lucide-react';
import { HABIT_CATEGORIES, RED_FLAG_CHECKLIST } from '../data/staySafeData';

export default function StaySafe() {
  const [activeTab, setActiveTab] = useState(HABIT_CATEGORIES[0].id);
  const [copiedPass, setCopiedPass] = useState(false);
  const [samplePassphrase, setSamplePassphrase] = useState('Falcon#River#Orbit#99');
  const [testInput, setTestInput] = useState('Hamdard@CyberShield2026!');
  const [showPassword, setShowPassword] = useState(false);

  const activeCategory = HABIT_CATEGORIES.find((cat) => cat.id === activeTab) || HABIT_CATEGORIES[0];

  // Dynamic Password Crack Time Estimation
  const passwordStats = useMemo(() => {
    const pwd = testInput;
    if (!pwd) {
      return { score: 0, timeToCrack: 'Enter a sample to test', label: 'Empty', color: 'slate' };
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

    // Approximate seconds at 10 billion guesses/sec
    const combinations = Math.pow(pool, len);
    const seconds = combinations / (2 * 1e10);

    let timeToCrack = 'Instant (Under 1 second)';
    let score = 1;
    let label = 'Very Weak';
    let color = 'red';

    if (seconds < 1) {
      timeToCrack = 'Instant (0 seconds)';
      score = 1;
      label = 'Very Weak';
      color = 'red';
    } else if (seconds < 60) {
      timeToCrack = `${Math.ceil(seconds)} seconds`;
      score = 1;
      label = 'Weak';
      color = 'red';
    } else if (seconds < 3600) {
      timeToCrack = `${Math.ceil(seconds / 60)} minutes`;
      score = 2;
      label = 'Moderate';
      color = 'amber';
    } else if (seconds < 86400) {
      timeToCrack = `${Math.ceil(seconds / 3600)} hours`;
      score = 2;
      label = 'Fair';
      color = 'amber';
    } else if (seconds < 31536000) {
      timeToCrack = `${Math.ceil(seconds / 86400)} days`;
      score = 3;
      label = 'Good';
      color = 'cyan';
    } else if (seconds < 31536000 * 1000) {
      timeToCrack = `${Math.ceil(seconds / 31536000)} years`;
      score = 4;
      label = 'Strong';
      color = 'emerald';
    } else if (seconds < 31536000 * 1e9) {
      timeToCrack = `${Math.ceil(seconds / (31536000 * 1000))} Thousand years`;
      score = 4;
      label = 'Military Grade';
      color = 'emerald';
    } else {
      timeToCrack = 'Millions of Centuries (Uncrackable)';
      score = 4;
      label = 'Uncrackable Passphrase';
      color = 'emerald';
    }

    return {
      score,
      timeToCrack,
      label,
      color,
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      len,
    };
  }, [testInput]);

  const generatePassphrase = () => {
    const words = ['Falcon', 'River', 'Orbit', 'Shadow', 'Neon', 'Tiger', 'Cosmic', 'Shield', 'Galaxy', 'Breeze', 'Matrix', 'Zenith'];
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

  const getIcon = (id) => {
    switch (id) {
      case 'passwords-2fa': return <KeyRound className="w-5 h-5" />;
      case 'otp-pin-discipline': return <ShieldCheck className="w-5 h-5" />;
      case 'apps-downloads': return <DownloadCloud className="w-5 h-5" />;
      case 'social-privacy': return <EyeOff className="w-5 h-5" />;
      case 'wifi-public-devices': return <WifiOff className="w-5 h-5" />;
      default: return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>PROACTIVE PREVENTION & HYGIENE</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Everyday Habits for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">Total Safety</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Cyber defense isn't about paranoia — it's about forming automatic healthy routines. Explore these five core pillars to safeguard your digital life.
        </p>
      </div>

      {/* Habits Navigation Tabs */}
      <div className="space-y-8">
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {HABIT_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/15 border-2 border-cyan-400 text-white shadow-glow-cyan'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>
                  {getIcon(cat.id)}
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Panel */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 space-y-8"
        >
          {/* Header of Active Category */}
          <div className="border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                {getIcon(activeCategory.id)}
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-white">
                  {activeCategory.title}
                </h2>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-0.5">
                  {activeCategory.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.tips.map((tip, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#070E1A]/80 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base text-white">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-7">
                    {tip.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-start gap-2 pl-2 bg-slate-900/40 p-2.5 rounded-lg">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] font-mono text-emerald-300">
                    <strong>Shield Action:</strong> {tip.action}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Features for Passwords & 2FA Tab */}
          {activeCategory.id === 'passwords-2fa' && (
            <div className="space-y-6 pt-2">
              
              {/* Passphrase Generator */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-purple-950/20 to-slate-900 border border-cyan-500/30 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        Student Passphrase Generator
                      </h4>
                      <p className="text-xs text-slate-400">
                        Why memorize "P@ssw0rd!" when a 4-word passphrase takes centuries to crack?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={generatePassphrase}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors cursor-pointer"
                    >
                      Roll New
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedPass ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-[#050B14] rounded-lg border border-cyan-500/40 text-center font-mono text-sm sm:text-base text-cyan-300 select-all">
                  {samplePassphrase}
                </div>
              </div>

              {/* Password Strength & Brute-Force Crack Time Simulator */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-[#0B1528] via-slate-900 to-[#0B1528] border border-slate-700/80 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <h4 className="font-display font-bold text-sm text-white">
                      Password Strength & Brute-Force Time Simulator
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    * Evaluated 100% in local memory
                  </span>
                </div>

                {/* Input box */}
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    placeholder="Type any test password (e.g. Student123 or a long passphrase)..."
                    className="w-full bg-[#050B14] border border-slate-700 focus:border-cyan-400 rounded-xl pl-4 pr-12 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 cursor-pointer"
                    aria-label="Toggle password view"
                  >
                    {showPassword ? <EyeSlash className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Strength Meter Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Strength Rating:</span>
                    <span className={`font-bold uppercase ${
                      passwordStats.color === 'emerald' ? 'text-emerald-400' :
                      passwordStats.color === 'cyan' ? 'text-cyan-400' :
                      passwordStats.color === 'amber' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {passwordStats.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 h-2">
                    <div className={`rounded-full transition-all ${
                      passwordStats.score >= 1 
                        ? (passwordStats.score === 1 ? 'bg-red-500' : passwordStats.score === 2 ? 'bg-amber-500' : passwordStats.score === 3 ? 'bg-cyan-400' : 'bg-emerald-400')
                        : 'bg-slate-800'
                    }`} />
                    <div className={`rounded-full transition-all ${
                      passwordStats.score >= 2 
                        ? (passwordStats.score === 2 ? 'bg-amber-500' : passwordStats.score === 3 ? 'bg-cyan-400' : 'bg-emerald-400')
                        : 'bg-slate-800'
                    }`} />
                    <div className={`rounded-full transition-all ${
                      passwordStats.score >= 3 ? (passwordStats.score === 3 ? 'bg-cyan-400' : 'bg-emerald-400') : 'bg-slate-800'
                    }`} />
                    <div className={`rounded-full transition-all ${
                      passwordStats.score >= 4 ? 'bg-emerald-400' : 'bg-slate-800'
                    }`} />
                  </div>
                </div>

                {/* Crack Time Result Card */}
                <div className="p-3 rounded-lg bg-[#050B14] border border-slate-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Time needed by a hacker's GPU cluster to crack:
                  </span>
                  <span className={`font-bold ${
                    passwordStats.color === 'emerald' ? 'text-emerald-400' :
                    passwordStats.color === 'cyan' ? 'text-cyan-300' :
                    passwordStats.color === 'amber' ? 'text-amber-400' : 'text-red-400'
                  }`}>
                    {passwordStats.timeToCrack}
                  </span>
                </div>

                {/* Criteria Pills */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  <span className={`px-2 py-0.5 rounded border ${
                    passwordStats.len >= 14 ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}>
                    14+ Characters ({passwordStats.len})
                  </span>
                  <span className={`px-2 py-0.5 rounded border ${
                    passwordStats.hasUpper ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}>
                    Uppercase (A-Z)
                  </span>
                  <span className={`px-2 py-0.5 rounded border ${
                    passwordStats.hasLower ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}>
                    Lowercase (a-z)
                  </span>
                  <span className={`px-2 py-0.5 rounded border ${
                    passwordStats.hasNumber ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}>
                    Numbers (0-9)
                  </span>
                  <span className={`px-2 py-0.5 rounded border ${
                    passwordStats.hasSymbol ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40' : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}>
                    Symbols (#$%)
                  </span>
                </div>
              </div>

            </div>
          )}

        </motion.div>
      </div>

      {/* Red Flag Checklist (Short, Scannable list of scam warning signs) */}
      <section className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-mono text-red-400">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>INSTANT SCAM DETECTOR</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            The Universal Red Flag Checklist
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            If an interaction has any of these 7 traits, pause immediately. It is 99% likely to be a scam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RED_FLAG_CHECKLIST.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all space-y-2 bg-gradient-to-br from-red-950/10 to-[#0B1528]"
            >
              <div className="flex items-center gap-2 text-red-400">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <h3 className="font-display font-bold text-sm text-white">
                  {item.flag}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {item.meaning}
              </p>
            </div>
          ))}

          {/* Summary Box */}
          <div className="glass-panel p-4 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-[#0B1528] flex flex-col justify-center space-y-2">
            <div className="flex items-center gap-2 text-cyan-400">
              <Shield className="w-4 h-4" />
              <h3 className="font-display font-bold text-sm text-white">The Golden Defense Rule</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              When in doubt, hang up or disconnect. Contact your parents, teacher, or call <strong className="text-white">1930</strong>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

