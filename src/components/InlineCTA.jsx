import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

const InlineCTA = () => {
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

  return (
    <section className="py-16 bg-primary-white relative overflow-hidden">
      {/* Athletic Precision background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/5 via-transparent to-accent-orange/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-athletic/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="waitlist-form text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-blue/20 text-primary-blue px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary-blue/30"
          >
            <span className="text-primary-blue">🚀</span>
            <span>Join the Elite</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            Ready to Train WITH Your Favorites?
          </h2>
          
          <p className="text-lg text-text-gray mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who train alongside their favorite elite athletes 
            using live workout data and AI personalization.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
            </div>
          </form>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={isSuccess ? 'form-success max-w-md mx-auto' : 'form-error max-w-md mx-auto'}
            >
              {message}
            </motion.div>
          )}

          <div className="flex items-center justify-center gap-6 text-sm text-text-gray mt-6">
            <div className="flex items-center gap-2">
              <span className="text-accent-green">✅</span>
              <span>Live athlete data</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-blue">🤖</span>
              <span>AI personalization</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-orange">🏆</span>
              <span>Authentic training</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InlineCTA 