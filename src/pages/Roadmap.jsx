import React, { useEffect } from 'react'
import RoadmapSection from '../components/RoadmapSection'

const Roadmap = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="pt-16">
      <RoadmapSection />
    </div>
  )
}

export default Roadmap 