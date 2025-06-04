import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ title, value, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{icon}</div>
      <div className="text-xl sm:text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-300 font-medium">{title}</div>
    </motion.div>
  )
}

const ChallengeCard = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white mb-2">30-Day Push-Up Challenge</h4>
          <p className="text-sm text-gray-300">Build upper body strength with daily push-up goals</p>
        </div>
        <div className="bg-gradient-to-r from-primary to-accent rounded-full p-2 flex-shrink-0">
          <span className="text-white text-base sm:text-lg">💪</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Progress</span>
          <span className="text-sm font-semibold text-white">Day 12/30</span>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '40%' }}></div>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">👥 2,847 participants</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-yellow-400">🏆</span>
            <span className="text-xs text-white font-medium">Top 15%</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProfilePreview = () => {
  const stats = [
    {
      title: "Reps This Week",
      value: "847",
      icon: "🔥"
    },
    {
      title: "Streak",
      value: "15d",
      icon: "⚡"
    },
    {
      title: "Challenges",
      value: "8",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-background">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-gray-800 via-gray-800/70 to-transparent pointer-events-none"></div>
      
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF3B30]/10 via-transparent to-[#2979FF]/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4 sm:px-0">
            This could be{' '}
            <span className="gradient-text">your profile</span> 👇
          </h2>
        </motion.div>
        
        {/* Two-Column Layout - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column - iPhone with Profile Dashboard - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1 mb-8 lg:mb-0"
          >
            {/* iPhone Frame - Responsive Sizing */}
            <div className="relative">
              {/* iPhone 14 Pro Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                {/* Screen Bezel */}
                <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden shadow-inner">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-20 shadow-lg"></div>
                  
                  {/* Screen Content - Modern Dashboard */}
                  <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                    {/* Top Gradient Banner */}
                    <div className="bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] h-3 sm:h-4 relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                    </div>
                    
                    {/* Dashboard Content - Mobile Optimized */}
                    <div className="h-[calc(100%-0.75rem)] sm:h-[calc(100%-1rem)] bg-gradient-to-b from-gray-900/30 to-black p-3 sm:p-4 text-center">
                      
                      {/* Profile Section */}
                      <div className="mb-4 sm:mb-6">
                        {/* Profile Photo */}
                        <div className="relative w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2 sm:mb-3">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B30] via-[#FF6B30] to-[#2979FF] rounded-full p-0.5 shadow-lg">
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-inner relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                              <span className="relative z-10">🏋️‍♂️</span>
                            </div>
                          </div>
                          {/* Online status indicator */}
                          <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full border-2 border-black shadow-lg">
                            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        
                        {/* Username */}
                        <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Alex Rivera</h3>
                        <p className="text-xs text-gray-400">@alexfitness</p>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {stats.map((stat, index) => (
                          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 sm:p-3">
                            <div className="text-sm sm:text-lg mb-1">{stat.icon}</div>
                            <div className="text-xs sm:text-sm font-bold text-white">{stat.value}</div>
                            <div className="text-[10px] sm:text-xs text-gray-300 leading-tight">{stat.title}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Challenge Card */}
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-left">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1 pr-2">
                            <h4 className="text-xs sm:text-sm font-bold text-white mb-1 leading-tight">30-Day Push-Up Challenge</h4>
                            <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">Build upper body strength daily</p>
                          </div>
                          <div className="bg-gradient-to-r from-primary to-accent rounded-full p-1 flex-shrink-0">
                            <span className="text-white text-xs">💪</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] text-gray-300">Progress</span>
                            <span className="text-[10px] font-semibold text-white">Day 12/30</span>
                          </div>
                          
                          <div className="w-full bg-white/20 rounded-full h-1">
                            <div className="bg-gradient-to-r from-primary to-accent h-1 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-gray-400">👥 2,847 participants</span>
                            <div className="flex items-center space-x-1">
                              <span className="text-[9px] text-yellow-400">🏆</span>
                              <span className="text-[9px] text-white font-medium">Top 15%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="mt-3 sm:mt-4 space-y-2">
                        <button className="w-full bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold py-2 rounded-lg text-xs shadow-lg min-h-[36px]">
                          Follow
                        </button>
                        <button className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white/90 font-semibold py-2 rounded-lg text-xs min-h-[36px]">
                          Message
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                {/* iPhone Physical Details */}
                {/* Side button */}
                <div className="absolute right-0 top-20 sm:top-24 w-1 h-12 sm:h-16 bg-gray-600 rounded-l-sm shadow-inner"></div>
                <div className="absolute right-0 top-36 sm:top-44 w-1 h-8 sm:h-10 bg-gray-600 rounded-l-sm shadow-inner"></div>
                <div className="absolute right-0 top-48 sm:top-58 w-1 h-8 sm:h-10 bg-gray-600 rounded-l-sm shadow-inner"></div>
                
                {/* Volume buttons */}
                <div className="absolute left-0 top-24 sm:top-28 w-1 h-6 sm:h-8 bg-gray-600 rounded-r-sm shadow-inner"></div>
                <div className="absolute left-0 top-32 sm:top-38 w-1 h-6 sm:h-8 bg-gray-600 rounded-r-sm shadow-inner"></div>
              </div>
              
              {/* Enhanced phone shadow and glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] sm:rounded-[3rem] transform scale-110 -z-10 blur-3xl"></div>
              <div className="absolute inset-0 bg-black/20 rounded-[2.5rem] sm:rounded-[3rem] transform scale-105 -z-5 blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Text Content - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2 px-4 sm:px-0"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                This is your{' '}
                <span className="gradient-text">training identity.</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Every rep, every PR, every day you show up—it all becomes part of your story.
              </p>
            </div>
            
            {/* Feature highlights - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-base sm:text-lg shadow-lg">
                  📊
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-base sm:text-lg">Personal Dashboard</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Track your reps, streaks, and challenge progress in one beautiful interface.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-base sm:text-lg shadow-lg">
                  🏆
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-base sm:text-lg">Challenge Competitions</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Join community challenges and see how you rank against thousands of other athletes.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-base sm:text-lg shadow-lg">
                  🔥
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-base sm:text-lg">Social Recognition</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Get celebrated for your achievements and inspire others on their fitness journey.</p>
                </div>
              </motion.div>
            </div>
            
            {/* CTA Button - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold rounded-full px-8 sm:px-10 py-4 shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-base sm:text-lg min-h-[48px]"
              >
                Create Your Profile
              </button>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-800 pointer-events-none"></div>
    </section>
  )
}

export default ProfilePreview 