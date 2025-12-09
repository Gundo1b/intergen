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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
    >
      {/* Screen Glare */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-30 rounded-[2.5rem]"></div>

      {/* Dynamic Island - iPhone 14+ style */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1e1e1e]"></div>
        <div className="w-4 h-1 bg-[#1e1e1e] rounded-full"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#1e1e1e]"></div>
      </div>

      {/* Mobile Content */}
      <div className="h-full w-full bg-[#000000] flex flex-col relative">
        {/* Enhanced Status Bar with realistic elements */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-white text-[10px] font-medium z-20">
          <div className="flex items-center gap-1">
            <span className="font-semibold">9:41</span>
          </div>
          <div className="flex items-center gap-1.5">
            {/* Signal bars */}
            <div className="flex gap-0.5">
              <div className="w-0.5 h-1 bg-white rounded-full"></div>
              <div className="w-0.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-0.5 h-2 bg-white rounded-full"></div>
              <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
            </div>
            {/* WiFi */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-0.5 border border-white rounded-full"></div>
              <div className="w-2 h-0.5 border border-white rounded-full mt-0.5"></div>
              <div className="w-1 h-0.5 border border-white rounded-full mt-0.5"></div>
            </div>
            {/* Battery */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-3 border border-white rounded-sm relative">
                <div className="w-4 h-full bg-white rounded-sm"></div>
                <div className="absolute -right-0.5 top-0.5 w-0.5 h-1.5 bg-white rounded-r-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>

      {/* Enhanced Side Buttons (Purely visual, more realistic) */}
      <div className="absolute top-20 -right-1.5 w-0.5 h-8 bg-gray-700 rounded-r-sm opacity-80"></div> {/* Power Button */}
      <div className="absolute top-32 -right-1.5 w-0.5 h-12 bg-gray-700 rounded-r-sm opacity-60"></div> {/* Volume Up */}
      <div className="absolute top-48 -right-1.5 w-0.5 h-12 bg-gray-700 rounded-r-sm opacity-60"></div> {/* Volume Down */}
      <div className="absolute top-32 -left-1.5 w-0.5 h-6 bg-gray-700 rounded-l-sm opacity-80"></div> {/* Silent Switch */}
      
      {/* Bottom speakers */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-8 h-0.5 bg-gray-700 rounded-full opacity-60"></div>
        <div className="w-8 h-0.5 bg-gray-700 rounded-full opacity-60"></div>
      </div>

      {/* Lightning/USB Port */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-700 rounded-full opacity-80"></div>
    </motion.div>
  );
};