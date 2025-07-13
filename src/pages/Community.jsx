import React, { useEffect } from 'react'
import SocialProof from '../components/SocialProof'
import TrustSignals from '../components/TrustSignals'
import InlineCTA from '../components/InlineCTA'

const Community = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="pt-16">
      {/* Social Proof - Build trust with testimonials and stats */}
      <SocialProof />
      
      {/* Trust Signals - Industry recognition and security */}
      <TrustSignals />
      
      {/* CTA to join the community */}
      <InlineCTA 
        title="Join Our Elite Community"
        subtitle="Connect with 47,000+ performance athletes transforming their limits"
        primaryButtonText="Join Community"
        size="large"
        className="my-16"
      />
    </div>
  )
}

export default Community 