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
      title: "Foundation Launch",
      status: "In Progress",
      timeline: "Q1 2025",
      features: [
        "Core workout tracking & streaks",
        "Verified athlete badge system", 
        "Elite community access",
        "Founder-exclusive perks"
      ],
      icon: "🚀",
      color: "from-primary to-secondary"
    },
    {
      phase: "Phase 2", 
      title: "Social & Competition",
      status: "Coming Soon",
      timeline: "Q2 2025",
      features: [
        "Advanced leaderboards & rankings",
        "Member-only merch marketplace",
        "Live workout challenges",
        "VIP community events"
      ],
      icon: "🏆",
      color: "from-secondary to-purple-500"
    },
    {
      phase: "Phase 3",
      title: "Elite Expansion", 
      status: "Planned",
      timeline: "Q3 2025",
      features: [
        "Professional athlete partnerships",
        "Exclusive brand collaborations",
        "Advanced analytics & insights",
        "Global fitness competitions"
      ],
      icon: "💎",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight">
            The <span className="text-gradient">Reppo Roadmap</span>
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're building the future of elite fitness community.{' '}
            <span className="text-text-primary font-semibold">Founders get early access to everything.</span>
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="space-y-12">
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
              className="relative"
            >
              {/* Timeline Line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-6 top-20 w-px h-20 bg-gradient-to-b from-white/20 to-transparent hidden md:block"></div>
              )}

              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Phase Info */}
                <div className="md:col-span-3 text-center md:text-left">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{item.phase}</h3>
                  <div className="text-text-secondary text-sm mb-2">{item.timeline}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'In Progress' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : item.status === 'Coming Soon'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {item.status}
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:col-span-9">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <h4 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-colors duration-300">
                      {item.title}
                    </h4>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Benefits Callout */}
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
          className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
        >
          <div className="text-4xl mb-4">👑</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Founder Benefits Include
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-lg font-semibold text-gradient mb-2">Early Access</div>
              <p className="text-text-secondary text-sm">First to try every new feature</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-gradient mb-2">Exclusive Merch</div>
              <p className="text-text-secondary text-sm">Founder-only gear drops</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-gradient mb-2">Direct Access</div>
              <p className="text-text-secondary text-sm">Private line to the founding team</p>
            </div>
          </div>
        </motion.div>

        {/* Transition Statement */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
            }
          }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready to be part of the <span className="text-gradient font-semibold">fitness revolution</span>?
          </p>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default RoadmapSection 