"use client"

import { motion } from "framer-motion"
import "./Services.css"

//Swiper
import { Mousewheel, Pagination, Autoplay, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import "swiper/css/autoplay"

const services = [
  {
    title: "Desarrollo Web Frontend",
    description:
      "Creación de interfaces de usuario atractivas y responsivas utilizando React, HTML5, CSS3 y JavaScript.",
  },
  {
    title: "Desarrollo Web Backend",
    description: "Implementación de APIs RESTful, bases de datos y lógica de servidor con Node.js, Express y MongoDB.",
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    description: "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android utilizando React Native.",
  },
  {
    title: "Consultoría Técnica",
    description:
      "Asesoramiento en arquitectura de software, optimización de rendimiento y mejores prácticas de desarrollo.",
  },
]

const Services = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto custom-card">
        <div className="flex h-full flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          <motion.div
            className="w-full lg:w-1/2 custom-servicios"
            initial={{
              opacity: 0,
              y: 50,
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
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              Servicios brindados
            </h3>
            <div className="block lg:hidden">
              <p className="text-sm sm:text-base text-gray-300 text-center">Desliza para ver todos los servicios</p>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-full mt-6 lg:mt-0"
            initial={{
              opacity: 0,
              y: 50,
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
              delay: 0.2,
            }}
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
                    <div className="custom-slide-servicio">
                      <div className="p-4 sm:p-6">
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-white">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* Duplicamos para el loop infinito */}
                {services.map((service, index) => (
                  <SwiperSlide key={`duplicate-${index}`}>
                    <div className="custom-slide-servicio">
                      <div className="p-4 sm:p-6">
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-white">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
