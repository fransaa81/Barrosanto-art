'use client';

export function HeroSection() {

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cover bg-no-repeat py-16 md:py-48 min-h-[80vh] md:min-h-[95vh]"
      style={{ backgroundImage: "url('/images/IMG_2918.JPG')", backgroundPosition: 'center 20%' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/15 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_22%),radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_35%)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 items-center">
          <div className="space-y-8 relative z-10 mt-12 md:-mt-16">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-[-0.04em] drop-shadow-[0_24px_24px_rgba(0,0,0,0.55)]">
                NICOLAS
                <span className="block text-primary">BARROSANTO</span>
              </h1>
              <p className="text-base sm:text-lg text-white font-medium">
                Artista Plástico | Escultor Metalúrgico
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-white leading-relaxed max-w-full sm:max-w-lg text-justify">
              Transformo metal en emociones. Mi obra explora la interacción entre lo orgánico e industrial, buscando trascender lo visual para conectar con las emociones más profundas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
              <a
                href="#esculturas"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transform transition-all duration-300 text-center uppercase"
              >
                EXPLORAR OBRAS
              </a>
              <a
                href="#contacto"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center uppercase"
              >
                INICIAR CONVERSACIÓN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
