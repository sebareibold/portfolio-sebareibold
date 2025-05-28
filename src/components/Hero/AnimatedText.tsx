import React, { JSX } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = 'custom-text-hero',
  once = false,
  delay = 0
}) => {
  // Animation variants for the container
  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay * i
      }
    })
  };

  // Efecto de teletransportación cuántica
  const child = {
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      x: 0,
      y: 0,
      filter: 'blur(0px) hue-rotate(0deg)',
      boxShadow: '0 0 0px rgba(0,255,255,0)',
      textShadow: '0 0 5px rgba(255,255,255,0.3)',
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 150,
        duration: 1.2,
        filter: {
          duration: 1.5,
          ease: 'easeOut'
        }
      }
    },
    hidden: {
      opacity: 0,
      scale: [0, 3, 0.5, 2, 0.8, 1.5, 0], // Múltiples escalas para simular partículas
      rotateZ: 720, // Dos rotaciones completas
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
      filter: 'blur(20px) hue-rotate(180deg)',
      boxShadow: '0 0 50px rgba(0,255,255,0.8)',
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 150,
        scale: {
          duration: 1.5,
          times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1]
        }
      }
    }
  };

  return (
    <motion.div 
      style={{
        overflow: 'visible',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
      }} 
      variants={container} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once }}
    >
      {text.split('').map((char, index) => (
        <motion.span 
          key={index} 
          variants={child} 
          className={className}
          style={{
            display: 'inline-block',
            transformOrigin: 'center center',
            position: 'relative'
          }}
          whileHover={{
            color: ['#ffffff', '#00ffff', '#ff00ff', '#ffff00', '#ffffff'],
            textShadow: [
              '0 0 5px rgba(255,255,255,0.3)',
              '0 0 5px #00ffff',
              '0 0 5px #ff00ff', 
              '0 0 5px #ffff00',
              '0 0 5px #ffffff'
            ],
            transition: { 
              duration: 0.8,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: 'easeInOut'
            }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;