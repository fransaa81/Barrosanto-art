GALERÍA CON PLACEHOLDERS - INSTRUCCIONES PARA AGREGAR IMÁGENES REALES

La galería ahora está 100% funcional con placeholders profesionales que muestran gradientes de colores.

CARACTERÍSTICAS ACTUALES:
✓ Grid interactivo de 8 obras escultóricas
✓ Visualización de detalles con 4 imágenes por obra
✓ Modal fullscreen con navegación de flechas
✓ Contador de imágenes
✓ Hover effects y transiciones suaves
✓ Completamente responsivo

PARA AGREGAR TUS PROPIAS IMÁGENES:

1. Crea la carpeta de imágenes:
   /public/images/sculptures/

2. Agrega tus fotos con estos nombres:
   - amanecer-main.jpg
   - amanecer-detail-1.jpg
   - amanecer-detail-2.jpg
   - amanecer-detail-3.jpg
   
   - la-proeza-main.jpg
   - la-proeza-detail-1.jpg
   - la-proeza-detail-2.jpg
   - la-proeza-detail-3.jpg
   
   (Y así para las otras 6 obras)

3. Actualiza /lib/artist-data.ts agregando las rutas:

   export const sculptureWorks: Artwork[] = [
     {
       id: 'amanecer',
       title: 'Amanecer',
       dimensions: '145cm x 95cm',
       description: '...',
       mainImage: '/images/sculptures/amanecer-main.jpg',
       detailImages: [
         '/images/sculptures/amanecer-detail-1.jpg',
         '/images/sculptures/amanecer-detail-2.jpg',
         '/images/sculptures/amanecer-detail-3.jpg'
       ]
     },
     ...
   ];

4. Actualiza /components/gallery-section.tsx si quieres usar Next/Image:
   
   Importa Image al inicio:
   import Image from 'next/image';
   
   Reemplaza ImagePlaceholder con Image component en el modal.

VENTAJAS DEL PLACEHOLDER ACTUAL:
- Sin dependencias de archivos externos
- Colores profesionales y variados
- Funciona perfectamente para demostración
- Fácil de reemplazar con imágenes reales
- No hay errores de archivos faltantes
