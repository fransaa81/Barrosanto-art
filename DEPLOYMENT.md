# 🚀 GUÍA DE DESPLIEGUE - Página Nicolás Barrosanto

## Opción 1: Desplegar en Vercel (Recomendado - 2 minutos)

### Paso 1: Preparar el proyecto
```bash
# Si aún no has instalado dependencias
npm install
# o
pnpm install
```

### Paso 2: Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Crea un nuevo repositorio (e.g., "barrosanto-portfolio")
3. Sigue las instrucciones para pushear el código

### Paso 3: Desplegar en Vercel
1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Conecta tu repositorio GitHub
4. Vercel detectará automáticamente Next.js
5. Haz clic en "Deploy"

¡Listo! Tu sitio estará en línea en ~1 minuto.

### Actualizar dominio personalizado
1. En Vercel, ve a "Settings" → "Domains"
2. Agrega tu dominio personalizado
3. Actualiza los registros DNS en tu registrador

---

## Opción 2: Desplegar Localmente (Para Pruebas)

```bash
# Instalar dependencias
npm install

# Correr desarrollo
npm run dev

# Tu sitio estará en http://localhost:3000
```

---

## Opción 3: Desplegar en tu propio servidor

### Compilar para producción
```bash
npm run build
npm start
```

### Con Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Con PM2 (Node.js)
```bash
npm install -g pm2
npm run build
pm2 start "npm start" --name "barrosanto-portfolio"
```

---

## Configuración Post-Despliegue

### 1. Actualizar Metadatos
En `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Nicolás Barrosanto | Artista Plástico',
  description: 'Portafolio de Nicolás Barrosanto...',
  // Agregar tu dominio real
  metadataBase: new URL('https://tu-dominio.com'),
};
```

### 2. Agregar Google Analytics
En `/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Configurar Email de Contacto
Elige una opción:

**A) Formspree (Más fácil)**
```bash
# Ve a https://formspree.io
# Crea un proyecto y obtén tu ID
# Actualiza /components/contact-section.tsx
```

**B) Resend (Recomendado para Vercel)**
```bash
npm install resend
```

**C) SendGrid**
```bash
npm install @sendgrid/mail
```

### 4. Agregar Variables de Entorno
En Vercel, ve a Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
EMAIL_FROM=contacto@tu-dominio.com
SENDGRID_API_KEY=tu_api_key_aqui
```

---

## Mantenimiento Post-Despliegue

### Actualizar Contenido
1. Edita `/lib/artist-data.ts`
2. Haz push a GitHub
3. Vercel se redeploya automáticamente (~2 min)

### Agregar Imágenes
1. Copia imágenes a `/public/images/`
2. Actualiza componentes según `IMAGES_SETUP.md`
3. Haz push a GitHub

### Monitorear Rendimiento
1. Ve al dashboard de Vercel
2. Revisa "Analytics" para rendimiento
3. Monitorea "Deployments" para cambios

---

## Resolución de Problemas

### Error: "Module not found"
```bash
# Limpia cache y reinstala
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Error: "Port already in use"
```bash
# Cambia el puerto
npm run dev -- -p 3001
```

### Imágenes no cargan en producción
1. Verifica que estén en `/public/images/`
2. Usa rutas absolutas: `/images/nombre.jpg`
3. Revisa permisos de lectura

### Slow performance en Vercel
1. Comprime imágenes más
2. Revisa tamaño de bundle en "Analytics"
3. Considera Vercel Pro para más recursos

---

## Backups y Control de Versiones

```bash
# Crear rama de desarrollo
git checkout -b dev

# Hacer cambios
git add .
git commit -m "Descripción del cambio"

# Pushear a rama dev
git push origin dev

# Cuando estés listo, merge a main
git checkout main
git merge dev
git push origin main
```

---

## URLs Importantes

- **Repositorio**: tu-usuario/barrosanto-portfolio (GitHub)
- **Vercel Dashboard**: vercel.com/dashboard
- **Dominio**: barrosanto.com (o tu dominio)
- **Email de contacto**: nicobarrosanto@gmail.com

---

## Scripts Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Start en producción
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

---

## Soporte

- **Documentación Next.js**: https://nextjs.org/docs
- **Soporte Vercel**: https://vercel.com/help
- **Documentación Tailwind**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

## Checklist Pre-Lanzamiento

- [ ] Contenido actualizado en `/lib/artist-data.ts`
- [ ] Imágenes agregadas a `/public/images/`
- [ ] Componentes actualizados para mostrar imágenes
- [ ] Links de contacto funcionando
- [ ] Formulario de contacto integrado
- [ ] Analytics configurado
- [ ] Dominio personalizado apuntando a Vercel
- [ ] Metadatos actualizados
- [ ] SEO verificado
- [ ] Mobile responsivo probado
- [ ] Links internos funcionando
- [ ] Rendimiento aceptable (>80 en Lighthouse)

---

¡Tu sitio está listo para el mundo! 🌍
