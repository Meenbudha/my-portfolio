import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Download } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',     href: '#about'    },
  { label: 'Skills',    href: '#skills'   },
  { label: 'Coding',    href: '#coding'   },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education'},
  { label: 'Contact',   href: '#contact'  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 100) {
        setActiveSection('about');
        return;
      }

      const viewportHeight = window.innerHeight;
      let currentSection = '';
      
      for (const link of NAV_LINKS) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportHeight / 3 && rect.bottom >= viewportHeight / 3) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4 gap-2">
      <nav className="w-full max-w-5xl bg-slate-950/70 backdrop-blur-md border border-slate-800/80 rounded-full shadow-2xl shadow-blue-500/5 px-6 h-14 flex items-center justify-between transition-all">
        <a href="#about" className="flex items-center gap-2 group">
          <img src="/logo.svg" alt="Meen Logo" className="w-7 h-7 transition-transform group-hover:scale-105" />
          <span className="font-mono font-bold text-lg tracking-tight text-cyan-400 group-hover:text-white transition-colors">&lt;Meen/&gt;</span>
        </a>

        <div className="hidden md:flex gap-1.5 text-sm font-medium">
          {NAV_LINKS.map(l => {
            const isActive = activeSection === l.href.substring(1);
            return (
              <a
                key={l.label}
                href={l.href}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-slate-800 text-white font-semibold shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href="/Meen_Resume.pdf" download className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 hover:border-blue-500/60 hover:text-blue-400 text-slate-300 text-xs font-medium transition-all">
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-blue-500/20">
            <Mail className="w-3.5 h-3.5" /> Hire Me
          </a>
        </div>

        <button aria-label="Toggle menu" className="md:hidden text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(o => !o)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="w-full max-w-sm md:hidden bg-slate-950/95 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 flex flex-col gap-3 shadow-2xl">
          {NAV_LINKS.map(l => {
            const isActive = activeSection === l.href.substring(1);
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-center ${
                  isActive
                    ? 'bg-slate-800 text-white font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <div className="h-px bg-slate-900/80 my-1" />
          <div className="flex items-center justify-between px-2">
            <a href="/Meen_Resume.pdf" download onClick={() => setIsMenuOpen(false)} className="text-blue-400 font-semibold inline-flex items-center gap-2 text-xs">
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a href="mailto:meenbudha124@gmail.com" className="text-slate-400 font-semibold text-xs">meenbudha124@gmail.com</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
