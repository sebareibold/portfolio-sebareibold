"use client";

import type React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
interface NavbarProps {
  scrolled: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <motion.header
      className="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--bg-main)] backdrop-blur-md"
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex justify-center">
        <nav className="flex justify-center items-center custom-navbar">
          <ul className="flex space-x-4 sm:space-x-6 md:space-x-8">
            <li>
              <a
                href="#inicio"
                className="
  text-white custom-text-navbar text-sm sm:text-base transition-all duration-300 px-4 py-2 rounded-full   hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-red-500 hover:to-yellow-500  hover:drop-shadow-lg hover:brightness-125
"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#sobre-mi"
                className="
  text-white custom-text-navbar text-sm sm:text-base transition-all duration-300 px-4 py-2 rounded-full   hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-red-500 hover:to-yellow-500   hover:drop-shadow-lg hover:brightness-125
"
              >
                Sobre Mi
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="   text-white custom-text-navbar text-sm sm:text-base transition-all duration-300 px-4 py-2 rounded-full   hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-red-500 hover:to-yellow-500   hover:drop-shadow-lg hover:brightness-125
"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="  text-white custom-text-navbar text-sm sm:text-base transition-all duration-300 px-4 py-2 rounded-full   hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-red-500 hover:to-yellow-500   hover:drop-shadow-lg hover:brightness-125
"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};
export default Navbar;
