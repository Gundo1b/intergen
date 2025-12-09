import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import PricingSection11 from './components/Pricing';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Theme } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeaturesPage from './pages/Features';
import HowItWorksPage from './pages/HowItWorks';
import PricingPage from './pages/Pricing';
import ChangelogPage from './pages/Changelog';
import DemoPage from './pages/Demo';
import UseCasesPage from './pages/UseCases';
import CareersPage from './pages/Careers';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  
    // Initialize theme based on system preference or default
    useEffect(() => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    }, []);
  
    // Update HTML class for Tailwind Dark Mode
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
  
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              {/* <HowItWorks /> */}
              <UseCases />
              <PricingSection11 />
            </>
          } />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

export default App;