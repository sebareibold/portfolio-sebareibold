
import { motion } from "framer-motion";
import "./About.css";

const About = () => {

  const sections = [
    {
      title: "Presente",
      content: `Actualmente, estoy cursando el 4º año de la carrera de Ciencias de la Computación en Neuquén Capital (de un total de 5 años). Mi formación universitaria me está proporcionando una base sólida en áreas fundamentales como arquitectura de computadoras, sistemas operativos, redes, estructuras de datos e ingeniería de software. 
      
      En paralelo a mis estudios universitarios, me estoy formando activamente como Desarrollador Fullstack a través de aprendizaje autodidacta y diversos cursos. Una de las áreas en las que más me he adentrado hasta ahora es el desarrollo de software. En el Frontend, he ganado experiencia trabajando en proyectos con tecnologías como React.js, React + Vite, Next.js y Tailwind CSS. En el ámbito del Backend, me encuentro profundizando mis conocimientos en NodeJS y Express, y cuento con experiencia previa en el manejo de CMS como Strapi. 
      
      Si bien el desarrollo Fullstack es un camino que estoy recorriendo con dedicación, también tengo una gran curiosidad por otras ramas de la informática. Estoy conociendo y adentrándome en áreas como la Inteligencia Artificial (específicamente en Machine Learning) y la Ciberseguridad. Mi objetivo al explorar estas diferentes áreas es descubrir cuál es la que más me apasiona para determinar mi futura especialización`,
    },
    {
      title: "Visión",
      content: `Busco crear soluciones digitales que sean realmente útiles y tengan un impacto tangible para ayudar a las empresas y al mundo. Mi enfoque principal es construir soluciones robustas, funcionales y escalables, siempre basadas en una correcta ingeniería de software.`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Título principal con efecto llamativo */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20 text-center flex align-middle justify-center items-center"
          variants={titleVariants}
        >
          <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 gradient-text">
            Sobre Mi
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Secciones interactivas */}
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`about-card glass-card p-6 sm:p-8 lg:p-10 ${index === 0 ? "md:col-span-3" : ""}`}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                custom={index}
              >
                <motion.h3 
                  className="text-responsive-xl sm:text-responsive-2xl font-bold mb-4 sm:mb-6 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {section.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-responsive-sm sm:text-responsive-base lg:text-responsive-lg leading-relaxed tracking-wide whitespace-pre-line"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {section.content}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frase destacada final */}
        <motion.div
          className="text-center"
          variants={quoteVariants}
        >
          <blockquote className="text-responsive-xl sm:text-responsive-2xl lg:text-responsive-3xl font-light italic text-gray-300 relative max-w-4xl mx-auto">
           
            <motion.span 
              className="relative z-10 gradient-text block px-8 sm:px-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              "El software es un gran arte, siempre puede ser mejorado."
            </motion.span>
        
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;