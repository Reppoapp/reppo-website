import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

const FinalCTA = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

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
      {/* Subtle background elements for smooth flow - matching other sections */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Header - Matching style */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Only <span className="text-gradient">127 Performance Athlete Spots</span> Left
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto px-2">
            Join the exclusive group of performance athletes who get early access to{' '}
            <span className="text-text-primary font-semibold">AI challenge technology, celebrity athlete benchmarks, and founder-only performance features.</span>
          </p>
        </motion.div>

        {/* Waitlist Form - Enhanced */}
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
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mb-8 sm:mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to join the elite"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 lg:py-5 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base lg:text-lg min-h-[48px]"
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base lg:text-lg min-h-[48px] w-full sm:w-auto"
              >
                {isSubmitting ? 'Joining...' : 'Secure My Spot'}
              </motion.button>
            </div>
            
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm sm:text-base p-3 sm:p-4 rounded-lg ${
                  isSuccess 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {message}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Social Proof & Urgency - Consistent styling */}
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
          className="space-y-6 sm:space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-text-secondary">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">⚡</span>
              <span className="font-medium text-sm sm:text-base">2,847 people joined this week</span>
            </div>
            <div className="hidden sm:block w-px h-4 sm:h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🔥</span>
              <span className="font-medium text-sm sm:text-base">127 founder spots remaining</span>
            </div>
            <div className="hidden sm:block w-px h-4 sm:h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">⏰</span>
              <span className="font-medium text-sm sm:text-base">Founder access ends soon</span>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-text-secondary text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed px-2">
              By joining the waitlist, you agree to receive updates about Reppo. 
              <span className="text-text-primary font-medium"> No spam, just exclusive founder updates.</span>
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