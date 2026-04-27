import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { GallerySection } from '@/components/gallery-section';
import { PhotoGallerySection } from '@/components/photo-gallery-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { sculptureWorks, sculpturePhotoGallery, paintingPhotoGallery, completedProjects, upcomingProjects } from '@/lib/artist-data';

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
          backgroundClassName="bg-[linear-gradient(270deg,#a8a6a6_0%,#d1d0d0_72%,#f6f6f6_100%)]"
          showNumber={false}
          showNumberIndices={[19]}
        />
        <PhotoGallerySection
          id="obra-pictorica"
          title="Obra"
          subtitle="Pictórica"
          photos={paintingPhotoGallery}
          gridClassName="grid grid-cols-2 md:grid-cols-5"
          backgroundClassName="bg-[linear-gradient(270deg,#fff7f5_0%,#f7f1ff_55%,#eef6ff_100%)]"
          showNumber={false}
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
