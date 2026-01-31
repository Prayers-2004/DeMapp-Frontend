"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DeMappLogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
  animated?: boolean
}

const letters = ["D", "e", "M", "a", "p", "p"]

// Characters to cycle through for morphing effect
const morphChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

export function DeMappLogo({ size = "md", className = "", animated = true }: DeMappLogoProps) {
  const [displayLetters, setDisplayLetters] = useState<string[]>(letters)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const sizeClasses = {
    sm: "text-2xl md:text-3xl gap-1",
    md: "text-4xl md:text-5xl gap-1.5",
    lg: "text-6xl md:text-8xl gap-2"
  }

  const cardSizes = {
    sm: "w-8 h-10 md:w-10 md:h-12",
    md: "w-12 h-14 md:w-14 md:h-16",
    lg: "w-16 h-20 md:w-20 md:h-24"
  }

  useEffect(() => {
    if (!animated) return

    const triggerMorph = () => {
      setIsAnimating(true)
      let iteration = 0
      const maxIterations = 15

      intervalRef.current = setInterval(() => {
        setDisplayLetters(prev => 
          prev.map((_, index) => {
            // Progressively reveal correct letters
            if (iteration > index * 2) {
              return letters[index]
            }
            return morphChars[Math.floor(Math.random() * morphChars.length)]
          })
        )

        iteration++
        if (iteration > maxIterations) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setDisplayLetters(letters)
          setIsAnimating(false)
        }
      }, 50)
    }

    // Initial animation
    const initialDelay = setTimeout(triggerMorph, 500)

    // Repeat animation every 5 seconds
    const repeatInterval = setInterval(triggerMorph, 5000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(repeatInterval)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [animated])

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      {displayLetters.map((letter, index) => (
        <motion.div
          key={index}
          className={`relative ${cardSizes[size]} bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden shadow-lg`}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 200
          }}
        >
          {/* Split line effect */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-800 z-10" />
          
          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {/* Letter */}
          <AnimatePresence mode="wait">
            <motion.span
              key={letter}
              className="font-[var(--font-bebas)] text-orange-500 relative z-0 select-none"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.05 }}
              style={{
                textShadow: "0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)"
              }}
            >
              {letter}
            </motion.span>
          </AnimatePresence>

          {/* Corner accents */}
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-orange-500/30" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-orange-500/30" />
        </motion.div>
      ))}
    </div>
  )
}

// Inline version for use in text
export function DeMappLogoInline({ className = "" }: { className?: string }) {
  const [displayLetters, setDisplayLetters] = useState<string[]>(letters)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const triggerMorph = () => {
      let iteration = 0
      const maxIterations = 12

      intervalRef.current = setInterval(() => {
        setDisplayLetters(prev => 
          prev.map((_, index) => {
            if (iteration > index * 2) {
              return letters[index]
            }
            return morphChars[Math.floor(Math.random() * morphChars.length)]
          })
        )

        iteration++
        if (iteration > maxIterations) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setDisplayLetters(letters)
        }
      }, 40)
    }

    const initialDelay = setTimeout(triggerMorph, 300)
    const repeatInterval = setInterval(triggerMorph, 6000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(repeatInterval)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <span className={`inline-flex font-mono text-orange-500 font-bold ${className}`}>
      {displayLetters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

// Static version for non-animated contexts
export function DeMappLogoStatic({ size = "md", className = "" }: Omit<DeMappLogoProps, "animated">) {
  const sizeClasses = {
    sm: "text-xl md:text-2xl gap-0.5",
    md: "text-3xl md:text-4xl gap-1",
    lg: "text-5xl md:text-6xl gap-1.5"
  }

  const cardSizes = {
    sm: "w-6 h-8 md:w-8 md:h-10",
    md: "w-10 h-12 md:w-12 md:h-14",
    lg: "w-14 h-16 md:w-16 md:h-20"
  }

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      {letters.map((letter, index) => (
        <div
          key={index}
          className={`relative ${cardSizes[size]} bg-gray-900 rounded-md flex items-center justify-center overflow-hidden shadow-md`}
        >
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-800" />
          <span 
            className="font-[var(--font-bebas)] text-orange-500"
            style={{
              textShadow: "0 0 15px rgba(249, 115, 22, 0.4)"
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  )
}

export default DeMappLogo
