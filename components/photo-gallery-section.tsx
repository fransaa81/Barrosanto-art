'use client';

import { useState } from 'react';

interface PhotoGallerySectionProps {
  id: string;
  title: string;
  subtitle: string;
  photos: Array<string | null>;
  gridClassName?: string;
  backgroundClassName?: string;
  showNumber?: boolean;
  showNumberIndices?: number[];
}

export function PhotoGallerySection({ id, title, subtitle, photos, gridClassName, backgroundClassName, showNumber = true, showNumberIndices }: PhotoGallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id={id} className={`relative py-20 md:py-32 ${backgroundClassName ?? 'bg-[linear-gradient(270deg,#fafafa_0%,#f1f1f1_72%,#e6e6e6_100%)]'}`}>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title} <span className="text-primary">{subtitle}</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary"></div>
        </div>

        <div className={`${gridClassName ?? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'} gap-4`}>
          {photos.map((photo, index) => (
            <button
              key={`slot-${index}`}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-border bg-slate-100 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
            >
              {photo ? (
                <div className="relative h-full w-full">
                  <img
                    src={photo}
                    alt={`Obra ${subtitle} ${index + 1}`}
                    className={`h-full w-full object-cover ${index >= 10 && index <= 15 ? 'object-top' : ''}`}
                    style={index === 13 || index === 14 ? { objectPosition: 'center 65%' } : undefined}
                  />
                  {(showNumber || showNumberIndices?.includes(index)) && (
                    <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                      {index + 1}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-sm font-semibold text-slate-500">
                  {(showNumber || showNumberIndices?.includes(index)) ? (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-slate-300 bg-white text-2xl text-slate-700">
                    {index + 1}
                  </div>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-slate-300 bg-white text-sm text-slate-700">
                    Foto
                  </div>
                )}
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Espacio</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh]" onClick={(event) => event.stopPropagation()}>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
              aria-label="Cerrar imagen"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {photos[selectedIndex] ? (
              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-black">
                <img
                  src={photos[selectedIndex] as string}
                  alt={`Obra ${subtitle} ampliada ${selectedIndex + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-950 border border-border flex items-center justify-center">
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-slate-500 bg-slate-800 text-5xl font-bold text-slate-200">
                    {selectedIndex + 1}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Espacio reservado</p>
                  <p className="text-xs text-slate-500">Dime qué foto quieres colocar aquí</p>
                </div>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between text-white">
              <button
                onClick={() => setSelectedIndex((prev) => (prev === null ? null : (prev === 0 ? photos.length - 1 : prev - 1)))}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                aria-label="Anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-sm text-white/70">{selectedIndex + 1} / {photos.length}</span>
              <button
                onClick={() => setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length))}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
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
    </section>
  );
}
