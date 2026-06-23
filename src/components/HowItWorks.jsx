const steps = [
  {
    number: '1',
    icon: '🗺️',
    title: 'Vybereš si cestu',
    text: 'Zvolíš si program, který tě nejvíc láká a vytvoříš si svůj plán.',
  },
  {
    number: '2',
    icon: '▶️',
    title: 'Sleduješ lekce',
    text: 'Srozumitelné video lekce tě provedou každým krokem.',
  },
  {
    number: '3',
    icon: '🖌️',
    title: 'Tvoříš vlastníma rukama',
    text: 'Praktické úkoly, tipy a zpětná vazba tě posunou dopředu.',
  },
  {
    number: '4',
    icon: '📈',
    title: 'Postupně rosteš',
    text: 'Dokončuješ projekty, získáváš dovednosti a rosteš spolu s akademií.',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-brand-gold text-base">◆</span>
          </div>
          <h2 className="section-title mb-4">Jak akademie funguje</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Čtyři jednoduché kroky k tomu, aby ses stal skutečným tvůrcem.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map(({ number, icon, title, text }, index) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              {/* Connecting line — desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-brand-gold/40 to-brand-gold/10 z-0" />
              )}

              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 rounded-full border-2 border-brand-gold/40 bg-brand-card flex flex-col items-center justify-center mb-5 transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10">
                <span className="font-cinzel text-brand-gold font-bold text-xl leading-none">{number}</span>
                <span className="text-base leading-none mt-0.5">{icon}</span>
              </div>

              {/* Content */}
              <div className="px-4 pb-8">
                <h3 className="font-cinzel text-brand-parchment font-semibold text-sm md:text-base mb-2 tracking-wide leading-tight">
                  {title}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{text}</p>
              </div>

              {/* Arrow — mobile only */}
              {index < steps.length - 1 && (
                <div className="lg:hidden text-brand-gold/30 text-2xl mb-2">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA below steps */}
        <div className="text-center mt-12">
          <a href="#cesty" className="btn-primary">
            Vybrat si svoji cestu
          </a>
        </div>

      </div>
    </section>
  )
}
