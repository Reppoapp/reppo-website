import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  // Animation variants for icon pop-in effect
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay + 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="group shadow-md border border-white/5 rounded-xl bg-black/30 backdrop-blur p-6 sm:p-8 hover:scale-[1.03] hover:-translate-y-1 hover:border-white/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
    >
      {/* Animated Icon */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={iconVariants}
        viewport={{ once: true, margin: "-50px" }}
        className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
      >
        {icon}
      </motion.div>
      
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
      title: "Rep tracking that matters",
      description: "Log sets, reps, weights, and PRs with intuitive tracking designed for real workouts.",
      icon: "📊"
    },
    {
      title: "Social fitness feed",
      description: "Follow friends, celebrate their wins, and get motivated by a community that gets it.",
      icon: "🤝"
    },
    {
      title: "Milestone celebrations",
      description: "Hit a new PR? Reached a streak goal? We'll make sure the world knows about your victory.",
      icon: "🎉"
    },
    {
      title: "Streak tracking",
      description: "Build momentum with visual streak counters that turn consistency into a game you want to win.",
      icon: "🔥"
    },
    {
      title: "Shareable profile",
      description: "Your fitness journey deserves a home. Showcase your progress with a profile worth sharing.",
      icon: "📱"
    },
    {
      title: "Progress insights",
      description: "Smart analytics that help you understand your patterns and optimize your training.",
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Built for the way{' '}
            <span className="gradient-text">you actually train</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Every feature designed with one goal: turning your fitness journey into content worth sharing.
          </p>
        </motion.div>
        
        {/* Enhanced Grid with Consistent Spacing - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.15}
            />
          ))}
        </div>
        
        {/* Enhanced Bottom Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 mx-4 sm:mx-0"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">
            More than an app. It's your fitness story.
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Reppo isn't just another fitness tracker. It's where your sweat becomes social currency, 
            your consistency becomes content, and your progress becomes inspiration for others.
          </p>
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-gradient-to-r from-[#FF3B30] to-[#2979FF] text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-md hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-sm sm:text-base min-h-[48px]"
          >
            Be Part of the Story
          </button>
        </motion.div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 pointer-events-none"></div>
    </section>
  )
}

export default FeatureGrid 