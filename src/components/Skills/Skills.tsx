import { motion } from "framer-motion";

//Swiper
import { Mousewheel, Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import "./arch.css";

const Skills = () => {
  const mySkills = [
    { lenguaje: "Java", icon: "/vite.svg", color: "#00000" },
    { lenguaje: "JavaScript", icon: "/vite.svg", color: "#00000" },
    { lenguaje: "C", icon: "/vite.svg", color: "#00000" },
    { lenguaje: "Prolog", icon: "/vite.svg", color: "#00000" },
    { lenguaje: "Html", icon: "/vite.svg", color: "#00000" },
    { lenguaje: "Css", icon: "/vite.svg", color: "#00000" },
    { lenguaje: "Typescript", icon: "/vite.svg", color: "#00000" },
    { lenguaje: "Typescript", icon: "/vite.svg", color: "#00000" },
  ];
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center" 
          initial={{
            opacity: 0,
            y: 20,
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
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
        </motion.div>
        <div className="">
          <Swiper
            direction={"horizontal"}
            slidesPerView={"auto"}
            freeMode={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={4300}
            mousewheel={true}
            modules={[Mousewheel, Pagination, Autoplay, FreeMode]}
            className="mySwiper"
          >
            {/* Slides */}
            {mySkills.map((skill) => (
              <SwiperSlide className="custom-slide-skill">
                <div className=" flex justify-around">
                  <div className="custom-card-img">
                    <img src={skill.icon} alt="Logo"></img>
                  </div>
                  <div className="ml-2"> {skill.lenguaje}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Skills;
