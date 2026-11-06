import React from 'react';
import { 
  Shield, 
  Calendar, 
  Users, 
  Target, 
  Sparkles, 
  AlertCircle
} from 'lucide-react';
import ShieldLogo from '../components/ShieldLogo';
import { CLUB_INFO, JAGROOKTA_DIWAS, PLACEHOLDER_TEAM } from '../data/aboutData';

export default function About() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Shield className="w-3.5 h-3.5" />
          <span>HAMDARD PUBLIC SCHOOL STUDENT INITIATIVE</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400">Cyber Shield HPS</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Building digital resilience, awareness, and ethical cyber citizenship across the student body of Hamdard Public School.
        </p>
      </div>

      {/* Mission & Objectives Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Mission Statement Box */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldLogo className="w-12 h-12" />
              <div>
                <h2 className="font-display font-bold text-2xl text-white">Our Mission</h2>
                <p className="text-xs text-cyan-300 font-mono">Hamdard Public School • Established {CLUB_INFO.established}</p>
              </div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              "{CLUB_INFO.mission}"
            </p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between font-mono text-xs">
            <span className="text-slate-400">Club Motto</span>
            <span className="text-cyan-300 font-bold">{CLUB_INFO.tagline}</span>
          </div>
        </div>

        {/* Objectives Box */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <Target className="w-5 h-5" />
            <h2 className="font-display font-bold text-xl text-white">What We Do</h2>
          </div>

          <div className="space-y-3 pt-2">
            {CLUB_INFO.objectives.map((obj, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#070E1A]/80 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Cyber Jagrookta Diwas Special Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B1528] via-cyan-950/40 to-[#0B1528] border-2 border-cyan-400/50 p-6 sm:p-10 space-y-6 shadow-[0_0_40px_rgba(0,229,255,0.15)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>MONTHLY OBSERVANCE INITIATIVE</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {JAGROOKTA_DIWAS.title}
            </h3>
          </div>

          <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-mono text-xs sm:text-sm font-semibold shrink-0">
            {JAGROOKTA_DIWAS.schedule}
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          {JAGROOKTA_DIWAS.mandate}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {JAGROOKTA_DIWAS.highlights.map((hl, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#050B14]/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Team / Mentors Section (Clearly labeled placeholders) */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 className="font-display font-bold text-2xl text-white">
              Club Leadership & Mentors
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Teacher mentors and student club ambassadors
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLACEHOLDER_TEAM.map((tm) => (
            <div key={tm.id} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-500/30">
                  {tm.role}
                </span>
                <h3 className="font-display font-bold text-sm text-white mt-1.5">
                  {tm.name}
                </h3>
                <p className="text-[11px] text-cyan-300 font-mono">
                  {tm.department}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                {tm.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

