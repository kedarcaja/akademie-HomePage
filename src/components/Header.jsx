import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#domov', label: 'Domů' },
  { href: '#o-akademii', label: 'O akademii' },
  { href: '#cesty', label: 'Cesty' },
  { href: '#pro-rodice', label: 'Pro rodiče' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-darker/95 backdrop-blur-md border-b border-brand-border shadow-xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#domov" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-full border-2 border-brand-gold/70 flex items-center justify-center text-lg group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all duration-200">
              🐉
            </div>
            <span className="font-cinzel text-brand-gold font-bold text-base md:text-lg tracking-widest uppercase">
              Dračí akademie
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Hlavní navigace">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-brand-text-muted hover:text-brand-gold transition-colors duration-200 text-sm font-medium tracking-wide relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href="#cesty" className="hidden md:inline-flex btn-outline py-2 px-4 text-xs">
              Vstoupit
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-brand-gold"
              aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-brand-border bg-brand-darker/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 space-y-1" aria-label="Mobilní navigace">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-3 text-brand-text-muted hover:text-brand-gold hover:bg-brand-card transition-all duration-200 rounded-sm font-medium tracking-wide"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-brand-border">
            <a href="#cesty" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center">
              Vstoupit do akademie
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
