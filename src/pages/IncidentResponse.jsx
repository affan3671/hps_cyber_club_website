import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  FileText, 
  Users, 
  Lock, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle, 
  ExternalLink,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { INCIDENT_STEPS } from '../data/timelineData';

export default function IncidentResponse() {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Lock': return <Lock className="w-6 h-6" />;
      default: return <ShieldAlert className="w-6 h-6" />;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-xs font-mono text-red-400">
          <AlertTriangle className="w-3.5 h-3.5 animate-bounce" />
          <span>CRITICAL INCIDENT PROTOCOL</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          What To Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-cyan-400">If It Happens</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          If you or someone in your family clicked a fake link, lost funds, or received threatening calls: <strong className="text-white">do not panic</strong>. Follow this exact 5-step response sequence immediately.
        </p>
      </div>

      {/* Prominent Large 1930 Helpline Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950/90 via-[#0B1528] to-red-900/50 border-2 border-red-500 p-6 sm:p-10 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-red-400 animate-pulse" />
              <span>The "Golden Hour" Rule for Stolen Funds</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
                National Cybercrime Reporting Helpline
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:1930"
                  className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white hover:text-red-400 transition-colors drop-shadow-[0_0_25px_rgba(239,68,68,0.8)] tracking-tight block"
                >
                  1930
                </a>
                <span className="text-xs sm:text-sm font-mono text-red-300 bg-red-900/50 px-3 py-1.5 rounded-lg border border-red-500/40">
                  Toll-Free • 24x7 • All-India
                </span>
              </div>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed max-w-2xl">
              Dialing <strong>1930</strong> connects you directly to the <strong>Indian Cyber Crime Coordination Centre (I4C)</strong>. They communicate with partner banks and payment gateways in real-time to freeze funds before the fraudster can withdraw them at an ATM.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3">
            <a
              href="tel:1930"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-display font-bold text-lg rounded-2xl shadow-glow-danger flex items-center justify-center gap-3 transition-transform hover:scale-105"
            >
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <span>Dial 1930 Directly</span>
            </a>

            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>cybercrime.gov.in Portal</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

        </div>
      </div>

      {/* Step-by-Step Animated Timeline */}
      <div className="space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="font-display font-bold text-2xl text-white">
            The 5-Step Incident Response Sequence
          </h2>
          <p className="text-xs font-mono text-cyan-400 mt-1">
            Execute in order from Step 01 through Step 05
          </p>
        </div>

        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {INCIDENT_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-xs sm:text-sm border-2 ${
                item.isEmergency 
                  ? 'bg-red-600 text-white border-red-400 shadow-glow-danger' 
                  : 'bg-[#0B1528] text-cyan-400 border-cyan-400 shadow-glow-cyan'
              }`}>
                {item.number}
              </div>

              {/* Step Card */}
              <div className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all ${
                item.isEmergency
                  ? 'border-red-500/50 bg-gradient-to-r from-red-950/30 to-[#0B1528]'
                  : 'border-slate-800 hover:border-cyan-500/40'
              }`}>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                    item.isEmergency
                      ? 'bg-red-950 text-red-300 border border-red-500/40'
                      : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                  }`}>
                    {item.badge}
                  </span>

                  <span className="text-xs font-mono text-slate-500">
                    Step {item.step} of 5
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-3">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    item.isEmergency ? 'bg-red-500/20 text-red-400' : 'bg-cyan-500/10 text-cyan-400'
                  }`}>
                    {getStepIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Action Pill */}
                <div className="p-3 rounded-xl bg-[#050B14]/90 border border-slate-800 flex items-start gap-2.5 text-xs">
                  <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                    item.isEmergency ? 'text-red-400' : 'text-emerald-400'
                  }`} />
                  <span className="text-slate-200">
                    <strong className="text-white">Action Requirement:</strong> {item.keyAction}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support & No Shame Note */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-[#0B1528] via-purple-950/20 to-[#0B1528] flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
          <HeartHandshake className="w-10 h-10" />
        </div>
        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="font-display font-bold text-lg text-white">
            A Note from Hamdard Public School Counselors & Teachers
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Cybercriminals use psychological manipulation that tricks even banking executives, software engineers, and adults. Falling victim does <strong>not</strong> make you foolish or guilty. Always reach out to your teachers or school mentor — we are here to support and protect you.
          </p>
        </div>
      </div>

    </div>
  );
}

