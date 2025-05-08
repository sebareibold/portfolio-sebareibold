import React from 'react';
import { motion } from 'framer-motion';
interface NavbarProps {
  scrolled: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
  scrolled
}) => {
  return <motion.header className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300  bg-[var(--bg-main)] backdrop-blur-md '} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-center items-center">
          <ul className="flex space-x-8">
            <li>
              <a href="#inicio" className="text-white hover:text-gray-300 transition-colors px-4 py-2 rounded-full">
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="text-white hover:text-gray-300 transition-colors px-4 py-2 rounded-full">
                Sobre Mi
              </a>
            </li>
            <li>
              <a href="#proyectos" className="text-white hover:text-gray-300 transition-colors px-4 py-2 rounded-full">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-white hover:text-gray-300 transition-colors px-4 py-2 rounded-full">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>;
};
export default Navbar;