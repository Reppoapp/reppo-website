import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ quote, name, role, avatar, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-2xl border-2 border-white/10">
            {avatar}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <blockquote className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            "{quote}"
          </blockquote>
          <div>
            <div className="text-white font-semibold text-sm">{name}</div>
            <div className="text-gray-400 text-xs">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const SocialProof = () => {
  const testimonials = [
    {
      quote: "For the first time, I actually stayed consistent. Reppo's streak system made showing up feel like winning.",
      name: "Sarah Chen",
      role: "Marathon Runner",
      avatar: "💪"
    },
    {
      quote: "Reppo made logging fun again. I actually look forward to tracking — it's like gamifying my progress.",
      name: "Mike Rodriguez",
      role: "Personal Trainer",
      avatar: "🏋️"
    },
    {
      quote: "I used to lose steam fast. Now I'm chasing streaks — and it actually feels like a game I want to win.",
      name: "Emma Davis",
      role: "CrossFit Athlete",
      avatar: "🔥"
    },
    {
      quote: "Reppo finally gets it. My workouts aren't just numbers anymore — they're part of my identity.",
      name: "Alex Thompson",
      role: "Hybrid Athlete",
      avatar: "🏃"
    },
    {
      quote: "Reppo's social feed changed everything. My friends' progress pushes me to show up harder every day.",
      name: "Jordan Kim",
      role: "Powerlifter",
      avatar: "🎯"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-800 via-gray-900/70 to-transparent pointer-events-none"></div>
      
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black/30 to-gray-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B30]/5 via-transparent to-[#2979FF]/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Trusted by Athletes.{' '}
            <span className="gradient-text">Built for Consistency.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            From marathoners to CrossFitters, Reppo is helping real people stay consistent, level up, and own their progress.
          </p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.15}
            />
          ))}
        </div>
        
        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">10,000+</div>
              <div className="text-xs sm:text-sm text-gray-400">Early Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">1M+</div>
              <div className="text-xs sm:text-sm text-gray-400">Reps Logged</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">95%</div>
              <div className="text-xs sm:text-sm text-gray-400">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">60+</div>
              <div className="text-xs sm:text-sm text-gray-400">Day Streak Achievers</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 pointer-events-none"></div>
    </section>
  )
}

export default SocialProof 