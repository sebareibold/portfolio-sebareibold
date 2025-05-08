import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
const services = [{
  title: 'Desarrollo Web Frontend',
  description: 'Creación de interfaces de usuario atractivas y responsivas utilizando React, HTML5, CSS3 y JavaScript.'
}, {
  title: 'Desarrollo Web Backend',
  description: 'Implementación de APIs RESTful, bases de datos y lógica de servidor con Node.js, Express y MongoDB.'
}, {
  title: 'Desarrollo de Aplicaciones Móviles',
  description: 'Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android utilizando React Native.'
}, {
  title: 'Consultoría Técnica',
  description: 'Asesoramiento en arquitectura de software, optimización de rendimiento y mejores prácticas de desarrollo.'
}];
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextService = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
  };
  const prevService = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + services.length) % services.length);
  };
  return <section className="py-20 bg-black">
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
          <h2 className="text-3xl sm:text-4xl font-bold">Servicios</h2>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.div className="md:w-1/2 lg:w-1/3" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-2xl font-bold mb-6">Servicios brindados</h3>
            <div className="flex flex-col space-y-4">
              {services.map((_, index) => <motion.div key={index} className={`w-16 h-1 bg-white ${index === currentIndex ? 'opacity-100' : 'opacity-30'}`} animate={{
              width: index === currentIndex ? '4rem' : '2rem'
            }} transition={{
              duration: 0.3
            }} />)}
            </div>
          </motion.div>
          <motion.div className="relative md:w-1/2 lg:w-2/3 h-80 mt-10 md:mt-0" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="relative bg-gray-900 rounded-xl p-8 h-full w-full max-w-lg mx-auto border border-gray-800">
              <motion.div key={currentIndex} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              duration: 0.3
            }} className="h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">
                  {services[currentIndex].title}
                </h3>
                <p className="text-gray-300">
                  {services[currentIndex].description}
                </p>
              </motion.div>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button onClick={prevService} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <ChevronUpIcon size={20} />
                </button>
                <button onClick={nextService} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <ChevronDownIcon size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Services;