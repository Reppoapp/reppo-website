import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'

const FinalCTA = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 37,
    seconds: 42
  })
  
  // Animated counters
  const [spotsLeft, setSpotsLeft] = useState(127)
  const [joinedThisWeek, setJoinedThisWeek] = useState(2847)
  const [successRate, setSuccessRate] = useState(94)

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Animated counters effect
  useEffect(() => {
    const animateCounter = (start, end, duration, setter) => {
      const increment = (end - start) / (duration / 16)
      let current = start
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setter(end)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 16)
    }

    animateCounter(100, 127, 2000, setSpotsLeft)
    animateCounter(2500, 2847, 3000, setJoinedThisWeek)
    animateCounter(88, 94, 2500, setSuccessRate)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address')
      setIsSuccess(false)
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase() }])

      if (error) {
        if (error.code === '23505') {
          setMessage('You\'re already on the list! Check your email for founder access details. 🎉')
          setIsSuccess(true)
        } else {
          throw error
        }
      } else {
        setMessage('Welcome to the elite! Check your email for founder access details and next steps. 🚀')
        setIsSuccess(true)
        setEmail('')
        // Decrease spots counter on successful signup
        setSpotsLeft(prev => Math.max(0, prev - 1))
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Something went wrong. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const founderBenefits = [
    {
      icon: "📱",
      title: "Early Access to Elite Athletes",
      description: "First access to new verified athletes and their live workout data as they join the platform."
    },
    {
      icon: "👑",
      title: "Lifetime Founder Badge",
      description: "Exclusive founder status with special recognition in the community and priority support."
    },
    {
      icon: "📊",
      title: "Advanced Analytics Dashboard",
      description: "Deep performance insights, athlete comparison tools, and training progress analytics."
    },
    {
      icon: "🎯",
      title: "Direct Product Influence",
      description: "Shape product development with direct feedback channels and exclusive feature voting."
    },
    {
      icon: "💎",
      title: "Founder-Only Athletes",
      description: "Exclusive access to premium athletes and their workout data, reserved for founders only."
    },
    {
      icon: "🤖",
      title: "Priority AI Personalization",
      description: "Enhanced AI algorithms that adapt faster to your performance and provide more accurate scaling."
    }
  ]

  const faqItems = [
    {
      question: "How do athletes share their workout data?",
      answer: "Athletes connect their Garmin, Apple Watch, or other fitness devices to our platform. When they complete a workout, the data is automatically processed and made available to their followers within minutes."
    },
    {
      question: "What makes the AI personalization accurate?",
      answer: "Our AI analyzes your fitness level, past performance, and goals to scale athlete workouts appropriately. It considers factors like your current fitness level, available equipment, and time constraints."
    },
    {
      question: "Can I train with multiple athletes?",
      answer: "Yes! You can follow multiple athletes and receive notifications when any of them complete workouts. You can choose which workouts to tackle based on your schedule and preferences."
    },
    {
      question: "What if I can't complete an athlete's workout?",
      answer: "The AI scales workouts to your level, but you can also modify them further. The platform tracks your progress and adjusts future recommendations accordingly."
    },
    {
      question: "Is there a community aspect?",
      answer: "Absolutely! Each athlete has their own community where followers can share their experiences, progress, and support each other in training alongside their favorite athletes."
    }
  ]

  return (
    <section className="relative bg-primary-white py-20 overflow-hidden">
      {/* Athletic Precision background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/5 via-transparent to-accent-orange/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
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
            className="inline-flex items-center gap-2 bg-accent-orange/20 text-accent-orange px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-accent-orange/30"
          >
            <span className="live-indicator">LIVE</span>
            <span>Limited Founder Access</span>
          </motion.div>
          
          <h2 className="section-header text-center mb-6">
            Train with Your Favorite Athletes
          </h2>
          
          <p className="section-description text-center max-w-2xl mx-auto">
            Join the elite community of athletes who train alongside their favorites using live workout data. 
            Founder access includes exclusive athletes and priority AI personalization.
          </p>
        </motion.div>

        {/* Athletic Precision Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="waitlist-stats">
            <div className="data-metric font-mono text-2xl font-bold text-primary-blue mb-2">
              {spotsLeft}
            </div>
            <div className="text-sm text-text-gray">Founder Spots Left</div>
          </div>
          
          <div className="waitlist-stats">
            <div className="data-metric font-mono text-2xl font-bold text-accent-orange mb-2">
              {joinedThisWeek.toLocaleString()}
            </div>
            <div className="text-sm text-text-gray">Joined This Week</div>
          </div>
          
          <div className="waitlist-stats">
            <div className="data-metric font-mono text-2xl font-bold text-accent-green mb-2">
              {successRate}%
            </div>
            <div className="text-sm text-text-gray">Success Rate</div>
          </div>
        </motion.div>

        {/* Athletic Precision Waitlist Form */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="waitlist-form max-w-2xl mx-auto mb-16"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to join the elite"
                className="waitlist-input"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="waitlist-submit w-full"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Joining the Elite...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>Train with Your Favorites</span>
                  <span>🚀</span>
                </div>
              )}
            </button>

            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={isSuccess ? 'form-success' : 'form-error'}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center">
              <p className="text-sm text-text-gray">
                <span className="font-semibold">100% Authentic</span> athlete data • 
                <span className="font-semibold"> AI Personalization</span> • 
                <span className="font-semibold"> Live Training</span>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Athletic Precision Founder Benefits */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-primary-navy text-center mb-8">
            Founder Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founderBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h4 className="feature-title">{benefit.title}</h4>
                <p className="feature-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Athletic Precision FAQ */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-primary-navy text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between"
                >
                  <span className="font-semibold text-primary-navy">{item.question}</span>
                  <span className={`text-primary-blue transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-gray">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Athletic Precision Final CTA */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="waitlist-form max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-primary-navy mb-4">
              Ready to Train with the Elite?
            </h3>
            <p className="text-text-gray mb-6">
              Join {Math.floor(joinedThisWeek / 100) * 100}+ athletes who are already training with their favorites.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="waitlist-input flex-1"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="waitlist-submit px-8"
              >
                {isSubmitting ? 'Joining...' : 'Join Now'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA 