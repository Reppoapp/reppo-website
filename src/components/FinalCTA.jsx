import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { addToWaitlist } from '../lib/supabase'

const FinalCTA = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }
    
    if (!validateEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const result = await addToWaitlist(email)
      
      if (result.success) {
        setStatus('success')
        setMessage("You're on the list 💪")
        setEmail('')
      } else {
        setStatus('error')
        if (result.error && result.error.includes('duplicate')) {
          setMessage("You're already on the list! We'll be in touch soon 🔥")
        } else {
          setMessage('Something went wrong. Please try again.')
        }
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="waitlist" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-card-bg to-background">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-card-bg via-card-bg/70 to-transparent pointer-events-none"></div>
      
      {/* Enhanced Background with Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-card-bg to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header - Mobile Optimized */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
              <span className="gradient-text">Only 1,000 Founder Spots Available.</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              Miss this launch and you'll never get founder status. No exceptions. No second chances.{' '}
              <span className="gradient-text font-semibold">The exclusive perks? Gone forever.</span>
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-text-secondary text-sm sm:text-base px-4 sm:px-0">
              <span className="flex items-center justify-center sm:justify-start">
                <span className="text-yellow-400 mr-2 flex-shrink-0">👑</span>
                Exclusive founder badge (limited to 1,000)
              </span>
              <span className="flex items-center justify-center sm:justify-start">
                <span className="text-yellow-400 mr-2 flex-shrink-0">🏆</span>
                Founder-only merch drops (forever)
              </span>
              <span className="flex items-center justify-center sm:justify-start">
                <span className="text-yellow-400 mr-2 flex-shrink-0">🔥</span>
                Free premium access (lifetime)
              </span>
              <span className="flex items-center justify-center sm:justify-start">
                <span className="text-yellow-400 mr-2 flex-shrink-0">💎</span>
                VIP community access before anyone else
              </span>
            </div>
          </div>
          
          {/* Waitlist Form - Optimized Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-md mx-auto px-4 sm:px-0"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={`w-full px-6 py-4 bg-card-bg/50 backdrop-blur-sm border rounded-full text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 min-h-[48px] text-base ${
                    status === 'error' && message.includes('email') 
                      ? 'border-red-500/50 focus:ring-red-500' 
                      : 'border-white/20'
                  } ${status === 'loading' ? 'opacity-75' : ''}`}
                  disabled={status === 'loading'}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ 
                  scale: (status === 'loading' || status === 'success') ? 1 : 1.05,
                  boxShadow: (status === 'loading' || status === 'success') 
                    ? "0 10px 25px rgba(0, 0, 0, 0.3)" 
                    : "0 20px 40px rgba(255, 59, 48, 0.4)"
                }}
                whileTap={{ scale: (status === 'loading' || status === 'success') ? 1 : 0.95 }}
                className={`w-full bg-gradient-primary text-white font-semibold rounded-full px-6 py-4 shadow-md transition-all duration-300 text-base sm:text-lg relative overflow-hidden min-h-[48px] ${
                  status === 'loading' || status === 'success' 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:shadow-xl hover:shadow-primary/30 hover:from-[#FF3B30] hover:to-[#2979FF] transform hover:-translate-y-0.5'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10">
                  {status === 'loading' ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Joining...
                    </div>
                  ) : status === 'success' ? (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">🎉</span>
                      Welcome to Reppo!
                    </div>
                  ) : (
                    'Secure Your Founder Badge — Limited Time'
                  )}
                </span>
              </motion.button>
            </form>
            
            {/* Status Messages - Mobile Optimized */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-4 rounded-xl border ${
                  status === 'success'
                    ? 'bg-green-500/10 border-green-500/20 text-green-300'
                    : 'bg-red-500/10 border-red-500/20 text-red-300'
                }`}
              >
                <div className="flex items-center justify-center text-sm sm:text-base">
                  <span className="mr-2">
                    {status === 'success' ? '🎉' : '⚠️'}
                  </span>
                  {message}
                </div>
              </motion.div>
            )}
            
            <p className="text-sm text-text-secondary/60 mt-4">
              No spam, just updates. Unsubscribe anytime.
            </p>
          </motion.div>
          
          {/* Stats - Optimized Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4 sm:px-0"
          >
            <div className="text-center p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">127</div>
              <div className="text-text-secondary text-sm sm:text-base">Founder Spots Remaining</div>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">873</div>
              <div className="text-text-secondary text-sm sm:text-base">Spots Already Claimed</div>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">Forever</div>
              <div className="text-text-secondary text-sm sm:text-base">Exclusive Access</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA 