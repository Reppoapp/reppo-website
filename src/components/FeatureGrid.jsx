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
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full"
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-text-primary group-hover:text-gradient transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
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
      description: "Advanced machine learning analyzes your workout patterns and creates personalized challenges that evolve with your progress. Never plateau again.",
      icon: "🤖"
    },
    {
      title: "Live Competition Interface",
      description: "Real-time performance tracking shows you exactly how you're performing against yesterday's you. Every rep becomes a victory or learning moment.",
      icon: "⚔️"
    },
    {
      title: "Progressive Challenge System",
      description: "Our AI learns from every workout, creating increasingly intelligent challenges that push you just beyond your current limits. Always growing.",
      icon: "📈"
    },
    {
      title: "Celebrity Challenge Library",
      description: "Train against performance data from elite athletes and fitness legends. See how you measure up against your heroes' actual workouts.",
      icon: "🌟"
    },
    {
      title: "Victory History & Progression",
      description: "Track every win against your past self, document breakthrough moments, and watch your fitness identity evolve through proven achievements.",
      icon: "📜"
    },
    {
      title: "Community Competition Hub",
      description: "Challenge other users' best performances, join competitive leagues, and build your reputation through consistent self-improvement victories.",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight">
            The Future of{' '}
            <span className="text-gradient">Personal Competition</span>
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Forget generic fitness tracking. Reppo creates intelligent challenges that separate{' '}
            <span className="text-text-primary font-semibold">elite competitors from casual users.</span>
          </p>
        </motion.div>

        {/* Features Grid - 2x3 layout for better balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <InlineCTA
            title="Ready to Unlock AI Performance Challenges?"
            description="Join the exclusive community of performance athletes who get access to these premium features and more."
            buttonText="Get Early Access"
            size="medium"
            className="max-w-2xl mx-auto"
          />
        </div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default FeatureGrid 