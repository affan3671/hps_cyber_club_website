import React from 'react';
import { Shield, Calendar, Users, Target } from 'lucide-react';
import ShieldLogo from '../components/ShieldLogo';
import { CLUB_INFO, JAGROOKTA_DIWAS, PLACEHOLDER_TEAM } from '../data/aboutData';

export default function About() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-xs text-cyan-300">
          <Shield className="w-3.5 h-3.5" />
          <span>Hamdard Public School initiative</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">
          About the club
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Cyber Shield HPS teaches students across Hamdard Public School practical online safety habits, scam identification, and emergency response steps.
        </p>
      </div>

      {/* Mission & Objectives Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Mission Statement Box */}
        <div className="lg:col-span-6 panel p-6 rounded-lg border border-slate-800 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldLogo className="w-10 h-10" />
              <div>
                <h2 className="font-display font-bold text-xl text-white">Our mission</h2>
                <p className="text-xs text-slate-400">Hamdard Public School, established {CLUB_INFO.established}</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              "{CLUB_INFO.mission}"
            </p>
          </div>

          <div className="p-3.5 rounded-md bg-[#050B14] border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Club motto</span>
            <span className="text-cyan-300 font-medium">{CLUB_INFO.tagline}</span>
          </div>
        </div>

        {/* Objectives Box */}
        <div className="lg:col-span-6 panel p-6 rounded-lg border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <Target className="w-4 h-4" />
            <h2 className="font-display font-bold text-xl text-white">What we focus on</h2>
          </div>

          <ul className="space-y-3 pt-1">
            {CLUB_INFO.objectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3 rounded-md bg-[#050B14] border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Cyber Jagrookta Diwas Special Section */}
      <div className="panel p-6 sm:p-8 rounded-lg border border-slate-800 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-medium">
              <Calendar className="w-4 h-4" />
              <span>Monthly observance</span>
            </div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
              {JAGROOKTA_DIWAS.title}
            </h2>
          </div>

          <div className="px-3 py-1.5 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-medium shrink-0">
            {JAGROOKTA_DIWAS.schedule}
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          {JAGROOKTA_DIWAS.mandate}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {JAGROOKTA_DIWAS.highlights.map((hl, idx) => (
            <div key={idx} className="p-3.5 rounded-md bg-[#050B14] border border-slate-800 text-xs text-slate-300 leading-relaxed">
              {hl}
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Mentors */}
      <div className="space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="font-display font-bold text-xl text-white">
            Club leadership and mentors
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Teacher mentors and student club representatives. Names can be edited in data files.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLACEHOLDER_TEAM.map((tm) => (
            <div key={tm.id} className="panel p-5 rounded-lg border border-slate-800 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-purple-950/70 text-purple-300 border border-purple-800/40">
                    {tm.role}
                  </span>
                  <h3 className="font-display font-semibold text-sm text-white mt-2">
                    {tm.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {tm.department}
                  </p>
                </div>
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
