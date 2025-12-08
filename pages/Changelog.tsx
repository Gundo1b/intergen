import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MessageSquare, 
  Code, 
  Image, 
  Video, 
  Users, 
  Shield, 
  Zap,
  TrendingUp,
  ArrowRight,
  Star,
  Lock,
  Cpu,
  RefreshCw,
  Globe,
  Settings,
  Rocket,
  Target,
  CheckCircle
} from 'lucide-react';

const versions = [
  {
    version: "v1.0",
    title: "Foundation Release",
    focus: "Chat, Code, Image",
    status: "completed",
    gradient: "from-blue-400 to-cyan-400",
    icon: MessageSquare,
    description: "Launch of the core Integen AI experience.",
    details: [
      "Unified workspace for chat intelligence, code assistance, and image generation",
      "One platform instead of multiple tools and subscriptions",
      "Ensemble reasoning for high-quality responses",
      "Memory system for context awareness"
    ],
    highlights: ["Core AI", "Unified Interface", "Smart Routing"]
  },
  {
    version: "v2.0",
    title: "Visual & Multimodal Expansion",
    focus: "Video & Multimodal Orchestration",
    status: "completed",
    gradient: "from-purple-400 to-pink-400",
    icon: Video,
    description: "Add video generation for motion design and storytelling.",
    details: [
      "Advanced video generation for motion design and storytelling",
      "Smarter orchestration between chat, code, image, and video modes",
      "Enhanced visual workflows with seamless mode switching",
      "Improved response quality with multimodal reasoning"
    ],
    highlights: ["Video Generation", "Multimodal AI", "Workflow Orchestration"]
  },
  {
    version: "v3.0",
    title: "Teams & Builders",
    focus: "Collaboration & SDK",
    status: "completed",
    gradient: "from-emerald-400 to-teal-400",
    icon: Users,
    description: "Real-time collaboration for teams and studios.",
    details: [
      "Developer SDK to build on top of Integen AI",
      "Real-time collaboration for teams and studios",
      "Shared workspaces and better project organization",
      "Advanced team management and permissions"
    ],
    highlights: ["Team Collaboration", "Developer SDK", "Shared Workspaces"]
  },
  {
    version: "v4.0",
    title: "Enterprise-Grade Intelligence",
    focus: "Enterprise Customization & Private AI",
    status: "current",
    gradient: "from-orange-400 to-red-400",
    icon: Shield,
    description: "Private AI deployments and enterprise controls.",
    details: [
      "Private AI deployments and enterprise controls",
      "Advanced security, governance, and integrations",
      "Custom configurations for organizations and education",
      "Multi-region deployment with compliance certifications"
    ],
    highlights: ["Private AI", "Enterprise Security", "Custom Configurations"]
  }
];

const badges = [
  {
    icon: Shield,
    text: "Security-first",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Cpu,
    text: "Model upgrades",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: RefreshCw,
    text: "Continuous improvement",
    color: "from-purple-400 to-pink-500"
  }
];

export default function Changelog() {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span>Release History</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Changelog
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              See how Integen AI evolves, version by version.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-start via-brand-end to-purple-500 transform md:-translate-x-0.5"></div>

            {/* Version Cards */}
            <div className="space-y-12">
              {versions.map((version, index) => (
                <motion.div
                  key={version.version}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-brand-start to-brand-end border-4 border-white dark:border-slate-900 transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                    {version.status === 'current' && (
                      <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                  </div>

                  {/* Version Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`group relative ${version.status === 'current' ? 'scale-105' : ''}`}>
                      {/* Glow Effect */}
                      {version.status === 'current' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-start/20 to-brand-end/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      )}
                      
                      <div className={`relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-start/10 transition-all duration-500 hover:-translate-y-2 ${
                        version.status === 'current' ? 'ring-2 ring-brand-start/30 border-brand-start/50' : ''
                      }`}>
                        {/* Version Badge */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${version.gradient} p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <version.icon className="w-full h-full text-white" />
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-2xl font-bold text-slate-900 dark:text-white">{version.version}</span>
                              {version.status === 'current' && (
                                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white text-xs font-semibold">
                                  <Star size={12} />
                                  <span>Current</span>
                                </div>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{version.title}</h3>
                            <p className="text-sm text-brand-start font-medium">{version.focus}</p>
                          </div>
                        </div>

                        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                          {version.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          {version.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle size={16} className="text-brand-start mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2">
                          {version.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-start/10 to-brand-end/10 border border-brand-start/20 text-brand-start text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Badges Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 mb-16"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${badge.color} p-2`}>
                    <badge.icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 italic">
                "One platform that keeps getting smarter."
              </p>
              
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                Join now and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                  grow with every release
                </span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <Rocket size={20} />
                  Start Your Journey
                </button>
                <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                  View Roadmap
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
