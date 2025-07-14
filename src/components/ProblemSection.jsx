import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeProblem, setActiveProblem] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  // Auto-cycle through problems
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveProblem(prev => (prev + 1) % problems.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  const problems = [
    {
      icon: "🎭",
      title: "Fake Fitness Programs",
      description: "Most fitness influencers sell you programs they don't actually follow. You're training with marketing content, not real athlete workouts.",
      pain: "You're following fake programs designed to sell, not to train",
      solution: "Train with verified athletes using their actual workout data from Garmin and Apple Watch devices",
      color: "from-accent-orange to-primary-blue"
    },
    {
      icon: "❓",
      title: "No Proof They Follow Their Own Advice",
      description: "Fitness influencers post workout videos but never prove they actually do the programs they sell. You have no idea if it's authentic.",
      pain: "Zero transparency about what athletes actually do",
      solution: "Live workout data from verified athletes' devices shows exactly what they're doing, when they're doing it",
      color: "from-primary-blue to-accent-green"
    },
    {
      icon: "📱",
      title: "Static Content That Doesn't Adapt",
      description: "Generic workout plans that don't adjust to your fitness level, available equipment, or time constraints. One-size-fits-all doesn't work.",
      pain: "Cookie-cutter programs that ignore your individual needs",
      solution: "AI personalizes every athlete workout to your exact fitness level, equipment, and schedule",
      color: "from-accent-green to-accent-orange"
    }
  ]

  const ProblemCard = ({ problem, index, isActive, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onClick}
      className={`feature-card cursor-pointer transition-all duration-300 ${
        isActive ? 'border-accent-orange/50 shadow-orange-glow' : 'hover:border-accent-orange/30'
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${problem.color} flex items-center justify-center text-primary-white font-bold text-2xl`}>
          {problem.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary-navy">{problem.title}</h3>
        </div>
      </div>
      
      <p className="text-text-gray leading-relaxed mb-6">
        {problem.description}
      </p>
      
      <div className="space-y-4">
        <div className="bg-accent-orange/10 border border-accent-orange/20 rounded-athletic p-4">
          <div className="flex items-start gap-3">
            <span className="text-accent-orange text-lg">⚠️</span>
            <div>
              <div className="font-semibold text-accent-orange text-sm mb-1">THE PROBLEM</div>
              <div className="text-sm text-primary-navy">{problem.pain}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-accent-green/10 border border-accent-green/20 rounded-athletic p-4">
          <div className="flex items-start gap-3">
            <span className="text-accent-green text-lg">✅</span>
            <div>
              <div className="font-semibold text-accent-green text-sm mb-1">OUR SOLUTION</div>
              <div className="text-sm text-primary-navy">{problem.solution}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section ref={ref} className="py-20 bg-neutral-gray relative overflow-hidden">
      {/* Athletic Precision background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-orange/5 via-transparent to-primary-blue/5"></div>
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 bg-accent-orange/20 text-accent-orange px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-accent-orange/30"
          >
            <span className="text-accent-orange">🚫</span>
            <span>The Problem with Fitness</span>
          </motion.div>
          
          <h2 className="section-header text-center mb-6">
            Stop Settling for Fake Fitness Programs
          </h2>
          
          <p className="section-description text-center max-w-3xl mx-auto">
            The fitness industry is full of fake programs and unverified content. 
            It's time to train with verified athletes using their actual workout data.
          </p>
        </motion.div>

        {/* Athletic Precision Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProblemCard
                problem={problem}
                index={index}
                isActive={activeProblem === index}
                onClick={() => setActiveProblem(index)}
              />
            </motion.div>
          ))}
        </div>

        {/* Athletic Precision Featured Problem */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="feature-card text-center">
            <div className="mb-8">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${problems[activeProblem].color} flex items-center justify-center text-primary-white font-bold text-3xl mx-auto mb-4`}>
                {problems[activeProblem].icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                {problems[activeProblem].title}
              </h3>
            </div>
            
            <p className="text-xl text-text-gray leading-relaxed mb-8">
              {problems[activeProblem].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent-orange/10 border border-accent-orange/20 rounded-athletic p-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent-orange text-2xl">⚠️</span>
                  <div className="text-left">
                    <div className="font-semibold text-accent-orange mb-2">THE PROBLEM</div>
                    <div className="text-primary-navy">{problems[activeProblem].pain}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent-green/10 border border-accent-green/20 rounded-athletic p-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent-green text-2xl">✅</span>
                  <div className="text-left">
                    <div className="font-semibold text-accent-green mb-2">OUR SOLUTION</div>
                    <div className="text-primary-navy">{problems[activeProblem].solution}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Athletic Precision CTA */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="feature-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-navy mb-4">
              Ready for Authentic Training?
            </h3>
            <p className="text-text-gray mb-8">
              Join thousands of athletes who've made the switch from fake fitness programs 
              to authentic training with verified elite athletes.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/join'}
              className="btn-primary bg-gradient-athletic text-primary-white font-bold px-8 py-4 rounded-athletic shadow-blue-glow transition-all duration-300 text-lg"
            >
              <span>Train with Your Favorites</span>
              <span className="ml-2">🚀</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection 