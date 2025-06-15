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
        setMessage("You're on the list! We'll be in touch soon.")
        setEmail('')
      } else {
        setStatus('error')
        if (result.error && result.error.includes('duplicate')) {
          setMessage("You're already on the list! We'll be in touch soon.")
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
    <section id="waitlist" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white">
            Fitness-Powered
            <br />
            <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Join us for free.
          </p>
        </motion.div>
        
        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md mx-auto mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                status === 'error' && message.includes('email') 
                  ? 'border-red-500/50 focus:ring-red-500' 
                  : ''
              }`}
              disabled={status === 'loading'}
            />
            
            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              whileHover={{ scale: status === 'loading' || status === 'success' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'loading' || status === 'success' ? 1 : 0.95 }}
              className={`w-full bg-gradient-primary text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ${
                status === 'loading' || status === 'success' 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:scale-105'
              }`}
            >
              {status === 'loading' ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Joining...
                </div>
              ) : status === 'success' ? (
                'Welcome to Reppo!'
              ) : (
                'Join Us Now'
              )}
            </motion.button>
          </form>
          
          {/* Status Messages */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 p-4 rounded-xl ${
                status === 'success'
                  ? 'bg-green-500/10 text-green-300'
                  : 'bg-red-500/10 text-red-300'
              }`}
            >
              {message}
            </motion.div>
          )}
          
          <p className="text-sm text-text-secondary/60 mt-4">
            Free to join / free to use. No spam, just updates.
          </p>
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-text-secondary"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🆓</span>
            <span className="font-medium">Free to join</span>
            <span className="text-sm opacity-75">Free to use</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">👥</span>
            <span className="font-medium">Growing community</span>
            <span className="text-sm opacity-75">Active athletes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">📱</span>
            <span className="font-medium">iPhone & Android</span>
            <span className="text-sm opacity-75">Web apps</span>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default FinalCTA 