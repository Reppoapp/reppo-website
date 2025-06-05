import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group shadow-md border border-white/5 rounded-xl bg-black/30 backdrop-blur p-6 sm:p-8 hover:scale-[1.03] hover:-translate-y-1 hover:border-white/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
    >
      {/* Simplified Icon Animation */}
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 gradient-text group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  )
}

const FeatureGrid = () => {
  const features = [
    {
      title: "Track With Purpose",
      description: "No more spreadsheets. Log sets, reps, and PRs with ease — and turn every session into progress you can see.",
      icon: "📊"
    },
    {
      title: "Your Fit Circle, Not a Follower Count",
      description: "Follow your people, react to their grind, and build real fitness momentum together — no comments, no noise.",
      icon: "🤝"
    },
    {
      title: "Real Recognition, Earned",
      description: "Crush a PR or streak? Get the badge and the hype. Your progress gets the spotlight it deserves.",
      icon: "🎉"
    },
    {
      title: "Make Consistency Competitive",
      description: "Turn your training streak into a game. Compete with friends. Hit your stride. Keep it going.",
      icon: "🔥"
    },
    {
      title: "Your Identity, On Display",
      description: "Powerlifter? Runner? Hybrid athlete? Showcase your style and your story with a profile built for athletes.",
      icon: "📱"
    },
    {
      title: "Train Smarter, Climb Higher",
      description: "Understand your patterns, level up your effort, and optimize your training with clean, visual insights.",
      icon: "📈"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-gray-900 to-background relative">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Built for Athletes Who Want{' '}
            <span className="gradient-text">More Than Just Stats.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Every feature in Reppo helps turn your workouts into wins, your reps into recognition, and your streaks into a story worth sharing.
          </p>
        </motion.div>
        
        {/* Enhanced Grid with Consistent Spacing - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index}
            />
          ))}
        </div>
        
        {/* Enhanced Bottom Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 mx-4 sm:mx-0"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">
            Reppo isn't just an app. It's your fitness identity.
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            It's where your sweat becomes social currency. Your reps earn recognition. And your discipline turns into legacy.
          </p>
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-gradient-to-r from-[#FF3B30] to-[#2979FF] text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-md hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-sm sm:text-base min-h-[48px]"
          >
            Join the Movement – Be Part of the Story
          </button>
        </motion.div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 pointer-events-none"></div>
    </section>
  )
}

export default FeatureGrid 