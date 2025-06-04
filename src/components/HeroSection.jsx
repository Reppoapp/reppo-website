import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animation variants for smooth entrances
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 30 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-30 animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full opacity-25 animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-white/5 to-primary/10 rounded-full opacity-40 animate-float blur-2xl" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Hero Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Main Headline - Bold and Modern */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-white mb-2">Track Reps.</span>
                <span className="block gradient-text mb-2">Earn Streaks.</span>
                <span className="block text-white">Level Up.</span>
              </h1>
            </motion.div>
            
            {/* Supporting Subheading */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                Reppo helps you stay accountable and compete with friends — 
                <span className="text-white font-semibold"> every rep counts.</span>
              </p>
            </motion.div>
            
            {/* Call-to-Action Button */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 59, 48, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWaitlist}
                className="bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl shadow-primary/30 transition-all duration-300 hover:shadow-3xl hover:shadow-primary/40 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Tracking</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
            
            {/* Trust Indicators - Enhanced */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-8"
            >
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">10k+ early adopters</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">Coming Q3 2025</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">iOS & Android</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - App Mockup/Visual */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: { 
                opacity: 0, 
                y: 40,
                scale: 0.9
              },
              animate: { 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* App Mockup Container */}
            <div className="relative">
              
              {/* Main iPhone Mockup */}
              <div className="relative w-[320px] h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden shadow-inner">
                  {/* Dynamic Island */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-20 shadow-lg"></div>
                  
                  {/* App Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Top Status Bar Area */}
                    <div className="bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] h-5 relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    </div>
                    
                    {/* App Content Preview */}
                    <div className="p-6 text-center">
                      
                      {/* Header */}
                      <div className="mb-8 pt-8">
                        <h3 className="text-white font-bold text-2xl mb-2">Today's Goals</h3>
                        <p className="text-gray-400 text-sm">Keep your streak alive! 🔥</p>
                      </div>
                      
                      {/* Stats Preview */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="text-white font-bold text-lg">15</div>
                          <div className="text-gray-300 text-xs">Day Streak</div>
                        </div>
                        <div className="bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                          <div className="text-2xl mb-2">🔥</div>
                          <div className="text-white font-bold text-lg">847</div>
                          <div className="text-gray-300 text-xs">Reps Total</div>
                        </div>
                      </div>
                      
                      {/* Activity Preview */}
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-left">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-semibold text-sm">💪 Push-Up Challenge</span>
                          <span className="text-green-400 text-xs font-bold">ACTIVE</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                          <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Day 19/30</span>
                          <span className="text-white font-medium">Top 12%</span>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <button className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-xl mt-6 text-sm shadow-lg">
                        Log Today's Workout
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements Around Phone */}
              <motion.div 
                className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-float blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-12 -right-8 w-16 h-16 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full animate-float blur-lg" 
                style={{ animationDelay: '1s' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              ></motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-16 w-12 h-12 bg-white/20 rounded-full animate-float blur-lg" 
                style={{ animationDelay: '2s' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              ></motion.div>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] transform scale-110 -z-10 blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-primary/10 rounded-[3rem] transform scale-105 -z-5 blur-2xl"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900 pointer-events-none"></div>
    </section>
  )
}

export default HeroSection 