import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <ExpertiseSection id="expertise" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
      <ProcessSection id="process" />
      <TestimonialsSection id="testimonials" />
      <FAQSection id="faq" />
      <ContactSection id="contact" />
      <CTASection id="cta" />
      <Footer />
    </main>
  );
}
