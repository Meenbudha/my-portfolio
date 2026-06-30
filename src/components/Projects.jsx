import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

const Projects = ({ fadeClass, reg }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" ref={reg('projects')} className={`py-20 px-6 ${fadeClass('projects')}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px bg-blue-500 w-12" />
              <h2 className="text-3xl font-bold text-white">Featured Work</h2>
            </div>
            <p className="text-slate-400 ml-16">Real projects with measurable impact</p>
          </div>
          {PROJECTS.length > 1 && (
            <div className="flex p-1 bg-slate-900 rounded-lg self-start border border-slate-800">
              {['all', ...new Set(PROJECTS.map(p => p.category))].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
                  {tab === 'all' ? 'All' : tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Code2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>More projects coming soon…</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-1 gap-8">
            {filtered.map(project => (
              <div key={project.id} className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-blue-500/40 transition-all">
                <div className={`h-3 w-full bg-gradient-to-r ${project.accent}`} />
                <div className="p-5 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{project.year}</span>
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
                        <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-950 text-blue-400 text-xs font-mono rounded-full border border-blue-900/40 hover:border-blue-500/50 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
