import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RoadmapSection = () => {
  const [expandedCard, setExpandedCard] = useState(null)
  const [progressAnimated, setProgressAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setProgressAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

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
      completion: 78,
      icon: "🚀",
      color: "from-primary to-secondary",
      statusColor: "bg-blue-500",
      statusTextColor: "text-blue-300",
      features: [
        "Personal AI challenge generation",
        "Basic performance tracking",
        "Victory/defeat system",
        "Daily challenge notifications"
      ],
      founderBenefits: [
        "Early access to AI algorithms",
        "Priority challenge customization",
        "Direct feedback to development team",
        "Exclusive beta testing privileges"
      ],
      devInsights: "Our AI is trained on 2.3M+ workout sessions from elite athletes. The challenge generation algorithm considers 47 performance variables to create optimal daily battles.",
      deliverables: ["Core AI engine", "Mobile app MVP", "Performance dashboard", "Challenge system"],
      risks: ["Algorithm optimization", "User experience refinement"],
      timeline_details: "Started Dec 2024, Beta launch Feb 2025"
    },
    {
      phase: "Phase 2", 
      title: "Advanced Competition",
      timeline: "Q2 2025",
      status: "Coming Soon",
      completion: 15,
      icon: "⚔️",
      color: "from-secondary to-primary",
      statusColor: "bg-yellow-500",
      statusTextColor: "text-yellow-300",
      features: [
        "Multi-day challenge campaigns",
        "Performance analytics dashboard",
        "Achievement system",
        "Streak tracking & rewards"
      ],
      founderBenefits: [
        "Advanced analytics access",
        "Custom challenge creation tools",
        "Performance coaching insights",
        "Elite athlete benchmarking"
      ],
      devInsights: "Building predictive models that anticipate performance plateaus and automatically adjust challenge difficulty. Machine learning from 47K+ athlete data points.",
      deliverables: ["Advanced dashboard", "Campaign system", "Achievement engine", "Predictive analytics"],
      risks: ["Scaling challenges", "Data processing optimization"],
      timeline_details: "Planning phase complete, Development starts Q1 2025"
    },
    {
      phase: "Phase 3",
      title: "Community & Social",
      timeline: "Q3 2025", 
      status: "Planned",
      completion: 5,
      icon: "👥",
      color: "from-primary to-secondary",
      statusColor: "bg-purple-500",
      statusTextColor: "text-purple-300",
      features: [
        "Anonymous leaderboards",
        "Challenge sharing",
        "Performance athlete badges",
        "Elite community features"
      ],
      founderBenefits: [
        "Founder badge & recognition",
        "Community leadership roles",
        "Exclusive networking events",
        "Advanced social features"
      ],
      devInsights: "Creating anonymous competition systems that maintain privacy while enabling meaningful performance comparisons. Social features designed for elite athletes.",
      deliverables: ["Social platform", "Leaderboard system", "Community tools", "Badge system"],
      risks: ["Privacy implementation", "Community moderation"],
      timeline_details: "Research phase, Development planned Q2 2025"
    },
    {
      phase: "Phase 4",
      title: "AI Evolution",
      timeline: "Q4 2025",
      status: "Future",
      completion: 0,
      icon: "🧠",
      color: "from-secondary to-primary",
      statusColor: "bg-gray-500",
      statusTextColor: "text-gray-300",
      features: [
        "Predictive performance modeling",
        "Personalized recovery insights",
        "Advanced challenge algorithms",
        "Wellness integration"
      ],
      founderBenefits: [
        "AI coaching personalization",
        "Predictive health insights",
        "Advanced recovery optimization",
        "Lifetime founder access"
      ],
      devInsights: "Developing next-generation AI that predicts optimal training loads, recovery periods, and breakthrough moments. Integration with wearable devices for real-time optimization.",
      deliverables: ["Predictive AI", "Health integration", "Recovery optimization", "Advanced algorithms"],
      risks: ["AI complexity", "Health data integration"],
      timeline_details: "Concept phase, Research ongoing"
    }
  ]

  const StatusBadge = ({ status, completion, statusColor, statusTextColor }) => (
    <div className={`inline-flex items-center gap-2 ${statusColor}/20 backdrop-blur border ${statusColor.replace('bg-', 'border-')}/30 rounded-full px-3 py-1 text-sm font-semibold ${statusTextColor}`}>
      <div className={`w-2 h-2 ${statusColor} rounded-full ${status === 'In Progress' ? 'animate-pulse' : ''}`}></div>
      {status}
    </div>
  )

  const ProgressBar = ({ completion, color }) => (
    <div className="w-full bg-gray-700/50 rounded-full h-2 mb-4">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: progressAnimated ? `${completion}%` : 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className={`h-2 rounded-full bg-gradient-to-r ${color} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </motion.div>
    </div>
  )

  const TimelineConnector = ({ index, isActive }) => (
    <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary/30 to-secondary/30">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? "100%" : "30%" }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="w-full bg-gradient-to-b from-primary to-secondary"
      />
    </div>
  )

  const RoadmapCard = ({ item, index, isExpanded, onToggle }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <TimelineConnector index={index} isActive={item.status === 'In Progress'} />
      
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        onClick={() => onToggle(index)}
        className={`bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer hover:border-primary/30 shadow-2xl ${
          isExpanded ? 'ring-2 ring-primary/30' : ''
        }`}
        style={{
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg`}>
              {item.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{item.phase}</h3>
                <StatusBadge 
                  status={item.status} 
                  completion={item.completion}
                  statusColor={item.statusColor}
                  statusTextColor={item.statusTextColor}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-300">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.timeline}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-gradient mb-1">{item.completion}%</div>
            <div className="text-xs text-gray-400">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar completion={item.completion} color={item.color} />

        {/* Core Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {item.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-green-400">✓</span>
              {feature}
            </div>
          ))}
        </div>

        {/* Founder Benefits Preview */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur border border-primary/20 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400">👑</span>
            <span className="text-yellow-300 font-semibold text-sm">Founder Access Benefits</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {item.founderBenefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                <span className="text-primary">•</span>
                {benefit}
              </div>
            ))}
          </div>
          {!isExpanded && (
            <button className="text-primary text-xs mt-2 hover:text-primary/80 transition-colors">
              View all benefits →
            </button>
          )}
        </div>

        {/* Expand/Collapse Button */}
        <button className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <span className="text-sm font-medium">
            {isExpanded ? 'Show less' : 'View detailed roadmap'}
          </span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-white/10 space-y-6"
            >
              {/* Complete Founder Benefits */}
              <div>
                <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">👑</span>
                  Complete Founder Benefits
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.founderBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-primary">✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Insights */}
              <div>
                <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-blue-400">🔬</span>
                  Behind the Scenes
                </h5>
                <p className="text-sm text-gray-300 leading-relaxed bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                  {item.devInsights}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-green-400">📦</span>
                  Key Deliverables
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">□</span>
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Details */}
              <div>
                <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-purple-400">📅</span>
                  Timeline Details
                </h5>
                <p className="text-sm text-gray-300 bg-purple-500/10 border border-purple-400/20 rounded-lg p-3">
                  {item.timeline_details}
                </p>
              </div>

              {/* Risks & Challenges */}
              {item.risks.length > 0 && (
                <div>
                  <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-orange-400">⚠️</span>
                    Technical Challenges
                  </h5>
                  <div className="space-y-2">
                    {item.risks.map((risk, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-orange-400">•</span>
                        {risk}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/2 to-secondary/2 rounded-full blur-3xl"></div>
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
            <span className="text-purple-400 text-sm">🗺️</span>
            <span className="text-white text-sm font-semibold">INTERACTIVE DEVELOPMENT ROADMAP</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            The <span className="text-gradient">AI Competition Roadmap</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Transparent development timeline with{' '}
            <span className="text-text-primary font-bold">real progress tracking, founder benefits, and behind-the-scenes insights</span>{' '}
            from our engineering team.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          {roadmapItems.map((item, index) => (
            <RoadmapCard
              key={index}
              item={item}
              index={index}
              isExpanded={expandedCard === index}
              onToggle={(idx) => setExpandedCard(expandedCard === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
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
          className="text-center pt-8 sm:pt-12 border-t border-white/10"
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-6 leading-tight">
              Get <span className="text-gradient">Founder Access</span> to Every Feature
            </h3>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              As we build the future of AI-powered fitness competition, founders get{' '}
              <span className="text-gradient font-bold">early access, exclusive features, and direct influence</span>{' '}
              on product development.
            </p>

            {/* Founder Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: "🚀", title: "Early Access", desc: "First to try new features" },
                { icon: "👑", title: "Founder Badge", desc: "Lifetime elite status" },
                { icon: "📊", title: "Advanced Analytics", desc: "Deep performance insights" },
                { icon: "🎯", title: "Direct Feedback", desc: "Shape product development" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur border border-primary/20 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <div className="text-sm font-bold text-white mb-1">{benefit.title}</div>
                  <div className="text-xs text-gray-300">{benefit.desc}</div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/join'}
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-2xl transition-all duration-300 text-lg sm:text-xl hover:shadow-primary/40 group"
            >
              <span>Secure Founder Access</span>
              <motion.span 
                className="ml-3 text-2xl"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎯
              </motion.span>
            </motion.button>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🔒</span>
                <span>Limited spots</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">⚡</span>
                <span>Early access</span>
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

export default RoadmapSection 