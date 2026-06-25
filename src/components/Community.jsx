const testimonials = [
  {
    quote: 'Díky akademii se syn naučil nevzdávat se a těšit se z malých pokroků. A hlavně — tvoří dobrovolně!',
    name: 'Martina, máma',
    child: 'Vojtík (10 let)',
    avatar: '👩',
    verified: true,
  },
  {
    photo: 'group',
    quote: 'Tady se nejde na výkon, ale na radost. To je přesně to, co jsem hledal.',
    name: 'Tomáš, táta',
    child: 'a modelář začátečník',
    avatar: '👨',
    verified: true,
  },
  {
    quote: 'Každý workshop je jako malá výprava. Odcházíme unavení, ale šťastní.',
    name: 'Eliška (13 let)',
    avatar: '👧',
    verified: true,
  },
]

export default function Community() {
  return (
    <section id="komunita" className="py-20 md:py-28" style={{ backgroundColor: '#080E18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-3">
          <p className="text-brand-text-dim text-xs tracking-[0.2em] uppercase">
            Dračí akademie je součástí komunity Valiente Project – projektu, který podporuje kreativitu, znalosti a komunitu.
            Tvoříme nástroje, organizujeme workshopy a pomáháme tisícům tvůrců po celé CZ/SK.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-gold/30 to-brand-gold/50" />
          <h2 className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-[0.12em] uppercase text-brand-parchment text-center shrink-0 px-2">
            Součást komunity Valiente Project
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-gold/30 to-brand-gold/50" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {testimonials.map(({ quote, name, child, avatar, verified }) => (
            <div
              key={name}
              className="card-parchment rounded-sm p-6 flex flex-col gap-4 transition-all duration-200 hover:border-brand-gold/30"
            >
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-xl shrink-0">
                  {avatar}
                </div>
                {verified && (
                  <div className="w-5 h-5 rounded-full bg-green-900/60 border border-green-700/40 flex items-center justify-center shrink-0">
                    <span className="text-green-400 text-[10px]">✓</span>
                  </div>
                )}
              </div>

              {/* Quote */}
              <p className="text-brand-text text-sm leading-relaxed flex-1 italic">
                „{quote}"
              </p>

              {/* Name */}
              <div>
                <p className="text-brand-parchment text-xs font-semibold">— {name}</p>
                {child && <p className="text-brand-text-dim text-[11px]">{child}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom brand line */}
        <div className="border-t border-brand-border pt-8 text-center space-y-2">
          <p className="text-brand-text-dim text-xs tracking-widest uppercase">
            Dračí akademie je součástí Valiente Project
          </p>
          <p className="text-brand-text-muted text-xs max-w-xl mx-auto">
            Projektu, který podporuje kreativitu, znalosti a komunitu.
            Tvoříme nástroje, organizujeme workshopy a pomáháme tisícům tvůrců po celé CZ/SK.
          </p>
        </div>

      </div>
    </section>
  )
}
