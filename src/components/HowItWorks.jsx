import React from 'react'
import { motion } from 'framer-motion'

const StepCard = ({ number, title, description, icon, delay = 0, isLast = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        {/* Step number */}
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10">
          {number}
        </div>
        
        {/* Icon */}
        <div className="text-5xl sm:text-6xl mb-6 opacity-80">{icon}</div>
        
        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs mx-auto">{description}</p>
      </div>
      
      {/* Connecting line (hidden on mobile) */}
      {number < 3 && (
        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 transform translate-x-8"></div>
      )}
      
      {/* Mobile divider line (visible only on mobile between steps) */}
      {!isLast && (
        <div className="lg:hidden mt-8 mb-8 w-24 h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 mx-auto"></div>
      )}
    </motion.div>
  )
}

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Log your reps",
      description: "Quick, easy tracking of your workouts, sets, and personal records. No complicated forms.",
      icon: "💪"
    },
    {
      number: 2,
      title: "Build your streak",
      description: "Watch your consistency grow. Every workout counts towards your fitness journey.",
      icon: "🔥"
    },
    {
      number: 3,
      title: "Rep your journey",
      description: "Share your wins, celebrate milestones, and inspire your fitness community.",
      icon: "🏆"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-800 via-gray-900/70 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Train Hard. Log It. Share It.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Three simple steps to transform your fitness journey from private struggle to public inspiration.
          </p>
        </motion.div>
        
        {/* Mobile: flex-col with gap-8, Desktop: grid-cols-3 */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-8 relative">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              delay={index * 0.2}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Ready to turn your workouts into wins?
          </p>
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#FF3B30] to-[#2979FF] text-white font-semibold rounded-full px-6 sm:px-8 py-3 shadow-md hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-background pointer-events-none"></div>
    </section>
  )
}

export default HowItWorks 