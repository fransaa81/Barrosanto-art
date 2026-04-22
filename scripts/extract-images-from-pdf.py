#!/usr/bin/env python3
"""
Script para extraer imágenes del PDF del catálogo de Barrosanto
"""

import os
import sys
from pathlib import Path

try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Instalando dependencias necesarias...")
    os.system("uv pip install pdf2image pillow")
    from pdf2image import convert_from_path
    from PIL import Image

# Rutas
pdf_path = "user_read_only_context/text_attachments/barrosanto-catalogo-cuentos-de-una-chapa-basico-(2)-(1)-p1BzU.pdf"
output_dir = "/vercel/share/v0-project/public/images/sculptures"

# Crear directorio si no existe
Path(output_dir).mkdir(parents=True, exist_ok=True)

print(f"[v0] Extrayendo imágenes del PDF: {pdf_path}")

try:
    # Convertir PDF a imágenes
    images = convert_from_path(pdf_path, dpi=150)
    print(f"[v0] Se encontraron {len(images)} páginas en el PDF")
    
    # Guardar cada página como imagen
    for i, image in enumerate(images):
        output_path = os.path.join(output_dir, f"catalogo-page-{i+1:03d}.jpg")
        image = image.convert('RGB')
        image.save(output_path, 'JPEG', quality=95)
        print(f"[v0] Guardada: {output_path} ({image.size[0]}x{image.size[1]})")
    
    print(f"[v0] ✓ Extracción completada. {len(images)} imágenes guardadas en {output_dir}")
    
except Exception as e:
    print(f"[v0] Error: {str(e)}")
    sys.exit(1)
