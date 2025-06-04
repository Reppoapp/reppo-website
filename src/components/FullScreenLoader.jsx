import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const FullScreenLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 600) // Wait for fade out animation to complete
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #FF3B30 0%, #2979FF 100%)'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Reppo Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">
            Reppo
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium">
            Own Your Reps. Share Your Grind.
          </p>
        </motion.div>
        
        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Pulsing Ring Loader */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="w-16 h-16 border-4 border-white/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner spinning arc */}
              <motion.div
                className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Loading text with dots */}
          <div className="flex items-center justify-center space-x-1">
            <span className="text-white/80 text-lg font-medium">Loading</span>
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="text-white/80 text-lg font-medium"
                animate={{
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                .
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Progress indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mt-8 mx-auto h-1 bg-white/30 rounded-full overflow-hidden max-w-xs"
        >
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.div>
      </div>
      
      {/* Subtle overlay animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"
        animate={{
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}

export default FullScreenLoader 