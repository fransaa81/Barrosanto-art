#!/usr/bin/env python3
import os
import sys
import subprocess
from pathlib import Path

# Crear directorios necesarios
output_dir = Path('/vercel/share/v0-project/public/images/sculptures')
output_dir.mkdir(parents=True, exist_ok=True)

# Intentar múltiples rutas posibles
possible_paths = [
    '/vercel/share/v0-project/user_read_only_context/text_attachments/barrosanto-catalogo-cuentos-de-una-chapa-basico-(2)-(1)-nwaH7.pdf',
    '/vercel/share/user_read_only_context/text_attachments/barrosanto-catalogo-cuentos-de-una-chapa-basico-(2)-(1)-nwaH7.pdf',
    'user_read_only_context/text_attachments/barrosanto-catalogo-cuentos-de-una-chapa-basico-(2)-(1)-nwaH7.pdf',
]

pdf_path = None
for path in possible_paths:
    if Path(path).exists():
        pdf_path = Path(path)
        break

if pdf_path is None:
    print("[v0] PDF no encontrado en ninguna de las rutas esperadas:")
    for path in possible_paths:
        print(f"  - {path}")
    
    # Intentar buscar cualquier PDF en el sistema
    import glob
    found_pdfs = glob.glob('**/barrosanto*.pdf', recursive=True)
    if found_pdfs:
        print(f"[v0] PDFs encontrados: {found_pdfs}")
        pdf_path = Path(found_pdfs[0])
    else:
        print("[v0] No se encontró ningún PDF de barrosanto")
        sys.exit(1)

print(f"[v0] Buscando PDF en: {pdf_path}")
print(f"[v0] PDF existe: {pdf_path.exists()}")

if not pdf_path.exists():
    print(f"[v0] PDF no encontrado en {pdf_path}")
    sys.exit(1)

# Intentar instalar PyMuPDF
print("[v0] Instalando PyMuPDF...")
try:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "PyMuPDF"])
    print("[v0] PyMuPDF instalado correctamente")
except Exception as e:
    print(f"[v0] Error instalando PyMuPDF: {e}")

# Extraer imágenes con PyMuPDF
try:
    import fitz
    
    print(f"[v0] Abriendo PDF: {pdf_path}")
    doc = fitz.open(str(pdf_path))
    print(f"[v0] PDF abierto. Total de páginas: {len(doc)}")
    
    image_count = 0
    
    # Procesar cada página
    for page_num in range(len(doc)):
        print(f"[v0] Procesando página {page_num + 1}/{len(doc)}...")
        page = doc[page_num]
        
        # Obtener todas las imágenes de la página
        images = page.get_images(full=True)
        
        for img_index, img in enumerate(images):
            try:
                xref = img[0]
                pix = fitz.Pixmap(doc, xref)
                
                # Convertir a RGB si es necesario
                if pix.n - pix.alpha < 4:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                
                filename = output_dir / f'sculpture-p{page_num+1}-i{img_index+1}.jpg'
                pix.save(str(filename))
                print(f"[v0] Guardado: {filename.name}")
                image_count += 1
            except Exception as e:
                print(f"[v0] Error extrayendo imagen {img_index} de página {page_num + 1}: {e}")
        
        # Convertir página completa a imagen si no tiene imágenes extraídas
        if len(images) == 0:
            try:
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
                filename = output_dir / f'sculpture-page-{page_num+1}.jpg'
                pix.save(str(filename))
                print(f"[v0] Guardado: {filename.name}")
                image_count += 1
            except Exception as e:
                print(f"[v0] Error convirtiendo página {page_num + 1}: {e}")
    
    doc.close()
    print(f"\n[v0] ✓ Extracción completada. Total de imágenes: {image_count}")
    print(f"[v0] Imágenes guardadas en: {output_dir}")
    
except Exception as e:
    print(f"[v0] Error: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
