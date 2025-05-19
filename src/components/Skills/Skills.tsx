import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
const skills = [
  {
    name: "React",
    level: 90,
  },
  {
    name: "JavaScript",
    level: 85,
  },
  {
    name: "Node.js",
    level: 80,
  },
  {
    name: "TypeScript",
    level: 75,
  },
  {
    name: "MongoDB",
    level: 70,
  },
  {
    name: "Python",
    level: 65,
  },
];
const Skills = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;
  const nextSkills = () => {
    setStartIndex((prev) => Math.min(prev + 1, skills.length - itemsToShow));
  };
  const prevSkills = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };
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
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-4"
              animate={{
                x: `-${startIndex * (100 / itemsToShow)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-1/4 p-4"
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
                    delay: index * 0.1,
                  }}
                >
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-full">
                    <h3 className="text-xl font-medium mb-3">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-white h-2.5 rounded-full"
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                        }}
                      />
                    </div>
                    <p className="mt-2 text-right text-sm text-gray-400">
                      {skill.level}%
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={prevSkills}
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-gray-900 border border-gray-800 ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            }`}
          >
            <ChevronLeftIcon size={20} />
          </button>
          <button
            onClick={nextSkills}
            disabled={startIndex >= skills.length - itemsToShow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-gray-900 border border-gray-800 ${
              startIndex >= skills.length - itemsToShow
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            }`}
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Skills;
