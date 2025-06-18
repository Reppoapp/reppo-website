import React from 'react'
import ProblemSection from '../components/ProblemSection'
import HowItWorks from '../components/HowItWorks'
import InlineCTA from '../components/InlineCTA'

const About = () => {
  return (
    <div className="pt-16">
      <ProblemSection />
      <HowItWorks />
      
      {/* Bottom CTA for About page */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <InlineCTA
            title="Ready to Transform Your Fitness Journey?"
            description="Stop settling for apps that don't understand what drives real athletes. Join the movement that rewards consistency."
            buttonText="Start My Transformation"
            size="large"
          />
        </div>
      </section>
    </div>
  )
}

export default About 