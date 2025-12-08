"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icons } from "./icons";
import { Button } from "./button";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { Globe, Check, ChevronDown } from "lucide-react";

const languages = [
  'English', 'Español', 'Français', 'Deutsch', 'Português',
  'Italiano', 'العربية', 'हिंदी', '日本語', '한국어'
];

function LargeNameFooter() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="py-12 px-4 md:px-6 bg-white dark:bg-bg-dark border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
          <div className="mb-8 lg:mb-0">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Logo />
            </a>

            <h1 className="text-slate-600 dark:text-gray-300 mt-4 text-sm md:text-base">
              Built by{" "}
              <span className="text-brand-end dark:text-[#039ee4] font-semibold">
                Integen Team
              </span>
            </h1>
            <div className="mt-4">
              <a href="https://twitter.com/integenai" target="_blank" rel="noopener noreferrer">
                <Button variant='secondary' className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700">
                  Follow Updates On
                  <Icons.twitter className="icon-class ml-2 w-3.5 h-3.5" />
                </Button>
              </a>
            </div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} Integen AI Inc. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/features" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">Features</Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">How it works</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">Pricing</Link>
                </li>
                <li>
                  <Link to="/changelog" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">Changelog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Resources</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Company</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/about" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/careers" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">Careers</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Legal</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative" ref={langMenuRef}>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Language</h3>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center justify-between w-full text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Globe size={20} />
                  {selectedLang}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langMenuOpen ? 'transform rotate-180' : ''}`} />
              </button>
              {langMenuOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-48 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
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
          </div>
        </div>
        <div className="w-full flex mt-16 items-center justify-center overflow-hidden">
          <h1 className="text-center text-[12vw] md:text-[14vw] font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-800 dark:to-bg-dark select-none leading-none tracking-tighter opacity-50 dark:opacity-100">
            INTEGEN
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { LargeNameFooter };