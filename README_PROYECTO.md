README.md para la raíz del proyecto

# 🎨 Portafolio Digital - Nicolás Barrosanto

Página web profesional y moderna para el artista plástico y escultor **Nicolás Barrosanto**, especializado en arte metalúrgico y escultura.

## 🚀 Comienza Aquí

👉 **Si tienes prisa:** Lee [`QUICK_START.md`](QUICK_START.md) (5 minutos)

👉 **Si quieres todo:** Lee [`PORTFOLIO_README.md`](PORTFOLIO_README.md)

👉 **Para desplegar:** Revisa [`DEPLOYMENT.md`](DEPLOYMENT.md)

## ✨ Características

- ✅ **Portafolio Moderno**: Galería interactiva de obras
- ✅ **Responsivo**: Funciona perfecto en móvil, tablet, desktop
- ✅ **Rápido**: Optimizado con Next.js y Tailwind
- ✅ **Profesional**: Paleta de colores elegante
- ✅ **Personalizable**: Fácil de cambiar contenido
- ✅ **SEO Ready**: Optimizado para buscadores

## 📋 Secciones de la Página

1. **Presentación** - Introducción del artista con CTA
2. **Sobre Mí** - Biografía y filosofía artística
3. **Obras Escultóricas** - 8 esculturas con galería interactiva
4. **Obras Pictóricas** - 6 pinturas con sistema de galería
5. **Proyectos** - Proyectos realizados y próximos
6. **Contacto** - Formulario y redes sociales
7. **Navegación** - Menú responsive con scroll suave

## 🛠 Stack Tecnológico

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Vercel** - Hosting & CI/CD

## 📁 Estructura del Proyecto

```
proyecto/
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raíz
│   └── globals.css        # Estilos globales
├── components/
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── gallery-section.tsx
│   ├── projects-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── lib/
│   └── artist-data.ts     # Datos centralizados
├── public/
│   ├── images/            # Tus imágenes aquí
│   └── ...
├── QUICK_START.md         # 👈 Comienza aquí
├── PORTFOLIO_README.md    # Guía completa
├── IMAGES_SETUP.md        # Cómo agregar fotos
├── EXTENSION_EXAMPLES.md  # Ideas de mejoras
├── DEPLOYMENT.md          # Cómo desplegar
└── package.json
```

## 🎯 Cómo Usarlo

### 1. Desarrollo Local
```bash
npm install
npm run dev
# Abre http://localhost:3000
```

### 2. Personaliza tu Contenido
Edita `/lib/artist-data.ts` y cambia:
- Nombres de obras
- Descripciones
- Dimensiones
- Proyectos
- Información personal

### 3. Agrega tus Imágenes
1. Crea `/public/images/` si no existe
2. Copia tus fotos ahí
3. Sigue las instrucciones en [`IMAGES_SETUP.md`](IMAGES_SETUP.md)

### 4. Personaliza Colores
Edita `/app/globals.css`:
- `--primary`: Color principal
- `--accent`: Color de acento
- `--secondary`: Color secundario

### 5. Despliega
```bash
git push origin main
# Vercel se redeploya automáticamente
```

## 🎨 Paleta de Colores

| Uso | Color | Valor |
|-----|-------|-------|
| Principal | Gris Oscuro | oklch(0.35 0.08 40) |
| Acento | Dorado | oklch(0.60 0.15 45) |
| Secundario | Marrón | oklch(0.65 0.12 50) |
| Background | Crema | oklch(0.98 0.01 60) |

## 📊 Contenido Incluido

**Obras Escultóricas**: 8 piezas
- Amanecer, La Proeza, Ocaso, El Vuelo de la Bestia, etc.

**Obras Pictóricas**: 6 piezas
- Paisaje Interior, Geometría Emocional, Metamorfosis, etc.

**Proyectos Realizados**: 4 proyectos
- Gauchito Gil - Basura Sagrada (2024)
- Muestra Interplanetaria (2022)
- Y más...

**Próximos Proyectos**: 2 proyectos
- Ángel en Tensión
- Residencia Artística Internacional

## 🚀 Despliegue Rápido

### En Vercel (Recomendado)
1. Push tu código a GitHub
2. Ve a https://vercel.com/new
3. Conecta tu repo
4. Haz clic en Deploy

¡Listo en 1 minuto! 🎉

### Dominio Personalizado
1. En Vercel: Settings → Domains
2. Agrega tu dominio
3. Actualiza DNS en tu registrador

## 📖 Documentación Completa

| Archivo | Para Qué |
|---------|----------|
| `QUICK_START.md` | Comenzar en 5 min |
| `PORTFOLIO_README.md` | Guía completa |
| `IMAGES_SETUP.md` | Agregar fotos |
| `EXTENSION_EXAMPLES.md` | Ampliar funciones |
| `DEPLOYMENT.md` | Desplegar |
| `PROYECTO_COMPLETADO.txt` | Resumen del proyecto |

## 🔧 Personalizaciones Comunes

### Cambiar Nombre del Artista
En `/lib/artist-data.ts`:
```typescript
export const artistInfo = {
  name: 'Tu Nombre',
  email: 'tu@email.com',
  // ...
};
```

### Agregar Nueva Obra
En `/lib/artist-data.ts`:
```typescript
export const sculptureWorks: Artwork[] = [
  // Existentes...
  {
    id: 'nueva-obra',
    title: 'Mi Nueva Obra',
    dimensions: '100x80cm',
    description: 'Descripción...'
  }
];
```

### Cambiar Email de Contacto
Busca `nicobarrosanto@gmail.com` en todo el proyecto y reemplaza.

## 🐛 Resolución de Problemas

**¿Página en blanco?**
- Verifica que tengas Node.js 18+
- Borra `node_modules` y reinstala: `rm -rf node_modules && npm install`

**¿Imágenes no se ven?**
- Verifica que estén en `/public/images/`
- Usa rutas relativas: `/images/nombre.jpg`

**¿Lento?**
- Comprime las imágenes (usa TinyPNG)
- Revisa tamaño del bundle: `npm run build`

## 📞 Contacto

- **Email**: nicobarrosanto@gmail.com
- **Instagram**: @nicolas.barrosanto
- **Ubicación**: Argentina

## 📝 Licencia

Creado para Nicolás Barrosanto © 2026

---

## 🎓 Próximas Mejoras

Sugerencias para expandir:
- [ ] Agregar blog
- [ ] Sistema de comentarios
- [ ] Newsletter
- [ ] E-commerce (venta de obras)
- [ ] Video en hero
- [ ] Animaciones avanzadas

Ver [`EXTENSION_EXAMPLES.md`](EXTENSION_EXAMPLES.md) para más ideas.

---

## 💡 Tips Finales

1. **Mantén actualizado**: Revisa tu contenido regularmente
2. **Agregue fotos grandes**: Mínimo 1920x1080 para calidad
3. **Teste en móvil**: Usa Chrome DevTools (F12)
4. **Comprime imágenes**: Usa Squoosh o TinyPNG
5. **Usa CDN**: Para muchas imágenes, considera Cloudinary

---

**¿Listo para empezar?** Lee [`QUICK_START.md`](QUICK_START.md) ahora. ⚡

Hecho con ❤️ para Nicolás Barrosanto
