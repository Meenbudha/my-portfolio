import React, { useState, useEffect } from 'react';
import { Terminal, ChevronRight, Phone, Mail, Download, Trophy } from 'lucide-react';

const Hero = () => {
  const [terminalLine, setTerminalLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLine(prev => {
        if (prev >= 4) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 700);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-500 font-mono mb-3 text-base flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </p>
          <h2 className="text-blue-400 font-mono mb-3 text-lg">Hi, I'm</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Meen Bahadur<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Budha.</span>
          </h1>
          <p className="text-slate-300 font-semibold text-lg mb-4">Full-Stack Developer &amp; DSA Enthusiast</p>
          <p className="text-slate-200 text-lg max-w-lg mb-6 leading-relaxed">
            Computer Science undergraduate at <span className="text-white font-semibold">Parul University</span> specializing in full-stack development, DSA, and AI-powered systems. Passionate about scalable, high-impact software.
          </p>

          <div className="flex flex-wrap gap-3 mb-8 text-base text-slate-200">
            <a href="tel:+917073241096" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" /> +91 7073241096
            </a>
            <a href="mailto:meenbudha124@gmail.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" /> meenbudha124@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
              View My Work <ChevronRight className="w-4 h-4" />
            </a>
            <a href="/Meen_Resume.pdf" download className="border border-slate-700 hover:border-blue-400 hover:text-blue-400 text-slate-200 px-7 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a href="https://leetcode.com/u/Meen_Budha/" target="_blank" rel="noopener noreferrer"
              className="border border-slate-700 hover:border-orange-400 hover:text-orange-400 px-7 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              <Trophy className="w-4 h-4" /> LeetCode
            </a>
          </div>
        </div>

        {/* Terminal */}
        <div className="bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          <div className="bg-[#161b22] px-4 py-2 border-b border-slate-800 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-500 ml-2 flex items-center gap-2"><Terminal size={14} /> zsh — profile.js</span>
          </div>
          <div className="p-4 sm:p-6 space-y-3">
            <div className="flex gap-3">
              <span className="text-emerald-400">➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">whoami</span>
            </div>
            {terminalLine >= 1 && <div className="text-slate-400 italic">// Developer Profile</div>}
            {terminalLine >= 2 && (
              <div className="text-slate-300">
                <span className="text-blue-400">const</span> developer = {'{'} <br />
                &nbsp;&nbsp;name: <span className="text-emerald-300">'Meen Bahadur Budha'</span>,<br />
                &nbsp;&nbsp;stack: [<span className="text-emerald-300">'MERN'</span>, <span className="text-emerald-300">'Java'</span>, <span className="text-emerald-300">'Python'</span>],<br />
                &nbsp;&nbsp;leetcode: <span className="text-emerald-300">'500+ problems'</span>,<br />
                &nbsp;&nbsp;passion: <span className="text-emerald-300">'Clean Architecture'</span><br />
                {'}'};
              </div>
            )}
            {terminalLine >= 3 && (
              <div className="flex gap-3 pt-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white flex items-center">status --live <span className="w-2 h-4 bg-white ml-2 animate-pulse" /></span>
              </div>
            )}
            {terminalLine >= 4 && (
              <div className="text-emerald-400 font-bold">✓ Open to full-time &amp; internship opportunities!</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
