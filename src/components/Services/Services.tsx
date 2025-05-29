"use client";

import { motion } from "framer-motion";
import "./Services.css";

//Swiper
import { Mousewheel, Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const services = [
  {
    title: "Desarrollo Web Frontend",
    description:
      "Creación de interfaces de usuario atractivas y responsivas utilizando React, HTML5, CSS3 y JavaScript.",
  },
  {
    title: "Desarrollo Web Backend",
    description:
      "Implementación de APIs RESTful, bases de datos y lógica de servidor con Node.js, Express y MongoDB.",
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    description:
      "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android utilizando React Native.",
  },
  {
    title: "Consultoría Técnica",
    description:
      "Asesoramiento en arquitectura de software, optimización de rendimiento y mejores prácticas de desarrollo.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto custom-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex h-full flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2 custom-servicios flex flex-col justify-center items-center"
            variants={leftVariants}
          >
            <motion.h3 
              className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-bold text-center lg:text-left gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Servicios
            </motion.h3>
            <motion.h4 
              className="text-responsive-lg sm:text-responsive-xl lg:text-responsive-2xl font-light text-gray-300 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Soluciones tecnológicas completas
            </motion.h4>
          </motion.div>

          <motion.div
            className="relative w-full lg:w-1/2 h-80 sm:h-96 lg:h-full mt-6 lg:mt-0"
            variants={rightVariants}
          >
            <div className="relative rounded-xl h-full w-full max-w-lg mx-auto">
              <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                spaceBetween={15}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={4300}
                mousewheel={true}
                modules={[Mousewheel, Pagination, Autoplay, FreeMode]}
                className="mySwiper"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <motion.div 
                      className="custom-slide-servicio bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300"
                      variants={cardHoverVariants}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-6 sm:p-8">
                        <motion.h4 
                          className="text-responsive-base sm:text-responsive-lg lg:text-responsive-xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {service.title}
                        </motion.h4>
                        <motion.p 
                          className="text-responsive-sm sm:text-responsive-base text-gray-300 leading-relaxed tracking-wide"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;