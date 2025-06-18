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
            Most Fitness Apps Are{' '}
            <span className="text-gradient">Broken</span>
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
                <h4 className="text-xl font-bold text-text-primary mb-3">No Recognition for Consistency</h4>
                <p className="text-text-secondary leading-relaxed">
                  You show up every day, but nobody sees it. Your 30-day streak means nothing without the right audience to witness your dedication.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-bold text-text-primary mb-3">Fake Motivation & Empty Communities</h4>
                <p className="text-text-secondary leading-relaxed">
                  Generic "great job!" comments from strangers who don't actually care about your progress. Surface-level engagement that fades fast.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-bold text-text-primary mb-3">No Exclusive Rewards</h4>
                <p className="text-text-secondary leading-relaxed">
                  Your achievements unlock... nothing. No exclusive access, no special perks, no way to show the world you're part of an elite group.
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
                <h4 className="text-xl font-bold text-text-primary mb-3">Verified Athlete Status</h4>
                <p className="text-text-secondary leading-relaxed">
                  Earn exclusive badges that prove your consistency. Your profile shows real achievements that can't be faked or bought.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <h4 className="text-xl font-bold text-text-primary mb-3">Elite Community Access</h4>
                <p className="text-text-secondary leading-relaxed">
                  Connect with verified athletes who actually understand the grind. Real conversations, real accountability, real respect.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <h4 className="text-xl font-bold text-text-primary mb-3">Member-Only Rewards</h4>
                <p className="text-text-secondary leading-relaxed">
                  Unlock exclusive merch, early access to features, and VIP experiences. Your consistency pays off with tangible rewards.
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