import React from 'react'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import FeatureGrid from '../components/FeatureGrid'
import HowItWorks from '../components/HowItWorks'
import ProfilePreview from '../components/ProfilePreview'
import SocialProof from '../components/SocialProof'
import TrustSignals from '../components/TrustSignals'
import RoadmapSection from '../components/RoadmapSection'
import FinalCTA from '../components/FinalCTA'

const Home = () => {
  return (
    <div>
      {/* Hero Section - First impression and main value proposition */}
      <HeroSection />
      
      {/* Problem Section - Establish the problem and solution */}
      <ProblemSection />
      
      {/* Feature Grid - Show key features and benefits */}
      <FeatureGrid />
      
      {/* How It Works - Explain the 3-step process */}
      <HowItWorks />
      
      {/* Profile Preview - Show the product in action */}
      <ProfilePreview />
      
      {/* Social Proof - Build trust with testimonials and stats */}
      <SocialProof />
      
      {/* Trust Signals - Industry recognition and security */}
      <TrustSignals />
      
      {/* Roadmap Section - Show future development and founder benefits */}
      <RoadmapSection />
      
      {/* Final CTA - Convert visitors to waitlist with founder benefits */}
      <FinalCTA />
    </div>
  )
}

export default Home 