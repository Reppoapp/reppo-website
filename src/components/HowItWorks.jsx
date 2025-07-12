import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const steps = [
    {
      number: "01",
      title: "Connect Your Fitness Data",
      description: "Link your existing fitness apps or input your workout history. Our AI analyzes your patterns, strengths, and improvement areas.",
      icon: "📊",
      color: "from-primary to-secondary"
    },
    {
      number: "02", 
      title: "AI Creates Your Daily Challenge",
      description: "Every morning, receive a personalized challenge designed to push you exactly where you need to grow most. Beat yesterday's you.",
      icon: "🧠",
      color: "from-secondary to-primary"
    },
    {
      number: "03",
      title: "Compete and Evolve",
      description: "Complete your challenge, track your victory, and unlock your next level. Watch yourself evolve from competitor to champion.",
      icon: "🏆",
      color: "from-primary to-secondary"
    }
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
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
            How <span className="text-gradient">AI Competition</span> Works
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Three simple steps to transform your fitness journey into{' '}
            <span className="text-text-primary font-semibold">intelligent self-competition</span>
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                ...fadeInUp,
                animate: {
                  ...fadeInUp.animate,
                  transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" }
                }
              }}
              className="relative"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-lg`}>
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{step.icon}</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 transform translate-x-4"></div>
              )}
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
              transition: { duration: 0.6, delay: 0.8, ease: "easeOut" }
            }
          }}
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Ready to start competing against <span className="text-gradient font-semibold">the only opponent that matters</span>?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-primary text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm sm:text-base lg:text-lg min-h-[48px] w-full sm:w-auto max-w-sm mx-auto"
          >
            Join the Elite Competition
          </motion.button>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default HowItWorks 