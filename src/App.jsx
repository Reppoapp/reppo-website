import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Roadmap from './pages/Roadmap'
import Community from './pages/Community'
import FullScreenLoader from './components/FullScreenLoader'
import SmoothScroll from './components/SmoothScroll'

// Navigation component
const Navigation = ({ isLoaded }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Community', path: '/community' },
  ]

  const scrollToWaitlist = () => {
    // If we're on home page, scroll to waitlist
    if (location.pathname === '/') {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to home and then scroll
      window.location.href = '/#waitlist'
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Reppo-Logo.png" 
              alt="Reppo Logo" 
              className="h-8 w-auto hover:scale-105 transition-transform duration-300 logo-gradient"
            />
            <span className="text-xl font-bold text-white tracking-tight">
              Reppo
            </span>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={scrollToWaitlist}
            className="hidden md:block bg-gradient-primary text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Join Waitlist
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={scrollToWaitlist}
                className="w-full bg-gradient-primary text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 mt-4"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

// Footer component
const Footer = ({ isLoaded }) => {
  return (
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
            © 2025 Reppo. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
          {/* Full Screen Loader */}
          {!isLoaded && <FullScreenLoader onComplete={handleLoadingComplete} />}
          
          {/* Navigation */}
          <Navigation isLoaded={isLoaded} />

          {/* Main Content with Staggered Fade-in */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </motion.main>

          {/* Footer */}
          <Footer isLoaded={isLoaded} />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App 