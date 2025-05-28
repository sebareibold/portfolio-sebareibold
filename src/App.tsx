"use client"

import { useEffect, useState } from "react"
import "./App.css"
import { Navbar, Hero, About, Services, Skills, Proyects, Contact } from "./components/index"

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="text-white min-h-screen">
      {/* Geometric abstract background */}
      <div className="geometric-background">
        {/* Large fluid shapes */}
        <div className="fluid-shape fluid-shape-1"></div>
        <div className="fluid-shape fluid-shape-2"></div>
        <div className="fluid-shape fluid-shape-3"></div>

        {/* Accent shapes */}
        <div className="accent-shape accent-shape-1"></div>
        <div className="accent-shape accent-shape-2"></div>
        <div className="accent-shape accent-shape-3"></div>

        {/* Geometric lines */}
        <div className="geometric-lines">
          <div className="geo-line geo-line-1"></div>
          <div className="geo-line geo-line-2"></div>
          <div className="geo-line geo-line-3"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="subtle-grid"></div>
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
  )
}
