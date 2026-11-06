import React from 'react';
import { ExternalLink, PhoneCall } from 'lucide-react';
import { RESOURCES } from '../data/resourcesData';

export default function Resources() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-white">
          Official resources and reporting portals
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Verified government agencies, national helplines, and awareness portals operated by the Ministry of Home Affairs, Indian Cyber Crime Coordination Centre (I4C), and Department of Telecommunications.
        </p>
      </div>

      {/* Directory List */}
      <div className="panel divide-y divide-slate-800 overflow-hidden">
        {RESOURCES.map((res) => (
          <div
            key={res.id}
            className={`p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              res.highlight ? 'bg-[#160B0E]' : 'hover:bg-[#111F38]/30'
            }`}
          >
            <div className="space-y-1 md:max-w-xl">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-sm sm:text-base text-white">
                  {res.title}
                </h2>
                <span className="text-[11px] text-slate-400 px-2 py-0.5 rounded bg-[#050B14] border border-slate-800">
                  {res.badge}
                </span>
              </div>
              <p className="text-xs text-cyber-cyan font-medium">
                {res.subtitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                {res.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={res.link}
                target={res.link.startsWith('tel:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-medium transition-colors ${
                  res.highlight
                    ? 'bg-red-600 hover:bg-red-500 text-white'
                    : 'bg-[#111F38] hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
                }`}
              >
                {res.highlight && <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>{res.actionText}</span>
                {!res.highlight && <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Free I4C Certificate Course */}
      <div className="panel p-6 space-y-3">
        <h2 className="font-display font-bold text-lg text-white">
          I4C cyber hygiene certificate course for students
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          The Ministry of Home Affairs offers free student-level cybersecurity certificate courses through the I4C portal. These modules cover account protection, safe browsing, and reporting protocols.
        </p>
        <div className="pt-1">
          <a
            href="https://i4c.mha.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-cyber-cyan hover:bg-[#39FF88] text-[#050B14] font-semibold text-xs transition-colors"
          >
            <span>Visit the I4C course portal</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

    </div>
  );
}
