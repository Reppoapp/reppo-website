import React, { useEffect } from 'react'
import FeatureGrid from '../components/FeatureGrid'
import ProfilePreview from '../components/ProfilePreview'
import InlineCTA from '../components/InlineCTA'

const Features = () => {
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
    <div className="pt-16">
      {/* Feature Grid - Show key features and benefits */}
      <FeatureGrid />
      
      {/* Profile Preview - Show the product in action */}
      <ProfilePreview />
      
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