'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';

interface BiographyDialogProps {
  children: ReactNode;
}

export function BiographyDialog({ children }: BiographyDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="!max-w-2xl !max-h-[75vh] overflow-y-auto bg-slate-900 border border-slate-700 text-white shadow-xl shadow-black/40">
        <AlertDialogHeader>
          <div className="relative">
            <AlertDialogCancel className="absolute right-0 top-0 rounded-full bg-slate-900 px-3 py-1 text-sm text-white hover:bg-slate-800 transition">
              ×
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>

        <div className="space-y-6 text-white text-base leading-relaxed">
          <div className="overflow-hidden rounded-3xl border border-border bg-slate-950">
            <Image
              src="/images/nib.jpeg"
              alt="Nicolás Barrosanto"
              width={900}
              height={520}
              className="object-cover w-full h-full"
            />
          </div>

          <AlertDialogTitle className="text-2xl font-semibold text-white">Biografía completa</AlertDialogTitle>

          <div className="space-y-4">
            <div>
              Nicolás Barrosanto (San Luis, Villa Mercedes, 1985) es un artista argentino cuya obra se caracteriza por su enfoque autodidacta y su versatilidad creativa. A lo largo de su trayectoria, ha desarrollado una técnica única que explora la interacción entre lo orgánico y lo industrial, con el metal como material predominante, aunque ocasionalmente incorpora la madera para enriquecer la expresión de sus piezas. Su práctica abarca disciplinas como la escultura, el dibujo y el movimiento, buscando siempre trascender lo visual para conectar con las emociones más profundas.
            </div>
            <div>
              Desde sus inicios, Barrosanto ha cultivado su arte de manera autodidacta, confiando en la experiencia práctica y en el aprendizaje de maestros y vivencias que han sido esenciales en su evolución. Su trabajo no solo refleja la conexión entre el material y la emoción, sino también una búsqueda constante por descubrir nuevas formas de expresión. A través de su arte, el artista pretende crear un lenguaje universal que trascienda las palabras y despierte sensaciones auténticas en el espectador, invitándolo a completar el significado de cada obra desde su propia experiencia.
            </div>
            <div>
              Con una mirada sensible hacia el contexto socio-cultural, su proceso creativo es entendido como una evolución continua, en la que la obra cobra vida en el encuentro con el otro. Cada pieza de Barrosanto es una invitación a reflexionar y a participar de un diálogo abierto entre lo tangible y lo intangible.
            </div>
            <div>
              Exhibiciones destacadas:
              2023: BADA, La Rural – "La envestida de Ramón. Arte Metal Argentina"
              2023: Expresiones en Metal – "Heaaa Wacha", Asociación de Artistas Escultores
              2022: Sala de Exposiciones Manuel Belgrano – "Muestra Interplanetaria Orbitando B-612" (Colectiva, Buenos Aires)
              2022: Encuentro de Escultores, San Javier, Córdoba – "El Monte que nos abraza"
              2022: Primer Expo Nacional de Arte Metal Argentino – Preseleccionado entre los mejores 40 escultores en metal (Lagos del Rocío, Buenos Aires)
              2020: Comienzo en Arte Digital de manera autodidacta
            </div>
            <div>
              Nicolás Barrosanto continúa explorando nuevas formas de expresión artística, tanto en medios tradicionales como digitales, buscando siempre expandir los límites de la escultura y su capacidad de comunicación emocional.
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Image
              src="/images/firma%20barrosanto.png"
              alt="Firma Barrosanto"
              width={220}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition">
            Cerrar
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
