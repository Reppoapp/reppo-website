import React from 'react'
import { motion } from 'framer-motion'

const ProblemSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Original compelling narrative */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight">
            Most Fitness Apps Lack{' '}
            <span className="text-gradient">Real Competition</span>
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            They track your workouts but ignore what really drives you: <span className="text-text-primary font-semibold">recognition, status, and belonging to something exclusive.</span>
          </p>
        </motion.div>

        {/* Problem-Solution Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Problem Cards */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
              }
            }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">❌</span>
              The Problem
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-bold text-text-primary mb-3">No Personal Competition</h4>
                <p className="text-text-secondary leading-relaxed">
                  You track workouts but never truly compete. Where's the challenge that pushes you beyond your comfort zone every single day?
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-bold text-text-primary mb-3">Competing Against Random Strangers</h4>
                <p className="text-text-secondary leading-relaxed">
                  Leaderboards with people you'll never meet don't inspire real progress. Your best competition is the person you were yesterday.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-bold text-text-primary mb-3">No Evolution, No Real Progress</h4>
                <p className="text-text-secondary leading-relaxed">
                  Your improvements disappear into data points. You deserve to see yourself evolve and witness your transformation in real-time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution Cards */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              ...fadeInUp,
              animate: {
                ...fadeInUp.animate,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }
            }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">✅</span>
              The Reppo Way
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <h4 className="text-xl font-bold text-text-primary mb-3">AI-Powered Self Competition</h4>
                <p className="text-text-secondary leading-relaxed">
                  Advanced AI creates personalized challenges from your workout history. Every session, you compete against a smarter version of yesterday's performance.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <h4 className="text-xl font-bold text-text-primary mb-3">Progressive Challenge System</h4>
                <p className="text-text-secondary leading-relaxed">
                  Our AI learns your patterns and creates increasingly intelligent challenges. Beat yesterday's you, then face an even stronger version tomorrow.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <h4 className="text-xl font-bold text-text-primary mb-3">Victory-Based Progression</h4>
                <p className="text-text-secondary leading-relaxed">
                  Every win over your past self unlocks exclusive rewards, advanced challenges, and proves your commitment to constant evolution.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Transition Statement */}
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
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready to join a platform that actually <span className="text-gradient font-semibold">rewards your dedication</span>?
          </p>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default ProblemSection 