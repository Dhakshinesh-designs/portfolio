'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: '/me', label: 'Me' },
  { id: '/projects', label: 'Projects' },
  { id: '/protosem', label: 'Protosem' },
  { id: '/contact', label: 'Contact' },
  { id: '/resume', label: 'Resume' },
];

export default function PortfolioHeader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  };

  // Handle default route mapping
  const currentTab = pathname === '/' ? '/me' : pathname;



  return (
    <div 
      className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] font-[var(--font-inter)]"
    >
      
      {/* Header Parody */}
      <header className="sticky top-0 z-40 bg-[var(--bg-main)] border-b border-[var(--border-light)] pt-6 pb-0">
        <div className="px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-2">
            
            {/* Small Google Logo */}
            <motion.div 
              layoutId="google-logo"
              transition={{ layout: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.6 } }}
              className="flex cursor-pointer select-none mt-1 relative w-[92px] h-[30px]" 
              onClick={() => router.push('/me')}
            >
              <Image src="/google-logo.svg" alt="Google" fill className="object-contain" priority />
            </motion.div>
            
            {/* Search Bar */}
            <motion.div 
              layoutId="search-bar"
              transition={{ layout: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.6 } }}
              className="flex items-center w-full max-w-[690px] h-[46px] px-4 bg-[var(--bg-search)] border border-[var(--border-color)] hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,0.28)] rounded-full transition-shadow"
            >
              <span className="flex-1 text-[16px] text-[var(--text-main)] outline-none">
                Dhakshinesh
              </span>
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-[#4285f4] hover:text-[var(--link-color)] cursor-pointer transition-colors" />
                <div className="w-[1px] h-6 bg-[var(--border-color)] mx-1"></div>
                {/* Mic */}
                <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24"><path fill="#4285f4" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path fill="#34a853" d="M11 14h2v5.08h-2z"/><path fill="#fbbc04" d="M6 11h2c0 2.21 1.79 4 4 4v2c-3.31 0-6-2.69-6-6z"/><path fill="#ea4335" d="M18 11h-2c0 2.21-1.79 4-4 4v2c3.31 0 6-2.69 6-6z"/></svg>
                {/* Camera */}
                <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24"><path fill="#4285f4" d="M4 4h4l2-2h4l2 2h4v16H4z"/><path fill="#ea4335" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/><path fill="#fbbc04" d="M15 12c0-1.65-1.35-3-3-3v6c1.65 0 3-1.35 3-3z"/><path fill="#34a853" d="M12 15c-1.65 0-3-1.35-3-3h6c0 1.65-1.35 3-3 3z"/></svg>
              </div>
            </motion.div>

            <div className="hidden md:flex ml-auto items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 hover:bg-[var(--bg-hover)] rounded-full transition-colors flex items-center justify-center text-[var(--icon-color)]"
                title="Toggle Theme"
              >
                {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="p-2 hover:bg-[var(--bg-hover)] rounded-full transition-colors">
                <svg className="w-5 h-5 text-[var(--icon-color)]" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </button>
              <div className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold text-sm cursor-pointer">
                D
              </div>
            </div>
          </div>
          
          <nav className="flex gap-6 overflow-x-auto no-scrollbar ml-0 md:ml-[116px] text-[var(--text-muted)] mt-4">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => router.push(tab.id)}
                  className={`relative pb-3 text-[14px] transition-colors whitespace-nowrap ${
                    isActive ? 'text-[var(--link-color)]' : 'hover:text-[var(--text-main)]'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--link-color)] rounded-t-sm"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Page Content with AnimatePresence */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col">
        <div className="md:ml-[116px] flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination */}
          <div className="mt-20 mb-8 flex justify-center w-full max-w-[600px]">
            <table className="border-collapse">
              <tbody>
                {/* Row 1: < Gooooogle > */}
                <tr className="text-[2.5rem] font-medium leading-none font-[var(--font-inter)] select-none">
                  {/* Previous Arrow */}
                  <td 
                    className={`align-bottom pb-[6px] pr-4 ${tabs.findIndex(t => t.id === currentTab) > 0 ? 'cursor-pointer' : 'opacity-0 pointer-events-none'}`} 
                    onClick={() => {
                      const currentIndex = tabs.findIndex(t => t.id === currentTab);
                      if (currentIndex > 0) router.push(tabs[currentIndex - 1].id);
                    }}
                  >
                    <span className="text-[var(--link-color)] text-3xl font-light hover:underline">&lsaquo;</span>
                  </td>
                  
                  <td className="text-[#4285f4] align-bottom pb-1 pr-[2px]">G</td>
                  {tabs.map((_, index) => {
                    const currentIndex = tabs.findIndex(t => t.id === currentTab);
                    return (
                      <td 
                        key={`o-${index}`} 
                        onClick={() => {
                          if (index >= 0 && index < tabs.length) router.push(tabs[index].id);
                        }}
                        className={`align-bottom pb-1 cursor-pointer ${index === currentIndex ? "text-[#ea4335]" : "text-[#fbbc04]"}`}
                      >
                        o
                      </td>
                    );
                  })}
                  <td className="text-[#4285f4] align-bottom pb-1">g</td>
                  <td className="text-[#34a853] align-bottom pb-1">l</td>
                  <td className="text-[#ea4335] align-bottom pb-1 pr-2">e</td>
                  
                  {/* Next Arrow */}
                  <td 
                    className={`align-bottom pb-[6px] pl-4 ${tabs.findIndex(t => t.id === currentTab) < tabs.length - 1 ? 'cursor-pointer' : 'opacity-0 pointer-events-none'}`} 
                    onClick={() => {
                      const currentIndex = tabs.findIndex(t => t.id === currentTab);
                      if (currentIndex < tabs.length - 1) router.push(tabs[currentIndex + 1].id);
                    }}
                  >
                    <span className="text-[var(--link-color)] text-3xl font-light hover:underline">&rsaquo;</span>
                  </td>
                </tr>
                
                {/* Row 2: Previous 1 2 3 4 5 6 Next */}
                <tr className="text-[14px] text-[var(--link-color)] text-center">
                  <td 
                    className={`text-right pt-1 pr-4 ${tabs.findIndex(t => t.id === currentTab) > 0 ? 'cursor-pointer hover:underline' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => {
                      const currentIndex = tabs.findIndex(t => t.id === currentTab);
                      if (currentIndex > 0) router.push(tabs[currentIndex - 1].id);
                    }}
                  >
                    Previous
                  </td>
                  <td></td>
                  {tabs.map((_, index) => {
                    const currentIndex = tabs.findIndex(t => t.id === currentTab);
                    return (
                      <td 
                        key={`num-${index}`}
                        onClick={() => {
                          if (index >= 0 && index < tabs.length) router.push(tabs[index].id);
                        }}
                        className={`cursor-pointer hover:underline pt-1 ${index === currentIndex ? "text-[var(--text-main)]" : ""}`}
                      >
                        {index + 1}
                      </td>
                    );
                  })}
                  <td colSpan={3}></td>
                  <td 
                    className={`text-left pt-1 pl-4 ${tabs.findIndex(t => t.id === currentTab) < tabs.length - 1 ? 'cursor-pointer hover:underline' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => {
                      const currentIndex = tabs.findIndex(t => t.id === currentTab);
                      if (currentIndex < tabs.length - 1) router.push(tabs[currentIndex + 1].id);
                    }}
                  >
                    Next
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </main>
    </div>
  );
}
