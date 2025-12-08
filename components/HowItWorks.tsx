import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, MessageSquare, PackageCheck, Zap } from 'lucide-react';

const workflowSteps = [
  {
    icon: GitBranch,
    title: "1. Smart Routing",
    description: "Integen understands context and routes tasks to the right AI model, ensuring optimal results every time.",
  },
  {
    icon: MessageSquare,
    title: "2. Describe What You Need",
    description: "Users type instructions, upload references, or paste code. The system interprets intent with ensemble reasoning for the best possible response.",
    examples: [
      "“Design a cyberpunk-style logo.”",
      "“Fix this API function.”",
      "“Generate a video transition scene.”",
    ],
  },
  {
    icon: PackageCheck,
    title: "3. Integen Generates Results",
    description: "Instantly receive high-quality chat responses, code, images, or text in a unified, animated interface.",
  },
  {
    icon: Zap,
    title: "4. Iterate & Refine",
    description: "Easily refine your results with further commands. Loop through changes until you're satisfied, then export in your desired format.",
  },
];

export const HowItWorks: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-sky-400 to-blue-600 rounded-full blur-[200px] opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-sky-300 to-blue-400 text-transparent bg-clip-text">
            A Seamless Workflow
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Everything happens in one unified workspace — no switching apps, no subscriptions stacking, no lost creativity.
          </p>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workflowSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md flex flex-col"
              variants={itemVariants}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-400/20 to-blue-600/20 blur-lg"></div>
              <div className="relative flex-grow">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg mb-6">
                  <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <step.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{step.description}</p>
              </div>
              {step.examples && (
                <div className="relative mt-4 flex-shrink-0">
                  <div className="absolute -top-4 -bottom-4 -left-8 -right-8 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10"></div>
                  <div className="relative p-4 rounded-lg">
                    <p className="text-xs font-semibold text-sky-300 mb-2">Examples:</p>
                    <ul className="space-y-2">
                      {step.examples.map((example, i) => (
                        <li key={i} className="text-xs text-gray-300 font-mono">{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

