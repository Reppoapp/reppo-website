import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animation variants for consistent fade-in + slide-up effect
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 16 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart for smooth animation
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-spotlight pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        {/* Additional background elements for more visual interest */}
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full opacity-20 animate-float" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Main headline */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="gradient-text block">Own Your Reps.</span>
                <span className="gradient-text block">Share Your Grind.</span>
              </h1>
            </motion.div>
            
            {/* Subheading */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium">
                The fitness app you <span className="text-white font-semibold">post on</span> — not just track with. 
                <br className="hidden sm:block" />
                Built for streaks, check-ins, PRs, and flex-worthy milestones.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 59, 48, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWaitlist}
                className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 shadow-2xl shadow-primary/20 w-full sm:w-auto"
              >
                Create Your Reppo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWaitlist}
                className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto"
              >
                Join the Movement
              </motion.button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-4 text-gray-400 text-xs sm:text-sm"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>10k+ early adopters</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Coming Q2 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>iOS & Android</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - iPhone Image */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: { 
                opacity: 0, 
                y: 20,
                scale: 0.95
              },
              animate: { 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
            className="relative flex justify-center lg:justify-start mt-8 lg:mt-0"
          >
            <div className="relative mx-auto lg:mx-0">
              {/* iPhone Image - Mobile Responsive */}
              <img
                src="/reppo-phone.png"
                alt="Reppo App Mockup"
                className="w-[80%] sm:w-80 md:w-96 lg:w-[450px] xl:w-[500px] h-auto max-w-full relative z-10 drop-shadow-2xl mx-auto lg:mx-0"
              />
              
              {/* Floating decorative elements around the phone */}
              <motion.div 
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-primary rounded-full opacity-40 animate-float blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-12 -right-8 w-12 h-12 bg-accent rounded-full opacity-40 animate-float blur-sm" 
                style={{ animationDelay: '1s' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              ></motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-12 w-8 h-8 bg-white/30 rounded-full animate-float blur-sm" 
                style={{ animationDelay: '2s' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              ></motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 -right-12 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full animate-float blur-sm" 
                style={{ animationDelay: '3s' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              ></motion.div>
              
              {/* Subtle glow effect behind the phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl transform scale-110 -z-10 blur-2xl"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 pointer-events-none"></div>
    </section>
  )
}

export default HeroSection 