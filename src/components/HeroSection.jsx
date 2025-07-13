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
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced background effects with additional layers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-secondary/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/2 to-secondary/2 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center min-h-screen pt-16 pb-12 lg:pt-20 lg:pb-16">
          
          {/* LEFT SIDE: Enhanced Phone Mockup with floating animation */}
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
                {/* Enhanced phone frame with premium shadows */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl phone-glow relative">
                  {/* Premium glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-xl opacity-50"></div>
                  
                  <div className="bg-black rounded-[2rem] overflow-hidden relative z-10">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 sm:px-5 pt-3 text-white text-xs">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xs">100%</div>
                        <div className="w-5 h-2.5 border border-white rounded-sm">
                          <div className="w-full h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-4 sm:px-5 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src="/Reppo-Logo.png" alt="Reppo" className="h-5 sm:h-6 w-auto" />
                          <span className="text-white font-bold text-sm sm:text-base">Reppo</span>
                        </div>
                        <span className="text-gray-400 text-xs font-medium">TODAY ↓</span>
                      </div>
                    </div>

                    {/* Main content area - Performance stats */}
                    <div className="px-4 sm:px-5 pb-6 space-y-4">
                      {/* Large performance indicator */}
                      <div className="text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center relative overflow-hidden">
                          <span className="text-white text-xl sm:text-2xl font-bold relative z-10">+12%</span>
                        </div>
                        <div className="text-white">
                          <div className="text-xl sm:text-2xl font-bold mb-1">23</div>
                          <div className="text-xs text-gray-400 font-medium tracking-wide">VICTORIES TODAY</div>
                        </div>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="text-center">
                          <div className="text-white font-bold text-xs mb-1">STREAK</div>
                          <div className="text-primary text-base sm:text-lg font-bold">15</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold text-xs mb-1">WIN RATE</div>
                          <div className="text-secondary text-base sm:text-lg font-bold">89%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold text-xs mb-1">LEVEL</div>
                          <div className="text-gradient text-base sm:text-lg font-bold">12</div>
                        </div>
                      </div>

                      {/* Performance chart area */}
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>6AM</span>
                          <span>12PM</span>
                          <span>6PM</span>
                        </div>
                        <div className="flex items-end gap-1 h-10 sm:h-12">
                          {/* Simplified bar chart */}
                          {[65, 45, 80, 35, 90, 55, 75, 40, 85, 60, 95, 70].map((height, i) => (
                            <div 
                              key={i} 
                              className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-sm"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Today's challenge */}
                      <div className="text-center bg-gray-900/50 rounded-lg p-3">
                        <div className="text-gray-400 text-xs mb-1">TODAY'S CHALLENGE</div>
                        <div className="text-white font-semibold text-sm">Outperform Yesterday's Push-ups</div>
                        <div className="text-xs text-gray-500 mt-1">Target: 32 reps (vs yesterday's 28)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Enhanced Content with Glassmorphism */}
          <div className="order-1 lg:order-2 lg:col-span-3 space-y-6 sm:space-y-8 text-center lg:text-left px-2 sm:px-0">
            
            {/* Glassmorphism container around hero content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10"
              style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              {/* Enhanced Social Proof with animated counters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-400/30 rounded-full px-4 sm:px-5 py-2.5 shadow-lg"
                >
                  <div className="text-green-400 text-base sm:text-lg">🏆</div>
                  <span className="text-white text-sm sm:text-base font-semibold">Featured App</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex text-yellow-400">
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
                  <span className="text-white font-bold text-lg sm:text-xl">{featuredCount.toFixed(1)}</span>
                  <span className="text-gray-300 text-sm sm:text-base font-medium">{Math.floor(ratingCount / 1000)}K+ ratings</span>
                </motion.div>
              </motion.div>

              {/* Enhanced Main Headline - 20% larger with premium gradient */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4 mb-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="text-white">Outperform </span>
                  <span 
                    className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #FF3B30 0%, #8B5CF6 50%, #2979FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Yesterday
                  </span>
                  <span 
                    className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #FF3B30 0%, #8B5CF6 50%, #2979FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    .
                  </span>
                </h1>
              </motion.div>

              {/* Enhanced Description with new copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-8 font-medium"
              >
                The elite fitness community where yesterday's you becomes today's competition. Join{' '}
                <span className="text-white font-bold">
                  {Math.floor(userCount / 1000)}K+
                </span>{' '}
                athletes who've cracked the code to unstoppable daily progress.
              </motion.p>

              {/* Enhanced Feature Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8"
              >
                {[
                  { icon: '🔥', text: 'Daily Streaks', color: 'from-red-500/20 to-orange-500/20 border-red-400/30' },
                  { icon: '⚡', text: 'AI Challenges', color: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30' },
                  { icon: '🚀', text: 'Real Progress', color: 'from-purple-500/20 to-pink-500/20 border-purple-400/30' }
                ].map((badge, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`bg-gradient-to-r ${badge.color} backdrop-blur border rounded-full px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg`}
                  >
                    <span className="mr-2">{badge.icon}</span>
                    {badge.text}
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons with improved styling */}
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
                    boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToWaitlist}
                  className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg min-h-[56px] w-full sm:w-auto group"
                  style={{
                    boxShadow: '0 8px 32px rgba(255, 59, 48, 0.3)',
                  }}
                >
                  <span className="relative z-10">Join the Movement</span>
                  <motion.span 
                    className="text-xl relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToDemo}
                  className="border-2 border-white/30 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg min-h-[56px] w-full sm:w-auto backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span>Watch Demo</span>
                  <span className="text-xl">▶️</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS styles */}
      <style jsx>{`
        .phone-float {
          animation: phone-float 6s ease-in-out infinite;
        }
        
        .phone-glow {
          filter: drop-shadow(0 0 20px rgba(255, 59, 48, 0.3));
        }
        
        @keyframes phone-float {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #FF3B30 0%, #8B5CF6 50%, #2979FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #FF3B30 0%, #2979FF 100%);
        }
        
        /* Enhanced glassmorphism support */
        @supports (backdrop-filter: blur(20px)) {
          .backdrop-blur-\[20px\] {
            backdrop-filter: blur(20px);
          }
        }
        
        @supports not (backdrop-filter: blur(20px)) {
          .backdrop-blur-\[20px\] {
            background: rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection 