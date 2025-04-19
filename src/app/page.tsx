import Image from "next/image";
import {
  Navbar,
  AboutMe,
  Contact,
  Presentation,
  Service,
  MySkills,
  Proyects,
} from "../components";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" justify-center items-center pt-16 px-8 sm:px-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <section  className="justify-center content-center" id="home">
          <Presentation />
        </section>

        <section id="about">
          <AboutMe />
          <Service />
          <MySkills />
        </section>

        <section id="projects">
          <Proyects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

