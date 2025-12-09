import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import PhoneImage from '../pictures/phone.png';

const models = ['GPT-4o/GPT-5', 'Claude 3.7/4', 'Gemini 2.5 Pro', 'Llama 3.3', 'DeepSeek', 'Qwen'];

export const Hero: React.FC = () => {
  const [activeModel, setActiveModel] = useState('Anthropic');

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Simple gradient background instead of complex components */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute inset-0 opacity-40 dark:opacity-60">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Copy & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 z-10 order-1 lg:order-1"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-start/10 dark:bg-brand-start/20 border border-brand-start/20 text-brand-end dark:text-brand-start text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              <Sparkles size={12} />
              <span>Unified Intelligence</span>
            </div>

            <div className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] lg:leading-[1.2] tracking-tight break-words max-w-full">
              <span className="text-slate-900 dark:text-white">One platform,</span>
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end"
              >
                endless creative intelligence.
              </motion.span>
            </div>

            <div className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-lg lg:max-w-xl leading-relaxed mx-auto lg:mx-0 px-4 sm:px-0">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Unified Chat, Code, Image and Video generation. Stop juggling multiple subscriptions Integen routes your prompts to the best models automatically.
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none justify-center lg:justify-start mt-6">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 w-full sm:w-auto touch-manipulation">
              Start for free
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-base sm:text-lg hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700 transition-all duration-200 flex items-center justify-center gap-2 group w-full sm:w-auto touch-manipulation">
              <Play size={18} className="group-hover:text-brand-end transition-colors" />
              Watch demo
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4 mt-8">
            <div className="flex items-center gap-3 justify-center lg:justify-start px-4 sm:px-0">
              <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Powered by</span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 w-8 sm:w-24"></div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start px-2 sm:px-0">
              {models.map(model => (
                <span key={model} className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-md bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm">
                  {model}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[750px] sm:h-[800px] lg:h-[650px] w-full flex items-center justify-center z-10 mt-4 lg:mt-0 order-2 lg:order-2"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full"
          >
            <img
              src={PhoneImage}
              alt="Phone Mockup"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
