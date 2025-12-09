import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Zap, Users, ArrowRight, WandSparkles, CircleDollarSign, ShieldCheck } from 'lucide-react';
import { Feature } from '../types';

const featureList: Feature[] = [
  {
    title: 'Unified Workspace',
    description: 'One seamless environment for chat, code execution, and image generation. Eliminate context switching forever.',
    icon: <Layers className="w-6 h-6 text-brand-end" />,
  },
  {
    title: 'Smart Model Routing',
    description: 'Integen analyzes your prompt complexity and automatically routes it to the most capable and cost-effective model.',
    icon: <Cpu className="w-6 h-6 text-brand-start" />,
  },
  {
    title: 'Accelerated Creation',
    description: 'Use slash commands (/image, /code) and reusable prompt libraries to speed up your creative workflows by 10x.',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: 'Scalable for Teams',
    description: 'Built for everyone from indie hackers to enterprise squads. Share workspaces, prompts, and memory contexts.',
    icon: <Users className="w-6 h-6 text-purple-500" />,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="mb-8">
  <h3 className="text-3xl md:text-4xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-4">
    What Our AI Can Do
  </h3>
  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
    Our AI is a versatile tool that can assist you with a wide range of tasks. You can use it to generate code, create stunning images, produce high-quality videos, and get informative answers to any question.
  </p>
</div>          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
            Why settle for one model when you can have them all?
          </h2>          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            Integen abstracts the complexity of AI model management so you can focus purely on creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featureList.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-brand-start/30 hover:shadow-lg dark:hover:shadow-brand-start/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex items-center text-brand-end text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                Learn more <ArrowRight size={14} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold font-display text-center text-slate-900 dark:text-white mb-8">
            The Power of Choice: Why Multiple Models Matter
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <WandSparkles className="w-10 h-10 text-brand-start" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Best Tool for the Job</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Different models excel at different tasks. Get the best results for writing, coding, or image generation by using a specialized model for each.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <CircleDollarSign className="w-10 h-10 text-brand-start" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Cost-Effective</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Optimize your costs by routing simpler tasks to faster, cheaper models, and reserving the most powerful models for complex requests.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <ShieldCheck className="w-10 h-10 text-brand-start" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Future-Proof</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Stay on the cutting edge. As new and improved models are released, we integrate them into our platform, giving you instant access to the latest and greatest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};