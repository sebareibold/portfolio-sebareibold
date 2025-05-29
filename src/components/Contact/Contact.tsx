"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contacto"
      className="py-16 sm:py-20 lg:py-24 relative px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
          variants={titleVariants}
        >
          <h2 className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-bold mb-4 text-[#c5c5c5]">
            Contacto
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Outer container with white border */}
          <motion.div 
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] gap-6 sm:gap-8">
              {/* Left gray section with rounded borders */}
              <motion.div
                className="w-full lg:w-1/3 bg-[#c5c5c5] p-6 sm:p-8 lg:p-12 relative rounded-xl sm:rounded-2xl order-2 lg:order-1"
                variants={leftVariants}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <motion.div 
                    className="mb-8 sm:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-responsive-lg sm:text-responsive-xl lg:text-responsive-2xl font-bold text-gray-800">
                      Información de Contacto
                    </h3>
                  </motion.div>

                  <div className="flespace-y-6 sm:space-y-8 flex-1">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "sebastian.reibold@example.com",
                        delay: 0.4,
                      },
                      {
                        icon: Phone,
                        label: "Teléfono",
                        value: "+54 (299) 123-4567",
                        delay: 0.5,
                      },
                      {
                        icon: MapPin,
                        label: "Ubicación",
                        value: "Neuquén Capital, Argentina",
                        delay: 0.6,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: item.delay }}
                      >
                        <div className="mr-4 mt-1 p-3 rounded-full bg-black/10 flex items-center justify-center">
                          <item.icon size={16} className="text-gray-700" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-gray-600 text-responsive-xs uppercase tracking-wide flex">
                            {item.label}
                          </p>
                          <p className="text-gray-800 font-medium text-responsive-xs sm:text-responsive-sm break-all">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="mt-auto ml-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <p className="text-gray-600 mb-4 text-responsive-xs uppercase tracking-wide flex">
                      Redes Sociales
                    </p>
                    <div className="flex space-x-3">
                      {[
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                        { icon: Instagram, href: "#" },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className="p-2 rounded-full bg-black/10 hover:bg-black/15 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon size={16} className="text-gray-700" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right dark section */}
              <motion.div
                className="w-full lg:w-2/3 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border-[#c5c5c5] order-1 lg:order-2"
                variants={rightVariants}
              >
                <div className="h-full flex flex-col">
                  <motion.form 
                    className="flex flex-col flex-1"
                    variants={formVariants}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      {[
                        { id: "name", label: "Nombre", placeholder: "Nombre completo", type: "text" },
                        { id: "email", label: "Email", placeholder: "example@email.com", type: "email" },
                      ].map((field, index) => (
                        <motion.div
                          key={field.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                        >
                          <label
                            htmlFor={field.id}
                            className="flex mb-2 ml-1.5 text-responsive-xs sm:text-responsive-sm text-gray-400 uppercase tracking-wide"
                          >
                            {field.label}
                          </label>
                          <motion.input
                            type={field.type}
                            id={field.id}
                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#c5c5c5] rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300 text-white text-responsive-sm"
                            placeholder={field.placeholder}
                            whileFocus={{ scale: 1.02 }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <label
                        htmlFor="subject"
                        className="flex mb-2 ml-1.5 text-responsive-xs sm:text-responsive-sm text-gray-400 uppercase tracking-wide"
                      >
                        Asunto
                      </label>
                      <motion.input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#c5c5c5] rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300 text-white text-responsive-sm"
                        placeholder="¿En qué puedo ayudarte?"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div 
                      className="flex-1 flex flex-col mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label
                        htmlFor="message"
                        className="flex ml-1.5 mb-2 text-responsive-xs sm:text-responsive-sm text-gray-400 uppercase tracking-wide"
                      >
                        Mensaje
                      </label>
                      <motion.textarea
                        id="message"
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#c5c5c5] rounded-lg focus:outline-none focus:border-gray-400 transition-all duration-300 resize-none text-white text-responsive-sm h-full min-h-[120px]"
                        placeholder="Comentame . . . "
                        whileFocus={{ scale: 1.02 }}
                      ></motion.textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white font-semibold rounded-lg transition-all duration-300 border border-gray-600 text-responsive-sm self-end"
                      initial={{ opacity: 1, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enviar Mensaje
                      <Send size={16} className="ml-2" />
                    </motion.button>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;