import React from 'react'
import { motion } from 'framer-motion'
import InlineCTA from './InlineCTA'

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full"
    >
      <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-text-primary group-hover:text-gradient transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  )
}

const FeatureGrid = () => {
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
      icon: "🧠"
    },
    {
      title: "Yesterday vs Today Battles",
      description: "Every workout becomes a head-to-head competition against your previous self. Track wins, losses, and breakthrough moments in real-time.",
      icon: "⚔️"
    },
    {
      title: "Elite Performance Tracking",
      description: "Advanced metrics that go beyond basic fitness apps. Measure improvement velocity, consistency streaks, and performance acceleration.",
      icon: "📊"
    },
    {
      title: "Community Leaderboards",
      description: "Compete anonymously with other performance athletes. See how your self-improvement rate stacks up against the elite fitness community.",
      icon: "🏆"
    },
    {
      title: "Smart Recovery Insights",
      description: "AI-powered recovery recommendations that ensure you're competing at peak performance every single day without burnout.",
      icon: "🔄"
    },
    {
      title: "Achievement Unlocks",
      description: "Unlock exclusive badges, performance milestones, and elite status levels as you consistently outperform your previous self.",
      icon: "🎖️"
    }
  ]

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Matching style */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            The Future of{' '}
            <span className="text-gradient">Personal Competition</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Forget generic fitness tracking. Reppo creates intelligent challenges that separate{' '}
            <span className="text-text-primary font-semibold">elite competitors from casual users.</span>
          </p>
        </motion.div>

        {/* Features Grid - 2x3 layout for better balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index}
            />
          ))}
        </div>

        {/* Inline CTA - Positioned after features */}
        <div className="mt-12 sm:mt-16">
          <InlineCTA
            title="Ready to Compete Against Yesterday?"
            description="Join thousands of performance athletes who've made the switch from generic fitness tracking to intelligent self-competition."
            size="large"
            className="max-w-4xl mx-auto"
          />
        </div>

      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default FeatureGrid 