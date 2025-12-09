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
      <img src="/logo.png" alt="Integen Logo" className="h-10" />
    </div>
  );
};
