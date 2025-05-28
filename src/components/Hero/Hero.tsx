"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="w-full min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center text-center order-2 lg:order-1"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="space-y-2 sm:space-y-4">
            <AnimatedText
              text="Hola, Soy Sebastian Reibold"
              className="text-lg sm:text-xl lg:text-2xl font-light custom-text-hero"
              once
            />
            <AnimatedText
              text="Computer Science Student"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl custom-text-hero font-bold gradient-text"
              once
              delay={0.2}
            />
            <AnimatedText
              text="Full Stack Developer"
              className="text-lg sm:text-xl lg:text-2xl custom-text-hero text-gray-400"
              once
              delay={0.4}
            />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
            className="mt-6 sm:mt-8"
          >
            <a
              href="#contacto"
              className="inline-block modern-button custom-text-hero text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              Descargar mi CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-110 lg:h-110 rounded-full glass-card overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="perfillinkd.png"
                alt="Perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
