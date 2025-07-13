import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import InlineCTA from './InlineCTA'

const FeatureCard = ({ title, description, icon, delay = 0, features, metric, isActive, onHover }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => {
        setIsHovered(true)
        onHover()
      }}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer group h-full relative overflow-hidden ${
        isActive ? 'border-primary/30 bg-primary/5' : 'hover:border-white/20 hover:bg-white/10'
      }`}
      style={{
        boxShadow: isActive 
          ? '0 8px 32px rgba(255, 59, 48, 0.3)' 
          : '0 8px 32px rgba(31, 38, 135, 0.2)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      {/* Animated background overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        {/* Icon with enhanced animation */}
        <motion.div 
          className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
          animate={isActive ? { 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-text-primary group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
          {description}
        </p>

        {/* Success Metric */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-400/30 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-sm">📈</span>
            <span className="text-green-300 font-semibold text-xs sm:text-sm">
              {metric}
            </span>
          </div>
        </div>

        {/* Feature Details - Revealed on Hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="space-y-2 overflow-hidden"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? 0 : -20 
              }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
              <span className="text-text-secondary text-xs sm:text-sm">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

const FeatureGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const features = [
    {
      title: "AI Challenge Engine",
      description: "Our proprietary AI analyzes your performance patterns and creates personalized challenges that push you exactly where you need to grow most.",
      icon: "🧠",
      metric: "94% see improvement in first week",
      features: [
        "Real-time performance analysis",
        "Adaptive difficulty scaling",
        "Pattern recognition algorithms",
        "Personalized growth targeting"
      ]
    },
    {
      title: "Yesterday vs Today Battles",
      description: "Every workout becomes a head-to-head competition against your previous self. Track wins, losses, and breakthrough moments in real-time.",
      icon: "⚔️",
      metric: "Average 23% performance increase",
      features: [
        "Daily performance comparisons",
        "Win/loss tracking system",
        "Breakthrough moment detection",
        "Progress velocity monitoring"
      ]
    },
    {
      title: "Elite Performance Tracking",
      description: "Advanced metrics that go beyond basic fitness apps. Measure improvement velocity, consistency streaks, and performance acceleration.",
      icon: "📊",
      metric: "Track 50+ performance metrics",
      features: [
        "Improvement velocity analysis",
        "Consistency streak tracking",
        "Performance acceleration curves",
        "Advanced analytics dashboard"
      ]
    },
    {
      title: "Community Leaderboards",
      description: "Compete anonymously with other performance athletes. See how your self-improvement rate stacks up against the elite fitness community.",
      icon: "🏆",
      metric: "Join 47K+ elite athletes",
      features: [
        "Anonymous competition system",
        "Elite athlete rankings",
        "Self-improvement rate comparisons",
        "Community achievement showcases"
      ]
    },
    {
      title: "Smart Recovery Insights",
      description: "AI-powered recovery recommendations that ensure you're competing at peak performance every single day without burnout.",
      icon: "🔄",
      metric: "89% avoid overtraining",
      features: [
        "AI recovery optimization",
        "Burnout prevention algorithms",
        "Peak performance timing",
        "Personalized rest recommendations"
      ]
    },
    {
      title: "Achievement Unlocks",
      description: "Unlock exclusive badges, performance milestones, and elite status levels as you consistently outperform your previous self.",
      icon: "🎖️",
      metric: "Unlock 100+ achievements",
      features: [
        "Exclusive badge system",
        "Performance milestone tracking",
        "Elite status progression",
        "Achievement showcase profiles"
      ]
    }
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/6 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur border border-purple-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-400 text-sm">🚀</span>
            <span className="text-white text-sm font-semibold">NEXT-GENERATION FEATURES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            The Future of{' '}
            <span className="text-gradient">Personal Competition</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Forget generic fitness tracking. Reppo creates intelligent challenges that separate{' '}
            <span className="text-text-primary font-bold">elite competitors from casual users</span>{' '}
            through AI-powered self-improvement.
          </p>
        </motion.div>

        {/* Enhanced Features Grid with Better Visual Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index}
              isActive={activeFeature === index}
              onHover={() => setActiveFeature(index)}
            />
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
            }
          }}
          className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 sm:p-12 mb-12 sm:mb-16 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-4">
              Proven Results from Elite Athletes
            </h3>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
              Real performance data from thousands of athletes using Reppo's AI competition system
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { stat: "94%", label: "See improvement in first week", icon: "📈" },
              { stat: "23%", label: "Average performance increase", icon: "💪" },
              { stat: "89%", label: "Maintain 30+ day streaks", icon: "🔥" },
              { stat: "47K+", label: "Elite athletes competing", icon: "👑" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">{item.stat}</div>
                <div className="text-sm text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Inline CTA */}
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
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl text-center"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-6 leading-tight">
              Ready to Compete Against Yesterday?
            </h3>
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Join thousands of performance athletes who've made the switch from generic fitness tracking to{' '}
              <span className="text-gradient font-bold">intelligent self-competition</span>.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-2xl transition-all duration-300 text-lg sm:text-xl hover:shadow-primary/40 group mb-6"
            >
              <span>Start Your Elite Journey</span>
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
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">⚡</span>
                <span>Instant results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">👑</span>
                <span>Elite community</span>
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

export default FeatureGrid 