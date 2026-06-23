const benefits = [
  {
    icon: '✋',
    title: 'Jemná motorika',
    text: 'Každý tah štětcem zpřesňuje pohyby ruky.',
  },
  {
    icon: '🧘',
    title: 'Soustředění',
    text: 'Tvorba vyžaduje klid a přítomnost — a právě to rozvíjí.',
  },
  {
    icon: '🔄',
    title: 'Práce s chybou',
    text: 'Chyba není konec. Je to součást procesu, ze které se nejvíc učíme.',
  },
  {
    icon: '💡',
    title: 'Kreativita',
    text: 'Vlastní rozhodnutí o barvách, stylu a příběhu figurky.',
  },
  {
    icon: '🏆',
    title: 'Radost z dokončení',
    text: 'Dokončený projekt je konkrétní důkaz toho, co dokážeš.',
  },
]

export default function Skills() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#0D1520' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-medium">
                Víc než figurky
              </span>
            </div>
            <h2 className="section-title mb-5">
              Nejde jen<br />o figurky
            </h2>
            <p className="text-brand-text-muted text-base md:text-lg leading-relaxed mb-6">
              Figurky jsou nástroj. Skutečným cílem je naučit se soustředit,
              vydržet, pracovat s chybou a dokončovat věci.
            </p>
            <p className="text-brand-text-muted text-base leading-relaxed">
              Každý tah štětcem je malý krok k větší trpělivosti, kreativitě
              a sebejistotě — dovednostem, které se hodí v tvorbě i v životě.
            </p>
          </div>

          {/* Right — benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ icon, title, text }) => (
              <div
                key={title}
                className={`card-parchment rounded-sm p-5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${
                  benefits.indexOf({ icon, title, text }) === 4 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="text-2xl shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3 className="font-cinzel text-brand-parchment font-semibold text-sm mb-1 tracking-wide">
                    {title}
                  </h3>
                  <p className="text-brand-text-muted text-xs leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
