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
      avatarColor: "from-primary-blue to-accent-orange",
      content: "Training with my favorite athlete's actual data feels like having a workout partner who never misses a session. The AI makes it achievable for my level while keeping that same intensity.",
      verified: true,
      rating: 5,
      date: "2 days ago",
      achievement: "Training with 3 athletes",
      location: "San Francisco, CA"
    },
    {
      name: "Sarah Williams", 
      role: "CrossFit Athlete",
      avatar: "SW",
      avatarColor: "from-accent-orange to-accent-green",
      content: "Finally, authentic access to how my favorite athletes actually train - not just what they post on social media. The live notifications keep me motivated daily.",
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
      avatarColor: "from-accent-green to-primary-blue",
      content: "The AI makes every athlete workout achievable for my fitness level while maintaining the same training intensity. It's like having a personal trainer who knows exactly what I need.",
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
      avatarColor: "from-accent-orange to-primary-blue",
      content: "Training with my favorite endurance athlete's actual running data has transformed my training. Every workout is authentic and perfectly scaled to push me forward.",
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
      avatarColor: "from-primary-blue to-accent-green",
      content: "Having access to verified athletes' actual workout data changes everything. No more guessing - just authentic training scaled perfectly to my capabilities.",
      verified: true,
      rating: 5,
      date: "1 week ago",
      achievement: "Coaching 50+ athletes",
      location: "Denver, CO"
    },
    {
      name: "Jessica Park",
      role: "Fitness Enthusiast",
      avatar: "JP",
      avatarColor: "from-accent-green to-accent-orange",
      content: "The community aspect is incredible - training alongside others who follow the same elite athletes creates an amazing support system.",
      verified: true,
      rating: 5,
      date: "4 days ago",
      achievement: "Community leader",
      location: "Portland, OR"
    }
  ]

  const TestimonialCard = ({ testimonial, isActive, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onClick}
      className={`feature-card cursor-pointer transition-all duration-300 ${
        isActive ? 'border-primary-blue/50 shadow-blue-glow' : 'hover:border-primary-blue/30'
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-primary-white font-bold text-sm flex-shrink-0`}>
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-primary-navy">{testimonial.name}</h4>
            {testimonial.verified && (
              <span className="text-primary-blue text-sm">✓</span>
            )}
          </div>
          <p className="text-sm text-text-gray mb-1">{testimonial.role}</p>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-accent-orange text-sm">★</span>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-text-gray leading-relaxed mb-4 italic">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center justify-between text-xs text-text-gray">
        <span>{testimonial.date}</span>
        <span className="live-indicator text-xs">{testimonial.achievement}</span>
      </div>
    </motion.div>
  )

  return (
    <section ref={ref} className="py-20 bg-primary-white relative overflow-hidden">
      {/* Athletic Precision background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/5 via-transparent to-accent-orange/5"></div>
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Athletic Precision Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-accent-green/30"
          >
            <span className="text-accent-green">🏆</span>
            <span>Elite Athletes Trust Us</span>
          </motion.div>
          
          <h2 className="section-header text-center mb-6">
            Athletes Love Training WITH Their Favorites
          </h2>
          
          <p className="section-description text-center max-w-3xl mx-auto">
            Join thousands of athletes who've made the switch from fake fitness programs to 
            authentic training with their favorite elite athletes.
          </p>
        </motion.div>

        {/* Athletic Precision Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-primary-blue mb-2">
              100%
            </div>
            <div className="text-text-gray font-medium">Authentic Athlete Data</div>
          </div>
          
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-accent-orange mb-2">
              47K+
            </div>
            <div className="text-text-gray font-medium">Training with Favorites</div>
          </div>
          
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-accent-green mb-2">
              4.9★
            </div>
            <div className="text-text-gray font-medium">Average Rating</div>
          </div>
        </motion.div>

        {/* Athletic Precision Testimonials Grid */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={activeTestimonial === index}
                onClick={() => setActiveTestimonial(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Athletic Precision Featured Testimonial */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="feature-card text-center">
            <div className="mb-8">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].avatarColor} flex items-center justify-center text-primary-white font-bold text-xl mx-auto mb-4`}>
                {testimonials[activeTestimonial].avatar}
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">
                {testimonials[activeTestimonial].name}
              </h3>
              <p className="text-text-gray mb-4">
                {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
              </p>
            </div>
            
            <blockquote className="text-xl text-text-gray leading-relaxed mb-6 italic">
              "{testimonials[activeTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4 text-sm text-text-gray">
              <span className="live-indicator">
                {testimonials[activeTestimonial].achievement}
              </span>
              <span>•</span>
              <span>{testimonials[activeTestimonial].date}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof 