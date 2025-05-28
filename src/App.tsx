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
      {/* Modern floating background elements */}
      <div className="background-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
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
