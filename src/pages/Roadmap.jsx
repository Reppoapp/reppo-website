import React from 'react'
import RoadmapSection from '../components/RoadmapSection'
import InlineCTA from '../components/InlineCTA'

const Roadmap = () => {
  return (
    <div className="pt-16">
      <RoadmapSection />
      
      {/* Bottom CTA for Roadmap page */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <InlineCTA
            title="Be Part of the Future"
            description="Don't just watch the fitness revolution—help build it. Founders get exclusive access to shape what comes next."
            buttonText="Secure Founder Access"
            size="large"
          />
        </div>
      </section>
    </div>
  )
}

export default Roadmap 