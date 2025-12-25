import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
