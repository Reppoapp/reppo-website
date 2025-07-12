import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToDemo = () => {
    // Scroll to demo section or handle demo action
    const demoSection = document.getElementById('demo') || document.getElementById('how-it-works')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-glass-card"
        >
          {/* Main Header */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-main-title"
          >
            Outperform Yesterday
          </motion.h1>
          
          {/* Subheader */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-subtitle"
          >
            The future of fitness isn't about competing with others.
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            Welcome to the world's most addictive fitness community where{' '}
            <span className="hero-highlight">your only competition is who you were yesterday</span>.{' '}
            Join elite athletes who've discovered the secret to unstoppable progress through 
            AI-powered daily challenges, streak rewards, and a community that celebrates every victory.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-stats"
          >
            <div className="hero-stat">
              <span className="hero-stat-number">47K+</span>
              <span className="hero-stat-label">Athletes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2.3M</span>
              <span className="hero-stat-label">Daily Check-ins</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">127</span>
              <span className="hero-stat-label">Avg Streak Days</span>
            </div>
          </motion.div>

          {/* Feature Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-badges"
          >
            <span className="hero-badge">🔥 Daily Streaks</span>
            <span className="hero-badge">🏆 AI Challenges</span>
            <span className="hero-badge">⚡ Real Progress</span>
            <span className="hero-badge">🚀 Elite Community</span>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-cta-container"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToWaitlist}
              className="hero-cta-primary"
            >
              Join the Movement
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToDemo}
              className="hero-cta-secondary"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-social-proof"
          >
            "I've tried every fitness app. This is the only one that made me <strong>obsessed</strong> with my own progress."<br />
            <span className="hero-highlight">— Sarah M., 284-day streak</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 