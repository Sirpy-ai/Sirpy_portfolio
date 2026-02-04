
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import SkillsMatrix from './SkillsMatrix';
import ProjectModules from './ProjectModules';
import ExperienceTimeline from './ExperienceTimeline';

const Dashboard: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [telemetry, setTelemetry] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => {
      setTelemetry(prev => ({ ...prev, z: Math.floor(window.scrollY) }));
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setTelemetry(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header telemetry={telemetry} />
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 space-y-32">
        <Hero />
        <SkillsMatrix onSkillHover={setActiveSkillId} />
        <ProjectModules activeSkillId={activeSkillId} />
        <ExperienceTimeline />
        
        {/* Placeholder for expansion */}
        <section id="labs" className="pt-20 border-t border-cad-gray/30">
          <div className="bracket-box p-12 bg-cad-gray/10 text-center opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all">
            <h3 className="font-display font-bold text-safety-orange tracking-widest mb-4">FUTURE_EXPANSION_MODULES</h3>
            <p className="text-sm font-sans">Autonomous Pathfinding Simulations & Real-time Telemetry Feeds (In-Dev)</p>
          </div>
        </section>

        <footer className="pt-20 border-t border-safety-orange/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="p-3 border border-safety-orange/20">
              <span className="material-symbols-outlined text-safety-orange text-3xl">precision_manufacturing</span>
            </div>
            <div>
              <div className="text-[10px] font-bold text-safety-orange tracking-[0.3em] uppercase font-display">System Spec</div>
              <div className="text-xs text-cad-gray">ROB_ARCH // GEN_2025.02</div>
            </div>
          </div>
          
          <div className="flex gap-12 font-display">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-safety-orange/40 uppercase font-bold">Connections</span>
              <a href="https://github.com/sirpy-ai" target="_blank" className="text-xs hover:text-safety-orange transition-colors flex items-center gap-2">
                 GITHUB <span className="material-symbols-outlined text-[10px]">open_in_new</span>
              </a>
              <a href="https://www.linkedin.com/in/sirpy-s/" target="_blank" className="text-xs hover:text-safety-orange transition-colors flex items-center gap-2">
                 LINKEDIN <span className="material-symbols-outlined text-[10px]">open_in_new</span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-safety-orange/40 uppercase font-bold">Site Data</span>
              <span className="text-[10px] text-gray-500">ENGINE: VEO-3.1</span>
              <span className="text-[10px] text-gray-500">UI_MODE: CAD_HUD</span>
            </div>
          </div>

          <div className="text-[10px] font-display text-gray-600">
            © 2025 SIRPY_PERCEPTION_SYSTEMS. ALL MODULES OPERATIONAL.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
