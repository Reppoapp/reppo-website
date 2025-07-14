import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import InlineCTA from '../components/InlineCTA'

const Home = () => {
  // Ensure page starts at top when loaded - enhanced for reliability
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Additional scroll attempts with delays to handle timing issues
    const timeouts = [
      setTimeout(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 50),
      setTimeout(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 100),
      setTimeout(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 200)
    ]

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  return (
    <div className="bg-primary-white">
      {/* Hero Section - Train WITH Your Favorites value proposition */}
      <HeroSection />
      
      {/* Problem Section - Fake fitness programs problem and authentic training solution */}
      <ProblemSection />
      
      {/* Inline CTA - Convert visitors to join the elite athlete training platform */}
      <InlineCTA />
    </div>
  )
}

export default Home 