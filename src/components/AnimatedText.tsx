import React, {  JSX } from 'react';
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
  className = '',
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
        staggerChildren: 0.03,
        delayChildren: delay * i
      }
    })
  };
  // Animation variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };
  return <motion.div style={{
    overflow: 'hidden',
    display: 'flex'
  }} variants={container} initial="hidden" whileInView="visible" viewport={{
    once
  }}>
      {text.split('').map((char, index) => <motion.span key={index} variants={child} className={className}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>)}
    </motion.div>;
};
export default AnimatedText;