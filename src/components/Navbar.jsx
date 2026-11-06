import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import ShieldLogo from './ShieldLogo';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/threats', label: 'Threats' },
  { path: '/stay-safe', label: 'Stay Safe' },
  { path: '/what-to-do', label: 'What To Do' },
  { path: '/pledge', label: 'Pledge' },
  { path: '/practice-zone', label: 'Practice Zone' },
  { path: '/resources', label: 'Resources' },
  { path: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-[#050B14] border-b border-slate-800">
      <nav aria-label="Main Navigation" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* School and Club Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 rounded-md focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            <ShieldLogo className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-white tracking-normal leading-tight">
                Cyber Shield HPS
              </span>
              <span className="text-xs text-slate-400 leading-none">
                Hamdard Public School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'text-white font-medium bg-[#111F38] border-b-2 border-cyber-cyan'
                      : 'text-slate-300 hover:text-white hover:bg-[#0B1528]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Helpline Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-1.5 bg-[#1C0F13] border border-red-800/80 text-red-300 hover:text-white hover:bg-red-950 px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
              title="Call National Cybercrime Helpline 1930"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
              <span>Helpline 1930</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="tel:1930"
              className="p-2 text-red-400 border border-red-900 rounded-md bg-[#1C0F13]"
              aria-label="Call Helpline 1930"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0B1528] px-4 pt-2 pb-5 shadow-lg">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-[#111F38] text-white font-medium border-l-2 border-cyber-cyan'
                      : 'text-slate-300 hover:bg-[#111F38] hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800">
              <a
                href="tel:1930"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-medium py-2 rounded-md text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                <span>Call Helpline 1930</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
