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
          
          {/* Right Column - iPhone with Website Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
            }}
            className="relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
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
                {/* Mini Website Content */}
                <div className="w-full h-full bg-background text-white scale-[0.3] origin-top-left transform-gpu">
                  {/* Mini Navigation */}
                  <div className="bg-background/80 backdrop-blur-md border-b border-white/10 p-4 flex items-center justify-between">
                    <img src="/Reppo-Logo.png" alt="Reppo Logo" className="h-6 w-auto" />
                    <button className="bg-gradient-primary text-white font-semibold px-4 py-2 rounded-full text-sm">
                      Join Waitlist
                    </button>
                  </div>
                  
                  {/* Mini Hero Section */}
                  <div className="p-8 text-center">
                    <h1 className="text-4xl font-black leading-tight mb-4">
                      <span className="block text-text-primary">Where Fitness</span>
                      <span className="block gradient-text">Meets Identity.</span>
                    </h1>
                    <p className="text-text-secondary text-lg mb-6 max-w-lg mx-auto">
                      Reppo is the social fitness platform where{' '}
                      <span className="text-text-primary font-semibold">hybrid athletes, runners, lifters, and movement lovers</span>{' '}
                      connect, track progress, and level up.
                    </p>
                    <button className="bg-gradient-primary text-white font-bold px-8 py-4 rounded-full">
                      Join the Waitlist – Get Early Access
                    </button>
                  </div>
                  
                  {/* Mini Problem Section */}
                  <div className="bg-card-bg/50 p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">
                      Your Progress Deserves a{' '}
                      <span className="gradient-text">Platform — Not a Scroll Past.</span>
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-4">
                        <h3 className="text-lg font-bold gradient-text mb-2">Tracking apps don't hype you up.</h3>
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-2">
                          <p className="text-red-300 text-xs">❌ The Problem</p>
                          <p className="text-text-secondary text-xs">You log your workout and it disappears.</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                          <p className="text-green-300 text-xs">✅ With Reppo</p>
                          <p className="text-text-secondary text-xs">Every session adds to your streak, your level, and your legacy.</p>
                        </div>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-4">
                        <h3 className="text-lg font-bold gradient-text mb-2">Social media's not made for athletes.</h3>
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-2">
                          <p className="text-red-300 text-xs">❌ The Problem</p>
                          <p className="text-text-secondary text-xs">Your PRs get buried under memes and meal pics.</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                          <p className="text-green-300 text-xs">✅ With Reppo</p>
                          <p className="text-text-secondary text-xs">Join communities built around what you do — and get the credit you've earned.</p>
                        </div>
                      </div>
                      <div className="bg-card-bg/50 border border-white/10 rounded-xl p-4">
                        <h3 className="text-lg font-bold gradient-text mb-2">Your progress deserves to be seen.</h3>
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-2">
                          <p className="text-red-300 text-xs">❌ The Problem</p>
                          <p className="text-text-secondary text-xs">Streaks and big wins vanish without recognition.</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                          <p className="text-green-300 text-xs">✅ With Reppo</p>
                          <p className="text-text-secondary text-xs">Track your grind. Earn badges. Inspire the next one in your lane.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini How It Works */}
                  <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">
                      <span className="gradient-text">Train Loud. Track Proud. Earn It.</span>
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">1</div>
                        <div className="text-4xl mb-4">💪</div>
                        <h3 className="text-lg font-bold gradient-text mb-2">Log with Purpose</h3>
                        <p className="text-text-secondary text-sm">Track every session, set, and PR — no clutter, just clean rep logging.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">2</div>
                        <div className="text-4xl mb-4">🔥</div>
                        <h3 className="text-lg font-bold gradient-text mb-2">Stack Your Streak</h3>
                        <p className="text-text-secondary text-sm">Stay consistent, earn streaks, and level up. Every workout pushes your progress.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">3</div>
                        <div className="text-4xl mb-4">🏆</div>
                        <h3 className="text-lg font-bold gradient-text mb-2">Rep Your Identity</h3>
                        <p className="text-text-secondary text-sm">Share wins, show off badges, and inspire your people.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-xl backdrop-blur-sm border border-yellow-500/20 flex items-center justify-center text-2xl animate-float"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                👑
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl backdrop-blur-sm border border-primary/20 flex items-center justify-center text-xl animate-float" 
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform scale-110 -z-10 blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-primary/10 rounded-2xl transform scale-105 -z-5 blur-2xl"></div>
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