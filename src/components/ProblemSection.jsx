import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const iconAnimation = {
    initial: { scale: 0.8, rotate: -10 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  }

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const problemCards = [
    {
      icon: "😴",
      title: "Generic Fitness Tracking",
      description: "Most apps just count your reps and calories. Zero personalization, zero challenge, zero reason to push harder tomorrow.",
      painPoint: "You're stuck in mediocrity",
      gradient: "from-gray-500/20 to-gray-600/20",
      borderColor: "border-gray-400/30",
      iconColor: "text-gray-400"
    },
    {
      icon: "👥",
      title: "Competing Against Strangers",
      description: "Why compete against random people when your biggest competition is who you were yesterday? That's where real growth happens.",
      painPoint: "You're wasting energy on meaningless competition",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      iconColor: "text-orange-400"
    },
    {
      icon: "📱",
      title: "No Real Status or Recognition",
      description: "Generic badges and meaningless streaks don't build the exclusive identity that drives elite performance athletes.",
      painPoint: "You're invisible in a sea of casual users",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      iconColor: "text-purple-400"
    }
  ]

  const solutionCards = [
    {
      icon: "🧠",
      title: "AI-Powered Personal Competition",
      description: "Our AI analyzes your patterns and creates intelligent challenges that push you exactly where you need to grow most.",
      benefit: "Personalized growth that actually works",
      gradient: "from-primary/15 to-secondary/15",
      borderColor: "border-primary/30",
      iconColor: "text-primary",
      successMetric: "94% see improvement in first week"
    },
    {
      icon: "⚔️",
      title: "Battle Yesterday's You",
      description: "Every workout becomes a head-to-head competition against your previous self. Track wins, losses, and breakthrough moments.",
      benefit: "Turn every workout into a victory",
      gradient: "from-secondary/15 to-primary/15",
      borderColor: "border-secondary/30",
      iconColor: "text-secondary",
      successMetric: "Average 23% performance increase"
    },
    {
      icon: "👑",
      title: "Elite Performance Athlete Status",
      description: "Build genuine status through consistent self-improvement victories. Join an exclusive community that recognizes real progress.",
      benefit: "Earn respect through real achievement",
      gradient: "from-primary/15 to-secondary/15",
      borderColor: "border-primary/30",
      iconColor: "text-gradient",
      successMetric: "Join 47K+ elite athletes"
    }
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/6 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/6 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Enhanced Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur border border-red-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-red-400 text-sm">⚠️</span>
            <span className="text-white text-sm font-semibold">THE PROBLEM WITH FITNESS APPS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Most Fitness Apps Lack{' '}
            <span className="text-gradient">Real Competition</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            They track your workouts but ignore what really drives you:{' '}
            <span className="text-text-primary font-bold">recognition, status, and belonging to something exclusive</span>{' '}
            that separates elite athletes from casual users.
          </p>
        </motion.div>

        {/* Enhanced Problem-Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          
          {/* Problem Side - Enhanced */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="text-center lg:text-left mb-8"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-400 mb-3">
                😤 The Problem
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 font-medium">
                Why 89% of fitness apps fail to create lasting change
              </p>
            </motion.div>

            {problemCards.map((card, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  ...fadeInUp,
                  animate: {
                    ...fadeInUp.animate,
                    transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" }
                  },
                  ...cardHover
                }}
                className={`bg-gradient-to-br ${card.gradient} backdrop-blur-[20px] border ${card.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
                style={{
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    variants={iconAnimation}
                    className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    {card.icon}
                  </motion.div>
                  
                  <div className="bg-red-500/20 backdrop-blur border border-red-400/30 rounded-full px-3 py-1 inline-block mb-3">
                    <span className="text-red-300 text-xs font-semibold uppercase tracking-wide">
                      {card.painPoint}
                    </span>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-red-300 transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solution Side - Enhanced */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="text-center lg:text-left mb-8"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gradient mb-3">
                🚀 The Solution
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 font-medium">
                How elite athletes actually achieve breakthrough results
              </p>
            </motion.div>

            {solutionCards.map((card, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  ...fadeInUp,
                  animate: {
                    ...fadeInUp.animate,
                    transition: { duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }
                  },
                  ...cardHover
                }}
                className={`bg-gradient-to-br ${card.gradient} backdrop-blur-[20px] border ${card.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
                style={{
                  boxShadow: '0 8px 32px rgba(255, 59, 48, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    variants={iconAnimation}
                    className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    {card.icon}
                  </motion.div>
                  
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur border border-primary/30 rounded-full px-3 py-1 inline-block mb-3">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wide">
                      {card.benefit}
                    </span>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-gradient transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg mb-4">
                    {card.description}
                  </p>
                  
                  {/* Success Metric */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="text-green-300 text-sm font-semibold">
                      {card.successMetric}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Statement with CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.5, ease: "easeOut" }
            }
          }}
          className="text-center pt-8 sm:pt-12 border-t border-white/10"
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-6 leading-tight">
              Stop Settling for Generic Fitness Tracking
            </h3>
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Your only competition is{' '}
              <span className="text-gradient font-bold">who you were yesterday</span>.{' '}
              Join the elite athletes who've discovered what real AI-powered challenges look like.
            </p>
            
            {/* Mini CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/join'}
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl transition-all duration-300 text-base sm:text-lg hover:shadow-primary/40 group"
            >
              <span>Experience Real Competition</span>
              <motion.span 
                className="ml-2 text-xl"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </motion.button>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">⚡</span>
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">👑</span>
                <span>Elite status</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default ProblemSection 