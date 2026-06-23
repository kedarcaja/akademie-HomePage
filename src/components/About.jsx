const cards = [
  {
    icon: '🎨',
    title: 'Malování figurek',
    text: 'Naučíme tě techniky, které oživí každou figurku – krok za krokem, srozumitelně a s radostí.',
  },
  {
    icon: '✋',
    title: 'Tvoření rukama',
    text: 'Práce rukama rozvíjí zručnost, představivost a přináší pocit, že dokážeš víc, než si myslíš.',
  },
  {
    icon: '🌱',
    title: 'Růst a soustředění',
    text: 'Dlouhodobé projekty učí trpělivost, soustředění a radost z vlastního pokroku.',
  },
]

export default function About() {
  return (
    <section id="o-akademii" className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-brand-gold text-base">◆</span>
          </div>
          <h2 className="section-title mb-5">Co je Dračí akademie?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Jsme kreativně-vzdělávací prostor od{' '}
            <span className="text-brand-parchment font-medium">Valiente Projectu</span>.
            Spojujeme svět fantasy, řemesla a učení tak, aby z každého projektu
            vznikl zážitek, na který budete pyšní.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, text }) => (
            <div
              key={title}
              className="card-parchment rounded-sm p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 bg-brand-gold/8 flex items-center justify-center text-3xl mb-5 transition-all duration-300 group-hover:border-brand-gold/60">
                {icon}
              </div>
              <h3 className="font-cinzel text-brand-parchment font-bold text-lg mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
