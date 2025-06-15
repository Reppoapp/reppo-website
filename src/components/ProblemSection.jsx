import React from 'react'
import { motion } from 'framer-motion'

const BenefitCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center p-8"
    >
      <div className="text-5xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

const ProblemSection = () => {
  const benefits = [
    {
      title: "Open, tap, go.",
      description: "Recording an activity with Reppo is easy, and afterward you'll have a detailed activity map and tons of performance data.",
      icon: "📱"
    },
    {
      title: "A no BS network.",
      description: "The Reppo feed is full of inspiring activities, crazy adventures and interesting new routes – all the best athletic content, none of the junk posts you find on other social networks.",
      icon: "🚫"
    },
    {
      title: "The ultimate athlete resource.",
      description: "A running club in your neighborhood, content from your favorite fitness brand, the best trail to catch the sunset, a fun new race, the city's toughest climb, a weekend training partner - whatever your next adventure, you'll find it on Reppo.",
      icon: "🏃‍♂️"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white">
            Join for the tracking, stay for the community.
          </h2>
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              delay={index}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default ProblemSection 