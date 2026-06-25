export default function FinalCTA() {
  return (
    <section
      id="zacni-tady"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #06080D 0%, #0D1520 50%, #06080D 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-gold/3 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-red/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,148,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,58,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-brand-gold/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-brand-gold/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-brand-gold/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-brand-gold/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-medium font-inter">
                Vstupní brána
              </span>
            </div>

            <h2 className="font-cinzel font-bold text-brand-parchment leading-tight mb-2">
              <span className="block text-2xl sm:text-3xl md:text-4xl">Nevíš, kde začít?</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl text-brand-gold">Vstup hlavní branou.</span>
            </h2>

            <p className="text-brand-text text-base md:text-lg leading-relaxed mt-5 mb-8 max-w-md font-light">
              Každá cesta v akademii začíná na stejném místě — u Hlavní brány.
              Prozkoumej, co kampus nabízí, vyber si svůj první krok a začni tvořit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#akademie" className="btn-primary">
                <span>🚪</span>
                Vstoupit hlavní branou
              </a>
              <a href="#kampus" className="btn-outline">
                Prozkoumat kampus
                <span className="text-xs">›</span>
              </a>
            </div>

            <p className="mt-6 text-brand-text-dim text-xs italic">
              Bez závazků · Začni hned · Valiente Project
            </p>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden ring-1 ring-brand-gold/20 shadow-2xl shadow-black/60 mx-auto max-w-md lg:max-w-none">
              <img
                src="https://kedarcaja.github.io/akademie-HomePage/img/hero.jpg"
                alt="Hlavní brána do Dračí akademie"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center bg-black/50 backdrop-blur-sm px-4 py-3 rounded-sm border border-brand-gold/30">
                <p className="font-cinzel text-brand-gold text-sm font-bold">Hlavní brána</p>
                <p className="text-brand-text-dim text-xs mt-1">Každá velká cesta začíná prvním krokem.</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-brand-gold/3 rounded-full blur-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}
