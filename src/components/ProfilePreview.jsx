import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ title, value, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
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
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true, margin: "-100px" }}
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
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card-bg/30 to-background relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6"
          >
            <span className="text-text-primary">Your </span>
            <span className="gradient-text">Fitness Identity</span>
            <span className="text-text-primary"> Awaits</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Transform your fitness journey into a social experience. Track, share, and level up your grind.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 lg:order-1"
          >
            {/* iPhone Container */}
            <div className="relative">
              
              {/* iPhone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                
                {/* Screen Bezel */}
                <div className="w-full h-full bg-black rounded-[2rem] relative overflow-hidden">
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background to-card-bg overflow-hidden">
                    
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-4 pt-12 text-xs text-white">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Profile Dashboard Content */}
                    <div className="px-4 pb-4 h-full">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h1 className="text-xl font-black text-white">Dashboard</h1>
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">🔥</span>
                        </div>
                      </div>
                      
                      {/* Streak Card */}
                      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-4 mb-4">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🔥</div>
                          <div className="text-xl font-bold text-white mb-1">23 Day Streak</div>
                          <div className="text-sm text-text-secondary">Keep it going!</div>
                        </div>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-card-bg/50 border border-white/10 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold gradient-text">47</div>
                          <div className="text-xs text-text-secondary">Workouts</div>
                        </div>
                        <div className="bg-card-bg/50 border border-white/10 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold gradient-text">12</div>
                          <div className="text-xs text-text-secondary">PRs Set</div>
                        </div>
                      </div>
                      
                      {/* Achievement Badges */}
                      <div className="mb-4">
                        <h3 className="text-sm font-bold text-white mb-2">Recent Achievements</h3>
                        <div className="flex space-x-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 border border-yellow-500/40 rounded-lg flex items-center justify-center">
                            <span className="text-lg">🏆</span>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/40 rounded-lg flex items-center justify-center">
                            <span className="text-lg">⚡</span>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-teal-500/30 border border-green-500/40 rounded-lg flex items-center justify-center">
                            <span className="text-lg">🎯</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Recent Activity */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold text-white">Today's Activity</h3>
                        <div className="bg-card-bg/30 border border-white/10 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">💪</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">Upper Body</div>
                                <div className="text-xs text-text-secondary">45 min • 12 exercises</div>
                              </div>
                            </div>
                            <div className="text-xs text-green-400 font-medium">+3 XP</div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                {/* Screen Reflection Effect */}
                <div className="absolute inset-2 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2rem] pointer-events-none"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full backdrop-blur-sm border border-primary/20 flex items-center justify-center text-2xl animate-float"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                🏆
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full backdrop-blur-sm border border-yellow-500/20 flex items-center justify-center text-lg animate-float" 
                style={{ animationDelay: '1s' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                ⚡
              </motion.div>
              
              {/* Phone Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] transform scale-110 -z-10 blur-2xl"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Track Your Progress</h3>
                  <p className="text-text-secondary">Every rep, every set, every PR — beautifully organized and automatically tracked.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🔥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Build Streaks</h3>
                  <p className="text-text-secondary">Stay consistent with visual streak tracking that celebrates your daily wins.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Earn Recognition</h3>
                  <p className="text-text-secondary">Unlock badges, level up, and show off your achievements to the community.</p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Connect & Inspire</h3>
                  <p className="text-text-secondary">Join communities of like-minded athletes and share your fitness journey.</p>
                </div>
              </div>
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default ProfilePreview 