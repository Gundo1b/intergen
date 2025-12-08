import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Theme } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeaturesPage from './pages/Features';
import HowItWorksPage from './pages/HowItWorks';
import PricingPage from './pages/Pricing';
import ChangelogPage from './pages/Changelog';

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
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <UseCases />
            <Pricing />
          </>
        } />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;