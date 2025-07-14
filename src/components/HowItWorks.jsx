import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  // Auto-progress through steps
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % 4)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const stepAnimation = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const iconPulse = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  }

  const steps = [
    {
      number: "01",
      title: "Choose Your Favorite",
      description: "Subscribe to train with your favorite fitness influencer or athlete. Browse verified athletes with live Garmin and Apple Watch data sharing.",
      icon: "⭐",
      color: "from-primary to-secondary",
      successMetric: "Train with verified elite athletes",
      features: [
        "Verified athlete profiles with live data",
        "Multiple athlete subscriptions available",
        "Real workout data from Garmin/Apple Watch",
        "Authentic training programs only"
      ]
    },
    {
      number: "02", 
      title: "Get Live Notifications",
      description: "When your favorite athlete finishes their workout, you're notified instantly. No delays, no fake programs - just real training data from their actual sessions.",
      icon: "🔔",
      color: "from-secondary to-primary",
      successMetric: "Instant notifications from live workouts",
      features: [
        "Real-time workout completion alerts",
        "Live data from athlete devices",
        "Authentic workout timestamps",
        "No pre-recorded or fake content"
      ]
    },
    {
      number: "03",
      title: "Train Together",
      description: "Our AI creates your personalized version of their exact workout, scaled to your fitness level. Same intensity, same structure, your capability.",
      icon: "🤖",
      color: "from-primary to-secondary",
      successMetric: "AI-personalized to your exact level",
      features: [
        "AI scaling to your fitness level",
        "Maintains original workout structure",
        "Personalized intensity adjustments",
        "Real-time performance tracking"
      ]
    },
    {
      number: "04",
      title: "Track Progress",
      description: "See how you compare and improve alongside your favorite athlete. Track your progress, celebrate victories, and build your training legacy.",
      icon: "📈",
      color: "from-secondary to-primary",
      successMetric: "Progress tracking with your favorites",
      features: [
        "Side-by-side progress comparison",
        "Achievement tracking and badges",
        "Training streak monitoring",
        "Community leaderboards"
      ]
    }
  ]

  const ConnectingLine = ({ index, isActive }) => (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="hidden lg:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-primary/50 to-secondary/50 transform translate-x-8 origin-left"
      style={{
        background: isActive 
          ? 'linear-gradient(to right, #FF3B30, #2979FF)' 
          : 'linear-gradient(to right, rgba(255, 59, 48, 0.2), rgba(41, 121, 255, 0.2))'
      }}
    />
  )

  return (
    <section ref={ref} id="how-it-works" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/6 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-secondary/3 to-primary/3 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm">⚡</span>
            <span className="text-white text-sm font-semibold">SIMPLE YET REVOLUTIONARY</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            How <span className="text-gradient">Live Athlete Training</span> Works
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Four simple steps to train with{' '}
            <span className="text-text-primary font-bold">your favorite athletes</span>{' '}
            using their actual workout data.
          </p>
        </motion.div>

        {/* Enhanced Steps with Progressive Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-12 lg:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                ...stepAnimation,
                animate: {
                  ...stepAnimation.animate,
                  transition: { duration: 0.8, delay: index * 0.2, ease: "easeOut" }
                }
              }}
              className="relative group"
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step Number with Enhanced Design */}
              <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8 relative">
                <motion.div 
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ scale: 1.15 }}
                  style={{
                    boxShadow: '0 8px 32px rgba(255, 59, 48, 0.3)',
                  }}
                >
                  <span className="relative z-10">{step.number}</span>
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                
                {/* Progress indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: activeStep >= index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs">✓</span>
                </motion.div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <ConnectingLine index={index} isActive={activeStep > index} />
              )}

              {/* Enhanced Step Content */}
              <div className="text-center lg:text-left">
                <motion.div 
                  variants={iconPulse}
                  animate={activeStep === index ? "animate" : "initial"}
                  className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  {step.icon}
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-gradient transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed text-base sm:text-lg lg:text-xl mb-6">
                  {step.description}
                </p>

                {/* Success Metric */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-400/30 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-green-400 text-lg">📈</span>
                    <span className="text-green-300 font-bold text-sm sm:text-base">
                      {step.successMetric}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center justify-center lg:justify-start gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-text-secondary text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA with Glassmorphism */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.8, ease: "easeOut" }
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
              Ready to Train WITH{' '}
              <span className="text-gradient">Your Favorite Athletes</span>?
            </h3>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Join thousands of athletes who train alongside their favorites using live workout data and AI personalization.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">100%</div>
                <div className="text-sm text-gray-300">Authentic athlete data</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">Live</div>
                <div className="text-sm text-gray-300">Real-time notifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">AI</div>
                <div className="text-sm text-gray-300">Personalized scaling</div>
              </div>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/join'}
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-2xl transition-all duration-300 text-lg sm:text-xl hover:shadow-primary/40 group mb-6"
            >
              <span>Train with Your Favorites</span>
              <motion.span 
                className="ml-3 text-2xl"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </motion.button>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Live athlete data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🛡️</span>
                <span>AI personalization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">⚡</span>
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

export default HowItWorks 