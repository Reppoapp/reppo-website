import React, { useEffect } from 'react'
import FinalCTA from '../components/FinalCTA'

const Join = () => {
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
          <div className="inline-flex items-center gap-2 bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-accent-green/30">
            <span className="text-accent-green">🚀</span>
            <span>Join the Elite</span>
          </div>
          
          <h1 className="hero-title text-primary-white mb-6">
            Train WITH Your Favorite Athletes
          </h1>
          
          <p className="hero-subtitle text-primary-white/90 mb-8">
            Get exclusive access to live athlete workout data, AI personalization, 
            and authentic training with verified elite athletes.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-primary-white/80">
            <div className="flex items-center gap-2">
              <span className="text-accent-green">✅</span>
              <span>Live Athlete Data</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-blue">🤖</span>
              <span>AI Personalization</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-orange">👑</span>
              <span>Founder Benefits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Complete waitlist and founder benefits */}
      <FinalCTA />
    </div>
  )
}

export default Join 