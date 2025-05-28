"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          className="mb-12 text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Sobre Mi</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="w-full max-w-xs mx-auto aspect-square rounded-full glass-card overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <div className="glass-card p-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Soy estudiante de 4º año (de 5) de Ciencias de la Computación en Neuquén Capital. Mi formación
                  académica abarca áreas clave como arquitectura de computadoras, sistemas operativos, redes,
                  estructuras de datos e ingeniería de software.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Paralelamente, me formo como Desarrollador Fullstack de manera autodidacta y a través de cursos. En
                  Frontend, he trabajado en proyectos con tecnologías como React.js, React + Vite, Next.js y Tailwind
                  CSS. Actualmente, estoy profundizando en Backend con NodeJS y Express, y cuento con experiencia previa
                  en CMS como Strapi.
                </p>

                {/* Stats or highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">
                    <div className="text-2xl font-bold gradient-text">4+</div>
                    <div className="text-sm text-gray-400">Años de Estudio</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-white/10">
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-sm text-gray-400">Tecnologías</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
