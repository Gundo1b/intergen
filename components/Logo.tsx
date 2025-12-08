import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Wordmark */}
      {variant === 'full' && (
        <span className="font-display text-2xl font-light tracking-[0.15em] text-slate-900 dark:text-white uppercase">
          Integen
        </span>
      )}
      
      {/* Mark */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-start to-brand-end rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative h-8 w-12 rounded-lg border border-brand-start/30 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-sm">
             <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 14L11 4L16 14" stroke="url(#logo_grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Broken crossbar for futuristic look */}
                <path d="M8.5 11H13.5" stroke="url(#logo_grad)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 4V14" stroke="url(#logo_grad)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                   <linearGradient id="logo_grad" x1="6" y1="4" x2="21" y2="14" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#64E1FF"/>
                      <stop offset="1" stopColor="#009DFF"/>
                   </linearGradient>
                </defs>
             </svg>
        </div>
      </div>
    </div>
  );
};
