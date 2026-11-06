import React from 'react';
import { PhoneCall, ExternalLink } from 'lucide-react';
import { INCIDENT_STEPS } from '../data/timelineData';

export default function IncidentResponse() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="font-display font-bold text-2xl sm:text-4xl text-white">
          What to do if you are scammed
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          If you shared an OTP, clicked an unverified link, or noticed an unauthorized transaction from your bank or UPI app, follow these steps immediately.
        </p>
      </div>

      {/* Prominent Helpline Box */}
      <div className="p-6 rounded-lg bg-[#160B0E] border border-red-900/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-red-300 uppercase tracking-normal">
              National cybercrime helpline
            </span>
            <div className="flex items-baseline gap-3">
              <a
                href="tel:1930"
                className="font-display font-bold text-4xl sm:text-5xl text-white hover:text-red-400 transition-colors"
              >
                1930
              </a>
              <span className="text-xs text-slate-300">
                Toll-free, 24 hours a day
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="tel:1930"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold text-sm px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call 1930 now</span>
            </a>

            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B1528] hover:bg-[#111F38] text-slate-200 border border-slate-700 text-sm px-3.5 py-2 rounded-md flex items-center gap-1.5 transition-colors"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-red-900/40 pt-3">
          Calling 1930 connects directly to the Indian Cyber Crime Coordination Centre (I4C). If reported within the first two hours, authorities can freeze fraudulent transfers across partner banks and payment gateways before the money is withdrawn.
        </p>
      </div>

      {/* 5-Step Action Sequence */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="font-display font-bold text-xl text-white">
            Five steps to take immediately
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Complete each step in this order
          </p>
        </div>

        <ol className="space-y-4">
          {INCIDENT_STEPS.map((item) => (
            <li
              key={item.step}
              className="panel p-5 space-y-3"
            >
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-md bg-[#111F38] border border-slate-700 text-white font-semibold text-sm flex items-center justify-center shrink-0">
                  {item.step}
                </span>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-10">
                {item.description}
              </p>

              <div className="ml-10 p-3 rounded-md bg-[#070E1A] border border-slate-800 text-xs text-slate-300">
                <span className="font-semibold text-white">Action: </span>
                {item.keyAction}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Reassurance note */}
      <div className="panel p-5 space-y-2 bg-[#0B1528]">
        <h3 className="font-semibold text-sm text-white">
          A note for students
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Scammers use pressure tactics and deception designed to manipulate people. Getting tricked is not your fault, and you will not get into trouble for reporting it. Tell your parents, school counselor, or a teacher right away so they can help you resolve the situation.
        </p>
      </div>

    </div>
  );
}
