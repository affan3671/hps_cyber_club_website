import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import ShieldLogo from './ShieldLogo';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050B14] pt-12 pb-8 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <ShieldLogo className="w-8 h-8" />
              <div>
                <h3 className="font-display font-bold text-white text-base">
                  Cyber Shield HPS
                </h3>
                <p className="text-xs text-slate-400">Hamdard Public School</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Student cybersecurity awareness club teaching safe online habits, scam prevention, and emergency reporting.
            </p>
          </div>

          {/* Site Navigation */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-semibold text-slate-200">
              Pages
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/threats" className="text-slate-400 hover:text-white transition-colors">
                  Threats
                </Link>
              </li>
              <li>
                <Link to="/stay-safe" className="text-slate-400 hover:text-white transition-colors">
                  Safe habits
                </Link>
              </li>
              <li>
                <Link to="/what-to-do" className="text-slate-400 hover:text-white transition-colors">
                  What to do if scammed
                </Link>
              </li>
              <li>
                <Link to="/pledge" className="text-slate-400 hover:text-white transition-colors">
                  Cyber safety pledge
                </Link>
              </li>
              <li>
                <Link to="/practice-zone" className="text-slate-400 hover:text-white transition-colors">
                  Practice zone
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white transition-colors">
                  Official resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About the club
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Indian Portals */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-semibold text-slate-200">
              Government portals
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  National Cybercrime Reporting Portal
                </a>
              </li>
              <li>
                <a
                  href="https://i4c.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Indian Cyber Crime Coordination Centre (I4C)
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Cyberdost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  @Cyberdost on X
                </a>
              </li>
              <li>
                <a
                  href="https://sancharsaathi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Sanchar Saathi (Chakshu)
                </a>
              </li>
            </ul>
          </div>

          {/* Helpline 1930 */}
          <div className="p-4 rounded-lg bg-[#0B1528] border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-red-400 text-xs font-semibold">
              <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
              <span>National cyber helpline</span>
            </div>
            <div>
              <a
                href="tel:1930"
                className="font-display font-bold text-2xl text-white hover:text-red-400 transition-colors block"
              >
                1930
              </a>
              <span className="text-xs text-slate-400 block">
                Toll-free, available 24 hours a day
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Call immediately if money was taken from your bank account or UPI app.
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-slate-400">
            Made by students of Hamdard Public School
          </p>
          <p className="text-slate-500">
            This website does not store or collect personal data
          </p>
        </div>
      </div>
    </footer>
  );
}
