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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-card-bg/30 via-background to-card-bg/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Floating particles with brand colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? '#FF3B30' : '#2979FF',
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
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
          <div className="flex justify-center mb-6">
            <img 
              src="/Reppo-Logo.png" 
              alt="Reppo Logo" 
              className="h-24 sm:h-32 md:h-40 w-auto logo-gradient"
            />
          </div>
          <p className="text-xl sm:text-2xl text-text-secondary font-medium">
            Where Consistency Becomes Legacy.
          </p>
        </motion.div>
        
        {/* Loading Animation with brand colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Pulsing Ring Loader with brand colors */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer ring - coral color */}
              <motion.div
                className="w-16 h-16 border-4 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner spinning arc - blue color */}
              <motion.div
                className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-secondary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* Center dot with gradient */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 bg-gradient-primary rounded-full"
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
            <span className="text-text-primary text-lg font-medium">Loading</span>
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="text-text-primary text-lg font-medium"
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
        
        {/* Progress indicator with brand gradient */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mt-8 mx-auto h-1 bg-card-bg rounded-full overflow-hidden max-w-xs"
        >
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.div>
      </div>
      
      {/* Subtle overlay animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-card-bg/10 via-transparent to-primary/5"
        animate={{
          opacity: [0.3, 0.6, 0.3]
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