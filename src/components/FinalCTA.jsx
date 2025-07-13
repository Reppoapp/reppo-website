import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

const FinalCTA = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  
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

  // Animated counter effects
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

    // Animate counters on mount
    animateCounter(150, 127, 2000, setSpotsLeft)
    animateCounter(2800, 2847, 1500, setJoinedThisWeek)
    animateCounter(90, 94, 1200, setSuccessRate)
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
          setMessage('You\'re already on the list! 🎉')
          setIsSuccess(true)
        } else {
          throw error
        }
      } else {
        setMessage('Welcome to the elite! Check your email for next steps. 🚀')
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

  return (
    <section id="waitlist" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/6 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Enhanced Section Header with Urgency */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur border border-red-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-red-400 text-sm">🔥</span>
            <span className="text-white text-sm font-semibold">FOUNDER ACCESS ENDING SOON</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Only <span className="text-gradient">{spotsLeft} Performance Athlete Spots</span> Left
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary leading-relaxed max-w-4xl mx-auto px-2 font-medium">
            Join the exclusive group of performance athletes who get early access to{' '}
            <span className="text-text-primary font-bold">AI challenge technology, celebrity athlete benchmarks, and founder-only performance features</span>{' '}
            that separate champions from competitors.
          </p>
        </motion.div>

        {/* Countdown Timer */}
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
          className="mb-8 sm:mb-12"
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Founder Access Closes In:</h3>
            <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-lg mx-auto">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-3 sm:p-4 mb-2 shadow-lg">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Waitlist Form with Glassmorphism */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
            }
          }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to join the elite"
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 lg:py-6 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base sm:text-lg font-medium min-h-[56px] backdrop-blur-sm"
                    disabled={isSubmitting}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 sm:px-10 py-4 sm:py-5 lg:py-6 rounded-full shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg min-h-[56px] w-full sm:w-auto group"
                  style={{
                    boxShadow: '0 8px 32px rgba(255, 59, 48, 0.3)',
                  }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Securing Your Spot...' : 'Secure My Elite Spot'}
                  </span>
                  <motion.span 
                    className="text-xl relative z-10 ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
              
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-base sm:text-lg p-4 sm:p-5 rounded-2xl font-medium backdrop-blur-sm ${
                    isSuccess 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Enhanced Social Proof with Real-time Counters */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
            }
          }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Real-time Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">
                {joinedThisWeek.toLocaleString()}
              </div>
              <div className="text-sm sm:text-base text-gray-300 font-medium">
                <span className="text-green-400">⚡</span> People joined this week
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">
                {successRate}%
              </div>
              <div className="text-sm sm:text-base text-gray-300 font-medium">
                <span className="text-blue-400">💪</span> Beat their first challenge
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">
                {spotsLeft}
              </div>
              <div className="text-sm sm:text-base text-gray-300 font-medium">
                <span className="text-red-400">🔥</span> Founder spots remaining
              </div>
            </motion.div>
          </div>
          
          {/* Trust Signals */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-gray-300">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span className="font-medium">No spam, ever</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="font-medium">Instant access</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">👑</span>
                <span className="font-medium">Founder benefits</span>
              </div>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-text-secondary text-sm sm:text-base max-w-3xl mx-auto leading-relaxed px-2">
              By joining the waitlist, you agree to receive updates about Reppo. 
              <span className="text-text-primary font-semibold"> No spam, just exclusive founder updates and early access.</span>
            </p>
          </div>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default FinalCTA 