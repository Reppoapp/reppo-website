import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

const InlineCTA = ({ 
  title, 
  description, 
  buttonText = "Join Competition", 
  showEmailInput = true,
  redirectToWaitlist = false,
  className = "",
  size = "medium" // small, medium, large
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (redirectToWaitlist) {
      window.location.href = '/join'
      return
    }

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
        .insert([{ email: email.toLowerCase().trim() }])

      if (error) {
        if (error.code === '23505') {
          setMessage('You\'re already on the list! 🎉')
          setIsSuccess(true)
        } else {
          throw error
        }
      } else {
        setMessage('You\'re on the list! Welcome to the performance athlete circle. 👑')
        setIsSuccess(true)
        setEmail('')
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

  const sizeClasses = {
    small: {
      container: "p-6",
      title: "text-xl sm:text-2xl",
      description: "text-base",
      input: "px-4 py-3 text-sm",
      button: "px-6 py-3 text-sm"
    },
    medium: {
      container: "p-8",
      title: "text-2xl sm:text-3xl",
      description: "text-lg",
      input: "px-6 py-4 text-base",
      button: "px-8 py-4 text-base"
    },
    large: {
      container: "p-8 sm:p-12",
      title: "text-3xl sm:text-4xl lg:text-5xl",
      description: "text-xl",
      input: "px-6 py-5 text-lg",
      button: "px-10 py-5 text-lg"
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center ${currentSize.container} ${className}`}
    >
      <h3 className={`font-bold text-text-primary mb-4 ${currentSize.title}`}>
        {title}
      </h3>
      
      {description && (
        <p className={`text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto ${currentSize.description}`}>
          {description}
        </p>
      )}

      {showEmailInput && !redirectToWaitlist ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`flex-1 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:bg-white/15 transition-all duration-300 ${currentSize.input}`}
              disabled={isSubmitting}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${currentSize.button}`}
            >
              {isSubmitting ? 'Joining...' : buttonText}
            </motion.button>
          </div>
          
          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center font-medium ${
                isSuccess ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {message}
            </motion.p>
          )}
        </form>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className={`bg-gradient-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${currentSize.button}`}
        >
          {buttonText}
        </motion.button>
      )}
    </motion.div>
  )
}

export default InlineCTA 