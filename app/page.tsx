import Hero from "@/components/Hero";
import LookingFor from "@/components/LookingFor";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <LookingFor />

        <SectionDivider number="01" label="À propos" />
        <Reveal>
          <About />
        </Reveal>

        <SectionDivider number="02" label="Compétences" />
        <Reveal>
          <Skills />
        </Reveal>

        <SectionDivider number="03" label="Services" />
        <Reveal>
          <Services />
        </Reveal>

        <SectionDivider number="04" label="Projets" />
        <Reveal>
          <Projects />
        </Reveal>

        <SectionDivider number="05" label="Parcours" />
        <Reveal>
          <Experience />
        </Reveal>

        <SectionDivider number="06" label="Contact" />
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}