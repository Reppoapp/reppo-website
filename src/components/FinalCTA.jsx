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
        .insert([{ email: email.toLowerCase().trim() }])

      if (error) {
        if (error.code === '23505') {
          setMessage('You\'re already on the list! 🎉')
          setIsSuccess(true)
        } else {
          throw error
        }
      } else {
        setMessage('You\'re on the list! Welcome to the elite competitor circle. 👑')
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
    <section id="waitlist" className="py-20 px-4 relative overflow-hidden">
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
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight">
            Only <span className="text-gradient">127 Elite Competitor Spots</span> Left
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Join the exclusive group of elite competitors who get early access to{' '}
            <span className="text-text-primary font-semibold">AI challenge technology, celebrity athlete benchmarks, and founder-only competition features.</span>
          </p>
        </motion.div>

        {/* Founder Benefits - Consistent card styling */}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">👑</div>
            <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-colors duration-300">Exclusive Founder Competitor Badge</h3>
            <p className="text-text-secondary leading-relaxed">Permanent founder status that proves you were here when AI fitness competition began</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-colors duration-300">Early Challenge Access</h3>
            <p className="text-text-secondary leading-relaxed">Compete against exclusive celebrity benchmarks and early AI features before anyone else</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">💎</div>
            <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-colors duration-300">Founder Competition Gear</h3>
            <p className="text-text-secondary leading-relaxed">Limited edition merchandise only available to founding competitors</p>
          </div>
        </motion.div>

        {/* Email Form - Consistent styling */}
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
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-primary focus:bg-white/15 transition-all duration-300"
                disabled={isSubmitting}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Joining...' : 'Secure My Spot'}
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
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-text-secondary">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="font-medium">2,847 people joined this week</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <span className="font-medium">127 founder spots remaining</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <span className="font-medium">Founder access ends soon</span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-text-secondary text-sm max-w-2xl mx-auto leading-relaxed">
              By joining the waitlist, you agree to receive updates about Reppo. 
              <span className="text-text-primary font-medium"> No spam, just exclusive founder updates.</span>
            </p>
          </div>
        </motion.div>
        
      </div>
      
      {/* Smooth transition - matching other sections */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default FinalCTA 