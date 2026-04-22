// Ejemplos de cómo extender la página de Nicolás Barrosanto

/*
===== AÑADIR NUEVAS OBRAS =====

Para agregar nuevas esculturas, edita /lib/artist-data.ts:

export const sculptureWorks: Artwork[] = [
  // ... obras existentes ...
  {
    id: 'nueva-obra',
    title: 'Título de la Obra',
    dimensions: '150cm x 100cm',
    description: 'Descripción detallada de la obra...'
  }
];

La obra aparecerá automáticamente en la sección de esculturas.


===== CAMBIAR COLORES PRINCIPALES =====

Edita /app/globals.css:

:root {
  --primary: oklch(0.35 0.08 40);    /* Cambiar aquí el color principal */
  --accent: oklch(0.60 0.15 45);     /* Cambiar aquí el color de acento */
  --secondary: oklch(0.65 0.12 50);  /* Cambiar aquí el color secundario */
  /* ... resto de colores ... */
}

Puedes generar colores OKLCH en: https://oklch.com/


===== AGREGAR SECCIÓN DE EXPOSICIONES PASADAS =====

1. Crea un nuevo componente: /components/exhibitions-section.tsx
2. Importa tipos de /lib/artist-data.ts
3. Añade lista de exposiciones en /lib/artist-data.ts
4. Importa el componente en /app/page.tsx

Ejemplo básico:

// /components/exhibitions-section.tsx
export function ExhibitionsSection({ exhibitions }: { exhibitions: Exhibition[] }) {
  return (
    <section id="exposiciones" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Exposiciones <span className="text-primary">Anteriores</span>
        </h2>
        <div className="space-y-4">
          {exhibitions.map((expo) => (
            <div key={expo.id} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground">{expo.title}</h3>
              <p className="text-muted-foreground">{expo.year} • {expo.location}</p>
              <p className="text-foreground mt-2">{expo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


===== AGREGAR BLOG / ARTÍCULOS =====

1. Crea carpeta: /app/blog
2. Crea archivos: /app/blog/page.tsx y /app/blog/[slug]/page.tsx
3. Crea archivo de datos: /lib/blog-posts.ts

// /lib/blog-posts.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mi-proceso-creativo',
    title: 'Mi Proceso Creativo',
    date: '2024-03-15',
    excerpt: 'Descubre cómo transformo materiales en emociones...',
    content: 'Contenido completo del artículo...'
  }
];


===== AGREGAR SISTEMA DE COMENTARIOS =====

Opciones recomendadas:
1. Disqus (fácil, pero con anuncios)
2. Giscus (basado en GitHub Discussions)
3. Utterances (comentarios en GitHub)
4. Solución custom con Supabase

Ejemplo con Giscus:
npm install @giscus/react

// En el componente donde quieras comentarios:
import Giscus from '@giscus/react';

<Giscus
  repo="tu-usuario/tu-repo"
  repoId="..."
  category="Comentarios"
  categoryId="..."
  mapping="pathname"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="bottom"
  theme="dark"
/>


===== AGREGAR NEWSLETTER / SUSCRIPCIÓN =====

1. Usa un servicio como Mailchimp, ConvertKit o Substack
2. Obtén el código de embed
3. Añade un componente Newsletter

// /components/newsletter-section.tsx
export function NewsletterSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Mantente al día</h2>
        <p className="mb-8">Recibe actualizaciones sobre nuevas obras y proyectos</p>
        {/* Aquí va el código de Mailchimp, Substack, etc. */}
      </div>
    </section>
  );
}


===== AGREGAR CARRITO DE COMPRA / E-COMMERCE =====

Opciones recomendadas:
1. Stripe + Supabase
2. PayPal Commerce
3. Shopify (más completo pero más pesado)

Pasos básicos:
1. Instala: npm install @stripe/react-js @stripe/js
2. Crea API routes en /app/api/checkout
3. Implementa checkout con Stripe Embedded Form


===== AGREGAR GALERÍA CON ZOOM =====

npm install photoswipe

// En gallery-section.tsx:
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

Esto permitirá ver imágenes a tamaño completo al hacer click.


===== MEJORAR SEO CON SCHEMA.org =====

Añade structured data para Google:

// En /app/layout.tsx o page.tsx:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Nicolás Barrosanto',
      jobTitle: 'Artista Plástico / Escultor',
      url: 'https://tudominio.com',
      sameAs: [
        'https://instagram.com/nicolas.barrosanto'
      ],
      knowsAbout: ['Escultura', 'Arte Metal', 'Pintura']
    })
  }}
/>


===== INTERNACIONALIZACIÓN (i18n) =====

npm install next-intl

Estructura:
/app/[locale]/page.tsx
/app/[locale]/layout.tsx
/messages/es.json
/messages/en.json

Esto permite versiones en español e inglés.


===== AGREGAR ANÁLISIS / GOOGLE ANALYTICS =====

npm install @vercel/analytics

Ya está incluido en el layout.tsx, solo asegúrate de conectar el evento ID de Google Analytics.


===== AGREGAR FORMULARIO AVANZADO DE CONTACTO =====

Opciones:
1. Formspree (https://formspree.io/) - Muy fácil
2. Basin (https://usebasin.com/) - Gratuito y simple
3. SendGrid - Más control

Con Formspree:
1. Crea cuenta y proyecto
2. Obtén ID del formulario
3. Actualiza /components/contact-section.tsx

<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
  {/* tu formulario */}
</form>


===== ACTUALIZAR LANDING PAGE =====

Agrega una sección de "Primeras Impresiones" o "Testimonios":

// /components/testimonials-section.tsx
export function TestimonialsSection() {
  const testimonials = [
    {
      author: 'Director de Galería X',
      text: 'Las obras de Nicolás son transformadoras...'
    },
    // más testimonios...
  ];

  return (
    <section className="bg-card py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Lo que dicen sobre mi trabajo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background p-6 rounded-lg border border-border">
              <p className="text-foreground mb-4">"{t.text}"</p>
              <p className="text-primary font-semibold">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


===== CAMBIAR TIPOGRAFÍA =====

En /app/layout.tsx:

import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

En /app/globals.css:
@theme inline {
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Poppins', sans-serif;
}

En componentes:
<h1 className="font-serif">Título</h1>
<p className="font-sans">Texto</p>
*/
