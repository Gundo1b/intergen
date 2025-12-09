import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
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

const getPlanIcon = (name: string) => {
  switch (name) {
    case 'Pro': return <Zap className="w-6 h-6" />;
    case 'Ultra': return <Star className="w-6 h-6" />;
    case 'Enterprise': return <Crown className="w-6 h-6" />;
    default: return null;
  }
};

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

        {/* Stepped Pricing Layout */}
        <div className="relative">
          {/* Background Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-200 via-brand-start via-brand-end to-slate-200 dark:from-slate-700 dark:via-brand-start dark:via-brand-end dark:to-slate-700 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 relative z-10">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`
                  relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105
                  ${plan.highlight 
                    ? 'border-brand-end lg:border-brand-start lg:border-brand-end shadow-2xl scale-105 lg:scale-110 z-20' 
                    : 'border-slate-200 dark:border-slate-700 hover:border-brand-start/50'
                  }
                  ${index === 0 ? 'lg:self-start mt-8' : index === 1 ? 'lg:self-center' : 'lg:self-end'}
                `}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-start to-brand-end text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                    plan.highlight 
                      ? 'bg-gradient-to-r from-brand-start to-brand-end text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {getPlanIcon(plan.name)}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${
                      plan.highlight ? 'text-brand-end' : 'text-slate-900 dark:text-white'
                    }`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-slate-500 dark:text-slate-400 ml-1">/month</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 shrink-0 mt-0.5 ${
                          plan.highlight ? 'text-brand-end' : 'text-green-500'
                        }`} />
                        <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`
                      w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105
                      ${plan.highlight
                        ? 'bg-gradient-to-r from-brand-start to-brand-end hover:from-brand-end hover:to-brand-accent text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-600 hover:border-brand-start'
                      }
                    `}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
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