import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Command, Terminal, Code2, ImageIcon, MessageSquare } from 'lucide-react';
import RevealText from './RevealText';
import { TextGenerateEffect } from './TextGenerateEffect';
import { TypewriterEffectSmooth } from './TypewriterEffect';
import { SiriOrb } from './SiriOrb';
import { ParticleBackground } from './ParticleBackground';
import { PhoneMockup } from './PhoneMockup';

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
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <SiriOrb className="opacity-70 dark:opacity-80 scale-125" />
        <div className="absolute inset-0 opacity-40 dark:opacity-60 mix-blend-screen">
          <ParticleBackground />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Side: Copy & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-start/10 dark:bg-brand-start/20 border border-brand-start/20 text-brand-end dark:text-brand-start text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={12} />
              <span>Unified Intelligence</span>
            </div>

            <div className="text-2xl sm:text-4xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] lg:leading-[1.2] tracking-tight break-words max-w-full">
              <TextGenerateEffect words="One platform," />
              <br className="hidden sm:block" />
              <TypewriterEffectSmooth
                words={typewriterWords}
                className="my-1 justify-center lg:justify-start"
                textClassName="text-2xl sm:text-4xl lg:text-5xl font-bold font-display leading-[1.1] lg:leading-[1.2] tracking-tight break-words"
                cursorClassName="h-6 sm:h-10 lg:h-14"
              />
            </div>
            <h1 className="sr-only">One platform, endless creative intelligence.</h1>

            <div className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-lg lg:max-w-xl leading-relaxed mx-auto lg:mx-0">
              <RevealText direction="up" delay={800}>
                Unified chat, code, and image generation. Stop juggling multiple subscriptions—Integen routes your prompts to the best models automatically.
              </RevealText>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Start for free
            </button>
            <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
              <Play size={20} className="group-hover:text-brand-end transition-colors" />
              Watch 60s demo
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Powered by top LLMs</span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 w-12 sm:w-24"></div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {models.map(model => (
                <span key={model} className="px-3 py-1 text-xs font-medium rounded-md bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm">
                  {model}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Realistic Device Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full flex items-center justify-center z-10 perspective-1000 mt-8 lg:mt-0"
        >
          {/* Laptop Mockup */}
          <motion.div
            animate={{ y: [0, -8, 0], rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 sm:right-12 h-[280px] sm:h-[380px] lg:h-[450px] bg-[#1e1e1e] rounded-[1.5rem] shadow-2xl overflow-hidden z-10 border-[6px] border-[#2a2a2a] ring-1 ring-white/10"
            style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' }}
          >
            {/* Screen Gloss Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30"></div>

            {/* Laptop UI Header */}
            <div className="h-8 bg-[#252526] border-b border-[#1e1e1e] flex items-center px-4 justify-between z-20 relative">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex items-center gap-2 text-[#858585] text-[10px] font-mono">
                <Command size={10} />
                <span>Integen Studio</span>
              </div>
              <div className="w-3"></div>
            </div>

            {/* Laptop Content - IDE Style */}
            <div className="flex h-full bg-[#1e1e1e] font-mono text-sm relative z-10">
              {/* Sidebar */}
              <div className="w-14 sm:w-48 bg-[#252526] border-r border-[#1e1e1e] hidden sm:flex flex-col">
                <div className="p-3 text-[#CCCCCC] text-xs font-bold uppercase tracking-wider">Explorer</div>
                <div className="px-2 space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1 bg-[#37373d] rounded text-[#E1E4E8] text-xs">
                    <span className="text-brand-end">TS</span>
                    <span>generator.ts</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-[#858585] text-xs hover:bg-[#2a2d2e] rounded transition-colors">
                    <span className="text-yellow-400">JS</span>
                    <span>config.js</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-[#858585] text-xs hover:bg-[#2a2d2e] rounded transition-colors">
                    <span className="text-blue-400">CSS</span>
                    <span>styles.css</span>
                  </div>
                </div>
              </div>

              {/* Main Code Area */}
              <div className="flex-1 p-4 sm:p-6 text-xs sm:text-sm overflow-hidden">
                <div className="flex gap-4 mb-4 text-[#858585] text-xs border-b border-white/5 pb-2">
                  <span className="text-white border-b border-brand-end pb-2">generator.ts</span>
                  <span>utils.ts</span>
                </div>

                <div className="space-y-1 font-mono">
                  <div className="flex">
                    <span className="text-[#858585] w-6 select-none">1</span>
                    <span className="text-[#C586C0]">import</span>{" "}
                    <span className="text-[#9CDCFE]">{`{ IntegenAI }`}</span>{" "}
                    <span className="text-[#C586C0]">from</span>{" "}
                    <span className="text-[#CE9178]">'@integen/sdk'</span>;
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-6 select-none">2</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-6 select-none">3</span>
                    <span className="text-[#569CD6]">const</span>{" "}
                    <span className="text-[#DCDCAA]">generateSolution</span>{" "}
                    <span className="text-[#D4D4D4]">=</span>{" "}
                    <span className="text-[#C586C0]">async</span>{" "}
                    <span className="text-[#D4D4D4]">(</span>
                    <span className="text-[#9CDCFE]">prompt</span>
                    <span className="text-[#D4D4D4]">:</span>{" "}
                    <span className="text-[#4EC9B0]">string</span>
                    <span className="text-[#D4D4D4]">)</span>{" "}
                    <span className="text-[#D4D4D4]">{`=>`}</span>{" "}
                    <span className="text-[#D4D4D4]">{`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-6 select-none">4</span>
                    <span className="text-[#D4D4D4] pl-4">// Automatically routes to best model</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-6 select-none">5</span>
                    <span className="text-[#C586C0] pl-4">const</span>{" "}
                    <span className="text-[#9CDCFE]">response</span>{" "}
                    <span className="text-[#D4D4D4]">=</span>{" "}
                    <span className="text-[#C586C0]">await</span>{" "}
                    <span className="text-[#4EC9B0]">IntegenAI</span>
                    <span className="text-[#D4D4D4]">.</span>
                    <span className="text-[#DCDCAA]">create</span>
                    <span className="text-[#D4D4D4]">(</span>
                    <span className="text-[#9CDCFE]">prompt</span>
                    <span className="text-[#D4D4D4]">);</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-6 select-none">6</span>
                    <span className="text-[#C586C0] pl-4">return</span>{" "}
                    <span className="text-[#9CDCFE]">response</span>
                    <span className="text-[#D4D4D4]">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#858585] w-6 select-none">7</span>
                    <span className="text-[#D4D4D4]">{`}`}</span>;
                  </div>
                  <div className="flex mt-2">
                    <span className="text-[#858585] w-6 select-none">8</span>
                    <span className="w-1.5 h-4 bg-brand-end animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <PhoneMockup animationDelay={1}>
            {/* Chat Area */}
            <div className="flex-1 p-4 space-y-4 overflow-hidden flex flex-col justify-end pb-20">
              {/* User Message */}
              <div className="self-end max-w-[85%]">
                <div className="bg-[#2C2C2E] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-xs leading-relaxed shadow-sm">
                  Generate a futuristic cyberpunk city with neon lights.
                </div>
                <span className="text-[10px] text-gray-500 mt-1 block text-right">Just now</span>
              </div>

              {/* Bot Response (Thinking) */}
              <div className="self-start max-w-[90%]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-start to-brand-end flex items-center justify-center">
                    <Sparkles size={10} className="text-white" />
                  </div>
                  <span className="text-[10px] text-gray-400">Integen AI</span>
                </div>
                <div className="bg-[#2C2C2E] px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm w-fit border border-white/5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-4 left-4 right-4 h-12 bg-[#1C1C1E]/90 backdrop-blur-md rounded-full border border-white/10 flex items-center px-4 gap-2 shadow-lg">
              <div className="w-6 h-6 rounded-full bg-[#2C2C2E] flex items-center justify-center text-gray-400">
                <ImageIcon size={12} />
              </div>
              <div className="h-4 w-[1px] bg-gray-700"></div>
              <div className="flex-1 text-[11px] text-gray-500">Type a message...</div>
              <div className="w-7 h-7 rounded-full bg-brand-end flex items-center justify-center text-white">
                <Play size={10} fill="currentColor" />
              </div>
            </div>
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  );
};
