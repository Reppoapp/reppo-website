import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-text-primary group-hover:text-gradient transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

const FeatureGrid = () => {
  const features = [
    {
      title: "Verified Athlete Badges",
      description: "Earn exclusive badges that prove your consistency and dedication. Each badge represents real achievements that can't be faked or bought – only earned through verified daily action.",
      icon: "🏆"
    },
    {
      title: "Elite Community Access",
      description: "Connect with verified athletes who understand the grind. Share your journey with people who actually care about your progress and hold you accountable to your goals.",
      icon: "👥"
    },
    {
      title: "Member-Only Merch Drops",
      description: "Unlock exclusive merchandise and gear that's only available to verified Reppo athletes. Wear your status and show the world you're part of something special.",
      icon: "👕"
    },
    {
      title: "Streak-Based Rewards",
      description: "Your consistency pays off with tangible rewards. The longer your streak, the more exclusive perks you unlock – from VIP experiences to early access features.",
      icon: "🔥"
    },
    {
      title: "Status-Driven Leaderboards",
      description: "Compete with athletes in your tier and climb the ranks. Your position reflects real dedication, not just one-time achievements. Consistency is king.",
      icon: "📊"
    },
    {
      title: "Founder's Circle Access",
      description: "Early members get lifetime access to the Founder's Circle – exclusive events, direct access to the team, and first dibs on all new features and partnerships.",
      icon: "💎"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements for smooth flow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Original compelling copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-text-primary leading-tight">
            Features That Actually{' '}
            <span className="text-gradient">Matter</span>
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Forget generic fitness tracking. Reppo rewards the behaviors that separate{' '}
            <span className="text-text-primary font-semibold">dedicated athletes from casual users.</span>
          </p>
        </motion.div>

        {/* Features Grid - Original 6 features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index}
            />
          ))}
        </div>

        {/* Call-to-Action Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready to see what <span className="text-gradient font-semibold">elite fitness tracking</span> looks like?
          </p>
        </motion.div>
        
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default FeatureGrid 