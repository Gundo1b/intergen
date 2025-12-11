import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  MinusCircle,
  Sparkles,
  Crown,
  Check,
  ArrowDown,
  ArrowRight
} from 'lucide-react';
import { Icons } from './ui/icons';
import { Comparison } from './pricing/Comparison';
import { ContactForm } from './ContactForm';

interface PricingCardProps {
  title: string;
  desc: string;
  price: string[];
  options: {
    icon: React.ReactNode;
    info: string;
  }[];
  featured?: boolean;
  showArrow?: boolean;
}

function PricingCard({ title, desc, price, options, featured = false, showArrow = false }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative border rounded-3xl p-8 ${featured
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

      {showArrow && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent border-t-brand-start animate-bounce"></div>
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

      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${featured
        ? 'bg-gradient-to-r from-brand-start to-brand-end text-white hover:shadow-lg hover:shadow-brand-start/25'
        : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
        }`}>
        Get Started
      </button>
    </motion.div>
  );
}

export function PricingSection11() {
  const [showContactForm, setShowContactForm] = useState(false);

  const cards = [
    {
      title: "pro",
      desc: "For creators, developers, and solopreneurs",
      price: ["$", "25", "month"],
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
      featured: true,
      showArrow: true,
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
    <section className="py-24 px-8 bg-bg-light dark:bg-bg-dark relative">
       {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-sm font-semibold uppercase tracking-wider mb-6">
            {/* <Sparkles size={16} /> */}
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
            <div key={key} className="relative">
              <PricingCard
                title={card.title}
                desc={card.desc}
                price={card.price}
                options={card.options}
                featured={card.featured}
                showArrow={card.showArrow}
              />
            </div>
          ))}
        </div>

        <Comparison />

      </div>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-brand-start to-brand-end rounded-3xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of creators, developers, and teams who have chosen Integen
              as their AI platform of choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-brand-end font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200 flex items-center gap-2">
                get started
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default PricingSection11;
