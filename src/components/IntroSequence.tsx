'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Search } from 'lucide-react';

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(2);
  const [typedText, setTypedText] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  
  const cursorControls = useAnimation();

  const finishIntro = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    onComplete();
  };

  const playThudSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Deep thud
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(100, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(20, audioCtx.currentTime + 0.4);
      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.8);
      
      // Whoosh (shutter) sound
      const bufferSize = audioCtx.sampleRate * 1;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
      noiseFilter.frequency.linearRampToValueAtTime(200, audioCtx.currentTime + 0.5);
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0, audioCtx.currentTime);
      noiseGain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.1);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);
      noise.start(audioCtx.currentTime);
      noise.stop(audioCtx.currentTime + 0.6);

    } catch (e) {
      console.warn("Web Audio API failed", e);
    }
  };

  // Main Animation Sequence
  useEffect(() => {
    if (scene === 2) {
      const runSequence = async () => {
        // 1. Move cursor in
        await cursorControls.start({
          x: -120, // Move to the text input area
          y: 0,
          opacity: 1,
          transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 }
        });

        // 2. Click (scale cursor down and up)
        await cursorControls.start({
          scale: 0.8,
          transition: { duration: 0.1 }
        });
        // Play click sound if possible (usually works if they clicked previously, but maybe not on auto-load)
        playThudSound();
        setIsClicked(true);
        await cursorControls.start({
          scale: 1,
          transition: { duration: 0.1 }
        });

        // 3. Type text
        const textToType = "Dhakshinesh";
        for (let i = 1; i <= textToType.length; i++) {
          setTypedText(textToType.slice(0, i));
          await new Promise(r => setTimeout(r, 90)); // ~90ms per char
        }

        // 4. Wait 1 second
        await new Promise(r => setTimeout(r, 1000));

        // 5. Finish and transition
        finishIntro();
      };
      
      runSequence();
    }
  }, [scene, cursorControls]);

  return (
    <div className="fixed inset-0 z-50 bg-transparent overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* SCENE 2: GOOGLE SEARCH */}
        {scene === 2 && (
          <motion.div 
            key="scene2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="absolute inset-0 bg-transparent"
          >
            <div className="w-full h-full flex flex-col items-center pt-[15vh] relative z-10">
              
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-[13px] text-white/80 font-[var(--font-inter)]">
                <div className="flex gap-4 ml-2">
                  <span className="hover:underline cursor-pointer">About</span>
                  <span className="hover:underline cursor-pointer">Store</span>
                </div>
                <div className="flex items-center gap-4 mr-2">
                  <span className="hover:underline cursor-pointer">Gmail</span>
                  <span className="hover:underline cursor-pointer">Images</span>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center w-10 h-10 text-2xl mb-1">
                    ⚗️
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  </button>
                </div>
              </div>

              {/* Logo */}
              <motion.div 
                layoutId="google-logo" 
                transition={{ layout: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.6 } }}
                className="flex mb-8 select-none relative w-[272px] h-[92px]"
              >
                <Image src="/google-logo.svg" alt="Google" fill className="object-contain" priority />
              </motion.div>
              
              {/* Search Bar */}
              <motion.div 
                layoutId="search-bar" 
                transition={{ layout: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.6 } }}
                className="flex items-center w-full max-w-[584px] h-[48px] px-4 bg-white border border-[#dfe1e5] hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] rounded-full transition-shadow relative z-20"
              >
                <Search className="w-5 h-5 text-[#9aa0a6] mr-3" />
                <div className="flex-1 text-[16px] text-black bg-transparent outline-none flex items-center font-[var(--font-inter)] relative">
                  {!isClicked && (
                    <span className="text-[#9aa0a6] absolute left-0 pointer-events-none">Search Google or type a URL</span>
                  )}
                  {typedText}
                  {isClicked && (
                    <motion.span 
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="ml-[1px] text-black font-light"
                    >
                      |
                    </motion.span>
                  )}
                </div>
                
                {/* Right side icons */}
                <div className="flex items-center gap-3 ml-3">
                  {/* Mic */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285f4" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path fill="#34a853" d="M11 14h2v5.08h-2z"/><path fill="#fbbc04" d="M6 11h2c0 2.21 1.79 4 4 4v2c-3.31 0-6-2.69-6-6z"/><path fill="#ea4335" d="M18 11h-2c0 2.21-1.79 4-4 4v2c3.31 0 6-2.69 6-6z"/></svg>
                  {/* Camera */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285f4" d="M4 4h4l2-2h4l2 2h4v16H4z"/><path fill="#ea4335" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/><path fill="#fbbc04" d="M15 12c0-1.65-1.35-3-3-3v6c1.65 0 3-1.35 3-3z"/><path fill="#34a853" d="M12 15c-1.65 0-3-1.35-3-3h6c0 1.65-1.35 3-3 3z"/></svg>
                  {/* AI Mode */}
                  <div className="flex items-center gap-1 bg-[#f0f4f9] px-3 py-1.5 rounded-full text-[13px] font-medium text-[#1f1f1f]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-2v2h2v2h2V5h2V3h-2V1h-2v2zm-4 4l-1.34-2.66L11 3l-2.66 1.34L7 7l1.34 2.66L11 11l2.66-1.34L15 7zm2.34 8.66L16 13l-1.34 2.66L12 17l2.66 1.34L16 21l1.34-2.66L20 17l-2.66-1.34zM10.5 17l-2.5 5.5L5.5 17 0 14.5 5.5 12 8 6.5 10.5 12 16 14.5 10.5 17z"/></svg>
                    AI Mode
                  </div>
                </div>

                {/* Animated Mouse Cursor */}
                <motion.div
                  initial={{ x: 300, y: 300, opacity: 0 }}
                  animate={cursorControls}
                  className="absolute top-1/2 left-1/2 w-6 h-6 z-50 pointer-events-none drop-shadow-md"
                  style={{ marginLeft: '-12px', marginTop: '-12px' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.86a.5.5 0 0 0-.85.35z" fill="black" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </motion.div>

              </motion.div>
              
              <motion.div 
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="mt-8 flex gap-3 font-[var(--font-inter)]"
              >
                <button className="bg-[#f8f9fa] border border-transparent text-[#3c4043] px-4 py-2 rounded text-sm hover:border-[#dadce0] hover:shadow-sm transition-all focus:outline-none focus:border-[#4285f4]">
                  Google Search
                </button>
                <button className="bg-[#f8f9fa] border border-transparent text-[#3c4043] px-4 py-2 rounded text-sm hover:border-[#dadce0] hover:shadow-sm transition-all focus:outline-none focus:border-[#4285f4]">
                  I'm Feeling Lucky
                </button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
