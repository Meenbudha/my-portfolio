import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Code2,
  Database,
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Server,
  Cpu,
  Layout,
  Coffee,
  ChevronRight,
  Monitor,
  Phone,
  GraduationCap,
  Trophy,
  Award,
  Braces,
  FlaskConical,
  Layers,
  Shield,
  Zap,
  Star,
  X,
  Menu,
  MapPin,
  Calendar,
  CheckCircle2,
  BookOpen,
  Target,
  FileText,
  Building2,
  GitBranch,
  Brain,
} from 'lucide-react';

/* ─────────────────────── DATA ─────────────────────── */

const SKILLS = [
  { name: 'Java',       icon: <Coffee className="w-6 h-6" />,  category: 'Language',  color: 'text-orange-400' },
  { name: 'Python',     icon: <FlaskConical className="w-6 h-6" />, category: 'Language', color: 'text-yellow-400' },
  { name: 'JavaScript', icon: <Braces className="w-6 h-6" />,  category: 'Language',  color: 'text-yellow-300' },
  { name: 'MongoDB',    icon: <Database className="w-6 h-6" />, category: 'Database', color: 'text-emerald-400' },
  { name: 'Express.js', icon: <Server className="w-6 h-6" />,  category: 'Backend',   color: 'text-slate-300' },
  { name: 'React',      icon: <Layout className="w-6 h-6" />,  category: 'Frontend',  color: 'text-blue-400' },
  { name: 'Node.js',    icon: <Globe className="w-6 h-6" />,   category: 'Backend',   color: 'text-green-400' },
  { name: 'Flask',      icon: <FlaskConical className="w-6 h-6" />, category: 'Backend', color: 'text-cyan-400' },
  { name: 'SQL',        icon: <Database className="w-6 h-6" />, category: 'Database', color: 'text-blue-500' },
  { name: 'AWS',        icon: <Monitor className="w-6 h-6" />, category: 'DevOps',    color: 'text-orange-500' },
  { name: 'JWT / Auth',   icon: <Shield className="w-6 h-6" />,    category: 'Security',  color: 'text-violet-400' },
  { name: 'Git / GitHub', icon: <GitBranch className="w-6 h-6" />, category: 'Version Control', color: 'text-red-400' },
  { name: 'AI / ML',      icon: <Brain className="w-6 h-6" />,     category: 'AI & ML',   color: 'text-pink-400' },
];

const PROJECTS = [
  {
    id: 'codemind',
    title: 'CodeMind AI',
    subtitle: 'Algorithmic Complexity Reviewer',
    year: '2026',
    desc: 'A full-stack web application that analyzes source code in C, Java, or Python and instantly reports Big-O time & space complexity using static analysis and AI — delivering performance warnings and optimization suggestions every time.',
    bullets: [
      '3-tier architecture: React frontend → Node.js API gateway → Python/Flask ML service for clean separation of concerns.',
      'Smart AI fallback chain: Google Gemini → AWS Bedrock Nova Micro → offline engine — results always delivered, zero downtime.',
      'MD5-based global result caching eliminates redundant AI calls, significantly cutting inference costs.',
      'Personalized analysis history per user, stored in MongoDB Atlas with JWT auth (7-day tokens, bcrypt 12 rounds).',
      'Rate limiting (10 login / 5 register per IP), security headers, and production-grade hardening from day one.',
      '4-workflow GitHub Actions CI/CD pipeline',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB Atlas', 'Gemini API', 'AWS Bedrock', 'JWT', 'GitHub Actions', 'MD5 Caching', 'Render'],
    category: 'MERN',
    github: 'https://github.com/Meenbudha/code-complexity-reviewer',
    live: 'https://codemind-frontend.onrender.com',
    accent: 'from-blue-600/20 to-violet-600/20',
    iconBg: 'text-blue-400',
  },
];

const CERTIFICATIONS = [
  { title: 'Problem Solving Certificate',    issuer: 'HackerRank',           icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
  { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild', icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
  { title: 'AWS Academy: Cloud Foundations', issuer: 'AWS Academy',           icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
  { title: 'DSA — Divide & Conquer, DP, Graphs, Backtracking', issuer: 'Parul University / CodeTantra', icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
];

const NAV_LINKS = [
  { label: 'About',    href: '#about'   },
  { label: 'Skills',   href: '#skills'  },
  { label: 'Coding',   href: '#coding'  },
  { label: 'Projects', href: '#projects'},
  { label: 'Education',href: '#education'},
  { label: 'Contact',  href: '#contact' },
];

/* ─────────────────────── COMPONENT ─────────────────────── */

const App = () => {
  const [activeTab, setActiveTab]     = useState('all');
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [terminalLine, setTerminalLine] = useState(0);
  const [visible, setVisible]         = useState({});
  const sectionRefs                   = useRef({});

  /* Terminal animation — stops once done */
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLine(prev => {
        if (prev >= 4) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 700);
    return () => clearInterval(timer);
  }, []);

  /* Intersection observer for fade-in sections */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.12 }
    );
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reg = (id) => (el) => { sectionRefs.current[id] = el; };
  const fadeClass = (id) =>
    `transition-all duration-700 ${visible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="MBB Logo" className="w-8 h-8 transition-transform group-hover:scale-105" />
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">MBB.dev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                className="text-slate-400 hover:text-blue-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href="mailto:meenbudha124@gmail.com"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
            <Mail className="w-4 h-4" /> Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(o => !o)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="mailto:meenbudha124@gmail.com"
              className="text-blue-400 font-semibold">meenbudha124@gmail.com</a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-500 font-mono mb-3 text-base flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </p>
            <h2 className="text-blue-400 font-mono mb-3 text-lg">Hi, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Meen Bahadur<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Budha.
              </span>
            </h1>
            <p className="text-slate-300 font-semibold text-lg mb-4">Full-Stack Developer &amp; DSA Enthusiast</p>
            <p className="text-slate-400 text-base max-w-lg mb-6 leading-relaxed">
              Computer Science undergraduate at <span className="text-white font-semibold">Parul University</span> specializing in full-stack development, DSA, and AI-powered systems.
              Passionate about scalable, high-impact software.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 mb-8 text-sm text-slate-400">
              <a href="tel:+917073241096" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" /> +91 7073241096
              </a>
              <a href="mailto:meenbudha124@gmail.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" /> meenbudha124@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                View My Work <ChevronRight className="w-4 h-4" />
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
              <span className="text-slate-500 ml-2 flex items-center gap-2">
                <Terminal size={14} /> zsh — profile.js
              </span>
            </div>
            <div className="p-4 sm:p-6 space-y-3">
              <div className="flex gap-3">
                <span className="text-emerald-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">whoami</span>
              </div>
              {terminalLine >= 1 && (
                <div className="text-slate-400 italic">// Developer Profile</div>
              )}
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
                  <span className="text-white flex items-center">
                    status --live <span className="w-2 h-4 bg-white ml-2 animate-pulse" />
                  </span>
                </div>
              )}
              {terminalLine >= 4 && (
                <div className="text-emerald-400 font-bold">
                  ✓ Open to full-time &amp; internship opportunities!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="border-y border-slate-800 bg-slate-900/40 py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Problems Solved', sub: 'LeetCode · HackerRank · CodeChef' },
            { value: '7.5',  label: 'CGPA',            sub: 'B.Tech CSE · Parul University' },
            { value: '4',    label: 'Certifications',  sub: 'IBM · HackerRank · AWS' },
            { value: '2026', label: 'Graduating',      sub: 'Expected 2027' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm mt-1">{s.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <section
        id="skills"
        ref={reg('skills')}
        className={`py-20 px-6 bg-slate-900/30 ${fadeClass('skills')}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px bg-blue-500 w-12" />
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          </div>
          <p className="text-slate-400 mb-12 ml-6 sm:ml-16 text-sm">Languages, frameworks, tools &amp; concepts</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SKILLS.map(skill => (
              <div key={skill.name}
                className="group p-5 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500/60 transition-all hover:-translate-y-1 flex flex-col items-center text-center gap-3">
                <div className={`${skill.color} transform group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{skill.name}</h3>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Concepts */}
          <div className="mt-12 p-6 bg-slate-950 border border-slate-800 rounded-2xl">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> Core Concepts
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design',
                'Microservices', 'REST APIs', 'CI/CD', 'Competitive Programming', 'Static Analysis'].map(c => (
                <span key={c}
                  className="px-4 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 rounded-full text-sm hover:border-blue-500/50 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Coding Profiles ── */}
      <section
        id="coding"
        ref={reg('coding')}
        className={`py-20 px-6 ${fadeClass('coding')}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px bg-orange-500 w-12" />
            <h2 className="text-3xl font-bold text-white">Coding Profiles</h2>
          </div>
          <p className="text-slate-400 mb-12 ml-16 text-sm">500+ problems solved across platforms</p>

          <div className="grid sm:grid-cols-2 gap-6">

            {/* LeetCode Card */}
            <a href="https://leetcode.com/u/Meen_Budha/" target="_blank" rel="noopener noreferrer"
              className="group relative p-5 sm:p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-orange-400/60 transition-all hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <svg className="w-7 h-7 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-xl group-hover:text-orange-400 transition-colors">LeetCode</h3>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <p className="text-orange-400 text-sm font-mono mb-4">@meenbudha</p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="text-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-white">400+</div>
                      <div className="text-xs text-slate-500 mt-0.5">Solved</div>
                    </div>
                    <div className="text-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-emerald-400">Easy</div>
                      <div className="text-xs text-slate-500 mt-0.5">✓ Cleared</div>
                    </div>
                    <div className="text-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-orange-400">Med+</div>
                      <div className="text-xs text-slate-500 mt-0.5">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Codolio Card */}
            <a href="https://codolio.com/profile/meenbudha" target="_blank" rel="noopener noreferrer"
              className="group relative p-5 sm:p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-violet-400/60 transition-all hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Header */}
              <div className="relative flex items-start gap-5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <BookOpen className="w-7 h-7 text-violet-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-white font-bold text-xl group-hover:text-violet-400 transition-colors">Codolio</h3>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <p className="text-violet-400 text-sm font-mono">@meenbudha</p>
                </div>
              </div>
              {/* Description */}
              <p className="relative text-slate-400 text-sm leading-relaxed mb-5">
                All-in-one coding prep &amp; portfolio tool — smart coding diary meets interview kit.
                Replaces scattered spreadsheets with one structured dashboard.
              </p>
              {/* Feature Pills */}
              <div className="relative flex flex-wrap gap-2 mb-5">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-full text-xs text-slate-300">
                  <Target className="w-3.5 h-3.5 text-orange-400" /> Problem Tracking
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-full text-xs text-slate-300">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" /> Notes &amp; Interview Kit
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-full text-xs text-slate-300">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" /> FAANG Prep
                </span>
              </div>
              {/* Target companies */}
              <div className="relative">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Targeting</p>
                <div className="flex flex-wrap gap-2">
                  {['Google', 'Amazon', 'Microsoft'].map(co => (
                    <span key={co} className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-400 text-xs rounded-full group-hover:border-violet-500/30 group-hover:text-violet-300 transition-colors">
                      {co}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        ref={reg('projects')}
        className={`py-20 px-6 ${fadeClass('projects')}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px bg-blue-500 w-12" />
                <h2 className="text-3xl font-bold text-white">Featured Work</h2>
              </div>
              <p className="text-slate-400 ml-16">Real projects with measurable impact</p>
            </div>
            <div className="flex p-1 bg-slate-900 rounded-lg self-start border border-slate-800">
              {['all', 'Java', 'MERN'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                    activeTab === tab ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}>
                  {tab === 'all' ? 'All' : tab}
                </button>
              ))}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <Code2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>More projects coming soon…</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-1 gap-8">
              {filteredProjects.map(project => (
                <div key={project.id}
                  className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-blue-500/40 transition-all">
                  {/* Top Banner */}
                  <div className={`h-3 w-full bg-gradient-to-r ${project.accent}`} />
                  <div className="p-5 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-0.5 rounded">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-blue-400 font-medium text-sm">{project.subtitle}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-3 text-slate-400 shrink-0">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm hover:text-white transition-colors border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg">
                          <Github size={16} /> GitHub
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm hover:text-blue-400 transition-colors border border-slate-700 hover:border-blue-500/50 px-3 py-1.5 rounded-lg">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </div>
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed">{project.desc}</p>

                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t}
                          className="px-3 py-1 bg-slate-950 text-blue-400 text-xs font-mono rounded-full border border-blue-900/40 hover:border-blue-500/50 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Education ── */}
      <section
        id="education"
        ref={reg('education')}
        className={`py-20 px-6 bg-slate-900/30 ${fadeClass('education')}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-blue-500 w-12" />
            <h2 className="text-3xl font-bold text-white">Education &amp; Credentials</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="p-5 sm:p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Parul University</h3>
                  <p className="text-blue-400 text-sm font-medium">B.Tech — Computer Science &amp; Engineering</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-semibold">CGPA: 7.5 / 10</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" /> Vadodara, Gujarat
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500" /> 2023 – 2027
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="p-5 sm:p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Achievements</h3>
                  <p className="text-emerald-400 text-sm font-medium">Competitive &amp; Open-Source</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Contributed to open-source projects via <span className="text-white font-semibold">GSSoC '26</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Solved <span className="text-white font-semibold">500+ coding problems</span> across LeetCode, HackerRank &amp; CodeChef
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="md:col-span-2 p-5 sm:p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-violet-500/40 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-600/20 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Certifications</h3>
                  <p className="text-violet-400 text-sm font-medium">Verified industry credentials</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert.title}
                    className="flex items-start gap-3 p-4 bg-slate-900 rounded-xl border border-slate-800">
                    {cert.icon}
                    <div>
                      <p className="text-white text-sm font-semibold">{cert.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Footer ── */}
      <footer
        id="contact"
        ref={reg('contact')}
        className={`py-20 px-6 border-t border-slate-900 ${fadeClass('contact')}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-500 font-mono mb-4 text-sm flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to new opportunities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something great.</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
            I'm looking for new opportunities and collaborations.
            Have a project idea or just want to say hi? I'd love to hear from you!
          </p>

          <a href="mailto:meenbudha124@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all shadow-xl shadow-blue-500/20 mb-12 max-w-full overflow-hidden">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> meenbudha124@gmail.com
          </a>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-12">
            <a href="https://github.com/Meenbudha" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 hover:border-white transition-all text-slate-400">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/meen-budha" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-slate-400">
              <Linkedin size={20} />
            </a>
            <a href="mailto:meenbudha124@gmail.com"
              aria-label="Email"
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all text-slate-400">
              <Mail size={20} />
            </a>
            <a href="tel:+917073241096"
              aria-label="Phone"
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-violet-500 hover:border-violet-500 hover:text-white transition-all text-slate-400">
              <Phone size={20} />
            </a>
          </div>

          <div className="text-slate-600 text-sm font-mono">
            © 2026 Meen Bahadur Budha · Built with React &amp; ❤️
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;