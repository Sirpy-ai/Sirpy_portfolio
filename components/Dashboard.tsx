import React, { useState, useEffect } from 'react';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import SkillsMatrix from './SkillsMatrix.tsx';
import ProjectModules from './ProjectModules.tsx';
import ExperienceTimeline from './ExperienceTimeline.tsx';

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
      setTelemetry(prev => ({ ...prev, x: Math.floor(e.clientX), y: Math.floor(e.clientY) }));
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
        
        <section id="labs" className="pt-20 border-t border-cad-gray/30">
          <div className="p-12 bg-cad-gray/10 text-center opacity-40 group hover:opacity-100 transition-all border border-dashed border-cad-gray/30">
            <h3 className="font-display font-bold text-safety-orange tracking-widest mb-4 uppercase">Advanced Laboratory Modules</h3>
            <p className="text-sm font-sans">Autonomous Pathfinding Simulations & Real-time Telemetry Feeds (Deployment Pending)</p>
          </div>
        </section>

        <footer className="pt-20 border-t border-safety-orange/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="p-3 border border-safety-orange/20">
              <span className="material-symbols-outlined text-safety-orange text-3xl">precision_manufacturing</span>
            </div>
            <div>
              <div className="text-[10px] font-bold text-safety-orange tracking-[0.3em] uppercase font-display">System Specification</div>
              <div className="text-xs text-cad-gray uppercase font-bold tracking-widest">ROBOTIC ARCHITECTURE // 2025.02</div>
            </div>
          </div>
          
          <div className="flex gap-12 font-display">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-safety-orange/40 uppercase font-bold tracking-widest">CONNECT</span>
              <a href="https://github.com/sirpy-ai" target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:text-safety-orange transition-colors flex items-center gap-2 font-bold uppercase tracking-wider">
                 GITHUB <span className="material-symbols-outlined text-[10px]">open_in_new</span>
              </a>
              <a href="https://www.linkedin.com/in/sirpy-s/" target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:text-safety-orange transition-colors flex items-center gap-2 font-bold uppercase tracking-wider">
                 LINKEDIN <span className="material-symbols-outlined text-[10px]">open_in_new</span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-safety-orange/40 uppercase font-bold tracking-widest">SYSTEM METRICS</span>
              <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">ENGINE: VEO 3.1</span>
              <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">INTERFACE: PERCEPTION HUD</span>
            </div>
          </div>

          <div className="text-[10px] font-display text-gray-600 font-bold uppercase tracking-widest text-right">
            © 2025 SIRPY PERCEPTION SYSTEMS.<br />
            ALL DEPLOYMENTS OPERATIONAL.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;