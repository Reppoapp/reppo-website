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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-4">
      {/* Background Pattern - Subtle grid like in screenshot */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 z' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-25"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 min-h-screen flex flex-col">
        
        {/* Main Content - Properly centered with more top spacing like screenshot */}
        <div className="flex-1 flex flex-col justify-center items-center pt-32 pb-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Main Headline - Updated copy */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                Your Grind Deserves a{' '}
                <span className="text-gradient">Platform.</span>
              </h1>
            </motion.div>
            
            {/* Supporting Subheading - Updated copy */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                ...fadeInUp,
                animate: {
                  ...fadeInUp.animate,
                  transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
                }
              }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Reppo is where real effort gets real recognition. Join the movement that's redefining fitness — one streak, one badge, one rep at a time.
              </p>
            </motion.div>
            
            {/* CTA Button - Single button with updated copy */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                ...fadeInUp,
                animate: {
                  ...fadeInUp.animate,
                  transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
                }
              }}
              className="flex justify-center items-center pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWaitlist}
                className="bg-gradient-primary text-white font-semibold text-base px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Streak
              </motion.button>
            </motion.div>
            
          </div>

          {/* Dashboard Mockup - Like in screenshot with tighter spacing */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
              }
            }}
            className="mt-12 max-w-5xl mx-auto w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <img 
                    src="/Reppo-Logo.png" 
                    alt="Reppo Logo" 
                    className="h-6 w-auto logo-gradient"
                  />
                  <span className="text-white font-semibold text-sm">Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Welcome Message */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Good morning, Athlete!</h3>
                <p className="text-text-secondary text-sm">Ready to crush today's workout? Let's build that streak.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Reps This Week */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-text-secondary font-medium text-sm">Reps This Week</h4>
                    <div className="text-lg">💪</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">847</div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-gradient-primary h-1.5 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-xs text-green-400">+12%</span>
                  </div>
                </div>

                {/* Current Streak */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-text-secondary font-medium text-sm">Current Streak</h4>
                    <div className="text-lg">🔥</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">15 days</div>
                  <div className="text-xs text-text-secondary">Personal best: 23 days</div>
                </div>

                {/* Active Challenges */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-text-secondary font-medium text-sm">Active Challenges</h4>
                    <div className="text-lg">🏆</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">3</div>
                  <div className="text-xs text-text-secondary">2 ending this week</div>
                </div>
              </div>

              {/* Today's Goals */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3 text-sm">Today's Goals</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z"/>
                      </svg>
                    </div>
                    <span className="text-text-secondary line-through text-sm">Complete 30 push-ups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-white/30 rounded-full"></div>
                    <span className="text-white text-sm">Run 2 miles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-white/30 rounded-full"></div>
                    <span className="text-white text-sm">Log workout in app</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 