// Instrucciones para agregar imágenes a la página

/*
PASO 1: Organiza tus imágenes
================================

Copia tus imágenes a esta estructura en /public:
- /public/images/hero-image.jpg - Imagen principal del hero
- /public/images/sculptures/ - Imágenes de esculturas
- /public/images/paintings/ - Imágenes de pinturas
- /public/images/projects/ - Imágenes de proyectos


PASO 2: Actualizar Hero Section
================================

Edita: /components/hero-section.tsx

Reemplaza:
  <div className="absolute inset-4 bg-secondary/10 rounded-xl flex items-center justify-center text-muted-foreground text-center">
    <div>
      <p className="text-lg mb-4">Galería Principal</p>
      <p className="text-sm">Imagen del artista o obra destacada</p>
    </div>
  </div>

Con:
  <Image 
    src="/images/hero-image.jpg"
    alt="Nicolás Barrosanto - Artista Plástico"
    fill
    className="object-cover rounded-2xl"
  />

Don't forget: Importa Image de next/image al inicio del archivo:
  import Image from 'next/image';


PASO 3: Actualizar Gallery Section
====================================

Edita: /components/gallery-section.tsx

Para la galería principal (después de seleccionar una obra):
Reemplaza el div placeholder con:

  <Image 
    src={`/images/sculptures/${selectedWork.id}-main.jpg`}
    alt={selectedWork.title}
    width={800}
    height={600}
    className="rounded-lg mb-6 w-full h-auto"
  />

Para las fotos en miniatura:
  {[1, 2, 3].map((i) => (
    <Image
      key={i}
      src={`/images/sculptures/${selectedWork.id}-${i}.jpg`}
      alt={`${selectedWork.title} - Foto ${i}`}
      width={200}
      height={200}
      className="aspect-square rounded-lg object-cover"
    />
  ))}


PASO 4: Actualizar Projects Section
====================================

Edita: /components/projects-section.tsx

Para la galería de proyectos:
Reemplaza:
  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center...">

Con:
  <Image
    src={`/images/projects/${project.id}.jpg`}
    alt={project.title}
    width={600}
    height={300}
    className="w-full h-full object-cover"
  />

Para las miniaturas:
  {[1, 2, 3].map((i) => (
    <Image
      key={i}
      src={`/images/projects/${project.id}-${i}.jpg`}
      alt={`${project.title} - Foto ${i}`}
      width={200}
      height={200}
      className="aspect-square rounded object-cover"
    />
  ))}


PASO 5: Nombres de Archivo Sugeridos
=====================================

Usa estos IDs de la base de datos para nombrar tus imágenes:

Esculturas:
- amanecer-main.jpg, amanecer-1.jpg, amanecer-2.jpg, amanecer-3.jpg
- la-proeza-main.jpg, la-proeza-1.jpg, etc.
- ocaso-main.jpg, ocaso-1.jpg, etc.
- el-vuelo-main.jpg, el-vuelo-1.jpg, etc.
- pajaros-main.jpg, pajaros-1.jpg, etc.
- umbral-main.jpg, umbral-1.jpg, etc.
- fuga-main.jpg, fuga-1.jpg, etc.
- corazon-main.jpg, corazon-1.jpg, etc.

Pinturas:
- paisaje-1-main.jpg, paisaje-1-1.jpg, etc.
- abstracto-1-main.jpg, abstracto-1-1.jpg, etc.
- retrato-1-main.jpg, retrato-1-1.jpg, etc.
- retrato-2-main.jpg, retrato-2-1.jpg, etc.
- abstracto-2-main.jpg, abstracto-2-1.jpg, etc.
- abstracto-3-main.jpg, abstracto-3-1.jpg, etc.

Proyectos:
- gauchito-gil.jpg, gauchito-gil-1.jpg, gauchito-gil-2.jpg, gauchito-gil-3.jpg
- muestra-interplanetaria.jpg, muestra-interplanetaria-1.jpg, etc.
- encuentro-escultores.jpg, encuentro-escultores-1.jpg, etc.
- arte-metal.jpg, arte-metal-1.jpg, etc.
- angel-dragon.jpg, angel-dragon-1.jpg, etc.
- residencia-artistica.jpg, residencia-artistica-1.jpg, etc.

Hero:
- hero-image.jpg


TIPS ADICIONALES
=================

1. Optimización de Imágenes:
   - Next.js Image Component optimiza automáticamente tus imágenes
   - Usa formatos modernos como WebP
   - Mantén imágenes en buena resolución (1920x1080 mínimo para fotos grandes)

2. SEO:
   - Siempre proporciona alt text descriptivo
   - Usa nombres de archivo descriptivos en español

3. Performance:
   - Comprime tus imágenes antes de subirlas (usa TinyPNG, Squoosh, etc.)
   - Para fotos grandes: 500-800KB máximo
   - Para miniaturas: 50-150KB máximo

4. Hosting de Imágenes:
   - /public/ almacena imágenes con la app
   - Para muchas imágenes, considera usar Vercel Blob o Cloudinary
*/
