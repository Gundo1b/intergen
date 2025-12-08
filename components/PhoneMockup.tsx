import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Command, Terminal, Code2, ImageIcon, MessageSquare } from 'lucide-react';

interface PhoneMockupProps {
  children: React.ReactNode;
  animationDelay?: number;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, animationDelay = 1, className }) => {
  return (
    <motion.div
      className={`absolute bottom-[-10px] right-2 sm:right-6 lg:right-16 w-[200px] sm:w-[240px] h-[400px] sm:h-[480px] bg-black rounded-[3rem] border-[8px] border-[#383838] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden z-20 ring-1 ring-white/20
      ${className}`}
      style={{ transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' }}
    >
      {/* Screen Glare */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-30 rounded-[2.5rem]"></div>

      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1e1e1e]"></div>
      </div>

      {/* Mobile Content */}
      <div className="h-full w-full bg-[#000000] flex flex-col relative">
        {/* Status Bar */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-white text-[10px] font-medium z-20">
          <span>9:41</span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full border border-white"></div>
            <div className="w-3 h-3 rounded-full border border-white"></div>
          </div>
        </div>

        {children}
      </div>

      {/* Side Buttons (Purely visual, adjust positioning as needed) */}
      <div className="absolute top-24 -right-2 w-1 h-10 bg-gray-700 rounded-r-sm"></div> {/* Power Button */}
      <div className="absolute top-36 -right-2 w-1 h-16 bg-gray-700 rounded-r-sm"></div> {/* Volume Up/Down */}
      <div className="absolute top-36 -left-2 w-1 h-8 bg-gray-700 rounded-l-sm"></div> {/* Silent Switch */}
    </motion.div>
  );
};