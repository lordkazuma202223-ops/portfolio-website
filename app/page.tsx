import MinimalNav from "@/components/ui/minimal-nav";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { SkillsSection } from "./components/sections/skills-section";
import { StatsSection } from "./components/sections/stats-section";
import { ContactSection } from "./components/sections/contact-section";
import { Footer } from "./components/footer";

const navItems = [
  { name: "Home", url: "#hero" },
  { name: "About Me", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Skills", url: "#skills" },
  { name: "Stats", url: "#stats" },
  { name: "Contact", url: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MinimalNav items={navItems} />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
