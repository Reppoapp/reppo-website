import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AppPreviewSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);

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
      title: "Profile Dashboard",
      description: "Your complete fitness identity in one place. Track progress, showcase achievements, and monitor your journey.",
      features: ["Personal Stats", "Achievement Timeline", "Progress Analytics", "Identity Badges"]
    },
    {
      title: "Social Feed",
      description: "Connect with elite athletes worldwide. Share victories, get inspired, and build meaningful fitness relationships.",
      features: ["Live Activity Feed", "Community Challenges", "Friend Connections", "Motivation Hub"]
    },
    {
      title: "Achievement System",
      description: "Unlock exclusive badges and climb the ranks. Every workout brings you closer to legendary status.",
      features: ["Rare Badge Collection", "Rank Progression", "Milestone Tracking", "Elite Recognition"]
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight">
            Your <span className="text-gradient">Fitness Identity</span> Awaits
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore the app that's redefining fitness social media for{' '}
            <span className="text-text-primary font-semibold">elite athletes worldwide</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
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
            {/* Multiple Phone Mockups in 3D Layout */}
            <div className="relative w-full h-96 flex items-center justify-center">
              {screens.map((screen, index) => (
                <div
                  key={index}
                  className={`absolute w-64 h-96 transition-all duration-700 cursor-pointer ${
                    activeScreen === index
                      ? 'z-30 scale-110 rotate-0'
                      : activeScreen === index - 1 || (activeScreen === 0 && index === screens.length - 1)
                      ? 'z-20 scale-95 -rotate-12 -translate-x-16'
                      : activeScreen === index + 1 || (activeScreen === screens.length - 1 && index === 0)
                      ? 'z-20 scale-95 rotate-12 translate-x-16'
                      : 'z-10 scale-75 opacity-50'
                  }`}
                  onClick={() => setActiveScreen(index)}
                >
                  {/* Phone Frame */}
                  <div className="w-full h-full bg-gradient-to-b from-reppo-gray-800 to-reppo-gray-900 rounded-[2.5rem] p-2 shadow-premium">
                    <div className="w-full h-full bg-reppo-black rounded-[2rem] relative overflow-hidden">
                      {/* Screen Content Based on Type */}
                      <div className="absolute inset-0 bg-gradient-to-b from-reppo-gray-900 to-reppo-black p-4">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center text-white text-xs mb-4">
                          <span>9:41</span>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                          </div>
                        </div>

                        {/* Profile Screen */}
                        {index === 0 && (
                          <div className="space-y-3">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-white font-bold text-sm">Profile</h4>
                              <div className="w-6 h-6 bg-gradient-to-r from-reppo-red to-reppo-blue rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">🔥</span>
                              </div>
                            </div>
                            
                            {/* Profile Info */}
                            <div className="text-center mb-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-reppo-red to-reppo-blue rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">JD</span>
                              </div>
                              <h4 className="text-white font-bold text-sm">Jordan Davis</h4>
                              <p className="text-reppo-gray-400 text-xs">@jordanfitness</p>
                            </div>
                            
                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-1 mb-3">
                              <div className="glass rounded-lg p-2 text-center">
                                <div className="text-sm font-bold text-reppo-red">23</div>
                                <div className="text-xs text-reppo-gray-400">Day Streak</div>
                              </div>
                              <div className="glass rounded-lg p-2 text-center">
                                <div className="text-sm font-bold text-reppo-blue">847</div>
                                <div className="text-xs text-reppo-gray-400">Total Reps</div>
                              </div>
                              <div className="glass rounded-lg p-2 text-center">
                                <div className="text-sm font-bold text-white">Elite</div>
                                <div className="text-xs text-reppo-gray-400">Rank</div>
                              </div>
                            </div>
                            
                            {/* Recent Activity */}
                            <div>
                              <h5 className="text-white text-xs font-semibold mb-2">Today's Session</h5>
                              <div className="glass rounded-lg p-2">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 bg-gradient-to-r from-reppo-red to-reppo-blue rounded-full flex items-center justify-center">
                                      <span className="text-white text-xs">💪</span>
                                    </div>
                                    <div>
                                      <div className="text-white text-xs font-medium">Push Day</div>
                                      <div className="text-reppo-gray-400 text-xs">6 exercises • 45 min</div>
                                    </div>
                                  </div>
                                  <div className="text-reppo-red text-xs font-bold">+25 XP</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Feed Screen */}
                        {index === 1 && (
                          <div className="space-y-2">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-white font-bold text-sm">Feed</h4>
                              <div className="w-6 h-6 bg-gradient-to-r from-reppo-red to-reppo-blue rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">⚡</span>
                              </div>
                            </div>
                            
                            {/* Post 1 */}
                            <div className="glass rounded-lg p-2">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-reppo-blue to-purple-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">SM</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-white text-xs font-medium">Sarah Martinez</div>
                                  <div className="text-reppo-gray-400 text-xs">2 min ago</div>
                                </div>
                                <div className="text-reppo-red text-xs">🔥 23</div>
                              </div>
                              <p className="text-reppo-gray-300 text-xs mb-1">New deadlift PR: 315lbs! 💪</p>
                              <div className="text-reppo-gray-400 text-xs">#DeadliftPR #StrengthTraining</div>
                            </div>
                            
                            {/* Post 2 */}
                            <div className="glass rounded-lg p-2">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-reppo-blue rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">MR</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-white text-xs font-medium">Mike Rodriguez</div>
                                  <div className="text-reppo-gray-400 text-xs">5 min ago</div>
                                </div>
                                <div className="text-reppo-blue text-xs">⚡ 18</div>
                              </div>
                              <p className="text-reppo-gray-300 text-xs mb-1">5K morning run done! Perfect weather 🏃‍♂️</p>
                              <div className="text-reppo-gray-400 text-xs">#MorningRun #Cardio</div>
                            </div>
                            
                            {/* Post 3 */}
                            <div className="glass rounded-lg p-2">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-reppo-red to-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">AK</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-white text-xs font-medium">Alex Kim</div>
                                  <div className="text-reppo-gray-400 text-xs">8 min ago</div>
                                </div>
                                <div className="text-reppo-red text-xs">💪 31</div>
                              </div>
                              <p className="text-reppo-gray-300 text-xs mb-1">Leg day complete! Squats feeling strong 🦵</p>
                              <div className="text-reppo-gray-400 text-xs">#LegDay #SquatLife</div>
                            </div>
                          </div>
                        )}

                        {/* Achievement Screen */}
                        {index === 2 && (
                          <div className="space-y-3">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-white font-bold text-sm">Achievements</h4>
                              <div className="w-6 h-6 bg-gradient-to-r from-reppo-red to-reppo-blue rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">🏆</span>
                              </div>
                            </div>
                            
                            {/* Level Progress */}
                            <div className="glass rounded-lg p-3 mb-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-white text-xs font-medium">Level 12 Elite</span>
                                <span className="text-reppo-blue text-xs">2,847 / 3,000 XP</span>
                              </div>
                              <div className="w-full bg-reppo-gray-700 rounded-full h-2">
                                <div className="bg-gradient-to-r from-reppo-red to-reppo-blue h-2 rounded-full" style={{width: '95%'}}></div>
                              </div>
                            </div>
                            
                            {/* Recent Badges */}
                            <div>
                              <h5 className="text-white text-xs font-semibold mb-2">Recent Unlocks</h5>
                              <div className="space-y-2">
                                <div className="glass rounded-lg p-2 flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">🔥</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-white text-xs font-medium">Fire Streak</div>
                                    <div className="text-reppo-gray-400 text-xs">30 day consistency</div>
                                  </div>
                                  <div className="text-yellow-400 text-xs">NEW</div>
                                </div>
                                
                                <div className="glass rounded-lg p-2 flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">💎</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-white text-xs font-medium">Elite Member</div>
                                    <div className="text-reppo-gray-400 text-xs">Verified athlete status</div>
                                  </div>
                                  <div className="text-purple-400 text-xs">RARE</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Locked Achievement */}
                            <div>
                              <h5 className="text-reppo-gray-400 text-xs font-semibold mb-2">Coming Next</h5>
                              <div className="glass rounded-lg p-2 flex items-center space-x-2 opacity-60">
                                <div className="w-8 h-8 bg-reppo-gray-600 rounded-full flex items-center justify-center">
                                  <span className="text-reppo-gray-400 text-xs">🏆</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-reppo-gray-400 text-xs font-medium">Legend Status</div>
                                  <div className="text-reppo-gray-500 text-xs">100 day streak required</div>
                                </div>
                                <div className="text-reppo-gray-500 text-xs">🔒</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeScreen === index
                      ? 'bg-gradient-to-r from-primary to-secondary scale-125'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Content Description */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }
            }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-text-primary">
                {screens[activeScreen].title}
              </h3>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                {screens[activeScreen].description}
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {screens[activeScreen].features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <span className="text-text-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Experience Reppo Now
            </motion.button>
          </motion.div>
        </div>

        {/* Transition Statement */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
            }
          }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready to build your <span className="text-gradient font-semibold">elite fitness identity</span>?
          </p>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  );
};

export default AppPreviewSection; 