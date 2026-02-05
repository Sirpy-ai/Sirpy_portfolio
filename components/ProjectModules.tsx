import React, { useState } from 'react';
import { PROJECTS } from '../constants.tsx';

interface ProjectModulesProps {
  activeSkillId: string | null;
}

const ProjectModules: React.FC<ProjectModulesProps> = ({ activeSkillId }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="modules" className="font-display">
      <div className="flex items-center gap-6 mb-16">
        <div className="flex flex-col">
          <span className="text-safety-orange text-[10px] font-bold tracking-[0.4em] mb-1">SECTION 02</span>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase">DEPLOYED MODULES</h2>
        </div>
        <div className="h-[1px] grow bg-cad-gray/20"></div>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-[10px] font-bold text-safety-orange border border-safety-orange/40 px-4 py-2 hover:bg-safety-orange/10 transition-colors whitespace-nowrap uppercase tracking-widest"
        >
          {showAll ? 'HIDE MODULES' : 'VIEW ALL DEPLOYMENTS'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleProjects.map((project) => {
          const isHighlighted = activeSkillId && project.relatedSkills.includes(activeSkillId);
          const isDimmed = activeSkillId && !project.relatedSkills.includes(activeSkillId);

          return (
            <div 
              key={project.id} 
              className={`flex flex-col transition-all duration-500 relative ${isHighlighted ? 'scale-[1.02]' : ''} ${isDimmed ? 'opacity-20' : 'opacity-100'}`}
            >
              {isHighlighted && (
                <div className="absolute -inset-4 border border-safety-orange/40 animate-pulse pointer-events-none z-10">
                  <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-safety-orange"></div>
                  <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-safety-orange"></div>
                  <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-safety-orange"></div>
                  <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-safety-orange"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[8px] font-black bg-safety-orange text-[#0f172a] px-3 py-1 tracking-[0.2em] whitespace-nowrap">
                    <span className="material-symbols-outlined text-[10px]">target</span>
                    MODULE LINKED
                  </div>
                </div>
              )}

              <div className="bg-cad-gray/10 blueprint-grid-fine border border-cad-gray/30 p-1 relative group">
                <div className="aspect-video overflow-hidden relative grayscale hover:grayscale-0 transition-all">
                  <img 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                    src={project.image} 
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                  <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="text-[8px] text-safety-orange font-bold tracking-[0.3em] uppercase mb-1">Module Subject</div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tight">
                      {project.title}
                    </h4>
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                    <span className="text-[9px] px-2 py-0.5 bg-safety-orange text-[#0f172a] font-bold">ACTIVE</span>
                    <span className="text-[7px] text-safety-orange/60 font-mono tracking-tighter uppercase">ID: 0x4F-A2-99</span>
                  </div>
                </div>

                <div className="p-6 bg-[#0f172a]/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-cad-gray/20">
                    <div className="text-[10px] text-cad-gray font-bold tracking-widest uppercase">
                      {project.subtitle}
                    </div>
                    <div className="text-right">
                      <div className="text-[8px] text-safety-orange/60 font-bold uppercase">{project.metricLabel}</div>
                      <div className="text-xs font-bold text-white">{project.metric}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6 h-12 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {project.tech.map((t) => (
                      <div key={t} className="flex items-center gap-2 px-2 py-1.5 bg-cad-gray/10 border-l-2 border-safety-orange/40 text-[9px] text-white/80">
                        <span className="size-1 bg-safety-orange/40"></span>
                        <span className="font-bold tracking-wider uppercase">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectModules;