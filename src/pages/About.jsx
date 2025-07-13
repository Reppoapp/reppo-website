import React, { useEffect } from 'react'
import ProblemSection from '../components/ProblemSection'

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
    </div>
  )
}

export default About 