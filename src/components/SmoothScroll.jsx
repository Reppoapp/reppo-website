import React, { useEffect } from 'react'

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Smooth scrolling for all anchor links
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href')
      
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add smooth scroll to all internal links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    // Enhanced smooth scrolling CSS
    document.documentElement.style.scrollBehavior = 'smooth'

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll 