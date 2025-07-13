import React, { useEffect } from 'react'
import ProblemSection from '../components/ProblemSection'
import InlineCTA from '../components/InlineCTA'

const About = () => {
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
      {/* Problem Section - Our mission and vision */}
      <ProblemSection />
      
      {/* CTA to learn more or join */}
      <InlineCTA 
        title="Ready to Transform Your Fitness Journey?"
        subtitle="Join the movement that's changing how athletes approach daily training"
        primaryButtonText="Start Your Journey"
        size="large"
        className="my-16"
      />
    </div>
  )
}

export default About 