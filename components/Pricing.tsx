import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  MinusCircle,
  Sparkles,
  Crown,
  Check,
  ArrowDown
} from 'lucide-react';
import { Icons } from './ui/icons';

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
        
        {/* Why You Need This Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white mb-8">
              Why You Need This <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">AI Platform</span>
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              AI is not just for chat anymore. Stop limiting yourself to text conversations when you can unlock the full potential of artificial intelligence.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Beyond Conversations",
                  description: "Generate stunning visuals, create videos, write and debug code, analyze data, and solve complex problems - all from one platform.",
                  icon: <Icons.rocket className="h-10 w-10 text-brand-start" />
                },
                {
                  title: "Cost Efficiency",
                  description: "Stop paying for multiple AI subscriptions. Get access to the best models for each task at a fraction of the cost.",
                  icon: <Icons.money className="h-10 w-10 text-brand-start" />
                },
                {
                  title: "Smart Routing",
                  description: "Our AI automatically chooses the best model for your specific needs, ensuring optimal results every time.",
                  icon: <Icons.brain className="h-10 w-10 text-brand-start" />
                },
                {
                  title: "Creative Freedom",
                  description: "From image generation to video creation, from code writing to content creation - express your ideas without limits.",
                  icon: <Icons.palette className="h-10 w-10 text-brand-start" />
                },
                {
                  title: "Professional Tools",
                  description: "Access enterprise-grade AI capabilities with team collaboration, project management, and advanced analytics.",
                  icon: <Icons.lightning className="h-10 w-10 text-brand-start" />
                },
                {
                  title: "Future-Ready",
                  description: "Stay ahead with automatic integration of new AI models and capabilities as they're released to the market.",
                  icon: <Icons.crystalBall className="h-10 w-10 text-brand-start" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4 flex items-center justify-center">{item.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-brand-start/10 to-brand-end/10 rounded-3xl p-8 border border-brand-start/20"
            >
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Don't Just Chat - <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Create & Build</span>
              </h4>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                While others are stuck having basic conversations, you'll be generating revenue, solving complex problems, and bringing your most ambitious ideas to life. 
                This isn't just another AI chat tool - it's your complete creative and technical partner.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
                  <Icons.visualCreation className="h-4 w-4" />
                  <span>Visual Creation</span>
                </span>
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
                  <Icons.videoProduction className="h-4 w-4" />
                  <span>Video Production</span>
                </span>
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
                  <Icons.codeDevelopment className="h-4 w-4" />
                  <span>Code Development</span>
                </span>
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
                  <Icons.dataAnalysis className="h-4 w-4" />
                  <span>Data Analysis</span>
                </span>
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
                  <Icons.problemSolving className="h-4 w-4" />
                  <span>Problem Solving</span>
                </span>
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
                  <Icons.strategicPlanning className="h-4 w-4" />
                  <span>Strategic Planning</span>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingSection11;