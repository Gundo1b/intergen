import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, GitBranch, PackageCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Ask or Command",
      desc: "Type naturally or use slash commands like /code to trigger specific workflows.",
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Smart Routing",
      desc: "Integen evaluates your request and pipelines it to the best-in-class model.",
      icon: <GitBranch className="w-8 h-8 text-white" />,
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Create & Ship",
      desc: "Get refined code, stunning images, or text in a single unified output pane.",
      icon: <PackageCheck className="w-8 h-8 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-bg-light dark:bg-bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-start/10 dark:bg-brand-start/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">
            From prompt to production in seconds
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 dark:from-blue-900 dark:via-purple-900 dark:to-emerald-900 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${step.color} shadow-lg shadow-${step.color.replace('bg-', '')}/30 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 relative`}>
                 {/* Inner glow */}
                 <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 {step.icon}
                 <div className="absolute -bottom-3 px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-bold shadow-md border border-slate-100 dark:border-slate-700">
                    Step 0{step.id}
                 </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};