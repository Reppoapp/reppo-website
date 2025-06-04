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
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
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
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-white mb-2">30-Day Push-Up Challenge</h4>
          <p className="text-sm text-gray-300">Build upper body strength with daily push-up goals</p>
        </div>
        <div className="bg-gradient-to-r from-primary to-accent rounded-full p-2">
          <span className="text-white text-lg">💪</span>
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
      title: "Challenges Joined",
      value: "8",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-background">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-800 via-gray-800/70 to-transparent pointer-events-none"></div>
      
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF3B30]/10 via-transparent to-[#2979FF]/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/5 w-48 h-48 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            This could be{' '}
            <span className="gradient-text">your profile</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your fitness journey into a powerful social experience
          </p>
        </motion.div>
        
        {/* Main Dashboard Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Profile Photo */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-[#FF6B30] to-accent rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-5xl shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <span className="relative z-10">🏋️‍♂️</span>
                </div>
              </div>
              {/* Online status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 shadow-lg">
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl scale-125 -z-10"></div>
            </div>
            
            {/* Username */}
            <h3 className="text-2xl font-bold text-white mb-2">Alex Rivera</h3>
            <p className="text-gray-400 font-medium">@alexfitness</p>
          </motion.div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                {...stat}
                delay={0.4 + (index * 0.1)}
              />
            ))}
          </div>
          
          {/* Challenge Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h4 className="text-xl font-bold text-white mb-6 text-center">
              Current Challenge
            </h4>
            <ChallengeCard delay={0.9} />
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to build your{' '}
                <span className="gradient-text">fitness identity?</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of athletes already tracking their progress, crushing challenges, and building unstoppable momentum.
              </p>
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold rounded-full px-10 py-4 shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-lg"
              >
                Start Your Journey
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-800 pointer-events-none"></div>
    </section>
  )
}

export default ProfilePreview 