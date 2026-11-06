import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  CheckCircle, 
  ShieldAlert, 
  ExternalLink,
  Layers,
  ArrowRight,
  Info
} from 'lucide-react';
import { THREATS, THREAT_CATEGORIES } from '../data/threatsData';

export default function Threats() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(THREATS[0].id); // First open by default

  const filteredThreats = useMemo(() => {
    return THREATS.filter((threat) => {
      const matchesCategory =
        selectedCategory === 'All' || threat.category === selectedCategory;
      const matchesSearch =
        threat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        threat.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        threat.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        threat.redFlags.some((rf) => rf.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>THREAT INTELLIGENCE & DECONSTRUCTION</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Know The Threat. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Outsmart The Trap.</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore the anatomy of the top cyber attacks aimed at teenagers and families. Learn how attackers think, spot subtle red flags, and master immediate defense habits.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-500/20 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search threat, keyword, or red flag..."
              className="w-full bg-[#050B14]/90 border border-slate-700 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
            <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-cyan-400" /> Filter:
            </span>
            {THREAT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-3">
          <span>Showing {filteredThreats.length} threat blueprint{filteredThreats.length === 1 ? '' : 's'}</span>
          <span>Click any card to inspect / collapse details</span>
        </div>
      </div>

      {/* Threats Grid / Accordion */}
      {filteredThreats.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800">
          <Info className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
          <h3 className="text-white font-bold text-lg">No threats match your search</h3>
          <p className="text-slate-400 text-xs mt-1">Try clearing your search query or selecting "All" categories.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-4 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono hover:bg-cyan-500/30"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredThreats.map((threat) => {
            const isExpanded = expandedId === threat.id;

            return (
              <motion.div
                key={threat.id}
                layout
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-cyan-400/60 shadow-[0_0_30px_rgba(0,229,255,0.15)] bg-[#0B1528]/90' 
                    : 'border-slate-800/90 hover:border-cyan-500/40 hover:bg-[#0B1528]/70'
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleExpand(threat.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-cyan-950/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <ShieldAlert className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          threat.severity === 'Critical'
                            ? 'bg-red-950 text-red-300 border border-red-500/40'
                            : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                        }`}>
                          {threat.severity} Severity
                        </span>

                        <span className="text-slate-400 text-xs font-mono bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                          {threat.category}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {threat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-300 font-mono">
                        {threat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center">
                    <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Inspect Threat'}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Pane */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-800/80 px-5 sm:px-6 pb-6 pt-4 space-y-6"
                    >
                      {/* Quick Summary Pill */}
                      <p className="text-slate-300 text-sm leading-relaxed bg-[#070E1A]/80 p-4 rounded-xl border-l-4 border-cyan-400">
                        {threat.summary}
                      </p>

                      {/* 2-Column Anatomy: What it is & How it works */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* What it is */}
                        <div className="space-y-2">
                          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            What It Is
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3.5 rounded-lg border border-slate-800">
                            {threat.whatItIs}
                          </p>
                        </div>

                        {/* How it works */}
                        <div className="space-y-2">
                          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-400" />
                            The Attack Blueprint
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3.5 rounded-lg border border-slate-800">
                            {threat.howItWorks}
                          </p>
                        </div>

                      </div>

                      {/* 2-Column Defense: Red Flags vs What To Do */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        
                        {/* Red Flags */}
                        <div className="space-y-3 bg-red-950/20 border border-red-500/30 p-4 rounded-xl">
                          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-red-300 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            Red Flags To Watch For
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-200">
                            {threat.redFlags.map((flag, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-red-400 font-bold shrink-0">✕</span>
                                <span className="leading-snug">{flag}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What To Do */}
                        <div className="space-y-3 bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl">
                          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            Your Shield Protocol (What To Do)
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-200">
                            {threat.whatToDo.map((act, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                                <span className="leading-snug">{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Footer Tip */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                        <span>Emergency immediate advice: Never react in panic. Stop. Think. Then Take Action.</span>
                        <a
                          href="tel:1930"
                          className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1"
                        >
                          Need urgent assistance? Dial 1930
                        </a>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

    </div>
  );
}

