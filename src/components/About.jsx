const cards = [
  {
    icon: '✋',
    title: 'Tvoření rukama',
    text: 'Práce rukama rozvíjí zručnost, představivost a přináší pohodu.',
  },
  {
    icon: '🎨',
    title: 'Malování a modely',
    text: 'Barvy, detaily a příběhy. Z obyčejného modelu vzniká svět.',
  },
  {
    icon: '🧭',
    title: 'Motivace a práce s chybou',
    text: 'Chyby jsou součástí cesty. Učí nás více než dokonalost.',
  },
  {
    icon: '⚙️',
    title: '3D tisk a technologie',
    text: 'Moderní nástroje otevírají nové možnosti. Používáme je chytře a s rozmyslem.',
  },
  {
    icon: '🤝',
    title: 'Komunita a výzvy',
    text: 'Spolu to má větší sílu. Výzvy, projekty a přátelství, které vydrží.',
  },
]

export default function About() {
  return (
    <section id="co-je-akademie" className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-gold/30 to-brand-gold/50" />
          <span className="text-brand-gold/60 text-sm shrink-0">◆◆◆</span>
          <h2 className="font-cinzel text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.12em] uppercase text-brand-parchment text-center shrink-0 px-2">
            Co je Dračí akademie?
          </h2>
          <span className="text-brand-gold/60 text-sm shrink-0">◆◆◆</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-gold/30 to-brand-gold/50" />
        </div>

        {/* 5 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map(({ icon, title, text }) => (
            <div
              key={title}
              className="card-parchment rounded-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 hover:border-brand-gold/30"
            >
              <div className="w-14 h-14 rounded-full border border-brand-gold/30 bg-brand-gold/8 flex items-center justify-center text-2xl mb-4 transition-all duration-300 hover:border-brand-gold/60">
                {icon}
              </div>
              <h3 className="font-cinzel text-brand-parchment font-bold text-sm mb-2 tracking-wide leading-tight">
                {title}
              </h3>
              <p className="text-brand-text-muted text-xs leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
