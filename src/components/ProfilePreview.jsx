import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProfilePreview = () => {
  const [activeScreen, setActiveScreen] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const screens = [
    {
      title: "Competition Dashboard",
      description: "Track your victories against yesterday's performance in real-time"
    },
    {
      title: "AI Challenge Engine", 
      description: "Personalized challenges that evolve with your progress"
    },
    {
      title: "Performance Analytics",
      description: "Advanced metrics showing your improvement velocity"
    }
  ]

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Matching style */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Your <span className="text-gradient">Performance Dashboard</span> Awaits
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Experience the app that's transforming how elite athletes{' '}
            <span className="text-text-primary font-semibold">compete against themselves</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* App Preview - Interactive Phone Carousel */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.8, delay: 0.1, ease: "easeOut" }
              }
            }}
            className="relative order-2 lg:order-1"
          >
            {/* Single Phone Mockup - Simplified for mobile */}
            <div className="relative w-full max-w-[320px] sm:max-w-sm mx-auto">
              <div className="relative transform hover:scale-105 transition-transform duration-700">
                {/* Phone frame */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2rem] overflow-hidden relative">
                    
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
                        <span className="text-gray-400 text-xs font-medium">DASHBOARD</span>
                      </div>
                    </div>

                    {/* Main content - Competition Dashboard */}
                    <div className="px-4 sm:px-5 pb-6 space-y-4">
                      {/* Today's Battle */}
                      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 border border-primary/30">
                        <div className="text-center">
                          <div className="text-white font-bold text-lg mb-1">Today vs Yesterday</div>
                          <div className="text-gradient text-2xl font-black">VICTORY</div>
                          <div className="text-xs text-gray-400 mt-1">+15% improvement</div>
                        </div>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-white font-bold text-xs mb-1">WIN STREAK</div>
                          <div className="text-primary text-lg font-bold">12</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-white font-bold text-xs mb-1">VICTORIES</div>
                          <div className="text-secondary text-lg font-bold">847</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-white font-bold text-xs mb-1">LEVEL</div>
                          <div className="text-gradient text-lg font-bold">Elite</div>
                        </div>
                      </div>

                      {/* Recent Challenges */}
                      <div className="space-y-2">
                        <div className="text-white font-bold text-sm">Recent Challenges</div>
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-white text-sm font-medium">Push-ups Challenge</div>
                              <div className="text-xs text-gray-400">32 vs 28 yesterday</div>
                            </div>
                            <div className="text-green-400 text-xs font-bold">WON</div>
                          </div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-white text-sm font-medium">Plank Duration</div>
                              <div className="text-xs text-gray-400">2:15 vs 2:00 yesterday</div>
                            </div>
                            <div className="text-green-400 text-xs font-bold">WON</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
              }
            }}
            className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">🏆</div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Real-Time Competition Tracking</h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  Watch your battles unfold in real-time. Every rep, every second, every victory against yesterday's you is tracked and celebrated.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">📊</div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Performance Evolution</h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  See your fitness identity evolve through data-driven insights. Track improvement velocity, consistency, and breakthrough moments.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">🎯</div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Intelligent Challenge System</h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  AI-powered challenges that adapt to your progress. Never too easy, never impossible - always perfectly calibrated for growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default ProfilePreview 