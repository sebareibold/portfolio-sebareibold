"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [importance, setImportance] = useState(50)

  const getImportanceLabel = (value: number) => {
    if (value <= 25) return "Baja"
    if (value <= 50) return "Normal"
    if (value <= 75) return "Alta"
    return "Urgente"
  }

  const getImportanceColor = (value: number) => {
    if (value <= 25) return "text-gray-400"
    if (value <= 50) return "text-gray-300"
    if (value <= 75) return "text-gray-200"
    return "text-white"
  }

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#c5c5c5]">Contacto</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Outer container with white border */}
          <div className="border-2 border-gray-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 glass-card">
            <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] gap-4 sm:gap-6">
              {/* Left gray section with rounded borders */}
              <motion.div
                className="w-full lg:w-1/3 bg-[#c5c5c5] p-6 sm:p-8 lg:p-12 relative rounded-xl sm:rounded-2xl order-2 lg:order-1"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Mail size={20} className="sm:w-6 sm:h-6 text-gray-800" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Información de Contacto</h3>
                  </div>

                  <div className="space-y-4 sm:space-y-6 flex-1">
                    <div className="flex items-start">
                      <div className="mr-3 sm:mr-4 mt-1 p-2 sm:p-3 rounded-full bg-black/10 flex items-center justify-center">
                        <Mail size={14} className="sm:w-4 sm:h-4 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs uppercase tracking-wide">Email</p>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm break-all">
                          sebastian.reibold@example.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-3 sm:mr-4 mt-1 p-2 sm:p-3 rounded-full bg-black/10 flex items-center justify-center">
                        <Phone size={14} className="sm:w-4 sm:h-4 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs uppercase tracking-wide">Teléfono</p>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm">+54 (299) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-3 sm:mr-4 mt-1 p-2 sm:p-3 rounded-full bg-black/10 flex items-center justify-center">
                        <MapPin size={14} className="sm:w-4 sm:h-4 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs uppercase tracking-wide">Ubicación</p>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm">Neuquén Capital, Argentina</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-gray-600 mb-3 sm:mb-4 text-xs uppercase tracking-wide">Redes Sociales</p>
                    <div className="flex space-x-2 sm:space-x-3">
                      {[
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                        { icon: Twitter, href: "#" },
                        { icon: Instagram, href: "#" },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="p-2 rounded-full bg-black/10 hover:bg-black/15 transition-all duration-300"
                        >
                          <social.icon size={14} className="sm:w-4 sm:h-4 text-gray-700" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right dark section */}
              <motion.div
                className="w-full lg:w-2/3 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border-[#c5c5c5] order-1 lg:order-2"
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                <div className="h-full flex flex-col">
                  <form className="space-y-4 sm:space-y-6 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-xs sm:text-sm text-gray-400 uppercase tracking-wide"
                        >
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#2a2a2a] border border-[#c5c5c5] rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300 text-white text-sm"
                          placeholder="Nombre completo"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-xs sm:text-sm text-gray-400 uppercase tracking-wide"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#2a2a2a] border border-[#c5c5c5] rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300 text-white text-sm"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-xs sm:text-sm text-gray-400 uppercase tracking-wide"
                      >
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#2a2a2a] border border-[#c5c5c5] rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300 text-white text-sm"
                        placeholder="¿En qué puedo ayudarte?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-xs sm:text-sm text-gray-400 uppercase tracking-wide"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#2a2a2a] border border-[#c5c5c5] rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300 resize-none text-white text-sm"
                        placeholder="Comentame . . . "
                      ></textarea>
                    </div>

                    {/* Importance Slider */}
                    <div>
                      <label className="block mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
                        Importancia del Mensaje
                      </label>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Baja</span>
                          <span className={`text-sm font-semibold ${getImportanceColor(importance)}`}>
                            {getImportanceLabel(importance)}
                          </span>
                          <span className="text-xs text-gray-500">Urgente</span>
                        </div>
                        <div className="relative">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={importance}
                            onChange={(e) => setImportance(Number(e.target.value))}
                            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, #333333 0%, #666666 50%, #ffffff 100%)`,
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>0</span>
                          <span>25</span>
                          <span>50</span>
                          <span>75</span>
                          <span>100</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white font-semibold rounded-lg transition-all duration-300 border border-gray-600 text-sm"
                    >
                      Enviar Mensaje
                      <Send size={14} className="ml-2" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
