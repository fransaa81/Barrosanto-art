'use client';

import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { BiographyDialog } from '@/components/biography-dialog';
import { BookOpen, GraduationCap, Hammer } from 'lucide-react';

const aboutCards = [
  {
    title: 'Filosofía Artística',
    icon: BookOpen,
    image: '/images/uploaded_esculturas/nb2.png',
    description:
      'Mi proceso creativo es una evolución continua, en la que la obra cobra vida en el encuentro con el otro. Cada pieza es una invitación a reflexionar y a participar en un diálogo abierto entre lo tangible y lo intangible.',
    details:
      'Entiendo mi arte como un proceso en constante transformación, donde la experiencia del espectador es parte esencial de cada obra. Mi filosofía se construye desde la duda, la emoción y la búsqueda de un equilibrio entre los mundos interior y exterior.',
  },
  {
    title: 'Formación',
    icon: GraduationCap,
    image: '/images/especialidadNB.png',
    description:
      'Soy autodidacta en las artes plásticas y complemento mi formación con aprendizaje continuo de maestros, talleres y experiencias que nutren mi trabajo creativo.',
    details:
      'A lo largo de mi trayectoria, he apostado por el aprendizaje práctico y el intercambio con otros artistas. Mis talleres y encuentros con maestros me brindan herramientas técnicas y conceptuales para enriquecer mi mirada y mi oficio.',
  },
  {
    title: 'Especialidad',
    icon: Hammer,
    image: '/images/uploaded_esculturas/IMG_2886.JPG',
    description:
      'Mi especialidad abarca la escultura en metal, la pintura y el arte metalúrgico, con un fuerte interés en la materialidad, la forma y la tensión entre lo orgánico y lo industrial.',
    details:
      'Mi trabajo se centra en la tensión entre lo natural y lo manufacturado, explorando texturas, volúmenes y la máquina como metáfora. El metal y la madera funcionan como aliados para dar forma a piezas que dialogan con el espacio y el tiempo.',
  },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(113,19,207,0.05),rgba(139,92,246,0.02),rgba(255,255,255,0.55))] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Soy Nicolás Barrosanto, artista argentino originario de San Luis, Villa Mercedes (1985). Mi trayectoria se caracteriza por un enfoque autodidacta y una versatilidad creativa que ha evolucionado a lo largo de los años.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Mi práctica artística explora la interacción entre lo orgánico y lo industrial, utilizando el metal como material predominante, aunque ocasionalmente incorporo madera para enriquecer la expresión de mis piezas. Trabajo en disciplinas como escultura, dibujo y movimiento.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Busco constantemente trascender lo visual para conectar con las emociones más profundas. A través de mi arte, creo un lenguaje universal que despierte sensaciones auténticas en el espectador, invitándolo a completar el significado de cada obra desde su propia experiencia.
            </p>

            <BiographyDialog>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary/20 hover:text-primary-foreground hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer"
              >
                Leer más sobre el artista
                <span aria-hidden="true">→</span>
              </button>
            </BiographyDialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              return (
                <AlertDialog key={card.title}>
                  <AlertDialogTrigger asChild>
                    <button
                      type="button"
                      className="group h-full w-full max-w-[18rem] mx-auto rounded-[2rem] border border-transparent bg-primary p-4 text-center shadow-xl shadow-primary/20 transition hover:-translate-y-1 hover:shadow-primary/30 hover:bg-primary/90"
                    >
                      <Icon className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
                      <h3 className="text-xl font-bold text-primary-foreground">
                        {card.title}
                      </h3>
                    </button>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="!max-w-[95vw] sm:!max-w-2xl !max-h-[90vh] sm:!max-h-[75vh] overflow-y-auto p-4 sm:p-6">
                    <AlertDialogHeader>
                      <div className="relative">
                        <AlertDialogTitle>{card.title}</AlertDialogTitle>
                        <AlertDialogCancel className="absolute right-0 top-0 rounded-full border border-border bg-card/90 px-3 py-1 text-sm text-foreground hover:bg-card transition">
                          ×
                        </AlertDialogCancel>
                      </div>
                    </AlertDialogHeader>
                    <div className="relative mb-6 h-56 sm:h-72 overflow-hidden rounded-3xl border border-border bg-slate-950">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <AlertDialogDescription asChild>
                      <div className="text-foreground text-base leading-relaxed space-y-4">
                        <div>{card.description}</div>
                        <div>{card.details}</div>
                      </div>
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cerrar</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
