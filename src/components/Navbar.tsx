import React from "react";
import "./arc.css";

function Navbar() {
  return (
    <nav className="flex justify-center items-center fixed top-0 left-0 w-full z-50 h-16 backdrop-blur-md bg-white/10">
      {" "}
      <ul className="w-[20vw] flex justify-between items-center m-0 list-none p-[1%]">
        {" "}
        <li className="navbar-item">
          <a href="#home">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="#about">Sobre mí</a>
        </li>
        <li className="navbar-item">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="navbar-item">
          <a href="#skills">Contactos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
