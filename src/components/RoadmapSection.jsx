import React from 'react'
import { motion } from 'framer-motion'

const RoadmapSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "AI Challenge Foundation",
      timeline: "Q1 2025",
      status: "In Progress",
      icon: "🚀",
      color: "from-primary to-secondary",
      features: [
        "Personal AI challenge generation",
        "Basic performance tracking",
        "Victory/defeat system",
        "Daily challenge notifications"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Advanced Competition",
      timeline: "Q2 2025",
      status: "Coming Soon",
      icon: "⚔️",
      color: "from-secondary to-primary",
      features: [
        "Multi-day challenge campaigns",
        "Performance analytics dashboard",
        "Achievement system",
        "Streak tracking & rewards"
      ]
    },
    {
      phase: "Phase 3",
      title: "Community & Social",
      timeline: "Q3 2025", 
      status: "Planned",
      icon: "👥",
      color: "from-primary to-secondary",
      features: [
        "Anonymous leaderboards",
        "Challenge sharing",
        "Performance athlete badges",
        "Elite community features"
      ]
    },
    {
      phase: "Phase 4",
      title: "AI Evolution",
      timeline: "Q4 2025",
      status: "Future",
      icon: "🧠",
      color: "from-secondary to-primary",
      features: [
        "Predictive performance modeling",
        "Personalized recovery insights",
        "Advanced challenge algorithms",
        "Wellness integration"
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
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
            The <span className="text-gradient">AI Competition Roadmap</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            We're building the future of AI-powered fitness competition.{' '}
            <span className="text-text-primary font-semibold">Founders get early access to everything.</span>
          </p>
        </motion.div>

        {/* Roadmap Items */}
        <div className="space-y-8 sm:space-y-12">
          {roadmapItems.map((item, index) => (
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Phase Info */}
                <div className="md:col-span-3 text-center md:text-left">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${item.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">{item.phase}</h3>
                  <div className="text-text-secondary text-sm mb-2">{item.timeline}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'In Progress' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : item.status === 'Coming Soon'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : item.status === 'Planned'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {item.status}
                  </div>
                </div>

                {/* Phase Content */}
                <div className="md:col-span-9">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-gradient transition-colors duration-300">
                    {item.title}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Get <span className="text-gradient font-semibold">founder access</span> to every feature as we build the future of fitness competition
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-primary text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm sm:text-base lg:text-lg min-h-[48px] w-full sm:w-auto max-w-sm mx-auto"
          >
            Secure Founder Access
          </motion.button>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default RoadmapSection 