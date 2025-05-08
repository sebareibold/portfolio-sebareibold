import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return <section id="inicio" className="w-full h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div className="md:w-1/2" initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }}>
          <AnimatedText text="Hola, Soy Sebastian Reibold" className="text-2xl font-light" once />
          <AnimatedText text="Computer Science Student" className="text-4xl sm:text-5xl font-bold mt-2" once delay={0.2} />
          <AnimatedText text="Full Stack Developer" className="text-xl sm:text-2xl text-gray-400 mt-2" once delay={0.4} />
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }}>
            <a href="#contacto" className="inline-block mt-8 px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Descargar mi CV
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center mt-10 md:mt-0" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }}>
          <div className="w-64 h-64 rounded-full border-4 border-white overflow-hidden">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;