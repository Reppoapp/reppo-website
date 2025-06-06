import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import FeatureGrid from './components/FeatureGrid'
import ProfilePreview from './components/ProfilePreview'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import RoadmapSection from './components/RoadmapSection'
import FullScreenLoader from './components/FullScreenLoader'
import SmoothScroll from './components/SmoothScroll'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
        {/* Full Screen Loader */}
        {!isLoaded && <FullScreenLoader onComplete={handleLoadingComplete} />}
        
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <img 
                  src="/Reppo-Logo.png" 
                  alt="Reppo Logo" 
                  className="h-8 w-auto hover:scale-105 transition-transform duration-300 logo-gradient"
                />
                <span className="text-xl font-bold text-white tracking-tight">
                  Reppo
                </span>
              </div>
              
              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium"
                >
                  How Reppo Works
                </button>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium"
                >
                  Features
                </button>
                <button 
                  onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium"
                >
                  Roadmap
                </button>
              </nav>

              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Main Content with Staggered Fade-in */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroSection />
          <ProblemSection />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <div id="features">
            <FeatureGrid />
          </div>
          <ProfilePreview />
          <SocialProof />
          <div id="roadmap">
            <RoadmapSection />
          </div>
          <FinalCTA />
        </motion.main>

        {/* Enhanced Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-background border-t border-white/10 mt-16 py-6 sm:py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-3 mb-3 sm:mb-4">
                <img 
                  src="/Reppo-Logo.png" 
                  alt="Reppo Logo" 
                  className="h-12 w-auto logo-gradient"
                />
                <span className="text-2xl font-bold text-white tracking-tight">
                  Reppo
                </span>
              </div>
              <p className="text-text-secondary mb-4 sm:mb-6 text-sm sm:text-base">Where Consistency Becomes Legacy.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-text-secondary text-sm sm:text-base">
                <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
                <a href="#" className="hover:text-secondary transition-colors">Terms</a>
                <a href="#" className="hover:text-secondary transition-colors">Contact</a>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm mt-4 sm:mt-6">
                © 2024 Reppo. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </SmoothScroll>
  )
}

export default App 