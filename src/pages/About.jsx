import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import InlineCTA from '../components/InlineCTA'

const About = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="bg-primary-white">
      {/* Athletic Precision Hero Section */}
      <section className="py-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-green/20 text-accent-green px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-accent-green/30">
            <span className="text-accent-green">🏢</span>
            <span>About Our Mission</span>
          </div>
          
          <h1 className="hero-title text-primary-white mb-6">
            Authentic Training for Elite Athletes
          </h1>
          
          <p className="hero-subtitle text-primary-white/90 mb-8">
            We're building the first platform where you can train WITH your favorite athletes 
            using their actual workout data from Garmin and Apple Watch devices.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="feature-card mb-16"
          >
            <h2 className="section-header text-center mb-8">Our Mission</h2>
            <p className="text-xl text-text-gray leading-relaxed text-center max-w-3xl mx-auto">
              The fitness industry is flooded with fake programs and unverified content. 
              We're changing that by connecting you directly with verified elite athletes 
              through their actual workout data, creating the most authentic training experience possible.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🏆",
                title: "Authenticity First",
                description: "Every workout comes from verified athletes using real data from their Garmin and Apple Watch devices. No fake programs, no marketing content."
              },
              {
                icon: "🤖",
                title: "AI Personalization",
                description: "Advanced AI scales every athlete workout to your exact fitness level, available equipment, and time constraints while maintaining the training intensity."
              },
              {
                icon: "📱",
                title: "Live Connection",
                description: "Get instant notifications when your favorite athletes complete their workouts and receive their personalized training data in real-time."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card text-center"
              >
                <div className="feature-icon mx-auto mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="feature-title">{value.title}</h3>
                <p className="feature-description">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="feature-card text-center"
          >
            <h2 className="section-header mb-8">Why We Built This</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-text-gray leading-relaxed">
              <p>
                We were tired of fake fitness programs that claimed to be used by elite athletes 
                but had no proof. The fitness industry was full of marketing content disguised as training programs.
              </p>
              <p>
                That's when we realized: what if you could train WITH your favorite athletes using 
                                 their actual workout data? What if your favorite athlete finishing their morning workout meant 
                you could do a personalized version of that exact workout?
              </p>
              <p>
                We built the technology to make this possible. Live data from Garmin and Apple Watch devices, 
                AI personalization that scales workouts to your level, and a platform that connects you 
                directly with verified elite athletes.
              </p>
              <p className="text-primary-navy font-semibold">
                This is authentic training. This is the future of fitness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <InlineCTA />
    </div>
  )
}

export default About 