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
      <div className="min-h-screen bg-background text-white overflow-x-hidden">
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
              <div className="flex items-center">
                <h1 className="text-2xl font-bold gradient-text">Reppo</h1>
              </div>
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
          <HowItWorks />
          <FeatureGrid />
          <ProfilePreview />
          <SocialProof />
          <RoadmapSection />
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
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Reppo</h3>
              <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">Own Your Reps. Share Your Grind.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/60 text-sm sm:text-base">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
              <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-6">
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