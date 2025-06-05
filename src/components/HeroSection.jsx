import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Simplified animation variants for better performance
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-card-bg to-background pt-20 pb-12 px-4">
      {/* Enhanced Background Elements with Subtle Gradients */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
        
        {/* Geometric background shapes for visual depth */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial-coral rounded-full opacity-30 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial-blue rounded-full opacity-25 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-white/5 to-primary/10 rounded-full opacity-30 blur-2xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Hero Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            {/* Main Headline - Bold and Identity-Focused */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-text-primary mb-2">Where Fitness</span>
                <span className="block gradient-text">Meets Identity.</span>
              </h1>
            </motion.div>
            
            {/* Supporting Subheading - Community-Focused */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                ...fadeInUp,
                animate: {
                  ...fadeInUp.animate,
                  transition: { duration: 0.5, delay: 0.1, ease: "easeOut" }
                }
              }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                Reppo is the social fitness platform where{' '}
                <span className="text-text-primary font-semibold">hybrid athletes, runners, lifters, and movement lovers</span>{' '}
                connect, track progress, and level up — one rep at a time.{' '}
                <span className="gradient-text font-semibold">No comments. Just community, streaks, and real recognition.</span>
              </p>
            </motion.div>
            
            {/* Call-to-Action Button - Updated Text */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                ...fadeInUp,
                animate: {
                  ...fadeInUp.animate,
                  transition: { duration: 0.5, delay: 0.2, ease: "easeOut" }
                }
              }}
              className="flex justify-center lg:justify-start px-4 lg:px-0"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 59, 48, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWaitlist}
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl shadow-primary/30 transition-all duration-300 hover:shadow-3xl hover:shadow-primary/40 relative overflow-hidden group min-h-[48px]"
              >
                <span className="relative z-10">Join the Waitlist – Get Early Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Subtext Below Button */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                ...fadeInUp,
                animate: {
                  ...fadeInUp.animate,
                  transition: { duration: 0.5, delay: 0.3, ease: "easeOut" }
                }
              }}
              className="text-center lg:text-left"
            >
              <p className="text-text-secondary text-base sm:text-lg font-medium">
                <span className="gradient-text font-semibold">Get in early.</span> Earn exclusive founder badges and merch.
              </p>
            </motion.div>
            
          </div>
          
          {/* Right Column - User Profile Mockup with Identity Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
            }}
            className="relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            {/* Profile Identity Mockup Container */}
            <div className="relative">
              
              {/* Main Profile Card - Identity-Focused */}
              <div className="relative w-[320px] sm:w-[380px] bg-gradient-to-b from-card-bg to-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">
                
                {/* Profile Header */}
                <div className="text-center mb-6">
                  {/* Profile Photo with Status */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B30] via-[#FF6B30] to-[#2979FF] rounded-full p-1 shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-card-bg to-background rounded-full flex items-center justify-center text-3xl shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <span className="relative z-10">💪</span>
                      </div>
                    </div>
                    {/* Active status indicator */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg">
                      <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* User Identity */}
                  <h3 className="text-xl font-black text-text-primary mb-1">Jordan "The Hybrid" Chen</h3>
                  <p className="text-sm text-text-secondary mb-2">@hybridathlete</p>
                  
                  {/* Identity Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-xs font-semibold text-text-primary">
                      🏃‍♂️ Runner
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 rounded-full text-xs font-semibold text-text-primary">
                      🏋️‍♂️ Lifter
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-white/20 border border-white/30 rounded-full text-xs font-semibold text-text-primary">
                      🤸‍♂️ Movement
                    </span>
                  </div>
                </div>
                
                {/* Current Streak - Prominent Display */}
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/20 rounded-xl p-4 mb-6 text-center">
                  <div className="text-3xl mb-2">🔥</div>
                  <div className="text-2xl font-black text-text-primary mb-1">47 Day Streak</div>
                  <div className="text-sm text-text-secondary">Current motivation level: Unstoppable</div>
                </div>
                
                {/* Achievement Badges */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-text-primary mb-3 text-center">Recent Achievements</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🏆</div>
                      <div className="text-xs font-bold text-yellow-400">Founder</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">⚡</div>
                      <div className="text-xs font-bold text-purple-400">30-Day</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🎯</div>
                      <div className="text-xs font-bold text-green-400">Consistent</div>
                    </div>
                  </div>
                </div>
                
                {/* Community Recognition */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">2.1k</div>
                      <div className="text-xs text-gray-400">Followers</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">847</div>
                      <div className="text-xs text-gray-400">Following</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold gradient-text">Top 5%</div>
                      <div className="text-xs text-gray-400">This Month</div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Floating Achievement Badges Around Profile */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-xl backdrop-blur-sm border border-yellow-500/20 flex items-center justify-center text-2xl animate-float"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                👑
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl backdrop-blur-sm border border-primary/20 flex items-center justify-center text-xl animate-float" 
                style={{ animationDelay: '1s' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                🔥
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full backdrop-blur-sm border border-purple-500/20 flex items-center justify-center text-lg animate-float" 
                style={{ animationDelay: '2s' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                ⚡
              </motion.div>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl transform scale-110 -z-10 blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-primary/10 rounded-2xl sm:rounded-3xl transform scale-105 -z-5 blur-2xl"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900 pointer-events-none"></div>
    </section>
  )
}

export default HeroSection 