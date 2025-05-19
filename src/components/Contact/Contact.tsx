import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
const Contact = () => {
  return <section id="contacto" className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div className="mb-12 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl sm:text-4xl font-bold">Contacto</h2>
        </motion.div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <motion.div className="md:w-1/3 bg-gray-800 p-8 flex flex-col justify-between" initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }}>
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Información de Contacto
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <MailIcon size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p>sebastian@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <PhoneIcon size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400">Teléfono</p>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <MapPinIcon size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400">Ubicación</p>
                        <p>Buenos Aires, Argentina</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-gray-400 mb-4">Redes sociales</p>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                      <GithubIcon size={20} />
                    </a>
                    <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                      <LinkedinIcon size={20} />
                    </a>
                    <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                      <TwitterIcon size={20} />
                    </a>
                    <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                      <InstagramIcon size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div className="md:w-2/3 p-8" initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm text-gray-400">
                        Nombre
                      </label>
                      <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm text-gray-400">
                        Email
                      </label>
                      <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm text-gray-400">
                      Asunto
                    </label>
                    <input type="text" id="subject" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white" placeholder="Asunto del mensaje" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-400">
                      Mensaje
                    </label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white resize-none" placeholder="Escribe tu mensaje aquí..."></textarea>
                  </div>
                  <button type="submit" className="flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    Enviar Mensaje
                    <SendIcon size={18} className="ml-2" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;