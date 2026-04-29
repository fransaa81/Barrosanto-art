'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="bg-[linear-gradient(90deg,rgba(139,92,246,0.08),rgba(255,255,255,0.96))] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ponete en <span className="text-primary">Contacto</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              ¿Te interesa una obra? ¿Querés hacer un encargo? ¿Tenés una propuesta? Me encantaría escucharte. Completá el formulario o comunicate directamente.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:nicobarrosanto@gmail.com" className="text-primary hover:underline">
                  nicobarrosanto@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Redes Sociales</h3>
                <a href="https://instagram.com/nicolas.barrosanto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline block">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                  @nicolas.barrosanto
                </a>
                <a href="https://facebook.com/NicolaEzequielBarrosanto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline block mt-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Nicolas Ezequiel Barrosanto
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Ubicación</h3>
                <p className="text-foreground">Argentina</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                placeholder="Tu mensaje..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
