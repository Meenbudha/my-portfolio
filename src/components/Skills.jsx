import React, { useState } from 'react';
import {
  Coffee, Braces, Layout, FlaskConical, Globe, Server, Database,
  Monitor, Layers, GitBranch, Shield, Brain, Cpu, Zap, ChevronRight,
} from 'lucide-react';

const FEATURED_SKILLS = [
  { name: 'Java',       icon: <Coffee className="w-8 h-8" />,  category: 'Language', tagline: 'Primary language for DSA, OOP & backend systems',       color: 'text-orange-400', glow: 'shadow-orange-500/20', border: 'hover:border-orange-500/50', bg: 'from-orange-500/10 to-orange-500/5', bar: 'bg-orange-400', level: 90 },
  { name: 'JavaScript', icon: <Braces className="w-8 h-8" />,  category: 'Language', tagline: 'Full-stack scripting — Node.js APIs to React UIs',        color: 'text-yellow-300', glow: 'shadow-yellow-500/20', border: 'hover:border-yellow-500/50', bg: 'from-yellow-400/10 to-yellow-400/5', bar: 'bg-yellow-300', level: 92 },
  { name: 'React',      icon: <Layout className="w-8 h-8" />,  category: 'Frontend', tagline: 'Building rich, interactive SPAs & component systems',      color: 'text-blue-400',   glow: 'shadow-blue-500/20',   border: 'hover:border-blue-500/50',   bg: 'from-blue-500/10 to-blue-500/5',   bar: 'bg-blue-400',   level: 88 },
];

const MORE_SKILLS = [
  { name: 'Python',       icon: <FlaskConical className="w-5 h-5" />, category: 'Language',       color: 'text-yellow-400' },
  { name: 'Node.js',      icon: <Globe className="w-5 h-5" />,        category: 'Backend',        color: 'text-green-400' },
  { name: 'Express.js',   icon: <Server className="w-5 h-5" />,       category: 'Backend',        color: 'text-slate-300' },
  { name: 'Flask',        icon: <FlaskConical className="w-5 h-5" />, category: 'Backend',        color: 'text-cyan-400' },
  { name: 'MongoDB',      icon: <Database className="w-5 h-5" />,     category: 'Database',       color: 'text-emerald-400' },
  { name: 'SQL',          icon: <Database className="w-5 h-5" />,     category: 'Database',       color: 'text-blue-500' },
  { name: 'AWS',          icon: <Monitor className="w-5 h-5" />,      category: 'DevOps',         color: 'text-orange-500' },
  { name: 'Docker',       icon: <Layers className="w-5 h-5" />,       category: 'DevOps',         color: 'text-sky-400' },
  { name: 'Git / GitHub', icon: <GitBranch className="w-5 h-5" />,    category: 'Version Control',color: 'text-red-400' },
  { name: 'JWT / Auth',   icon: <Shield className="w-5 h-5" />,       category: 'Security',       color: 'text-violet-400' },
  { name: 'AI / ML',      icon: <Brain className="w-5 h-5" />,        category: 'AI & ML',        color: 'text-pink-400' },
  { name: 'Spring Boot',  icon: <Cpu className="w-5 h-5" />,          category: 'Backend',        color: 'text-green-500' },
  { name: 'TailwindCSS',  icon: <Zap className="w-5 h-5" />,          category: 'Frontend',       color: 'text-cyan-300' },
  { name: 'PostgreSQL',   icon: <Database className="w-5 h-5" />,     category: 'Database',       color: 'text-blue-400' },
];

const CORE_CONCEPTS = [
  'Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design',
  'Microservices', 'REST APIs', 'CI/CD', 'Competitive Programming', 'Static Analysis',
];

const Skills = ({ visible, fadeClass, reg }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <section id="skills" ref={reg('skills')} className={`py-20 px-6 bg-slate-900/30 ${fadeClass('skills')}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-px bg-blue-500 w-12" />
          <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
        </div>
        <p className="text-slate-200 mb-10 ml-16 text-base">Languages, frameworks, tools &amp; concepts</p>

        {/* Featured 3 */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {FEATURED_SKILLS.map(skill => (
            <div key={skill.name} className={`group relative p-6 bg-gradient-to-br ${skill.bg} border border-slate-800 ${skill.border} rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl ${skill.glow} overflow-hidden`}>
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-20 blur-2xl bg-current" />
              <div className="relative flex items-start justify-between mb-5">
                <div className={`${skill.color} group-hover:scale-110 transition-transform`}>{skill.icon}</div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">{skill.category}</span>
              </div>
              <h3 className={`text-white font-bold text-xl mb-1 group-hover:${skill.color} transition-colors`}>{skill.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{skill.tagline}</p>
              <div className="mt-auto">
                <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                  <span>Proficiency</span><span>{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${skill.bar} rounded-full transition-all duration-1000`} style={{ width: visible.skills ? `${skill.level}%` : '0%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Skills (collapsible) */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 overflow-hidden transition-all duration-500 ${showAllSkills ? 'max-h-[600px] opacity-100 mb-5' : 'max-h-0 opacity-0 mb-0'}`}>
          {MORE_SKILLS.map(skill => (
            <div key={skill.name} className="group flex flex-col items-center gap-2 p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-600 hover:-translate-y-0.5 transition-all text-center">
              <div className={`${skill.color} group-hover:scale-110 transition-transform`}>{skill.icon}</div>
              <div>
                <p className="text-white font-semibold text-xs">{skill.name}</p>
                <p className="text-[9px] text-slate-600 uppercase tracking-wider mt-0.5">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => setShowAllSkills(s => !s)}
          className="group flex items-center gap-2 mx-auto px-6 py-2.5 rounded-full border border-slate-600 hover:border-blue-500/60 hover:bg-blue-500/5 text-slate-200 hover:text-blue-400 text-base font-semibold transition-all">
          <Zap className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
          {showAllSkills ? `Hide extended skills` : `Show ${MORE_SKILLS.length} more skills`}
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showAllSkills ? 'rotate-90' : 'rotate-0'}`} />
        </button>

        {/* Core Concepts */}
        <div className="mt-10 p-6 bg-slate-950 border border-slate-800 rounded-2xl">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> Core Concepts
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {CORE_CONCEPTS.map(c => (
              <span key={c} className="px-4 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 rounded-full text-sm hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/5 transition-all cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
