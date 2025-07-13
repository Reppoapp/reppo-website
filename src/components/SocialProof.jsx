import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SocialProof = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  // Auto-cycle through testimonials
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Powerlifter & Coach",
      avatar: "MC",
      avatarColor: "from-blue-500 to-purple-600",
      content: "Competing against myself is addictive. I've never been more motivated to work out. Seeing my daily challenges evolve keeps me coming back stronger every single day.",
      verified: true,
      rating: 5,
      date: "2 days ago",
      achievement: "127-day streak",
      location: "San Francisco, CA"
    },
    {
      name: "Sarah Williams", 
      role: "CrossFit Athlete",
      avatar: "SW",
      avatarColor: "from-pink-500 to-red-600",
      content: "The AI challenge system is brilliant. Every workout feels like I'm fighting for my future self. I'm literally competing with my own potential and winning.",
      verified: true,
      rating: 5,
      date: "1 week ago",
      achievement: "23% performance boost",
      location: "Austin, TX"
    },
    {
      name: "David Rodriguez",
      role: "Hybrid Athlete", 
      avatar: "DR",
      avatarColor: "from-green-500 to-teal-600",
      content: "I challenged my friend's personal best and got destroyed. Now I'm training harder than ever for a rematch. This app turned fitness into intelligent competition.",
      verified: true,
      rating: 5,
      date: "3 days ago",
      achievement: "Elite status unlocked",
      location: "Miami, FL"
    },
    {
      name: "Emma Thompson",
      role: "Marathon Runner",
      avatar: "ET",
      avatarColor: "from-orange-500 to-yellow-600",
      content: "The recovery insights are game-changing. I'm pushing harder than ever but avoiding burnout completely. My consistency has never been better.",
      verified: true,
      rating: 5,
      date: "5 days ago",
      achievement: "Zero missed days in 90 days",
      location: "Seattle, WA"
    },
    {
      name: "Alex Kim",
      role: "Strength Coach",
      avatar: "AK",
      avatarColor: "from-purple-500 to-indigo-600",
      content: "My clients are obsessed with their daily battles. The competitive element transforms how they approach every single workout. Results speak for themselves.",
      verified: true,
      rating: 5,
      date: "1 day ago",
      achievement: "15 clients with 30+ streaks",
      location: "Los Angeles, CA"
    }
  ]

  const stats = [
    { number: "2,847", label: "Athletes Joined This Week", icon: "⚡", color: "text-yellow-400" },
    { number: "127", label: "Founder Spots Remaining", icon: "🔥", color: "text-red-400" },
    { number: "94%", label: "Beat Their First Challenge", icon: "💪", color: "text-green-400" },
    { number: "47K+", label: "Elite Athletes Competing", icon: "👑", color: "text-purple-400" }
  ]

  const TestimonialCard = ({ testimonial, isActive, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onClick}
      className={`bg-white/5 backdrop-blur-[20px] border rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer relative overflow-hidden ${
        isActive ? 'border-primary/30 bg-primary/5' : 'border-white/10 hover:border-white/20'
      }`}
      style={{
        boxShadow: isActive 
          ? '0 8px 32px rgba(255, 59, 48, 0.3)' 
          : '0 8px 32px rgba(31, 38, 135, 0.2)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      )}

      {/* Header with avatar and verification */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
            {testimonial.avatar}
          </div>
          {testimonial.verified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-white font-bold text-base sm:text-lg">{testimonial.name}</h4>
            {testimonial.verified && (
              <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full font-semibold">
                VERIFIED
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
          <p className="text-gray-500 text-xs">{testimonial.location}</p>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-sm">★</span>
          ))}
        </div>
        <span className="text-gray-400 text-xs">{testimonial.date}</span>
      </div>

      {/* Content */}
      <p className="text-gray-200 leading-relaxed text-sm sm:text-base mb-4 line-clamp-4">
        "{testimonial.content}"
      </p>

      {/* Achievement badge */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-400/30 rounded-xl p-3">
        <div className="flex items-center gap-2">
          <span className="text-green-400 text-sm">🏆</span>
          <span className="text-green-300 font-semibold text-xs sm:text-sm">
            {testimonial.achievement}
          </span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/6 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/6 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Enhanced Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="text-white text-sm font-semibold">VERIFIED ATHLETE REVIEWS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Trusted by <span className="text-gradient">Performance Athletes</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Join thousands of elite athletes who've already discovered{' '}
            <span className="text-text-primary font-bold">what real AI-powered fitness challenges look like</span>{' '}
            and transformed their training forever.
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:border-primary/30 transition-all duration-300 shadow-lg"
              style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              <div className={`text-2xl sm:text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gradient mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Testimonials Carousel */}
        <div className="mb-12 sm:mb-16">
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Featured testimonial */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }
            }}
            className="max-w-4xl mx-auto mb-8"
          >
            <TestimonialCard 
              testimonial={testimonials[activeTestimonial]} 
              isActive={true}
              onClick={() => {}}
            />
          </motion.div>

          {/* Testimonial grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={activeTestimonial === index}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced Final CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
            }
          }}
          className="text-center pt-8 sm:pt-12 border-t border-white/10"
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto shadow-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-6 leading-tight">
              Join Thousands of{' '}
              <span className="text-gradient">Elite Athletes</span>
            </h3>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Don't just take our word for it. Experience the transformation that{' '}
              <span className="text-gradient font-bold">47,000+ performance athletes</span>{' '}
              have already discovered.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-black text-gradient mb-1">4.9/5</div>
                <div className="text-sm text-gray-300">Average rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-black text-gradient mb-1">94%</div>
                <div className="text-sm text-gray-300">Success rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-2xl font-black text-gradient mb-1">127</div>
                <div className="text-sm text-gray-300">Days avg streak</div>
              </div>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/join'}
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-2xl transition-all duration-300 text-lg sm:text-xl hover:shadow-primary/40 group mb-6"
            >
              <span>Join the Elite Community</span>
              <motion.span 
                className="ml-3 text-2xl"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </motion.button>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Verified athletes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">⭐</span>
                <span>5-star reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">👑</span>
                <span>Elite community</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default SocialProof 