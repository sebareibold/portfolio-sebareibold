"use client"

import type React from "react"
import type { JSX } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  el?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
  delay?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "custom-text-hero",
  once = false,
  delay = 0,
}) => {
  // Animation variants for the container
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay * i,
      },
    }),
  }

  // Nueva animación con efecto de rebote y deslizamiento
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: Math.random() > 0.5 ? 50 : -50, // Aparece desde arriba o abajo aleatoriamente
      scale: Math.random() * 0.5 + 0.5, // Escala aleatoria entre 0.5 y 1
      rotate: Math.random() * 30 * (Math.random() > 0.5 ? 1 : -1), // Rotación aleatoria
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      style={{
        overflow: "visible",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className={className}
          style={{
            display: "inline-block",
            transformOrigin: "center center",
            position: "relative",
          }}
          whileHover={{
            scale: 1.2,
            rotate: Math.random() > 0.5 ? 5 : -5,
            color: ["#ffffff", "#00ffff", "#ff00ff", "#ffff00", "#ffffff"],
            textShadow: [
              "0 0 5px rgba(255,255,255,0.3)",
              "0 0 5px #00ffff",
              "0 0 5px #ff00ff",
              "0 0 5px #ffff00",
              "0 0 5px #ffffff",
            ],
            transition: {
              duration: 0.4,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
