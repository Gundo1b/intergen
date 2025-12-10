"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icons } from "./icons";
import { Button } from "./button";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { ColorChangingText } from "../ColorChangingText";
import { Globe, Check, ChevronDown, Plus, LucideIcon, Facebook, Github, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteSlider } from "./infinite-slider";
import { cn } from "../../lib/utils";

interface SocialIcon {
  Icon: LucideIcon
  href?: string
  className?: string
}

interface AnimatedSocialIconsProps {
  icons: SocialIcon[]
  className?: string
  iconSize?: number
}

export function AnimatedSocialIcons({
  icons,
  className,
  iconSize = 20
}: AnimatedSocialIconsProps) {
  const [active, setActive] = useState(false)

  const buttonSize = "size-10 sm:size-16"

  return (
    <div className={cn("w-full relative flex items-start justify-start sm:justify-center", className)}>
      <div className="flex items-center justify-center relative gap-4">
        <motion.div
          className="absolute left-0 bg-background w-full rounded-full z-10"
          animate={{
            x: active ? "calc(100% + 16px)" : 0,
          }}
          transition={{ type: "ease-in", duration: 0.5 }}
        >
          <motion.button
            className={cn(
              buttonSize,
              "rounded-full flex items-center justify-center",
              "bg-primary hover:bg-primary/90 transition-colors"
            )}
            onClick={() => setActive(!active)}
            animate={{ rotate: active ? 45 : 0 }}
            transition={{
              type: "ease-in",
              duration: 0.5,
            }}
          >
            <Plus
              size={iconSize}
              strokeWidth={3}
              className="text-primary-foreground"
            />
          </motion.button>
        </motion.div>

        {icons.map(({ Icon, href, className }, index) => (
          <motion.div
            key={index}
            className={cn(
              buttonSize,
              "rounded-full flex items-center justify-center",
              "bg-background shadow-lg hover:shadow-xl",
              "border border-border",
              className
            )}
            animate={{
              filter: active ? "blur(0px)" : "blur(2px)",
              scale: active ? 1 : 0.9,
              rotate: active ? 0 : 45,
            }}
            transition={{
              type: "ease-in",
              duration: 0.4,
            }}
          >
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Icon
                  size={iconSize}
                  className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"
                />
              </a>
            ) : (
              <Icon
                size={iconSize}
                className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const languages = [
  'English', 'Español', 'Français', 'Deutsch', 'Português',
  'Italiano', 'العربية', 'हिंदी', '日本語', '한국어'
];

function LargeNameFooter() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const langMenuRef = useRef<HTMLDivElement>(null);

  const sliderItems = [
    { name: "Academatrix", logo: "/splogos/Academatrix.png" },
    { name: "Cybluence", logo: "/splogos/Cybluence.png" },
    { name: "Decorexy", logo: "/splogos/Decorexy.png" },
    { name: "Finance Portal", logo: "/splogos/Finance Portal.png" },
    { name: "Icycon", logo: "/splogos/Icycon.png" },
    { name: "UMetha", logo: "/splogos/UMetha.png" },
    { name: "Viralitics", logo: "/splogos/Viralitics.png" }
  ];

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
      {/* Infinite Slider Section */}
      <div className="mb-16 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-600 dark:text-gray-300">
              Trusted by these companies
            </h3>
          </div>
          <InfiniteSlider
            duration={30}
            gap={32}
            className="py-4"
          >
            {sliderItems.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>

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
              <div className="mt-4">
                <AnimatedSocialIcons
                  icons={[
                    { Icon: Facebook },
                    { Icon: Linkedin },
                    { Icon: Github },
                    { Icon: Instagram }
                  ]}
                  className="justify-start"
                />
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} Integen AI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/ai-chat" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">AI Chat</Link>
                </li>
                <li>
                  <Link to="/ai-image" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">AI Image</Link>
                </li>
                <li>
                  <Link to="/ai-video" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">AI Video</Link>
                </li>
                <li>
                  <Link to="/ai-code" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">AI Code</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">Pricing</Link>
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
                  <Link to="/comparison" className="text-slate-600 hover:text-brand-end dark:text-gray-400 dark:hover:text-white transition-colors">Comparison</Link>
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
                        className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${selectedLang === lang ? 'text-brand-end font-medium' : 'text-slate-700 dark:text-slate-300'
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
            INTEGEN<ColorChangingText text="AI" />
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { LargeNameFooter };