"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";

const About = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Presente",
      content: `Actualmente, estoy cursando el 4º año de la carrera de Ciencias de la Computación en Neuquén Capital (de un total de 5 años). Mi formación universitaria me está proporcionando una base sólida en áreas fundamentales como arquitectura de computadoras, sistemas operativos, redes, estructuras de datos e ingeniería de software. En paralelo a mis estudios universitarios, me estoy formando activamente como Desarrollador Fullstack a través de aprendizaje autodidacta y diversos cursos. Una de las áreas en las que más me he adentrado hasta ahora es el desarrollo de software. En el Frontend, he ganado experiencia trabajando en proyectos con tecnologías como React.js, React + Vite, Next.js y Tailwind CSS. En el ámbito del Backend, me encuentro profundizando mis conocimientos en NodeJS y Express, y cuento con experiencia previa en el manejo de CMS como Strapi. Si bien el desarrollo Fullstack es un camino que estoy recorriendo con dedicación, también tengo una gran curiosidad por otras ramas de la informática. Estoy conociendo y adentrándome en áreas como la Inteligencia Artificial (específicamente en Machine Learning) y la Ciberseguridad. Mi objetivo al explorar estas diferentes áreas es descubrir cuál es la que más me apasiona para determinar mi futura especialización`,
    },
    {
      title: "Visión",
      content: `Busco crear soluciones digitales que sean realmente útiles y tengan un impacto tangible para ayudar a las empresas y al mundo. Mi enfoque principal es construir soluciones robustas, funcionales y escalables, siempre basadas en una correcta ingeniería de software.`,
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-20 relative px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        {/* Título principal con efecto llamativo */}
        <motion.div
          className="mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text">
            Sobre Mi
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Secciones interactivas */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`about-card glass-card p-5 ${
                  activeSection === index ? "active" : ""
                } ${index === 0 ? "md:col-span-3" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setActiveSection(index)}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frase destacada final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-300 relative max-w-3xl mx-auto">
            <span className="text-6xl text-blue-500 absolute -top-4 -left-4 opacity-50">
              "
            </span>
            <span className="relative z-10">
              La tecnología es solo una herramienta. Lo que realmente importa es
              cómo la usamos para crear un impacto positivo.
            </span>
            <span className="text-6xl text-blue-500 absolute -bottom-8 -right-4 opacity-50">
              "
            </span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
