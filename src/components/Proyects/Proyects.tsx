"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronsUpDown,
  ExternalLink,
  Github,
  ChevronsDownUp,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  fullTechnologies: string[];
  githubUrl: string;
  liveUrl?: string; // Opcional
  longDescription?: string;
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "E-commerce Web Obbware",
      description:
        "Una plataforma de comercio electrónico de software y hardware completa con carrito de compras, pagos y gestión de inventario.",
      longDescription:
        "Desarrollé una plataforma completa de e-commerce desde cero, implementando funcionalidades como autenticación de usuarios, carrito de compras persistente, integración con pasarelas de pago, panel de administración para gestión de productos y un sistema de notificaciones en tiempo real.",
      image: "./obbware.png",
      tags: ["React", "Node.js", "Express"],
      fullTechnologies: [
        "ReactJs",
        "Firebase",
        "Tailwind CSS",
        "Vite",
      ],
      githubUrl: "https://github.com/sebareibold/e-commerce-obbware",
      liveUrl: "https://e-commerce-obbware.vercel.app/",
    },
    {
      title: "E-commerce Mobile App",
      description:
        "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y seguimiento de progreso.",
      longDescription:
        "Una aplicación web para gestión de proyectos y tareas que permite a los equipos colaborar en tiempo real. Incluye funcionalidades como asignación de tareas, comentarios, archivos adjuntos, notificaciones push y reportes de productividad.",
      image: "./fondo.jpg",
      tags: ["Next.js", "PostgreSQL", "Prisma"],
      fullTechnologies: [
        "React Native",
        "Expo",
        "Express",
        "NodeJs",
      ],
      githubUrl: "https://github.com/sebareibold/e-commerce-practice-app",
      // No tiene liveUrl
    },
    {
      title: "Plataforma Web Gilia",
      description:
        "Este proyecto es una aplicación web creada para GILIA: Grupo de Investigación en Lenguajes e Inteligencia Artificial.",
      longDescription:
        "Este proyecto es una aplicación web creada para GILIA: Grupo de Investigación en Lenguajes e Inteligencia Artificial. El sitio web se construyó utilizando React y Vite para el frontend, mientras que el backend utiliza Node.js y Strapi.",
      image: "./fondo.jpg",
      tags: ["Vue.js", "Chart.js", "API"],
      fullTechnologies: [
        "ReactJs",
        "Strapi",
        "Vite",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/usuario/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.netlify.app",
    },
    {
      title: "LiveProducts API",
      description:
        "Proyecto Backend con Node.js: API REST y Comunicación en Tiempo Real con Socket.IO",
      longDescription:
        "Se construyó una API REST con el propósito de comprender a fondo los conceptos fundamentales de una arquitectura backend típica. Para ello, se implementó una estructura básica organizada por directorios, donde se distribuye la lógica correspondiente al ruteo, manejo de solicitudes y respuestas, así como la interacción con bases de datos simples o datos en memoria. Además, se incorporó un endpoint denominado realTimeProducts, que permite visualizar en tiempo real los productos disponibles. Cualquier adición, eliminación o modificación se refleja inmediatamente en la lista gracias a la integración de WebSockets, específicamente mediante la librería Socket.IO.",
      image: "./gilia.png",
      tags: ["Python", "Django", "D3.js"],
      fullTechnologies: [
        "Express",
        "NodeJs",
        "MongoDB",
        "Postman",
        "Websockets",
      ],
      githubUrl: "https://github.com/usuario/social-analytics",
      // No tiene liveUrl
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
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


  return (
    <section
      id="proyectos"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-semibold mb-8 sm:mb-12 lg:mb-16 gradient-text"
          variants={titleVariants}
        >
          Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 relative pb-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden w-full flex flex-col transition-all duration-300"
              custom={index}
              whileHover={{
                scale: 1,
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="h-40 sm:h-48 overflow-hidden flex-shrink-0">
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                />
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3
                    className="text-responsive-lg sm:text-responsive-xl font-bold line-clamp-2 flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.button
                    onClick={() => toggleExpand(index)}
                    className="ml-2 p-2 rounded-full hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
                    aria-label="Expandir proyecto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronsUpDown size={20} className="text-gray-400" />
                  </motion.button>
                </div>

                <motion.p
                  className="text-gray-400 mb-4 text-responsive-xs sm:text-responsive-sm leading-relaxed line-clamp-3 pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
  {/* Modal expandido centrado - SIN PARPADEO */}
      <AnimatePresence mode="sync">
        {expandedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 , ease: "easeIn"}}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedProject(null)}
          >
            <motion.div
              layout
              initial={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 2, ease: "easeIn" }}
              className="glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con imagen */}
              <div className="relative h-48 sm:h-64 overflow-hidden flex-shrink-0">
                <img
                  src={projects[expandedProject].image || "/placeholder.svg"}
                  alt={projects[expandedProject].title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setExpandedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200 hover:scale-110"
                >
                  <ChevronsDownUp size={20} />
                </button>
              </div>

              {/* Contenido scrolleable */}
              <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
                <div className="opacity-100">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    {projects[expandedProject].title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                    {projects[expandedProject].longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[expandedProject].fullTechnologies.map(
                        (tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 glass-card-secondary text-sm rounded-full text-white hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={projects[expandedProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-white hover:bg-black hover:text-white  text-black text-sm rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Github size={18} className="mr-2" />
                      Ver Código
                    </a>

                    {projects[expandedProject].liveUrl && (
                      <a
                        href={projects[expandedProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-white hover:bg-black hover:text-white  text-black text-sm rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Ver Demo en Vivo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
