
import React from 'react';

interface HeaderProps {
  telemetry: { x: number; y: number; z: number };
}

const Header: React.FC<HeaderProps> = ({ telemetry }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-safety-orange/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-display">
        <div className="flex items-center gap-4">
          <div className="size-8 border border-safety-orange flex items-center justify-center">
            <span className="text-safety-orange font-bold text-xs">+</span>
          </div>
          <h2 className="text-xs font-bold tracking-widest text-white uppercase flex flex-col">
            <span>DIAGNOSTIC: SIRPY_S</span>
            <span className="text-[8px] text-safety-orange opacity-60">FIRMWARE_V2.0.4</span>
          </h2>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'SYSTEM_SPECS', id: 'hud' },
            { label: 'CAPABILITIES', id: 'skills' },
            { label: 'MODULES', id: 'modules' },
            { label: 'MISSION_LOGS', id: 'timeline' },
            { label: 'LABS', id: 'labs' }
          ].map((item, idx) => (
            <a 
              key={item.label}
              href={`#${item.id}`}
              className="group text-[10px] tracking-widest hover:text-safety-orange transition-colors flex items-center gap-2"
            >
              <span className="text-safety-orange/30 group-hover:text-safety-orange">0{idx + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-8 border-l border-cad-gray/30 pl-8">
          <div className="flex flex-col items-end text-[9px] font-display uppercase tracking-tighter opacity-70">
            <span className="text-safety-orange">X: {telemetry.x.toString().padStart(4, '0')}</span>
            <span className="text-electric-violet">Y: {telemetry.y.toString().padStart(4, '0')}</span>
          </div>
          <div className="flex items-center gap-4 bg-cad-gray/20 px-4 py-1.5 rounded-sm border border-cad-gray/40">
            <div className="flex flex-col items-end">
              <span className="text-[8px] text-safety-orange/60 font-bold uppercase tracking-widest">Elevation (Z)</span>
              <span className="text-xs font-bold text-white tabular-nums">{telemetry.z}m</span>
            </div>
            <div className="h-6 w-[1px] bg-cad-gray/50"></div>
            <div className="size-2 rounded-full bg-safety-orange animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
