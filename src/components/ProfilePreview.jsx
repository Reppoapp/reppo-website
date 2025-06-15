import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AppPreviewSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);

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
    <section id="app" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6"
          >
            <span className="text-text-primary">Your </span>
            <span className="text-gradient">Fitness Identity</span>
            <span className="text-text-primary"> Awaits</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-reppo-gray-300 max-w-3xl mx-auto"
          >
            Explore the app that's redefining fitness social media for elite athletes worldwide
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* App Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-gradient-to-br from-reppo-red to-reppo-blue rounded-full mx-auto mb-2"></div>
                              <h4 className="text-white font-bold">Elite Athlete</h4>
                              <p className="text-reppo-gray-400 text-sm">Hybrid Identity</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div>
                                <div className="text-lg font-bold text-reppo-red">247</div>
                                <div className="text-xs text-reppo-gray-400">Streak</div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-reppo-blue">12</div>
                                <div className="text-xs text-reppo-gray-400">Badges</div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-white">Elite</div>
                                <div className="text-xs text-reppo-gray-400">Rank</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              {['Deadlift PR', '5K Run', 'Yoga Flow'].map((activity, i) => (
                                <div key={i} className="glass rounded-lg p-2 flex justify-between">
                                  <span className="text-white text-xs">{activity}</span>
                                  <span className="text-reppo-red text-xs">+{15 - i * 2} XP</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Feed Screen */}
                        {index === 1 && (
                          <div className="space-y-3">
                            <div className="glass rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-reppo-blue to-purple-500 rounded-full"></div>
                                <span className="text-white text-sm font-medium">Sarah M.</span>
                              </div>
                              <p className="text-reppo-gray-300 text-xs">Just hit a new deadlift PR! 💪</p>
                            </div>
                            <div className="glass rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-reppo-blue rounded-full"></div>
                                <span className="text-white text-sm font-medium">Mike R.</span>
                              </div>
                              <p className="text-reppo-gray-300 text-xs">Morning run complete! 🏃‍♂️</p>
                            </div>
                            <div className="glass rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-reppo-red to-orange-500 rounded-full"></div>
                                <span className="text-white text-sm font-medium">Alex K.</span>
                              </div>
                              <p className="text-reppo-gray-300 text-xs">CrossFit WOD destroyed me 🔥</p>
                            </div>
                          </div>
                        )}

                        {/* Achievement Screen */}
                        {index === 2 && (
                          <div className="space-y-3">
                            <div className="text-center mb-4">
                              <h4 className="text-white font-bold">Achievements</h4>
                              <p className="text-reppo-gray-400 text-xs">Your Trophy Collection</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {['Iron Warrior', 'Mile Master', 'Streak King', 'Elite Status'].map((badge, i) => (
                                <div key={i} className={`glass rounded-lg p-2 text-center ${i < 2 ? 'bg-gradient-to-br from-reppo-red/20 to-reppo-blue/20' : 'opacity-50'}`}>
                                  <div className="w-8 h-8 bg-gradient-to-br from-reppo-red to-reppo-blue rounded-full mx-auto mb-1"></div>
                                  <span className="text-white text-xs font-medium">{badge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-reppo-black rounded-b-xl"></div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-[2.5rem] blur-xl -z-10 transition-opacity duration-700 ${
                    activeScreen === index ? 'opacity-100 bg-gradient-to-br from-reppo-red/30 to-reppo-blue/30' : 'opacity-0'
                  }`}></div>
                </div>
              ))}
            </div>

            {/* Screen Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {screens.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeScreen === index ? 'bg-gradient-to-r from-reppo-red to-reppo-blue' : 'bg-reppo-gray-600'
                  }`}
                  onClick={() => setActiveScreen(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {screens[activeScreen].title}
              </h3>
              <p className="text-lg text-reppo-gray-300 leading-relaxed mb-6">
                {screens[activeScreen].description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {screens[activeScreen].features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-reppo-red to-reppo-blue rounded-full"></div>
                  <span className="text-reppo-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium"
            >
              Join the Waitlist
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection; 