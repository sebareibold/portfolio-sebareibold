import { motion } from "framer-motion";
import "./arc.css";

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
  // const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 custom-card">
        <div className="flex h-full flex-col md:flex-row items-center justify-center gap-10">
          <motion.div
            className="md:w-1/2 lg:w-2/4 custom-servicios w-[100%]"
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
            <h3 className="text-2xl font-bold mb-6 ">Servicios brindados</h3>
          </motion.div>

          <motion.div
            className="relative md:w-1/2 lg:w-2/4 h-full mt-10 md:mt-0"
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
            <div className="relative rounded-xl   h-full  w-full max-w-lg mx-auto ">
              <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                spaceBetween={20}
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
                {/* Slides */}
                <SwiperSlide>
                  <div className="custom-slide-servicio">Hola 1</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="custom-slide-servicio">Hola 1</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="custom-slide-servicio">Hola 1</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="custom-slide-servicio">Hola 1</div>
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
