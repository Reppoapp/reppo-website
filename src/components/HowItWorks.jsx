import React from 'react'
import { motion } from 'framer-motion'
import InlineCTA from './InlineCTA'

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
      title: "Complete Your First Workout",
      description: "Track any exercise and our AI analyzes your performance to create your personalized challenge benchmark for tomorrow.",
      icon: "📊"
    },
    {
      number: "02", 
      title: "Face Tomorrow's Challenge",
      description: "Each day, compete against an AI-enhanced version of yesterday's performance. Win and the challenge evolves. Lose and train for revenge.",
      icon: "⚔️"
    },
    {
      number: "03",
      title: "Challenge Others & Legends",
      description: "Compete against AI recreations of other users' best performances and even challenge celebrity athlete benchmarks.",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
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
            How <span className="text-gradient">Self-Competition Works</span>
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Three simple steps to start{' '}
            <span className="text-text-primary font-semibold">competing against yourself</span>{' '}
            and unlock the most advanced AI-powered fitness challenges.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
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
                  transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" }
                }
              }}
              className="relative"
            >
              {/* Step Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-6xl font-black text-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    {step.number}
                  </div>
                </div>
                
                {/* Step Content */}
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-primary/30 to-secondary/30 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <InlineCTA
            title="Start Outperforming Yesterday Today"
            description="Simple to start, impossible to fake. Your AI challenges evolve with every workout."
            buttonText="Begin My Journey"
            size="medium"
            className="max-w-2xl mx-auto"
          />
        </div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default HowItWorks 