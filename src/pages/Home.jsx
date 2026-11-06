import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import ShieldLogo from '../components/ShieldLogo';
import { THREATS } from '../data/threatsData';

export default function Home() {
  const featuredThreats = THREATS.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      
      {/* Hero Section */}
      <section className="py-6 sm:py-10 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0B1528] border border-slate-800 text-xs text-slate-300">
              <span>Hamdard Public School</span>
              <span className="text-slate-600">/</span>
              <span className="text-cyber-cyan font-medium">Cyber Shield Club</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Cyber Shield HPS
            </h1>

            <p className="text-lg sm:text-xl text-cyber-cyan font-medium">
              Stop. Think. Then Take Action.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Hamdard Public School's student-led cybersecurity awareness club. We teach school students how to recognize online scams, protect their social and payment accounts, and respond quickly if something goes wrong.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/threats"
                className="bg-cyber-cyan hover:bg-[#39FF88] text-[#050B14] font-semibold px-4 py-2.5 rounded-md text-sm transition-colors"
              >
                Learn the threats
              </Link>

              <Link
                to="/pledge"
                className="bg-[#0B1528] hover:bg-[#111F38] text-slate-200 hover:text-white border border-slate-700 px-4 py-2.5 rounded-md text-sm transition-colors"
              >
                Take the pledge
              </Link>

              <Link
                to="/practice-zone"
                className="bg-[#0B1528] hover:bg-[#111F38] text-cyber-green hover:text-white border border-slate-700 px-4 py-2.5 rounded-md text-sm transition-colors"
              >
                Practice spotting scams
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="panel p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <ShieldLogo className="w-10 h-10" />
                <div>
                  <h2 className="font-display font-bold text-white text-base">Club overview</h2>
                  <p className="text-xs text-slate-400">Hamdard Public School</p>
                </div>
              </div>

              <dl className="space-y-3 text-xs">
                <div>
                  <dt className="text-slate-400">Audience</dt>
                  <dd className="text-white font-medium">School students (Grades 6 to 12)</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Monthly program</dt>
                  <dd className="text-white font-medium">Cyber Jagrookta Diwas (first Wednesday)</dd>
                </div>
                <div>
                  <dt className="text-slate-400">National helpline</dt>
                  <dd className="text-white font-medium">1930 (Toll-free, 24/7)</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Official reporting</dt>
                  <dd className="text-white font-medium">cybercrime.gov.in</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </section>

      {/* Main Threats Section (Varied Row Layout) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="font-display font-bold text-2xl text-white">
              Common cyber threats targeting students
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Scammers rely on artificial urgency, fear, and fake giveaways. Here is how the most common attacks work.
            </p>
          </div>

          <Link
            to="/threats"
            className="text-xs text-cyber-cyan hover:underline shrink-0"
          >
            View all threats
          </Link>
        </div>

        <div className="divide-y divide-slate-800 panel overflow-hidden">
          {featuredThreats.map((threat) => (
            <div
              key={threat.id}
              className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#111F38]/40 transition-colors"
            >
              <div className="space-y-1 md:max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">
                    {threat.title}
                  </span>
                  <span className="text-[11px] text-slate-400 px-2 py-0.5 rounded bg-[#111F38] border border-slate-700">
                    {threat.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {threat.summary}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/threats"
                  className="inline-block text-xs text-cyber-cyan hover:text-white px-3 py-1.5 rounded-md bg-[#050B14] border border-slate-700 hover:border-cyber-cyan transition-colors"
                >
                  Read threat details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Action Strip */}
      <section className="panel p-6 border-red-900/60 bg-[#160B0E]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-display font-bold text-xl text-white">
              Been scammed or noticed an unauthorized transaction?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Call the national cybercrime helpline 1930 immediately. Reporting within the first two hours gives banks the best chance to freeze money before a scammer can withdraw it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:1930"
              className="bg-red-600 hover:bg-red-500 text-white font-medium text-sm px-4 py-2.5 rounded-md flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call Helpline 1930</span>
            </a>

            <Link
              to="/what-to-do"
              className="bg-[#0B1528] hover:bg-[#111F38] text-slate-200 border border-slate-700 px-4 py-2.5 rounded-md text-sm transition-colors"
            >
              Read the 5-step response guide
            </Link>
          </div>
        </div>
      </section>

      {/* School Club Initiatives */}
      <section className="space-y-4">
        <h2 className="font-display font-bold text-xl text-white">
          Club initiatives at Hamdard Public School
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="panel p-5 space-y-2">
            <h3 className="font-semibold text-sm text-white">Cyber Jagrookta Diwas</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Observed on the first Wednesday of every month in accordance with CBSE and Ministry of Home Affairs guidelines. Homeroom sessions cover real scam examples and account safety.
            </p>
          </div>

          <div className="panel p-5 space-y-2">
            <h3 className="font-semibold text-sm text-white">Cyber Safety Pledge</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              A student commitment formulated by the Indian Cyber Crime Coordination Centre (I4C). Tick the commitments and download a certificate of completion.
            </p>
          </div>

          <div className="panel p-5 space-y-2">
            <h3 className="font-semibold text-sm text-white">Practice Zone</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              An interactive simulator where students practice identifying fake SMS, deceptive WhatsApp messages, imposter calls, and phishing links with instant explanations.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
