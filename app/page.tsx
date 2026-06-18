import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";
import { Certifications } from "@/components/Certifications";
import { BackToTop } from "@/components/BackToTop";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WaveDivider from="primary" to="secondary" />
        <Experience />
        <Certifications />
        <WaveDivider from="secondary" to="primary" flip />
        <Skills />
        <WaveDivider from="primary" to="secondary" />
        <Projects />
        <WaveDivider from="secondary" to="primary" flip />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
