import React from 'react'
import { motion } from 'framer-motion'

const ProblemCard = ({ title, problem, solution, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 card-hover"
    >
      <h3 className="text-xl font-bold mb-4 gradient-text">{title}</h3>
      <div className="space-y-4">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <p className="text-red-300 text-sm font-medium mb-2">❌ The Problem</p>
          <p className="text-gray-300">{problem}</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <p className="text-green-300 text-sm font-medium mb-2">✅ With Reppo</p>
          <p className="text-gray-300">{solution}</p>
        </div>
      </div>
    </motion.div>
  )
}

const ProblemSection = () => {
  const problems = [
    {
      title: "Tracking apps are boring",
      problem: "Where's the hype? Where's the community?",
      solution: "Every rep becomes a story worth sharing with your fitness community."
    },
    {
      title: "Social media isn't built for lifters",
      problem: "Your posts get lost in the noise.",
      solution: "A dedicated space where your PRs and progress get the attention they deserve."
    },
    {
      title: "Your progress needs a home",
      problem: "Streaks, PRs, and wins deserve to be seen.",
      solution: "Build your fitness legacy and inspire others on their journey."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 via-background to-gray-900 relative">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your PRs deserve more than{' '}
            <span className="gradient-text">buried gym notes.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional fitness apps treat your achievements like data points. 
            We treat them like victories worth celebrating.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              {...problem}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-800 pointer-events-none"></div>
    </section>
  )
}

export default ProblemSection 