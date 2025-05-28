import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto mb-12 sm:mb-16 lg:mb-20">
        <motion.div
          className="mb-8 sm:mb-12 text-center"
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text">
            Sobre Mi
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            className="w-full lg:w-full"
            initial={{
              opacity: 0,
              x: 200,
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
            <div className="!border-none glass-card p-6 sm:p-8 ">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Soy estudiante de 4º año (de 5) de Ciencias de la Computación
                  en Neuquén Capital. Mi formación académica abarca áreas clave
                  como arquitectura de computadoras, sistemas operativos, redes,
                  estructuras de datos e ingeniería de software.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Paralelamente, me formo como Desarrollador Fullstack de manera
                  autodidacta y a través de cursos. En Frontend, he trabajado en
                  proyectos con tecnologías como React.js, React + Vite, Next.js
                  y Tailwind CSS. Actualmente, estoy profundizando en Backend
                  con NodeJS y Express, y cuento con experiencia previa en CMS
                  como Strapi.
                </p>

                {/* Stats or highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">
                    <div className="text-xl sm:text-2xl font-bold gradient-text">
                      4+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Años de Estudio
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-white/10">
                    <div className="text-xl sm:text-2xl font-bold gradient-text">
                      10+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Tecnologías
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
