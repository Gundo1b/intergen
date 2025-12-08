import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Globe, Check } from 'lucide-react';
import { Theme } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const languages = [
  'English', 'Español', 'Français', 'Deutsch', 'Português',
  'Italiano', 'العربية', 'हिंदी', '日本語', '한국어'
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Close language menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Product', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
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
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="scale-90 md:scale-100 origin-left" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-end dark:hover:text-brand-start transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`p-2 transition-colors ${langMenuOpen ? 'text-brand-end' : 'text-slate-500 hover:text-brand-end dark:text-slate-400 dark:hover:text-brand-start'}`}
              aria-label="Languages"
            >
              <Globe size={20} />
            </button>
            
            {/* Language Dropdown */}
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 mb-1">
                  Select Language
                </div>
                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                        selectedLang === lang ? 'text-brand-end font-medium' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {lang}
                      {selectedLang === lang && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
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
           {/* Mobile Language Toggle */}
           <button
             onClick={() => setLangMenuOpen(!langMenuOpen)} 
             className={`md:hidden ${langMenuOpen ? 'text-brand-end' : 'text-slate-500 dark:text-slate-400'}`}
           >
             <Globe size={20} />
           </button>
           
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

       {/* Mobile Language Dropdown (Overlay) */}
       {langMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 p-4 z-40">
             <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 grid grid-cols-2 gap-2 animate-in slide-in-from-top-4 fade-in duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm text-center border transition-colors ${
                       selectedLang === lang 
                       ? 'bg-brand-end/10 border-brand-end text-brand-end'
                       : 'bg-transparent border-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
             </div>
          </div>
       )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-bg-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-brand-end py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
            >
              {link.name}
            </a>
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