import React, { useState } from 'react';
import { AnimatedTabs } from '../components/ui/animated-tabs';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Code,
  Image,
  Video,
  Zap,
  Brain,
  Palette,
  Sparkles,
  CheckCircle,
  Star,
  Shield,
  Rocket,
  Users,
  Target,
  PenTool,
  GraduationCap,
  Terminal,
  Building2
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "Chat Intelligence",
    description: "Natural dialogue, idea generation, and tutoring with ensemble reasoning for high-quality answers.",
    color: "from-blue-400 to-blue-600",
    features: ["Natural dialogue", "Idea generation", "Tutoring", "Ensemble reasoning"]
  },
  {
    icon: Code,
    title: "Code Intelligence",
    description: "Code creation, refactoring, debugging, and system design with smart logic inference.",
    color: "from-green-400 to-green-600",
    features: ["Code creation & refactoring", "Debugging", "System design help", "Smart logic inference"]
  },
  {
    icon: Image,
    title: "Image & Design Tools",
    description: "High-quality image generation with style control and iterative refinement loops.",
    color: "from-purple-400 to-purple-600",
    features: ["High-quality generation", "Style control", "Iterative refinement", "Visual exploration"]
  },
  {
    icon: Video,
    title: "Video Generation",
    description: "Motion design, storytelling automation, and scene generation with rendering previews.",
    color: "from-red-400 to-red-600",
    features: ["Motion design", "Storytelling automation", "Scene generation", "Rendering previews"]
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Speed",
    description: "No switching between apps",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Target,
    title: "Quality",
    description: "Automatic model selection",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Brain,
    title: "Ease",
    description: "One unified UX",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Cost Efficiency",
    description: "Replace multiple subscriptions",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Scalable",
    description: "Solo creators to enterprise",
    color: "from-cyan-400 to-teal-500"
  },
  {
    icon: CheckCircle,
    title: "Secure",
    description: "Privacy-first architecture",
    color: "from-emerald-400 to-green-500"
  }
];

const audiences = [
  {
    title: 'Creators & Designers',
    description: 'Storyboard campaigns, generate moodboards, and iterate on visuals in a unified workspace.',
    icon: PenTool,
    category: 'Interactions',
    gradient: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    title: 'Students & Learners',
    description: 'Get deep explanations, summarize complex topics, and create multimodal study guides.',
    icon: GraduationCap,
    category: 'Resources',
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    title: 'Developers & Engineers',
    description: 'Generate boilerplate, refactor legacy code, and debug with context-aware AI assistance.',
    icon: Terminal,
    category: 'Docs',
    gradient: "from-green-500 via-emerald-500 to-teal-500"
  },
  {
    title: 'Startups & Teams',
    description: 'Ship products faster with shared workspaces and unified tools for the whole team.',
    icon: Rocket,
    category: 'Interactions',
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    title: 'Enterprise',
    description: 'Secure, compliant AI integration with custom workflows and role-based access control.',
    icon: Building2,
    category: 'Docs',
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  }
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Creators", "Students", "Developers", "Startups", "Businesses"];

  const filteredAudiences = audiences.filter(audience => {
    if (activeTab === "All") return true;
    if (activeTab === "Creators") return audience.title.includes("Creators");
    if (activeTab === "Students") return audience.title.includes("Students");
    if (activeTab === "Developers") return audience.title.includes("Developers");
    if (activeTab === "Startups") return audience.title.includes("Startups");
    if (activeTab === "Businesses") return audience.title.includes("Businesses");
    return true;
  });

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-start/20 to-brand-end/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-start/10 dark:bg-brand-start/20 border border-brand-start/20 text-brand-end dark:text-brand-start text-sm font-semibold uppercase tracking-wider mb-8">
              <Sparkles size={16} />
              <span>Unified Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white leading-tight tracking-tight mb-8">
              One Platform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Infinite Possibilities
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Show how Integen AI unifies chat, code, image, and video generation into one seamless creative workspace.
              Experience the future of intelligent content creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Core Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Everything you need for creative intelligence in one unified platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-panel p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Different Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Why It's Different
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Experience the advantages of unified creative intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Everyone Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009DFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Built for every kind of builder
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From individual creators to enterprise teams, Integen AI adapts to your needs
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <AnimatedTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              containerClassName="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-1 rounded-full border border-slate-200 dark:border-slate-700"
              activeTabClassName="bg-brand-end text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAudiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${audience.gradient} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <audience.icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      {audience.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {audience.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {audience.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-start/10 via-brand-end/10 to-purple-500/10 dark:from-brand-start/5 dark:via-brand-end/5 dark:to-purple-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white text-sm font-semibold uppercase tracking-wider mb-8">
              <Star size={16} />
              <span>Get Started Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Ready to experience the future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                creative intelligence?
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Join thousands of creators, developers, and businesses who have already transformed their workflows with Integen AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300">
                Start for free
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                View documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
