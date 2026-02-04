
import React, { useState, useEffect } from 'react';
import Intro from './components/Intro.tsx';
import Dashboard from './components/Dashboard.tsx';

const App: React.FC = () => {
  const [bootState, setBootState] = useState<'booting' | 'ready' | 'active'>('booting');

  useEffect(() => {
    // Global system readiness timer
    const timer = setTimeout(() => {
      setBootState('ready');
    }, 5000); // 5 seconds to ensure typing has enough time
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSystem = () => {
    setBootState('active');
  };

  return (
    <div className="min-h-screen bg-gunmetal overflow-hidden relative">
      {/* Background Blueprint Grid */}
      <div className="fixed inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
      
      {/* Global Scanline / HUD Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[1px] border-safety-orange/5 m-4"></div>
      <div className="fixed top-0 left-0 w-full h-px bg-safety-orange/10 animate-scanline pointer-events-none z-[101]"></div>

      {bootState !== 'active' ? (
        <Intro 
          isReady={bootState === 'ready'} 
          onEnter={handleEnterSystem} 
        />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default App;
