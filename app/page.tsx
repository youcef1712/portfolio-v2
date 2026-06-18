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
import { TechMarquee } from "@/components/TechMarquee";
import { BackToTop } from "@/components/BackToTop";
import { CursorGlow } from "@/components/CursorGlow";
import { CommandPalette } from "@/components/CommandPalette";
import { EasterEgg } from "@/components/EasterEgg";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="skip-to-content"
        style={{
          position: "fixed",
          top: "-100px",
          left: "16px",
          zIndex: 10000,
          padding: "12px 24px",
          borderRadius: "10px",
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 600,
          fontSize: "14px",
          textDecoration: "none",
          transition: "top 0.3s ease",
        }}
      >
        Aller au contenu
      </a>
      <CursorGlow />
      <CommandPalette />
      <EasterEgg />
      <Navbar />
      <main id="main-content">
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
        <TechMarquee />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
