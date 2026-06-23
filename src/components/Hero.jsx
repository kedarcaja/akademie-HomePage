export default function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-darker"
      aria-label="Úvodní sekce"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-brand-darker via-brand-darker/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold/4 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-brand-red/8 blur-3xl" />

        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,148,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,58,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Hero image */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 lg:w-1/2">
          <div className="w-full h-full bg-gradient-to-l from-transparent via-brand-darker/40 to-brand-darker">
            <img
              src="/img/hero.jpg"
              alt="Dítě malující fantasy figurku u pracovního stolu s drakem"
              className="w-full h-full object-cover opacity-85"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-40">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-medium font-inter">
              Valiente Project
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-parchment leading-tight mb-6">
            Místo, kde se<br />
            <span className="text-brand-gold">z první figurky</span><br />
            stává dobrodružství.
          </h1>

          {/* Subheading */}
          <p className="text-brand-text text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
            Učíme děti i dospělé tvořit rukama, malovat figurky,
            soustředit se a <span className="text-brand-parchment font-normal">nebát se chyb</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cesty" className="btn-primary">
              <span>🐉</span>
              Vstoupit do akademie
            </a>
            <a href="#jak-to-funguje" className="btn-outline">
              Jak to funguje
              <span className="text-xs">›</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {['🧑', '👧', '🧒', '👦'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-brand-card border-2 border-brand-border flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-brand-text-muted text-sm">
              Stovky tvůrců už<br />
              <span className="text-brand-parchment font-medium">začaly svoji cestu</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-brand-gold/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-gold/40 to-transparent" />
      </div>
    </section>
  )
}
