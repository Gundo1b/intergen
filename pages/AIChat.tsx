import { Theme } from '../types';
import { Layers, Zap, Shield, Cpu, CheckCircle2 } from 'lucide-react';
import React from 'react';

interface AIChatProps {
  theme: Theme;
}

export const AIChat: React.FC<AIChatProps> = ({ theme }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-bg-dark dark:to-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-6">
            Why InterGen AI Chat?
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Experience the future of communication with a unified platform designed to bring the world's most powerful AI models directly to your fingertips.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="h-14 w-14 bg-brand-start/10 rounded-xl flex items-center justify-center mb-6 text-brand-start">
              <Layers size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Unified Model Access</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Why settle for one when you can have them all? InterGen provides seamless access to industry-leading models including ChatGPT, Claude, Gemini, Llama, DeepSeek, and Qwen. Switch between models instantly to leverage their unique strengths for different tasks without juggling multiple subscriptions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="h-14 w-14 bg-brand-end/10 rounded-xl flex items-center justify-center mb-6 text-brand-end">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Optimized Workflow</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Streamline your productivity by integrating AI directly into your creative and development environment. Whether you're coding, writing, or brainstorming, InterGen's AI Chat is context-aware and ready to assist, eliminating the friction of context switching between external tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="h-14 w-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Privacy & Security First</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Your intellectual property deserves the highest protection. InterGen employs enterprise-grade encryption and strict data privacy protocols. We ensure your conversations and data remain yours, giving you the confidence to use AI for sensitive and proprietary projects.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
            <div className="h-14 w-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500">
              <Cpu size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Future-Proof Technology</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The AI landscape changes daily. InterGen stays ahead of the curve by continuously integrating the latest model versions and breakthroughs. You'll always have access to the most cutting-edge capabilities without needing to upgrade your infrastructure or learn new tools.
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-10">
            The InterGen Advantage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Cost-Effective Aggregation',
              'Context-Aware Assistance',
              'Seamless Integration',
              'Multi-Modal Capabilities',
              'Low Latency Response',
              '24/7 Availability'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
