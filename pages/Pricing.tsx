import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  Zap, 
  Shield, 
  Users, 
  Settings, 
  Crown, 
  Star,
  ArrowRight,
  MessageSquare,
  Code,
  Image,
  Brain,
  RefreshCw,
  Gauge,
  Lightbulb,
  Globe,
  Lock,
  Key,
  Server,
  Award,
  Headphones,
  CheckCircle
} from 'lucide-react';

const proFeatures = [
  {
    icon: MessageSquare,
    text: "Chat Intelligence"
  },
  {
    icon: Code,
    text: "Code Intelligence"
  },
  {
    icon: Image,
    text: "Image Generation"
  },
  {
    icon: Brain,
    text: "Memory System"
  },
  {
    icon: RefreshCw,
    text: "Refinement Loops"
  },
  {
    icon: Gauge,
    text: "Priority Compute"
  },
  {
    icon: Lightbulb,
    text: "Ensemble Reasoning"
  },
  {
    icon: Zap,
    text: "Fast Response Speed"
  }
];

const ultraFeatures = [
  {
    icon: CheckCircle,
    text: "Everything in Pro"
  },
  {
    icon: Image,
    text: "4K Visual Generation"
  },
  {
    icon: Users,
    text: "Advanced Collaboration Tools"
  },
  {
    icon: Settings,
    text: "Multi-user Workspaces"
  },
  {
    icon: Server,
    text: "Extended Compute Limits"
  },
  {
    icon: Sparkles,
    text: "Faster Model Routing"
  }
];

const enterpriseFeatures = [
  {
    icon: Lock,
    text: "Private Hosting"
  },
  {
    icon: Users,
    text: "Team Admin & Management"
  },
  {
    icon: Key,
    text: "API & SDK Access"
  },
  {
    icon: Shield,
    text: "RBAC (Role-Based Access Control)"
  },
  {
    icon: Globe,
    text: "Multi-region Deployment"
  },
  {
    icon: Award,
    text: "Compliance Certifications"
  },
  {
    icon: Headphones,
    text: "Dedicated Integration Support"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Aurora Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-start/20 dark:from-brand-start/30 to-brand-end/20 dark:to-brand-end/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 dark:from-purple-500/20 to-pink-500/10 dark:to-pink-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-cyan-400/5 dark:from-cyan-400/10 to-blue-600/5 dark:to-blue-600/10 rounded-full blur-[200px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
              <Sparkles size={16} />
              <span>Simple Pricing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Simple, Flexible Pricing for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Every Creator
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              One platform. One subscription. Endless creative intelligence.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-start/10 to-brand-end/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-start/10 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pro</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">$25</span>
                    <span className="text-slate-600 dark:text-slate-400">/month</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Perfect for creators, developers, startups</p>
                </div>

                <div className="space-y-4 mb-8">
                  {proFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-start to-brand-end p-1 flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <feature.icon size={16} className="text-brand-start" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Pro
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* Ultra Plan - Recommended */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group lg:scale-105"
            >
              {/* Aurora glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-brand-start/20 to-brand-end/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white text-sm font-semibold">
                  <Crown size={16} />
                  <span>Most Popular</span>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-white/80 dark:from-slate-800/80 to-brand-start/5 dark:to-brand-start/10 backdrop-blur-sm border-2 border-brand-start/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-start/20 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ultra</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">$60</span>
                    <span className="text-slate-600 dark:text-slate-400">/month</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Ideal for teams, studios, professionals</p>
                </div>

                <div className="space-y-4 mb-8">
                  {ultraFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-start to-brand-end p-1 flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <feature.icon size={16} className="text-brand-start" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Ultra
                  <Sparkles size={18} />
                </button>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-start/5 to-brand-end/5 rounded-3xl"></div>
                
                <div className="relative text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-xs font-semibold uppercase tracking-wider mb-4">
                    <Star size={14} />
                    <span>Premium</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">Custom</span>
                    <span className="text-slate-400">Pricing</span>
                  </div>
                  <p className="text-sm text-slate-300">For organizations, companies, education</p>
                </div>

                <div className="space-y-4 mb-8">
                  {enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-start to-brand-end p-1 flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <feature.icon size={16} className="text-brand-start" />
                        <span className="text-slate-300 text-sm">{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 px-6 rounded-2xl border-2 border-brand-start/50 text-brand-start font-semibold text-lg hover:bg-brand-start/10 hover:border-brand-start transition-all duration-300 flex items-center justify-center gap-2">
                  Contact Sales
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
                <Zap size={16} />
                <span>All Plans Include</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                Everything you need for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                  creative intelligence
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
                Join thousands of creators, developers, and businesses who have transformed their workflows with Integen AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <Sparkles size={20} />
                  Start Free Trial
                </button>
                <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                  View Documentation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
