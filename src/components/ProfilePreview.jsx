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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4 sm:px-0">
            <span className="gradient-text">Your Profile. Your Progress. Your Proof.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Every workout builds more than muscle — it builds your identity. Reppo makes your progress visible, meaningful, and unignorable.
          </p>
        </motion.div>
        
        {/* Two-Column Layout - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column - iPhone with Website Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center order-2 lg:order-1 mb-8 lg:mb-0"
          >
            {/* iPhone Container */}
            <div className="relative">
              {/* iPhone PNG Background */}
              <img 
                src="/reppo-phone.png" 
                alt="iPhone mockup" 
                className="w-[280px] sm:w-[320px] h-auto relative z-10"
              />
              
              {/* Website Content Overlay on Phone Screen */}
              <div className="absolute top-[12%] left-[8%] right-[8%] bottom-[15%] rounded-[2rem] overflow-hidden bg-background">
                {/* Mini Website Content - Different sections */}
                <div className="w-full h-full bg-background text-white scale-[0.25] origin-top-left transform-gpu">
                  {/* Mini Navigation */}
                  <div className="bg-background/80 backdrop-blur-md border-b border-white/10 p-4 flex items-center justify-between">
                    <img src="/Reppo-Logo.png" alt="Reppo Logo" className="h-6 w-auto" />
                    <button className="bg-gradient-primary text-white font-semibold px-4 py-2 rounded-full text-sm">
                      Join Waitlist
                    </button>
                  </div>
                  
                  {/* Mini Feature Grid Section */}
                  <div className="p-8">
                    <h2 className="text-4xl font-bold text-center mb-8">
                      <span className="gradient-text">Built Different. Built for Athletes.</span>
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                          🔥
                        </div>
                        <h3 className="text-lg font-bold gradient-text mb-3">Streak Tracking</h3>
                        <p className="text-text-secondary text-sm">Build unstoppable momentum with our advanced streak system.</p>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                          📊
                        </div>
                        <h3 className="text-lg font-bold gradient-text mb-3">Progress Analytics</h3>
                        <p className="text-text-secondary text-sm">Visualize your fitness journey with detailed insights.</p>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                          🏆
                        </div>
                        <h3 className="text-lg font-bold gradient-text mb-3">Achievement System</h3>
                        <p className="text-text-secondary text-sm">Earn badges and unlock rewards for your consistency.</p>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                          👥
                        </div>
                        <h3 className="text-lg font-bold gradient-text mb-3">Community</h3>
                        <p className="text-text-secondary text-sm">Connect with like-minded athletes and stay motivated.</p>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                          📱
                        </div>
                        <h3 className="text-lg font-bold gradient-text mb-3">Mobile First</h3>
                        <p className="text-text-secondary text-sm">Seamless experience across all your devices.</p>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                          🎯
                        </div>
                        <h3 className="text-lg font-bold gradient-text mb-3">Goal Setting</h3>
                        <p className="text-text-secondary text-sm">Set, track, and smash your fitness goals.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini Social Proof Section */}
                  <div className="bg-card-bg/50 p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">
                      Trusted by Athletes.{' '}
                      <span className="gradient-text">Built for Consistency.</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-card-bg to-background rounded-full flex items-center justify-center text-lg border-2 border-white/10">
                            💪
                          </div>
                          <div>
                            <p className="text-text-secondary text-sm mb-2">"For the first time, I actually stayed consistent. Reppo's streak system made showing up feel like winning."</p>
                            <div className="text-text-primary font-semibold text-sm">Sarah Chen</div>
                            <div className="text-text-secondary/70 text-xs">Marathon Runner</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-card-bg to-background rounded-full flex items-center justify-center text-lg border-2 border-white/10">
                            🏋️
                          </div>
                          <div>
                            <p className="text-text-secondary text-sm mb-2">"Reppo made logging fun again. I actually look forward to tracking — it's like gamifying my progress."</p>
                            <div className="text-text-primary font-semibold text-sm">Mike Rodriguez</div>
                            <div className="text-text-secondary/70 text-xs">Personal Trainer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">10,000+</div>
                        <div className="text-xs text-text-secondary">Early Athletes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">1M+</div>
                        <div className="text-xs text-text-secondary">Reps Logged</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">95%</div>
                        <div className="text-xs text-text-secondary">User Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">60+</div>
                        <div className="text-xs text-text-secondary">Day Streak Achievers</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini Final CTA */}
                  <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="gradient-text">Earn Your Spot in the Reppo Era.</span>
                    </h2>
                    <p className="text-text-secondary text-lg mb-6">
                      Track your grind. Build your streak. Unlock merch. Reppo is for athletes who don't just train — they{' '}
                      <span className="gradient-text font-semibold">earn it.</span>
                    </p>
                    <button className="bg-gradient-primary text-white font-bold px-8 py-4 rounded-full">
                      Join the Waitlist — Claim Early Access
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Enhanced phone shadow and glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform scale-110 -z-10 blur-3xl"></div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl transform scale-105 -z-5 blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Text Content - Optimized Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2 px-4 sm:px-0"
          >
            
            {/* Feature highlights - Simplified Animation */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-base sm:text-lg shadow-lg">
                  📊
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-base sm:text-lg">Your Training, Visualized</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">See your streaks, reps, and achievements all in one place — designed to keep you coming back stronger.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-base sm:text-lg shadow-lg">
                  🏆
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-base sm:text-lg">Compete with the Best</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Join challenges, climb leaderboards, and earn badges that actually mean something.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-base sm:text-lg shadow-lg">
                  🔥
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-base sm:text-lg">Recognition That Counts</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Earn props for your consistency, not your clout. Let your grind speak — and get noticed for it.</p>
                </div>
              </motion.div>
            </div>
            
            {/* CTA Button - Simplified Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold rounded-full px-8 sm:px-10 py-4 shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-base sm:text-lg min-h-[48px]"
              >
                Start Your Fitness Story
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