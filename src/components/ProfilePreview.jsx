import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProfilePreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeScreen, setActiveScreen] = useState(0)
  const [metrics, setMetrics] = useState({
    victories: 0,
    streak: 0,
    improvement: 0
  })

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  // Auto-cycle through screens
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveScreen(prev => (prev + 1) % 3)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  // Animate metrics counters
  useEffect(() => {
    if (isInView) {
      const animateCounter = (start, end, duration, setter, key) => {
        const increment = (end - start) / (duration / 16)
        let current = start
        const timer = setInterval(() => {
          current += increment
          if (current >= end) {
            setter(prev => ({ ...prev, [key]: end }))
            clearInterval(timer)
          } else {
            setter(prev => ({ ...prev, [key]: Math.floor(current) }))
          }
        }, 16)
      }

      // Animate different metrics
      animateCounter(0, 23, 2000, setMetrics, 'victories')
      animateCounter(0, 15, 1800, setMetrics, 'streak')
      animateCounter(0, 12, 1500, setMetrics, 'improvement')
    }
  }, [isInView])

  const screens = [
    {
      title: "Competition Dashboard",
      description: "Track your victories against yesterday's performance in real-time with advanced analytics and progress visualization.",
      features: [
        "Real-time victory tracking",
        "Performance comparison charts",
        "Daily challenge progress",
        "Streak monitoring system"
      ],
      metric: "94% see immediate improvement",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "AI Challenge Engine", 
      description: "Personalized challenges that evolve with your progress, ensuring optimal growth without plateaus or burnout.",
      features: [
        "Adaptive difficulty scaling",
        "Personalized challenge generation", 
        "Smart recovery integration",
        "Progress velocity optimization"
      ],
      metric: "23% average performance boost",
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      title: "Performance Analytics",
      description: "Advanced metrics showing your improvement velocity, consistency patterns, and breakthrough moments with elite-level insights.",
      features: [
        "Improvement velocity tracking",
        "Consistency pattern analysis",
        "Breakthrough moment detection",
        "Elite performance benchmarking"
      ],
      metric: "89% maintain 30+ day streaks",
      gradient: "from-primary/20 to-secondary/20"
    }
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/6 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Enhanced Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-green-400 text-sm">📱</span>
            <span className="text-white text-sm font-semibold">EXPERIENCE THE TRANSFORMATION</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Your Performance{' '}
            <span className="text-gradient">Dashboard Awaits</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            See how elite athletes track their daily victories and{' '}
            <span className="text-text-primary font-bold">transform their fitness journey</span>{' '}
            through intelligent self-competition.
          </p>
        </motion.div>

        {/* Enhanced Phone Preview with Screen Transitions */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          
          {/* LEFT SIDE: Enhanced Phone Mockup */}
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
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-sm mx-auto lg:mx-0">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [2, -1, 2]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative transform hover:scale-105 transition-transform duration-500"
              >
                {/* Enhanced phone frame with premium effects */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl relative"
                  style={{
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(255, 59, 48, 0.2)'
                  }}
                >
                  {/* Premium glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2.5rem] blur-xl opacity-60 animate-pulse"></div>
                  
                  <div className="bg-black rounded-[2rem] overflow-hidden relative z-10">
                    
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

                    {/* App header with screen indicator */}
                    <div className="px-5 py-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <img src="/Reppo-Logo.png" alt="Reppo" className="h-6 w-auto" />
                          <span className="text-white font-bold text-base">Reppo</span>
                        </div>
                        <div className="flex gap-1">
                          {[0, 1, 2].map((index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                activeScreen === index ? 'bg-primary' : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Screen title */}
                      <h3 className="text-white font-bold text-lg mb-2">
                        {screens[activeScreen].title}
                      </h3>
                    </div>

                    {/* Dynamic content area with transitions */}
                    <motion.div
                      key={activeScreen}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="px-5 pb-6 space-y-4"
                    >
                      {/* Large performance indicator */}
                      <div className="text-center">
                        <motion.div 
                          className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center relative overflow-hidden"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-white text-2xl font-bold relative z-10">
                            +{metrics.improvement}%
                          </span>
                        </motion.div>
                        <div className="text-white">
                          <div className="text-2xl font-bold mb-1">{metrics.victories}</div>
                          <div className="text-xs text-gray-400 font-medium tracking-wide">VICTORIES TODAY</div>
                        </div>
                      </div>

                      {/* Stats grid with animated counters */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-white font-bold text-xs mb-1">STREAK</div>
                          <motion.div 
                            className="text-primary text-lg font-bold"
                            animate={{ scale: metrics.streak > 0 ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {metrics.streak}
                          </motion.div>
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
                          {[65, 45, 80, 35, 90, 55, 75, 40, 85, 60, 95, 70].map((height, i) => (
                            <motion.div 
                              key={i} 
                              className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-sm"
                              style={{ height: `${height}%` }}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: i * 0.1, duration: 0.5 }}
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
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Enhanced Feature Descriptions */}
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
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Screen navigation */}
            <div className="flex flex-wrap gap-3 mb-8">
              {screens.map((screen, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeScreen === index
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {screen.title}
                </motion.button>
              ))}
            </div>

            {/* Active screen content */}
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${screens[activeScreen].gradient} backdrop-blur-[20px] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl`}
              style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                {screens[activeScreen].title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg lg:text-xl mb-6">
                {screens[activeScreen].description}
              </p>

              {/* Success metric */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-400/30 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">📈</span>
                  <span className="text-green-300 font-bold text-sm sm:text-base">
                    {screens[activeScreen].metric}
                  </span>
                </div>
              </div>

              {/* Feature list */}
              <div className="space-y-3">
                {screens[activeScreen].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-text-secondary text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
            }
          }}
          className="text-center pt-8 sm:pt-12 border-t border-white/10"
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-6 leading-tight">
              Ready to Experience{' '}
              <span className="text-gradient">Your Transformation</span>?
            </h3>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Join the elite athletes who've discovered what real progress looks like with AI-powered self-competition.
            </p>

            {/* Metrics showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">{metrics.victories}</div>
                <div className="text-sm text-gray-300">Daily victories tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">{metrics.streak}</div>
                <div className="text-sm text-gray-300">Day winning streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">+{metrics.improvement}%</div>
                <div className="text-sm text-gray-300">Performance improvement</div>
              </div>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-2xl transition-all duration-300 text-lg sm:text-xl hover:shadow-primary/40 group mb-6"
            >
              <span>Experience Your Dashboard</span>
              <motion.span 
                className="ml-3 text-2xl"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📱
              </motion.span>
            </motion.button>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Live tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📊</span>
                <span>Real analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">🏆</span>
                <span>Daily victories</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default ProfilePreview 