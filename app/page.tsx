import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WaveDivider from="primary" to="secondary" />
        <Experience />
        <WaveDivider from="secondary" to="primary" flip />
        <Skills />
        <WaveDivider from="primary" to="secondary" />
        <Projects />
        <WaveDivider from="secondary" to="primary" flip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
