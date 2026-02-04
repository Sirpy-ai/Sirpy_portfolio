
import React, { useState, useEffect, useRef } from 'react';

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
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let messageIndex = 0;
    let charIndex = 0;
    let isWaiting = false;

    const runSequence = () => {
      if (messageIndex >= BOOT_MESSAGES.length) {
        setIsTypingComplete(true);
        return;
      }

      const currentMessage = BOOT_MESSAGES[messageIndex];

      if (!isWaiting) {
        if (charIndex <= currentMessage.length) {
          setDisplayText(currentMessage.slice(0, charIndex));
          charIndex++;
          animationFrameRef.current = window.setTimeout(runSequence, 50);
        } else {
          isWaiting = true;
          setCurrentStep(messageIndex);
          animationFrameRef.current = window.setTimeout(() => {
            isWaiting = false;
            charIndex = 0;
            messageIndex++;
            runSequence();
          }, 800);
        }
      }
    };

    runSequence();

    return () => {
      if (animationFrameRef.current) clearTimeout(animationFrameRef.current);
    };
  }, []);

  // Force complete if system is ready but typing got stuck (fail-safe)
  useEffect(() => {
    if (isReady && !isTypingComplete) {
      const failSafe = setTimeout(() => setIsTypingComplete(true), 2000);
      return () => clearTimeout(failSafe);
    }
  }, [isReady, isTypingComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#0f172a] flex flex-col items-center justify-center p-6 text-safety-orange overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      
      <div className="relative mb-16 scale-75 md:scale-100">
        <div className="size-48 rounded-full border border-safety-orange/20 flex items-center justify-center animate-aperture-pulse">
           <div className="size-32 rounded-full border-2 border-safety-orange border-dashed animate-reticle-rotate"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-4 bg-safety-orange rounded-full shadow-[0_0_20px_#f97316]"></div>
        </div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-t from-safety-orange/40 to-transparent"></div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-safety-orange/40 to-transparent"></div>
      </div>

      <div className="text-center z-10">
        <div className="font-display text-[10px] tracking-[0.4em] text-safety-orange/40 mb-3 uppercase">Sensor Calibration Sequence</div>
        <div className="font-display text-xl md:text-2xl font-bold tracking-widest min-h-[40px] flex items-center justify-center gap-1">
          <span>{displayText}</span>
          <span className="w-2 h-6 bg-safety-orange animate-pulse"></span>
        </div>
        
        <div className="mt-8 w-64 h-1 bg-safety-orange/10 relative overflow-hidden mx-auto">
          <div 
            className="absolute top-0 left-0 h-full bg-safety-orange transition-all duration-700 ease-out"
            style={{ width: `${((currentStep + (isTypingComplete ? 1 : 0)) / BOOT_MESSAGES.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className={`mt-16 transition-all duration-700 flex flex-col items-center gap-4 ${isTypingComplete && isReady ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
        <button 
          onClick={onEnter}
          className="group relative px-12 py-4 border border-safety-orange bg-safety-orange/5 hover:bg-safety-orange text-safety-orange hover:text-[#0f172a] font-display font-black text-xs tracking-[0.4em] transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">OPEN_PERCEPTION_ENGINE</span>
          <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 opacity-20"></div>
        </button>
        <span className="text-[9px] font-display font-bold text-safety-orange/40 tracking-[0.2em] animate-pulse uppercase">Authorization_Granted</span>
      </div>

      <div className="absolute top-10 left-10 font-display text-[9px] opacity-30 select-none">
        <div>AXIS_X: 32.119</div>
        <div>AXIS_Y: 104.992</div>
        <div className="mt-1">SENS_REF: 0x44A</div>
      </div>
      <div className="absolute bottom-10 right-10 font-display text-[9px] opacity-30 text-right select-none">
        <div>LENS: WIDE_ANGLE_70</div>
        <div>FOCAL: 2.8f</div>
        <div className="mt-1">VER: PERCEPTION_2.0.4</div>
      </div>
    </div>
  );
};

export default Intro;
