import React from 'react'
import { motion } from 'framer-motion'

const TrustSignals = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const pressMentions = [
    {
      logo: "📱",
      publication: "TechCrunch",
      headline: "Reppo's AI-Powered Fitness Competition Changes How Athletes Train",
      quote: "The most innovative approach to personal fitness competition we've seen in years.",
      date: "December 2024",
      link: "#"
    },
    {
      logo: "🏆",
      publication: "Forbes",
      headline: "The Future of Fitness: AI-Driven Personal Competition",
      quote: "Reppo is revolutionizing how performance athletes approach daily training.",
      date: "November 2024",
      link: "#"
    },
    {
      logo: "⭐",
      publication: "Product Hunt",
      headline: "#1 Product of the Day",
      quote: "Makers Choice Award for most innovative fitness technology platform.",
      date: "October 2024",
      link: "#"
    },
    {
      logo: "🎯",
      publication: "Fitness Weekly",
      headline: "Game-Changing Technology for Elite Athletes",
      quote: "The AI challenge system is unlike anything we've tested before.",
      date: "September 2024",
      link: "#"
    }
  ]

  const securityBadges = [
    {
      icon: "🔒",
      title: "SSL Encrypted",
      description: "256-bit encryption protects all data transmission",
      verified: true
    },
    {
      icon: "🛡️",
      title: "SOC 2 Compliant",
      description: "Independently audited security controls",
      verified: true
    },
    {
      icon: "🔐",
      title: "GDPR Compliant",
      description: "Full compliance with European privacy regulations",
      verified: true
    },
    {
      icon: "⚡",
      title: "99.9% Uptime",
      description: "Enterprise-grade infrastructure reliability",
      verified: true
    }
  ]

  const athleteCredentials = [
    {
      name: "Sarah Chen",
      sport: "Olympic Weightlifting",
      achievement: "2x National Champion",
      avatar: "SC",
      avatarColor: "from-gold-400 to-yellow-600",
      testimonial: "The AI challenges have transformed my training intensity. I'm hitting PRs consistently.",
      verified: true
    },
    {
      name: "Marcus Rodriguez",
      sport: "Marathon Running",
      achievement: "Boston Qualifier",
      avatar: "MR",
      avatarColor: "from-blue-400 to-indigo-600",
      testimonial: "Never been more motivated to train. The daily battles keep me accountable.",
      verified: true
    },
    {
      name: "Emma Williams",
      sport: "CrossFit",
      achievement: "Regional Competitor",
      avatar: "EW",
      avatarColor: "from-pink-400 to-rose-600",
      testimonial: "Game-changing technology. My consistency has improved dramatically.",
      verified: true
    }
  ]

  const stats = [
    { number: "47,000+", label: "Performance Athletes", icon: "👥", color: "text-blue-400" },
    { number: "2.3M+", label: "Daily Check-ins", icon: "📊", color: "text-green-400" },
    { number: "127", label: "Avg Streak Days", icon: "🔥", color: "text-orange-400" },
    { number: "94%", label: "Success Rate", icon: "🎯", color: "text-purple-400" }
  ]

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-green-400 text-sm">🏆</span>
            <span className="text-white text-sm font-semibold">TRUSTED BY ELITE ATHLETES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 leading-tight px-2">
            Backed by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-2 font-medium">
            Recognized by top publications and trusted by{' '}
            <span className="text-text-primary font-bold">performance athletes worldwide</span>{' '}
            for delivering real results.
          </p>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 shadow-lg"
              style={{
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              <div className={`text-3xl mb-3 ${stat.color}`}>{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-black text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Press Mentions */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
            }
          }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Featured In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pressMentions.map((mention, index) => (
              <motion.a
                key={index}
                href={mention.link}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-lg group"
                style={{
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{mention.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-white">{mention.publication}</h4>
                      <span className="text-xs text-gray-400">{mention.date}</span>
                    </div>
                    <h5 className="text-sm font-semibold text-gray-200 mb-2 group-hover:text-primary transition-colors">
                      {mention.headline}
                    </h5>
                    <p className="text-sm text-gray-300 italic">
                      "{mention.quote}"
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance */}
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
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Enterprise-Grade Security
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-[20px] border border-green-400/20 rounded-2xl p-6 text-center shadow-lg"
                style={{
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <div className="text-3xl mb-3">{badge.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h4 className="font-bold text-white text-sm">{badge.title}</h4>
                  {badge.verified && (
                    <span className="text-green-400 text-xs">✓</span>
                  )}
                </div>
                <p className="text-xs text-gray-300">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Athlete Testimonials */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
            }
          }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Verified Elite Athletes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {athleteCredentials.map((athlete, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-lg"
                style={{
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${athlete.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {athlete.avatar}
                    </div>
                    {athlete.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{athlete.name}</h4>
                    <p className="text-sm text-gray-300">{athlete.sport}</p>
                    <p className="text-xs text-primary font-semibold">{athlete.achievement}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 italic">
                  "{athlete.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Trust CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            ...fadeInUp,
            animate: {
              ...fadeInUp.animate,
              transition: { duration: 0.6, delay: 0.5, ease: "easeOut" }
            }
          }}
          className="text-center pt-8 border-t border-white/10"
        >
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary mb-6 leading-tight">
              Join the <span className="text-gradient">Trusted Community</span>
            </h3>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Backed by industry leaders, trusted by elite athletes, and{' '}
              <span className="text-gradient font-bold">secured with enterprise-grade protection</span>.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-lg font-black text-gradient mb-1">Industry Recognition</div>
                <div className="text-sm text-gray-300">Featured in top publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-lg font-black text-gradient mb-1">Enterprise Security</div>
                <div className="text-sm text-gray-300">Bank-level protection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-lg font-black text-gradient mb-1">Elite Athletes</div>
                <div className="text-sm text-gray-300">Verified performance users</div>
              </div>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 59, 48, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/join'}
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-2xl transition-all duration-300 text-lg sm:text-xl hover:shadow-primary/40 group"
            >
              <span>Join Trusted Athletes</span>
              <motion.span 
                className="ml-3 text-2xl"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </motion.button>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Industry trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🔒</span>
                <span>Secure platform</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">👑</span>
                <span>Elite community</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default TrustSignals 