'use client';

import { useState, useEffect } from 'react';
import IntroSequence from './IntroSequence';
import PortfolioHeader from './PortfolioHeader';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

export default function IntroManager({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    // Check session storage on mount
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, []);

  // Prevent hydration mismatch by not rendering until state is resolved
  if (showIntro === null) return <div className="min-h-screen bg-[var(--color-bg-dark)]" />;

  return (
    <LayoutGroup>
      <AnimatePresence>
        {showIntro ? (
          <IntroSequence key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div 
            key="main" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full"
          >
            <PortfolioHeader>
              {children}
            </PortfolioHeader>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
