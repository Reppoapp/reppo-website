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
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Most Fitness Apps Lack{' '}
            <span className="text-gradient">Real Competition</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            They track your workouts but ignore what really drives you: <span className="text-text-primary font-semibold">recognition, status, and belonging to something exclusive.</span>
          </p>
        </motion.div>

        {/* Problem-Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Problem Side */}
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
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">😴</div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Generic Fitness Tracking</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Most apps just count your reps and calories. Zero personalization, zero challenge, zero reason to push harder tomorrow.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">👥</div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Competing Against Strangers</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Why compete against random people when your biggest competition is who you were yesterday? That's where real growth happens.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">📱</div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">No Real Status or Recognition</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Generic badges and meaningless streaks don't build the exclusive identity that drives elite performance athletes.
              </p>
            </div>
          </motion.div>

          {/* Solution Side */}
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
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:from-primary/15 hover:to-secondary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">🧠</div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">AI-Powered Personal Competition</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Our AI analyzes your patterns and creates intelligent challenges that push you exactly where you need to grow most.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:from-primary/15 hover:to-secondary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">⚔️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Battle Yesterday's You</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Every workout becomes a head-to-head competition against your previous self. Track wins, losses, and breakthrough moments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:from-primary/15 hover:to-secondary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">👑</div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Elite Performance Athlete Status</h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Build genuine status through consistent self-improvement victories. Join an exclusive community that recognizes real progress.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
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
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Stop settling for generic fitness tracking. <span className="text-gradient font-semibold">Your only competition is who you were yesterday.</span>
          </p>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default ProblemSection 