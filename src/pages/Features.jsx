import React from 'react'
import FeatureGrid from '../components/FeatureGrid'
import AppPreviewSection from '../components/ProfilePreview'
import InlineCTA from '../components/InlineCTA'

const Features = () => {
  return (
    <div className="pt-16">
      <FeatureGrid />
      <AppPreviewSection />
      
      {/* Bottom CTA for Features page */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <InlineCTA
            title="Experience These Features Yourself"
            description="See why thousands of athletes are choosing Reppo over generic fitness apps. Your grind deserves recognition."
            buttonText="Join the Elite"
            size="large"
          />
        </div>
      </section>
    </div>
  )
}

export default Features 