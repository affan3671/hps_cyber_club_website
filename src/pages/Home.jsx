import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Gamepad2, 
  Smartphone, 
  Fish, 
  Key, 
  ExternalLink,
  Lock,
  Zap,
  Users
} from 'lucide-react';
import ShieldLogo from '../components/ShieldLogo';
import GlitchText from '../components/GlitchText';
import Counter from '../components/Counter';
import { THREATS } from '../data/threatsData';

export default function Home() {
  const featuredThreats = THREATS.slice(0, 4);

  return (
    <div className="relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* School & Club Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-cyan-500/30 text-xs sm:text-sm text-cyan-300 font-mono shadow-glow-cyan">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Official Cybersecurity Awareness Club</span>
              <span className="text-slate-500">•</span>
              <span className="text-white font-semibold">Hamdard Public School</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-[1.1]">
              CYBER SHIELD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#39FF88] to-[#8B5CF6]">
                <GlitchText text="HPS CYBER DEFENSE" />
              </span>
            </h1>

            {/* Tagline */}
            <div className="p-3 sm:p-4 rounded-xl bg-cyan-950/20 border-l-4 border-[#00E5FF] max-w-xl mx-auto lg:mx-0">
              <p className="font-display font-bold text-lg sm:text-2xl text-cyan-200 tracking-wide">
                "Stop. Think. Then Take Action."
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Equipping young minds to identify scams, outsmart phishers, and build unbreakable digital defenses.
              </p>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <span className="text-white font-semibold">Cyber Shield HPS</span> at <strong className="text-cyan-300">Hamdard Public School</strong>. The internet isn't something to fear — it's something to master. We teach students, teachers, and parents how to outwit cybercriminals with confidence, calm minds, and proactive habits.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/threats"
                className="btn-cyber-primary text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 group text-sm sm:text-base cursor-pointer"
              >
                <span>Learn the Threats</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/pledge"
                className="px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-medium flex items-center gap-2 transition-all text-sm sm:text-base hover:border-cyan-500/50"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Take the Pledge</span>
              </Link>

              <Link
                to="/practice-zone"
                className="px-5 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-300 font-semibold flex items-center gap-2 transition-all text-sm sm:text-base shadow-glow-green"
              >
                <Gamepad2 className="w-4 h-4 text-emerald-400" />
                <span>Practice Zone (Quiz)</span>
              </Link>
            </div>

            {/* Quick Helpline Pill */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-red-400">
                <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                <span>Dial 1930</span>
              </span>
              <span>•</span>
              <span>National Cybercrime Helpline (24x7)</span>
            </div>
          </motion.div>

          {/* Hero Right Visual: Cyber Shield Interactive Hologram */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl transform -rotate-3" />
              
              {/* Card Container */}
              <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl">
                
                {/* Header of Shield Card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <ShieldLogo className="w-12 h-12" />
                    <div>
                      <h3 className="font-display font-bold text-white text-base">HPS Cyber Shield</h3>
                      <p className="text-[11px] font-mono text-cyan-400">STATUS: DEFENSE ACTIVE</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 uppercase">
                    Zero Panic
                  </span>
                </div>

                {/* Cyber Matrix stats */}
                <div className="space-y-3.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#070E1A]/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Target Audience</span>
                    <span className="text-white font-bold">Students & Youth (Teens)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#070E1A]/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Golden Response Window</span>
                    <span className="text-emerald-400 font-bold">&lt; 2 Hours (Dial 1930)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#070E1A]/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Monthly Event</span>
                    <span className="text-cyan-300 font-bold">Cyber Jagrookta Diwas</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#070E1A]/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">National Partner Link</span>
                    <span className="text-purple-300 font-bold">MHA / I4C Alignment</span>
                  </div>
                </div>

                {/* Emergency direct card alert */}
                <div className="mt-6 p-3.5 rounded-xl bg-red-950/30 border border-red-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400 shrink-0">
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="text-xs">
                    <p className="text-white font-semibold">Toll-Free Emergency: 1930</p>
                    <p className="text-red-300 text-[11px]">Direct financial cyber fraud freezing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Statistics Bar */}
      <section className="border-y border-cyan-500/15 bg-[#0B1528]/50 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00E5FF] font-display">
                <Counter end={1930} />
              </div>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                National Helpline Dial
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#39FF88] font-display">
                <Counter end={100} suffix="%" />
              </div>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                Free & Student-Centered
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#8B5CF6] font-display">
                <Counter end={7} suffix="+" />
              </div>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                Core Threats Deconstructed
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display">
                <Counter end={0} suffix=" Stored" />
              </div>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                Personal Data Collected
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Threat Intelligence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>PRIMARY VECTORS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Main Threats Targeting Students
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Cybercriminals rely on manipulation, urgent deadlines, and tempting promises. Learn the telltale signs before they strike.
            </p>
          </div>

          <Link
            to="/threats"
            className="inline-flex items-center gap-2 text-cyber-cyan hover:text-white font-mono text-xs uppercase tracking-wider group"
          >
            <span>Browse All Threat Blueprints</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Threat Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredThreats.map((threat) => (
            <div
              key={threat.id}
              className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                    threat.severity === 'Critical' 
                      ? 'bg-red-950 text-red-400 border border-red-500/40' 
                      : 'bg-amber-950 text-amber-400 border border-amber-500/40'
                  }`}>
                    {threat.severity} Severity
                  </span>
                  <span className="text-slate-400 text-xs font-mono">{threat.category}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-cyan transition-colors">
                  {threat.title}
                </h3>
                <p className="text-xs text-cyan-300/80 font-mono mt-0.5">
                  {threat.subtitle}
                </p>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed line-clamp-3">
                  {threat.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800">
                <Link
                  to="/threats"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-xs font-mono text-cyan-300 hover:text-white transition-all border border-slate-700/60 hover:border-cyan-500/50"
                >
                  <span>Deconstruct Threat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prominent Emergency Action Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/60 via-[#0B1528] to-red-950/60 border border-red-500/40 p-6 sm:p-10 shadow-glow-danger">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-300 text-xs font-mono font-bold">
                <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
                <span>CRITICAL SCAM PROTOCOL</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Been Scammed? Act Immediately.
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Call <strong className="text-white text-base">1930</strong> right away to initiate golden-hour fund freezing, and log the incident at <strong className="text-cyan-300">cybercrime.gov.in</strong>. Do not stay silent.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:1930"
                className="bg-red-600 hover:bg-red-700 text-white font-display font-bold text-base px-6 py-3.5 rounded-xl shadow-glow-danger flex items-center gap-2 transition-transform hover:scale-105"
              >
                <PhoneCall className="w-5 h-5 animate-bounce" />
                <span>Dial 1930 Toll-Free</span>
              </a>

              <Link
                to="/what-to-do"
                className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-sm px-5 py-3.5 rounded-xl transition-all"
              >
                View 5-Step Timeline →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* School Community & Mission Section */}
      <section className="py-16 bg-[#070E1A]/60 border-t border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-panel p-6 rounded-xl border border-cyan-500/20 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-cyan-500/10 text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Cyber Jagrookta Diwas</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every first Wednesday of the month, Hamdard Public School conducts dedicated cyber hygiene homeroom sessions to dissect current digital scams.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-emerald-500/20 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">The Student Cyber Safety Pledge</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Adopt the 7 principles outlined by the Ministry of Home Affairs / I4C. Commit to safe app downloads, zero OTP sharing, and responsible digital habits.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-purple-500/20 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-purple-500/10 text-purple-400">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Interactive Practice Zone</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Put your reflexes to the test with our simulated fake SMS, WhatsApp chats, and phishing link analyzer. Master scam detection before you face real traps.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

