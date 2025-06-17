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
    <section className="min-h-screen relative overflow-hidden bg-background pt-20 pb-16 px-4">
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
      
      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
        
        {/* Main Content - Centered layout like screenshot */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          
          {/* Main Headline - Matching screenshot style */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              Track Reps. Earn Streaks.{' '}
              <span className="text-gradient">Level Up.</span>
            </h1>
          </motion.div>
          
          {/* Supporting Subheading - Cleaner, more concise */}
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
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Reppo helps you stay accountable and compete with friends — every rep counts.
            </p>
          </motion.div>
          
          {/* CTA Buttons - Two buttons like in screenshot */}
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToWaitlist}
              className="bg-gradient-primary text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
            >
              Start Tracking
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </motion.button>
          </motion.div>
          
        </div>

        {/* Dashboard Mockup - Like in screenshot */}
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
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img 
                  src="/Reppo-Logo.png" 
                  alt="Reppo Logo" 
                  className="h-8 w-auto logo-gradient"
                />
                <span className="text-white font-semibold">Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Good morning, Athlete!</h3>
              <p className="text-text-secondary">Ready to crush today's workout? Let's build that streak.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Reps This Week */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-text-secondary font-medium">Reps This Week</h4>
                  <div className="text-2xl">💪</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">847</div>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <span className="text-sm text-green-400">+12%</span>
                </div>
              </div>

              {/* Current Streak */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-text-secondary font-medium">Current Streak</h4>
                  <div className="text-2xl">🔥</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">15 days</div>
                <div className="text-sm text-text-secondary">Personal best: 23 days</div>
              </div>

              {/* Active Challenges */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-text-secondary font-medium">Active Challenges</h4>
                  <div className="text-2xl">🏆</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-sm text-text-secondary">2 ending this week</div>
              </div>
            </div>

            {/* Today's Goals */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">Today's Goals</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z"/>
                    </svg>
                  </div>
                  <span className="text-text-secondary line-through">Complete 30 push-ups</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-white/30 rounded-full"></div>
                  <span className="text-white">Run 2 miles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-white/30 rounded-full"></div>
                  <span className="text-white">Log workout in app</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default HeroSection 