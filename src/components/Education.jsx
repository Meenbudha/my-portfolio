import React from 'react';
import { GraduationCap, Trophy, Award, Star, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

const Education = ({ fadeClass, reg }) => (
  <section id="education" ref={reg('education')} className={`py-20 px-6 bg-slate-900/30 ${fadeClass('education')}`}>
    <div className="max-w-7xl mx-auto">
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
          <div className="space-y-3 text-base text-slate-200">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /><span className="text-white font-semibold">CGPA: 7.5 / 10</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-500" /> Vadodara, Gujarat</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-500" /> 2023 – 2027</div>
          </div>
        </div>

        {/* Achievements */}
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
          <ul className="space-y-3 text-base text-slate-200">
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
              <div key={cert.title} className="flex items-start gap-3 p-4 bg-slate-900 rounded-xl border border-slate-800">
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
);

export default Education;
