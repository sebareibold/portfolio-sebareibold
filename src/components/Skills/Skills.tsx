import { motion } from "framer-motion"
import "./Skills.css"

const Skills = () => {
  const mySkills = [
    { lenguaje: "Java", icon: "/vite.svg" },
    { lenguaje: "JavaScript", icon: "/vite.svg" },
    { lenguaje: "C", icon: "/vite.svg" },
    { lenguaje: "Prolog", icon: "/vite.svg" },
    { lenguaje: "Html", icon: "/vite.svg" },
    { lenguaje: "Css", icon: "/vite.svg" },
    { lenguaje: "Typescript", icon: "/vite.svg" },
    { lenguaje: "React", icon: "/vite.svg" },
    { lenguaje: "Node.js", icon: "/vite.svg" },
    { lenguaje: "Express", icon: "/vite.svg" },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="mb-8 sm:mb-12 text-center"
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Skills</h2>
        </motion.div>

        <div className="skills-carousel-container">
          <div className="skills-carousel-wrapper">
            <div className="skills-track">
              {/* Primera copia de los skills */}
              {mySkills.map((skill, index) => (
                <div key={`a-${index}`} className="skill-card">
                  <div className="skill-content">
                    <div className="custom-card-img">
                      <img src={skill.icon || "/placeholder.svg"} alt="Logo" />
                    </div>
                    <div className="skill-name">{skill.lenguaje}</div>
                  </div>
                </div>
              ))}

              {/* Segunda copia para crear el efecto infinito */}
              {mySkills.map((skill, index) => (
                <div key={`b-${index}`} className="skill-card">
                  <div className="skill-content">
                    <div className="custom-card-img">
                      <img src={skill.icon || "/placeholder.svg"} alt="Logo" />
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
  )
}

export default Skills
