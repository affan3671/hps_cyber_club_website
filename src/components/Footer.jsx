import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PhoneCall, Heart, ExternalLink, ArrowUpRight, Lock } from 'lucide-react';
import ShieldLogo from './ShieldLogo';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-500/15 bg-[#050B14]/90 backdrop-blur-md pt-14 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & School */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldLogo className="w-10 h-10" />
              <div>
                <h3 className="font-display font-extrabold text-white text-lg tracking-wider">
                  CYBER SHIELD <span className="text-[#00E5FF]">HPS</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">Hamdard Public School</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students, parents, and teachers with vigilant cyber habits, proactive scam defense, and responsible digital citizenship.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>Stop. Think. Then Take Action.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase tracking-widest text-slate-200 font-bold border-l-2 border-cyber-cyan pl-2">
              Exploration
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/threats" className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                  <span>→</span> Threat Intelligence (Learn)
                </Link>
              </li>
              <li>
                <Link to="/stay-safe" className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                  <span>→</span> Prevention & Safe Habits
                </Link>
              </li>
              <li>
                <Link to="/what-to-do" className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                  <span>→</span> What To Do If It Happens
                </Link>
              </li>
              <li>
                <Link to="/pledge" className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                  <span>→</span> Cyber Safety Pledge
                </Link>
              </li>
              <li>
                <Link to="/practice-zone" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5">
                  <span>🎮</span> Practice Zone (Scam Simulator)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                  <span>→</span> About Cyber Shield HPS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase tracking-widest text-slate-200 font-bold border-l-2 border-emerald-400 pl-2">
              Official Indian Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-green transition-colors flex items-center justify-between group"
                >
                  <span>National Cybercrime Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-green" />
                </a>
              </li>
              <li>
                <a
                  href="https://i4c.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-green transition-colors flex items-center justify-between group"
                >
                  <span>I4C (Ministry of Home Affairs)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-green" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Cyberdost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-green transition-colors flex items-center justify-between group"
                >
                  <span>@Cyberdost Safety Handle</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-green" />
                </a>
              </li>
              <li>
                <a
                  href="https://sancharsaathi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-green transition-colors flex items-center justify-between group"
                >
                  <span>Sanchar Saathi (Chakshu)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-green" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency Assistance Card */}
          <div className="glass-panel p-4 rounded-xl border border-red-500/30 space-y-3 bg-red-950/20">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider font-mono">
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>National Cyber Helpline</span>
            </div>
            <div>
              <a
                href="tel:1930"
                className="font-display font-extrabold text-3xl text-white hover:text-red-400 transition-colors tracking-tight block"
              >
                1930
              </a>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                Toll-free | 24x7 Citizen Assistance
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">
              Report financial cyber fraud immediately within the golden hour to freeze unauthorized debits.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Made by students of</span>
            <span className="text-white font-semibold">Hamdard Public School</span>
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <span>No personal data collected or stored</span>
            <span>•</span>
            <span className="text-slate-400">Public Awareness Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

