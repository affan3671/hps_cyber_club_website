import React from 'react';
import { 
  Phone, 
  Globe, 
  GraduationCap, 
  BookOpen, 
  Twitter, 
  Radio, 
  ExternalLink, 
  ArrowUpRight,
  Shield,
  Download,
  CheckCircle2
} from 'lucide-react';
import { RESOURCES } from '../data/resourcesData';

export default function Resources() {
  const getResourceIcon = (iconName) => {
    switch (iconName) {
      case 'Phone': return <Phone className="w-6 h-6 text-red-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-purple-400" />;
      case 'Twitter': return <Twitter className="w-6 h-6 text-cyan-400" />;
      case 'Radio': return <Radio className="w-6 h-6 text-amber-400" />;
      default: return <Shield className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Globe className="w-3.5 h-3.5" />
          <span>OFFICIAL VERIFIED DIRECTORY</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Government & Emergency <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Portals</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Official platforms operated by the Ministry of Home Affairs, Indian Cyber Crime Coordination Centre (I4C), and Department of Telecommunications.
        </p>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((res) => (
          <div
            key={res.id}
            className={`glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between space-y-6 ${
              res.highlight ? 'border-red-500/40 bg-gradient-to-br from-red-950/20 to-[#0B1528]' : 'border-slate-800'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl ${res.highlight ? 'bg-red-500/20' : 'bg-slate-900 border border-slate-800'}`}>
                  {getResourceIcon(res.icon)}
                </div>
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                  res.highlight ? 'bg-red-950 text-red-300 border border-red-500/40' : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                }`}>
                  {res.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {res.title}
                </h3>
                <p className="text-xs text-cyan-300 font-mono mt-0.5">
                  {res.subtitle}
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={res.link}
                target={res.link.startsWith('tel:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all ${
                  res.highlight
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-glow-danger'
                    : 'bg-slate-800 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-slate-700 hover:border-cyan-500/50'
                }`}
              >
                <span>{res.actionText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Free I4C Certificate Course Highlight */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#0B1528] to-cyan-950/40 border border-emerald-500/30 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>FREE GOVERNMENT CERTIFICATION</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              I4C Cyber Hygiene Certificate Course for Students
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Earn an official certificate in basic cybersecurity hygiene directly from the Ministry of Home Affairs. Great for student portfolios and digital literacy!
            </p>
          </div>

          <a
            href="https://i4c.mha.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-sm flex items-center gap-2 shadow-glow-green shrink-0 transition-transform hover:scale-105"
          >
            <span>Visit I4C Learning</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
}

