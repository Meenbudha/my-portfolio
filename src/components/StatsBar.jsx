import React from 'react';
import { STATS } from '../data/portfolioData';

const StatsBar = () => (
  <div className="border-y border-slate-800 bg-slate-900/40 py-6 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {STATS.map(s => (
        <div key={s.label}>
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{s.value}</div>
          <div className="text-white font-semibold text-sm mt-1">{s.label}</div>
          <div className="text-slate-500 text-xs mt-0.5">{s.sub}</div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;
