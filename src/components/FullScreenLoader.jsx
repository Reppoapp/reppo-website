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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-card-bg/40 via-background to-card-bg/30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255,59,48,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(41,121,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(255,59,48,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(41,121,255,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating hexagons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
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
              className="w-6 h-6 border-2 rotate-45"
              style={{
                borderColor: i % 2 === 0 ? '#FF3B30' : '#2979FF',
                opacity: 0.4
              }}
            />
          </motion.div>
        ))}

        {/* Pulsing circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${70 + (i * 5)}%`,
              top: `${30 + (i * 12)}%`,
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#FF3B30' : '#2979FF'}20, transparent)`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo with enhanced animation */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6 relative">
            {/* Glowing ring around logo */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #FF3B30, #2979FF, #FF3B30)',
                padding: '3px',
                filter: 'blur(8px)',
                opacity: 0.6
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.img 
              src="/Reppo-Logo.png" 
              alt="Reppo Logo" 
              className="h-20 sm:h-24 md:h-28 w-auto relative z-10 logo-gradient"
              animate={{
                filter: [
                  'brightness(1) contrast(1)',
                  'brightness(1.2) contrast(1.1)',
                  'brightness(1) contrast(1)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
                     {/* Static slogan */}
           <div className="h-16 flex items-center justify-center">
             <motion.p
               initial={{ opacity: 0, y: 20, scale: 0.9 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
               className="text-lg sm:text-xl md:text-2xl text-text-secondary font-semibold bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent"
             >
               Your Only Competition is Yesterday
             </motion.p>
           </div>
        </motion.div>
        
        {/* Advanced loading animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          {/* Multi-ring loader */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="w-20 h-20 border-4 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-2 w-16 h-16 border-4 border-transparent border-t-secondary border-r-secondary rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner ring */}
              <motion.div
                className="absolute inset-4 w-12 h-12 border-4 border-transparent border-t-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 bg-gradient-primary rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Loading text with enhanced animation */}
          <div className="flex items-center justify-center space-x-1">
            <motion.span 
              className="text-text-primary text-lg font-semibold"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Initializing
            </motion.span>
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="text-primary text-xl font-bold"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                .
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced progress bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 mx-auto max-w-sm"
        >
          <div className="relative">
            {/* Progress bar background */}
            <div className="h-2 bg-card-bg/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full relative"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            
            {/* Progress percentage */}
            <motion.div
              className="text-center mt-3"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm text-text-secondary font-medium">
                {Math.round(Math.min(loadingProgress, 100))}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Dynamic overlay effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(255,59,48,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 70%, rgba(41,121,255,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(255,59,48,0.03) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}

export default FullScreenLoader 