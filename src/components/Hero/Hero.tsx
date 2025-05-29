"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./Hero.css";

const Hero = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(255,255,255,0.3)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="inicio"
      className="w-full min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center text-center order-2 lg:order-1"
          variants={itemVariants}
        >
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <motion.div variants={itemVariants}>
              <AnimatedText
                text="Hola, Soy Sebastian Reibold"
                className="text-responsive-lg sm:text-responsive-xl lg:text-responsive-2xl font-light custom-text-hero text-gray-300"
                once
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <AnimatedText
                text="Computer Science Student"
                className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl font-bold bg-gradient-to-r from-[#e0e0e0] to-[#a0a0a0] bg-clip-text text-transparent leading-tight"
                once
                delay={0.2}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <AnimatedText
                text="Full Stack Developer"
                className="text-responsive-lg sm:text-responsive-xl lg:text-responsive-2xl custom-text-hero text-gray-400"
                once
                delay={0.4}
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-8 sm:mt-10 lg:mt-12 bg-transparent"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.a
              href="#contacto"
              className=" bg-gradient-to-r text-gray-800 from-[#e0e0e0] to-[#a0a0a0] custom-text-hero transform transition duration-300 ease-in-out text-responsive-sm sm:text-responsive-base px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold"
              style={{
                boxShadow: "0px 5px 15px rgba(255,255,255,0.2)",
              }}
            >
              Descargar mi CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          variants={imageVariants}
        >
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full glass-card overflow-hidden"
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <motion.img
                src="perfillinkd.png"
                alt="Perfil"
                className="object-cover w-full h-full"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
