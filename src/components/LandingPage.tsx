import React from 'react';
import { motion } from 'framer-motion';
import ScrollProgressBar from './ScrollProgressBar';
import ThemeToggle from './ThemeToggle';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import FeaturesSection from './sections/FeaturesSection';
import TechnicalSection from './sections/TechnicalSection';
import ImpactSection from './sections/ImpactSection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';
import ParticlesBackground from './ParticlesBackground';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-gray-900 dark:via-blue-900 dark:to-violet-900 transition-colors duration-500">
      <ScrollProgressBar />
      <ParticlesBackground />
      
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TechnicalSection />
        <ImpactSection />
        <TeamSection />
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default LandingPage;