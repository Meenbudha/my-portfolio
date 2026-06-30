import React from 'react';
import { BookOpen, ExternalLink, Target, FileText, Building2 } from 'lucide-react';

const CodingProfiles = ({ fadeClass, reg }) => (
  <section id="coding" ref={reg('coding')} className={`py-20 px-6 ${fadeClass('coding')}`}>
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px bg-orange-500 w-12" />
        <h2 className="text-3xl font-bold text-white">Coding Profiles</h2>
      </div>
      <p className="text-slate-400 mb-12 ml-16 text-sm">500+ problems solved across platforms</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* LeetCode */}
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
                {[['400+','Solved'],['Easy','✓ Cleared'],['Med+','Active']].map(([val, label]) => (
                  <div key={label} className="text-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className={`text-xl font-bold ${label === '✓ Cleared' ? 'text-emerald-400' : label === 'Active' ? 'text-orange-400' : 'text-white'}`}>{val}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </a>

        {/* Codolio */}
        <a href="https://codolio.com/profile/meenbudha" target="_blank" rel="noopener noreferrer"
          className="group relative p-5 sm:p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-violet-400/60 transition-all hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <p className="relative text-slate-400 text-sm leading-relaxed mb-5">
            All-in-one coding prep &amp; portfolio tool — smart coding diary meets interview kit. Replaces scattered spreadsheets with one structured dashboard.
          </p>
          <div className="relative flex flex-wrap gap-2 mb-5">
            {[
              [Target, 'text-orange-400', 'Problem Tracking'],
              [FileText, 'text-cyan-400', 'Notes & Interview Kit'],
              [Building2, 'text-emerald-400', 'FAANG Prep'],
            ].map(([Icon, color, label]) => (
              <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-full text-xs text-slate-300">
                <Icon className={`w-3.5 h-3.5 ${color}`} /> {label}
              </span>
            ))}
          </div>
          <div className="relative">
            <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Targeting</p>
            <div className="flex flex-wrap gap-2">
              {['Google', 'Amazon', 'Microsoft'].map(co => (
                <span key={co} className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-400 text-xs rounded-full group-hover:border-violet-500/30 group-hover:text-violet-300 transition-colors">{co}</span>
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default CodingProfiles;
