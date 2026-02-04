
import React, { useState, useEffect } from 'react';

interface IntroProps {
  isReady: boolean;
  onEnter: () => void;
}

const Intro: React.FC<IntroProps> = ({ isReady, onEnter }) => {
  const [displayText, setDisplayText] = useState('');
  const [step, setStep] = useState(0);
  
  const messages = [
    "INITIALIZING SENSORS...",
    "CALIBRATING IMU...",
    "LOADING WEIGHTS...",
    "SYSTEMS NOMINAL."
  ];

  useEffect(() => {
    if (step < messages.length) {
      let charIndex = 0;
      const interval = setInterval(() => {
        setDisplayText(messages[step].slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === messages[step].length) {
          clearInterval(interval);
          setTimeout(() => {
            if (step < messages.length - 1) {
              setStep(s => s + 1);
            }
          }, 600);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#0f172a] flex flex-col items-center justify-center p-6 text-safety-orange overflow-hidden">
      {/* Sensor/Aperture Visual */}
      <div className="relative mb-16">
        <div className="size-48 rounded-full border border-safety-orange/20 flex items-center justify-center animate-aperture-pulse">
           <div className="size-32 rounded-full border-2 border-safety-orange border-dashed animate-reticle-rotate"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-4 bg-safety-orange rounded-full shadow-[0_0_20px_#f97316]"></div>
        </div>
      </div>

      {/* Calibration Sequence */}
      <div className="text-center">
        <div className="font-display text-xs tracking-[0.4em] text-safety-orange/40 mb-2 uppercase">Sensor Calibration</div>
        <div className="font-display text-xl font-bold tracking-widest min-h-[32px]">
          {displayText}
          <span className="animate-pulse">_</span>
        </div>
      </div>

      {step === messages.length - 1 && isReady && (
        <button 
          onClick={onEnter}
          className="mt-16 px-10 py-3 border border-safety-orange bg-safety-orange/5 hover:bg-safety-orange text-safety-orange hover:text-[#0f172a] font-display font-bold text-xs tracking-[0.3em] transition-all duration-300"
        >
          OPEN_PERCEPTION_ENGINE
        </button>
      )}

      {/* CAD Telemetry Corners */}
      <div className="absolute top-10 left-10 font-display text-[9px] opacity-30">
        AXIS_X: 32.119<br/>
        AXIS_Y: 104.992
      </div>
      <div className="absolute bottom-10 right-10 font-display text-[9px] opacity-30 text-right">
        LENS: WIDE_ANGLE_70<br/>
        FOCAL: 2.8f
      </div>
    </div>
  );
};

export default Intro;
