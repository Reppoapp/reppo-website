import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ quote, name, role, avatar, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-card-bg/70 transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-card-bg to-background rounded-full flex items-center justify-center text-2xl border-2 border-white/10">
            {avatar}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <blockquote className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
            "{quote}"
          </blockquote>
          <div>
            <div className="text-text-primary font-semibold text-sm">{name}</div>
            <div className="text-text-secondary/70 text-xs">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Reppo lets me mix up my training—lifting, running, HIIT—and still track it all in one place. The hybrid badge is my new favorite flex.",
      name: "Marcus Chen",
      role: "Hybrid Athlete",
      avatar: "💪"
    },
    {
      quote: "I never thought I'd see a leaderboard for pickleball, but here I am, grinding for the top spot and connecting with other competitors.",
      name: "Jake Thompson", 
      role: "Pickleball Competitor",
      avatar: "🏃"
    },
    {
      quote: "Pilates used to feel solo, but now I'm earning badges and sharing my progress with a crew that actually cheers me on.",
      name: "Sarah Rodriguez",
      role: "Pilates Queen",
      avatar: "🔥"
    },
    {
      quote: "The elite runners group is next-level. We push each other, celebrate PRs, and the marathon badge actually means something here.",
      name: "Maria Santos",
      role: "Elite Distance Runner", 
      avatar: "🏋️"
    },
    {
      quote: "I log every workout, big or small. The streaks and daily check-ins keep me motivated—Reppo makes every day count.",
      name: "David Kim",
      role: "Everyday Grinder",
      avatar: "👑"
    },
    {
      quote: "The support here is unreal. When I hit my squat PR, the verified crew was the first to celebrate. Powerlifters finally have a real home.",
      name: "Lena Park",
      role: "Powerlifter",
      avatar: "🏅"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-card-bg via-background to-card-bg">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-card-bg via-background/70 to-transparent pointer-events-none"></div>
      
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-card-bg/30 to-background/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
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
            Verified Members Only.{' '}
            <span className="gradient-text">Exclusive Access Earned.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            These aren't just users — they're verified athletes who've earned their badges, unlocked exclusive perks, and claimed their place in the elite community.
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
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">500+</div>
              <div className="text-xs sm:text-sm text-text-secondary">Verified Elite Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">150+</div>
              <div className="text-xs sm:text-sm text-text-secondary">Exclusive Badges Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-xs sm:text-sm text-text-secondary">Badge-Verified Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">$50K+</div>
              <div className="text-xs sm:text-sm text-text-secondary">Exclusive Merch Sales</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>
    </section>
  )
}

export default SocialProof 