import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Theme } from '../types';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';




interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'AI Chat', href: '/ai-chat' },
    { name: 'AI Image', href: '/ai-image' },
    { name: 'AI Video', href: '/ai-video' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Login', href: '/login' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-bg-dark/80 glass-panel shadow-sm py-3'
        : 'bg-transparent py-4 md:py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="cursor-pointer flex items-center">
          <Logo className="scale-90 md:scale-100 origin-left" />

        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-end dark:hover:text-brand-start transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 hover:text-brand-end dark:text-slate-400 dark:hover:text-brand-start transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Let's get started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-slate-500 dark:text-slate-400"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 dark:text-slate-200 p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-white/95 via-white/90 to-white/80 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-2xl py-8 px-6 flex flex-col space-y-6 overflow-hidden relative"
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#64E1FF]/5 to-[#009DFF]/5 rounded-b-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 bg-[#64E1FF]/10 rounded-full blur-xl"
            animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Menu Items */}
          <div className="relative z-10 space-y-4">
            {navLinks.map((link, index) => {
              if (link.name === 'Login') {
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative z-10"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 dark:text-slate-900 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 relative overflow-hidden group/login"
                    >
                      <div className="absolute inset-0 bg-white/10 group-hover/login:bg-white/20 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <motion.span
                          className="w-2 h-2 bg-white dark:bg-slate-900 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                        <span>Login</span>
                      </span>
                    </Link>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group relative"
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-4 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-[#009DFF] py-3 px-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 group-hover:bg-[#64E1FF]/10 group-hover:border-[#009DFF]/30"
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full bg-transparent group-hover:bg-[#64E1FF] transition-colors duration-300 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="relative">{link.name}</span>
                  </Link>
                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Fancy Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative z-10 pt-4"
          >
            <button className="w-full py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 relative overflow-hidden group/button">
              <div className="absolute inset-0 bg-white/10 group-hover/button:bg-white/20 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span>Let's get started</span>
              </span>
            </button>
          </motion.div>

          {/* Close Button Overlay */}
          <motion.button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full backdrop-blur-sm transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <X size={24} />
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
};