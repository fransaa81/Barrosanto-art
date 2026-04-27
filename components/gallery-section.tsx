'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  dimensions: string;
  description?: string;
  mainImage?: string;
  detailImages?: string[];
  color?: string;
}

interface GallerySectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: GalleryItem[];
  color?: 'primary' | 'accent';
}

// Componente de imagen placeholder con gradiente
function ImagePlaceholder({ title, index }: { title: string; index?: number }) {
  const gradients = [
    'bg-gradient-to-br from-blue-600 to-purple-600',
    'bg-gradient-to-br from-purple-600 to-pink-600',
    'bg-gradient-to-br from-pink-600 to-red-600',
    'bg-gradient-to-br from-red-600 to-orange-600',
    'bg-gradient-to-br from-orange-600 to-yellow-600',
    'bg-gradient-to-br from-green-600 to-teal-600',
  ];
  
  const gradientClass = gradients[(index ?? 0) % gradients.length];
  
  return (
    <div className={`w-full h-full ${gradientClass} flex items-center justify-center`}>
      <div className="text-center text-white">
        <div className="text-4xl mb-2">🎨</div>
        <p className="font-semibold text-sm">{title}</p>
      </div>
    </div>
  );
}

export function GallerySection({ id, title, subtitle, items, color = 'primary' }: GallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const selectedWork = items.find(item => item.id === selectedItem);
  const selectedWorkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedWorkRef.current) {
      selectedWorkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedItem]);

  const accentClass = color === 'primary' ? 'text-primary' : 'text-accent';
  const sectionBackground = id === 'esculturas'
    ? 'bg-[url(/images/uploaded_esculturas/IMG_2856.JPG)] bg-cover bg-center'
    : color === 'primary'
      ? 'bg-[linear-gradient(270deg,#a8a6a6_0%,#d1d0d0_72%,#f6f6f6_100%)]'
      : 'bg-[linear-gradient(90deg,rgba(139,92,246,0.14),rgba(255,255,255,0.95))]';
  
  const allImages = selectedWork?.mainImage 
    ? [selectedWork.mainImage, ...(selectedWork.detailImages || [])]
    : selectedWork?.detailImages || [];

  return (
    <section id={id} className={`relative ${sectionBackground} py-20 md:py-32`}>
      {id === 'esculturas' && <div className="absolute inset-0 bg-white/40 pointer-events-none" />}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title} <span className={accentClass}>{subtitle}</span>
          </h2>
          <div className={`w-16 h-1 rounded-full ${color === 'primary' ? 'bg-primary' : 'bg-accent'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="space-y-3">
              <button
                onClick={() => setSelectedItem(item.id)}
                className={`block w-full relative aspect-square rounded-[1.5rem] overflow-hidden border-2 transition-all duration-300 cursor-pointer group ${
                  selectedItem === item.id
                    ? color === 'primary' ? 'border-primary scale-105 shadow-2xl shadow-primary/20' : 'border-accent scale-105 shadow-2xl shadow-accent/20'
                    : color === 'primary' ? 'border-border hover:border-primary' : 'border-border hover:border-accent'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 pointer-events-none"></div>
                <div className="w-full h-full relative overflow-hidden bg-slate-950">
                  {item.mainImage ? (
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      fill
                      style={
                        item.id === 'el-vuelo'
                          ? { objectPosition: '80% 30%' }
                          : item.id === 'la-proeza'
                          ? { objectPosition: 'center 10%' }
                          : undefined
                      }
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={selectedItem === item.id}
                    />
                  ) : (
                    <ImagePlaceholder title={item.title} />
                  )}
                  {id === 'esculturas' ? (
                    <div className="absolute inset-x-0 bottom-0 rounded-b-[1.5rem] bg-black/75 px-3 py-2 shadow-xl shadow-black/25 backdrop-blur-sm">
                      <p className="text-sm font-semibold text-white leading-tight tracking-wide">
                        {item.title}
                      </p>
                    </div>
                  ) : (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-slate-200/80">{item.dimensions}</p>
                    </div>
                  )}
                </div>
              </button>
              {id !== 'esculturas' && (
                <p className="text-left text-sm font-semibold text-foreground">
                  {item.title}
                </p>
              )}
            </div>
          ))}
        </div>

        {selectedWork && (
          <div
            ref={selectedWorkRef}
            className="mt-12 rounded-[2rem] border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/10 p-6 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {selectedWork.mainImage && (
                  <button
                    onClick={() => setSelectedImageIndex(0)}
                    className="relative w-full aspect-video rounded-lg overflow-hidden border border-border hover:border-primary transition-all cursor-pointer group mb-6"
                  >
                    <Image
                      src={selectedWork.mainImage}
                      alt={selectedWork.title}
                      fill
                      style={
                        selectedWork.id === 'el-vuelo'
                          ? { objectPosition: '80% 30%' }
                          : selectedWork.id === 'la-proeza'
                          ? { objectPosition: 'center 10%' }
                          : undefined
                      }
                      className="object-cover group-hover:scale-105 transition-transform"
                      priority
                    />
                  </button>
                )}
                
                {selectedWork.detailImages && selectedWork.detailImages.length > 0 ? (
                  <div className={`grid gap-3 ${
                    selectedWork.detailImages.length === 1
                      ? 'grid-cols-1'
                      : selectedWork.detailImages.length === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-3'
                  }`}>
                    {selectedWork.detailImages.map((image, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImageIndex(i + 1)}
                        className="relative aspect-square rounded-lg overflow-hidden border border-border hover:border-primary transition-all cursor-pointer group"
                      >
                        <Image
                          src={image}
                          alt={`${selectedWork.title} - Detalle ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center text-xs text-muted-foreground"
                      >
                        Foto {i}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{selectedWork.title}</h3>
                  <p className={`${accentClass} font-semibold mb-4`}>{selectedWork.dimensions}</p>
                </div>

                {selectedWork.description && (
                  <div>
                    <p className="text-foreground leading-relaxed">{selectedWork.description}</p>
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Técnica</p>
                  <p className="font-semibold text-foreground">Metal ensamblado</p>
                </div>

                <a href="#contacto" className="inline-flex w-full items-center justify-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Solicitar Información
                </a>
              </div>
            </div>
          </div>
        )}

        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImageIndex(null)}
          >
            <div 
              className="relative max-w-4xl w-full max-h-screen cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {allImages.length > 0 && selectedImageIndex < allImages.length && (
                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                  <Image
                    src={allImages[selectedImageIndex]}
                    alt="Imagen ampliada"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}

              <div className="flex justify-between items-center mt-4 text-white">
                <button
                  onClick={() => setSelectedImageIndex((prev) => prev === 0 ? (allImages.length - 1) : (prev ?? 0) - 1)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Anterior"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <span className="text-sm text-white/70">
                  {((selectedImageIndex ?? 0) + 1)} / {allImages.length}
                </span>

                <button
                  onClick={() => setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % allImages.length)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Siguiente"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
