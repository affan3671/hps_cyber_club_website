import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { THREATS, THREAT_CATEGORIES } from '../data/threatsData';

export default function Threats() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(THREATS[0].id);

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-white">
          Cyber threats
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Learn how online scams target students, how attackers try to gain trust or induce panic, and what to do when you encounter them.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="panel p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by threat, keyword, or warning sign..."
              className="w-full bg-[#050B14] border border-slate-700 focus:border-cyber-cyan rounded-md pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
            <span className="text-xs text-slate-400 mr-1">Category:</span>
            {THREAT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-cyber-cyan text-[#050B14]'
                    : 'bg-[#111F38] text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-2.5">
          <span>Showing {filteredThreats.length} {filteredThreats.length === 1 ? 'threat' : 'threats'}</span>
          <span>Click any threat to read details</span>
        </div>
      </div>

      {/* Threats List */}
      {filteredThreats.length === 0 ? (
        <div className="text-center py-12 panel space-y-2">
          <Info className="w-6 h-6 text-slate-400 mx-auto" aria-hidden="true" />
          <h2 className="text-white font-semibold text-base">No threats match your search</h2>
          <p className="text-slate-400 text-xs">Try clearing your search query or selecting "All".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-2 px-3 py-1.5 rounded-md bg-[#111F38] hover:bg-slate-700 text-xs text-slate-200"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredThreats.map((threat) => {
            const isExpanded = expandedId === threat.id;

            return (
              <div
                key={threat.id}
                className={`panel transition-colors ${
                  isExpanded ? 'border-cyber-cyan/50 bg-[#0B1528]' : 'hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(threat.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                        threat.severity === 'Critical'
                          ? 'bg-red-950 text-red-300 border border-red-800/60'
                          : 'bg-amber-950 text-amber-300 border border-amber-800/60'
                      }`}>
                        {threat.severity} severity
                      </span>

                      <span className="text-xs text-slate-400">
                        {threat.category}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                      {threat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {threat.subtitle}
                    </p>
                  </div>

                  <div className="p-1.5 rounded bg-[#111F38] text-slate-300 shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-slate-800 p-4 sm:p-5 space-y-5 text-xs sm:text-sm">
                    <p className="text-slate-200 leading-relaxed bg-[#070E1A] p-3.5 rounded-md border border-slate-800">
                      {threat.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <h3 className="font-semibold text-white">
                          What it is
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {threat.whatItIs}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="font-semibold text-white">
                          How it works
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {threat.howItWorks}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="p-4 rounded-md bg-[#160B0E] border border-red-900/50 space-y-2">
                        <div className="flex items-center gap-1.5 text-red-400 font-semibold text-xs">
                          <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Warning signs</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-200 list-disc pl-4 leading-relaxed">
                          {threat.redFlags.map((flag, idx) => (
                            <li key={idx}>{flag}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-md bg-[#091712] border border-emerald-900/50 space-y-2">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                          <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>What you should do</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-200 list-disc pl-4 leading-relaxed">
                          {threat.whatToDo.map((act, idx) => (
                            <li key={idx}>{act}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span>Never react in panic. Stop. Think. Then Take Action.</span>
                      <a href="tel:1930" className="text-red-400 hover:underline">
                        Need immediate assistance? Call 1930
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
