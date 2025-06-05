import React from 'react'
import { motion } from 'framer-motion'

const MilestoneCard = ({ quarter, title, description, icon, index, totalItems, delay = 0 }) => {
  const isLast = index === totalItems - 1
  
  return (
    <div className="relative flex-1 min-w-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delay * 0.05 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative group"
      >
        {/* Horizontal connecting line */}
        {!isLast && (
          <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/30 z-0"></div>
        )}
        
        {/* Timeline dot with icon */}
        <div className="relative flex justify-center mb-4 sm:mb-6">
          <div className="relative">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
              {icon}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-lg scale-150 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Content card */}
        <motion.div 
          whileHover={{ scale: 1.03, y: -6 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
        >
          <div className="mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {quarter}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

const RoadmapSection = () => {
  const milestones = [
    {
      quarter: "Q3 2025",
      title: "Reppo Launch (iOS)",
      description: "Daily logging, streak tracking, and profile badges go live. Reppo officially hits the App Store.",
      icon: "🚀"
    },
    {
      quarter: "Q4 2025", 
      title: "Community Feed + Positive Reactions",
      description: "Celebrate your people. Hype posts, react with custom emojis, and post your daily grind in the no-noise Reppo feed.",
      icon: "💬"
    },
    {
      quarter: "Q1 2026",
      title: "Group Challenges & Teams",
      description: "Squad up. Join team fitness battles, compete for leaderboard glory, and earn exclusive team-based streak rewards.",
      icon: "🏆"
    },
    {
      quarter: "Q2 2026",
      title: "Badge-Gated Merch Drops",
      description: "Earn it, then wear it. Unlock exclusive merch tied to your achievements — like a Marathon Finisher hoodie or a 315 Bench Club shirt.",
      icon: "👕"
    },
    {
      quarter: "Q3 2026",
      title: "Pro Mode + Athlete Analytics",
      description: "Advanced stats, macros, recovery insights, and training tools. Built for hybrid athletes chasing elite results.",
      icon: "📊"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-background">
      {/* Seamless Gradient Transition from Previous Section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-gray-800 via-gray-800/70 to-transparent pointer-events-none"></div>
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-900 to-background/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/5 w-48 h-48 bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-4 sm:px-0">
            What's Next for{' '}
            <span className="gradient-text">Reppo: Progress, Community, and Exclusive Rewards</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Every update unlocks a new way to rep your identity — from daily streaks to badge-only merch. Here's what's coming.
          </p>
        </motion.div>
        
        {/* Horizontal Timeline - Mobile Optimized */}
        <div className="relative">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:flex gap-8 relative">
            {milestones.map((milestone, index) => (
              <MilestoneCard
                key={index}
                {...milestone}
                index={index}
                totalItems={milestones.length}
                delay={index}
              />
            ))}
          </div>
          
          {/* Mobile: Vertical Stack - Enhanced */}
          <div className="lg:hidden space-y-6 sm:space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Mobile vertical connecting line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-5 sm:left-6 top-12 sm:top-16 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary/50 to-accent/30"></div>
                )}
                
                <div className="flex items-start space-x-4 sm:space-x-6 group px-4 sm:px-0">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {milestone.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-lg scale-150 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content card */}
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="mb-3">
                      <span className="text-xs sm:text-sm font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {milestone.quarter}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12 sm:mt-16 px-4 sm:px-0"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg backdrop-blur-sm p-6 sm:p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              Reppo isn't just where you track your grind — it's where your grind gets{' '}
              <span className="gradient-text font-semibold">noticed, rewarded, and repped.</span>{' '}
              Join now for early access and milestone-based drops.
            </p>
            <button 
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gradient-to-r from-[#FF3B30] to-[#2979FF] text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-md hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-base sm:text-lg min-h-[48px]"
            >
              Join for Early Access & Exclusive Drops
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Seamless Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-background pointer-events-none"></div>
    </section>
  )
}

export default RoadmapSection 