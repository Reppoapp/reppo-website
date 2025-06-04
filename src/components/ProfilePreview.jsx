import React from 'react'
import { motion } from 'framer-motion'

const ProfilePreview = () => {
  const profileData = {
    name: "Alex Rivera",
    handle: "@alexfitness",
    followers: "2.1K",
    following: "284",
    posts: [
      {
        exercise: "Barbell Squat",
        date: "Today",
        reps: "5 × 225 lbs",
        streak: 12,
        type: "PR"
      },
      {
        exercise: "Bench Press",
        date: "Yesterday", 
        reps: "3 × 185 lbs",
        streak: 8,
        type: "Workout"
      },
      {
        exercise: "Deadlift",
        date: "2 days ago",
        reps: "1 × 315 lbs",
        streak: 15,
        type: "PR"
      },
      {
        exercise: "Overhead Press",
        date: "3 days ago",
        reps: "3 × 135 lbs",
        streak: 10,
        type: "Workout"
      },
      {
        exercise: "Pull-ups",
        date: "4 days ago",
        reps: "4 × 12 reps",
        streak: 7,
        type: "Workout"
      }
    ]
  }

  const getPostIcon = (type) => {
    return type === "PR" ? "🏆" : "💪"
  }

  const getPostColor = (type) => {
    return type === "PR" ? "from-yellow-500/20 to-orange-500/20" : "from-blue-500/20 to-purple-500/20"
  }

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-gray-900 via-background to-gray-900">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none"></div>
      
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            This could be{' '}
            <span className="gradient-text">your profile</span> 👇
          </h2>
        </motion.div>
        
        {/* Two-Column Layout - Perfect alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column - iPhone with Profile Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-center"
          >
            {/* iPhone Frame */}
            <div className="relative">
              {/* iPhone 14 Pro Frame */}
              <div className="relative w-[300px] h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Screen Bezel */}
                <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden shadow-inner">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 shadow-lg"></div>
                  
                  {/* Screen Content - Profile Preview with Fixed Scrolling */}
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Top Gradient Banner - Enhanced */}
                    <div className="bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] h-4 relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                    </div>
                    
                    {/* Scrollable Profile Content */}
                    <div 
                      className="h-[calc(100%-1rem)] overflow-y-auto bg-gradient-to-b from-gray-900/30 to-black p-5 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                      style={{ 
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(255,255,255,0.2) transparent'
                      }}
                    >
                      {/* Profile Header - Enhanced */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mb-6"
                      >
                        {/* Profile Picture - Enhanced with better shadow */}
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B30] via-[#FF6B30] to-[#2979FF] rounded-full p-0.5 shadow-lg">
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-3xl shadow-inner">
                              🏋️‍♂️
                            </div>
                          </div>
                          {/* Enhanced online status dot */}
                          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-lg">
                            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B30]/30 to-[#2979FF]/30 rounded-full blur-lg scale-110 -z-10"></div>
                        </div>
                        
                        {/* Name and Handle - Enhanced typography */}
                        <h3 className="text-lg font-bold text-white mb-1 tracking-wide">{profileData.name}</h3>
                        <p className="text-sm text-white/60 mb-4 font-medium">{profileData.handle}</p>
                        
                        {/* Follower Stats - Enhanced design */}
                        <div className="flex justify-center space-x-8 text-sm bg-white/5 backdrop-blur-sm rounded-xl py-3 px-4 border border-white/10">
                          <div className="text-center">
                            <span className="font-bold text-white block">{profileData.followers}</span>
                            <span className="text-white/60 text-xs">followers</span>
                          </div>
                          <div className="w-px h-8 bg-white/20"></div>
                          <div className="text-center">
                            <span className="font-bold text-white block">{profileData.following}</span>
                            <span className="text-white/60 text-xs">following</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Posts Feed - Enhanced with more content for scrolling */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        {/* Feed Header */}
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-white/80 font-semibold text-sm">Recent Activity</h4>
                          <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                            <span className="text-xs">⚡</span>
                          </div>
                        </div>
                        
                        {profileData.posts.map((post, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className={`bg-gradient-to-r ${getPostColor(post.type)} backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]`}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">
                                    {getPostIcon(post.type)}
                                  </div>
                                  <span className="font-bold text-white text-sm">{post.exercise}</span>
                                  {post.type === "PR" && (
                                    <span className="bg-gradient-to-r from-yellow-400/30 to-orange-400/30 text-yellow-200 text-[10px] px-2 py-1 rounded-full font-bold border border-yellow-400/20">
                                      NEW PR
                                    </span>
                                  )}
                                </div>
                                <p className="text-white/90 text-sm font-semibold mb-1">{post.reps}</p>
                                <p className="text-white/50 text-xs font-medium">{post.date}</p>
                              </div>
                              
                              <div className="flex items-center space-x-1 bg-gradient-to-r from-orange-500/30 to-red-500/30 px-2 py-1 rounded-full border border-orange-400/20 shadow-sm">
                                <span className="text-sm">🔥</span>
                                <span className="text-white font-bold text-xs">{post.streak}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Profile Action Buttons - Enhanced */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="mt-6 space-y-3 pb-4"
                      >
                        <button className="w-full bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-sm shadow-lg">
                          Follow
                        </button>
                        <button className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white/90 font-semibold py-2.5 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/40 text-sm hover:scale-105">
                          Message
                        </button>
                      </motion.div>
                      
                      {/* Extra content to ensure scrollability */}
                      <div className="mt-8 space-y-4 pb-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <h5 className="text-white/80 font-semibold text-sm mb-2">Workout Stats</h5>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div>
                              <span className="text-white/60">Total Workouts:</span>
                              <span className="text-white font-bold ml-2">127</span>
                            </div>
                            <div>
                              <span className="text-white/60">This Month:</span>
                              <span className="text-white font-bold ml-2">18</span>
                            </div>
                            <div>
                              <span className="text-white/60">PRs Set:</span>
                              <span className="text-white font-bold ml-2">8</span>
                            </div>
                            <div>
                              <span className="text-white/60">Streak:</span>
                              <span className="text-white font-bold ml-2">15d</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <h5 className="text-white/80 font-semibold text-sm mb-2">Goals</h5>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-white/60">Bench Press 250lbs</span>
                              <span className="text-green-400">92%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">30-day streak</span>
                              <span className="text-yellow-400">50%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* iPhone Physical Details - Enhanced */}
                {/* Side button */}
                <div className="absolute right-0 top-24 w-1 h-16 bg-gray-600 rounded-l-sm shadow-inner"></div>
                <div className="absolute right-0 top-44 w-1 h-10 bg-gray-600 rounded-l-sm shadow-inner"></div>
                <div className="absolute right-0 top-58 w-1 h-10 bg-gray-600 rounded-l-sm shadow-inner"></div>
                
                {/* Volume buttons */}
                <div className="absolute left-0 top-28 w-1 h-8 bg-gray-600 rounded-r-sm shadow-inner"></div>
                <div className="absolute left-0 top-38 w-1 h-8 bg-gray-600 rounded-r-sm shadow-inner"></div>
              </div>
              
              {/* Enhanced phone shadow and glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] transform scale-110 -z-10 blur-3xl"></div>
              <div className="absolute inset-0 bg-black/20 rounded-[3rem] transform scale-105 -z-5 blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                This is your{' '}
                <span className="gradient-text">training identity.</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Every rep, every PR, every day you show up—it all becomes part of your story.
              </p>
            </div>
            
            {/* Feature highlights - Enhanced */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-lg shadow-lg">
                  📱
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Social Profile</h4>
                  <p className="text-gray-400 leading-relaxed">Turn your fitness journey into a profile worth sharing with followers and friends.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-lg shadow-lg">
                  🏆
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">PR Celebrations</h4>
                  <p className="text-gray-400 leading-relaxed">Every personal record gets the recognition it deserves with special badges and highlights.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-lg shadow-lg">
                  🔥
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Streak Tracking</h4>
                  <p className="text-gray-400 leading-relaxed">Build momentum with visual streak counters that make consistency addictive.</p>
                </div>
              </motion.div>
            </div>
            
            {/* CTA Button - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#FF3B30] via-[#FF6B30] to-[#2979FF] text-white font-bold rounded-full px-10 py-4 shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-lg"
              >
                Create Your Profile
              </button>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-800 pointer-events-none"></div>
    </section>
  )
}

export default ProfilePreview 