import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import InlineCTA from './InlineCTA'

const FeatureCard = ({ title, description, icon, delay = 0, features, metric, isActive, onHover }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => {
        setIsHovered(true)
        onHover()
      }}
      onHoverEnd={() => setIsHovered(false)}
      className={`feature-card cursor-pointer group h-full relative overflow-hidden ${
        isActive ? 'border-primary-blue/30 bg-primary-blue/5' : 'hover:border-primary-blue/20'
      }`}
      style={{
        boxShadow: isActive 
          ? '0 8px 32px rgba(0, 212, 255, 0.3)' 
          : '0 8px 32px rgba(26, 29, 41, 0.1)',
      }}
    >
      {/* Athletic Precision background overlay */}
      <div className={`absolute inset-0 bg-gradient-athletic/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        {/* Athletic Precision Icon */}
        <motion.div 
          className="feature-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
          animate={isActive ? { 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>

        {/* Athletic Precision Title */}
        <h3 className="feature-title group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>

        {/* Athletic Precision Description */}
        <p className="feature-description mb-6">
          {description}
        </p>

        {/* Athletic Precision Success Metric */}
        <div className="bg-accent-green/20 backdrop-blur border border-accent-green/30 rounded-athletic p-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-accent-green text-sm">📈</span>
            <span className="text-accent-green font-semibold text-xs sm:text-sm font-mono">
              {metric}
            </span>
          </div>
        </div>

        {/* Feature Details - Revealed on Hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="space-y-2 overflow-hidden"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? 0 : -20 
              }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 bg-gradient-athletic rounded-full flex-shrink-0"></div>
              <span className="text-text-gray text-xs sm:text-sm">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

const FeatureGrid = () => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: "📱",
      title: "Live Athlete Data",
      description: "Get real workout data from your favorite athletes the moment they finish training. No fake programs, just authentic performance data from Garmin and Apple Watch.",
      metric: "100% Authentic athlete data",
      features: [
        "Real-time Garmin & Apple Watch integration",
        "Verified athlete accounts only",
        "Instant notifications when athletes finish workouts",
        "Complete workout metrics and performance data"
      ]
    },
    {
      icon: "🤖",
      title: "AI Personalization",
      description: "Advanced AI scales every athlete workout to your exact fitness level, available equipment, and time constraints. Train with elite athletes at your pace.",
      metric: "AI Personalized scaling",
      features: [
        "Fitness level analysis and adaptation",
        "Equipment availability consideration",
        "Time constraint optimization",
        "Progressive difficulty adjustment"
      ]
    },
    {
      icon: "🏆",
      title: "Authentic Training",
      description: "No more fake fitness influencer programs. Train with verified elite athletes using their actual workout data, not marketing content.",
      metric: "Verified athletes only",
      features: [
        "Verified elite athlete accounts",
        "Real workout data, not content",
        "Performance-based recommendations",
        "Authentic training experiences"
      ]
    },
    {
      icon: "👥",
      title: "Multiple Athletes",
      description: "Follow and train with multiple athletes across different sports. Get notifications when any of your favorites complete a workout.",
      metric: "Multi-athlete following",
      features: [
        "Follow unlimited verified athletes",
        "Cross-sport training variety",
        "Personalized athlete recommendations",
        "Flexible training schedule"
      ]
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Track your progress alongside your favorite athletes. See how you're improving and compare your growth with elite performance.",
      metric: "Performance analytics",
      features: [
        "Side-by-side progress comparison",
        "Performance trend analysis",
        "Achievement milestone tracking",
        "Detailed workout analytics"
      ]
    },
    {
      icon: "🌟",
      title: "Community",
      description: "Join athlete-specific communities where you can share your training experiences with others following the same elite athletes.",
      metric: "Athlete communities",
      features: [
        "Athlete-specific community groups",
        "Training experience sharing",
        "Peer motivation and support",
        "Exclusive athlete interactions"
      ]
    }
  ]

  // Auto-rotate active card
  React.useEffect(() => {
    if (!isInView) return
    
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isInView, features.length])

  return (
    <section ref={ref} className="py-20 bg-primary-white relative overflow-hidden">
      {/* Athletic Precision background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/5 via-transparent to-accent-orange/5"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Athletic Precision Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-blue/20 text-primary-blue px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary-blue/30"
          >
            <span className="live-indicator">LIVE</span>
            <span>Authentic Training Platform</span>
          </motion.div>
          
          <h2 className="section-header text-center mb-6">
            The Future of Authentic Training
          </h2>
          
          <p className="section-description text-center max-w-3xl mx-auto">
            Train with verified elite athletes using their actual workout data. No fake programs, 
            no marketing content - just authentic performance data scaled to your level.
          </p>
        </motion.div>

        {/* Athletic Precision Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index}
              isActive={activeCard === index}
              onHover={() => setActiveCard(index)}
            />
          ))}
        </div>

        {/* Athletic Precision Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-primary-blue mb-2">
              100%
            </div>
            <div className="text-text-gray font-medium">Authentic Athlete Data</div>
          </div>
          
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-accent-orange mb-2">
              Live
            </div>
            <div className="text-text-gray font-medium">Real-time Notifications</div>
          </div>
          
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-accent-green mb-2">
              AI
            </div>
            <div className="text-text-gray font-medium">Personalized Scaling</div>
          </div>
        </motion.div>

        {/* Athletic Precision CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <InlineCTA />
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureGrid 