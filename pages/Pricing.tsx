import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  MinusCircle,
  Sparkles,
  Crown,
  Check
} from 'lucide-react';

interface PricingCardProps {
  title: string;
  desc: string;
  price: string[];
  options: {
    icon: React.ReactNode;
    info: string;
  }[];
  featured?: boolean;
}

function PricingCard({ title, desc, price, options, featured = false }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative border rounded-3xl p-8 ${
        featured 
          ? 'border-brand-start/50 shadow-xl shadow-brand-start/10 scale-105' 
          : 'border-slate-200/50 dark:border-slate-700/50'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white text-xs font-semibold">
            <Crown size={14} />
            <span>Most Popular</span>
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 capitalize">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{desc}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-slate-900 dark:text-white">{price[0]}{price[1]}</span>
          <span className="text-lg font-semibold text-slate-600 dark:text-slate-400">/{price[2]}</span>
        </div>
      </div>
      
      <ul className="flex flex-col gap-3 mb-8">
        {options.map((option, key) => (
          <li key={key} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            {option.icon}
            <span className="text-sm font-normal">{option.info}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
        featured 
          ? 'bg-gradient-to-r from-brand-start to-brand-end text-white hover:shadow-lg hover:shadow-brand-start/25' 
          : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
      }`}>
        Get Started
      </button>
    </motion.div>
  );
}

export function PricingSection11() {
  const cards = [
    {
      title: "pro",
      desc: "For creators, developers, and solopreneurs",
      price: ["$", "25", "month"],
      featured: true,
      options: [
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Chat, Code, Image Generation",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Advanced Memory Context",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Iterative Refinement Loops",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Priority Compute Access",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Basic Ensemble Reasoning",
        },
      ],
    },
    {
      title: "ultra",
      desc: "For professional teams and studios",
      price: ["$", "60", "month"],
      options: [
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Everything in Pro",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Enhanced Ensemble Reasoning",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "4K Visual Generation",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Real-time Collaboration",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Team Shared Workspaces",
        },
      ],
    },
    {
      title: "organizations & education",
      desc: "Custom Private Hosting, Team Management, API & SDK, Analytics Dashboard, White Labelling, Role-based Access Control (RBAC), Multi-region Deployment, Compliance Certifications, Integration Support",
      price: ["", "Custom", ""],
      options: [
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Custom Private Hosting",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Team Management",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "API & SDK Access",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Analytics Dashboard",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "White Labelling",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Role-based Access Control (RBAC)",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Multi-region Deployment",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Compliance Certifications",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          info: "Integration Support",
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-8 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={16} />
            <span>Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
            Invest in a plan that's as ambitious as your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
              corporate goals
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Compare the benefits and features of each plan below to find the ideal
            match for your business's budget and ambitions.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {cards.map((card, key) => (
            <div key={key}>
              <PricingCard
                title={card.title}
                desc={card.desc}
                price={card.price}
                options={card.options}
                featured={card.featured}
              />
            </div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            You have Free Unlimited Updates and Premium Support on each package.
            You also have 30 days to request a refund.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingSection11;