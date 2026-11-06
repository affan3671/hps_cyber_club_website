import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, PhoneCall, Award, Gamepad2 } from 'lucide-react';
import ShieldLogo from './ShieldLogo';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/threats', label: 'Threats' },
  { path: '/stay-safe', label: 'Stay Safe' },
  { path: '/what-to-do', label: 'What To Do' },
  { path: '/pledge', label: 'Pledge' },
  { path: '/practice-zone', label: 'Practice Zone', isGame: true },
  { path: '/resources', label: 'Resources' },
  { path: '/about', label: 'About Club' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050B14]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-[#050B14]/75 backdrop-blur-md border-b border-slate-800/80'
    }`}>
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <Link 
            to="/" 
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-cyber-cyan/50 rounded-lg p-1"
          >
            <ShieldLogo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white flex items-center gap-1.5">
                CYBER SHIELD <span className="text-[#00E5FF] group-hover:text-glow-cyan transition-all">HPS</span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400">
                Hamdard Public School
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-xs xl:text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-cyan/40 ${
                    isActive
                      ? 'text-white font-semibold bg-cyber-cyan/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  } ${link.isGame ? 'border border-emerald-500/30 text-emerald-300 hover:border-emerald-400/60' : ''}`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    {link.isGame && <Gamepad2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-glow-cyan" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action: Helpline 1930 Pill */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:1930"
              className="group flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/50 text-red-300 hover:text-white hover:border-red-400 hover:bg-red-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all shadow-glow-danger"
              title="Call National Cybercrime Helpline 1930"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-400 group-hover:animate-bounce" />
              <span>1930 HELPLINE</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="tel:1930"
              className="p-2 text-red-400 border border-red-500/40 rounded-lg bg-red-500/10"
              aria-label="Call Helpline 1930"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-cyber-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-cyan-500/20 bg-[#0B1528]/95 backdrop-blur-2xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyber-cyan/15 text-[#00E5FF] font-semibold border-l-4 border-cyber-cyan'
                      : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
                  } ${link.isGame ? 'bg-emerald-950/20 border border-emerald-500/30 text-emerald-300' : ''}`
                }
              >
                <div className="flex items-center gap-2.5">
                  {link.isGame && <Gamepad2 className="w-4 h-4 text-emerald-400" />}
                  <span>{link.label}</span>
                </div>
                <span className="text-xs font-mono text-slate-400">→</span>
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="tel:1930"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg text-sm shadow-glow-danger"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency Helpline 1930</span>
              </a>

              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-xs font-mono text-cyan-300 py-1.5 hover:underline"
              >
                Report Incident at cybercrime.gov.in ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

