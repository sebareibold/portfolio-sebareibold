import type React from "react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description:
        "A brief description of project 1. This project was about solving a complex problem using innovative techniques.",
      image: "./fondo.jpg",
      tags: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Project 2",
      description:
        "A brief description of project 2. This project focused on creating a user-friendly interface for a data-intensive application.",
      image: "./fondo.jpg",
      tags: ["Python", "Django", "PostgreSQL"],
    },
    {
      title: "Project 3",
      description:
        "A brief description of project 3. The main goal was to develop a scalable and reliable system for processing large amounts of data in real-time.",
      image: "./fondo.jpg",
      tags: ["Java", "Spring Boot", "MySQL", "AWS"],
    },
    {
      title: "Project 4",
      description:
        "A brief description of project 4. This project involved building a mobile application with a focus on performance and user experience.",
      image: "./fondo.jpg",
      tags: ["React Native", "Firebase"],
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 gradient-text">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden h-80 sm:h-96 w-full flex flex-col hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-32 sm:h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-3 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 glass-card-secondary text-xs sm:text-sm rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
