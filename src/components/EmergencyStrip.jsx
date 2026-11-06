import React from 'react';
import { PhoneCall, AlertTriangle, ExternalLink } from 'lucide-react';

export default function EmergencyStrip() {
  return (
    <aside aria-label="Emergency cybercrime helpline" className="bg-[#1C0F13] border-b border-red-900/60 px-4 py-2.5 text-sm">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
          <p className="text-slate-200 text-xs sm:text-sm">
            <span className="text-red-300 font-semibold">Been scammed or lost money online?</span> Call the national helpline within two hours to freeze unauthorized transactions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:1930"
            className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white font-medium text-xs px-3 py-1.5 rounded-md transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call 1930</span>
          </a>

          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#0B1528] hover:bg-[#111F38] text-slate-300 hover:text-white border border-slate-700 text-xs px-2.5 py-1.5 rounded-md transition-colors"
          >
            <span>cybercrime.gov.in</span>
            <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
}
