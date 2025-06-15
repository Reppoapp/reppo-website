import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center p-8 hover:scale-105 transition-all duration-300"
    >
      <div className="text-5xl mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

const FeatureGrid = () => {
  const features = [
    {
      title: "Track & Analyze",
      description: "Record your workouts and analyze your performance with detailed metrics and progress tracking.",
      icon: "📊"
    },
    {
      title: "Share & Connect",
      description: "Workout with friends, stay motivated, get inspired - our community is what separates Reppo from the rest.",
      icon: "👥"
    },
    {
      title: "Explore & Compete",
      description: "Discover your next goal with challenges, leaderboards, and achievements that push you forward.",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white">
            Explore our features.
          </h2>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Ready to give it a shot?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-text-secondary mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xl">🆓</span>
              <span className="font-medium">Free to join / free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">👥</span>
              <span className="font-medium">Thousands of athletes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📱</span>
              <span className="font-medium">iPhone, Android & web apps</span>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-primary text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Join Us Now
          </button>
        </motion.div>
        
      </div>
    </section>
  )
}

export default FeatureGrid 