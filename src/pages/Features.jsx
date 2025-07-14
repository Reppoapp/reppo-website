import React, { useEffect } from 'react'
import FeatureGrid from '../components/FeatureGrid'
import HowItWorks from '../components/HowItWorks'
import SocialProof from '../components/SocialProof'
import FinalCTA from '../components/FinalCTA'

const Features = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="bg-primary-white">
      {/* Athletic Precision Hero Section */}
      <section className="py-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-blue/20 text-primary-blue px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary-blue/30">
            <span className="text-primary-blue">🏆</span>
            <span>Authentic Training Features</span>
          </div>
          
          <h1 className="hero-title text-primary-white mb-6">
            The Future of Authentic Training
          </h1>
          
          <p className="hero-subtitle text-primary-white/90 mb-8">
            Discover how live athlete data, AI personalization, and authentic training 
            transform your fitness journey with verified elite athletes.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-primary-white/80">
            <div className="flex items-center gap-2">
              <span className="text-accent-green">✅</span>
              <span>100% Authentic Data</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-blue">🤖</span>
              <span>AI Personalization</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-orange">📱</span>
              <span>Live Notifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - The Future of Authentic Training */}
      <FeatureGrid />
      
      {/* How It Works - Live Athlete Training Process */}
      <HowItWorks />
      
      {/* Social Proof - Athletes Love Training WITH Their Favorites */}
      <SocialProof />
      
      {/* Final CTA - Train with Your Favorites */}
      <FinalCTA />
    </div>
  )
}

export default Features 