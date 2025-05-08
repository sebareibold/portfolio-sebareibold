import React from 'react';
import { motion } from 'framer-motion';
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Plataforma completa de comercio electrónico con carrito de compras, procesamiento de pagos y panel de administración.',
  tags: ['React', 'Node.js', 'MongoDB'],
  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
}, {
  title: 'App de Gestión de Tareas',
  description: 'Aplicación móvil para la gestión de tareas personales con recordatorios y categorización.',
  tags: ['React Native', 'Firebase'],
  image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
}, {
  title: 'Dashboard Analítico',
  description: 'Panel de control interactivo para visualización de datos empresariales con gráficos personalizables.',
  tags: ['React', 'D3.js', 'Express'],
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
}, {
  title: 'Sistema de Gestión de Inventario',
  description: 'Sistema completo para el seguimiento de inventario con escaneo de códigos de barras y alertas de stock.',
  tags: ['React', 'Node.js', 'PostgreSQL'],
  image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
}, {
  title: 'Plataforma de Aprendizaje',
  description: 'LMS con cursos, evaluaciones y seguimiento del progreso del estudiante.',
  tags: ['React', 'MongoDB', 'Express'],
  image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
}];
const Projects = () => {
  return <section id="proyectos" className="py-20 bg-black">
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
          <h2 className="text-3xl sm:text-4xl font-bold">Proyectos</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={index} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -10,
          transition: {
            duration: 0.3
          }
        }}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 bg-gray-800 text-sm rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Projects;