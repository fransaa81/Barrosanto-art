# ⚡ QUICK START - Comienza en 5 minutos

## 1️⃣ Lo primero (30 segundos)
```bash
# Instala dependencias
npm install
# o
pnpm install
```

## 2️⃣ Desarrolla localmente (1 minuto)
```bash
npm run dev
# Abre http://localhost:3000
```

¡Ya ves tu página! 🎉

## 3️⃣ Personaliza el contenido (3 minutos)

### Opción A: Cambiar textos
Edita `/lib/artist-data.ts`:
```typescript
export const sculptureWorks: Artwork[] = [
  {
    id: 'tu-obra',
    title: 'Tu Título',
    dimensions: '100x80cm',
    description: 'Tu descripción...'
  }
];
```

### Opción B: Agregar tus imágenes
1. Crea carpeta `/public/images/`
2. Copia tus fotos ahí
3. Edita componentes (ver `IMAGES_SETUP.md`)

## 4️⃣ Despliega en Vercel (30 segundos)

### Rápido:
1. Ve a https://vercel.com/new
2. Conecta tu repo GitHub
3. Haz clic en "Deploy"

### Con tu dominio:
1. En Vercel: Settings → Domains
2. Agrega tu dominio personalizado
3. Actualiza DNS en tu registrador

## 🎯 Lo esencial

**Cambiar**: `/lib/artist-data.ts`
**Fotos**: `/public/images/`
**Colores**: `/app/globals.css`
**Estructura**: `/app/page.tsx`

## 📚 Documentación

- `PORTFOLIO_README.md` - Guía completa
- `IMAGES_SETUP.md` - Cómo agregar fotos
- `EXTENSION_EXAMPLES.md` - Mejoras futuras
- `DEPLOYMENT.md` - Cómo desplegar

## 🆘 Problemas comunes

**¿Las imágenes no se ven?**
→ Verifica que estén en `/public/images/` y usa rutas `/images/nombre.jpg`

**¿No se actualiza después de cambios?**
→ Recarga la página (Ctrl+Shift+R) o borra cache del navegador

**¿Cómo integro email?**
→ Ve a `EXTENSION_EXAMPLES.md` sección "AGREGAR FORMULARIO AVANZADO"

---

## 🚀 Próximos pasos

1. ✅ Cambiar contenido en `artist-data.ts`
2. ✅ Agregar tus imágenes
3. ✅ Personalizar colores si lo deseas
4. ✅ Probar en móvil
5. ✅ Desplegar en Vercel
6. ✅ Apuntar dominio personalizado

---

**¿Necesitas más ayuda?**
Lee los archivos `.md` en la carpeta raíz. Están escritos para principiantes.

¡Diviértete creando! 🎨
