'use client';

import Image from 'next/image';
import { useState } from 'react';
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

interface Project {
  id: string;
  title: string;
  year: string;
  status: 'completed' | 'upcoming';
  description: string;
  location?: string;
  image?: string;
  photos?: string[];
  modalPhotos?: string[];
}

interface ProjectsSectionProps {
  completedProjects: Project[];
  upcomingProjects: Project[];
}

export function ProjectsSection({ completedProjects, upcomingProjects }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<'completed' | 'upcoming'>('completed');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const projects = activeTab === 'completed' ? completedProjects : upcomingProjects;

  return (
    <section id="proyectos" className="bg-[linear-gradient(270deg,#a8a6a6_0%,#d1d0d0_72%,#f6f6f6_100%)] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proyectos <span className="text-accent">Destacados</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'completed'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Proyectos Realizados
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'upcoming'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Próximos Proyectos
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="overflow-hidden rounded-[1.5rem] border border-border bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur-xl transition hover:border-accent hover:shadow-accent/10 group">
              <div className="relative h-80 overflow-hidden">
                {project.image && (
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(project.image ?? null)}
                    className="absolute inset-0 z-10"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  </button>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                {project.image && <div className="absolute inset-0 bg-black/10" />}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.08),_transparent_40%)]"></div>
              </div>

              <div className="px-6 py-3 border-t border-border bg-slate-950/5 text-center">
                <p className="text-base font-semibold text-foreground">{project.title}</p>
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3">Proyecto</p>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    {project.location && (
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    )}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    project.status === 'completed'
                      ? 'border-primary/20 bg-primary/5 text-primary'
                      : 'border-accent/20 bg-accent/5 text-accent'
                  }`}>
                    {project.status === 'completed' ? 'Realizado' : 'Próximo'}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{project.year}</p>
                <p className="text-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[1, 2, 3].map((i) => (
                    project.photos?.[i - 1] ? (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedPhoto(project.photos?.[i - 1] ?? null)}
                        className="relative aspect-square rounded-3xl overflow-hidden border border-border cursor-pointer"
                      >
                        <Image
                          src={project.photos[i - 1]}
                          alt={`${project.title} - Foto ${i}`}
                          fill
                          className="object-cover object-center"
                        />
                      </button>
                    ) : (
                      <div
                        key={i}
                        className="aspect-square rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-700/80 to-slate-900/80 border border-border flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        Foto {i}
                      </div>
                    )
                  ))}
                </div>

                {project.id === 'gauchito-gil' ? (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="w-full bg-primary text-primary-foreground py-2 rounded font-semibold hover:opacity-90 transition-opacity text-sm">
                        Ver Detalles
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="!max-w-3xl !max-h-[80vh] overflow-y-auto">
                      <AlertDialogHeader>
                        <div className="relative">
                          <AlertDialogTitle>{project.title}</AlertDialogTitle>
                          <AlertDialogCancel className="absolute right-0 top-0 rounded-full border border-border bg-card/90 px-3 py-1 text-sm text-foreground hover:bg-card transition">
                            ×
                          </AlertDialogCancel>
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogDescription asChild>
                        <div className="space-y-6 text-foreground text-base leading-relaxed">
                          <div>
                            Una obra colectiva que transforma residuos en símbolos de fe y consumo. Recicladores recolectarán desechos urbanos para que el escultor Nicolás Barrosanto construya una estatua del Gauchito Gil, ensamblando chapa y vistiendo la figura con objetos descartados.
                          </div>
                          <div>
                            La obra reflexiona sobre la devaluación de la fe en un mundo dominado por el consumo, revelando, a diferentes distancias, la dualidad entre lo sagrado y lo desechado. Paula Kleiman documentará el proceso a través de entrevistas y un seguimiento de la construcción, generando piezas audiovisuales que acompañen el recorrido de la escultura.
                          </div>
                          <div>
                            Este proyecto resignifica lo descartado: lo que nadie valora puede transformarse en algo sagrado. El material de la obra proviene de residuos urbanos seleccionados por recicladores, y cada objeto se integra como parte de la figura, cuestionando el valor de los bienes y la fe en un contexto consumista.
                          </div>
                          <div>
                            Metodología:
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                              <li>Entrega de una bolsita a cada reciclador para acompañar su recorrido.</li>
                              <li>Selección de objetos descartados que representen el consumo y su desecho.</li>
                              <li>Transformación de los residuos en arte, ensamblando las piezas en una escultura del Gauchito Gil.</li>
                              <li>Documentación de entrevistas con recicladores sobre fe, dinero y su relación con el consumo.</li>
                              <li>Exposición de la obra y estreno de las piezas audiovisuales en redes sociales.</li>
                            </ul>
                          </div>
                          <div>
                            Realización técnica: la estructura se conformará con un esqueleto metálico de hierro y alambre, con una cabeza de chapa batida que le otorgue identidad. La vestimenta se construye con objetos descartados fijados directamente a la estructura, creando una textura fragmentaria y simbólica.
                          </div>
                          <div>
                            Desde lejos, la figura se presenta como una silueta reconocible del Gauchito Gil; de cerca, revela su materialidad reciclada, reforzando la tensión entre fe, consumo y el valor de lo descartado.
                          </div>
                          <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
                            {project.modalPhotos?.map((photo) => (
                              <button
                                type="button"
                                key={photo}
                                onClick={() => setSelectedPhoto(photo)}
                                className="overflow-hidden rounded-3xl border border-border bg-slate-950 aspect-[9/16] max-h-72 relative cursor-pointer"
                              >
                                <Image src={photo} alt={`${project.title} detalle`} fill className="object-cover object-center" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </AlertDialogDescription>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cerrar</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded font-semibold hover:opacity-90 transition-opacity text-sm">
                    Ver Detalles
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-[85vw] h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              className="absolute right-0 top-0 z-10 rounded-full border border-border bg-card/90 px-3 py-1 text-xl text-foreground hover:bg-card pointer-events-auto"
            >
              ×
            </button>
            <div className="w-full h-full overflow-hidden rounded-3xl bg-slate-950">
              <Image
                src={selectedPhoto}
                alt="Imagen ampliada"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
