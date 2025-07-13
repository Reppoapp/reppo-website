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
    <div className="pt-16">
      {/* Final CTA - Convert visitors to waitlist with founder benefits */}
      <FinalCTA />
    </div>
  )
}

export default Join 