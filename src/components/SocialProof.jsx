import React from 'react'
import { motion } from 'framer-motion'

const SocialProof = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Powerlifter",
      avatar: "MC",
      content: "Competing against myself is addictive. I've never been more motivated to work out. Seeing my daily challenges evolve keeps me coming back stronger.",
      verified: true
    },
    {
      name: "Sarah Williams", 
      role: "CrossFit Athlete",
      avatar: "SW",
      content: "The AI challenge system is brilliant. Every workout feels like I'm fighting for my future self. I'm literally competing with my own potential.",
      verified: true
    },
    {
      name: "David Rodriguez",
      role: "Hybrid Athlete", 
      avatar: "DR",
      content: "I challenged my friend's personal best and got destroyed. Now I'm training harder than ever for a rematch. This app turned fitness into intelligent competition.",
      verified: true
    }
  ]

  const stats = [
    { number: "2,847", label: "Athletes Joined This Week", icon: "⚡" },
    { number: "127", label: "Founder Spots Remaining", icon: "🔥" },
    { number: "94%", label: "Members Beat Their First Personal Challenge", icon: "💪" },
    { number: "500K+", label: "Personal Competitions Completed", icon: "🏆" }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-30"></div>
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
            Trusted by <span className="text-gradient">Performance Athletes</span>
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join thousands of performance athletes who've already discovered{' '}
            <span className="text-text-primary font-semibold">what real AI-powered fitness challenges look like</span>
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                ...fadeInUp,
                animate: {
                  ...fadeInUp.animate,
                  transition: { duration: 0.6, delay: (index + 2) * 0.1, ease: "easeOut" }
                }
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              {/* Quote */}
              <div className="mb-6">
                <p className="text-text-secondary leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-text-primary font-bold">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
              transition: { duration: 0.6, delay: 0.5, ease: "easeOut" }
            }
          }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Your turn to join the <span className="text-gradient font-semibold">performance athlete community</span>
          </p>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default SocialProof 