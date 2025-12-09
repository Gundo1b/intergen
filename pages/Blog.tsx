import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search,
  Tag,
  TrendingUp,
  Users,
  Lightbulb,
  Code,
  Zap,
  Star,
  Bot,
  Palette,
  Settings,
  Shield,
  Sparkles,
  Lock
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI: Human-AI Collaboration",
    excerpt: "Exploring how artificial intelligence is reshaping the way we work, create, and solve problems.",
    content: "Artificial intelligence is no longer a distant concept from science fiction. It's here, it's powerful, and it's changing everything...",
    author: "Alex Chen",
    date: "2024-12-01",
    readTime: "5 min read",
    category: "AI Trends",
    image: Bot,
    featured: true
  },
  {
    id: 2,
    title: "Building Better AI Interfaces",
    excerpt: "Design principles for creating intuitive AI-powered applications that users love.",
    content: "The success of AI applications depends heavily on how well we design their user interfaces...",
    author: "Emily Watson",
    date: "2024-11-28",
    readTime: "7 min read",
    category: "Design",
    image: Palette,
    featured: false
  },
  {
    id: 3,
    title: "Scaling AI Systems: Lessons Learned",
    excerpt: "Technical insights from building and maintaining large-scale AI infrastructure.",
    content: "When we started building Integen, we had to solve many challenges around scaling AI systems...",
    author: "Sarah Johnson",
    date: "2024-11-25",
    readTime: "10 min read",
    category: "Engineering",
    image: Settings,
    featured: false
  },
  {
    id: 4,
    title: "AI in Creative Industries",
    excerpt: "How artists, writers, and designers are leveraging AI to enhance their creative processes.",
    content: "The creative industries are being transformed by AI tools that augment human creativity...",
    author: "Michael Rodriguez",
    date: "2024-11-22",
    readTime: "6 min read",
    category: "Creativity",
    image: Lightbulb,
    featured: false
  },
  {
    id: 5,
    title: "Privacy and AI: Building Trust",
    excerpt: "Our approach to ensuring user privacy and data security in AI applications.",
    content: "Trust is fundamental to the adoption of AI technology. Users need to know their data is safe...",
    author: "Alex Chen",
    date: "2024-11-20",
    readTime: "8 min read",
    category: "Security",
    image: Shield,
    featured: false
  },
  {
    id: 6,
    title: "The Multi-Modal AI Revolution",
    excerpt: "Understanding how AI that can process text, images, audio, and video is changing everything.",
    content: "Multi-modal AI represents a significant leap forward in artificial intelligence...",
    author: "Sarah Johnson",
    date: "2024-11-18",
    readTime: "9 min read",
    category: "Technology",
    image: Sparkles,
    featured: false
  }
];

const categories = [
  { name: "All Posts", count: blogPosts.length, active: true },
  { name: "AI Trends", count: 2, active: false },
  { name: "Design", count: 1, active: false },
  { name: "Engineering", count: 1, active: false },
  { name: "Creativity", count: 1, active: false },
  { name: "Security", count: 1, active: false }
];

export default function Blog() {
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
              <BookOpen size={16} />
              <span>Our Blog</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Innovations
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and developments 
              in AI, design, and technology from our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-start/50 focus:border-brand-start transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-brand-start text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <TrendingUp size={24} className="text-brand-end" />
              Featured Article
            </h2>
            
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag size={16} className="text-brand-end" />
                      <span className="text-sm font-medium text-brand-end bg-brand-start/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 w-fit">
                      Read Article
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-brand-start/10 to-brand-end/10 flex items-center justify-center p-8 lg:p-12">
                    <post.image className="w-24 h-24 text-brand-end" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <BookOpen size={24} className="text-brand-end" />
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-8 text-center">
                      <post.image className="w-12 h-12 mx-auto mb-4 text-brand-end" />
                      <span className="inline-block text-xs font-medium text-brand-end bg-brand-start/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-end transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          By {post.author}
                        </span>
                        <ArrowRight size={16} className="text-brand-end group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay in the Loop
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get the latest insights, updates, and stories from the world of AI 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-brand-end font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Zap size={20} />
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}