
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="timeline" className="max-w-4xl mx-auto font-display">
      <div className="flex items-center gap-6 mb-16">
        <div className="flex flex-col">
          <span className="text-safety-orange text-[10px] font-bold tracking-[0.4em] mb-1">SECTION_03</span>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase">MISSION_LOGS</h2>
        </div>
        <div className="h-[1px] grow bg-cad-gray/20"></div>
      </div>

      <div className="relative space-y-16">
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-cad-gray/30"></div>

        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-16 group">
            {/* Timeline Dot with Crosshair effect */}
            <div className="absolute left-[19px] top-2 flex items-center justify-center">
              <div className={`size-3 rounded-full border-2 transition-all duration-300 ${idx === 0 ? 'bg-safety-orange border-safety-orange scale-125' : 'bg-[#0f172a] border-cad-gray group-hover:border-safety-orange'}`}></div>
              {idx === 0 && <div className="absolute size-8 border border-safety-orange/30 rounded-full animate-ping"></div>}
            </div>
            
            <div className="flex flex-col gap-4 p-6 bg-cad-gray/5 border border-cad-gray/20 group-hover:border-safety-orange/30 transition-all duration-500">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-[10px] font-bold text-safety-orange tracking-[0.2em]">
                   {exp.range.toUpperCase()}
                </span>
                <span className="text-[8px] px-2 py-0.5 bg-cad-gray/20 text-cad-gray border border-cad-gray/30 font-bold tracking-widest">
                  LOG_ID: {exp.branch.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white group-hover:text-safety-orange transition-colors">
                  {exp.role.toUpperCase()}
                </h3>
                <div className="text-sm font-bold text-cad-gray mt-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">location_city</span>
                  {exp.company.toUpperCase()}
                </div>
              </div>

              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                {exp.action}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-cad-gray/10">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[8px] bg-safety-orange/5 text-safety-orange/60 border border-safety-orange/20 px-2 py-0.5 font-bold tracking-widest uppercase">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
