import React from 'react'
import { motion } from 'framer-motion'

const StepCard = ({ number, title, description, icon, delay = 0, isLast = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center px-4 sm:px-0">
        {/* Step number */}
        <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 relative z-10">
          {number}
        </div>
        
        {/* Icon */}
        <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 opacity-80">{icon}</div>
        
        {/* Content */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 gradient-text">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs mx-auto">{description}</p>
      </div>
      
      {/* Connecting line (hidden on mobile) */}
      {number < 3 && (
        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 transform translate-x-8"></div>
      )}
      
      {/* Mobile divider line (visible only on mobile between steps) */}
      {!isLast && (
        <div className="lg:hidden mt-6 sm:mt-8 mb-6 sm:mb-8 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 mx-auto"></div>
      )}
    </motion.div>
  )
}

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Log with Purpose",
      description: "Track every session, set, and PR — no clutter, just clean rep logging that builds your fitness identity.",
      icon: "💪"
    },
    {
      number: 2,
      title: "Stack Your Streak",
      description: "Stay consistent, earn streaks, and level up. Every workout pushes your progress — and unlocks your next badge.",
      icon: "🔥"
    },
    {
      number: 3,
      title: "Rep Your Identity",
      description: "Share wins, show off badges, and inspire your people. Every rep becomes part of your legacy.",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-gray-800 via-gray-900/70 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            <span className="gradient-text">Train Loud. Track Proud. Earn It.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            From logging reps to earning badges — Reppo makes your fitness journey feel seen, celebrated, and socially powerful.
          </p>
        </motion.div>
        
        {/* Mobile: flex-col with gap-8, Desktop: grid-cols-3 */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 relative">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              delay={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12 sm:mt-16 px-4 sm:px-0"
        >
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Ready to make your fitness journey count?
          </p>
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-gradient-to-r from-[#FF3B30] to-[#2979FF] text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-md hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 min-h-[48px] text-base sm:text-lg"
          >
            Join Reppo – Start Building Your Streak
          </button>
        </motion.div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-background pointer-events-none"></div>
    </section>
  )
}

export default HowItWorks 