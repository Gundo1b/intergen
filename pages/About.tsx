import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Heart, 
  Lightbulb, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Monitor,
  Palette
} from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    description: "Former AI researcher at OpenAI with 10+ years in machine learning.",
    avatar: Briefcase
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder", 
    description: "Ex-Google engineer specializing in scalable AI systems.",
    avatar: Monitor
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    description: "Product leader with experience at Microsoft and Meta.",
    avatar: Target
  },
  {
    name: "Emily Watson",
    role: "Head of Design",
    description: "Award-winning designer focused on human-centered AI interfaces.",
    avatar: Palette
  }
];

const values = [
  {
    icon: Heart,
    title: "Human-Centered",
    description: "We believe AI should enhance human creativity, not replace it."
  },
  {
    icon: Zap,
    title: "Speed & Innovation",
    description: "Moving fast to build the future of intelligent assistance."
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making advanced AI tools available to everyone, everywhere."
  },
  {
    icon: CheckCircle,
    title: "Quality & Trust",
    description: "Delivering reliable, high-quality experiences our users can trust."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-start/10 dark:bg-brand-start/20 border border-brand-start/20 text-brand-end dark:text-brand-start text-sm font-semibold uppercase tracking-wider mb-8">
              <Users size={16} />
              <span>About Integen</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Building the future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                intelligent assistance
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize AI by creating the most intuitive, 
              powerful, and accessible platform for human-AI collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                At Integen, we believe that the future of work is human-AI collaboration. 
                Our platform unifies the best AI models and capabilities into a single, 
                intuitive interface that amplifies human creativity and productivity.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                We're building more than just another AI tool—we're creating an ecosystem 
                where creators, developers, and teams can seamlessly leverage the power 
                of artificial intelligence to achieve extraordinary results.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-brand-end" />
                  <span className="font-semibold text-slate-900 dark:text-white">Clear Vision</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb size={20} className="text-brand-end" />
                  <span className="font-semibold text-slate-900 dark:text-white">Innovation</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-start/20 to-brand-end/20 rounded-3xl p-8 backdrop-blur-sm border border-brand-start/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-end mb-2">1M+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-end mb-2">50+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">AI Models</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-end mb-2">10M+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Tasks Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-end mb-2">24/7</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Availability</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-start to-brand-end p-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              The passionate individuals building the future of AI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-start/20 to-brand-end/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <member.avatar className="w-12 h-12 text-brand-end" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-end font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-start to-brand-end">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be part of the revolution in human-AI collaboration. 
              Together, we're building the future of intelligent assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-brand-end font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Star size={20} />
                Try Integen AI
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                <ArrowRight size={20} />
                View Careers
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}