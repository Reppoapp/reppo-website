import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import InlineCTA from '../components/InlineCTA'

const Community = () => {
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
            <span className="text-accent-green">👥</span>
            <span>Elite Training Community</span>
          </div>
          
          <h1 className="hero-title text-primary-white mb-6">
            Train WITH Elite Athletes
          </h1>
          
          <p className="hero-subtitle text-primary-white/90 mb-8">
            Join athlete-specific communities where you can share your training experiences 
            with others following the same elite athletes.
          </p>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header mb-6">
              Athlete-Specific Communities
            </h2>
            <p className="section-description max-w-3xl mx-auto">
              Connect with others who train with the same elite athletes. Share experiences, 
              celebrate achievements, and support each other in your authentic training journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🏃‍♂️",
                title: "Mental Toughness Community",
                description: "Connect with others training with elite endurance athletes' actual workout data. Share your mental toughness journey and support each other through challenging workouts.",
                members: "12,847",
                color: "from-accent-orange to-primary-blue"
              },
              {
                icon: "🏹",
                title: "Outdoor Athletes Community",
                description: "Join hunters and endurance athletes training with elite outdoor athletes' running and archery data. Share your outdoor training experiences.",
                members: "8,234",
                color: "from-accent-green to-accent-orange"
              },
              {
                icon: "💪",
                title: "Elite Athletes Hub",
                description: "General community for all athletes training with multiple elite athletes. Share tips, progress, and celebrate achievements together.",
                members: "23,891",
                color: "from-primary-blue to-accent-green"
              }
            ].map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${community.color} flex items-center justify-center text-primary-white font-bold text-2xl mx-auto mb-6`}>
                  {community.icon}
                </div>
                <h3 className="feature-title">{community.title}</h3>
                <p className="feature-description mb-4">{community.description}</p>
                <div className="data-metric text-sm text-primary-blue">
                  {community.members} members
                </div>
              </motion.div>
            ))}
          </div>

          {/* Community Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="feature-card text-center"
          >
            <h2 className="section-header mb-8">Community Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🤝",
                  title: "Peer Support",
                  description: "Connect with others on the same training journey and support each other through challenges."
                },
                {
                  icon: "📈",
                  title: "Progress Sharing",
                  description: "Share your progress and celebrate achievements with people who understand your dedication."
                },
                {
                  icon: "🏆",
                  title: "Exclusive Access",
                  description: "Get exclusive access to athlete interactions and community-only training content."
                },
                {
                  icon: "💬",
                  title: "Real Discussions",
                  description: "Engage in authentic conversations about training, mindset, and athletic performance."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-gradient-athletic flex items-center justify-center text-primary-white font-bold text-xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-2">{benefit.title}</h3>
                    <p className="text-text-gray">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <InlineCTA />
    </div>
  )
}

export default Community 