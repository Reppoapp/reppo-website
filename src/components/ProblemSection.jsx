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
      title: "Your PRs disappear into the void.",
      problem: "Hit a new bench max? Log it and... crickets. Your biggest wins get buried in apps that treat achievements like data points.",
      solution: "Every PR, every streak, every grind session earns you badges, levels, and recognition that actually matters."
    },
    {
      title: "Social media doesn't get athletes.",
      problem: "Instagram buries your gym session under influencer ads. TikTok wants you dancing, not deadlifting. You're invisible.",
      solution: "Join communities built for YOUR identity. Powerlifters with powerlifters. Runners with runners. Where your grind gets the hype it deserves."
    },
    {
      title: "No one sees the work you put in.",
      problem: "47-day streak? Personal record? Marathon finish? The people who matter most never see the work that defines you.",
      solution: "Earn exclusive badges, unlock member-only merch, and build a profile that proves you've earned your place."
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
            Your Work Deserves More Than{' '}
            <span className="gradient-text">Being Ignored.</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-4 sm:px-0">
            Every rep you grind. Every streak you build. Every PR you crush. Right now, it's invisible to the people who would actually appreciate it. <span className="gradient-text font-semibold">That changes today.</span>
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