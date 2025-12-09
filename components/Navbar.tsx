import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Theme } from '../types';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

import { ColorChangingText } from './ColorChangingText';

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
    { name: 'Product', href: '/features' },
    { name: 'How it Works', href: '/how-it-works' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-bg-dark/80 glass-panel shadow-sm py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="cursor-pointer flex items-center">
          <Logo className="scale-90 md:scale-100 origin-left" />
          <ColorChangingText text="Integen" className="font-display text-2xl font-light tracking-[0.15em] uppercase ml-2" />
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
            Get early access
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-bg-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-brand-end py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <button className="w-full py-3.5 text-base font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg shadow-md">
                Get early access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};