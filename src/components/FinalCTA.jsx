export default function FinalCTA() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #06080D 0%, #0D1520 50%, #06080D 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-gold/3 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-red/5 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,148,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,58,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Corner ornaments */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-brand-gold/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-brand-gold/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-brand-gold/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-brand-gold/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Dragon icon */}
        <div className="text-5xl mb-6 opacity-80">🐉</div>

        {/* Ornament */}
        <div className="ornament-divider mb-6">
          <span className="text-brand-gold text-base">◆</span>
        </div>

        <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-brand-parchment leading-tight mb-5">
          Začni svoji<br />
          <span className="text-brand-gold">tvůrčí cestu</span>
        </h2>

        <p className="text-brand-text text-lg md:text-xl leading-relaxed mb-3 max-w-xl mx-auto">
          Nemusíš být talentovaný. Stačí začít.
        </p>
        <p className="text-brand-text-muted text-base mb-10 max-w-lg mx-auto">
          Každý velký tvůrce začínal přesně tam, kde jsi teď — s jednou figurkou a touhou zkusit to.
        </p>

        <a href="#cesty" className="btn-primary text-base px-10 py-4">
          <span>🐉</span>
          Vstoupit do Dračí akademie
        </a>

        <p className="mt-6 text-brand-text-dim text-xs tracking-wide">
          Bez závazků · Začni hned · Valiente Project
        </p>
      </div>
    </section>
  )
}
