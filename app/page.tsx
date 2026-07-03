import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
    </>
  );
}
