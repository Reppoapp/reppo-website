import React from 'react'
import FeatureGrid from '../components/FeatureGrid'
import ProfilePreview from '../components/ProfilePreview'
import HowItWorks from '../components/HowItWorks'
import InlineCTA from '../components/InlineCTA'

const Features = () => {
  return (
    <div className="pt-16">
      {/* Feature Grid - Show key features and benefits */}
      <FeatureGrid />
      
      {/* Profile Preview - Show the product in action */}
      <ProfilePreview />
      
      {/* How It Works - Explain the 3-step process */}
      <HowItWorks />
      
      {/* CTA to join after seeing features */}
      <InlineCTA 
        title="Experience These Features Yourself"
        subtitle="Get early access to all features with founder benefits"
        primaryButtonText="Join Founder Program"
        size="large"
        className="my-16"
      />
    </div>
  )
}

export default Features 