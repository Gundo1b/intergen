import React, { useState } from 'react';
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
  ChevronDown
} from 'lucide-react';

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

const faqs = [
  {
    question: "What makes Integen different from other AI platforms?",
    answer: "Integen stands out by offering a unified interface that seamlessly integrates multiple AI models and capabilities. Unlike fragmented solutions, our platform provides an intuitive experience that amplifies human creativity while maintaining accessibility for everyone."
  },
  {
    question: "How does human-AI collaboration work on your platform?",
    answer: "Our platform is designed to enhance human capabilities rather than replace them. Users can leverage AI for ideation, content creation, problem-solving, and more, while maintaining full control and creative direction over their work."
  },
  {
    question: "What types of AI models are supported?",
    answer: "We support over 50+ AI models across various categories including text generation, image creation, code assistance, data analysis, and more. Our platform continuously updates to include the latest and most powerful models available."
  },
  {
    question: "Is Integen suitable for teams and enterprises?",
    answer: "Absolutely! Integen is built to scale with your needs. We offer enterprise-grade features including team collaboration tools, advanced security measures, custom integrations, and dedicated support for larger organizations."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "Data privacy and security are our top priorities. We implement industry-leading encryption, secure data handling practices, and comply with global privacy regulations. Your data remains yours, and we never use it for training our models without explicit consent."
  },
  {
    question: "What languages and regions do you support?",
    answer: "Integen supports over 20 languages and is available globally. Our platform is designed to be accessible worldwide, with localized interfaces and support for international users across different time zones."
  }
];

export default function About() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-end mb-2">50+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">AI Models</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-end mb-2">24/7</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-end mb-2">20+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Languages</div>
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
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-12 text-center">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <value.icon size={48} className="text-brand-end mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get answers to the most common questions about Integen and how we can help you harness the power of AI.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
