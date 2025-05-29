import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const mySkills = [
    {
      lenguaje: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      background_color:
        "linear-gradient(90deg,rgba(140, 140, 29, 1) 28%, rgba(234, 255, 0, 1) 52%)",
      text_color: "#212121",
    },
    {
      lenguaje: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      background_color: "#8c8c1d",
      text_color: "#000000",
    },
    {
      lenguaje: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      background_color: "#555555",
      text_color: "#ffffff",
    },
    {
      lenguaje: "Prolog",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/SWI_Prolog_logo.png",
      background_color: "#c7254e",
      text_color: "#ffffff",
    },
    {
      lenguaje: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      background_color: "#e44d26",
      text_color: "#ffffff",
    },
    {
      lenguaje: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      background_color: "#264de4",
      text_color: "#ffffff",
    },
    {
      lenguaje: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      background_color: "#3178c6",
      text_color: "#ffffff",
    },
    {
      lenguaje: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      background_color: "#20232a",
      text_color: "#61dafb",
    },
    {
      lenguaje: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      background_color: "#3c873a",
      text_color: "#ffffff",
    },
    {
      lenguaje: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      background_color: "#212121",
      text_color: "#ffffff",
    },

    {
      lenguaje: "v0 Dev",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      background_color: "#212121",
      text_color: "#ffffff",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="mb-8 sm:mb-12 text-center flex align-middle justify-center items-center "
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
          <h2 className="text-2xl sm:text-3xl  font-bold gradient-text lg:text-left ">
            Tecnologias
          </h2>
        </motion.div>

        <div className="skills-carousel-container">
          <div className="skills-carousel-wrapper">
            <div className="skills-track">
              {/* Primera copia de los skills */}
              {mySkills.map((skill, index) => (
                <div
                  key={`a-${index}`}
                  className="skill-card"
                  style={{
                    backgroundColor: skill.background_color,
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="skill-content">
                    <div className="custom-card-img">
                      <img src={skill.icon || "/placeholder.svg"} alt="Logo" />
                    </div>
                    <div className="skill-name">{skill.lenguaje}</div>
                  </div>
                </div>
              ))}
              {/* Seguynda copia de los skills */}
              {mySkills.map((skill, index) => (
                <div
                  key={`a-${index}`}
                  className="skill-card"
                  style={{
                    backgroundColor: skill.background_color,
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="skill-content">
                    <div className="custom-card-img">
                      <img src={skill.icon || "/placeholder.svg"} alt="" />
                    </div>
                    <div className="skill-name">{skill.lenguaje}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
