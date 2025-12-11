import React from 'react';
import { PenTool, GraduationCap, Terminal, Rocket, Building2 } from 'lucide-react';
import { StackedCards } from './ui/stacked-cards';

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
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

        <StackedCards items={items} />
      </div>
    </section>
  );
};

const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full h-full relative">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-center"
    />
  </div>
);

const items = [
  {
    id: 1,
    title: "Creators & Designers",
    description: "Storyboard campaigns, generate moodboards, and iterate on visuals in a unified workspace.",
    content: <CardImage src="/images/creators-designers.png" alt="Creators & Designers" />,
    icon: <PenTool size={20} className="text-pink-500" />,
  },
  {
    id: 4,
    title: "Startups & Teams",
    description: "Ship products faster with shared workspaces and unified tools for the whole team.",
    content: <CardImage src="/images/startups-teams.png" alt="Startups & Teams" />,
    icon: <Rocket size={20} className="text-orange-500" />,
  },
  {
    id: 5,
    title: "Enterprise",
    description: "Secure, compliant AI integration with custom workflows and role-based access control.",
    content: <CardImage src="/images/enterprise.png" alt="Enterprise" />,
    icon: <Building2 size={20} className="text-slate-500" />,
  },
  {
    id: 2,
    title: "Students & Learners",
    description: "Get deep explanations, summarize complex topics, and create multimodal study guides.",
    content: <CardImage src="/images/students-learners.png" alt="Students & Learners" />,
    icon: <GraduationCap size={20} className="text-blue-500" />,
  },
  {
    id: 3,
    title: "Developers & Engineers",
    description: "Generate boilerplate, refactor legacy code, and debug with context-aware AI assistance.",
    content: <CardImage src="/images/developers-engineers.png" alt="Developers & Engineers" />,
    icon: <Terminal size={20} className="text-green-500" />,
  },
];
