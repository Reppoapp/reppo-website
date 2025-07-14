import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [userCount, setUserCount] = useState(47000)
  const [featuredCount, setFeaturedCount] = useState(4.9)
  const [ratingCount, setRatingCount] = useState(47000)

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (start, end, duration, setter) => {
      const increment = (end - start) / (duration / 16)
      let current = start
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setter(end)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 16)
    }

    // Animate counters on mount
    animateCounter(45000, 47000, 2000, setUserCount)
    animateCounter(4.5, 4.9, 1500, setFeaturedCount)
    animateCounter(45000, 47000, 2000, setRatingCount)
  }, [])

  const scrollToWaitlist = () => {
    window.location.href = '/join'
  }

  const scrollToDemo = () => {
    // Scroll to demo section or handle demo action
    const demoSection = document.getElementById('demo') || document.getElementById('how-it-works')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-navy relative overflow-hidden">
      {/* Athletic Precision background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-athletic/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center min-h-screen pt-16 pb-12 lg:pt-20 lg:pb-16">
          
          {/* LEFT SIDE: Athletic Precision Phone Mockup */}
          <div className="order-2 lg:order-1 lg:col-span-2 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-[280px] sm:max-w-xs mx-auto lg:mx-0"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-3, -1, -3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative transform hover:rotate-0 transition-transform duration-700 phone-float"
              >
                {/* Athletic Precision phone frame */}
                <div className="bg-gradient-to-b from-primary-navy to-gray-900 rounded-[2.5rem] p-2 shadow-athletic-xl relative">
                  {/* Premium blue glow effect */}
                  <div className="absolute inset-0 bg-gradient-athletic/20 rounded-[2.5rem] blur-xl opacity-50"></div>
                  
                  <div className="bg-primary-white rounded-[2rem] overflow-hidden relative z-10">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 sm:px-5 pt-3 text-primary-navy text-xs">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-primary-navy rounded-full"></div>
                          <div className="w-1 h-1 bg-primary-navy rounded-full"></div>
                          <div className="w-1 h-1 bg-primary-navy rounded-full"></div>
                        </div>
                        <div className="text-xs">100%</div>
                        <div className="w-5 h-2.5 border border-primary-navy rounded-sm">
                          <div className="w-full h-full bg-accent-green rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-4 sm:px-5 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src="/Reppo-Logo.png" alt="Reppo" className="h-5 sm:h-6 w-auto" />
                          <span className="text-primary-navy font-bold text-sm sm:text-base">Reppo</span>
                        </div>
                        <span className="text-text-gray text-xs font-medium">TODAY ↓</span>
                      </div>
                    </div>

                    {/* Main content area - Athletic Performance stats */}
                    <div className="px-4 sm:px-5 pb-6 space-y-4">
                      {/* Large performance indicator */}
                      <div className="text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 bg-gradient-athletic rounded-full flex items-center justify-center relative overflow-hidden">
                          <span className="text-primary-white text-xl sm:text-2xl font-bold font-mono relative z-10">+12%</span>
                        </div>
                        <div className="text-primary-navy">
                          <div className="text-xl sm:text-2xl font-bold mb-1 font-mono">23</div>
                          <div className="text-xs text-text-gray font-medium tracking-wide">VICTORIES TODAY</div>
                        </div>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="text-center">
                          <div className="text-primary-navy font-bold text-xs mb-1">STREAK</div>
                          <div className="text-primary-blue text-base sm:text-lg font-bold font-mono">15</div>
                        </div>
                        <div className="text-center">
                          <div className="text-primary-navy font-bold text-xs mb-1">WIN RATE</div>
                          <div className="text-accent-orange text-base sm:text-lg font-bold font-mono">89%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-primary-navy font-bold text-xs mb-1">LEVEL</div>
                          <div className="text-gradient text-base sm:text-lg font-bold font-mono">12</div>
                        </div>
                      </div>

                      {/* Performance chart area */}
                      <div className="bg-neutral-gray rounded-athletic p-3">
                        <div className="flex justify-between text-xs text-text-gray mb-2">
                          <span>6AM</span>
                          <span>12PM</span>
                          <span>6PM</span>
                        </div>
                        <div className="flex items-end gap-1 h-10 sm:h-12">
                          {/* Athletic data visualization */}
                          {[65, 45, 80, 35, 90, 55, 75, 40, 85, 60, 95, 70].map((height, i) => (
                            <div 
                              key={i} 
                              className="flex-1 bg-gradient-athletic rounded-sm"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Today's challenge */}
                      <div className="text-center bg-neutral-gray rounded-athletic p-3">
                        <div className="text-text-gray text-xs mb-1">LIVE ATHLETE WORKOUT</div>
                        <div className="text-primary-navy font-semibold text-sm">Elite Athlete's Morning Run</div>
                        <div className="text-xs text-text-gray mt-1">AI-scaled to your level: 3.2 miles</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Athletic Precision Content */}
          <div className="order-1 lg:order-2 lg:col-span-3 space-y-6 sm:space-y-8 text-center lg:text-left px-2 sm:px-0">
            
            {/* Athletic Precision glass container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative glass-card p-6 sm:p-8 lg:p-10"
            >
              {/* Enhanced Social Proof with athletic styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-accent-green/20 backdrop-blur border border-accent-green/30 rounded-full px-4 sm:px-5 py-2.5 shadow-athletic"
                >
                  <div className="text-accent-green text-base sm:text-lg">🏆</div>
                  <span className="text-primary-navy text-sm sm:text-base font-semibold">Featured App</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex text-accent-orange">
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-base sm:text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <span className="text-primary-navy font-bold text-lg sm:text-xl font-mono">{featuredCount.toFixed(1)}</span>
                  <span className="text-text-gray text-sm sm:text-base font-medium">{Math.floor(ratingCount / 1000)}K+ ratings</span>
                </motion.div>
              </motion.div>

              {/* Athletic Precision Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4 mb-6"
              >
                <h1 className="hero-title">
                  <span className="text-primary-navy">Train </span>
                  <span className="text-gradient">WITH</span>
                  <span className="text-primary-navy"> Your </span>
                  <span className="text-gradient">Favorites</span>
                </h1>
              </motion.div>

              {/* Athletic Precision Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl text-text-gray leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-8 font-medium"
              >
                The first platform where you train with your favorite athletes using their actual workout data. When your favorite athlete finishes their workout, you get the AI-personalized version. Join{' '}
                <span className="text-primary-navy font-bold font-mono">
                  {Math.floor(userCount / 1000)}K+
                </span>{' '}
                athletes who train alongside their favorites using live Garmin and Apple Watch data.
              </motion.p>

              {/* Athletic Precision Feature Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8"
              >
                {[
                  { icon: '📱', text: 'Live Athlete Data', color: 'bg-primary-blue/20 border-primary-blue/30' },
                  { icon: '🤖', text: 'AI Personalization', color: 'bg-accent-orange/20 border-accent-orange/30' },
                  { icon: '🏆', text: 'Authentic Training', color: 'bg-accent-green/20 border-accent-green/30' }
                ].map((badge, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`${badge.color} backdrop-blur border rounded-full px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold text-primary-navy shadow-athletic`}
                  >
                    <span className="mr-2">{badge.icon}</span>
                    {badge.text}
                  </motion.span>
                ))}
              </motion.div>

              {/* Athletic Precision CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToWaitlist}
                  className="btn-primary relative overflow-hidden bg-gradient-athletic text-primary-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-athletic shadow-blue-glow transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg min-h-[56px] w-full sm:w-auto group"
                >
                  <span className="relative z-10">Join the Movement</span>
                  <motion.span 
                    className="text-xl relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </motion.button>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    backgroundColor: 'rgba(26, 29, 41, 0.1)',
                    borderColor: 'rgba(26, 29, 41, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToDemo}
                  className="btn-secondary border-2 border-primary-navy/30 text-primary-navy font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-athletic hover:shadow-athletic transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg min-h-[56px] w-full sm:w-auto backdrop-blur-sm"
                >
                  <span>Watch Demo</span>
                  <span className="text-xl">▶️</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Athletic Precision CSS styles */}
      <style jsx>{`
        .phone-float {
          animation: phone-float 6s ease-in-out infinite;
        }
        
        @keyframes phone-float {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #00d4ff 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Enhanced glassmorphism support */
        @supports (backdrop-filter: blur(20px)) {
          .glass-card {
            backdrop-filter: blur(20px);
          }
        }
        
        @supports not (backdrop-filter: blur(20px)) {
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection 