import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Roadmap from './pages/Roadmap'
import Community from './pages/Community'
import FullScreenLoader from './components/FullScreenLoader'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'

// SEO and Schema Markup Component
const SEOHead = ({ page = 'home' }) => {
  const seoData = {
    home: {
      title: "Reppo - AI-Powered Fitness Competition Platform | Outperform Yesterday",
      description: "Transform your fitness journey with AI-powered challenges that pit you against yesterday's performance. Join 47,000+ athletes already outperforming their limits.",
      keywords: "AI fitness, personal competition, fitness challenges, performance tracking, workout motivation, fitness app, AI training, athletic performance",
      url: "https://reppo.app",
      image: "https://reppo.app/og-image.jpg"
    },
    about: {
      title: "About Reppo - The Future of AI-Powered Fitness Competition",
      description: "Learn how Reppo is revolutionizing fitness with AI-powered personal competition. Discover our mission to help athletes outperform yesterday, every single day.",
      keywords: "about reppo, AI fitness company, fitness technology, personal competition platform",
      url: "https://reppo.app/about",
      image: "https://reppo.app/og-about.jpg"
    },
    features: {
      title: "Features - AI Challenge Engine & Performance Analytics | Reppo",
      description: "Explore Reppo's powerful features: AI challenge generation, performance tracking, victory analytics, and community leaderboards for elite athletes.",
      keywords: "AI challenges, performance analytics, fitness features, workout tracking, competition platform",
      url: "https://reppo.app/features",
      image: "https://reppo.app/og-features.jpg"
    },
    roadmap: {
      title: "Roadmap - Development Timeline & Founder Benefits | Reppo",
      description: "See our transparent development roadmap with real progress tracking, founder benefits, and behind-the-scenes insights from our engineering team.",
      keywords: "product roadmap, founder access, development timeline, AI fitness future",
      url: "https://reppo.app/roadmap",
      image: "https://reppo.app/og-roadmap.jpg"
    },
    community: {
      title: "Community - Join 47,000+ Elite Athletes | Reppo",
      description: "Connect with performance athletes worldwide. Read testimonials, see success stories, and join the elite community transforming fitness through AI competition.",
      keywords: "fitness community, athlete testimonials, elite athletes, fitness success stories",
      url: "https://reppo.app/community",
      image: "https://reppo.app/og-community.jpg"
    }
  }

  const data = seoData[page]
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reppo",
    "description": "AI-powered fitness competition platform that transforms daily workouts into intelligent battles against yesterday's performance.",
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
      <meta name="theme-color" content="#FF3B30" />
      <link rel="canonical" href={data.url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

// Navigation component with accessibility improvements
const Navigation = ({ isLoaded }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Community', path: '/community' },
  ]

  const scrollToWaitlist = () => {
    // If we're on home page, scroll to waitlist
    if (location.pathname === '/') {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to home and then scroll
      window.location.href = '/#waitlist'
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

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
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
              className="h-8 w-auto hover:scale-105 transition-transform duration-300 logo-gradient"
            />
            <span className="text-xl font-bold text-white tracking-tight">
              Reppo
            </span>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8" role="menubar">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
              role="menuitem"
              aria-label="Learn about our story"
            >
              Our Story
            </Link>
            <Link 
              to="/features" 
              className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
              role="menuitem"
              aria-label="Explore platform features"
            >
              Features
            </Link>
            <Link 
              to="/roadmap" 
              className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
              role="menuitem"
              aria-label="View development roadmap"
            >
              Roadmap
            </Link>
            <Link 
              to="/community" 
              className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
              role="menuitem"
              aria-label="Join our community"
            >
              Community
            </Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={scrollToWaitlist}
            onKeyDown={(e) => handleKeyDown(e, scrollToWaitlist)}
            className="hidden md:block bg-gradient-primary text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Join waitlist for early access"
          >
            Join Waitlist
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={(e) => handleKeyDown(e, () => setIsMobileMenuOpen(!isMobileMenuOpen))}
            className="md:hidden text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-2"
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
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1" 
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Our Story
              </Link>
              <Link 
                to="/features" 
                className="block text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1" 
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Features
              </Link>
              <Link 
                to="/roadmap" 
                className="block text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1" 
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Roadmap
              </Link>
              <Link 
                to="/community" 
                className="block text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1" 
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Community
              </Link>
              <button 
                onClick={scrollToWaitlist}
                onKeyDown={(e) => handleKeyDown(e, scrollToWaitlist)}
                className="w-full bg-gradient-primary text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30 mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Join waitlist for early access"
              >
                Join Waitlist
              </button>
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

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('Please enter a valid email address')
      return
    }
    
    try {
      // Add newsletter signup logic here
      setNewsletterStatus('Thanks for subscribing! 🚀')
      setNewsletterEmail('')
    } catch (error) {
      setNewsletterStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-black/95 backdrop-blur-md border-t border-white/10 py-12 sm:py-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Reppo-Logo.png" 
                alt="Reppo Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">Reppo</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered fitness competition platform that transforms your daily workouts into intelligent battles against yesterday's you. Join 47,000+ performance athletes already outperforming their limits.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Get Exclusive Updates</h4>
              <p className="text-gray-400 text-sm mb-4">
                Early access to new features, performance insights, and founder-only content.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                  aria-describedby="newsletter-description"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
              {newsletterStatus && (
                <p className="text-sm mt-2 text-gray-300" role="status" aria-live="polite">{newsletterStatus}</p>
              )}
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400" aria-hidden="true">🔒</span>
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400" aria-hidden="true">⭐</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-300" role="list">
              <li><Link to="/features" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Features</Link></li>
              <li><Link to="/roadmap" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Roadmap</Link></li>
              <li><a href="#waitlist" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Join Waitlist</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">API Documentation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-300" role="list">
              <li><Link to="/about" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">About Us</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Community</Link></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Contact</a></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-300" role="list">
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Community Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">System Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Bug Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        {/* Press Mentions & Trust Signals */}
        <div className="mb-12 py-8 border-t border-b border-white/10">
          <h4 className="text-white font-semibold mb-6 text-center">Trusted by Performance Athletes</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {/* Placeholder press mentions */}
            <div className="text-center">
              <div className="text-2xl mb-2" aria-hidden="true">📱</div>
              <div className="text-sm text-gray-400">Featured in TechCrunch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2" aria-hidden="true">🏆</div>
              <div className="text-sm text-gray-400">App of the Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2" aria-hidden="true">⭐</div>
              <div className="text-sm text-gray-400">Product Hunt #1</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2" aria-hidden="true">🎯</div>
              <div className="text-sm text-gray-400">Fitness Weekly</div>
            </div>
          </div>
        </div>

        {/* Social Media & Stats */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Follow us on Twitter">
                <span className="text-lg" aria-hidden="true">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Follow us on Facebook">
                <span className="text-lg" aria-hidden="true">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Follow us on Instagram">
                <span className="text-lg" aria-hidden="true">📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Follow us on TikTok">
                <span className="text-lg" aria-hidden="true">🎵</span>
              </a>
            </div>
          </div>

          {/* Live Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-gray-300">47,000+ Athletes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-gray-300">2.3M+ Workouts Tracked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-gray-300">127 Spots Left</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 Reppo. All rights reserved. Built with ❤️ for performance athletes.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">GDPR</a>
          </div>

          {/* Security Badges */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span className="text-green-400" aria-hidden="true">🔒</span>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span className="text-blue-400" aria-hidden="true">🛡️</span>
              <span>SOC 2 Compliant</span>
            </div>
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