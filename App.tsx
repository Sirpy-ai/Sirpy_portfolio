
import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [bootState, setBootState] = useState<'booting' | 'ready' | 'active'>('booting');

  useEffect(() => {
    // Basic auto-auth timer to move from establishing connection to ready
    const timer = setTimeout(() => {
      setBootState('ready');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSystem = () => {
    setBootState('active');
  };

  return (
    <div className="min-h-screen bg-background-dark overflow-hidden relative">
      {/* Background Grid Pattern - Always present */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none"></div>
      
      {/* Scanline Effect */}
      <div className="fixed inset-0 scanline-overlay pointer-events-none opacity-20"></div>
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/20 animate-scanline pointer-events-none z-[100]"></div>

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
