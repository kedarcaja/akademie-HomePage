const steps = [
  {
    number: '1',
    icon: '🚪',
    title: 'Začni Hlavní branou',
    text: 'Přivítej se, prozkoumej kampus a vyber si první krůček.',
  },
  {
    number: '2',
    icon: '🧭',
    title: 'Vyber si stezku',
    text: 'Objev cestu, která tě baví, a rozvíjej se vlastním tempem.',
  },
  {
    number: '3',
    icon: '🎨',
    title: 'Tvoř a trénuj',
    text: 'Praktikuj, zkoušej, maluj, stavěj a posouvej se.',
  },
  {
    number: '4',
    icon: '🤝',
    title: 'Sdílej a roste',
    text: 'Zapoj se do komunity, projektů a výzev.',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak-projit-kampusem" className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-gold/30 to-brand-gold/50" />
          <span className="text-brand-gold/60 text-sm shrink-0">◆◆◆</span>
          <h2 className="font-cinzel text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.12em] uppercase text-brand-parchment text-center shrink-0 px-2">
            Jak projít kampusem
          </h2>
          <span className="text-brand-gold/60 text-sm shrink-0">◆◆◆</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-gold/30 to-brand-gold/50" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map(({ number, icon, title, text }, index) => (
            <div key={number} className="relative flex flex-col items-center text-center">

              {/* Arrow connector — desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 left-1/2 w-full items-center z-0">
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/30 to-brand-gold/10" />
                  <span className="text-brand-gold/40 text-lg shrink-0">›</span>
                </div>
              )}

              {/* Circle */}
              <div className="relative z-10 w-20 h-20 rounded-full border-2 border-brand-gold/30 bg-brand-card flex flex-col items-center justify-center mb-5 transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/8">
                <span className="text-xl leading-none">{icon}</span>
                <span className="font-cinzel text-brand-gold/70 font-bold text-xs mt-0.5">{number}</span>
              </div>

              <div className="px-4 pb-8">
                <h3 className="font-cinzel text-brand-parchment font-semibold text-sm mb-2 tracking-wide leading-tight">
                  {title}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{text}</p>
              </div>

              {/* Arrow — mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden text-brand-gold/30 text-2xl mb-2">↓</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
