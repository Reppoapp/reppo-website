import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top when route changes
    // Use multiple methods to ensure it works reliably
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Also try with a small delay in case of timing issues
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}

export default ScrollToTop 