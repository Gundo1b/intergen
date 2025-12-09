import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Command, Terminal, Code2, ImageIcon, MessageSquare, Phone, Wifi, Battery, Signal } from 'lucide-react';
import RevealText from './RevealText';
import { TextGenerateEffect } from './TextGenerateEffect';
import { TypewriterEffectSmooth } from './TypewriterEffect';
import { SiriOrb } from './SiriOrb';
import { ParticleBackground } from './ParticleBackground';

const models = ['OpenAI', 'Anthropic', 'Google', 'Meta', 'Mistral'];

export const Hero: React.FC = () => {
  const [activeModel, setActiveModel] = useState('Anthropic');

  const typewriterWords = [
    {
      text: "endless",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end",
    },
    {
      text: "creative",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end",
    },
    {
      text: "intelligence.",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end",
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <SiriOrb className="opacity-70 dark:opacity-80 scale-125" />
        <div className="absolute inset-0 opacity-40 dark:opacity-60 mix-blend-screen">
          <ParticleBackground />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Copy & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 z-10 order-2 lg:order-1"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-start/10 dark:bg-brand-start/20 border border-brand-start/20 text-brand-end dark:text-brand-start text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              <Sparkles size={12} />
              <span>Unified Intelligence</span>
            </div>

            <div className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] lg:leading-[1.2] tracking-tight break-words max-w-full">
              <TextGenerateEffect words="One platform," />
              <br className="hidden sm:block" />
              <TypewriterEffectSmooth
                words={typewriterWords}
                className="my-1 justify-center lg:justify-start"
                textClassName="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-[1.1] lg:leading-[1.2] tracking-tight break-words"
                cursorClassName="h-8 sm:h-10 lg:h-14"
              />
            </div>
            <h1 className="sr-only">One platform, endless creative intelligence.</h1>

            <div className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-lg lg:max-w-xl leading-relaxed mx-auto lg:mx-0 px-4 sm:px-0">
              <RevealText direction="up" delay={800}>
                Unified Chat, Code, Image and Video generation. Stop juggling multiple subscriptions Integen routes your prompts to the best models automatically.
              </RevealText>
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
              <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Powered by top LLMs</span>
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

        {/* Right Side: Real Phone Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[350px] sm:h-[450px] lg:h-[650px] w-full flex items-center justify-center z-10 perspective-1000 mt-4 lg:mt-0 order-1 lg:order-2"
        >
          {/* Laptop Mockup - Hidden on mobile, optimized for tablet+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-0 left-0 right-0 lg:right-12 h-[200px] sm:h-[300px] lg:h-[450px] bg-[#1e1e1e] rounded-[1.5rem] shadow-2xl overflow-hidden z-10 border-[4px] sm:border-[6px] border-[#2a2a2a] ring-1 ring-white/10 hidden sm:block"
            style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' }}
          >
            {/* Screen Gloss Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30"></div>

            {/* Laptop UI Header */}
            <div className="h-6 sm:h-8 bg-[#252526] border-b border-[#1e1e1e] flex items-center px-2 sm:px-4 justify-between z-20 relative">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-[#858585] text-[8px] sm:text-[10px] font-mono">
                <Command size={8} className="sm:w-[10px] sm:h-[10px]" />
                <span className="hidden sm:inline">Integen Studio</span>
                <span className="sm:hidden">Studio</span>
              </div>
              <div className="w-2 sm:w-3"></div>
            </div>

            {/* Laptop Content - IDE Style */}
            <div className="flex h-full bg-[#1e1e1e] font-mono text-xs sm:text-sm relative z-10">
              {/* Sidebar - Hidden on small screens */}
              <div className="w-12 sm:w-48 bg-[#252526] border-r border-[#1e1e1e] hidden md:flex flex-col">
                <div className="p-2 sm:p-3 text-[#CCCCCC] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Explorer</div>
                <div className="px-1.5 sm:px-2 space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-1 bg-[#37373d] rounded text-[#E1E4E8] text-[9px] sm:text-xs">
                    <span className="text-brand-end">TS</span>
                    <span className="hidden sm:inline">generator.ts</span>
                    <span className="sm:hidden">gen.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-1 text-[#858585] text-[9px] sm:text-xs hover:bg-[#2a2d2e] rounded transition-colors">
                    <span className="text-yellow-400">JS</span>
                    <span className="hidden sm:inline">config.js</span>
                    <span className="sm:hidden">cfg.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-1 text-[#858585] text-[9px] sm:text-xs hover:bg-[#2a2d2e] rounded transition-colors">
                    <span className="text-blue-400">CSS</span>
                    <span className="hidden sm:inline">styles.css</span>
                    <span className="sm:hidden">style.css</span>
                  </div>
                </div>
              </div>

              {/* Main Code Area */}
              <div className="flex-1 p-2 sm:p-4 lg:p-6 text-[8px] sm:text-xs lg:text-sm overflow-hidden">
                <div className="flex gap-2 sm:gap-4 mb-2 sm:mb-4 text-[#858585] text-[7px] sm:text-xs lg:text-sm border-b border-white/5 pb-1 sm:pb-2">
                  <span className="text-white border-b border-brand-end pb-1">generator.ts</span>
                  <span className="hidden sm:inline">utils.ts</span>
                </div>

                <div className="space-y-0.5 sm:space-y-1 font-mono leading-tight">
                  <div className="flex">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">1</span>
                    <span className="text-[#C586C0]">import</span>{" "}
                    <span className="text-[#9CDCFE]">{`{ IntegenAI }`}</span>{" "}
                    <span className="text-[#C586C0]">from</span>{" "}
                    <span className="text-[#CE9178]\">'@integen/sdk'</span>;
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">2</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">3</span>
                    <span className="text-[#569CD6]\">const</span>{" "}
                    <span className="text-[#DCDCAA]\">generate</span>{" "}
                    <span className="text-[#D4D4D4]\">=</span>{" "}
                    <span className="text-[#C586C0]\">async</span>{" "}
                    <span className="text-[#D4D4D4]\">(</span>
                    <span className="text-[#9CDCFE]\">prompt</span>
                    <span className="text-[#D4D4D4]\">)</span>{" "}
                    <span className="text-[#D4D4D4]\">{`=>`}</span>{" "}
                    <span className="text-[#D4D4D4]\">{`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">4</span>
                    <span className="text-[#D4D4D4] pl-2 sm:pl-4\">// Route to best model</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">5</span>
                    <span className="text-[#C586C0] pl-2 sm:pl-4\">const</span>{" "}
                    <span className="text-[#9CDCFE]\">res</span>{" "}
                    <span className="text-[#D4D4D4]\">=</span>{" "}
                    <span className="text-[#C586C0]\">await</span>{" "}
                    <span className="text-[#4EC9B0]\">IntegenAI</span>
                    <span className="text-[#D4D4D4]\">.</span>
                    <span className="text-[#DCDCAA]\">create</span>
                    <span className="text-[#D4D4D4]\">(</span>
                    <span className="text-[#9CDCFE]\">prompt</span>
                    <span className="text-[#D4D4D4]\">);</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">6</span>
                    <span className="text-[#C586C0] pl-2 sm:pl-4\">return</span>{" "}
                    <span className="text-[#9CDCFE]\">res</span>
                    <span className="text-[#D4D4D4]\">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">7</span>
                    <span className="text-[#D4D4D4]\">{`}`}</span>;
                  </div>
                  <div className="flex mt-1 sm:mt-2">
                    <span className="text-[#858585] w-4 sm:w-6 select-none">8</span>
                    <span className="w-1 h-2 sm:w-1.5 sm:h-4 bg-brand-end animate-pulse\"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real Phone Interface - No Mockup, Just Phone UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 right-4 sm:right-8 lg:right-20 w-[280px] sm:w-[320px] lg:w-[360px] h-[500px] sm:h-[560px] lg:h-[620px] bg-black rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden z-20 border border-gray-800"
          >
            {/* Real Phone Screen Content */}
            <div className="h-full w-full bg-[#000000] flex flex-col">
              
              {/* Real iPhone Status Bar */}
              <div className="h-11 flex justify-between items-center px-6 pt-2 text-white text-sm font-semibold z-20">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <Signal className="w-4 h-4" />
                  <Wifi className="w-4 h-4" />
                  <div className="flex items-center gap-1">
                    <Battery className="w-6 h-3" />
                    <span className="text-xs">100%</span>
                  </div>
                </div>
              </div>

              {/* Real App Header */}
              <div className="bg-[#1C1C1E] border-b border-[#2C2C2E] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-start to-brand-end flex items-center justify-center">
                    <Sparkles size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-base font-semibold">Integen AI</h3>
                    <p className="text-gray-400 text-sm">Connected • Online</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                    <MessageSquare size={16} className="text-gray-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                    <Terminal size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#000000]">
                
                {/* Welcome Message */}
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-start to-brand-end flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">Welcome to Integen AI</h4>
                  <p className="text-gray-400 text-sm">Your unified AI platform for Chat, Code, images and Videos</p>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[75%]">
                    <div className="bg-[#2C2C2E] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-sm">
                      Generate a futuristic cyberpunk city with neon lights.
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block text-right">Just now</span>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start">
                  <div className="max-w-[80%]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-start to-brand-end flex items-center justify-center">
                        <Sparkles size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-400">Integen AI</span>
                    </div>
                    <div className="bg-[#2C2C2E] px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-white/5">
                      <div className="flex gap-1 mb-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <p className="text-white text-sm">I'll create a stunning cyberpunk city for you. Give me a moment...</p>
                    </div>
                  </div>
                </div>

                {/* Generated Image Preview */}
                <div className="flex justify-center">
                  <div className="w-48 h-32 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 rounded-lg overflow-hidden border border-white/10">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-cyan-600/30 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-8 h-8 text-white/80 mx-auto mb-1" />
                        <p className="text-white/80 text-xs">Cyberpunk City</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Follow-up Message */}
                <div className="flex justify-end">
                  <div className="max-w-[75%]">
                    <div className="bg-[#2C2C2E] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-sm">
                      Now generate the Python code to create this
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block text-right">1m ago</span>
                  </div>
                </div>
              </div>

              {/* Real Input Area */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1C1C1E] border-t border-[#2C2C2E]">
                <div className="flex items-center gap-3 h-12 bg-[#2C2C2E] rounded-full px-4">
                  <button className="w-8 h-8 rounded-full bg-[#3A3A3C] flex items-center justify-center text-gray-400 hover:bg-[#4A4A4C] transition-colors">
                    <ImageIcon size={16} />
                  </button>
                  <input 
                    type="text" 
                    placeholder="Ask anything..." 
                    className="flex-1 bg-transparent text-white text-sm placeholder-gray-400 outline-none"
                  />
                  <button className="w-10 h-10 rounded-full bg-brand-end flex items-center justify-center text-white hover:bg-[#FF6B6B] transition-colors">
                    <Play size={14} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
