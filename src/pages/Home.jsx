import React from 'react'
import HeroSection from '../components/HeroSection'
import FinalCTA from '../components/FinalCTA'

const Home = () => {
  return (
    <div>
      {/* Hero Section - First impression and main value proposition */}
      <HeroSection />
      
      {/* Final CTA - Convert visitors to waitlist */}
      <FinalCTA />
    </div>
  )
}

export default Home 