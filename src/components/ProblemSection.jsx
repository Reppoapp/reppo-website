import React from 'react'
import { motion } from 'framer-motion'

const ProblemCard = ({ title, problem, solution, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover"
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4 gradient-text">{title}</h3>
      <div className="space-y-4">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 sm:p-4">
          <p className="text-red-300 text-sm font-medium mb-2">❌ The Problem</p>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{problem}</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 sm:p-4">
          <p className="text-green-300 text-sm font-medium mb-2">✅ With Reppo</p>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{solution}</p>
        </div>
      </div>
    </motion.div>
  )
}

const ProblemSection = () => {
  const problems = [
    {
      title: "Tracking apps don't hype you up.",
      problem: "You log your workout and it disappears.",
      solution: "Every session adds to your streak, your level, and your legacy."
    },
    {
      title: "Social media's not made for athletes.",
      problem: "Your PRs get buried under memes and meal pics.",
      solution: "Join communities built around what you do — and get the credit you've earned."
    },
    {
      title: "Your progress deserves to be seen.",
      problem: "Streaks and big wins vanish without recognition.",
      solution: "Track your grind. Earn badges. Inspire the next one in your lane."
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card-bg via-background to-card-bg relative">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-card-bg via-card-bg/70 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Your Progress Deserves a{' '}
            <span className="gradient-text">Platform — Not a Scroll Past.</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-4 sm:px-0">
            Most fitness apps treat your work like data. Reppo turns every win into something worth showing off — and sharing with your people.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              {...problem}
              delay={index}
            />
          ))}
        </div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-card-bg/50 to-card-bg pointer-events-none"></div>
    </section>
  )
}

export default ProblemSection 