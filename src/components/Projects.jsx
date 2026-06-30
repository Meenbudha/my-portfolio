import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

const TECH_ICONS = {
  tailwind: (
    <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.628C13.666 10.605 14.883 11.8 17.601 11.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.628C16.335 5.995 15.118 4.8 12.001 4.8zm-6 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.628C7.666 17.605 8.883 18.8 11.601 18.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.628C10.335 12.995 9.118 11.8 6.001 11.8z"/>
    </svg>
  ),
  react: (
    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  vite: (
    <svg className="w-5 h-5 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 22h20L12 2z" />
      <path d="M12 2v20" />
    </svg>
  ),
  node: (
    <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm0 4.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM13 16h-2v-6h2v6z" />
    </svg>
  ),
  express: (
    <span className="text-[9px] font-mono font-bold text-slate-300 border border-slate-700 px-1 py-0.5 rounded leading-none hover:border-slate-500 transition-colors">Ex</span>
  ),
  python: (
    <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.25.18a3.25 3.25 0 0 0-3.25 3.25v1.25h3.25a1 1 0 0 1 1 1v2.5a3.25 3.25 0 0 0 3.25 3.25h1.25V8.18A3.25 3.25 0 0 0 16.5.18h-2.25z M9.75 23.82a3.25 3.25 0 0 0 3.25-3.25v-1.25H9.75a1 1 0 0 1-1-1v-2.5A3.25 3.25 0 0 0 5.5 12.57H4.25v3.25A3.25 3.25 0 0 0 7.5 23.82h2.25z" />
    </svg>
  ),
  flask: (
    <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12M8 3v3a4 4 0 0 1-1.3 3L3 18a2 2 0 0 0 1.8 3h14.4a2 2 0 0 0 1.8-3l-3.7-9A4 4 0 0 1 16 6V3" />
    </svg>
  ),
  mongodb: (
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5c-.3 0-3.2 5.5-3.2 8.7 0 3.3 2 5.8 3.2 5.8s3.2-2.5 3.2-5.8c0-3.2-2.9-8.7-3.2-8.7zm0 15.5c-2.5 0-4.5-2-4.5-4.5v-1h9v1c0 2.5-2 4.5-4.5 4.5z" />
    </svg>
  ),
  aws: (
    <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-6h2v6zm0-8h-2V6h2v2z" />
    </svg>
  ),
  html5: (
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.03 5.63H5.47l.45 5.09h10.23l-.42 4.74-3.73 1.03-3.73-1.03-.24-2.7h-2.5l.4 4.54L12 19.16l5.77-1.6.76-7.93H6.38l-.24-2.7h12.56l-.17 1.7z"/>
    </svg>
  ),
  css3: (
    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.49 5.63h11.04l-.22 2.47H9.28l.22 2.53h7.28l-.44 4.97-3.73 1.03-3.73-1.03-.24-2.7h2.5l.12 1.37L12 15.34l2.25-.62.24-2.72H9.72l-.44-5.02-.29-1.37z" />
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5 text-yellow-300 rounded overflow-hidden" viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="3" fill="#f7df1e"/>
      <path d="M1.5 1.5h21v21h-21z" fill="none"/>
      <path d="M12 18.5c0 1-.76 1.5-1.75 1.5-1 0-1.65-.5-1.85-1.25h1.15c.1.4.35.6.7.6.35 0 .6-.2.6-.6v-5.25h1.15v5.5zm6.5-1.1c0 1.25-.95 2.1-2.35 2.1-1.3 0-2.15-.65-2.45-1.5h1.15c.2.45.55.75 1.25.75.7 0 1.15-.35 1.15-.95 0-.6-.45-.85-1.3-1.2l-.4-.15c-1.15-.5-1.65-1.05-1.65-2 0-1.15.95-1.95 2.2-1.95 1.15 0 1.85.5 2.15 1.2h-1.15c-.15-.35-.45-.55-1-.55-.5 0-.9.25-.9.7 0 .45.3.65 1.05.95l.4.15c1.25.55 1.85 1.05 1.85 2.1z" fill="#000000"/>
    </svg>
  ),
};

const PROJECT_ILLUSTRATIONS = {
  codemind: (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
      <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v12M6 12h12" />
        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
      </svg>
    </div>
  ),
  portfolio: (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
      <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    </div>
  ),
  'card-validator': (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center">
      <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <rect x="6" y="14" width="4" height="2" />
      </svg>
    </div>
  ),
};

const Projects = ({ fadeClass, reg }) => {
  return (
    <section id="projects" ref={reg('projects')} className={`py-20 px-6 ${fadeClass('projects')}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px bg-blue-500 w-12" />
              <h2 className="text-3xl font-bold text-white">Featured Work</h2>
            </div>
            <p className="text-slate-200 text-base ml-16">Real projects with measurable impact</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map(project => (
            <div key={project.id} className="group relative bg-[#070c18] rounded-xl border border-slate-800 p-6 hover:border-blue-500/40 hover:bg-[#091022]/80 transition-all shadow-2xl">
              <div className="flex gap-5 items-start">
                {/* Circular Illustration */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
                  {PROJECT_ILLUSTRATIONS[project.id]}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-sky-400 group-hover:text-blue-400 transition-colors mb-1">{project.title}</h3>
                  
                  <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-2">Tech Stack</div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-4">
                    {project.tech.map(t => {
                      const displayNames = {
                        tailwind: 'Tailwind',
                        react: 'React',
                        vite: 'Vite',
                        node: 'Node.js',
                        express: 'Express',
                        python: 'Python',
                        flask: 'Flask',
                        mongodb: 'MongoDB',
                        aws: 'AWS',
                        html5: 'HTML5',
                        css3: 'CSS3',
                        javascript: 'JS'
                      };
                      return (
                        <div key={t} className="flex flex-col items-center gap-1">
                          <div className="h-6 flex items-center justify-center">
                            {TECH_ICONS[t]}
                          </div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                            {displayNames[t] || t}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-slate-200 text-base leading-relaxed mb-4">{project.desc}</p>

                  <div className="flex gap-4 text-slate-200">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
