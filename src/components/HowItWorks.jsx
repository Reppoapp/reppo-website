import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  // Auto-cycle through steps
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  const steps = [
    {
      number: "01",
      title: "Choose Your Favorite",
              description: "Browse and subscribe to verified elite athletes across multiple sports. From endurance legends to strength champions, pick your training inspiration.",
      icon: "🏃‍♂️",
      details: [
        "Verified athlete profiles only",
        "Multiple sport categories",
        "Real athlete biographies",
        "Training style previews"
      ],
      color: "from-primary-blue to-accent-orange"
    },
    {
      number: "02", 
      title: "Get Live Notifications",
      description: "Receive instant notifications when your favorite athletes complete their workouts. No waiting, no delays - just real-time training data.",
      icon: "📱",
      details: [
        "Real-time Garmin/Apple Watch sync",
        "Instant push notifications",
        "Workout completion alerts",
        "Performance data included"
      ],
      color: "from-accent-orange to-accent-green"
    },
    {
      number: "03",
      title: "Train Together",
      description: "Get an AI-personalized version of their exact workout, scaled to your fitness level, available equipment, and time constraints.",
      icon: "🤖",
      details: [
        "AI fitness level analysis",
        "Equipment adaptation",
        "Time constraint optimization",
        "Intensity scaling"
      ],
      color: "from-accent-green to-primary-blue"
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Monitor your improvement alongside your favorite athletes. See how you're progressing compared to elite performance standards.",
      icon: "📊",
      details: [
        "Side-by-side progress tracking",
        "Performance analytics",
        "Achievement milestones",
        "Community leaderboards"
      ],
      color: "from-primary-blue to-accent-orange"
    }
  ]

  const StepCard = ({ step, index, isActive, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onClick}
      className={`feature-card cursor-pointer transition-all duration-300 ${
        isActive ? 'border-primary-blue/50 shadow-blue-glow' : 'hover:border-primary-blue/30'
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-primary-white font-bold text-2xl`}>
          {step.icon}
        </div>
        <div className="flex-1">
          <div className="text-sm font-mono text-text-gray mb-1">STEP {step.number}</div>
          <h3 className="text-xl font-bold text-primary-navy">{step.title}</h3>
        </div>
      </div>
      
      <p className="text-text-gray leading-relaxed mb-6">
        {step.description}
      </p>
      
      <div className="space-y-2">
        {step.details.map((detail, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gradient-athletic rounded-full flex-shrink-0"></div>
            <span className="text-sm text-text-gray">{detail}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section ref={ref} className="py-20 bg-primary-white relative overflow-hidden">
      {/* Athletic Precision background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/5 via-transparent to-accent-orange/5"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Athletic Precision Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-blue/20 text-primary-blue px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary-blue/30"
          >
            <span className="text-primary-blue">⚡</span>
            <span>Live Training Process</span>
          </motion.div>
          
          <h2 className="section-header text-center mb-6">
            How Live Athlete Training Works
          </h2>
          
          <p className="section-description text-center max-w-3xl mx-auto">
            From selecting your favorite athletes to tracking your progress alongside them - 
            here's how authentic training with elite athletes actually works.
          </p>
        </motion.div>

        {/* Athletic Precision Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StepCard
                step={step}
                index={index}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            </motion.div>
          ))}
        </div>

        {/* Athletic Precision Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-primary-blue mb-2">
              100%
            </div>
            <div className="text-text-gray font-medium">Authentic athlete data</div>
          </div>
          
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-accent-orange mb-2">
              Live
            </div>
            <div className="text-text-gray font-medium">Real-time notifications</div>
          </div>
          
          <div className="text-center">
            <div className="data-metric text-3xl font-bold text-accent-green mb-2">
              AI
            </div>
            <div className="text-text-gray font-medium">Personalized scaling</div>
          </div>
        </motion.div>

        {/* Athletic Precision Featured Step */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="feature-card text-center">
            <div className="mb-8">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-primary-white font-bold text-3xl mx-auto mb-4`}>
                {steps[activeStep].icon}
              </div>
              <div className="text-sm font-mono text-text-gray mb-2">
                STEP {steps[activeStep].number}
              </div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                {steps[activeStep].title}
              </h3>
            </div>
            
            <p className="text-xl text-text-gray leading-relaxed mb-8">
              {steps[activeStep].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps[activeStep].details.map((detail, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <div className="w-2 h-2 bg-gradient-athletic rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-text-gray">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks 