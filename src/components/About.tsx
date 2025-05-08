import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const About = () => {
  return <section id="sobre-mi" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div className="mb-12 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mi</h2>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/3" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="w-full max-w-xs mx-auto aspect-square rounded-full border-4 border-white overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div className="md:w-2/3" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                Soy un desarrollador Full Stack apasionado por crear soluciones
                tecnológicas innovadoras. Actualmente estoy estudiando Ciencias
                de la Computación, donde estoy ampliando mis conocimientos en
                algoritmos, estructuras de datos y fundamentos de programación.
              </p>
              <p className="text-lg text-gray-300">
                Mi experiencia incluye el desarrollo de aplicaciones web y
                móviles utilizando tecnologías modernas como React, Node.js, y
                bases de datos SQL/NoSQL. Me encanta enfrentar nuevos desafíos y
                aprender constantemente sobre las últimas tendencias en
                desarrollo de software.
              </p>
              <p className="text-lg text-gray-300">
                Cuando no estoy programando, disfruto de la fotografía, el
                senderismo y participar en hackathons para conectar con otros
                desarrolladores y poner a prueba mis habilidades.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;