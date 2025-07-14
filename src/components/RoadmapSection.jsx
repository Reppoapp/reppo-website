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
      title: "Live Athlete Data Integration",
      timeline: "Q1 2025",
      status: "In Progress",
      completion: 78,
      icon: "📱",
      color: "from-primary-blue to-accent-orange",
      statusColor: "bg-primary-blue",
      statusTextColor: "text-primary-blue",
      features: [
        "Garmin & Apple Watch integration",
        "Real-time workout notifications",
        "Athlete verification system",
        "Live data streaming"
      ],
      founderBenefits: [
        "Early access to elite athletes",
        "Priority athlete subscriptions",
        "Direct feedback channel",
        "Exclusive beta features"
      ],
      devInsights: "Building secure APIs to connect with athlete devices while maintaining privacy and authenticity.",
      deliverables: ["Device integrations", "Notification system", "Athlete dashboard", "Data pipeline"],
      timeline_details: "Started Dec 2024, Beta launch Feb 2025"
    },
    {
      phase: "Phase 2", 
      title: "AI Personalization Engine",
      timeline: "Q2 2025",
      status: "Coming Soon",
      completion: 15,
      icon: "🤖",
      color: "from-accent-orange to-accent-green",
      statusColor: "bg-accent-orange",
      statusTextColor: "text-accent-orange",
      features: [
        "Fitness level analysis",
        "Equipment adaptation",
        "Workout scaling algorithms",
        "Performance tracking"
      ],
      founderBenefits: [
        "Advanced AI features",
        "Custom workout parameters",
        "Performance insights",
        "Priority algorithm access"
      ],
      devInsights: "Training AI models on diverse fitness data to create personalized workout experiences for every athlete.",
      deliverables: ["AI engine", "Personalization system", "Analytics dashboard", "Scaling algorithms"],
      timeline_details: "Development starts Q1 2025, Launch Q2 2025"
    },
    {
      phase: "Phase 3",
      title: "Community & Progress Tracking",
      timeline: "Q3 2025", 
      status: "Planned",
      completion: 5,
      icon: "📊",
      color: "from-accent-green to-primary-blue",
      statusColor: "bg-accent-green",
      statusTextColor: "text-accent-green",
      features: [
        "Athlete-specific communities",
        "Progress comparison tools",
        "Achievement system",
        "Community leaderboards"
      ],
      founderBenefits: [
        "Founder community access",
        "Leadership opportunities",
        "Exclusive events",
        "Advanced social features"
      ],
      devInsights: "Creating communities around specific athletes to build authentic training experiences and peer support.",
      deliverables: ["Community platform", "Progress tools", "Achievement system", "Social features"],
      timeline_details: "Planning Q2 2025, Development Q3 2025"
    },
    {
      phase: "Phase 4",
      title: "Mobile App & Advanced Features",
      timeline: "Q4 2025",
      status: "Future",
      completion: 0,
      icon: "🚀",
      color: "from-primary-blue to-accent-orange",
      statusColor: "bg-primary-navy",
      statusTextColor: "text-primary-navy",
      features: [
        "Native mobile applications",
        "Offline workout access",
        "Advanced analytics",
        "Premium athlete content"
      ],
      founderBenefits: [
        "Lifetime premium access",
        "Mobile app priority",
        "Exclusive athlete content",
        "Advanced features"
      ],
      devInsights: "Full mobile experience with offline capabilities and premium features for the most dedicated athletes.",
      deliverables: ["iOS/Android apps", "Offline features", "Premium content", "Advanced analytics"],
      timeline_details: "Design Q3 2025, Development Q4 2025"
    }
  ]

  const StatusBadge = ({ status, completion, statusColor, statusTextColor }) => (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${statusColor}/20 border ${statusColor}/30`}>
      <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
      <span className={statusTextColor}>{status} • {completion}%</span>
    </div>
  )

  const ProgressBar = ({ completion, color }) => (
    <div className="w-full bg-border-gray rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: progressAnimated ? `${completion}%` : 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
    </div>
  )

  const RoadmapCard = ({ item, index, isExpanded, onToggle }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="feature-card relative"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-primary-white font-bold text-2xl`}>
            {item.icon}
          </div>
          <div>
            <div className="text-sm font-mono text-text-gray mb-1">{item.phase}</div>
            <h3 className="text-xl font-bold text-primary-navy">{item.title}</h3>
            <div className="text-sm text-text-gray mt-1">{item.timeline}</div>
          </div>
        </div>
        <StatusBadge 
          status={item.status} 
          completion={item.completion}
          statusColor={item.statusColor}
          statusTextColor={item.statusTextColor}
        />
      </div>

      <div className="mb-6">
        <ProgressBar completion={item.completion} color={item.color} />
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-primary-navy mb-2">Key Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {item.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-text-gray">
                <div className="w-1.5 h-1.5 bg-gradient-athletic rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary-navy mb-2">Founder Benefits</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {item.founderBenefits.slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-accent-green">
                <span>👑</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => onToggle(index)}
        className="w-full text-left text-primary-blue font-medium text-sm hover:text-accent-orange transition-colors"
      >
        {isExpanded ? 'Show Less' : 'View Details'} 
        <span className={`ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-border-gray space-y-4"
          >
            <div>
              <h4 className="font-semibold text-primary-navy mb-2">Development Insights</h4>
              <p className="text-sm text-text-gray leading-relaxed">{item.devInsights}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary-navy mb-2">Timeline</h4>
              <p className="text-sm text-text-gray">{item.timeline_details}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary-navy mb-2">All Founder Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.founderBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-accent-green">
                    <span>👑</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <section className="py-20 bg-primary-white relative overflow-hidden">
      {/* Athletic Precision background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/5 via-transparent to-accent-orange/5"></div>
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Athletic Precision Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-header text-center mb-6">
            Product Development Roadmap
          </h2>
          
          <p className="section-description text-center max-w-3xl mx-auto">
            See how we're building the future of authentic athlete training, 
            from live data integration to AI personalization and community features.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
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

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="feature-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-navy mb-4">
              Join as a Founder
            </h3>
            <p className="text-text-gray mb-6">
              Get early access to all features, exclusive founder benefits, 
              and help shape the future of authentic athlete training.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/join'}
              className="btn-primary bg-gradient-athletic text-primary-white font-bold px-8 py-4 rounded-athletic shadow-blue-glow transition-all duration-300 text-lg"
            >
              <span>Secure Founder Access</span>
              <span className="ml-2">🚀</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RoadmapSection 