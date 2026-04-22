import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { GallerySection } from '@/components/gallery-section';
import { PhotoGallerySection } from '@/components/photo-gallery-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { sculptureWorks, sculpturePhotoGallery, paintingWorks, completedProjects, upcomingProjects } from '@/lib/artist-data';

export default function Home() {
  return (
    <div className="w-full bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection
          id="esculturas"
          title="Obra"
          subtitle="Escultórica"
          items={sculptureWorks}
          color="primary"
        />
        <PhotoGallerySection
          id="galeria-esculturas"
          title="Galería de Obras"
          subtitle="Escultóricas"
          photos={sculpturePhotoGallery}
        />
        <GallerySection
          id="pinturas"
          title="Obra"
          subtitle="Pictórica"
          items={paintingWorks}
          color="accent"
        />
        <ProjectsSection
          completedProjects={completedProjects}
          upcomingProjects={upcomingProjects}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
