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
    <div>
      {/* Hero Section - First impression and main value proposition */}
      <HeroSection />
      
      {/* Problem Section - Establish the problem and solution */}
      <ProblemSection />
      
      {/* Inline CTA - Convert visitors to explore more or join waitlist */}
      <InlineCTA 
        title="Ready to Outperform Yesterday?"
        subtitle="Join 47,000+ athletes already transforming their fitness journey"
        size="large"
        className="my-16"
      />
    </div>
  )
}

export default Home 