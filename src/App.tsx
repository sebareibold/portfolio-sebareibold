import React, { useEffect, useState } from 'react';
import "./App.css";
import { Navbar, Hero, About, Services, Skills, Proyects, Contact  } from './components/index'; 

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollLevel, setScrollLevel] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Calcular nivel de scroll más simple
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const level = Math.floor(scrollPosition / windowHeight);
      setScrollLevel(Math.min(level, 4));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <div className="text-white min-h-screen">
      {/* Capas onduladas */}
      <div className={`wave-layers scroll-${scrollLevel}`}>
        <div className="wave-layer wave-layer-1"></div>
        <div className="wave-layer wave-layer-2"></div>
        <div className="wave-layer wave-layer-3"></div>
        <div className="wave-layer wave-layer-4"></div>
        <div className="wave-layer wave-layer-5"></div>
        <div className="wave-layer wave-layer-6"></div>
      </div>
      
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Proyects />
        <Contact />
      </main>
    </div>
  );
}