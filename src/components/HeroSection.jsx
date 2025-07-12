import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="min-h-screen opal-bg relative overflow-hidden">
      {/* Minimal background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center min-h-screen pt-20">
          
          {/* LEFT SIDE: Phone Mockup - Smaller and with more spacing */}
          <div className="order-2 lg:order-1 lg:col-span-2 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative max-w-xs mx-auto lg:mx-0"
            >
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-700 phone-float">
                {/* Phone frame with realistic shadows */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl phone-glow">
                  <div className="bg-black rounded-[2rem] overflow-hidden relative">
                    
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-5 pt-3 text-white text-xs">
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
                    <div className="px-5 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src="/Reppo-Logo.png" alt="Reppo" className="h-6 w-auto" />
                          <span className="text-white font-bold text-base">Reppo</span>
                        </div>
                        <span className="text-gray-400 text-xs font-medium">TODAY ↓</span>
                      </div>
                    </div>

                    {/* Main content area - Performance stats */}
                    <div className="px-5 pb-6 space-y-4">
                      {/* Large performance indicator */}
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center relative overflow-hidden">
                          <span className="text-white text-2xl font-bold relative z-10">+12%</span>
                        </div>
                        <div className="text-white">
                          <div className="text-2xl font-bold mb-1">23</div>
                          <div className="text-xs text-gray-400 font-medium tracking-wide">VICTORIES TODAY</div>
                        </div>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-white font-bold text-xs mb-1">STREAK</div>
                          <div className="text-primary text-lg font-bold">15</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold text-xs mb-1">WIN RATE</div>
                          <div className="text-secondary text-lg font-bold">89%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold text-xs mb-1">LEVEL</div>
                          <div className="text-gradient text-lg font-bold">12</div>
                        </div>
                      </div>

                      {/* Performance chart area */}
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>6AM</span>
                          <span>12PM</span>
                          <span>6PM</span>
                        </div>
                        <div className="flex items-end gap-1 h-12">
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
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content - More space */}
          <div className="order-1 lg:order-2 lg:col-span-3 space-y-8 text-center lg:text-left hero-fade-in">
            
            {/* Social Proof Badges - Top positioned like Opal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-4 py-2">
                <div className="text-green-400">🏆</div>
                <span className="text-white text-sm font-medium">Featured App</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <span className="text-white font-bold">4.9</span>
                <span className="text-gray-400 text-sm">10K+ ratings</span>
              </div>
            </motion.div>

            {/* Main Headline - Updated to "Outperform Yesterday" with gradient on "Yesterday" */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
                Outperform{' '}
                <span className="text-gradient">
                  Yesterday
                </span>
              </h1>
            </motion.div>

            {/* Subtitle - Clean and informative like Opal */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              So we made outperforming yesterday addictive. Join over 10,000 athletes using AI to compete with their past selves daily.
            </motion.p>

            {/* Dual CTA Buttons - Matching Opal's style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWaitlist}
                className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Join Waitlist</span>
                <span>🚀</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Watch Demo</span>
                <span>▶️</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Statistics - Opal style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-gray-400 text-lg font-medium tracking-wider">
            <span className="text-white font-bold">2,847</span> hours of improved performance with Reppo
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 