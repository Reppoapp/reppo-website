import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FullScreenLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Simulate loading progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(progressInterval)
  }, [])

  // Complete loading after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800) // Wait for fade out animation
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-navy overflow-hidden"
    >
      {/* Athletic Precision gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0,212,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255,107,53,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(0,212,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(255,107,53,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Athletic Precision geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating athletic data points */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`data-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          >
            <div 
              className="w-6 h-6 border-2 rotate-45 rounded-athletic"
              style={{
                borderColor: i % 2 === 0 ? '#00d4ff' : '#ff6b35',
                opacity: 0.4
              }}
            />
          </motion.div>
        ))}

        {/* Athletic performance circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${70 + (i * 5)}%`,
              top: `${30 + (i * 12)}%`,
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#00d4ff' : '#ff6b35'}20, transparent)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-8">
        {/* Athletic Precision logo with enhanced glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-12"
        >
          {/* Glowing ring around logo */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #00d4ff, #ff6b35, #00e676, #00d4ff)',
              padding: '4px',
              filter: 'blur(8px)',
              opacity: 0.6
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-full h-full rounded-full bg-primary-navy" />
          </motion.div>

          {/* Logo container */}
          <motion.div
            className="relative bg-primary-white rounded-full p-8 shadow-athletic-xl"
            animate={{
              boxShadow: [
                '0 0 40px rgba(0, 212, 255, 0.3)',
                '0 0 60px rgba(255, 107, 53, 0.3)',
                '0 0 40px rgba(0, 212, 255, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src="/Reppo-Logo.png" 
              alt="Reppo" 
              className="w-24 h-24 mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Athletic Precision slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
            Train <span className="text-gradient">WITH</span> Your Favorites
          </h1>
          <p className="text-lg text-primary-white/80 font-medium">
            Authentic athlete data • AI personalization • Live training
          </p>
        </motion.div>

        {/* Athletic Precision progress bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="bg-primary-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-athletic rounded-full relative"
              style={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-primary-white/60 font-mono">
              Loading athlete data...
            </span>
            <span className="text-sm text-primary-white/60 font-mono">
              {Math.round(loadingProgress)}%
            </span>
          </div>
        </motion.div>

        {/* Athletic Precision loading indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex justify-center items-center gap-6"
        >
          {/* Multi-ring loader */}
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 rounded-full"
                style={{
                  width: `${24 + i * 8}px`,
                  height: `${24 + i * 8}px`,
                  borderColor: i === 0 ? '#00d4ff' : i === 1 ? '#ff6b35' : '#00e676',
                  borderTopColor: 'transparent',
                  left: `${-4 * i}px`,
                  top: `${-4 * i}px`
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2 - (i * 0.3),
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Athletic data points */}
          <div className="flex gap-2">
            {['📊', '⚡', '🏃‍♂️'].map((emoji, i) => (
              <motion.div
                key={i}
                className="text-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Athletic Precision loading messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="mt-8"
        >
          <motion.p
            className="text-sm text-primary-white/60 font-medium"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Connecting to elite athletes...
          </motion.p>
        </motion.div>
      </div>

      {/* Athletic Precision overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(0,212,255,0.05), transparent, rgba(255,107,53,0.05), transparent)',
            backgroundSize: '400% 400%'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Subtle backdrop blur */}
        <div className="absolute inset-0 backdrop-blur-[0.5px] bg-primary-navy/5" />
      </div>
    </motion.div>
  )
}

export default FullScreenLoader 