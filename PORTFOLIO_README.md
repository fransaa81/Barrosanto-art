# Página Portafolio de Nicolás Barrosanto

Una página web elegante y profesional que showcasea el trabajo artístico de Nicolás Barrosanto, especializado en escultura metalúrgica.

## 🎨 Características

- **Presentación**: Sección hero con información principal del artista
- **Sobre Mí**: Biografía y filosofía artística
- **Galería de Esculturas**: Catálogo interactivo de obras escultóricas con detalles
- **Galería de Pinturas**: Catálogo interactivo de obras pictóricas
- **Proyectos**: Sección de proyectos realizados y próximos proyectos con galerías de fotos
- **Contacto**: Formulario de contacto directo
- **Diseño Responsivo**: Totalmente optimizado para móviles, tablets y desktop
- **Navegación Suave**: Scroll suave entre secciones
- **Tema Elegante**: Paleta de colores sofisticada inspirada en el arte metalúrgico

## 📁 Estructura de Archivos

```
/components
  ├── header.tsx              # Encabezado con navegación
  ├── hero-section.tsx        # Sección de presentación principal
  ├── about-section.tsx       # Sección sobre el artista
  ├── gallery-section.tsx     # Componente reutilizable para galerías
  ├── projects-section.tsx    # Sección de proyectos
  ├── contact-section.tsx     # Formulario de contacto
  └── footer.tsx              # Pie de página

/lib
  └── artist-data.ts          # Datos centralizados del artista

/app
  ├── page.tsx                # Página principal
  ├── layout.tsx              # Layout raíz
  └── globals.css             # Estilos globales y tema
```

## 🚀 Personalización

### Actualizar Información del Artista

Edita `/lib/artist-data.ts` para modificar:
- **Obras Escultóricas**: `sculptureWorks`
- **Obras Pictóricas**: `paintingWorks`
- **Proyectos Realizados**: `completedProjects`
- **Próximos Proyectos**: `upcomingProjects`
- **Información del Artista**: `artistInfo`

### Agregar Galerías de Fotos

En cada obra, hay espacios para galerías de fotos (mostrados como placeholders):
1. En la sección de esculturas/pinturas: Galería principal (3 fotos)
2. En la sección de proyectos: Galería de 3 fotos por proyecto

Para agregar imágenes reales:
1. Copia las imágenes a `/public/images/`
2. Actualiza los componentes correspondientes para mostrar las imágenes

### Personalizar Colores

Los colores están definidos en `/app/globals.css` usando tokens de diseño:
- `--primary`: Color principal (gris oscuro)
- `--accent`: Color de acento (dorado)
- `--secondary`: Color secundario (marrón cálido)

## 📸 Agregar Imágenes

### Estructura recomendada:
```
/public/images
  ├── hero/
  ├── sculptures/
  ├── paintings/
  └── projects/
```

### Ejemplo de integración:
```tsx
// En gallery-section.tsx o projects-section.tsx
<Image 
  src="/images/sculptures/amanecer.jpg" 
  alt="Escultura Amanecer"
  width={600}
  height={400}
/>
```

## 🎯 Próximas Mejoras Sugeridas

1. **Integración de Imágenes**: 
   - Agregar fotos reales de las obras
   - Implementar lightbox para visualización en galería completa

2. **Backend de Contacto**:
   - Conectar formulario a servicio de email (SendGrid, Resend, etc.)
   - Guardar mensajes en base de datos

3. **Blog/Noticias**:
   - Sección de novedades y actualizaciones

4. **SEO Mejorado**:
   - Meta tags dinámicos por página
   - Structured data (Schema.org)

5. **Modo Oscuro**:
   - Toggle para cambiar entre tema claro y oscuro

6. **Multidioma**:
   - Versión en inglés de la página

## 🛠️ Tecnologías Utilizadas

- **Next.js 16**: Framework React
- **TypeScript**: Type safety
- **Tailwind CSS**: Estilos utilities
- **Vercel**: Hosting

## 📝 Licencia

Página creada para Nicolás Barrosanto - 2026

## 💬 Contacto

- Email: nicobarrosanto@gmail.com
- Instagram: @nicolas.barrosanto
