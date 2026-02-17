import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { CompetitiveProgramming } from "@/components/portfolio/CompetitiveProgramming";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CompetitiveProgramming />
        <ProjectsSection />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
