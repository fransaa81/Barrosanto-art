'use client';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 py-2 text-white">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm font-medium">
          <img
            src="/images/firma%20barrosanto.png"
            alt="Firma Barrosanto"
            className="h-10 w-auto object-contain"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="mailto:nicobarrosanto@gmail.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <path d="M22 4l-10 8L2 4" />
              </svg>
              nicobarrosanto@gmail.com
            </a>
            <a href="https://instagram.com/nicolas.barrosanto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
              @nicolas.barrosanto
            </a>
            <a href="https://facebook.com/NicolaEzequielBarrosanto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Nicola Ezequiel Barrosanto
            </a>
          </div>
        </div>

        <div className="mt-3 border-t border-white/10 pt-2 text-center text-white/70 text-xs">
          <p>&copy; 2026. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
