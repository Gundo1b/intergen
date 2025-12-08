import React from 'react';
import { PenTool, GraduationCap, Terminal, Rocket, Building2 } from 'lucide-react';
import { UseCase } from '../types';

const cases: UseCase[] = [
  {
    title: 'Creators & Designers',
    description: 'Storyboard campaigns, generate moodboards, and iterate on visuals in a unified workspace.',
    icon: <PenTool size={20} />,
    category: 'Creative'
  },
  {
    title: 'Students & Learners',
    description: 'Get deep explanations, summarize complex topics, and create multimodal study guides.',
    icon: <GraduationCap size={20} />,
    category: 'Education'
  },
  {
    title: 'Developers & Engineers',
    description: 'Generate boilerplate, refactor legacy code, and debug with context-aware AI assistance.',
    icon: <Terminal size={20} />,
    category: 'Engineering'
  },
  {
    title: 'Startups & Teams',
    description: 'Ship products faster with shared workspaces and unified tools for the whole team.',
    icon: <Rocket size={20} />,
    category: 'Business'
  },
  {
    title: 'Enterprise',
    description: 'Secure, compliant AI integration with custom workflows and role-based access control.',
    icon: <Building2 size={20} />,
    category: 'Business'
  }
];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">
              Built for every kind of builder
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Whether you're writing code, designing assets, or learning a new skill, Integen adapts to your workflow.
            </p>
          </div>
          <button className="text-brand-end font-semibold hover:text-brand-start transition-colors">
            View all examples &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-brand-light dark:bg-brand-dark border border-brand-start/20 text-brand-end">
                  {useCase.icon}
                </div>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {useCase.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-end transition-colors">
                {useCase.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};