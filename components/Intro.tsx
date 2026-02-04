
import React, { useState, useEffect, useCallback } from 'react';

const BOOT_MESSAGES = [
  "INITIALIZING SENSORS...",
  "CALIBRATING IMU...",
  "LOADING WEIGHTS...",
  "SYSTEMS NOMINAL."
];

interface IntroProps {
  isReady: boolean;
  onEnter: () => void;
}

const Intro: React.FC<IntroProps> = ({ isReady, onEnter }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing logic wrapped in useCallback to avoid unnecessary re-runs
  const typeMessage = useCallback((message: string, onComplete: () => void) => {
    let charIndex = 0;
    setDisplayText(''); // Reset text for new message
    const interval = setInterval(() => {
      setDisplayText(message.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex >= message.length) {
        clearInterval(interval);
        onComplete();
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStep < BOOT_MESSAGES.length) {
      const cleanup = typeMessage(BOOT_MESSAGES[currentStep], () => {
        // Delay before moving to the next message or completing
        const nextActionTimeout = setTimeout(() => {
          if (currentStep < BOOT_MESSAGES.length - 1) {
            setCurrentStep(prev => prev + 1);
          } else {
            setIsTypingComplete(true);
          }
        }, 800);
        return () => clearTimeout(nextActionTimeout);
      });
      return cleanup;
    }
  }, [currentStep, typeMessage]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#0f172a] flex flex-col items-center justify-center p-6 text-safety-orange overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      
      {/* Sensor/Aperture Visual */}
      <div className="relative mb-16 scale-75 md:scale-100">
        <div className="size-48 rounded-full border border-safety-orange/20 flex items-center justify-center animate-aperture-pulse">
           <div className="size-32 rounded-full border-2 border-safety-orange border-dashed animate-reticle-rotate"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-4 bg-safety-orange rounded-full shadow-[0_0_20px_#f97316]"></div>
        </div>
        
        {/* Decorative HUD markers */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-t from-safety-orange/40 to-transparent"></div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-safety-orange/40 to-transparent"></div>
      </div>

      {/* Calibration Sequence */}
      <div className="text-center z-10">
        <div className="font-display text-[10px] tracking-[0.4em] text-safety-orange/40 mb-3 uppercase">Sensor Calibration Sequence</div>
        <div className="font-display text-xl md:text-2xl font-bold tracking-widest min-h-[40px] flex items-center justify-center gap-1">
          <span>{displayText}</span>
          <span className="w-2 h-6 bg-safety-orange animate-pulse"></span>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1 bg-safety-orange/10 relative overflow-hidden mx-auto">
          <div 
            className="absolute top-0 left-0 h-full bg-safety-orange transition-all duration-700 ease-out"
            style={{ width: `${((currentStep + (isTypingComplete ? 1 : 0)) / BOOT_MESSAGES.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Access Button - Only appears when both animations AND systems are ready */}
      <div className={`mt-16 transition-all duration-500 flex flex-col items-center gap-4 ${isTypingComplete && isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <button 
          onClick={onEnter}
          className="group relative px-12 py-4 border border-safety-orange bg-safety-orange/5 hover:bg-safety-orange text-safety-orange hover:text-[#0f172a] font-display font-black text-xs tracking-[0.4em] transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">OPEN_PERCEPTION_ENGINE</span>
          <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 opacity-20"></div>
        </button>
        <span className="text-[9px] font-display font-bold text-safety-orange/40 tracking-[0.2em] animate-pulse uppercase">Authorization_Granted</span>
      </div>

      {/* CAD Telemetry Corners */}
      <div className="absolute top-10 left-10 font-display text-[9px] opacity-30 select-none">
        <div className="block">AXIS_X: 32.119</div>
        <div className="block">AXIS_Y: 104.992</div>
        <div className="block mt-1">SENS_REF: 0x44A</div>
      </div>
      <div className="absolute bottom-10 right-10 font-display text-[9px] opacity-30 text-right select-none">
        <div className="block">LENS: WIDE_ANGLE_70</div>
        <div className="block">FOCAL: 2.8f</div>
        <div className="block mt-1">VER: PERCEPTION_2.0.4</div>
      </div>
    </div>
  );
};

export default Intro;
