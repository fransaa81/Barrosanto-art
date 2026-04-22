'use client';

import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 border-b border-border shadow-[0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="hidden md:flex w-full items-center justify-between gap-4">
          <a href="#esculturas" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-lg font-semibold uppercase text-white hover:text-primary transition-all">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              <path d="M9 10h6v1a3 3 0 0 1-6 0v-1z" />
              <path d="M8 14h8v2H8z" />
              <path d="M10 16v3h4v-3" />
            </svg>
            Esculturas
          </a>
          <a href="#pinturas" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-lg font-semibold uppercase text-white hover:text-primary transition-all">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 21l3-3 6-6 2-2a2.5 2.5 0 0 0-3.5-3.5l-2 2-6 6-3 3v3h3z" />
              <path d="M14 9l5-5" />
            </svg>
            Pintura
          </a>
          <a href="#proyectos" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-lg font-semibold uppercase text-white hover:text-primary transition-all">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16v14H4z" />
              <path d="M4 9h16" />
              <path d="M8 5v4" />
            </svg>
            Proyectos
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-lg font-semibold uppercase text-white hover:text-primary transition-all">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16v14H4z" />
              <polyline points="4 5 12 13 20 5" />
            </svg>
            Contacto
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-6 py-4 grid gap-4">
            <a href="#esculturas" className="flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-semibold uppercase text-white hover:text-primary transition-all">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                <path d="M9 10h6v1a3 3 0 0 1-6 0v-1z" />
                <path d="M8 14h8v2H8z" />
                <path d="M10 16v3h4v-3" />
              </svg>
              Esculturas
            </a>
            <a href="#pinturas" className="flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-semibold uppercase text-white hover:text-primary transition-all">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 21l3-3 6-6 2-2a2.5 2.5 0 0 0-3.5-3.5l-2 2-6 6-3 3v3h3z" />
                <path d="M14 9l5-5" />
              </svg>
              Pintura
            </a>
            <a href="#proyectos" className="flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-semibold uppercase text-white hover:text-primary transition-all">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16v14H4z" />
                <path d="M4 9h16" />
                <path d="M8 5v4" />
              </svg>
              Proyectos
            </a>
            <a href="#contacto" className="flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-semibold uppercase text-white hover:text-primary transition-all">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16v14H4z" />
                <polyline points="4 5 12 13 20 5" />
              </svg>
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
