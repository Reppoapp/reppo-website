import React from 'react'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import InlineCTA from '../components/InlineCTA'

const Home = () => {
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