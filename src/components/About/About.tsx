import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section id="sobre-mi" className="py-20">
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
        ></motion.div>
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
            <div className="w-full max-w-xs mx-auto aspect-square rounded-full border-4 border-white overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Sobre Mi</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                Soy estudiante de 4º año (de 5) de Ciencias de la Computación en
                Neuquén Capital. Mi formación académica abarca áreas clave como
                arquitectura de computadoras, sistemas operativos, redes,
                estructuras de datos e ingeniería de software.
              </p>
              <p className="text-lg text-gray-300">
                Paralelamente, me formo como Desarrollador Fullstack de manera
                autodidacta y a través de cursos. En Frontend, he trabajado en
                proyectos con tecnologías como React.js, React + Vite, Next.js y
                Tailwind CSS. Actualmente, estoy profundizando en Backend con
                NodeJS y Express, y cuento con experiencia previa en CMS como
                Strapi.
              </p>
              <p className="text-lg text-gray-300"></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
