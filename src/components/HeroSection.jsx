import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20 pb-16 px-4">
      {/* Clean Background with Subtle Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-25"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Main Headline - Original compelling copy */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white mb-6">
              <span className="block text-text-primary mb-2">You Show Up,</span>
              <span className="block text-gradient">Reppo Shows You.</span>
            </h1>
          </motion.div>
          
          {/* Supporting Subheading - Original copy */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
              }
            }}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary leading-relaxed font-medium max-w-3xl mx-auto">
              The exclusive fitness platform where{' '}
              <span className="text-text-primary font-semibold">verified athletes earn badges, unlock member-only merch, and build status</span>{' '}
              through daily consistency.{' '}
              <span className="text-gradient font-semibold">Real connections. Real progress. Real respect.</span>
            </p>
          </motion.div>
          
          {/* CTA Buttons - Clean Strava-style layout but original copy */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToWaitlist}
              className="bg-gradient-primary text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[280px]"
            >
              Join the Waitlist – Get Early Access
            </motion.button>
          </motion.div>

          {/* Trust Indicators - Original scarcity messaging */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
              }
            }}
            className="pt-8"
          >
            <p className="text-text-secondary text-lg font-medium mb-6">
              <span className="text-gradient font-semibold">Only 127 founder spots left.</span> Secure exclusive badges and member-only perks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👑</span>
                <span className="font-medium">Exclusive founder badge</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="font-medium">Founder-only merch drops</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💎</span>
                <span className="font-medium">VIP community access</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
    </section>
  )
}

export default HeroSection 