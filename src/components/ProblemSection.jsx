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
      icon: "🎭",
      title: "Fake Fitness Programs",
      description: "Most fitness programs are generic templates with no proof that your favorite athletes actually follow them. Pure marketing, zero authenticity.",
      painPoint: "You're following fake programs",
      gradient: "from-gray-500/20 to-gray-600/20",
      borderColor: "border-gray-400/30",
      iconColor: "text-gray-400"
    },
    {
      icon: "❌",
      title: "No Proof Athletes Follow Their Own Advice",
      description: "That workout plan your favorite athlete is selling? They probably don't even use it. You're getting their marketing, not their training.",
      painPoint: "You're getting sold, not trained",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      iconColor: "text-orange-400"
    },
    {
      icon: "🔒",
      title: "Static Content That Doesn't Adapt",
      description: "Pre-recorded workouts and static programs can't evolve with your progress or match what elite athletes are actually doing today.",
      painPoint: "You're stuck with outdated content",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      iconColor: "text-purple-400"
    }
  ]

  const solutionCards = [
    {
      icon: "📱",
      title: "Live Athlete Data from Garmin & Apple Watch",
      description: "Get real workout data straight from your favorite athletes' devices. When they finish training, you get instant access to their actual workout.",
      benefit: "100% authentic athlete training",
      gradient: "from-primary/15 to-secondary/15",
      borderColor: "border-primary/30",
      iconColor: "text-primary",
      successMetric: "Real-time data from verified athletes"
    },
    {
      icon: "🤖",
      title: "AI Personalization Engine",
      description: "Our AI takes your favorite athlete's workout and scales it perfectly to your fitness level. Same intensity, same structure, your capability.",
      benefit: "Elite training made achievable",
      gradient: "from-secondary/15 to-primary/15",
      borderColor: "border-secondary/30",
      iconColor: "text-secondary",
      successMetric: "Personalized to your exact level"
    },
    {
      icon: "🏆",
      title: "Train with Multiple Favorites",
      description: "Subscribe to different athletes for variety. Train with David Goggins on Monday, Cameron Hanes on Tuesday. Always authentic, always current.",
      benefit: "Unlimited access to elite training",
      gradient: "from-primary/15 to-secondary/15",
      borderColor: "border-primary/30",
      iconColor: "text-gradient",
      successMetric: "Train with 47K+ other athletes"
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
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  ...fadeInUp,
                  animate: {
                    ...fadeInUp.animate,
                    transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" }
                  }
                }}
                className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group relative min-h-[320px] flex flex-col"
                style={{
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-3xl mb-4 opacity-60">
                      {card.icon}
                    </div>
                    
                    <div className="bg-gray-500/20 border border-gray-400/30 rounded-full px-3 py-1 inline-block mb-3">
                      <span className="text-gray-300 text-xs font-medium uppercase tracking-wide">
                        {card.painPoint}
                      </span>
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                      {card.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Spacer to match solution cards height */}
                  <div className="pt-3 mt-4 border-t border-white/10">
                    <div className="h-6"></div>
                  </div>
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
                🚀 The Reppo Solution
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
                className={`bg-gradient-to-br ${card.gradient} backdrop-blur-[20px] border ${card.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl cursor-pointer group relative overflow-hidden min-h-[320px] flex flex-col`}
                style={{
                  boxShadow: '0 8px 32px rgba(255, 59, 48, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
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
                  </div>
                  
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
              Stop Settling for Fake Fitness Programs
            </h3>
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Train with{' '}
              <span className="text-gradient font-bold">your favorite athletes</span>{' '}
              using their actual workout data. Every workout is authentic, personalized, and perfectly scaled to your fitness level.
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
              <span>Train with Your Favorites</span>
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
                <span>Live athlete data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">⚡</span>
                <span>AI personalization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">👑</span>
                <span>Authentic training</span>
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