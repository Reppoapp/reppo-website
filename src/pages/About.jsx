import React from 'react'
import ProblemSection from '../components/ProblemSection'
import HowItWorks from '../components/HowItWorks'
import InlineCTA from '../components/InlineCTA'

const About = () => {
  return (
    <div className="pt-16">
      {/* Problem Section - Our mission and vision */}
      <ProblemSection />
      
      {/* How It Works - Our approach and methodology */}
      <HowItWorks />
      
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