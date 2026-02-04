
import React from 'react';
import { SKILLS } from '../constants';

interface SkillsMatrixProps {
  onSkillHover: (id: string | null) => void;
}

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ onSkillHover }) => {
  return (
    <section id="skills" className="font-display">
      <div className="flex items-center gap-6 mb-16">
        <div className="flex flex-col">
          <span className="text-safety-orange text-[10px] font-bold tracking-[0.4em] mb-1">SECTION_01</span>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase">CAPABILITIES_MATRIX</h2>
        </div>
        <div className="h-[1px] grow bg-cad-gray/20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill) => (
          <div 
            key={skill.id}
            onMouseEnter={() => onSkillHover(skill.id)}
            onMouseLeave={() => onSkillHover(null)}
            className="group relative bg-[#0f172a] border border-cad-gray/40 hover:border-safety-orange transition-all duration-300 overflow-hidden"
          >
            {/* Top Tag Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-cad-gray/10 border-b border-cad-gray/40 group-hover:bg-safety-orange group-hover:border-safety-orange transition-colors">
              <span className="text-[10px] font-bold text-safety-orange group-hover:text-[#0f172a] transition-colors uppercase tracking-widest">
                Detection: {skill.id}
              </span>
              <span className="text-[10px] font-bold text-safety-orange group-hover:text-[#0f172a] opacity-60">
                0.99
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-safety-orange text-3xl opacity-80">
                  {skill.icon}
                </span>
                <h3 className="text-lg font-bold text-white uppercase group-hover:text-safety-orange transition-colors">
                  {skill.category}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6 min-h-[48px]">
                {skill.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span key={item} className="text-[9px] px-2 py-0.5 border border-cad-gray text-cad-gray group-hover:border-safety-orange/40 group-hover:text-safety-orange/80 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-cad-gray/20">
                  <div className="flex justify-between items-center mb-1 text-[8px] font-bold text-safety-orange/60 tracking-widest">
                    <span>CONFIDENCE_LEVEL</span>
                    <span>99%</span>
                  </div>
                  <div className="h-1 bg-cad-gray/20 overflow-hidden">
                    <div className="h-full bg-safety-orange transition-all duration-700 w-0 group-hover:w-[99%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Bracket decorations */}
            <div className="absolute top-0 left-0 size-2 border-t border-l border-safety-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 size-2 border-t border-r border-safety-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 size-2 border-b border-l border-safety-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 size-2 border-b border-r border-safety-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;
