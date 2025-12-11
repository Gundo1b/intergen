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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI Chat', href: '/ai-chat' },
    { name: 'AI Image', href: '/ai-image' },
    { name: 'AI Video', href: '/ai-video' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className={`sticky top-3 z-50 w-full max-w-7xl mx-auto transition-colors duration-300 ${isScrolled ? 'py-0' : 'py-0'}`}>
      <div className="mx-auto max-w-7xl px-3">
        <div className={`h-14 flex ring-1 rounded-full pr-2.5 pl-2.5 items-center justify-between transition-all duration-300 ${theme === 'light'
          ? 'bg-white/80 backdrop-blur-md ring-black/5 shadow-sm'
          : 'bg-slate-900/90 backdrop-blur-md ring-white/10'
          }`}>
          <div className="flex gap-2 items-center">
            <img src="/logo.png" alt="Logo" className="w-[120px] h-auto object-contain py-1" />
          </div>
          <nav className={`hidden md:flex items-center gap-8 text-sm transition-colors duration-300 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`transition font-sans ${theme === 'light' ? 'hover:text-black' : 'hover:text-white'}`} title="Link disabled in preview mode">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="liquid-glass-button relative inline-flex h-10 cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out text-sm font-medium bg-gradient-to-r border rounded-full pr-6 pl-6 shadow-lg backdrop-blur-xl items-center justify-center hover:bg-gradient-to-r text-white/90 from-white/10 to-white/5 border-white/15 hover:from-white/15 hover:to-white/10"
              style={{
                boxShadow:
                  "0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)"
              }}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br via-transparent from-white/8 to-white/3" />
              </div>
              <span className="relative z-10">Let's get started</span>
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="group relative inline-flex items-center justify-center rounded-full p-3 transition-all duration-300 hover:bg-white/10 active:scale-95 border border-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative flex h-4 w-5 flex-col items-center justify-center gap-[5px] overflow-hidden">
                <span className={`h-0.5 w-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-full transition-all duration-300 ${mobileMenuOpen ? "absolute rotate-45" : ""}`} />
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0 translate-x-3" : "group-hover:w-3/4"}`} />
                <span className={`h-0.5 w-full bg-gradient-to-r from-[#009DFF] to-[#64E1FF] rounded-full transition-all duration-300 ${mobileMenuOpen ? "absolute -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden fixed inset-0 z-50 min-h-screen w-full bg-slate-900/40 backdrop-blur-[20px] flex flex-col items-center justify-center"
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#64E1FF]/5 to-[#009DFF]/5 rounded-b-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 bg-[#64E1FF]/10 rounded-full blur-xl"
            animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="flex flex-col items-center space-y-8 z-20">
            {navLinks.map((link, index) => {
              if (link.name === "Login") return null;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold text-white tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#64E1FF] hover:to-[#009DFF] transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
          {/* Fancy Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="relative z-20 mt-8"
          >
            <button className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-full shadow-[0_0_30px_-5px_#64E1FF] hover:shadow-[0_0_50px_-10px_#64E1FF] hover:scale-105 transition-all duration-300">
              Let's get started
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
    </header>
  );
};

export default Navbar;