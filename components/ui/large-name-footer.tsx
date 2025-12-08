"use client";
import React from "react";
import { Icons } from "./icons";
import { Button } from "./button";
import { Logo } from "../Logo";

function Footer() {
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#features" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Changelog
                  </a>
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
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">
                    Careers
                  </a>
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

export { Footer };