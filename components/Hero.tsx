import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hud" className="grid lg:grid-cols-2 gap-20 items-center py-20 relative">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-safety-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="flex flex-col gap-10 z-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-safety-orange/30 bg-safety-orange/5">
            <span className="size-1.5 bg-safety-orange animate-ping"></span>
            <span className="text-[10px] font-display font-bold text-safety-orange tracking-[0.4em] uppercase">System Status: Nominal</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white leading-none font-display tracking-tighter">
            <div className="block">SELVARAJAN</div>
            <div className="text-safety-orange block">SIRPY</div>
          </h1>
          <h2 className="text-xl font-bold tracking-widest text-cad-gray uppercase font-display border-l-2 border-safety-orange pl-4 py-1">Robotics Software Engineer</h2>
          <p className="max-w-md text-sm text-slate-400 font-sans leading-relaxed">
            Initializing autonomous perception protocols and sensor fusion algorithms. Architecting scalable deep learning models and real-time embedded firmware for unstructured environments.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <button 
            onClick={() => scrollTo('modules')} 
            className="px-10 py-4 bg-safety-orange text-[#0f172a] font-display font-black text-xs tracking-[0.2em] hover:bg-white transition-all hover:scale-[1.02] flex items-center gap-4"
          >
            INITIALIZE DEPLOYMENT
            <span className="text-lg">→</span>
          </button>
          <button 
            onClick={() => scrollTo('timeline')} 
            className="px-10 py-4 border border-cad-gray text-white font-display font-bold text-xs tracking-[0.2em] hover:border-safety-orange transition-all hover:bg-safety-orange/5"
          >
            HISTORY LOGS
          </button>
        </div>

        <div className="grid grid-cols-3 gap-12 font-display py-8 border-y border-cad-gray/20">
          <div>
            <div className="text-[9px] text-safety-orange font-bold uppercase tracking-widest mb-1">Eng Cycle</div>
            <div className="text-3xl font-black text-white">02Y</div>
          </div>
          <div>
            <div className="text-[9px] text-safety-orange font-bold uppercase tracking-widest mb-1">Modules</div>
            <div className="text-3xl font-black text-white">15+</div>
          </div>
          <div>
            <div className="text-[9px] text-safety-orange font-bold uppercase tracking-widest mb-1">Confidence</div>
            <div className="text-3xl font-black text-white">99%</div>
          </div>
        </div>
      </div>

      <div className="relative aspect-square group flex items-center justify-center">
        <div className="absolute inset-0 blueprint-grid border border-cad-gray/20 rounded-xl opacity-40"></div>
        <div className="relative size-full p-12 animate-float">
          <div className="absolute inset-0 border border-safety-orange/10 flex items-center justify-center">
            <div className="size-4/5 rounded-full border border-safety-orange/5 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute size-3/5 rounded-full border-t-2 border-safety-orange/40 animate-[spin_10s_linear_infinite]"></div>
          </div>
          
          <svg className="w-full h-full text-safety-orange/60" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
             <path d="M40 100 H160 M100 40 V160" opacity="0.1" />
             <circle cx="100" cy="100" r="40" />
             <rect x="80" y="80" width="40" height="40" strokeDasharray="4 2" />
             <path d="M100 60 L140 100 L100 140 L60 100 Z" />
             <circle cx="140" cy="100" r="4" fill="currentColor" />
             <circle cx="60" cy="100" r="4" fill="currentColor" />
          </svg>
          
          <div className="absolute top-0 right-0 p-4 font-display text-[9px] text-safety-orange/50 uppercase tracking-widest">
            <div className="block">Module: Perception Core</div>
            <div className="block">Ref: S-119-02</div>
          </div>
          
          <div className="absolute top-2 left-2 size-4 border-t border-l border-safety-orange"></div>
          <div className="absolute top-2 right-2 size-4 border-t border-r border-safety-orange"></div>
          <div className="absolute bottom-2 left-2 size-4 border-b border-l border-safety-orange"></div>
          <div className="absolute bottom-2 right-2 size-4 border-b border-r border-safety-orange"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;