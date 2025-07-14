import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { supabase } from './lib/supabase'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Roadmap from './pages/Roadmap'
import Community from './pages/Community'
import Join from './pages/Join'
import FullScreenLoader from './components/FullScreenLoader'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'

// SEO and Schema Markup Component
const SEOHead = ({ page = 'home' }) => {
  const seoData = {
    home: {
      title: "Reppo - Train WITH Your Favorite Athletes | Live Athlete Data",
              description: "The first platform where you train with your favorite athletes using their actual workout data. When your favorite athlete finishes their workout, you get the AI-personalized version.",
      keywords: "live athlete data, train with athletes, authentic training, AI personalization, Garmin Apple Watch, verified athletes, real workout data",
      url: "https://reppo.app",
      image: "https://reppo.app/og-image.jpg"
    },
    features: {
      title: "Features - Live Athlete Data & AI Personalization | Reppo",
      description: "Explore Reppo's powerful features: live athlete data from Garmin/Apple Watch, AI personalization, authentic training, and community with your favorite athletes.",
      keywords: "live athlete data, AI personalization, authentic training, Garmin Apple Watch, verified athletes, workout scaling",
      url: "https://reppo.app/features",
      image: "https://reppo.app/og-features.jpg"
    },
    community: {
      title: "Community - Join 47,000+ Athletes Training with Favorites | Reppo",
      description: "Connect with athletes training with their favorite influencers. Read testimonials, see success stories, and join the community transforming fitness through authentic training.",
      keywords: "fitness community, athlete testimonials, training with favorites, authentic training success stories",
      url: "https://reppo.app/community",
      image: "https://reppo.app/og-community.jpg"
    },
    roadmap: {
      title: "Roadmap - Development Timeline & Founder Benefits | Reppo",
      description: "See our transparent development roadmap with real progress tracking, founder benefits, and behind-the-scenes insights from our engineering team.",
      keywords: "product roadmap, founder access, development timeline, AI fitness future",
      url: "https://reppo.app/roadmap",
      image: "https://reppo.app/og-roadmap.jpg"
    },
    about: {
      title: "About Reppo - The Future of Authentic Athlete Training",
      description: "Learn how Reppo is revolutionizing fitness with live athlete data and AI personalization. Discover our mission to connect athletes with their favorites' authentic training.",
      keywords: "about reppo, live athlete data, authentic training, AI personalization, fitness technology",
      url: "https://reppo.app/about",
      image: "https://reppo.app/og-about.jpg"
    },
    join: {
      title: "Join Waitlist - Get Founder Access to Reppo | Limited Spots",
      description: "Secure your founder access to Reppo's live athlete training platform. Only 127 spots remaining for exclusive access to verified athletes and AI personalization.",
      keywords: "join waitlist, founder access, early access, live athlete data, authentic training, exclusive membership",
      url: "https://reppo.app/join",
      image: "https://reppo.app/og-join.jpg"
    }
  }

  const data = seoData[page]
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reppo",
    "description": "Live athlete training platform that connects fitness enthusiasts with their favorite athletes through authentic workout data sharing and AI personalization.",
    "url": "https://reppo.app",
    "logo": "https://reppo.app/Reppo-Logo.png",
    "sameAs": [
      "https://twitter.com/reppoapp",
      "https://facebook.com/reppoapp",
      "https://instagram.com/reppoapp"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@reppo.app"
    },
    "offers": {
      "@type": "Offer",
      "name": "Founder Access",
      "description": "Exclusive founder access to AI-powered fitness competition platform",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="author" content="Reppo" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="og:url" content={data.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Reppo" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.image} />
      <meta name="twitter:site" content="@reppoapp" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1a1d29" />
      <link rel="canonical" href={data.url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

// Navigation component with Athletic Precision design
const Navigation = ({ isLoaded }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
  ]

  const scrollToWaitlist = () => {
    // If we're on home page, scroll to waitlist
    if (location.pathname === '/') {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to join page
      window.location.href = '/join'
    }
    setIsMobileMenuOpen(false)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  // Function to get nav item styling based on active state
  const getNavItemClass = (path) => {
    const isActive = location.pathname === path
    const baseClass = "font-medium focus:outline-none rounded-athletic px-3 py-2 transition-all duration-300"
    
    if (isActive) {
      return `${baseClass} text-primary-blue font-semibold`
    }
    
    return `${baseClass} text-primary-white/80 hover:text-primary-blue`
  }

  // Function to get mobile nav item styling
  const getMobileNavItemClass = (path) => {
    const isActive = location.pathname === path
    const baseClass = "block font-medium focus:outline-none rounded-athletic px-3 py-2 transition-all duration-300"
    
    if (isActive) {
      return `${baseClass} text-primary-blue font-semibold`
    }
    
    return `${baseClass} text-primary-white/80 hover:text-primary-blue`
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary-navy/95 backdrop-blur-md border-b border-primary-blue/20"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none rounded-athletic"
            aria-label="Reppo home"
            onClick={() => {
              // Ensure scroll to top when clicking logo
              setTimeout(() => {
                window.scrollTo(0, 0)
                document.documentElement.scrollTop = 0
                document.body.scrollTop = 0
              }, 100)
            }}
          >
            <img 
              src="/Reppo-Logo.png" 
              alt="Reppo Logo" 
              className="h-8 w-auto hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-primary-white tracking-tight">
              Reppo
            </span>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6" role="menubar">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={getNavItemClass(item.path)}
                role="menuitem"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/join"
            className="hidden md:block btn-primary bg-gradient-athletic text-primary-white font-semibold px-6 py-3 rounded-athletic hover:scale-105 transition-all duration-300 shadow-blue-glow focus:outline-none"
            aria-label="Join waitlist for early access"
          >
            Train with Favorites
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={(e) => handleKeyDown(e, () => setIsMobileMenuOpen(!isMobileMenuOpen))}
            className="md:hidden text-primary-white hover:text-primary-blue transition-colors focus:outline-none rounded-athletic p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary-navy/98 backdrop-blur-md border-t border-primary-blue/20"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={getMobileNavItemClass(item.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/join"
                className="w-full block btn-primary bg-gradient-athletic text-primary-white font-semibold px-6 py-3 rounded-athletic hover:scale-105 transition-all duration-300 shadow-blue-glow mt-4 focus:outline-none text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Join waitlist for early access"
              >
                Train with Favorites
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

// Enhanced Footer component with enterprise features
const Footer = ({ isLoaded }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('Please enter a valid email address')
      return
    }
    
    setIsSubmitting(true)
    setNewsletterStatus('')
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: newsletterEmail.toLowerCase().trim() }])

      if (error) {
        if (error.code === '23505') {
          setNewsletterStatus('You\'re already on the list! 🎉')
        } else {
          throw error
        }
      } else {
        setNewsletterStatus('Welcome to the elite! Check your email for next steps. 🚀')
        setNewsletterEmail('')
      }
    } catch (error) {
      console.error('Error:', error)
      setNewsletterStatus('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="footer bg-primary-navy border-t border-primary-blue/20 py-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Reppo-Logo.png" 
                alt="Reppo Logo" 
                className="h-8 w-auto"
              />
              <span className="footer-title text-primary-white">Reppo</span>
            </div>
            
            <p className="text-primary-white/80 mb-6 leading-relaxed">
              The first platform where you train WITH your favorite athletes using their actual workout data. 
              Authentic training powered by AI personalization.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-primary-white font-semibold mb-3">Join the Elite</h4>
              <p className="text-primary-white/60 text-sm mb-4">
                Get early access to live athlete data and AI-personalized training.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="waitlist-input flex-1"
                  aria-describedby="newsletter-description"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="waitlist-submit"
                  aria-label="Join waitlist"
                >
                  {isSubmitting ? 'Joining...' : 'Join Now'}
                </button>
              </form>
              {newsletterStatus && (
                <p className={`text-sm mt-2 ${newsletterStatus.includes('🎉') || newsletterStatus.includes('🚀') ? 'text-accent-green' : 'text-accent-orange'}`} role="status" aria-live="polite">{newsletterStatus}</p>
              )}
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-6 text-sm text-primary-white/60">
              <div className="flex items-center gap-2">
                <span className="text-accent-green" aria-hidden="true">✅</span>
                <span>100% Authentic Data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-blue" aria-hidden="true">🤖</span>
                <span>AI Personalized</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-primary-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-primary-white/70" role="list">
              <li><Link to="/features" className="footer-link">Features</Link></li>
              <li><Link to="/community" className="footer-link">Community</Link></li>
              <li><Link to="/join" className="footer-link">Join Waitlist</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-primary-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-primary-white/70" role="list">
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-blue/20">
          
          {/* Copyright */}
          <div className="text-primary-white/60 text-sm">
            © 2024 Reppo. Built by athletes, for athletes.
          </div>

          {/* Live Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-primary-white/70 font-mono">47K+ Athletes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-primary-white/70 font-mono">Live Data</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm text-primary-white/60">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

// Main App component with SEO and accessibility
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  // Ensure page always starts at top on load/refresh
  useEffect(() => {
    // Multiple methods to ensure reliable scroll to top on page load
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Also ensure it happens after a brief delay
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
          {/* SEO Head */}
          <SEOHead />
          
          {/* Full Screen Loader */}
          {!isLoaded && <FullScreenLoader onComplete={handleLoadingComplete} />}
          
          {/* Skip to main content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Skip to main content
          </a>
          
          {/* Navigation */}
          <Navigation isLoaded={isLoaded} />

          {/* Main Content with Staggered Fade-in */}
          <motion.main
            id="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            role="main"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/community" element={<Community />} />
              <Route path="/join" element={<Join />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.main>

          {/* Footer */}
          <Footer isLoaded={isLoaded} />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App 