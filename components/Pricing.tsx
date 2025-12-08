import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const plans: PricingTier[] = [
  {
    name: 'Pro',
    price: '$25',
    description: 'For creators, developers, and solopreneurs.',
    features: [
      'Chat, Code, Image Generation',
      'Advanced Memory Context',
      'Iterative Refinement Loops',
      'Priority Compute Access',
      'Basic Ensemble Reasoning'
    ],
    highlight: true,
    cta: 'Start Pro Trial'
  },
  {
    name: 'Ultra',
    price: '$60',
    description: 'For professional teams and studios.',
    features: [
      'Everything in Pro',
      'Enhanced Ensemble Reasoning',
      '4K Visual Generation',
      'Real-time Collaboration',
      'Team Shared Workspaces'
    ],
    highlight: false,
    cta: 'Upgrade to Ultra'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations needing security & scale.',
    features: [
      'Private Cloud Hosting',
      'Dedicated Team Management',
      'API & SDK Access',
      'Advanced Analytics',
      'SSO & RBAC'
    ],
    highlight: false,
    cta: 'Contact Sales'
  }
];

const logos = [
  { name: 'ACME Corp', className: 'font-display font-black tracking-tight' },
  { name: 'Globex', className: 'font-serif italic font-bold' },
  { name: 'Soylent', className: 'font-mono font-bold tracking-tighter' },
  { name: 'Initech', className: 'font-sans font-extrabold tracking-widest' },
  { name: 'Umbrella', className: 'font-display uppercase font-light tracking-[0.3em]' },
  { name: 'Cyberdyne', className: 'font-mono font-black text-xl' },
  { name: 'Massive', className: 'font-serif font-black' },
  { name: 'Hooli', className: 'font-sans font-bold italic' },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-bg-light dark:bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
            Simple pricing for limitless creativity
          </h2>
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
            <button className="px-6 py-2 rounded-full bg-white dark:bg-slate-700 shadow-sm text-sm font-semibold text-slate-900 dark:text-white">Monthly</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Yearly</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white dark:bg-slate-800 border-2 border-brand-end shadow-2xl shadow-brand-end/20 z-10 scale-100 md:scale-105 order-first md:order-none' 
                  : 'bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-start to-brand-end text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500 ml-1">/month</span>}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 h-auto md:h-10">
                {plan.description}
              </p>
              
              <button 
                className={`w-full py-3 px-4 rounded-xl font-semibold mb-8 transition-colors ${
                  plan.highlight
                    ? 'bg-brand-end hover:bg-brand-accent text-white shadow-lg shadow-brand-end/25'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-5 h-5 text-brand-end mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Social Proof Marquee */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-10">
            Trusted by product teams, dev shops, and studios worldwide
          </p>

          {/* Fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden group">
            {/* First loop */}
            <div className="flex space-x-16 animate-marquee whitespace-nowrap py-4">
              {logos.map((logo, index) => (
                <span 
                  key={index} 
                  className={`text-2xl text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 cursor-default select-none ${logo.className}`}
                >
                  {logo.name}
                </span>
              ))}
            </div>
            {/* Second loop (duplicate for seamless scrolling) */}
            <div className="flex space-x-16 animate-marquee whitespace-nowrap py-4 ml-16" aria-hidden="true">
              {logos.map((logo, index) => (
                <span 
                  key={index} 
                  className={`text-2xl text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 cursor-default select-none ${logo.className}`}
                >
                  {logo.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};